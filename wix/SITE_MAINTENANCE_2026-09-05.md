# Behavioral Bridge — Site Maintenance Audit

## Date
2026-09-05

This file records the site-management work completed after the consultation repair handoff. It does **not** replace `wix/WORKSTREAM_HANDOFF.md`; that file remains the canonical consultation-transport handoff.

## Current Vibe site

- Site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Live URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`

## Business profile cleanup completed

Verified current Site Properties:

- Site display name: `Behavioral Bridge`
- Business name: `Behavioral Bridge`
- Email: `Ryan_Carvalho@BehavioralBridge.org`
- Phone: `+15087740989`
- Timezone: `America/New_York`
- Description: `Behavioral Bridge provides Digital SAT tutoring, executive-function coaching, specialized academic support, and parent consultation for students in Boston, Brookline, Newton, and nationwide online.`

The prior Vibe-generated business description and missing contact fields were replaced successfully.

One stale Site Properties field still reads `externalSiteUrl: https://TheBehavioralBridge.org`. No supported mutation for that field was found in the current Site Properties API. Do not guess an endpoint. The live site itself remains the Vibe URL until a permanent domain is connected.

## Static-page SEO cleanup completed

### Home
Saved page SEO override now resolves through Item SEO Tags as:

- Title: `Behavioral Bridge | SAT Tutoring & Executive Function Coaching`
- Description: `Premium Digital SAT tutoring and executive-function coaching from Behavioral Bridge. Serving Boston, Brookline, Newton, and students nationwide online.`

The static-item SEO API shows these as `TAG_SOURCE_HOST_PAGE` overrides and propagates them to Open Graph/Twitter resolved tags.

### Resources / Blog
`/resources` remains redirected to `/blog`.

`/blog` now has:

- Title: `SAT Prep & Executive Function Resources | Behavioral Bridge`
- Description: `Practical Digital SAT prep and executive-function resources from Behavioral Bridge for students and families.`

Saved and published writes both succeeded.

### Unused/system pages
The following pages were set to `robots: noindex` in both saved and published SEO revisions:

- `/cart-page` — item ID `axrbc`
- `/thank-you-page` — item ID `iyg3g`
- `/shop` — item ID `tg5gp`

The first attempt used `noindex, follow`, which Wix rejected as an unsupported robots value. The corrected supported value is exactly `noindex`.

Site-wide SEO audit found no site-level `noindex` directive.

## Resource article SEO completed

All 8 live Behavioral Bridge blog/resource posts now have explicit per-post meta descriptions. Bulk write result: 8 successes, 0 failures. Follow-up Item SEO Tags reads show the descriptions as `TAG_SOURCE_ITEM`; posts remain `PUBLISH_STATUS_PUBLISHED`.

The 8 articles are:

1. Why More SAT Practice Often Fails
2. Accuracy Before Speed: The SAT Timing Mistake That Costs Strong Students Points
3. The 5 SAT Reading & Writing Error Patterns That Keep Strong Students Below 700
4. How High-Scoring Students Actually Use Desmos on the Digital SAT
5. Why Smart Students Still Procrastinate
6. How Parents Can Support SAT Prep Without Becoming the SAT Police
7. What Executive Function Actually Looks Like in a High-Achieving Teen
8. The Behavioral Bridge Method: Systems, Strategy, Behavior, Performance

The draft-post excerpts were also improved and republished successfully: 8 successes, 0 failures.

## Consultation form state reverified

Canonical form:

- Form ID: `b692e647-b20c-45b0-ae1d-2530df030907`
- Revision: `8`
- Enabled: `true`
- Spam protection: `NONE` (still intentionally temporary)
- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

Current form fields remain intact, including `service_bb`.

Submission query still returns exactly 4 confirmed records. No new live public-page proof has appeared since the Sep. 3 backend/system test. Therefore:

- Do **not** declare the public automatic form fixed.
- Do **not** restore spam protection to BASIC yet.
- Do **not** remove the email safety mode yet.
- Require two new consecutive live-site `CONFIRMED` submissions plus owner email notifications after the native Vibe source patch is deployed.

## Notification automation reverified

Automation `2695710a-a944-4fbd-9fe6-a7341b8cf53f` is still `ACTIVE`.

It is filtered to canonical form `b692e647-b20c-45b0-ae1d-2530df030907` and sends to `Ryan_Carvalho@behavioralbridge.org`.

Do not recreate or casually modify it.

## Custom embeds reverified

8 custom embeds exist. Only one is enabled:

- `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge — Consultation Safety Banner v8`
- Revision: `17`
- Enabled: `true`
- Position: `BODY_START`
- Category: `ESSENTIAL`
- Still sitewide

The old consultation connector and old Resources Hub/article embeds remain disabled. Keep them disabled.

The active safety embed still intercepts the detected consultation submit button and opens a prefilled email. This is intentional until the native Vibe/Astro endpoint is actually deployed and live-tested.

## Accessibility audit

Full-site scan ID: `46b1d320-5c30-4c83-9f78-306c15b3a5b3`

Result: `PARTIALLY_COMPLETED`

- Discovered pages: 5
- Successfully scanned: 4
- Failed pages: 1
- Findings on successfully scanned pages: 0
- Site-level findings: 0

Successfully scanned with zero findings:

- `/blog`
- `/cart-page`
- `/shop`
- `/thank-you-page`

The home page failed analysis, so it is **unknown**, not clean.

A dedicated home-page retry was run:

- Scan ID: `16dd453e-a42d-4248-b3d1-ca2c6a1e9878`
- Final status: `FAILED`
- Failure: `ACCESSIBILITY_SCAN_FAILURE_CODE_ANALYSIS_FAILED`
- Message: `No usable accessibility scan result was produced.`

Do not keep retrying the same home scan without a meaningful site/editor change; the Wix scanner failed twice on that page.

## Legacy Wix site audit

Legacy site:

- ID: `adfac523-4bcc-4d88-8117-bf7e7f32ea92`
- URL: `https://ryanmcarvalho444.wixsite.com/thebehavioralbridge`

Read-only audit found stale legacy properties:

- Display name: `The Behavioral Bridg`
- Business name: `The Behavioral Bridge`
- Description: `Empowering success through collaborative ABA solutions`
- Category: `health-wellness`
- Secondary category: `Therapy Services`

An attempted Business Profile correction was rejected with `403 PERMISSION_DENIED` for `SITE_PROPERTIES.UPDATE_BUSINESS_PROFILE`. Do not repeatedly retry through this connection. The current Wix identity can read the old site but does not have permission to update those site properties. The user can still edit the old site by switching to the owning Wix account in the UI.

## Remaining highest-value work

1. Deploy the prepared native `/api/consultation` endpoint and frontend integration inside the actual Vibe source environment.
2. After deployment, change the safety embed from form-intercept mode to banner-only/direct-email backup so it no longer blocks the native handler.
3. Run two consecutive realistic public submissions and verify both new Wix records are `CONFIRMED` and both owner notification emails arrive.
4. Then restore form spam protection to at least `BASIC` and run another verification submission.
5. Only after that reduce/remove the aggressive sitewide consultation warning.
6. When a permanent domain is connected, update canonical URLs/domain-dependent branding while preserving email DNS.

## Guardrails

- Keep `wix/WORKSTREAM_HANDOFF.md` as the consultation transport source of truth.
- Keep custom embed `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
- Do not create duplicate forms or automations.
- Do not count the Sep. 3 server-side repair test as a live public-page proof.
- Do not show visitor success until final backend status is exactly `CONFIRMED`.
