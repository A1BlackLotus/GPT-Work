# Behavioral Bridge Consultation — Workstream Handoff

## Live update — 2026-09-05

- The active safety embed `b3ececaf-c221-4ad1-9590-4aa112486e11` is now revision `20`.
- A reversible route guard was added to send `/resources` to the canonical `/blog` hub and rewrite the legacy external archive footer link to `/blog`.
- The safety banner, direct-email fallback, and retired connector state were preserved.
- The consultation fallback now adds student name, grade/year, goals, and availability inputs to the direct-email request.
- The temporary `/resources` redirect was removed and replaced with a live resource hub linking to eight published Wix Blog articles with canonical `/post/...` URLs.
- The native Vibe/Astro consultation source is still not deployed; do not remove the safety interception or claim native-form success until two new public submissions become `CONFIRMED`.

## Status — 2026-09-03

The consultation flow is still under production repair. This file is the coordination source for the current website thread and the prior `Explain Repo Authentication` workstream. Do not create a second live submit handler.

## Live site

- Wix site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Live Vibe URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Consultation route: `/consultation`
- Official Wix Editor URL API now confirms the Picasso/Vibe editor URL is `https://vibe.wix.com/projects/e6f68a23-cc00-421a-985e-515963cbe5f0/v/editor`
- Official preview URL: `https://vibe.wix.com/preview/e6f68a23-cc00-421a-985e-515963cbe5f0`

## Wix Forms backend

Canonical form ID: `b692e647-b20c-45b0-ae1d-2530df030907`

Current form revision: `8`

Verified storage targets:

| Target | Label | Type |
| --- | --- | --- |
| `first_name_bb` | Parent / Contact First Name | STRING |
| `last_name_bb` | Parent / Contact Last Name | STRING |
| `email_bb` | Email | STRING / email validation |
| `phone_bb` | Phone | STRING / phone validation |
| `student_name_bb` | Student Name | STRING |
| `student_grade_bb` | Student Grade | STRING |
| `service_bb` | Service Requested | STRING |
| `goals_bb` | What are you looking for help with? | STRING |
| `availability_bb` | General Availability | STRING |

`service_bb` was added on Sep. 3 after the live Vibe page's service dropdown was identified as missing from the backend schema. The visible site keeps its service dropdown; `service_bb` is the stable backend string target used to store the selected service label/value.

Two initial attempts to append a new field while echoing the entire GET response caused Wix to increment the form revision but silently omit the new field. The successful update used the minimal documented Update Form body while preserving all existing field objects and layout. Do not repeat the failed whole-object pattern casually.

Current form diagnostic state:

- Enabled: `true`
- Spam protection: `NONE` temporarily while transport reliability is diagnosed
- Site's current Wix Forms restriction: 10 input fields per form; this form now has 9 input fields plus the submit display field
- No form submission limit is configured
- Automation linkage preserved: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

Spam filtering has been ruled out as a sufficient explanation because the live browser flow failed under ADVANCED, BASIC, and NONE.

## Canonical live safety embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Current live name: `Behavioral Bridge — Consultation Safety Banner v8`
- Current live revision: `20`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_START`
- `loadOnce`: `false`
- `pageFilter`: none, so the safety banner is currently sitewide by design

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

### Revision 20 visible behavior

1. A large premium sitewide **EMAIL RYAN DIRECTLY →** banner appears near the top of every page while the automatic consultation transport remains untrusted.
2. The warning is now explicit: the website form has had an intermittent delivery problem, a prior request may never have reached Ryan, and visitors should not rely on the website form alone until it is fully verified.
3. The direct-email button opens the visitor's email app addressed to `Ryan_Carvalho@BehavioralBridge.org` with a consultation subject and starter message.
4. The existing consultation form remains visible.
5. When the live form can be detected, its button is changed to **EMAIL RYAN THIS REQUEST →** and its visible form values are assembled into a prefilled email.
6. A visible note is inserted above that button explaining that the button opens the visitor's email app and that they must press **Send** there to complete the request.
7. The flaky public-browser Wix Forms POST is not used while safety mode is active.

The user has confirmed the banner is visibly rendering. The sitewide placement is intentionally more aggressive than the intended permanent design. Keep it sitewide until a reliable native/server-side submission path is proven; after that, move the prominent warning to the consultation page only while retaining a direct-email backup.

## Production evidence

The original three confirmed submissions were created around 01:47 and 01:53 UTC on Sep. 3. Multiple later realistic submissions from the public Vibe form did **not** create additional backend records, including attempts with different names, phone numbers, contact emails, and service selections.

A fourth submission was deliberately created by the repair workflow on Sep. 3 at about 20:16 UTC to verify the newly added `service_bb` target and the correct server-side lifecycle:

- Submission ID: `16982083-1aa6-4fff-be6b-b156c67553a6`
- Clearly labeled `TEST ONLY - Native Repair Prep`
- `service_bb`: `Digital SAT Tutoring`
- Create Submission returned `PENDING`
- `Confirm Submission` immediately transitioned it to `CONFIRMED`
- The existing owner notification automation then sent a real email to `Ryan_Carvalho@behavioralbridge.org`
- Gmail verification found that new notification in the Inbox at `2026-09-03T20:16:19Z`

This is important: the **backend create → confirm → notification path is now proven end-to-end, including `service_bb`**. It does **not** prove the public Vibe page is fixed, because the native endpoint/frontend source patch has not yet been deployed into the actual Vibe source.

## Correct native submission lifecycle discovered

The Forms API has an explicit confirmation operation. The reliable server-side contract is:

1. Create the form submission.
2. If it is `PENDING`, call Confirm Submission using its submission ID.
3. Only report success to the visitor after Wix returns `CONFIRMED`.

This is stronger than trying to force `status: CONFIRMED` in the initial Create Submission request. During the Sep. 3 verification, the Create call returned `PENDING` even when CONFIRMED had been requested, and the separate Confirm operation reliably produced `CONFIRMED`.

Official SDK supports the same flow with `@wix/forms`:

- `submissions.createSubmission(...)`
- `submissions.confirmSubmission(submissionId)`
- both can be wrapped server-side with `auth.elevate()` from `@wix/essentials`

## Native Vibe repair prepared in GPT-Work

Prepared source/reference files:

- `wix/native-vibe-consultation/src/pages/api/consultation.ts`
- `wix/native-vibe-consultation/VIBE_APPLY_PROMPT.md`

The prepared endpoint:

- runs as an Astro server route at `/api/consultation` once placed into the actual Vibe source;
- validates and length-limits public inputs;
- normalizes phone values;
- includes a honeypot field;
- maps all current backend targets including `service_bb`;
- uses server-side `auth.elevate()` rather than visitor OAuth in the browser;
- deliberately creates a `PENDING` record and confirms it with `submissions.confirmSubmission()`;
- returns `ok: true` only after final Wix status is `CONFIRMED`;
- returns a direct-email fallback on any error or non-confirmed state.

The apply prompt tells the Vibe coding environment to locate the existing `/consultation` component, preserve its design, POST its fields to `/api/consultation`, remove old browser-OAuth/mock-success submit code, and never clear/show success unless the server returns confirmed status and a submission ID.

These GitHub files are **prepared recovery/source instructions only**. `GPT-Work` is still not the deployed Vibe source repository.

## Direct source-access investigation

Fresh Sep. 3 API investigation established the exact boundary rather than guessing it:

- Wix's official Editor URLs API recognizes this site as editor type `PICASSO` and returns the Vibe editor project path using the same GUID as the site ID.
- The public Wix **Containers Chat API**, documented for the Wix AI coding agent, was then queried using that exact project/site GUID.
- Query Conversations returned **404** through both site-scoped and account-scoped connected Wix access.
- Therefore the connected management API cannot currently drive the Vibe coding agent for this existing site, even though the official editor URL identifies the project path.
- Wix REST documentation search did not expose a separate public Picasso/Vibe source-file update API.
- Wix CLI documentation does not expose a supported clone/download flow for taking over an existing Vibe/Picasso source tree. The available headless `link/init` flows provision a new Wix-managed project instead of attaching to this existing Vibe project, so they must not be used as a substitute.
- Standard Git Integration & Wix CLI for Sites documentation describes setup through Wix Studio or Wix Editor; it does not establish a direct API path for this existing Vibe site.
- Wix Forms dashboard documentation confirms a **Standalone form** feature exists in the dashboard, but REST documentation currently exposes no supported API for converting this existing consultation schema into a permanent standalone public URL or retrieving such a URL. Do not invent one.
- Intake Forms can generate a shareable URL, but those are a different namespace/use case and links expire after 72 hours; do not create a duplicate intake form as the permanent consultation fix.

Result: the native code is ready, but the actual Vibe source deployment still requires entering the Vibe editor/source environment unless Wix exposes additional project-source access later.

## Why the public automatic form is not currently trusted

Several browser-side hypotheses were tested and were not sufficient on their own:

- ADVANCED spam protection
- BASIC spam protection
- spam protection disabled entirely
- visitor token caching
- changing Authorization header format
- different names, phone numbers, contact emails, and service choices

The architectural fix is to stop using a public custom-embed bridge for privileged Forms transport and move submission into the actual Vibe/Astro backend using Wix-managed authentication/elevation.

Current Wix documentation review shows:

- Existing Vibe site source is edited through the Vibe Code/source development environment; arbitrary Vibe source files are not exposed by the REST management tools used here.
- Astro HTTP endpoint files under `src/pages/api/` are auto-discovered server routes.
- Server-side elevated SDK calls are the supported way to perform restricted operations without handing privileged authentication to the browser.
- `GPT-Work` is not currently connected as the Vibe site's deploy source tree.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Status: `ACTIVE`
- Trigger: submission to form `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`
- Reverified Sep. 3 by confirmed system test after `service_bb` was added

Do not recreate or casually modify this automation.

## Coordination rules

1. Read the current live embed revision before every edit; revision `20` is only the current snapshot.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Keep visible email safety mode in production until the native source path is implemented and repeatedly verified.
5. Do not restore direct browser → Wix Forms OAuth/REST submission.
6. For the native path, require final `CONFIRMED` status before showing success.
7. Require at least two consecutive **live-site** new `CONFIRMED` submissions before declaring the replacement transport stable. The Sep. 3 system/API verification does not count as a live-site proof.
8. Preserve the direct-email CTA during future repair testing until stability is proven.
9. Do not reintroduce the old 60-second dedupe guard.
10. Do not assume the visitor's Email field controls owner notifications.
11. Do not modify the working notification automation casually.
12. Spam protection is temporarily NONE for diagnosis; restore at least BASIC only after the native automatic transport exists and passes repeated live tests.
13. GitHub remains coordination/recovery documentation until the actual Vibe source is connected or edited in the Vibe Code environment.

## Immediate next technical target

Deploy the prepared native endpoint and frontend integration in the actual Wix Vibe source. Once that is saved/deployed, change the current custom embed from email-intercept mode to banner-only mode so it no longer intercepts the real native submit button, then run two consecutive realistic public-page tests and verify both as CONFIRMED backend submissions plus owner notification emails.
