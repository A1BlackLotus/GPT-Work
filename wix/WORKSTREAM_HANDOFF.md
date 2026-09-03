# Behavioral Bridge Consultation — Workstream Handoff

## Status

**CORE CONSULTATION FLOW VERIFIED WORKING, THEN RESTORED AFTER A REVISION-8 REGRESSION — 2026-09-03.**

The current Behavioral Bridge website thread and the prior `Explain Repo Authentication` workstream remain reconciled into one canonical implementation. Useful fixes from both were merged; stale/competing handlers remain disabled.

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

Notification/fallback destination: `Ryan_Carvalho@BehavioralBridge.org`

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge Consultation — Canonical`
- Current live revision: `9`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Confirmed production evidence

Three CONFIRMED Wix Forms submissions exist for the canonical consultation form. The first successful end-to-end test created a real confirmed submission, and two later same-payload tests also produced confirmed backend records. This proves the Wix Forms path can work from the live consultation page.

At the time of the latest troubleshooting check, the backend still showed exactly those same three submissions and **did not contain the user's two newest attempts**. Therefore those last two attempts did not reach the Wix Forms backend.

## Revision-8 regression and rollback

After observing two identical confirmed submissions within a few seconds, revision `8` added a 60-second same-request guard using `sessionStorage`.

The user then reported that the next two attempts did not go through. Because revision `7` was the last known working production path and the new client-side guard was the only deliberate submission-path change, that guard was removed.

Live revision `9` restores the pre-guard submission path. The existing `busy` flag still prevents simultaneous/in-flight repeat submissions without persisting a client-side lock after a successful request.

Important testing note: an already-open browser tab may still be running the older injected script until the page is fully reloaded. Test revision `9` only after a hard refresh or in a fresh tab/window.

## Canonical behavior

1. Uses the existing Vibe consultation form when it can be identified.
2. Provides a controlled fallback form when needed.
3. Uses Wix visitor OAuth with `Authorization: Bearer <token>`.
4. Submits only to the verified Wix Form ID and targets above.
5. Normalizes phone values for the Wix `PHONE` field.
6. Requires Wix to return `CONFIRMED` before showing final success.
7. Falls back to a prefilled email if Wix cannot confirm the request.
8. Uses only the existing in-flight `busy` lock for duplicate-click protection; no 60-second sessionStorage guard is active.
9. Keeps the older competing live connector disabled.
10. Stores no API keys, client secrets, passwords, or private tokens in GitHub.

## Coordination rules

For every future consultation change:

1. Read the current live canonical embed first and use its latest revision; never assume revision `9` remains current forever.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Merge useful discoveries from other threads into the canonical implementation instead of creating another live handler.
5. GitHub remains recovery/version-control documentation until Wix actually syncs a real Vibe source tree; a GitHub commit alone does not deploy the site.
6. Never show final success unless Wix confirms the submission or the visitor explicitly completes the email fallback.
7. If a fresh-tab/hard-refresh test on revision `9` fails, capture the exact on-page behavior/error before changing architecture again.

## Next verification

Open `/consultation` in a fresh tab or hard-refresh the page, submit one new test request, and then query Wix Forms again. A new CONFIRMED record after the current three proves revision `9` is stable. If no fourth record appears, debug that exact fresh-page failure rather than reintroducing client-side deduplication or another connector.
