# Behavioral Bridge Consultation — Workstream Handoff

## Status

**CORE CONSULTATION FLOW VERIFIED WORKING — 2026-09-03.**

The current Behavioral Bridge website thread and the prior `Explain Repo Authentication` workstream have been reconciled into one canonical implementation. Useful fixes from both were merged; stale/competing handlers remain disabled.

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
- Current live revision after successful test hardening: `8`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`

Retired competing connector:

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Enabled: `false`
- Keep disabled.

## Successful production verification

A real browser test successfully created **CONFIRMED** Wix Forms submissions for the canonical consultation form. This proves the page is no longer merely displaying a fake success state: Wix is recording the request in the actual Forms backend.

During verification, two identical confirmed submissions appeared within a few seconds. To harden the public form against double-click/repeated-event duplicates, the canonical live bridge was advanced to revision `8` with a **60-second same-request deduplication guard after confirmation**. The visual design and backend form ID were not changed.

## Canonical behavior

The live implementation now combines the strongest fixes from both workstreams:

1. Uses the existing Vibe consultation form when it can be identified.
2. Provides a controlled fallback form when needed.
3. Uses Wix visitor OAuth with `Authorization: Bearer <token>`.
4. Submits only to the verified Wix Form ID and targets above.
5. Normalizes phone values for the Wix `PHONE` field.
6. Requires Wix to return `CONFIRMED` before showing final success.
7. Falls back to a prefilled email if Wix cannot confirm the request.
8. Blocks immediate duplicate confirmed requests for 60 seconds.
9. Keeps the older competing live connector disabled.
10. Stores no API keys, client secrets, passwords, or private tokens in GitHub.

## Coordination rules

For every future consultation change:

1. Read the current live canonical embed first and use its latest revision; never assume revision `8` remains current forever.
2. Update only canonical embed `b3ececaf-c221-4ad1-9590-4aa112486e11` unless intentionally replacing it.
3. Keep `0ac3fcaf-b699-42da-9867-972e09d58b75` disabled.
4. Merge useful discoveries from other threads into the canonical implementation instead of creating another live handler.
5. GitHub remains recovery/version-control documentation until Wix actually syncs a real Vibe source tree; a GitHub commit alone does not deploy the site.
6. Never show final success unless Wix confirms the submission or the visitor explicitly completes the email fallback.

## Remaining optional verification

The backend submission path is proven. If the professional inbox also received the Wix notification from the successful test, the consultation workflow is fully green end-to-end. If the email was not received, leave the working submission flow intact and troubleshoot only the notification automation; do not create another form or connector.
