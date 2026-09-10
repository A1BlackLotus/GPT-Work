# Behavioral Bridge — Website Execution Checkpoint — CURRENT

**Created:** 2026-09-10  
**Status:** CURRENT OPERATIONAL SOURCE OF TRUTH  
**Purpose:** Single rolling checkpoint for the remaining Behavioral Bridge website completion work.

This file supersedes the *operational status/priority* portions of dated website files such as `CURRENT_STATE_2026-09-09.md`, `CURRENT_PRIORITY_EXECUTION_2026-09-09.md`, `SCREENSHOT_QA_CURRENT_2026-09-09.md`, and `LAUNCH_EXECUTION_DELTA_2026-09-10.md` whenever their state conflicts with this checkpoint. Those files remain useful evidence/history and are not deleted.

Authority remains:

**public live behavior / current screenshots > live Wix state > this checkpoint > dated GitHub handoffs > older recovery material**.

Do not infer visual success from API success. For visible tasks, public rendering is the final acceptance gate.

---

## MAIN GOAL

Finish the existing canonical Behavioral Bridge website so it is visibly polished, technically reliable, responsive, conversion-ready, search-ready, and maintainable without avoidable patch collisions.

Business path:

**SEO / referral traffic → clear positioning + credibility → useful resources → reliable consultation → qualified client**

Do not restart or redesign frozen work without a verified regression.

Canonical production Wix site:
- Behavioral Bridge
- Site ID `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Public URL `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Wix Vibe / Picasso
- Velo enabled

Canonical proof standard:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — years of experience

---

# COMPLETED / STABLE

## Core page rebuilds

Home, SAT, EF, About, and Results major design work was previously published and visually accepted. Treat design as frozen except for verified regressions, factual corrections, responsive bugs, technical cleanup, and SEO.

## Service-route aliases

Complete:
- `/sat-prep` → `/sat-tutoring`
- `/executive-function` → `/ef-specialized-support`

Do not recreate these.

## Black-strip regression containment

`2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` — Conversion Trust Strip rev4 — **DISABLED**.

It caused the intermittent black/hydration strip. Keep disabled. Do not re-enable casually.

## Results proof block

`245d2c02-9ebb-4b3f-b863-53d787d8d13c` — Results Showcase — **rev14 / ENABLED**.

It directly contains the desired proof standard:
- 5.0
- 75+
- 350+
- Nearly 14

Do not add more code to it casually; it is already approximately at Wix's custom-embed size limit.

## Blog inventory / article loading

The existing Wix Blog contains exactly 12 canonical published articles. Earlier live route testing confirmed all 12 canonical article routes load the matching H1 and substantial article content. This is **content-loading verification**, not full desktop/mobile article-reader acceptance.

## Two replacement Blog covers — backend records correct

Wix Blog currently has the intended custom cover media on both posts, with no unpublished changes:

1. Homework Initiation
- Post `21945cef-4d24-4bc8-8b4b-6001ca7d7404`
- slug `homework-initiation-executive-function`
- current Blog media `445f86_e228e6e7b201423b82c59cafb022bbc3~mv2.png`
- custom media = true

2. Motivation / Executive Function
- Post `c07b0cad-b856-4e4a-8afd-a07db6944e3e`
- slug `why-motivation-is-wrong-target-executive-function`
- current Blog media `445f86_6476bad82bd140e8a4d24dff440a3a67~mv2.png`
- custom media = true

This does **not** mean the public Resources catalog is fully fixed; see P0 below.

## Flagship graphics

All four planned flagship SEO article graphics exist in Wix Media and have completed processing (`READY` / `state: OK`). Do not regenerate unless a real defect is found.

1. SAT Performance Pipeline  
`445f86_3e2818d5b4d0490995d87782c56974c7~mv2.png`

2. SAT Decision Loop  
`445f86_d8b0f8cba046437dac159d5663b77fed~mv2.png`

3. Error Repair Loop  
`445f86_b528c44c67b74af894bc0a84ab85c7ae~mv2.png`

4. Hyperfocus Time Trap  
`445f86_ee5297959a624790adea9d4fea83de86~mv2.png`

## Flagship article staging object

Existing Wix draft — DO NOT DUPLICATE:
- Draft ID `3f20ae47-004c-4171-995f-893e7c102f43`
- status UNPUBLISHED
- SEO slug staged as `digital-sat-prep-adhd-executive-function`
- SEO title/meta staged
- current Wix body contains only one editorial staging paragraph
- current Wix read time = 1 minute
- current custom media = false

The complete long-form article remains in GitHub at:
`wix/seo/DRAFT_DIGITAL_SAT_ADHD_EXECUTIVE_FUNCTION_GUIDE_2026-09-09.md`

Do not publish the one-paragraph Wix staging shell.

## Accessibility automated evidence

Latest fresh Wix scan:
- scan `2cac6b01-0b63-4a4f-a2a8-172e05c9e19c`
- PARTIALLY_COMPLETED
- 5 pages discovered
- 4 successfully analyzed
- 0 findings on those 4
- root analysis failed
- Wix used an older internal hostname rather than the canonical Vibe public URL

Useful partial evidence only. Do not call accessibility fully finished.

---

# ACTIVE LIVE SAFEGUARDS / TRANSITIONAL SYSTEMS

## Proof Metrics Coherence — LIVE TRUTH IS REV7

`0adc9e67-d1d6-43fa-bd06-abc7a923793f`

**rev7 / ENABLED / BODY_END / TRANSITIONAL**

This supersedes dated records that still say rev5 or rev6.

Rev7 was required because rev6 accidentally changed the legitimate Resources count `12 articles` into `Nearly 14 articles` by walking too far up the DOM for experience context.

Rev7 now:
- stops experience-context search before BODY / MAIN / HTML
- searches at most four ancestors
- rejects contexts over 300 characters
- preserves Home/SAT proof normalization
- preserves single-plus normalization

A fresh public Resources load after rev7 showed `12 articles` again.

Permanent objective remains: fix stale values natively when source access is available, visually verify, then retire this runtime patch safely.

## Core Authenticity

`73a2dd88-1c32-44e4-a5a1-4e031f95e685`

**rev13 / ENABLED**

Includes supported About credential wording and About-only Nearly-14 experience repair. Do not revive its retired SAT renderer.

## Consultation fallback

`b3ececaf-c221-4ad1-9590-4aa112486e11`

**rev27 / ENABLED / SAFETY-CRITICAL**

Still intercepts the consultation flow into a prepared email while native submission acceptance is incomplete. Keep until the full consultation acceptance gate passes.

## Results stray-response cleanup

`4bb4aa54-4956-4a44-af3d-6dbf0ca78d54`

**rev1 / ENABLED / TRANSITIONAL**

Important current diagnosis: its code only searches ordinary DOM text for response-time wording. Later public browser evidence found the visible `I typically respond within 24 hours` rectangle while no matching DOM text node was found. Therefore this cleanup is **not considered a proven solution to the current defect**.

Potential ownership now includes Wix Inbox/chat/native widget or an image/native layer. Diagnose before adding another patch.

## Home & Resources Authenticity

`28670858-0820-42d0-850f-a7ab79b93de4`

**rev1 / ENABLED**

Its Resources behavior hides a stale native section; it does not provide the replacement article cover data.

---

# P0 — VISIBLE / REVENUE-CRITICAL DEFECTS

These are the first execution targets after setup is complete.

## P0.1 Results page visual repair

**OPEN / HIGH PRIORITY**

Two distinct issues:

### A. Hero image crop

Results Showcase rev14 uses:
`445f86_e47e366d8c834ce59185b186cd37b5ef~mv2.jpg`

Actual image dimensions: **1600 × 371**.

The live Results CSS places this ultra-wide 4.3:1 image into a much taller panel with `background-size: cover`, guaranteeing substantial horizontal cropping at ordinary desktop sizes. Critical slogan/content baked into the image can therefore be cut off.

Permanent repair should make critical text crop-safe, preferably by using real HTML for important copy and/or a correctly composed hero asset/layout rather than relying on baked text inside an extreme banner.

### B. White response-time rectangle

A small white `I typically respond within 24 hours` element was still visible in later browser evidence.

The current text-cleanup embed is not proven effective because no matching DOM text node was found when the defect was visible.

Leading ownership hypothesis: Wix Inbox/chat or another native widget/layer. Wix Inbox infrastructure is installed/enabled on the site, but exact ownership is not yet proven.

Next action: identify exact component/layer first, then fix at source. Do not add another blind text-hiding script.

Acceptance: Results hero and surrounding UI look intentional on desktop and mobile, no clipped slogan, no stray 24-hour box, proof block intact, no black strip.

## P0.2 Resources image split-state

**OPEN / HIGH PRIORITY**

Wix Blog records contain the correct new covers, but active article data still contains old image IDs.

Enabled Article Content V2 provider:
`a18756c1-5508-4c55-85a1-4bbb1d38a192` — Homework Initiation rev1
still hard-codes old image:
`445f86_155995d6565c4de28e6b65214bf45a1e~mv2.png`

Enabled Article Content V2 provider:
`0c3d4f1e-ff9f-4ead-b67e-d369bc9fee07` — Motivation Systems rev1
still hard-codes old image:
`445f86_2209a28418894c049fb8fae43b915bed~mv2.png`

Astra also observed the native Resources catalog loading the old Homework asset.

Therefore public behavior has multiple image sources that disagree.

Next action: reconcile Blog media + Article Content V2 data + actual native Resources catalog/reader source to the same current assets. Then visually verify both cards and article hero/image behavior.

## P0.3 Sitewide proof / Nearly-14 visual acceptance

**TRANSITIONALLY IMPLEMENTED / PUBLIC ACCEPTANCE STILL OPEN**

Live patch rev7 is technically present and the `12 articles` collateral bug is fixed.

Need current public acceptance across Home, SAT, EF, About, Results, Resources, Consultation where relevant:
- no experience `12 years` / `12+ years`
- 75+ / 350+ / Nearly 14 where intended
- no 75++ / 350++
- no black strip

Prefer eventual native correction over permanent DOM rewriting.

## P0.4 Consultation lead reliability

**OPEN / SAFETY-CRITICAL**

Current fallback rev27 is protecting leads, but native form transport is not accepted.

Do not remove fallback until all pass:
1. native nine-field submission
2. service validation
3. in-flight guard
4. no duplicate submit
5. values preserved on failure
6. success only after confirmed Wix record
7. inline email fallback on error
8. two consecutive TEST ONLY submissions
9. exactly one confirmed record per test
10. exactly one owner notification per test
11. BASIC spam protection restored and retested
12. desktop/mobile public acceptance

---

# P1 — FUNCTIONAL / ARCHITECTURAL COMPLETION

## P1.1 Native Resources + article reader

All 12 article bodies load, but full acceptance remains open for:
- headings
- paragraph spacing
- lists
- images and captions
- related navigation
- loading state
- not-found state
- API failure state
- stale-request cancellation / rapid route switching
- desktop and true mobile rendering
- back/forward behavior

Old overlay Resources Router and Article Reader remain disabled. Do not casually revive them.

## P1.2 Navigation / header / footer / responsive QA

Legacy route aliases are done.

Still verify/fix:
- desktop header
- mobile menu
- duplicate logo/wordmark
- footer wrapping/stale content
- all canonical internal routes
- article links
- CTA destinations
- horizontal overflow
- image crops
- fixed/sticky collisions
- tablet and true mobile behavior

## P1.3 Front-end / back-end bug sweep

After known P0 issues are fixed, inspect current public/runtime behavior for:
- console errors
- hydration warnings
- failed network calls
- duplicate API requests
- stale event listeners
- runaway MutationObservers/timers
- patch collisions
- duplicate submit handlers
- article stale-data races
- hard-coded old routes/media/proof strings
- inaccessible focus/keyboard behavior

Do not refactor working code for aesthetics alone.

---

# P2 — SEO / GROWTH COMPLETION

## P2.1 Native Vibe page metadata

**OPEN / HIGH SEO VALUE**

Current native service/core routes have emitted weak raw-slug titles and generic descriptions. Home's stronger stored static SEO override does not control the actual Vibe resolver output.

Repair must happen in the actual native Vibe/head/routing layer when available, not by repeatedly writing the wrong STATIC_PAGE object.

Targets include:
- Home
- SAT
- EF
- About
- Results
- Resources
- Consultation

Need unique title, description, canonical, and appropriate social metadata without keyword stuffing.

## P2.2 Flagship SEO article

**SOURCE + GRAPHICS READY / WIX BODY NOT TRANSFERRED / UNPUBLISHED**

Existing draft ID only:
`3f20ae47-004c-4171-995f-893e7c102f43`

Next after reader gate:
- transfer complete clean article body from GitHub
- remove production notes
- insert four READY graphics
- add suitable cover media
- add internal links
- add categories/tags/related posts where useful
- final College Board fact check
- desktop/mobile article visual QA
- publish once accepted
- later submit/inspect in Search Console

Do not create another draft.

## P2.3 Accessibility / current-public verification

Automated Wix scan is partial only. Finish with current-public/manual checks after meaningful visual changes:
- heading hierarchy
- alt text
- labels
- contrast
- keyboard navigation
- focus visibility
- menu behavior
- error messaging

---

# P3 — OWNER / EXTERNAL LAUNCH INFRASTRUCTURE

## P3.1 BehavioralBridge.org

Verified current state:
- exact domain is registered
- it is not present in this Wix account as assigned or unassigned
- ownership outside Wix is not established by current evidence
- canonical Wix site is still on a Free plan

Owner gate: confirm ownership/registrar and approve any required Wix plan/domain connection expenditure before connection/DNS changes.

## P3.2 Google Search Console

Verified current state:
- Wix GSC readiness NOT_READY
- Wix Google connection NOT_CONNECTED
- supported verification attempt returned MISSING_TOKEN
- separate GSC workspace has zero properties

Owner gate: one-time Google OAuth/authorization when presented.

Then: verify/add property → submit sitemap → request/inspect indexing as appropriate.

## P3.3 Analytics / conversion measurement

Wix traffic semantic model exists, but no trustworthy launch baseline has yet been retrieved. After reliability/SEO gates, establish useful baseline and consultation conversion measurement. Do not invent traffic numbers.

## P3.4 External authority consistency

Eventually align Wyzant/Superprof public profile facts with current site where access allows, especially Nearly 14, education wording, and current service positioning. Preserve platform-specific truth for ratings/hours.

---

# BLOCKED / REQUIRES EXTERNAL OR OWNER ACTION

- Actual native Wix Vibe source/editor access is still required for some permanent page/head/catalog repairs; GitHub does not contain the complete deployed source tree.
- True mobile browser acceptance was not completed in the Astra pass; its attempted 390px override still reported 1280px.
- Google Search Console requires owner OAuth.
- Permanent domain connection requires ownership clarification and likely plan decision.

Do not let these blockers stop unrelated safe work.

---

# DO NOT TOUCH / PRESERVE

- Canonical site ID `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Results Showcase rev14 unless a tightly scoped safe change is unavoidable
- Conversion Trust Strip rev4: keep DISABLED
- Consultation Safety/Fallback rev27 until full acceptance gate
- Core Authenticity rev13 until native replacements are proven
- Proof Metrics Coherence rev7 until native proof values are corrected and visually accepted
- old Resources Router rev15 / Article Reader rev17: keep DISABLED unless deliberate rollback
- legacy `The Behavioral Bridg` site until domain/indexing migration is complete
- four flagship graphics: do not regenerate
- flagship Wix draft ID: do not duplicate
- frozen Home/SAT/EF/About/Results design: fix regressions, do not redesign from scratch

---

# NEXT EXECUTION ORDER

1. **Results visible repair:** hero crop + identify/fix actual 24-hour element source; visually accept Results.
2. **Resources image reconciliation:** make all active image sources agree with the two approved replacement covers; visually accept cards/article imagery.
3. **Sitewide proof acceptance:** verify/fix Nearly 14 + 75+ + 350+ + no `++` + no black strip; begin native cleanup where safely possible.
4. **Consultation reliability:** native transport + two TEST ONLY acceptance runs; keep fallback until passed.
5. **Article reader + Resources completion:** rich content, error states, images, related navigation, rapid-route behavior.
6. **Header/footer/navigation + responsive/mobile QA.**
7. **Focused front-end/back-end bug sweep.**
8. **Native SEO metadata.**
9. **Flagship SEO article:** transfer full body, insert four READY visuals, QA, publish.
10. **Accessibility final pass.**
11. **Domain + Search Console owner gates and completion.**
12. **Analytics / conversion baseline + external profile consistency.**
13. **Final visitor-journey QA and safe retirement/cleanup of transitional systems.**
14. **FINAL FREEZE only after visible + technical + functional acceptance is complete.**

---

# ROLLING CHECKPOINT FORMAT

After each future `NEXT`, `NEXT STEP`, `GO`, or `CONTINUE` turn, update this file rather than creating another competing status document.

Maintain five short sections near the end of the file or update the relevant sections above:

- **COMPLETED** — genuinely finished/frozen
- **ACTIVE** — current subsystem
- **BLOCKED** — only real external/owner blockers
- **NEXT** — highest-priority coherent work unit
- **DO NOT TOUCH** — safeguards/frozen systems

A visible item becomes FINISHED only after public visual acceptance. Technical/API success alone is not enough.
