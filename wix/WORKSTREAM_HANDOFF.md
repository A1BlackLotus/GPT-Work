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

The visible Vibe form also contains a service-selection dropdown. It is not a separate Wix Forms field, so the canonical bridge preserves the selected service by prefixing it into `goals_bb` as `Service requested: ...`.

Current form diagnostic state:

- Enabled: `true`
- Spam protection: `NONE` temporarily while transport reliability is diagnosed
- No form submission limit is configured
- Automation linkage preserved: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

Spam filtering has been ruled out as a sufficient explanation because the flow failed under ADVANCED, BASIC, and NONE.

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Current live name: `Behavioral Bridge Consultation — Canonical v5 + Prominent Email CTA`
- Current live revision: `14`
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

Most importantly, the user's newest test made after revision 13 still did **not** create submission #4. Therefore revision 13's authorization-header repair did not, by itself, resolve the transport failure.

The three confirmed records each triggered a real owner-notification email. This proves the notification automation works when a real `CONFIRMED` submission reaches Wix; the current failure occurs earlier in the browser-to-Wix submission path.

## Revision 13 — authorization repair

Revision 13 restored the earlier raw visitor-token Authorization format used by the early successful connector:

`Authorization: <token>`

rather than:

`Authorization: Bearer <token>`

It preserved service capture, explicit failure behavior, the CONFIRMED-status requirement, and the disabled duplicate connector. The next live test still did not create submission #4, so this remains a useful correction but is not the complete fix.

## Revision 14 — prominent direct-email safety route

Because the form is not yet reliable, revision 14 makes the independent direct-email route unmistakable on `/consultation`.

The page now displays a large premium warning panel before the consultation form with a full-width button:

**EMAIL RYAN DIRECTLY →**

The button opens the visitor's email application addressed directly to:

`Ryan_Carvalho@BehavioralBridge.org`

It also pre-fills the subject `Behavioral Bridge Consultation Request` and starts a short message. The panel explicitly says that if someone submitted recently and did not hear back, Ryan may not have received the request.

The CTA uses the site's premium grayscale styling with a restrained muted-gold border and is intentionally much larger/more visible than the previous small fallback link.

Keep this CTA in place until the Wix form passes repeated production-style tests.

## Authentication architecture note

The custom embed remains a compatibility workaround. The ideal long-term implementation is still the actual Vibe/Astro consultation component wired directly to Wix Forms using Wix-managed authentication once the real Vibe source tree is accessible. `GPT-Work` is not currently that Vibe source checkout.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Status: `ACTIVE`
- Trigger: submission to form `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

Do not recreate or casually modify this automation; it has already proven delivery on confirmed submissions.

## Coordination rules

1. Read the current live embed revision before every edit; revision `14` is only the current snapshot.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Never show final success unless Wix actually returns `CONFIRMED`.
5. Preserve the large direct-email CTA until repeated tests prove the form stable.
6. Preserve service-dropdown capture.
7. Do not reintroduce the old 60-second dedupe guard.
8. Do not assume the visitor's Email field controls owner notifications.
9. Do not modify the working notification automation casually.
10. Spam protection is temporarily NONE for diagnosis; restore at least BASIC only after repeated successful transport tests.
11. `wix/consultation-bridge.js` is now intentionally a non-deployable live-state pointer so stale code cannot be copied back over the current live implementation.
12. GitHub remains coordination/recovery documentation until Wix syncs the real Vibe/Astro source tree.

## Immediate next technical target

The form transport still needs a stronger fix than browser custom-embed interception. Before claiming stability, obtain two consecutive new `CONFIRMED` records with usable contact/student/service values. Until then, the prominent direct-email route is the safe production fallback for referred leads.
