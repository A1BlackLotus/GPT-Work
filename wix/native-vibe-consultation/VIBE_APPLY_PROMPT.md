# Behavioral Bridge — Wix Vibe native consultation repair

Use this in the **actual BehavioralBridge Wix Vibe Code / coding chat**, not in a different Wix site and not in the GPT-Work repository.

## Target

- Site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Consultation route: `/consultation`
- Existing Wix Forms form ID: `b692e647-b20c-45b0-ae1d-2530df030907`
- Owner email: `Ryan_Carvalho@BehavioralBridge.org`

## Apply this change

Repair the existing `/consultation` page without redesigning the site.

1. Create `src/pages/api/consultation.ts` using the prepared implementation in this repository at `wix/native-vibe-consultation/src/pages/api/consultation.ts`. The endpoint must use `@wix/forms` plus server-side `auth.elevate()` from `@wix/essentials`; do not create anonymous OAuth tokens in the browser and do not call the Wix Forms REST API directly from the public page.

2. Locate the existing consultation page/component and keep its current premium styling and all visible fields. Map them to the endpoint JSON exactly as follows:
   - parent/contact first name -> `firstName`
   - parent/contact last name -> `lastName`
   - email -> `email`
   - phone -> `phone`
   - student name -> `studentName`
   - student grade -> `studentGrade`
   - service dropdown -> `service`
   - goals/help requested -> `goals`
   - general availability -> `availability`
   - hidden honeypot -> `website` (must remain empty for legitimate visitors)

3. On submit, POST JSON to `/api/consultation` with `Content-Type: application/json`. Disable the submit button while the request is in flight so one click cannot create duplicate requests.

4. The page may show the final success message **only** when the endpoint response has all of:
   - HTTP success
   - `ok === true`
   - `status === 'CONFIRMED'`
   - a nonempty `submissionId`

   Final success copy:
   `Thank you. Your consultation request has been received. Ryan will follow up by email.`

5. If the endpoint returns any error, non-CONFIRMED state, invalid JSON, or network failure:
   - do not clear the visitor's fields;
   - do not show a success message;
   - show a prominent error stating that the request did not send;
   - show a large **EMAIL RYAN DIRECTLY →** button linking to `mailto:Ryan_Carvalho@BehavioralBridge.org?subject=Behavioral%20Bridge%20Consultation%20Request`.

6. Preserve the service dropdown. Its visible choices can remain as currently designed; the backend now has a `service_bb` string storage target, so the selected visible label/value should be sent as `service`.

7. Remove/disable any old consultation-page code that:
   - fakes a successful submit without a confirmed server response;
   - obtains an anonymous Wix OAuth token in the browser;
   - posts directly to Wix Forms from the browser;
   - intercepts the form with another duplicate submit handler.

8. Do **not** remove the current sitewide emergency direct-email banner yet. It is controlled separately by Wix Custom Embed `b3ececaf-c221-4ad1-9590-4aa112486e11`. The website owner will keep that safety banner until two consecutive live submissions are verified in Wix Forms and the owner notification emails arrive.

9. Save/deploy the Vibe source changes. Do not change unrelated pages, branding, navigation, testimonials, SEO, or content.

## Acceptance criteria

The repair is not considered complete merely because the page displays a success state. After deployment, two consecutive realistic live submissions must each produce a new Wix Forms record with status `CONFIRMED` under form `b692e647-b20c-45b0-ae1d-2530df030907`. Each should include the submitter email and `service_bb`, and the existing owner notification automation should fire.
