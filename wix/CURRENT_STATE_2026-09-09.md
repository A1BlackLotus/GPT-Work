# Behavioral Bridge Website — Canonical Current / Archive / Delete Ledger

Date: 2026-09-09
Status: CURRENT SOURCE OF TRUTH FOR WEBSITE CLEANUP / HANDOFF

This ledger classifies website-related Wix sites, custom embeds, GitHub records, Google Drive handoffs, routes, launch debt, and the current SEO-growth queue. It does **not** authorize destructive deletion by itself. Items marked DELETE are deletion candidates to remove only after the stated safety condition or explicit owner approval.

## Legend

- **CURRENT** — active, frozen production dependency, or required recovery reference. Keep.
- **CURRENT — TRANSITIONAL** — still needed now, but expected to retire after its named acceptance gate passes.
- **ARCHIVE** — useful historical/recovery evidence; do not use as the active source of truth.
- **DELETE CANDIDATE** — obsolete, duplicate, blank, or superseded; remove only after snapshot/verification/approval as noted.
- **OUT OF SCOPE** — current non-website work; do not touch during website cleanup.

## Canonical production site

**CURRENT**
- Site: Behavioral Bridge
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Published primary URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Editor: Picasso / Wix Vibe
- Velo: enabled
- Current service routes: `/sat-tutoring` and `/ef-specialized-support`
- Other core routes: `/about`, `/results`, `/resources`, `/book-consultation`, and `/post/<slug>` for the 12 published articles.

No custom domain is currently connected as a published primary or secondary URL. `BehavioralBridge.org` remains the intended permanent brand domain but is not yet connected to this site.

## Wix site inventory

| Classification | Site | ID | Reason / gate |
|---|---|---|---|
| **CURRENT** | Behavioral Bridge | `e6f68a23-cc00-421a-985e-515963cbe5f0` | Canonical production site. |
| **ARCHIVE — KEEP PUBLISHED TEMPORARILY** | The Behavioral Bridg | `adfac523-4bcc-4d88-8117-bf7e7f32ea92` | Legacy site. Do not trash until Step 11–12 domain/indexing migration and redirect strategy are complete. |
| **DELETE CANDIDATE** | wix-vibe-site-e88t | `6b9eddc0-83f7-440d-a3aa-fa3579c1fa6b` | Older duplicate Vibe/Picasso site. Before trashing, do one final visual/asset check for any unique content. |
| **DELETE CANDIDATE** | Behavioral Bridge Sa | `20252bf3-c346-4552-b0d2-038875afcdc9` | Accidental Sep. 6 Odeditor site; not canonical. Final confirmation only before trashing. |
| **DELETE CANDIDATE** | My Site | `cf390a29-57a1-4309-8906-a4b20b23ffc6` | Accidental Sep. 6 draft Odeditor site; not canonical. Final confirmation only before trashing. |

## Roadmap state

- **Steps 1–5: CURRENT / FROZEN / PUBLISHED / VISUALLY VERIFIED.** SAT, EF, About, and Home native rebuilds are not to be reopened absent a regression. About has one current experience-text regression repair described below.
- **Step 6 Resources: CURRENT ACTIVE WORK.** Blog data is healthy; native visual library still requires final editor/browser QA.
- **Step 7 Article reading: CURRENT ACTIVE WORK.** Direct native post reader works but still needs rich-content presentation/visual QA.
- **Step 8 Consultation end-to-end: PENDING / SAFETY-CRITICAL.** Fallback improved to rev27; native transport still not accepted.
- **Step 9 Header/footer/mobile navigation + route aliases: PARTIAL.** Legacy route aliases are now complete; global nav/footer visual QA remains.
- **Step 10 Responsive/accessibility QA: PARTIAL.** Fresh scan partially completed with zero findings on four processed pages and one failed page; current-site visual QA remains.
- **Step 11 Domain/email/technical SEO: PENDING / HIGH PRIORITY.**
- **Step 12 Search Console/indexing: PENDING / BLOCKED.** Fresh readiness check says `NOT_READY / SITE_OWNER_NOT_VERIFIED`.
- **Steps 13–15 Analytics, authority/distribution, automation/final freeze: PENDING.**
- **New SEO flagship article workstream: QUEUED.** One additional article only, chosen from SEO opportunity research and paired with original GPT-generated explanatory visuals.

## Route classification

**CURRENT**
- `/sat-tutoring`
- `/ef-specialized-support`
- `/about`
- `/results`
- `/resources`
- `/book-consultation`
- the 12 canonical `/post/...` article routes

**LEGACY ALIASES — NOW REPAIRED**
- `/sat-prep` → `/sat-tutoring`
  - redirect ID `af1b5e54-7400-445d-8b49-3c2a7f46bc16`
- `/executive-function` → `/ef-specialized-support`
  - redirect ID `4b135ca4-be14-4b21-9c63-d83f0bdf29f1`

The redirect table was empty immediately before these exact redirects were created, so no redirect chain or pre-existing mapping was destroyed.

## Wix custom embeds — CURRENT

The following are enabled and must not be deleted merely for cleanup:

### CURRENT / production-frozen
- `245d2c02-9ebb-4b3f-b863-53d787d8d13c` — Results Showcase v11 · Referral QA Repair — live revision **14**; proof block uses `75+` 5-star reviews, `350+` Wyzant + Superprof hours, and `Nearly 14` years experience.
- `caa6261a-3fe9-447b-8727-956b34045c60` — Parent Fit FAQ v2 — live revision 3.

### CURRENT — TRANSITIONAL / safety or migration dependency
- `b3ececaf-c221-4ad1-9590-4aa112486e11` — Consultation Safety & Fallback — live revision **27**. **Safety-critical.** Rev27 now captures the visible `service_bb` text input into the prepared email rather than relying only on a `<select>`. Keep until Step 8 passes two consecutive realistic live submissions, both become new `CONFIRMED` Wix Forms records, both owner notification emails arrive, and spam protection is restored/retested.
- `f0a554b0-9b98-4615-8742-fb7e468eed45` — Professional Portrait Replacement — revision 1. Keep until native portrait placement is visually confirmed everywhere it replaces.
- `1764a383-90b2-4914-ad0f-2e4b7f8be903` — Article Content V2 — Accuracy + Procrastination — revision 6.
- `793f13b5-fb2e-4753-91b6-a57865ae0d90` — Article Content V2 — Method + Practice — revision 6.
- `4ddd3978-de08-4610-ba46-e305693c7c20` — Article Content V2 — Parents + R&W Errors — revision 6.
- `2a7a7da5-e3e1-4bb8-9ee8-5ec506e2f8a9` — Article Content V2 — Executive Function + Desmos — revision 6.
- `607a5c1c-380c-4a10-bd50-8e0c4b1339ad` — Article Content V2 — Weekly EF Reset — revision 1.
- `657b96c8-0080-48c0-975f-c71142570bcb` — Article Content V2 — Reminders to Independence — revision 1.
- `a18756c1-5508-4c55-85a1-4bbb1d38a192` — Article Content V2 — Homework Initiation — revision 1.
- `0c3d4f1e-ff9f-4ead-b67e-d369bc9fee07` — Article Content V2 — Motivation Systems — revision 1.
  - Keep these eight Article Content V2 embeds until Steps 6–7 native resource/article rendering is visually verified for all 12 articles, including unknown-slug/error states.
- `73a2dd88-1c32-44e4-a5a1-4e031f95e685` — Core Authenticity Pass v7 · SAT Native Editor Handoff — revision **13**. Keep through global/native cleanup. Rev13 preserves the supported education rewrite and adds an **About-only hydration-safe sweep** that changes any visible `12+ years` experience variant to `Nearly 14 years`, addressing Ryan's live About-page observation. The retired SAT renderer must never be revived.
- `0adc9e67-d1d6-43fa-bd06-abc7a923793f` — Proof Metrics Coherence Patch v1 — revision **5 / ENABLED / TRANSITIONAL**. Text-only repair for stale native Home/SAT proof values. It inserts no bar, CSS layout, clickable UI, or new visible component. It maps stale proof values to the current `75+` / `350+` / `Nearly 14` standard and consumes/normalizes the original plus sign so `++` does not render. Retire only after Home/SAT are edited natively and visually verified.
- `28670858-0820-42d0-850f-a7ab79b93de4` — Home & Resources Authenticity v1 — revision 1. Keep until native resource/home behavior is proven independent of it.

## Wix custom embeds — ARCHIVE / KEEP DISABLED FOR ROLLBACK

Keep these disabled as rollback references until the named roadmap gate is frozen; do not re-enable casually:

- `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` — Conversion Trust Strip v1 — revision 4, **DISABLED 2026-09-09** after screenshots and source inspection confirmed an intermittent first-hydration race could insert the full-width black strip in the middle of Home/SAT/EF content. Preserve only as rollback/history; **do not re-enable**.
- `827e1cf6-b008-40e1-9df4-d8f822f88a63` — Article Reader & Publication Layout — revision 17. Archive after Steps 6–7.
- `65311ea0-35cf-4aef-8a6a-55dc2915212e` — Resources Router & Cards — revision 15. Archive after Steps 6–7.
- `965f4e07-3f81-4ea0-a03d-7501444795dc` — Resources Executive Function Extension v2 — revision 3. Archive after Steps 6–7.
- `1fd9bef8-e06b-4add-acf2-28f4359721dc` — Results Navigation & Frame v4 — revision 5. Archive through global navigation reconciliation.

## Wix custom embeds — DELETE CANDIDATES AFTER SNAPSHOT

These are disabled and superseded. Take one recovery snapshot/export of names/IDs/revisions first, then they can be removed after explicit approval:

- `0ac3fcaf-b699-42da-9867-972e09d58b75` — old Consultation Form Connector — revision 5. Retired and dangerous if accidentally re-enabled.
- `01e488ae-430d-4172-bbcd-dbd779af9dff` — old Resources Hub v1 — revision 2.
- `8b8ba9c6-bae9-4cb8-ae23-0066eb7bc5c5` — per-article reader: Accuracy Before Speed — revision 3.
- `4f74067b-34ca-4665-a561-1898724d0281` — per-article reader: Behavioral Bridge Method — revision 3.
- `5ea80cc1-f6cc-4a6f-b851-5978152cf2a2` — per-article reader: Parents + SAT Prep — revision 3.
- `264baa2f-b0fa-4b8f-9d25-5726e237cda9` — per-article reader: Executive Function in High-Achieving Teen — revision 3.
- `67ae8c6a-2d34-4a40-9a48-7b2dde30f61b` — per-article reader: Smart Students Procrastinate — revision 3.
- `633a2960-3890-4513-b724-084124a2977d` — per-article reader: More SAT Practice Often Fails — revision 3.
- `f97c6ee9-2838-4c9d-8bc1-341a592144ea` — per-article reader: SAT R&W Error Patterns — revision 3.
- `f73b4dae-b7b6-4cb2-8f40-3b51b61a0e32` — per-article reader: Desmos — revision 3.
- `c0d2cee1-a2ed-4672-add0-1d6b890e1fc9` — Generated Article Image Override v1 — revision 2; delete only after native article imagery is visually verified.

## Consultation system

**CURRENT**
- Wix Form ID `b692e647-b20c-45b0-ae1d-2530df030907`, revision **9** after a documented full-form update attempt.
- All 9 input targets plus submit button were preserved; large/desktop layout still contains 10 items.
- Required targets still read back as first name, last name, email, student name, grade, goals.
- Optional in Wix schema: phone, availability, `service_bb`.
- `service_bb` is visibly present as `Service Requested`.
- A documented attempt to set `service_bb.inputOptions.required=true` advanced the schema from rev8 to rev9 but Wix normalized the field back to `required=false` on read-back. Do not repeatedly mutate this speculatively; enforce service in the native frontend/endpoint acceptance path.
- Notification automation `2695710a-a944-4fbd-9fe6-a7341b8cf53f` is ACTIVE and filtered to this exact form; owner notification recipient is `Ryan_Carvalho@behavioralbridge.org`.
- Four historical records are confirmed, but they are Sep. 3 evidence and do not constitute current live-browser acceptance.
- Native recovery endpoint `wix/native-vibe-consultation/src/pages/api/consultation.ts` remains **CURRENT — RECOVERY REFERENCE** until Step 8 is frozen.
- `wix/native-vibe-consultation/FRONTEND_HANDLER.example.tsx` remains **CURRENT — RECOVERY REFERENCE** until Step 8 is frozen.

**KNOWN STEP-8 DEBT**
- Native path must enforce service even though the Wix form schema continues to expose it as optional.
- Safety fallback rev27 now carries typed service into the email request.
- Do not remove/reduce the safety fallback until the full live acceptance gate passes.

## SEO / domain / indexing state

**CURRENT / HEALTHY**
- Sitewide indexing is allowed; there is no sitewide `noindex`.
- `robots.txt` allows normal crawling and includes the Wix sitemap.
- All 12 published blog posts have unique canonical slugs; current technical audit found exactly 12 posts, no extras/duplicates, no Pricing Plan paywalls, substantial bodies, related-post relationships, and no unpublished changes.

**CURRENT KNOWN DEBT — STEP 11**
- Main native routes `/sat-tutoring`, `/ef-specialized-support`, `/about`, `/results`, `/resources`, `/book-consultation` currently resolve weak/raw-slug titles and the same generic description. Repair in native Vibe/Astro page-head/routing metadata; these routes are not ordinary Wix STATIC_PAGE SEO items.
- Home has a stronger saved SEO override but the resolved published Home metadata still shows the older title/description state. Reconcile publication state.
- Site Properties still contains stale `externalSiteUrl: https://TheBehavioralBridge.org`. Do not blindly change it; resolve only when the permanent domain is actually connected.
- No custom domain is currently present in the canonical site's published URL list.

**SEARCH CONSOLE — STEP 12**
- Fresh Wix GSC Site Readiness result: `NOT_READY`.
- Current blocking reason: `SITE_OWNER_NOT_VERIFIED`.
- Do not request indexing or present Search Console as ready until the readiness blocker is cleared.

## Current proof metrics / founder credibility state

- Final public proof standard requested by Ryan is: `5.0` Wyzant rating, `75+` 5-star reviews, `350+` Wyzant + Superprof hours, and `Nearly 14` years experience.
- Results Showcase rev14 outputs this standard directly.
- Native Home and SAT proof blocks contain older values underneath; Proof Metrics Coherence rev5 is the current **text-only transitional** repair until native Vibe source access is available.
- Core Authenticity rev13 now includes an About-only hydration-safe replacement for visible `12+ years` experience language after Ryan reported that stale wording on the live About page.
- Conversion Trust Strip remains disabled; do not use an inserted proof bar again.

Supported founder wording currently used by the About/Core layer:
- B.S. in Psychology, magna cum laude — Bridgewater State University.
- Nearly 14 years of education / student-support / tutoring experience.
- Professional background includes Boston Latin, Brookline, and Newton school environments.
- Post-baccalaureate education includes study at Boston College and graduate coursework at Harvard University.

Credential corroboration / limits:
- Ryan directly identified Boston College post-baccalaureate study and Harvard education work.
- Current public Wyzant education metadata independently lists `Harvard University — Graduate Coursework`, `Bridgewater State University — Bachelor of Science in Psychology`, and `Boston College — Other`.
- Searches across Drive, GitHub, Gmail, Library, prior site records, and public search did not recover the exact historical Boston College program title or exact Harvard education certificate title.
- Do not invent those named titles, a Harvard degree, a Boston College degree, or `Harvard educated` wording.
- Do not publish changing school rank numbers without a named ranking source and year.
- Scholarship/grant history was not independently recovered; do not add a full-scholarship claim merely for prestige unless exact documentation/wording is later available.

## Article/resource state

**CURRENT**
- All 12 core articles are published and should be preserved.
- Preserve titles, slugs, bodies, and existing per-post SEO.
- Eight enabled Article Content V2 embeds are data-only; they do not intercept clicks or render direct post pages.
- Old Resources Router rev15 and Article Reader rev17 remain disabled; do not casually revive them.
- Last verified native build confirms a direct `/post/...` article works, but native reader presentation still needs proper headings/lists/spacing, imagery, related navigation, honest loading/not-found/error states, stale-request cancellation, and final desktop/mobile visual QA.

**VERIFY VISUALLY — DO NOT AUTO-FIX**
- Current Blog media representation differs from earlier audit assumptions. Do not auto-fix cover imagery from API flags alone; use live cards/article pages as visual truth.

## Accessibility / responsive state

Fresh scan:
- Scan ID `66388e09-c08f-4af6-b456-905417f02f0c`
- Status: **PARTIALLY_COMPLETED**
- 5 pages discovered
- 4 pages processed successfully
- 1 page failed analysis
- 0 accessibility findings across the four processed pages
- Coverage included alternative text, contrast, heading structure, keyboard, screen-reader, DOM order, focus indicator, media alternatives, page title, site language, and skip-to-main-content rules

Important limitation:
- The scan's page URLs use an older Wix-hosted `ryancarvalho6.wixsite.com/wix-vibe-site-5cld/...` hostname rather than the canonical Vibe public hostname.
- The root page failed with `ANALYSIS_FAILED / This page could not be checked.`
- Therefore this is useful partial evidence only; do **not** label the current site accessibility-clean.
- Desktop/mobile responsive visual QA still requires browser/editor access.

## New SEO flagship article workstream

**QUEUED — ONE ARTICLE ONLY**

Primary purpose: organic-search visibility, topical authority, qualified traffic, internal-link strength, and lead generation. Do not add content merely to increase article count.

Execution sequence:
1. Research realistic SEO opportunity/search intent first and choose the topic from evidence.
2. Define one primary query cluster plus secondary questions, audience, conversion path, and internal-link targets.
3. Create a materially useful source-backed outline with Behavioral Bridge's original systems/decision frameworks, examples, FAQs, and long-tail coverage.
4. Draft with descriptive H1/H2/H3 structure, clear answer-first passages, semantic terminology, and no keyword stuffing.
5. Generate several **separate original GPT-made visual assets** that explain the article: decision maps, process models, error-pattern diagrams, comparison visuals, etc. Do not use a collage or tiny baked-in text.
6. Upload/select images in Wix, use meaningful filenames/alt text where supported, and verify desktop/mobile readability.
7. Publish with unique SEO title, description, canonical URL, strong excerpt, appropriate hero/cover image, and available native Blog metadata/schema.
8. Add deliberate internal links to the relevant SAT/EF service page, Results, consultation, and related articles; add selected inbound links from Resources/relevant pages without spammy repetition.
9. Submit/inspect through Search Console only after domain/GSC readiness is working.
10. Measure impressions, queries, CTR, position, and qualified traffic over time; iterate from evidence. No ranking guarantee.

The topic is **not yet frozen** and must be chosen from SEO research when this workstream begins.

## External authority profiles

Wyzant and Superprof should eventually be reconciled with the current public website facts, especially Nearly 14 years experience, education wording, service focus, and Behavioral Bridge positioning.

Current limitation: no dedicated Wyzant/Superprof connector is available in this chat and the current browser connector is disconnected, so no account login/edit has been performed. Treat this as owner-assisted or future browser-enabled authority work; do not delay website completion for it.

## GitHub repository classification

Repository: `A1BlackLotus/GPT-Work`

### CURRENT
- `wix/CURRENT_STATE_2026-09-09.md` — this ledger; canonical website state.
- `wix/CURRENT_PRIORITY_EXECUTION_2026-09-09.md` — consolidated execution queue including proof, About, Resources/articles, consultation, routes, accessibility, domain/GSC, flagship SEO article, and external profile consistency.
- `wix/SAT_NATIVE_EDITOR_HANDOFF_2026-09-06.md` — supporting published-build evidence for Steps 1–5 and native article-reader debt; subordinate to current ledger/queue.
- `wix/native-vibe-consultation/src/pages/api/consultation.ts` — current recovery reference until Step 8 freeze.
- `wix/native-vibe-consultation/FRONTEND_HANDLER.example.tsx` — current recovery reference until Step 8 freeze.
- `wix/native-vibe-consultation/VIBE_APPLY_PROMPT.md` — **CURRENT — RECOVERY/APPLY REFERENCE UNTIL STEP 8 FREEZE**.
- `behavioral-bridge/math-interactives/` — **OUT OF SCOPE / DO NOT TOUCH**; current curriculum work, not website cleanup.

### ARCHIVE
- `wix/SAT_COLLISION_AUDIT_2026-09-06.md`
- `wix/SAT_STEP1_FREEZE_RECORD_TEMPLATE_2026-09-06.md`
- `wix/SAT_STEP2_METHOD_PROOF_CONVERSION_SPEC_2026-09-06.md`
- `wix/SITE_MAINTENANCE_2026-09-05.md`
- `wix/WORKSTREAM_HANDOFF.md`
- `wix/native-vibe-consultation/VIBE_ACCESS_BLOCKER.md`

### DELETE CANDIDATE
- root `Website` — one-byte blank file; safe to remove after explicit cleanup approval.
- `wix/consultation-bridge.js` — stale comment-only live-state pointer; Git history preserves it.
- `wix/native-vibe-consultation/NEXT_ACTION.md` — stale next action that can misdirect future work.

## Google Drive classification

**ARCHIVE**
- `CURRENT — Behavioral Bridge — SAT Desktop Action — 2026-09-06` — Drive file ID `1PBiVMkjgp64E3KBc4t3QA34SLxANURDTwUedGSKjNg4`. Its title says CURRENT, but its body predates the completed/frozen Steps 1–5. Rename/move to archive when Drive cleanup is performed.

**CURRENT / OUT OF SCOPE — DO NOT TOUCH**
- SAT Math production checkpoint and curriculum/master-guide files that only mention Wix incidentally. They belong to the curriculum production system, not this website cleanup.

## Deletion order when owner approves

Use this order to avoid destroying recovery evidence:

1. Snapshot DELETE-CANDIDATE disabled custom embeds.
2. Remove the one-byte GitHub `Website` file and stale `native-vibe-consultation/NEXT_ACTION.md`; remove `consultation-bridge.js` only after current ledger/README remain authoritative.
3. Remove disabled custom-embed DELETE candidates only after Steps 6–8 gates relevant to them are satisfied and rollback copies exist.
4. Trash the three noncanonical Wix sites only after one final visual/asset check confirms no unique content.
5. Keep the legacy `The Behavioral Bridg` site until permanent domain + redirects + indexing migration are complete; retire it last.

## Next execution order

0. Confirm About visibly reads `Nearly 14 years`; visually recheck Home + SAT + Results proof standard and verify black strip remains absent.
1. Finish and visually freeze Steps 6–7 Resources + native article reading.
2. Finish Step 8 consultation transport acceptance; only then reduce safety fallback and restore/retest spam protection.
3. Finish Step 9 header/footer/mobile navigation visual QA; the two legacy service redirects are already complete.
4. Complete Step 10 responsive/accessibility QA using current public pages; treat the partial Wix scan as incomplete evidence.
5. Complete Step 11 permanent domain + native-page SEO + stale `externalSiteUrl` reconciliation.
6. Clear Step 12 Search Console readiness (`SITE_OWNER_NOT_VERIFIED` currently blocks progress), then submit sitemap/indexing and inspect URLs.
7. Execute the **one SEO flagship article + custom-image project** as research → outline → draft → original visuals → publish → internal links → indexing → measurement.
8. Reconcile Wyzant/Superprof authority-profile wording when account/browser access permits.
9. Move into analytics, authority/distribution, qualified lead optimization, and frozen maintenance rather than more redesign.
10. Only after migration gates are secure, retire the old indexed Wix site and perform approved destructive cleanup.

## Destructive-action rule

Nothing in this file means “delete immediately.” No live site, custom embed, repository file, or Drive file was deleted while producing this ledger. Use explicit owner approval and the listed gates for any destructive action.