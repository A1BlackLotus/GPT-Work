# Behavioral Bridge Consultation — Workstream Handoff

## Status — 2026-09-03

The consultation flow is under a focused production repair after an intermittent live-page failure. The current thread and the prior `Explain Repo Authentication` workstream remain reconciled into one canonical implementation. Do not create a second live submit handler.

## Live site

- Wix site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Live Vibe URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Consultation route: `/consultation`

## Wix Forms backend

Canonical form ID: `b692e647-b20c-45b0-ae1d-2530df030907`

Verified field targets:

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

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge Consultation — Canonical v3`
- Current live revision: `10`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Production evidence

Exactly three `CONFIRMED` Wix Forms submissions existed before revision 10. They were created at approximately 01:47 and 01:53 UTC on Sep. 3. Later user attempts did **not** create additional backend submissions, so those attempts never reached the real Wix form.

The three successful submissions each triggered a real notification email from `notifications@wix-forms.com` to `Ryan_Carvalho@behavioralbridge.org`. Those messages were found in Gmail **Trash**, not absent. They were restored to Inbox during troubleshooting. This proves the owner-notification automation fires when a real form submission is created.

Entering `ryan.m.carvalho444@gmail.com` into the public form's Email field does not make that address the owner-notification recipient. That field represents the prospective client's/contact's email. The current owner notification is configured separately to the Behavioral Bridge business mailbox.

## Revision 10 — canonical v3 repair

Revision 10 replaced the fragile v2 interception logic with a more defensive handler while preserving the existing page design.

Changes:

1. Searches farther up the DOM for the actual form container and requires a form-like scope containing an email control.
2. Uses page-order fallback logic when Vibe's generated labels/IDs do not expose enough semantic information.
3. Improves mapping for parent/contact name, student name, grade, goals, availability, email, and phone.
4. Uses **one standard Wix Create Submission call** and does not force a `status` value. Wix Forms normally confirms its own submissions.
5. Requires the returned Wix submission to be `CONFIRMED` before showing the final success message.
6. If Wix does not confirm the request, the page now explicitly says **the request did not send** and presents a prefilled email fallback. It no longer silently opens an email app or permits a fake-success state from this connector.
7. The in-flight `busy` flag remains; the removed 60-second `sessionStorage` guard remains removed.
8. The older competing connector remains disabled.

## Notification automation

Current automation:

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Name: `New submission received for Behavioral Bridge Consultation Form`
- Status: `ACTIVE`
- Current known revision: `2`
- Trigger: Wix Forms submitted, filtered to form ID `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

An attempted change to add `ryan.m.carvalho444@gmail.com` as a redundant second owner recipient was **not applied**. Wix validated the automation configuration as `VALID`, but the update was rejected with HTTP 428 because the underlying Triggered Emails message referenced by the old automation is marked `Deleted` by Wix's action provider. No partial automation mutation occurred. Do not overwrite or recreate this automation casually: it demonstrably delivered the three successful submission notifications.

## Gmail finding

The three real consultation notification emails were located in Gmail Trash and restored to Inbox. If future Wix notification messages again appear in Trash, investigate Gmail-side filtering/rules separately; do not mistake a trashed owner notification for a failed Wix submission.

## Coordination rules

1. Read the current live embed revision before every edit. Do not assume revision 10 remains current forever.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Never show final success unless Wix actually returns a confirmed submission.
5. Do not reintroduce the 60-second sessionStorage dedupe guard.
6. Do not assume the form's Email field controls where owner notifications are sent.
7. Do not modify the working owner-notification automation merely to add recipients without resolving the deleted-message limitation first.
8. GitHub remains recovery/version-control documentation until Wix actually syncs a real Vibe source tree here; GitHub commits do not deploy the live Vibe site.

## Immediate verification

Test revision 10 from a freshly loaded `/consultation` page. A successful test must produce both:

- the on-page confirmed-success message, and
- a **fourth `CONFIRMED` Wix Forms backend record**.

Then verify the owner notification in the Behavioral Bridge business mailbox. If the browser submission fails, revision 10 should explicitly tell the visitor it did not send instead of pretending that it succeeded.
