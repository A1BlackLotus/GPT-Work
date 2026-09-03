# Behavioral Bridge Consultation — Workstream Handoff

## Purpose

This file consolidates the consultation-form work that was split between the current Behavioral Bridge website thread and the prior `Explain Repo Authentication` thread. The goal is to let improvements move between workstreams without allowing stale code, duplicate handlers, or conflicting assumptions to overwrite newer fixes.

As of 2026-09-03, this repository record plus the live canonical Wix custom embed should be treated as the consultation implementation source of truth.

## Live site

- Wix site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Live Vibe URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Consultation route: `/consultation`

## Wix Forms backend

Canonical form ID:

`b692e647-b20c-45b0-ae1d-2530df030907`

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

Notification/fallback destination:

`Ryan_Carvalho@BehavioralBridge.org`

## Canonical live embed

- ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Name: `Behavioral Bridge Consultation — Canonical`
- Revision immediately after reconciliation: `7`
- Enabled: `true`
- Category: `ESSENTIAL`
- Position: `BODY_END`
- `loadOnce`: `false`
- Recovery copy: `wix/consultation-bridge.js`

## Retired competing embed

- ID: `0ac3fcaf-b699-42da-9867-972e09d58b75`
- Revision immediately after reconciliation: `5`
- Enabled: `false`

This older connector must remain disabled unless the canonical implementation is intentionally retired first. Running both handlers at once caused a real crossover risk because both could intercept the same consultation submission and produce different success/fallback behavior.

## What was merged from both workstreams

The canonical v2 implementation intentionally combines the strongest findings from both threads:

1. **Existing Vibe form first.** If the Vibe consultation form is present and identifiable, the bridge intercepts that form rather than unnecessarily replacing the page design.
2. **Controlled fallback form.** If a usable native form is unavailable, a controlled Behavioral Bridge form is rendered so the consultation route still works.
3. **Correct visitor authentication.** The Wix visitor access token is sent as `Authorization: Bearer <token>`.
4. **One real Wix form ID.** Both paths submit to the same verified Wix Form schema and field targets above.
5. **Phone normalization.** Phone input is normalized before being sent to the Wix `PHONE` field.
6. **No false success.** A successful HTTP request is not enough. The code requires Wix to return a submission whose status is `CONFIRMED` before displaying the final success message.
7. **PENDING/error fallback.** If Wix returns an unconfirmed/PENDING submission or another error, the bridge opens a prefilled email to `Ryan_Carvalho@BehavioralBridge.org` instead of pretending the request was delivered.
8. **No competing live listener.** The older duplicate connector is disabled after its useful logic was merged into the canonical bridge.
9. **No secrets in GitHub.** The Vibe OAuth client ID is public. No API key, client secret, password, or private token belongs in this repo.

## Conflict-prevention rules

For every future consultation change:

1. Read the current live canonical embed first and use its latest `revision` in any update. Never assume revision `7` remains current forever.
2. Make improvements against the canonical embed ID only.
3. Keep the retired duplicate connector disabled.
4. After a live change, update `wix/consultation-bridge.js` and this handoff file if IDs, behavior, or important status changes.
5. Treat GitHub as recovery/version-control documentation until Wix actually syncs a real Vibe source tree into this repo. A GitHub commit alone does not deploy to Wix.
6. If another chat/thread discovers a better fix, merge the useful logic into the canonical implementation rather than creating another live handler.
7. Never show a visitor a final success message unless Wix confirms the submission, or the visitor has explicitly completed the fallback email action.

## Current unresolved verification

The workstreams are technically reconciled, but one end-to-end visitor test is still required to determine which path Wix takes in production:

- If Wix returns `CONFIRMED`, the form should show the normal Behavioral Bridge success message and no email application should open.
- If Wix returns `PENDING` or rejects the visitor-side confirmation, the prepared-email fallback should open and instruct the visitor to press Send.

After that test, inspect Wix Forms submissions and the destination inbox to confirm the expected path. The implementation should not be changed merely because the fallback path was used; it is intentionally there to prevent lost leads while Wix Vibe visitor-side Forms behavior is inconsistent.
