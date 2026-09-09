# Behavioral Bridge Website — Consolidated Current Execution Queue

Date: 2026-09-09
Status: CURRENT / ACTION QUEUE
Authority: live public Wix behavior > live Wix configuration > `CURRENT_STATE_2026-09-09.md` > this queue > older handoffs.

Primary objective: finish a reliable, credible website that produces **SEO visibility, qualified leads, and conversions**. Do not optimize for article count, decorative complexity, or endless redesign. Preserve frozen work and fix only verified defects.

## P0 — SITEWIDE PROOF + EXPERIENCE COHERENCE

Canonical public proof standard:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — Years of experience

Current state:
- Results Showcase `245d2c02-9ebb-4b3f-b863-53d787d8d13c` rev14 outputs the current proof standard.
- Proof Metrics Coherence Patch `0adc9e67-d1d6-43fa-bd06-abc7a923793f` rev5 remains ENABLED / TRANSITIONAL for stale Home/SAT proof text.
- Conversion Trust Strip `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` rev4 remains DISABLED; do not re-enable because of the black-strip/hydration defect.
- Core Authenticity `73a2dd88-1c32-44e4-a5a1-4e031f95e685` is now **rev13 / ENABLED**.
- Rev13 adds an **About-only hydration-safe experience sweep** that changes visible `12+ years` variants to `Nearly 14 years`, specifically to catch stale native About text after Wix rehydration.

Acceptance gate:
1. Home visibly shows 5.0 / 75+ / 350+ / Nearly 14.
2. SAT visibly shows the same proof standard.
3. Results visibly shows the same proof standard.
4. About visibly shows `Nearly 14 years`, with no remaining public `12+ years` experience language.
5. No duplicate `++` and no black strip.
6. Desktop + mobile visually checked when browser/editor access is available.

Status: **IMPLEMENTED / TECHNICALLY VERIFIED; FINAL PUBLIC VISUAL RECHECK PENDING.**

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

## P2 — RESOURCES + NATIVE ARTICLE READING — STEPS 6–7

Technical audit completed:
- Wix Blog contains exactly **12 published canonical articles**.
- All 12 canonical slugs present; no extras or duplicates.
- English, no Pricing Plan paywalls, substantial bodies, related-post relationships, no unpublished changes.
- Eight enabled Article Content V2 embeds are **data-only** and collectively carry all 12 article payloads; they do not intercept clicks or render pages.
- Old Resources Router rev15 and Article Reader rev17 remain disabled and should not be casually revived.
- Last verified native build confirms direct `/post/...` works, but the native reader still needs proper rich-content presentation: headings, lists, paragraph spacing, imagery, related navigation, loading/not-found/error states, and stale-request cancellation.
- Current environment exposes no supported native Vibe source-edit API; public/browser/editor verification remains required for completing this correctly.

Do not solve this by re-enabling the old overlay reader unless a deliberate rollback is chosen.

Status: **BLOG DATA HEALTHY; NATIVE ARTICLE-READER FINISH + VISUAL QA STILL PENDING.**

## P3 — CONSULTATION RELIABILITY — STEP 8

Current form:
- ID `b692e647-b20c-45b0-ae1d-2530df030907`
- revision **9** after a safe full-form update attempt
- all 9 input targets + submit button preserved; desktop layout still has 10 items
- `service_bb` remains visible as `Service Requested`
- Wix normalized `service_bb.required` back to false after the documented PATCH, so do not repeatedly mutate it speculatively

Current safety fallback:
- `b3ececaf-c221-4ad1-9590-4aa112486e11`
- revision **27 / ENABLED**
- still intentionally intercepts submission into a prepared email until native transport passes acceptance
- rev27 fixes a real defect: the typed `service_bb` text input is now included in `Service requested:` in the prepared email; previous code only inferred service from a select

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

## P4 — ROUTES / NAVIGATION — STEP 9

Completed 2026-09-09:
- exact permanent redirect `/sat-prep` → `/sat-tutoring`
  - redirect ID `af1b5e54-7400-445d-8b49-3c2a7f46bc16`
- exact permanent redirect `/executive-function` → `/ef-specialized-support`
  - redirect ID `4b135ca4-be14-4b21-9c63-d83f0bdf29f1`
- redirect table was empty before creation, so no chain or conflict was destroyed

Still pending:
- header/footer/mobile navigation visual QA
- duplicate logo/wordmark cleanup if still visible
- stale footer/archive copy review

Status: **LEGACY SERVICE ROUTE ALIASES COMPLETE; GLOBAL NAV/FOOTER QA PENDING.**

## P5 — RESPONSIVE + ACCESSIBILITY — STEP 10

Fresh full-site Wix accessibility scan started:
- scan ID `66388e09-c08f-4af6-b456-905417f02f0c`
- current state at last check: RUNNING
- 5 pages discovered; processing had not yet completed

Do not start duplicate scans. Poll this exact scan until terminal, then separate failed pages from clean pages and actionable findings.

Browser-only responsive checks remain pending until browser/editor access is available.

Status: **SCAN IN PROGRESS / VISUAL RESPONSIVE QA PENDING.**

## P6 — DOMAIN + TECHNICAL SEO + SEARCH CONSOLE — STEPS 11–12

This is the main launch-growth objective after core reliability.

Known SEO debt:
- main native Vibe routes still need strong native page-head titles/descriptions rather than raw-slug metadata
- Home has saved-vs-published metadata drift
- stale Site Properties `externalSiteUrl: https://TheBehavioralBridge.org` must not be changed blindly before the permanent domain is actually connected
- permanent preferred domain remains `BehavioralBridge.org`

Fresh Google Search Console readiness check:
- status: `NOT_READY`
- blocking reason: `SITE_OWNER_NOT_VERIFIED`

Do not request indexing or present Search Console as ready until readiness is cleared.

Status: **HIGH PRIORITY; DOMAIN/VERIFICATION + NATIVE PAGE METADATA BLOCKERS REMAIN.**

## P7 — ONE SEO FLAGSHIP ARTICLE + CUSTOM GPT-MADE VISUALS — NEW GOAL

Create **one additional article only** because it has a clear organic-search purpose. The goal is ranking potential, topical authority, qualified traffic, and internal-link value—not simply making article #13.

Required multi-step process:
1. **SEO opportunity research first** — choose the topic from realistic search intent / keyword opportunity that supports Digital SAT and/or Executive Function lead generation. Do not pick the topic just because it sounds interesting.
2. Define one primary query cluster plus secondary questions, search intent, audience, conversion path, and internal-link targets.
3. Build a source-backed outline that is materially more useful than generic tutoring content: original framework, examples, decision rules, FAQ/long-tail coverage, and clear student/parent usefulness.
4. Draft the article for humans first while preserving search clarity: descriptive H1/H2/H3 structure, concise answer-first passages, semantic terminology, useful tables/checklists where appropriate, no keyword stuffing.
5. Create **several original GPT-made custom images as separate assets**, not a collage and not text baked into unreadable screenshots. Images should genuinely explain the article: e.g. decision map, error-pattern diagram, process model, or comparison visual.
6. Upload/select those images in Wix with meaningful filenames/alt text where supported and verify mobile readability.
7. Publish with unique SEO title, description, canonical URL, strong excerpt, appropriate cover/hero image, and schema/native metadata available to the blog system.
8. Add deliberate internal links from the article to the most relevant SAT/EF service page, Results, consultation, and related existing articles; add selected inbound internal links from Resources and relevant existing pages without spammy repetition.
9. Submit/inspect through Search Console only after domain + GSC readiness is working.
10. Measure impressions, queries, CTR, position, and qualified traffic over time. Improve title/description/internal links/content only from evidence; no ranking guarantees.

Topic is **not frozen yet**. Choose it from SEO research when this workstream begins.

Status: **QUEUED / SEO-FIRST / ONE ARTICLE.**

## P8 — EXTERNAL AUTHORITY PROFILE CONSISTENCY

Wyzant and Superprof should eventually be checked for consistency with the current public website facts, especially:
- Nearly 14 years experience
- current education wording
- current Behavioral Bridge positioning
- accurate service focus

Current limitation: no dedicated Wyzant/Superprof connector is available in this chat and the browser connector is currently disconnected, so no account login/edit has been performed. Treat this as an owner-assisted or future browser-enabled authority task, not a reason to delay the website.

Status: **QUEUED / EXTERNAL PROFILE CONSISTENCY.**

## P9 — ANALYTICS + AUTHORITY + DISTRIBUTION — STEPS 13–15

After the site is reliable and GSC/domain are ready:
- establish useful conversion measurement, not redundant analytics clutter
- monitor organic landing pages, consultation conversions, and source quality
- distribute strongest articles/resources through appropriate channels and referral sources
- improve internal linking and authority based on real query/traffic data
- freeze the visual site once complete and shift effort from redesign toward traffic, authority, referrals, and conversion

Status: **PENDING AFTER CORE LAUNCH GATES.**

## DO NOT TOUCH / SAFETY RULES

- Do not redesign frozen Steps 1–5 absent regression.
- Do not revive the black trust strip.
- Do not remove consultation safety fallback before the full acceptance gate.
- Do not invent credentials, scores, testimonials, rankings, scholarship claims, or SEO guarantees.
- Do not delete duplicate sites/embeds/repository recovery evidence without explicit destructive-action approval and safety checks.
- Do not purchase a plan/domain or change DNS without explicit authority.
- Do not create multiple low-value SEO articles; the new content goal is one high-value flagship piece first.

## CURRENT EXECUTION ORDER

1. Confirm About now visibly reads `Nearly 14 years`; complete final proof visual recheck when browser access returns.
2. Finish Steps 6–7 native Resources/article reader and visual QA.
3. Finish Step 8 native consultation acceptance; then reduce the fallback safely.
4. Finish Step 9 header/footer/mobile nav QA; route aliases are already repaired.
5. Complete Step 10 accessibility scan + responsive QA.
6. Complete Step 11 domain + native-page technical SEO.
7. Complete Step 12 Search Console verification/indexing.
8. Execute the **one SEO flagship article + custom-image project** as a structured research → content → images → publish → internal links → indexing → measurement workflow.
9. Reconcile Wyzant/Superprof profile wording when account/browser access permits.
10. Move into analytics, authority, distribution, lead optimization, and frozen maintenance rather than more redesign.
