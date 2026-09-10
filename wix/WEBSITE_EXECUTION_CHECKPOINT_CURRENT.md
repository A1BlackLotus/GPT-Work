# Behavioral Bridge — Website Execution Checkpoint — CURRENT

**Updated:** 2026-09-10  
**Status:** CURRENT OPERATIONAL SOURCE OF TRUTH

This is the single rolling checkpoint for finishing the canonical Behavioral Bridge website. It supersedes older dated status/priority files whenever they conflict. Historical files remain evidence only.

**Authority:** public live behavior / screenshots > live Wix state > this checkpoint > dated GitHub handoffs > older recovery material.

For anything visible, API success is not visual completion.

---

## Mission

Finish the existing Behavioral Bridge site so it is visibly polished, technically reliable, responsive, conversion-ready, search-ready, and maintainable without avoidable patch collisions.

Canonical production site:
- Wix site: Behavioral Bridge
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Public URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Wix Vibe / Picasso; Velo enabled

Canonical proof:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — years of experience

Completion labels:
- IMPLEMENTED — change made
- TECHNICALLY VERIFIED — code/API/data proves intended state
- VISUALLY VERIFIED — actual public render inspected and correct
- FUNCTIONALLY VERIFIED — visitor flow actually tested
- FINISHED / FROZEN — every required gate passes

---

## Stable / protect

### Core page designs
Home, SAT, EF, About, and Results major design work was previously accepted. Do not redesign them absent a verified regression; factual, responsive, technical, image, navigation, and SEO fixes remain allowed.

### Route aliases
Complete:
- `/sat-prep` → `/sat-tutoring`
- `/executive-function` → `/ef-specialized-support`

### Black-strip containment
`2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` — Conversion Trust Strip rev4 — **DISABLED**. Keep disabled.

### Results proof
`245d2c02-9ebb-4b3f-b863-53d787d8d13c` — Results Showcase rev14 — **ENABLED**. It directly contains `5.0 / 75+ / 350+ / Nearly 14`. Near Wix embed size limit; do not add adjacent fixes to it casually.

### Proof Metrics Coherence
`0adc9e67-d1d6-43fa-bd06-abc7a923793f` — rev7 — **ENABLED / TRANSITIONAL**. Rev7 fixed the collateral `12 articles` → `Nearly 14 articles` bug. Old proof literals inside this script are repair targets, not visible proof blocks.

### Core Authenticity
`73a2dd88-1c32-44e4-a5a1-4e031f95e685` — rev13 — **ENABLED**. Includes supported About credential wording and About-only Nearly-14 repair. Never revive its retired SAT renderer.

### Consultation safety
`b3ececaf-c221-4ad1-9590-4aa112486e11` — rev27 — **ENABLED / BODY_START / SAFETY-CRITICAL**. Do not disable blindly.

### Flagship article
Existing unpublished Wix draft: `3f20ae47-004c-4171-995f-893e7c102f43`. Do not duplicate or publish its one-paragraph staging shell.

Four flagship graphics are already READY / OK in Wix Media; do not regenerate absent a real defect:
- Pipeline `445f86_3e2818d5b4d0490995d87782c56974c7~mv2.png`
- Decision Loop `445f86_d8b0f8cba046437dac159d5663b77fed~mv2.png`
- Error Repair `445f86_b528c44c67b74af894bc0a84ab85c7ae~mv2.png`
- Hyperfocus `445f86_ee5297959a624790adea9d4fea83de86~mv2.png`

---

## P0.1 — Results visible repair

**IMPLEMENTED / TECHNICALLY VERIFIED / VISUAL ACCEPTANCE PENDING**

Results Visual Repair `4bb4aa54-4956-4a44-af3d-6dbf0ca78d54` is rev2 / enabled.

It:
- changes the panoramic 1600×371 hero from forced `cover` crop toward `contain` on Results;
- retains narrow response-time text cleanup;
- can hide a small chat/assistant/messaging iframe container only on `/results` and restore it elsewhere.

Still requires public desktop/tablet/mobile inspection for hero composition, response-time box removal, proof integrity, black-strip absence, and spacing regressions. Browser connector is currently unavailable.

---

## P0.2 — Resources image consistency

**ACTIVE PROVIDER LAYER REPAIRED / NATIVE CATALOG + VISUAL ACCEPTANCE PENDING**

Published Wix Blog covers are correct:
- Homework post `21945cef-4d24-4bc8-8b4b-6001ca7d7404` → `445f86_e228e6e7b201423b82c59cafb022bbc3~mv2.png`
- Motivation post `c07b0cad-b856-4e4a-8afd-a07db6944e3e` → `445f86_6476bad82bd140e8a4d24dff440a3a67~mv2.png`

All 32 custom embeds were scanned. The only enabled old-cover references were repaired:
- Homework Article Content V2 `a18756c1-5508-4c55-85a1-4bbb1d38a192`: rev1 → rev2, current cover
- Motivation Article Content V2 `0c3d4f1e-ff9f-4ead-b67e-d369bc9fee07`: rev1 → rev2, current cover

Disabled historical EF extension `965f4e07-3f81-4ea0-a03d-7501444795dc` still contains old IDs intentionally; it remains disabled.

Astra previously saw the old Homework asset in native Resources and identified `src/lib/resourceArticles.ts`. That deployed Vibe source is not in `GPT-Work`; no safe native-source mutation path is currently available through connected Wix REST tools. Native catalog + reader image behavior + public desktop/mobile rendering remain open.

---

## P0.3 — Sitewide proof acceptance

**TECHNICALLY VERIFIED / VISUAL ACCEPTANCE PENDING**

All 32 custom embeds were scanned. No enabled evidence-supported stale proof block requires mutation. Results real proof is correct. `12+ years`, `75++`, `350++`, `60`, `240`, and `300` in enabled proof/authenticity code are intentional search/repair targets. The old trust strip containing `60+ / 240+ / 12+ YEARS` remains disabled.

Still requires live visual check of Home/SAT/About/Results/Resources for stale `12 years`, old metrics, double-plus, or black-strip regression.

---

## P0.4 — Consultation lead reliability

**BACKEND FUNCTIONALLY VERIFIED / PUBLIC NATIVE FRONTEND + FAILOVER ACCEPTANCE PENDING**

### Form
Form ID `b692e647-b20c-45b0-ae1d-2530df030907`, now **rev10 / enabled**.

Nine inputs exist plus submit display:
- first name — required
- last name — required
- email — required
- phone — optional
- student name — required
- student grade — required
- goals — required
- availability — optional
- service — optional in Wix schema

Do not repeatedly force `service` required through speculative schema updates; Wix currently stores it optional. Enforce service selection in the public/native frontend when that source is available.

### Spam protection — repaired this execution
Proven defect found: `spamFilterProtectionLevel` was `NONE`.

Safely updated form rev9 → **rev10** with `BASIC` spam filtering. Mutation verification confirmed:
- spam `NONE` → `BASIC`
- field count 10 → 10
- same field IDs preserved
- all required flags preserved
- form remains enabled
- THANK_YOU_MESSAGE submit behavior preserved

### Notification automation
Automation `2695710a-a944-4fbd-9fe6-a7341b8cf53f`, rev2:
- ACTIVE
- not archived
- exact form-ID trigger filter
- owner notification to `Ryan_Carvalho@behavioralbridge.org`
- Wix Validate Automation result: **VALID**, zero trigger/action/automation validation errors

### Two controlled backend QA submissions — PASSED
Two clearly labeled TEST ONLY records were created through Wix Forms and then confirmed:
- QA1 `3d710667-b894-4313-836b-67f7a6e264d7`
- QA2 `e5d28e74-3af3-4ad2-a458-5b85318a9d1a`

Results:
- baseline form submissions: 4
- after tests: 6
- exactly two new records
- both CONFIRMED
- both contain all nine expected input targets, including `service_bb`
- no duplicate record created

Gmail verification:
- QA1 matched exactly one Wix Forms notification message: `1a08d3011630330b`
- QA2 matched exactly one Wix Forms notification message: `1a08d300e11b45eb`
- both arrived at 2026-09-10 21:18:51 UTC with subject `Behavioral Bridge Consultation Form got a new submission`

Therefore the **Wix storage + confirmation + automation + owner-email backend chain is functionally verified**.

### Critical public-path discovery
Rev27 currently intercepts consultation submission unconditionally on consultation routes. Its capture-mode click and form-submit handlers call `preventDefault()`, `stopPropagation()`, and `stopImmediatePropagation()`, then open `buildMail(...)` via `location.href`.

Its own UI note says the button is a temporary delivery safeguard that opens the visitor's email app.

Meaning: the backend is healthy, but while rev27 attaches successfully, visitors are intentionally diverted to email instead of using Wix native submission.

Do **not** simply disable rev27. The injected/custom consultation fields may not all be wired into native Wix form state, and browser/native Vibe source access is unavailable. Blindly removing interception could lose real leads.

Remaining P0.4 acceptance:
- public native nine-field submission from the actual page;
- frontend service validation;
- in-flight duplicate guard;
- values preserved on failure;
- success shown only after confirmed Wix record;
- email fallback activates only on failure rather than blocking healthy native submission;
- real desktop/mobile public acceptance.

Until those can be verified, keep rev27 as the safety net and classify the public consultation route as **email-first safety mode**, not native-finished.

---

## P1.1 — Native Resources + article reader

**NEXT SAFE EXECUTION TARGET**

All 12 canonical article routes previously content-load checked with matching H1 + substantial content. Full reader acceptance remains open for:
- heading hierarchy and paragraph spacing
- lists / blockquotes / emphasis / links
- images and captions
- related navigation / return to Resources
- loading / not-found / API-failure states
- stale-request cancellation
- rapid slug switching and back/forward
- true desktop/mobile visual acceptance

Old overlay Resources Router / Article Reader remain disabled unless deliberate rollback is chosen.

---

## P1.2 — Navigation / header / footer / responsive

Open: desktop header, mobile menu, duplicate logo/wordmark, footer wrapping/stale content, canonical links, CTAs, overflow, image crops, sticky/fixed collisions, tablet/mobile.

## P1.3 — Front-end/back-end bug sweep

Open after known P0/P1 defects: runtime/network failures, hydration warnings, duplicate requests/listeners, runaway observers/timers, patch collisions, stale article races, hard-coded old routes/media/proof strings, duplicate submit handlers, keyboard/focus issues.

## P2.1 — Native Vibe SEO metadata

Core routes still emit weak raw-slug/generic metadata. Repair actual Vibe/head/routing layer for Home, SAT, EF, About, Results, Resources, Consultation when native source access is available.

## P2.2 — Flagship SEO article

After reader gate: transfer full GitHub body into existing draft, remove staging note, insert four READY graphics, add cover/internal links/categories/tags/related posts as appropriate, recheck College Board facts, desktop/mobile QA, publish, then index.

## P2.3 — Accessibility

After meaningful visual changes: current-public heading hierarchy, alt text, labels, contrast, keyboard navigation, focus, menu behavior, errors. Existing automated scan is partial only.

## P3 — Launch infrastructure

- `BehavioralBridge.org`: registered but not attached to current Wix account; external ownership unresolved; site is Free plan. No purchase/DNS change without owner approval.
- Google Search Console: NOT_CONNECTED / MISSING_TOKEN; needs one-time Google OAuth, then property verification + sitemap/indexing.
- Analytics/conversion: no trustworthy baseline yet; establish after reliability/SEO gates.
- External authority: eventually align Wyzant/Superprof wording while preserving platform-specific truth.

---

## Do not touch / safety

- Do not redesign frozen core pages without evidence.
- Keep Conversion Trust Strip rev4 disabled.
- Do not disable Consultation Safety rev27 until a safe native-first path is actually verified.
- Do not revive retired SAT renderer or old overlay Resources reader/router casually.
- Do not duplicate flagship Wix draft or regenerate its four graphics.
- Do not delete sites/embeds/recovery evidence without explicit destructive approval.
- Do not purchase a Wix plan/domain or change DNS without owner approval.
- `GPT-Work` is coordination/recovery, not proof of deployed native Vibe source.
- Never label API success as visual completion.

---

## Next-step protocol

Any user message equivalent to **NEXT / NEXT STEP / GO / CONTINUE** authorizes the next highest-priority coherent work unit.

For every unit: read checkpoint → inspect exact owner/layer → distinguish proven cause vs hypothesis → make smallest safe correction → technically verify → visually/functionally verify when capability exists → repair regressions → update checkpoint → stop at natural boundary.

If visual/native access is unavailable, preserve the acceptance hold and continue other safe work rather than pretending it is finished.

### Current pointer

Setup is complete.

Held for later public/native acceptance:
- P0.1 Results
- P0.2 native Resources cover/catalog layer
- P0.3 sitewide visual proof
- P0.4 public consultation native-first/failover behavior

**NEXT: P1.1 — Native Resources + article reader.**

The project continues until the full final acceptance sweep passes. Only then may it be called completely done.