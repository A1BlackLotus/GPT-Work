# Behavioral Bridge — Website Execution Checkpoint — CURRENT

**Updated:** 2026-09-10  
**Status:** CURRENT OPERATIONAL SOURCE OF TRUTH

This is the single rolling checkpoint for the canonical Behavioral Bridge website. It supersedes older dated operational files when they conflict. Public behavior/screenshots > live Wix state > this checkpoint > older handoffs. API success is never visual acceptance.

## Canonical production target
- Wix site: **Behavioral Bridge**
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Public root: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Wix Vibe / Picasso; Velo enabled; Free plan
- Business email: `Ryan_Carvalho@BehavioralBridge.org`
- Phone: `+1 508-774-0989`

Canonical proof:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — years of experience

## Protect / do not regress
- Home, SAT, EF, About, Results major design work is frozen absent a verified regression.
- `/sat-prep` → `/sat-tutoring` redirect is live: `af1b5e54-7400-445d-8b49-3c2a7f46bc16`.
- `/executive-function` → `/ef-specialized-support` redirect is live: `4b135ca4-be14-4b21-9c63-d83f0bdf29f1`.
- Conversion Trust Strip `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` rev4 stays **DISABLED**.
- Results Showcase `245d2c02-9ebb-4b3f-b863-53d787d8d13c` rev14 stays **ENABLED**; it directly contains correct proof and is near the embed size limit.
- Proof Metrics `0adc9e67-d1d6-43fa-bd06-abc7a923793f` rev7 stays **ENABLED / TRANSITIONAL**.
- Core Authenticity `73a2dd88-1c32-44e4-a5a1-4e031f95e685` rev13 stays **ENABLED**; retired SAT renderer must not be revived.
- Consultation Safety `b3ececaf-c221-4ad1-9590-4aa112486e11` rev27 stays **ENABLED** until native-first submission is publicly verified.
- Existing flagship Wix draft `3f20ae47-004c-4171-995f-893e7c102f43` must not be duplicated or published prematurely.
- Four flagship graphics are already READY; do not regenerate: Pipeline `445f86_3e2818d5b4d0490995d87782c56974c7~mv2.png`, Decision `445f86_d8b0f8cba046437dac159d5663b77fed~mv2.png`, Repair `445f86_b528c44c67b74af894bc0a84ab85c7ae~mv2.png`, Hyperfocus `445f86_ee5297959a624790adea9d4fea83de86~mv2.png`.

## P0.1 — Results visible defects
**IMPLEMENTED + TECHNICALLY VERIFIED / VISUAL ACCEPTANCE PENDING**

Results Visual Repair `4bb4aa54-4956-4a44-af3d-6dbf0ca78d54` is rev2/enabled. It changes the panoramic Results hero away from forced cover cropping and expands the response-time cleanup to likely small chat/assistant iframe containers on `/results` only. Still requires real desktop/tablet/mobile inspection for composition, remaining 24-hour artifact, proof integrity, spacing, and black-strip absence.

## P0.2 — Resources cover consistency
**BLOG + ACTIVE PROVIDER LAYERS CORRECT / NATIVE CATALOG + VISUAL ACCEPTANCE PENDING**

Correct Blog covers:
- Homework `21945cef-4d24-4bc8-8b4b-6001ca7d7404` → `445f86_e228e6e7b201423b82c59cafb022bbc3~mv2.png`
- Motivation `c07b0cad-b856-4e4a-8afd-a07db6944e3e` → `445f86_6476bad82bd140e8a4d24dff440a3a67~mv2.png`

Active Article Content V2 providers were repaired to the same covers. Disabled historical EF extension remains untouched. Astra previously observed a stale native Homework card in `src/lib/resourceArticles.ts`; deployed Vibe source is not available through current connected REST surfaces, so native catalog rendering remains open.

## P0.3 — Sitewide proof
**TECHNICALLY VERIFIED / VISUAL ACCEPTANCE PENDING**

All 32 custom embeds were scanned. No enabled stale proof block requires mutation. Old literals inside proof/authenticity scripts are repair targets, not rendered proof. Old `60+ / 240+ / 12+ YEARS` trust strip remains disabled. Live browser check still required on Home/SAT/About/Results/Resources.

## P0.4 — Consultation reliability
**BACKEND FUNCTIONALLY VERIFIED / PUBLIC NATIVE FRONTEND + FAILOVER ACCEPTANCE PENDING**

Form `b692e647-b20c-45b0-ae1d-2530df030907` is rev10/enabled. Spam protection was repaired `NONE` → `BASIC` with all form fields/required flags preserved.

Automation `2695710a-a944-4fbd-9fe6-a7341b8cf53f` rev2 is ACTIVE and Wix validation returned VALID.

Two TEST ONLY backend submissions passed end to end: exactly two new confirmed records, all nine expected values including `service_bb`, no duplicates, and exactly one owner-email notification per test.

Rev27 still intentionally intercepts public consultation submit and opens email before native Wix submission. Do not disable blindly. Remaining gate: real page native submission, service validation, duplicate guard, failure-state value preservation, confirmed-record success state, fallback only on failure, desktop/mobile acceptance.

## P1.1 — Resources / article reader
**DATA + INTERNAL-LINK LAYER TECHNICALLY VERIFIED / NATIVE RUNTIME + VISUAL ACCEPTANCE PENDING**

Exactly 12 canonical articles remain published, substantial, structured, not paywalled, and with SEO data/related-post IDs. Eight Article Content V2 embeds are data-only. Old overlay reader/router/EF extension remain disabled.

Canonical-link repair passed: 11 legacy `/sat-prep` or `/executive-function` rich-content links across 10 posts were changed to `/sat-tutoring` or `/ef-specialized-support`; 10/10 updates succeeded, no slug/title/SEO/cover changes, and the flagship draft remained untouched at that stage.

Still browser/native gated: reader typography, cover/image/caption behavior, error/loading states, back-forward/rapid slug switching, native Resources card images, desktop/tablet/mobile acceptance.

## P1.2 — Navigation / header / footer / responsive
**CONNECTED LINK/ROUTE LAYER TECHNICALLY VERIFIED / TRUE RESPONSIVE VISUAL ACCEPTANCE PENDING**

Redirect records are correct. Enabled custom-code href/assignment targets contain no active retired service links, old Wix hostnames, or old Gmail address. Current CTAs use canonical routes/business contact or supported Wyzant/Superprof profiles.

Core Authenticity's `/sat-prep` and `/executive-function` literals are compatibility route checks, not links; changing them would reactivate retired transformations on canonical pages. Parent Fit FAQ's `href="#"` is an intentional scroll-to-top consultation control.

`/blog` is a real Wix static Blog-related page and is preserved. `/consultation` occurs only as compatibility logic; no redirect is justified without native/browser evidence. SEO config has `shouldUsePartialRouteMatch:false`.

Connected custom CSS scan found no fixed/sticky positioning, hard ≥400px min-widths, ≥700px fixed widths, vw width traps, or overflow-x hacks. Native Vibe responsive layout still needs visual acceptance.

## P1.3 — Front-end / back-end bug sweep
**CONNECTED CUSTOM-CODE LAYER TECHNICALLY CLEAN / BROWSER RUNTIME ACCEPTANCE PENDING**

Latest audit covered all 16 enabled custom embeds.

Verified:
- no true duplicate *created* DOM IDs across enabled embeds;
- no unbounded `setInterval` loops;
- every enabled non-`loadOnce` script that installs listeners/observers/timers has a persistent window guard;
- no enabled custom embed makes `fetch()` or XMLHttpRequest network calls, so connected custom code is not generating duplicate API/network traffic;
- no proven repeat-registration loop surfaced;
- Proof Metrics rev7's apparent 250ms timer is bounded: 32 ticks then `clearInterval`, about 8 seconds total, while route/MutationObserver hooks remain;
- Professional Portrait Replacement is guarded by `window.__bbPortraitReplacement`, is `loadOnce:true`, watches only image source attributes, and becomes idempotent once the obsolete portrait source is replaced;
- the known consultation `preventDefault`/`stopImmediatePropagation` handlers belong to the intentional rev27 email-first safety mode, not an accidental duplicate-submit bug;
- earlier apparent Results ID collision was a scanner false positive caused by counting a lookup reference; true ID creation scan reports no collision.

The Wix execution sandbox forbids dynamic code generation, so static `new Function` syntax parsing could not be used and produced no valid syntax verdict. Real console errors, hydration warnings, native network failures, keyboard/focus behavior, and browser-only race conditions remain acceptance-gated because Opera Browser Connector is disconnected.

No Wix production mutation was justified in P1.3; changing guarded/idempotent code without a demonstrated failure would add risk rather than remove it.

## P2.1 — Native Vibe SEO metadata
**BLOCKED ON NATIVE VIBE/HEAD SOURCE FOR CORE ROUTES**

Viewer-level resolution still shows weak raw-slug titles and generic descriptions on core Vibe routes. Item SEO STATIC_PAGE inventory does not expose those canonical Vibe routes as editable static-page items. Do not keep writing unrelated SEO overrides and claim success. Repair must occur in the actual Vibe head/routing source or another verified controlling layer.

## P2.2 — Flagship SEO article
**FULL DRAFT STAGED + TECHNICALLY VERIFIED / UNPUBLISHED / VISUAL-PUBLICATION GATES PENDING**

Existing Wix draft only: `3f20ae47-004c-4171-995f-893e7c102f43`. No duplicate was created.

Completed this execution:
- replaced the one-paragraph editorial staging shell with the full approved source-backed article body;
- deliberately omitted a duplicate in-body H1 because Wix renders the post title as the page H1;
- removed reader-facing scaffolding such as `Visual placement`, `Internal link`, source-note, and editorial-note labels;
- converted the article to valid Wix Ricos rich content and validated/fixed the final document before saving;
- inserted all four existing READY graphics as individual inline IMAGE nodes at the intended teaching points;
- converted internal-link notes into real contextual links to canonical service/article routes;
- retained the intended SEO slug `digital-sat-prep-adhd-executive-function`;
- set a concise human-readable excerpt;
- assigned three existing related posts: Accuracy Before Speed, Why More SAT Practice Often Fails, and Weekly Executive Function Reset;
- assigned existing categories: `SAT Prep`, `SAT Strategy`, `Executive Function`;
- assigned existing tags: `Digital SAT`, `Executive Function`, `SAT Strategy`, `Academic Performance`, `Parent Support`.

Wix update verification:
- status remains `UNPUBLISHED`;
- `hasUnpublishedChanges: true`;
- calculated reading time: 11 minutes;
- 4 inline images;
- 15 H2 headings;
- 22 H3 headings;
- zero duplicate H1 nodes in the body;
- article stayed on the same draft ID.

College Board factual points were rechecked against current official material on 2026-09-10 before staging: standard SAT timing remains 64 minutes Reading and Writing + 70 minutes Math = 2h14m, and current extended-time guidance confirms students using extended time may move on after standard time has elapsed and receive automatic extra breaks in Bluebook.

Do **not publish yet**. Remaining acceptance:
- visual inspection of typography, images, spacing, captions/alt rendering and mobile behavior;
- verify preview/public URL behavior and final SEO presentation;
- reader/back-forward/error-state gate;
- final College Board policy recheck immediately before publication;
- publish only after those gates pass;
- then add inbound contextual links and submit/inspect in Search Console when connected.

## P2.3 — Accessibility
**NEXT SAFE EXECUTION TARGET**

Run a fresh accessibility scan on the current published site after the recent Results/proof/navigation changes. Separate successful pages from failed pages and inspect actual findings before making any repair. Draft flagship content is not yet public and therefore is not part of this scan.

## P3 — Launch infrastructure
- `BehavioralBridge.org`: registered but not attached to this Wix account; ownership/connection unresolved; current site is Free. No plan purchase or DNS action without owner approval.
- Google Search Console: NOT_CONNECTED / MISSING_TOKEN; requires Ryan's one-time Google OAuth before verification/sitemap/indexing.
- Analytics/conversion baseline: establish after reliability/SEO gates.
- Wyzant/Superprof alignment: later, while preserving platform-specific truth.

## Current holds requiring real browser/native access
- Results hero + 24-hour artifact visual acceptance
- native Resources card/reader image behavior
- sitewide proof visual acceptance
- consultation native-first public flow
- reader runtime/error/back-forward behavior
- header/footer/mobile-menu/responsive acceptance
- browser console/hydration/network/focus checks
- core Vibe SEO source repair
- flagship article visual/mobile/publication acceptance

Opera Browser Connector remains disconnected as of this checkpoint.

## Next-step protocol
`NEXT`, `NEXT STEP`, `GO`, or `CONTINUE` means: choose the highest-priority coherent unfinished unit that current tools can safely advance; inspect owner/layer; make the smallest evidence-based correction; verify technically; verify visually/functionally when available; update this checkpoint; stop at a natural boundary. Blocked visual/native items remain open rather than being falsely called done.

**NEXT: P2.3 — run a fresh current-public accessibility scan and repair only demonstrated issues that current tools can safely address.**
