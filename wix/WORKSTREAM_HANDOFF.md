# Behavioral Bridge Consultation — Workstream Handoff

## Status — 2026-09-03

The consultation flow is still under production repair. The current website thread and the prior `Explain Repo Authentication` workstream are reconciled into one canonical implementation. Do not create a second live submit handler.

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
- Current live name: `Behavioral Bridge Consultation — Safe Email Mode v6`
- Current live revision: `15`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Production evidence

Exactly three `CONFIRMED` Wix Forms submissions are currently known. They were created around 01:47 and 01:53 UTC on Sep. 3.

Multiple later realistic live-page attempts did not create additional backend records. This includes tests using different names, phone numbers, contact emails, and different service selections.

The user's post-revision-13 test still did not create submission #4. Therefore the browser custom-embed transport is not considered production reliable.

The three confirmed records each triggered a real owner-notification email. This proves the notification automation works when a real `CONFIRMED` submission reaches Wix; the failure occurs earlier in the browser-to-Wix transport.

## Revision 14 — prominent direct-email route

Revision 14 added a large premium panel and full-width **EMAIL RYAN DIRECTLY →** button. It opens the visitor's email app addressed to:

`Ryan_Carvalho@BehavioralBridge.org`

The notice also explains that some recent consultation form submissions may not have reached Ryan.

## Revision 15 — SAFE EMAIL MODE v6

Because continued attempts to stabilize public browser → Wix Forms transport did not produce submission #4, revision 15 prioritizes lead reliability over preserving a broken automatic-submit illusion.

Safe Email Mode does the following:

1. Keeps a highly prominent premium **EMAIL RYAN DIRECTLY →** CTA at the top of `/consultation`.
2. Keeps the existing consultation form visible so visitors can still enter the structured information.
3. When the visible form can be detected, changes its submit button to **SEND REQUEST BY EMAIL →**.
4. On that button click, collects the form information currently visible in the browser — contact details, phone, student, grade, service selection, goals/challenges, and availability — and opens a prefilled email to `Ryan_Carvalho@BehavioralBridge.org`.
5. Clearly tells the visitor that the email app is opening and that they must press **Send** there to complete the request.
6. Stops relying on the unstable visitor-side Wix Forms POST while Safe Email Mode is active.

This is intentionally a temporary production-safety mode. It is preferable to a form that sometimes appears successful while no backend submission exists.

## Why the automatic form is not currently trusted

Several hypotheses were tested and were not sufficient on their own:

- ADVANCED spam protection
- BASIC spam protection
- spam protection disabled entirely
- visitor token caching
- changing Authorization header format
- different names, phone numbers, contact emails, and service choices

The strongest remaining architectural issue is that the site is a Wix Vibe/Picasso project and the working long-term solution should live in the actual Vibe/Astro source with Wix-managed authentication. The custom embed is a compatibility layer, not the ideal architecture.

Wix's Custom Trigger documentation also confirms that reliable server-side automation patterns rely on site/backend code (for example, a web method wrapping a custom automation trigger). That route still requires access to the actual site/backend source or creation of the trigger in the Wix development environment; it is not something the public custom embed can safely replace by itself.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Status: `ACTIVE`
- Trigger: submission to form `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

Do not recreate or casually modify this automation; it has already proven delivery on confirmed submissions.

## Coordination rules

1. Read the current live embed revision before every edit; revision `15` is only the current snapshot.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Keep Safe Email Mode in production until a stronger architecture is implemented and tested.
5. Do not restore browser-to-Wix Forms automatic submission merely because a single future test works.
6. Require at least two consecutive new `CONFIRMED` backend submissions before declaring any replacement transport stable.
7. Preserve the direct-email CTA even during future repair testing until stability is proven.
8. Do not reintroduce the old 60-second dedupe guard.
9. Do not assume the visitor's Email field controls owner notifications.
10. Do not modify the working notification automation casually.
11. Spam protection is temporarily NONE for diagnosis; restore at least BASIC only after a reliable automatic transport exists and passes repeated tests.
12. GitHub remains coordination/recovery documentation until Wix syncs the real Vibe/Astro source tree.

## Immediate next technical target

Keep referred leads safe with Safe Email Mode, then pursue a real server-side or actual Vibe-source implementation. The preferred end state is: native/site-backend submission → confirmed Wix record → existing notification automation, with the visible direct-email CTA retained until repeated production tests verify reliability.
