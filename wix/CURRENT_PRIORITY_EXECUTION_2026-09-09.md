# Behavioral Bridge Website — Current Priority Execution Queue

Date: 2026-09-09
Status: CURRENT / ACTION QUEUE
Authority: live public Wix behavior > live Wix configuration > this queue > older handoffs.

This file organizes the current website tasks created by the Sep. 9 proof/credential updates. For proof metrics and founder-credential work performed after the older canonical ledger, this queue is the current operational authority until `CURRENT_STATE_2026-09-09.md` is reconciled. It does not authorize redesign, destructive cleanup, or reactivation of retired embeds.

## P0 — SITEWIDE PROOF METRICS COHERENCE — HIGHEST PRIORITY

Final public proof standard requested by Ryan:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — Years of experience

Current implementation state:
- Results Showcase `245d2c02-9ebb-4b3f-b863-53d787d8d13c` is live revision **14** and technically verified with `75+`, `350+`, and `Nearly 14`.
- Conversion Trust Strip `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` is revision **4 / DISABLED**. Do not re-enable. It caused the intermittent black-bar/hydration defect.
- Proof Metrics Coherence Patch `0adc9e67-d1d6-43fa-bd06-abc7a923793f` is live revision **3 / ENABLED / TRANSITIONAL**.
- Rev3 is text-only. It inserts no bar, CSS layout, clickable UI, or new visible component.
- Rev3 specifically handles the stale Home/SAT variants `60+`, `240+`, `300+`, `Wyzant ratings`, `Verified Reviews`, `Wyzant reviews`, `Tutoring Hours`, `Verified Platform Hours`, and related review/hour labels when they occur in the proof context.
- Rev3 changes Home/SAT proof numbers to `75+` and `350+`, review label to `5-star reviews`, hours label to `Wyzant + Superprof hours`, and stale `12+` experience cards to `Nearly 14`.
- Ryan visually confirmed before rev3 that SAT had updated to `Nearly 14` but still showed stale review/hour figures. Rev3 was created specifically to repair those remaining label/value variants.

Acceptance gate:
1. Home visibly shows exactly 5.0 / 75+ / 350+ / Nearly 14 with correct labels.
2. SAT visibly shows exactly the same proof set.
3. Results visibly shows exactly the same proof set.
4. No black strip returns.
5. No unrelated `60+`, `240+`, `300+`, or `12+` text is changed outside proof/experience contexts.
6. Desktop and mobile are visually checked when browser/editor access is available.

Status: **IMPLEMENTED + TECHNICALLY VERIFIED; VISUAL RECHECK PENDING.**

## P1 — ABOUT / FOUNDER CREDIBILITY

Current supported public facts:
- Ryan M. Carvalho
- B.S. in Psychology, magna cum laude — Bridgewater State University
- Nearly 14 years of education / student-support / tutoring experience
- Professional background may reference Boston Latin, Brookline, and Newton school environments
- Accepted to graduate programs at Harvard and Boston College

Current live implementation:
- Core Authenticity `73a2dd88-1c32-44e4-a5a1-4e031f95e685` is revision **11 / ENABLED**.
- About rewrite now includes the B.S. Psychology / magna cum laude / Bridgewater State wording.
- About rewrite now uses `Nearly 14 years`.
- About rewrite now references work in Boston Latin, Brookline, and Newton school environments.
- About rewrite now uses the conservative verified wording: `accepted to graduate programs at Harvard and Boston College.`

Credential research status:
- Ryan has newly stated that his stronger background includes post-baccalaureate work/programming at Boston College and Harvard education certifications.
- Searches were run across Google Drive, GitHub, Gmail, Library, prior website handoffs, and public web results.
- No source was found that gives the exact historical Boston College post-baccalaureate credential/program title or the exact Harvard education certificate title.
- Current Harvard education programs include many differently named certificates, so choosing a modern title from the web would be unsafe and could mislabel Ryan's historical credential.
- Do not invent an exact Boston College post-baccalaureate program name or Harvard certificate title.
- Once the exact credential wording is recovered from the actual credential, resume, transcript, Veritas/profile source, or another reliable record, replace the conservative acceptance wording with the precise stronger wording if accurate.

Additional credibility:
- Boston Latin, Brookline, and Newton may be referenced as school environments where Ryan worked.
- Do not publish changing rank numbers such as `#3` or `#12` unless tied to a named ranking source and year.
- Do not publish scholarship/grant claims until a supporting record or exact owner-confirmed wording is available.

Status: **SUPPORTED FACTS IMPLEMENTED; STRONGER BC/HARVARD TITLES PENDING EXACT VERIFICATION.**

## P2 — EXPERIENCE WORDING CONSISTENCY

Canonical public wording: `Nearly 14 years`.
Reason: Ryan reports approximately 13.5 years total experience; `Nearly 14` is accurate while avoiding the disliked `13` presentation and avoiding an upward false claim of a completed 14 years.

Active-layer scan after the latest changes:
- Results rev14 outputs `Nearly 14`.
- Core Authenticity rev11 outputs `Nearly 14` in its current About replacements.
- The remaining literal `12+ years` inside Core is an **old match key** used to detect and replace stale native text, not the public replacement output.
- Proof Metrics Coherence rev3 keeps `60+`, `240+`, `300+`, and `12+` only as **detection keys** so it can repair stale native text; those strings are not inserted as output.

Status: **TECHNICALLY COHERENT; VISUAL RECHECK PENDING.**

## P3 — BLACK-BAR REGRESSION PROTECTION

- Conversion Trust Strip remains DISABLED at revision 4.
- Do not re-enable it.
- Do not replace it with another inserted proof bar.
- The current proof correction remains a text-only transitional layer specifically to avoid repeating the layout/hydration failure.

Status: **FIXED / PROTECTED.**

## P4 — NATIVE SOURCE RETIREMENT PLAN

The text-only Proof Metrics Coherence Patch is transitional, not the preferred permanent architecture.
When native Vibe/editor source access is available:
1. Edit Home proof block natively.
2. Edit SAT proof block natively.
3. Search native source for stale proof values and experience wording.
4. Apply the same final 5.0 / 75+ / 350+ / Nearly 14 standard only to genuine proof blocks.
5. Visually verify desktop + mobile.
6. Disable the coherence patch only after the native pages are proven correct.

Status: **PENDING NATIVE EDITOR ACCESS.**

## P5 — SOURCE-OF-TRUTH SYNC

Current operational truth for this proof/credential bundle is this queue plus live Wix state.
Still required:
- Reconcile `wix/CURRENT_STATE_2026-09-09.md`, whose proof-metric/revision subsection predates rev14 Results, rev11 Core, and rev3 Proof Metrics Coherence.
- Preserve the older ledger's site inventory, deletion gates, consultation safety rules, domain/SEO state, and roadmap classifications unless later evidence changes them.
- Do not let older Sep. 5–6 handoffs override live Sep. 9 state.

Status: **PENDING FINAL LEDGER RECONCILIATION.**

## P6 — DO NOT TOUCH DURING THIS PASS

- No redesign of frozen Steps 1–5.
- No article/resource cleanup unrelated to these proof/credential changes.
- No consultation safety removal.
- No domain/DNS changes.
- No destructive deletion.
- No duplicate-site cleanup.
- No unsupported Harvard/Boston College/scholarship/ranking claims.

## Completion definition for this task bundle

This bundle is complete when Home + SAT + Results visibly agree on the final proof standard, About/experience wording is coherent, the black-bar defect remains absent, supported credentials are presented accurately, stronger Boston College/Harvard credential titles are only added when their exact names are verified, and the canonical state files reflect the live configuration.
