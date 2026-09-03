# Behavioral Bridge Consultation — Workstream Handoff

## Status — 2026-09-03

The consultation flow is under focused production repair after an intermittent live-page failure. The current website thread and the prior `Explain Repo Authentication` workstream remain reconciled into one canonical implementation. Do not create a second live submit handler.

## Live site

- Wix site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Live Vibe URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Consultation route: `/consultation`

## Wix Forms backend

Canonical form ID: `b692e647-b20c-45b0-ae1d-2530df030907`

Verified storage targets:

| Target | Label | Type |
| --- | --- | --- |
| `first_name_bb` | Parent / Contact First Name | STRING |
| `last_name_bb` | Parent / Contact Last Name | STRING |
| `email_bb` | Email | EMAIL |
| `phone_bb` | Phone | PHONE |
| `student_name_bb` | Student Name | STRING |
| `student_grade_bb` | Student Grade | STRING |
| `goals_bb` | What are you looking for help with? | STRING |
| `availability_bb` | General Availability | STRING |

The visible Vibe form also contains a service-selection dropdown. That visible control is not a separate field in the Wix Forms schema above. Starting with canonical embed revision 12, its selected value is preserved by prefixing it into `goals_bb` as `Service requested: ...` rather than silently losing it.

Current form state:

- Form revision: `5`
- Enabled: `true`
- Spam protection: `NONE` **temporarily for diagnosis/reliability testing**
- No form submission limit is configured (`limitationRule` is absent)
- Site plan restrictions are not blocking this form
- Automation linkage preserved: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

Spam filtering has now been ruled out as a sufficient explanation. The form failed with ADVANCED, BASIC, and then NONE, so do not attribute the failure merely to repeated-test spam screening.

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge Consultation — Canonical v5`
- Current live embed revision: `13`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Revision: `5`
- Enabled: `false`
- Keep disabled.

## Production evidence

Exactly three `CONFIRMED` Wix Forms submissions existed immediately before revision 13. They were created around 01:47 and 01:53 UTC on Sep. 3. Multiple later live-page attempts — including different names, phone numbers, contact emails, and service selections such as SAT and executive-function/parent consultation — did **not** create additional Wix backend records.

All three successful records contain a Wix `submitter.visitorId`. That proves the early successful records came through a visitor-authenticated/browser flow, not an owner/admin API test.

Two of the successful records stored incomplete DOM mappings (`Website / Visitor`, `Not provided`), which is why the newer mapper and service-capture logic must remain.

The three confirmed submissions each triggered a real owner notification email. Therefore the owner-notification automation works when a real `CONFIRMED` submission reaches Wix. The recent missing emails are downstream symptoms of the browser request never becoming a Wix submission, not evidence that the email automation itself stopped working.

## Revision 11 — visible delivery safety notice

A visible delivery notice is installed on `/consultation`. It tells visitors that an intermittent delivery issue has occurred and that a prior request may not have been received. It provides an independent **Email Ryan directly** button to:

`Ryan_Carvalho@BehavioralBridge.org`

Keep this notice until repeated live submissions are proven stable.

## Revision 12 — service capture + token caching

Revision 12 preserved the visible service dropdown by adding `Service requested: ...` to `goals_bb` and cached the anonymous visitor token within the browser session. It also continued to require Wix to return `CONFIRMED` before displaying the final success message.

## Revision 13 — canonical v5 authorization repair

Revision 13 corrects the strongest identified regression.

The earlier connector that produced the three real visitor submissions sent the Wix access token directly in the `Authorization` header. Later canonical versions changed that header to:

`Authorization: Bearer <token>`

Official Wix REST authentication documentation states the header as `Authorization: <token>`, and Wix's own full HTTP example for Form `Create Submission` likewise places the token directly in the authorization header. The canonical bridge has therefore been restored to the raw access-token header:

`Authorization: <token>`

The change was revision-safe: the live revision was read first, only the canonical embed was updated, and the following were explicitly preserved:

- delivery-warning / direct-email notice
- service dropdown capture
- confirmed-status requirement
- explicit failure message and email fallback
- retired duplicate handler remaining disabled

The browser token-cache key was also bumped to `bb_consult_access_v5` so a fresh page/session does not reuse the previous revision's cached state during verification.

This is currently the strongest explanation for the observed “worked initially, then stopped” pattern because the known-good early browser handler used the raw token while the later failing handler used the prefixed header. It still requires repeated production verification before being declared fixed.

## Authentication architecture note

The custom embed remains a compatibility workaround. Wix-managed Vibe/headless projects are designed to use Wix-managed authentication in their actual source/SDK integration. The ideal long-term implementation remains wiring the real Vibe/Astro consultation component directly to Wix Forms once the actual Vibe source tree is available. `GPT-Work` is not currently that Vibe source checkout.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Name: `New submission received for Behavioral Bridge Consultation Form`
- Status: `ACTIVE`
- Known revision: `2`
- Trigger: submission to form `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

Do not recreate or casually modify this automation. It has already proven it can deliver when a real submission reaches Wix.

## Coordination rules

1. Read the current live embed revision before every edit; revision `13` is only the current snapshot.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Do **not** reintroduce `Bearer ` before the visitor access token in the Form Create Submission request without new documented evidence and a controlled test.
5. Never show final success unless Wix returns a `CONFIRMED` submission.
6. Preserve the delivery-warning/direct-email button until repeated tests prove stability.
7. Preserve the service dropdown in the submitted request.
8. Do not reintroduce the old 60-second dedupe guard.
9. Do not assume the visitor's Email field controls the owner's notification recipient.
10. Do not modify the working notification automation casually.
11. Spam protection is temporarily `NONE` for diagnosis; after repeated successful transport tests, restore at least BASIC and retest.
12. GitHub is coordination/recovery documentation until Wix syncs the real Vibe/Astro source tree; a GitHub commit alone does not deploy the site.

## Immediate verification target

After revision 13, completely reload or reopen `/consultation` so the browser cannot keep revision-12 JavaScript in memory. Run two separate realistic submissions with different names/services. Success requires both to appear as new `CONFIRMED` Wix Forms records (#4 and #5), with usable contact/student/service values, and then the corresponding owner notification emails should follow.
