# Behavioral Bridge Consultation — Workstream Handoff

## Status — 2026-09-03

The consultation flow is still under production repair. This file is the coordination source for the current website thread and the prior `Explain Repo Authentication` workstream. Do not create a second live submit handler.

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

The visible Vibe form also contains a service-selection dropdown. It is not a separate Wix Forms field.

Current form diagnostic state:

- Enabled: `true`
- Spam protection: `NONE` temporarily while transport reliability is diagnosed
- No form submission limit is configured
- Automation linkage preserved: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

Spam filtering has been ruled out as a sufficient explanation because the flow failed under ADVANCED, BASIC, and NONE.

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Current live name: `Behavioral Bridge — Visible Email Safety Banner v7`
- Current live revision: `16`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_START`
- `loadOnce`: `false`
- `pageFilter`: none, so the safety banner is currently sitewide by design

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Production evidence

Exactly three `CONFIRMED` Wix Forms submissions are currently known. They were created around 01:47 and 01:53 UTC on Sep. 3.

Multiple later realistic live-page attempts did not create additional backend records. This includes tests using different names, phone numbers, contact emails, and different service selections.

The three confirmed records each triggered a real owner-notification email. This proves the notification automation works when a real `CONFIRMED` submission reaches Wix; the failure occurs earlier in the browser-to-Wix transport.

## Revision 16 — visible sitewide safety mode

Revision 16 keeps the emergency direct-email route highly visible and moves it to `BODY_START` so it renders before ordinary page content. The user confirmed that the banner is now visibly rendering after reopening the site in a fresh/account session.

Current behavior:

1. A large premium sitewide **EMAIL RYAN DIRECTLY →** banner appears near the top of every page while the automatic consultation transport remains untrusted.
2. The banner explains that some recent website consultation requests may not have reached Ryan.
3. The direct-email button opens the visitor's email app addressed to `Ryan_Carvalho@BehavioralBridge.org` with a consultation subject and starter message.
4. The existing consultation form remains visible.
5. When the live form can be detected, its button is changed to **SEND REQUEST BY EMAIL →** and its visible form values are assembled into a prefilled email.
6. The visitor must still press Send in their email application.
7. The flaky public-browser Wix Forms POST is not used while safety mode is active.

The sitewide placement is intentionally more aggressive than the intended permanent design. Keep it sitewide until a reliable native/server-side submission path is proven; after that, move the prominent warning to the consultation page only while retaining a direct-email backup.

## Why the automatic form is not currently trusted

Several hypotheses were tested and were not sufficient on their own:

- ADVANCED spam protection
- BASIC spam protection
- spam protection disabled entirely
- visitor token caching
- changing Authorization header format
- different names, phone numbers, contact emails, and service choices

The strongest remaining architectural issue is that the site is a Wix Vibe/Picasso project and the reliable long-term solution should live in actual site/backend source with Wix-managed authentication instead of a public custom-embed bridge.

Current Wix documentation review also shows:

- The Projects API initializes new Wix/Vibe/headless projects but directs management of existing sites to the Sites API.
- Wix REST APIs are not intended for extending a site's source code.
- Wix site code is normally edited through the site code editor / Wix IDE / Git integration; Wix-managed headless work is developed through supported source/CLI workflows.
- No supported REST endpoint was found that exposes arbitrary read/write access to this existing Vibe site's source files.

Therefore do not pretend the permanent source-code repair can be pushed through the same REST/custom-embed layer.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Status: `ACTIVE`
- Trigger: submission to form `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

Do not recreate or casually modify this automation; it has already proven delivery on confirmed submissions.

## Coordination rules

1. Read the current live embed revision before every edit; revision `16` is only the current snapshot.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Keep visible email safety mode in production until a stronger architecture is implemented and tested.
5. Do not restore browser-to-Wix Forms automatic submission merely because a single future test works.
6. Require at least two consecutive new `CONFIRMED` backend submissions before declaring any replacement transport stable.
7. Preserve the direct-email CTA during future repair testing until stability is proven.
8. Do not reintroduce the old 60-second dedupe guard.
9. Do not assume the visitor's Email field controls owner notifications.
10. Do not modify the working notification automation casually.
11. Spam protection is temporarily NONE for diagnosis; restore at least BASIC only after a reliable automatic transport exists and passes repeated tests.
12. GitHub remains coordination/recovery documentation until Wix syncs or exposes the real Vibe/Astro source tree.

## Immediate next technical target

Keep referred leads safe with the visible email mode. The preferred end state remains: native/site-backend submission → confirmed Wix record → existing notification automation. The next real implementation step requires access to the Vibe site's actual source/development environment rather than another browser custom-embed transport experiment.
