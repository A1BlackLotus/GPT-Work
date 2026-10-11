import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { readFile, readdir } from 'node:fs/promises';
import { Script } from 'node:vm';
import { chromium } from 'playwright';

const labs = new URL('../behavioral-bridge/math-interactives/', import.meta.url);
let browser;
before(async () => {
  browser = await chromium.launch({
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  });
});
after(async () => { await browser?.close(); });

async function lab(t, name, width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  t.after(() => page.close());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // These self-contained pages need no external resources or production requests.
  await page.route(/https?:\/\//, route => route.abort());
  await page.setContent(await readFile(new URL(name, labs), 'utf8'));
  t.after(() => assert.deepEqual(errors, [], 'browser JavaScript errors'));
  return page;
}

test('all math-lab inline scripts parse', async () => {
  for (const name of await readdir(labs)) {
    if (!name.endsWith('.html')) continue;
    const html = await readFile(new URL(name, labs), 'utf8');
    for (const [, source] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
      new Script(source, { filename: name });
    }
  }
});

test('M007 separators do not introduce zero observations', async t => {
  const page = await lab(t, 'm007-data-transformation-lab.html');
  for (const input of ['2,4,6,', ' , 2  4\n6 , ', '2,,4,,,6']) {
    await page.locator('#data').fill(input);
    assert.deepEqual(await page.locator('#m0 span').allTextContents(), ['4', '4', '4', '1.633']);
  }
});

test('M007 preserves zero, negative values, decimals and constant transformations', async t => {
  const page = await lab(t, 'm007-data-transformation-lab.html');
  await page.locator('#data').fill('0, -2, 2.5, 1e1');
  assert.deepEqual(await page.locator('#m0 span').allTextContents(), ['2.625', '1.25', '12', '4.547']);
  await page.locator('#a').fill('0');
  await page.locator('#b').fill('-3');
  assert.deepEqual(await page.locator('#m1 span').allTextContents(), ['-3', '-3', '0', '0']);
  await page.locator('#reflect').click();
  assert.deepEqual(await page.locator('#m1 span').allTextContents(), ['-2.625', '-1.25', '12', '4.547']);
});

test('M007 empty input clears previous output', async t => {
  const page = await lab(t, 'm007-data-transformation-lab.html');
  for (const input of ['', ' , , ', 'invalid']) {
    await page.locator('#data').fill(input);
    assert.equal(await page.locator('#m0').textContent(), '');
    assert.equal(await page.locator('#m1').textContent(), '');
    assert.match(await page.locator('#explain').textContent(), /Enter at least one numeric value/);
  }
});

test('M013 zero scale draws a constant line without a vertex', async t => {
  const page = await lab(t, 'm013-function-transformation-lab.html');
  await page.locator('#a').fill('0');
  for (const [h, k] of [[-5, -3], [2, 3], [5, 0]]) {
    await page.locator('#h').fill(String(h));
    const drawing = await page.evaluate(k => {
      const ctx = document.querySelector('#g').getContext('2d');
      const points = [], arcs = [];
      const lineTo = ctx.lineTo, arc = ctx.arc;
      ctx.lineTo = function(x, y) {
        if (this.strokeStyle === '#b9913e') points.push([x, y]);
        return lineTo.call(this, x, y);
      };
      ctx.arc = function(...args) { arcs.push(args); return arc.apply(this, args); };
      const input = document.querySelector('#k');
      input.value = k;
      input.dispatchEvent(new Event('input'));
      ctx.lineTo = lineTo;
      ctx.arc = arc;
      return { points, arcs };
    }, k);
    assert.ok(drawing.points.length > 100);
    assert.ok(drawing.points.every(([, y]) => y === 260 - k * 42), 'constant y = k');
    assert.equal(drawing.arcs.length, 0, 'no unique vertex');
    assert.equal(await page.locator('#av').textContent(), '0');
    assert.equal(await page.locator('#vertex').textContent(), 'None');
    assert.equal(await page.locator('#opens').textContent(), 'neither');
    assert.equal(await page.locator('#width').textContent(), 'N/A');
    assert.match(await page.locator('#eq').textContent(), new RegExp(`y = ${k}`));
    assert.match(await page.locator('#eq').textContent(), /constant function/);
  }
});

test('M013 nonzero parabolas retain vertex, opening and width', async t => {
  const page = await lab(t, 'm013-function-transformation-lab.html');
  for (const [a, opens, width] of [[0.25, 'up', 'wider'], [-0.25, 'down', 'wider'], [1, 'up', 'parent'], [-1, 'down', 'parent'], [-2, 'down', 'narrower']]) {
    await page.locator('#a').fill(String(a));
    assert.equal(await page.locator('#vertex').textContent(), '(0, 0)');
    assert.equal(await page.locator('#opens').textContent(), opens);
    assert.equal(await page.locator('#width').textContent(), width);
  }
  await page.locator('#shift').click();
  assert.equal(await page.locator('#vertex').textContent(), '(2, 3)');
  await page.locator('#flip').click();
  assert.equal(await page.locator('#vertex').textContent(), '(-1, 2)');
  await page.locator('#base').click();
  assert.equal(await page.locator('#vertex').textContent(), '(0, 0)');
});

for (const width of [320, 375, 390, 768, 1440]) {
  test(`M015 angle rules and layout fit ${width}px`, async t => {
    const page = await lab(t, 'm015-angle-relationship-lab.html', width);
    for (const relationship of ['vertical', 'linear', 'corresponding', 'alternate', 'same']) {
      await page.locator('#rel').selectOption(relationship);
      for (const theta of [10, 72, 170]) {
        await page.locator('#theta').fill(String(theta));
        const equal = ['vertical', 'corresponding', 'alternate'].includes(relationship);
        assert.equal(await page.locator('#target').textContent(), `${equal ? theta : 180 - theta}°`);
        assert.equal(await page.locator('#rule').textContent(), equal ? 'EQUAL' : 'SUPPLEMENTARY');
        const layout = await page.evaluate(() => ({
          viewport: innerWidth,
          document: document.documentElement.scrollWidth,
          overflowingMetrics: [...document.querySelectorAll('.metric')].filter(el => el.scrollWidth > el.clientWidth).length,
        }));
        assert.ok(layout.document <= layout.viewport, JSON.stringify({ relationship, theta, ...layout }));
        assert.equal(layout.overflowingMetrics, 0, 'metric text remains within its card');
      }
    }
  });
}
