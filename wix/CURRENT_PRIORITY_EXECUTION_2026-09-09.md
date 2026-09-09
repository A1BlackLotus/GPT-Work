# Behavioral Bridge Website — Current Priority Execution Queue

Date: 2026-09-09
Status: CURRENT / ACTION QUEUE
Authority: live public Wix behavior > live Wix configuration > this queue > older handoffs.

This file organizes the current website tasks created by the Sep. 9 proof/credential updates. It does not authorize redesign, destructive cleanup, or reactivation of retired embeds.

## P0 — SITEWIDE PROOF METRICS COHERENCE — HIGHEST PRIORITY

Final public proof standard requested by Ryan:
- `5.0` — Wyzant rating
- `75+` — 5-star reviews
- `350+` — Wyzant + Superprof hours
- `Nearly 14` — Years of experience

Current state:
- Results Showcase is live revision 14 and already uses `75+`, `350+`, and `Nearly 14`.
- Conversion Trust Strip is revision 4 and DISABLED; do not re-enable. It caused the intermittent black-bar/hydration defect.
- Proof Metrics Coherence Patch is live and transitional. Ryan visually confirmed the SAT page changed to `Nearly 14`, but the other SAT proof figures still display stale values. Therefore the patch needs one surgical revision to recognize the actual SAT/Home review/hour label variants without inserting layout, CSS, bars, or clickable UI.
- Home and SAT are the required proof-bar targets. Results must remain coherent. About/EF should only be changed where the same public proof metric actually appears.

Acceptance gate:
1. Home shows exactly 5.0 / 75+ / 350+ / Nearly 14 with correct labels.
2. SAT shows exactly the same proof set.
3. Results shows exactly the same proof set.
4. No black strip returns.
5. No unrelated `60+`, `240+`, `300+`, or `12+` text is changed outside proof/experience contexts.
6. Desktop and mobile are visually checked when browser/editor access is available.

## P1 — ABOUT / FOUNDER CREDIBILITY

Safe, supported facts already usable:
- Ryan M. Carvalho
- B.S. in Psychology, magna cum laude — Bridgewater State University
- Nearly 14 years of education / student-support / tutoring experience
- Relevant Massachusetts school experience may reference Boston Latin, Brookline, and Newton

Current live About/Core rewrite already includes the B.S., magna cum laude, Bridgewater State, and Nearly 14 wording.

Credential guardrail:
- Older canonical records support: `Accepted to graduate programs at Harvard and Boston College.`
- Ryan has now stated that his stronger background includes post-baccalaureate work/programming at Boston College and Harvard education certifications, but the exact historical credential titles have not yet been found in Drive, GitHub, Gmail, Library, or public search.
- Do not invent an exact Boston College post-baccalaureate program name or Harvard certificate title.
- Once the exact credential wording is recovered, replace the conservative acceptance wording with the precise stronger wording if it is accurate.

Additional credibility that may be useful after verification:
- Boston-area education background / work in Boston Latin, Brookline, and Newton.
- Do not publish changing school rank numbers such as `#3` or `#12` unless tied to a named ranking source and year.
- Do not publish scholarship/grant claims until a supporting record or exact owner-confirmed wording is available.

## P2 — EXPERIENCE WORDING CONSISTENCY

Canonical public wording: `Nearly 14 years`.
Reason: Ryan reports approximately 13.5 years total experience; `Nearly 14` is accurate while avoiding the disliked `13` presentation and avoiding an upward false claim of a completed 14 years.

Sweep active public layers for:
- `12+ years`
- `More than 12 years`
- `12+` next to experience labels
- `over twelve years`

Change only genuine current public experience claims. Historical/archived documents are not to be rewritten merely for consistency.

## P3 — BLACK-BAR REGRESSION PROTECTION

- Conversion Trust Strip `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` remains DISABLED at revision 4.
- Do not re-enable it.
- Do not replace it with another inserted proof bar.
- Proof corrections must remain text-only/transitional until native Vibe source can be edited directly.

## P4 — NATIVE SOURCE RETIREMENT PLAN

The text-only Proof Metrics Coherence Patch is transitional, not the preferred permanent architecture.
When native Vibe/editor source access is available:
1. Edit Home proof block natively.
2. Edit SAT proof block natively.
3. Search native source for stale proof values and experience wording.
4. Visually verify desktop + mobile.
5. Disable the coherence patch only after the native pages are proven correct.

## P5 — SOURCE-OF-TRUTH SYNC

After the current live proof/credential corrections are technically verified:
- Update `wix/CURRENT_STATE_2026-09-09.md` with the final metrics, current embed revisions, and transition status.
- Keep this queue as the short operational checklist.
- Do not let older Sep. 5–6 handoffs override live Sep. 9 state.

## P6 — DO NOT TOUCH DURING THIS PASS

- No redesign of frozen Steps 1–5.
- No article/resource cleanup unrelated to these proof/credential changes.
- No consultation safety removal.
- No domain/DNS changes.
- No destructive deletion.
- No duplicate-site cleanup.
- No unsupported Harvard/Boston College/scholarship/ranking claims.

## Completion definition for this task bundle

This bundle is complete when Home + SAT + Results visibly agree on the final proof standard, About/experience wording is coherent, the black-bar defect remains absent, supported credentials are presented accurately, unsupported credential titles remain withheld until verified, and the canonical state files reflect the live configuration.
