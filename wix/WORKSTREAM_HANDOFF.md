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
- Site plan form restrictions are not blocking this form: 1 form out of 4 allowed, and 8 input fields below the 10-field limit
- Automation linkage preserved: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`

### Spam-protection diagnostic

The form first used `ADVANCED`, then was moved to `BASIC`, but several realistic tests still failed to create backend records. Therefore ADVANCED screening alone is **not** a sufficient explanation for the intermittent failure. Spam protection is now temporarily `NONE` to eliminate CAPTCHA/risk screening as a variable while the browser-to-Wix path is tested. Once the transport problem is conclusively fixed, restore at least BASIC protection if repeated tests continue to succeed.

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge Consultation — Canonical v4`
- Current live embed revision: `12`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Production evidence

Exactly three `CONFIRMED` Wix Forms submissions have been observed. They were created around 01:47 and 01:53 UTC on Sep. 3. Multiple later live-page attempts did **not** create additional Wix backend records.

Two of the successful live-page records demonstrate that the old DOM mapper was incomplete: they stored `Website / Visitor` for the contact name and `Not provided` for student name and grade even though the visitor had entered more information. This confirms that the Vibe-generated visible form and the hidden Wix Forms schema were not perfectly aligned.

The three successful submissions each triggered a real notification email from `notifications@wix-forms.com` to `Ryan_Carvalho@behavioralbridge.org`. Those emails were found in Gmail Trash and restored to Inbox. This proves the owner-notification automation works when a real `CONFIRMED` submission reaches Wix.

Entering a personal Gmail address into the public form's Email field does not change the owner-notification destination. That field is the prospective client's/contact's email; owner notification is separately configured to the Behavioral Bridge business mailbox.

## Revision 10 — canonical v3 repair

Revision 10 replaced the earlier fragile handler with a more defensive submit interceptor, preserved the existing page design, required Wix to return `CONFIRMED` before showing success, and displayed an explicit failure/email fallback instead of allowing a fake-success state.

## Revision 11 — visible delivery safety notice

A permanent temporary safety notice was added directly to the consultation page while the delivery issue is being repaired. It tells visitors that some consultation requests may not have been received and provides a clearly visible **Email Ryan directly** button to:

`Ryan_Carvalho@BehavioralBridge.org`

This is intentionally independent of the submit handler so a visitor can bypass the form at any time. Keep this notice in place until the form has passed repeated production-style tests.

## Revision 12 — service capture + visitor-token stabilization

Revision 12 keeps the revision-11 notice and adds two targeted fixes:

1. **Service dropdown preservation.** The visible Vibe service-selection dropdown is detected and its value is added to `goals_bb`, so requests for SAT tutoring, parent consultation, or other services are no longer silently omitted from the Wix record/email payload.
2. **Session-level visitor-token caching.** The existing browser bridge had been minting a fresh anonymous OAuth visitor token for every submit attempt. Revision 12 reuses a token for up to 30 minutes in the current browser session, reducing repeated OAuth calls during multiple submissions from one visitor/test session.

The code still blocks false success: Wix must return a `CONFIRMED` submission before the page says the request was received.

## Authentication finding

Official Wix documentation distinguishes self-managed headless from Wix-managed headless. Self-managed headless can mint anonymous visitor tokens manually, while Wix-managed headless projects using Wix's Astro integration receive automatic SDK authentication and do not normally create their own Wix client/token flow.

The current custom-embed bridge is therefore a compatibility workaround, not the ideal final architecture. The preferred long-term implementation remains wiring the actual Vibe/Astro consultation component to `@wix/forms` in the site's real source so authentication is handled by Wix. `GPT-Work` still does **not** contain the Vibe-generated source tree, so GitHub cannot yet provide that direct source edit.

## Notification automation

- Automation ID: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- Name: `New submission received for Behavioral Bridge Consultation Form`
- Status: `ACTIVE`
- Current known automation revision: `2`
- Trigger: Wix Forms submitted, filtered to form ID `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner recipient: `Ryan_Carvalho@behavioralbridge.org`

An attempted change to add `ryan.m.carvalho444@gmail.com` as a redundant second owner recipient was not applied. Wix rejected that automation update because an underlying Triggered Emails message referenced by the old automation is marked deleted. The existing automation remains active and has already proven it can deliver when a real submission exists.

## Coordination rules

1. Read the current live embed revision before every edit; revision `12` is only the current snapshot.
2. Read the current form revision and spam setting before every form-schema edit; form revision `5` currently uses temporary `NONE` spam protection.
3. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
4. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
5. Never show final success unless Wix actually returns a `CONFIRMED` submission.
6. Preserve the visible delivery warning/direct-email button until repeated tests prove the form is stable.
7. Preserve the service-dropdown value in the request payload.
8. Do not reintroduce the old 60-second dedupe guard.
9. Do not assume the form's Email field controls where owner notifications are sent.
10. Do not modify the working owner-notification automation casually.
11. GitHub remains recovery/version-control documentation until Wix actually syncs a real Vibe/Astro source tree into this repository; a GitHub commit alone does not deploy the site.

## Immediate verification target

After revision 12 + temporary spam `NONE`, test the consultation page from a fresh reload with realistic values and choose an actual service from the dropdown. A successful test must create a **fourth `CONFIRMED` Wix Forms record**. Repeated success matters: run at least two separate submissions after the first passes to prove the flow no longer works only once.

Then verify the corresponding owner notification(s) in the Behavioral Bridge business mailbox. If a submission fails, the visitor should still see the delivery notice/direct-email option and should not be told the form was successfully received.
