# Behavioral Bridge Website — Consolidated Current Execution Queue

Date: 2026-09-09
Status: CURRENT / ACTION QUEUE
Authority: live public Wix behavior > current screenshots/public render > live Wix configuration > `CURRENT_STATE_2026-09-09.md` > this queue > older handoffs.

Primary objective: finish a reliable, credible website that produces **SEO visibility, qualified leads, and conversions**. Do not optimize for article count, decorative complexity, or endless redesign. Preserve frozen work and fix only verified defects.

Supporting screenshot-QA record: `wix/SCREENSHOT_QA_CURRENT_2026-09-09.md`.

## P0 — SITEWIDE PROOF + EXPERIENCE COHERENCE

Canonical public proof standard:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — Years of experience

Current state:
- Results Showcase `245d2c02-9ebb-4b3f-b863-53d787d8d13c` rev14 outputs the current proof standard.
- Proof Metrics Coherence Patch `0adc9e67-d1d6-43fa-bd06-abc7a923793f` is now **rev6 / ENABLED / TRANSITIONAL**.
- Rev6 broadens the experience repair beyond earlier exact strings. On core public routes it can now recognize `12+`, plain `12`, `12 years`, `12+ years`, split-card variants, and experience contexts including `years of experience`, `years experience`, `years in education`, `years across`, `experience across`, `specialized experience`, `academic experience`, and `education experience`.
- It still changes only experience-context 12-year text; unrelated numerical 12s are not targeted.
- Home/SAT proof repair remains 75+ / 350+ / Nearly 14 and retains the duplicate-plus normalization from rev5.
- Conversion Trust Strip `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` rev4 remains DISABLED; do not re-enable because of the black-strip/hydration defect.
- Core Authenticity `73a2dd88-1c32-44e4-a5a1-4e031f95e685` rev13 remains ENABLED and includes the About-specific hydration-safe experience sweep.

New visual evidence 2026-09-09:
- Ryan supplied a large set of mostly-current screenshots showing stale 12-year language on multiple public pages, confirming this is a sitewide visual regression rather than an About-only issue.
- Screenshot truth outranks older backend assumptions; rev6 exists specifically to catch those remaining native text arrangements.

Acceptance gate:
1. Home visibly shows 5.0 / 75+ / 350+ / Nearly 14.
2. SAT visibly shows the same proof standard.
3. Results visibly shows the same proof standard.
4. About/EF/other current public pages show `Nearly 14` wherever experience is stated; no visible current `12 years`/`12+ years` remains.
5. No duplicate `++` and no black strip.
6. Desktop + mobile visually checked when browser/editor access is available.

Status: **REV6 IMPLEMENTED / TECHNICALLY VERIFIED; FINAL PUBLIC VISUAL RECHECK PENDING.**

## P1 — ABOUT / FOUNDER CREDIBILITY

Supported current wording:
- Ryan M. Carvalho
- B.S. in Psychology, magna cum laude — Bridgewater State University
- Nearly 14 years of education / tutoring / student-support experience
- Boston Latin, Brookline, and Newton school-environment experience
- Post-baccalaureate study at Boston College
- Graduate coursework at Harvard University

Current About sentence:
`His post-baccalaureate education includes study at Boston College and graduate coursework at Harvard University.`

Do not invent:
- Harvard degree
- Boston College degree
- named Harvard certificate title not recovered from records
- named BC post-baccalaureate program title not recovered from records
- changing school-rank numbers without source + year
- full-scholarship claim without exact documentation

Status: **STRONGER SUPPORTED CREDENTIAL WORDING LIVE; EXACT HISTORICAL PROGRAM/CERTIFICATE TITLES OPTIONAL IF LATER RECOVERED.**

## P2 — SCREENSHOT QA DEFECTS — CURRENT VISUAL PASS

Ryan supplied current/mostly-current screenshots exposing three concrete visual defects that remain tracked on top of the existing roadmap.

### A. Remaining 12-year wording
- Sitewide issue confirmed visually.
- Proof Metrics Coherence rev6 is the current transitional repair.
- Native source should eventually be corrected directly and the runtime patch retired after visual verification.

Status: **IMPLEMENTED TRANSITIONALLY / VISUAL RECHECK PENDING.**

### B. Results top-right clipped response-time element
Investigation:
- screenshot shows a clipped/cropped top-right element that appears to communicate a response-time message such as responding within 24 hours
- enabled-custom-embed audits found no active script that itself renders `within 24`, `24 hour`, `respond`, `reply`, `response time`, `typically`, or similar wording
- Consultation Safety rev27 is route-gated to consultation routes and is not the source
- Results Showcase rev14 contains no response-time badge/callout
- Results Showcase hides native children inside `<main>`, so a native floating element outside `<main>` can escape the hide and remain clipped

Repair:
- `4bb4aa54-4956-4a44-af3d-6dbf0ca78d54`
- `Behavioral Bridge — Results Stray Response Badge Cleanup`
- revision **1 / ENABLED / BODY_END / TRANSITIONAL**
- route-limited behavior: only on `/results`
- hides only a small stray element whose visible text matches response-time wording involving `respond/reply` plus `24`/`business day` or `typically respond/reply`
- excludes the Results Showcase itself
- restores the element automatically after leaving `/results`
- creates no new visible UI, bar, overlay, or content

A first attempt to fit this repair inside Results Showcase was rejected by Wix because rev14 is already near the 15,000-character custom-embed limit. That failed attempt caused **no Results Showcase mutation**.

Status: **IMPLEMENTED TRANSITIONALLY / VISUAL RECHECK PENDING.**

### C. Two poor Resources article cover images
Affected existing posts:
1. `21945cef-4d24-4bc8-8b4b-6001ca7d7404` — `The Homework Problem Is Often an Initiation Problem` — slug `homework-initiation-executive-function`
2. `c07b0cad-b856-4e4a-8afd-a07db6944e3e` — `Why Motivation Is the Wrong Target for Executive Function` — slug `why-motivation-is-wrong-target-executive-function`

Original state:
- both PUBLISHED
- no unpublished changes
- no hero image
- cover media displayed but `custom:false`, causing Wix to fall back to weak document-like imagery

Replacement assets now live in Wix Media:
- initiation cover: `445f86_e228e6e7b201423b82c59cafb022bbc3~mv2.png`
- motivation/systems cover: `445f86_6476bad82bd140e8a4d24dff440a3a67~mv2.png`

Blog update:
- bulk action: `UPDATE_PUBLISH`
- field mask targeted **media only**
- successes: **2**
- failures: **0**
- meaningful alt text supplied
- titles, slugs, bodies, related-post configuration, and SEO were not intentionally changed

Rejected generation attempts:
- earlier multi-panel/collage image outputs were not used as covers

Status: **REPLACED + PUBLISHED / TECHNICALLY VERIFIED / VISUAL RECHECK PENDING.**

## P3 — RESOURCES + NATIVE ARTICLE READING — STEPS 6–7

Technical audit completed:
- Wix Blog contains exactly **12 published canonical articles**.
- All 12 canonical slugs present; no extras or duplicates.
- English, no Pricing Plan paywalls, substantial bodies, related-post relationships, no unpublished changes before the two media-only cover updates above.
- Eight enabled Article Content V2 embeds are **data-only** and collectively carry all 12 article payloads; they do not intercept clicks or render pages.
- Old Resources Router rev15 and Article Reader rev17 remain disabled and should not be casually revived.
- Last verified native build confirms direct `/post/...` works, but the native reader still needs proper rich-content presentation: headings, lists, paragraph spacing, imagery, related navigation, loading/not-found/error states, and stale-request cancellation.
- Current environment exposes no supported native Vibe source-edit API; public/browser/editor verification remains required for completing this correctly.

Do not solve this by re-enabling the old overlay reader unless a deliberate rollback is chosen.

Status: **BLOG DATA HEALTHY; TWO WEAK COVERS REPAIRED; NATIVE ARTICLE-READER FINISH + VISUAL QA STILL PENDING.**

## P4 — CONSULTATION RELIABILITY — STEP 8

Current form:
- ID `b692e647-b20c-45b0-ae1d-2530df030907`
- revision 9 after a safe full-form update attempt
- all 9 input targets + submit button preserved
- `service_bb` remains visible as `Service Requested`
- Wix normalized `service_bb.required` back to false after the documented PATCH; do not repeatedly mutate it speculatively

Current safety fallback:
- `b3ececaf-c221-4ad1-9590-4aa112486e11`
- revision **27 / ENABLED**
- route-gated to consultation routes
- still intentionally intercepts submission into a prepared email until native transport passes acceptance
- rev27 fixes the typed `service_bb` extraction defect

Still required before removing fallback:
1. native nine-field submission path
2. frontend validation including service
3. in-flight guard / no duplicate sends
4. preserve entered values on failure
5. success only after confirmed Wix record
6. inline email fallback
7. two consecutive live TEST ONLY submissions, exactly one confirmed record each + owner notification each
8. BASIC spam protection restored and retested

Status: **FALLBACK IMPROVED; NATIVE TRANSPORT ACCEPTANCE PENDING.**

## P5 — ROUTES / NAVIGATION — STEP 9

Completed 2026-09-09:
- exact permanent redirect `/sat-prep` → `/sat-tutoring`
- exact permanent redirect `/executive-function` → `/ef-specialized-support`
- redirect table was empty before creation

Still pending:
- header/footer/mobile navigation visual QA
- duplicate logo/wordmark cleanup if still visible
- stale footer/archive copy review

Status: **LEGACY SERVICE ROUTE ALIASES COMPLETE; GLOBAL NAV/FOOTER QA PENDING.**

## P6 — RESPONSIVE + ACCESSIBILITY — STEP 10

Fresh full-site Wix accessibility scan:
- scan ID `66388e09-c08f-4af6-b456-905417f02f0c`
- status PARTIALLY_COMPLETED
- 5 pages discovered, 4 processed, 1 failed analysis
- 0 findings across the four processed pages
- checked categories included alternative text, color contrast, heading structure, keyboard, and screen-reader support

Important limitation:
- Wix scanned an older internal `ryancarvalho6.wixsite.com/wix-vibe-site-5cld/...` hostname rather than the canonical public Vibe hostname.
- root page failed with ANALYSIS_FAILED.
- therefore this is partial evidence only, not proof the current public site is accessibility-clean.

Browser-only responsive checks remain pending until browser/editor access is available.

Status: **PARTIAL ACCESSIBILITY EVIDENCE; CURRENT-PUBLIC VISUAL RESPONSIVE QA PENDING.**

## P7 — DOMAIN + TECHNICAL SEO + SEARCH CONSOLE — STEPS 11–12

This is the main launch-growth objective after core reliability.

Fresh Wix Vibe-aware SEO resolver audit confirms current emitted metadata:
- `/` → title `Behavioral Bridge`; generic description
- `/sat-tutoring` → raw `sat-tutoring | Behavioral Bridge`; generic description
- `/ef-specialized-support` → raw `ef-specialized-support | Behavioral Bridge`; generic description
- `/about` → raw `about | Behavioral Bridge`; generic description
- `/results` → raw `results | Behavioral Bridge`; generic description
- `/resources` → raw `resources | Behavioral Bridge`; generic description
- `/book-consultation` → raw `book-consultation | Behavioral Bridge`; generic description
- all currently self-canonical and indexable

Home static SEO item `tuckg` still stores the stronger approved title/description, and a publish=true Set was issued successfully, but the Vibe-aware resolver continued to emit the old Home metadata afterward. This confirms the problem is the native Vibe/head layer rather than merely an unpublished Item SEO override. Do not repeatedly re-write the same Home item.

Other known debt:
- stale Site Properties `externalSiteUrl: https://TheBehavioralBridge.org` must not be changed blindly before permanent domain connection
- permanent preferred domain remains `BehavioralBridge.org`
- Search Console readiness remains `NOT_READY / SITE_OWNER_NOT_VERIFIED`
- Wix GSC docs require a published site, connected domain, and indexability before site verification can succeed

Status: **HIGH PRIORITY; NATIVE PAGE-HEAD + DOMAIN/VERIFICATION BLOCKERS REMAIN.**

## P8 — ONE SEO FLAGSHIP ARTICLE + CUSTOM VISUALS

Research is complete and the full draft is written.

Selected flagship topic:
**Digital SAT Prep for Students with ADHD: A Focus, Timing, and Executive Function Guide**

Canonical files:
- research/production spec: `wix/SEO_FLAGSHIP_ARTICLE_2026-09-09.md`
- full draft: `wix/seo/DRAFT_DIGITAL_SAT_ADHD_EXECUTIVE_FUNCTION_GUIDE_2026-09-09.md`

Draft status:
- source-backed human-first draft complete
- recommended slug: `digital-sat-prep-adhd-executive-function`
- SEO title/meta drafted
- primary/secondary query clusters defined
- internal-link targets defined
- FAQ coverage included
- accommodation language deliberately avoids diagnosis/eligibility promises
- official College Board structure/Bluebook/accommodation references identified for publication fact-check

Planned custom visuals for flagship article:
1. SAT Performance Pipeline — Content Knowledge → Decision Process → Attention Control → Execution → Score
2. Classify → Activate → Predict → Prove attention-safe decision loop
3. Diagnose → Repair → Micro-Redo → Transfer feedback loop
4. Hyperfocus Time Trap comparison

Do **not** publish the flagship article until the native article-reader/visual QA gate is acceptable and final images are ready.

Status: **RESEARCH + FULL DRAFT COMPLETE; FINAL CUSTOM VISUALS + PUBLISHING PENDING.**

## P9 — EXTERNAL AUTHORITY PROFILE CONSISTENCY

Wyzant and Superprof should eventually be checked for consistency with the current public website facts, especially:
- Nearly 14 years experience
- current education wording
- current Behavioral Bridge positioning
- accurate service focus

Current limitation: no dedicated Wyzant/Superprof account connector is available in this chat and the browser connector is currently disconnected, so no account login/edit has been performed.

Status: **QUEUED / EXTERNAL PROFILE CONSISTENCY.**

## P10 — ANALYTICS + AUTHORITY + DISTRIBUTION — STEPS 13–15

After the site is reliable and GSC/domain are ready:
- establish useful conversion measurement, not redundant analytics clutter
- monitor organic landing pages, consultation conversions, and source quality
- distribute strongest articles/resources through appropriate channels and referral sources
- improve internal linking and authority based on real query/traffic data
- freeze the visual site once complete and shift effort from redesign toward traffic, authority, referrals, and conversion

Status: **PENDING AFTER CORE LAUNCH GATES.**

## DO NOT TOUCH / SAFETY RULES

- Do not redesign frozen Steps 1–5 absent regression.
- Screenshot/public render is visual truth; technical success alone is not visual success.
- Do not revive the black trust strip.
- Do not remove consultation safety fallback before the full acceptance gate.
- Do not invent credentials, scores, testimonials, rankings, scholarship claims, or SEO guarantees.
- Do not delete duplicate sites/embeds/repository recovery evidence without explicit destructive-action approval and safety checks.
- Do not purchase a plan/domain or change DNS without explicit authority.
- Do not create multiple low-value SEO articles; the new content goal is one high-value flagship piece first.
- Do not upload rejected collage/image-generation outputs as article covers.

## CURRENT EXECUTION ORDER

1. **Visual acceptance of screenshot-QA fixes:** confirm rev6 removes remaining visible 12-year wording, confirm the Results corner badge is gone, confirm the two new Resources covers look correct, and confirm black strip/double-plus regressions remain absent.
2. Finish Steps 6–7 native Resources/article reader and visual QA.
3. Finish Step 8 native consultation acceptance; then reduce the fallback safely.
4. Finish Step 9 header/footer/mobile nav QA; route aliases are already repaired.
5. Finish Step 10 current-public responsive/accessibility QA; Wix scan is partial evidence only.
6. Complete Step 11 permanent domain + native-page technical SEO.
7. Complete Step 12 Search Console verification/indexing.
8. Finish the flagship article custom visuals, publication, internal linking, indexing, and later measurement.
9. Reconcile Wyzant/Superprof profile wording when account/browser access permits.
10. Move into analytics, authority, distribution, lead optimization, and frozen maintenance rather than more redesign.
