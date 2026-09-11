# Behavioral Bridge — Website Execution Protocol — CURRENT

**Created:** 2026-09-10  
**Status:** CURRENT EXECUTION ENGINE  
**Companion checkpoint:** `wix/WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md`

This protocol governs every future `NEXT`, `NEXT STEP`, `GO`, or `CONTINUE` instruction in the Behavioral Bridge website completion thread.

The protocol exists to maximize reliable progress while preserving the project’s main goal, avoiding regressions, preventing false completion claims, and keeping each turn large enough to matter but small enough to diagnose and verify safely.

---

## Current execution-mode override — September 11, 2026

Ryan authorized an extended Work execution run across as many safe coherent units as access permits, without stopping after each unit or requesting continued permission. This instruction supersedes the normal turn-size/natural-boundary stopping rule for that run only. Complete each unit's inspection, smallest correction, verification and regression checks before proceeding; save meaningful checkpoint changes throughout.

Continue until the authorized work is complete or remaining work is blocked by genuine access/owner dependencies. Do not manufacture activity by repeating completed work or spending credits for their own sake. The assistant cannot see remaining credit balance and must not claim to track it. Preserve a transfer-ready checkpoint for BB Web Design 5.1. When Ryan returns to the Sol stepwise workflow, use the normal coherent-unit turn sizing below; no project reconfirmation is needed.

---

## 1. COMMAND MEANING

Any of these user messages:

- `next`
- `next step`
- `go`
- `continue`

mean:

> Resume from the CURRENT rolling checkpoint, execute the highest-priority unfinished coherent work unit, verify it appropriately, update the checkpoint, and stop only at a natural boundary or a genuine owner-only blocker.

Do not ask the user whether to continue after each successful step. Continuation is already authorized until the agreed project is actually complete.

---

## 2. TURN SIZE

A normal execution turn should accomplish one of the following:

- one complete subsystem repair and verification pass; or
- approximately 2–4 tightly related defects on the same page/layer; or
- one meaningful implementation + QA cycle; or
- one bounded investigation that resolves ownership/root cause and, where safely possible, implements the fix in the same turn.

Avoid both extremes:

### TOO SMALL
Do not stop after trivial actions such as:
- reading one embed
- fetching one API object
- identifying one selector
- making one isolated metadata lookup

when those are merely prerequisites for the coherent work unit.

### TOO LARGE
Do not mix unrelated systems such as Results hero repair, consultation transport, SEO metadata, and Search Console in one giant change batch.

If a change creates uncertainty, stop at the verification boundary rather than stacking more changes on top of it.

---

## 3. REQUIRED EXECUTION LOOP

For each work unit:

### A. READ CURRENT STATE
- Read `wix/WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md` first when project state matters.
- Use live Wix/public evidence to override stale records.
- Do not reconstruct the project from old handoffs unless needed for recovery/history.

### B. DEFINE THE TARGET
State internally:
- exact defect / outcome
- exact page/subsystem
- acceptance criteria
- likely owning layer(s)

### C. INSPECT BEFORE MODIFYING
Determine whether the defect belongs to:
- native Vibe source/layout
- Wix Blog data
- custom embed
- Wix app/widget
- media asset
- CSS/responsive behavior
- API/backend
- form system
- navigation/routing
- SEO/head layer
- external service

Do not add another patch until the actual owner is identified as far as available evidence allows.

### D. MAKE THE SMALLEST SAFE FIX
Prefer:
1. native/source correction
2. direct data correction
3. properly scoped application configuration
4. narrowly bounded transitional patch only when native correction is unavailable

Do not redesign unrelated frozen content.

### E. TECHNICAL VERIFICATION
Use the relevant API/code/data readback to prove the intended state exists.

Examples:
- embed revision and exact code
- Blog post media ID
- form record/status
- redirect table
- SEO resolver output
- Wix Media processing state

### F. VISUAL / FUNCTIONAL VERIFICATION
For visitor-visible or interaction-related changes, inspect the public site when browser/screenshot access is available.

Where relevant test:
- first load
- refresh
- navigation into/out of route
- desktop
- tablet
- narrow mobile
- focus/keyboard behavior
- actual submission or route behavior

Never convert technical verification into a claim of visual verification.

### G. REGRESSION CHECK
Check closely related protected behavior after the fix.

Examples:
- no black strip
- no `++`
- no accidental `12 articles` rewrite
- no hidden legitimate Results content
- no duplicate form submissions
- no stale/old image fallback
- no route breakage

### H. UPDATE THE CHECKPOINT
Record:
- what was actually changed
- technical evidence
- visual evidence, if any
- remaining debt
- newly discovered bugs
- next highest-priority coherent work unit

The rolling checkpoint must remain the single operational source of truth.

---

## 4. COMPLETION STATES

Use only these meanings:

### IMPLEMENTED
A change was made.

### TECHNICALLY VERIFIED
The deployed/configured/data state confirms the intended change exists.

### VISUALLY VERIFIED
The current public site was actually inspected and visibly shows the intended result.

### FUNCTIONALLY VERIFIED
The real interaction/route/form behavior was tested and passed.

### FINISHED / FROZEN
Every acceptance requirement relevant to that work unit passed.

Never label a visible item FINISHED without visual verification unless the user explicitly accepts a temporary limitation.

---

## 5. PRIORITY RULE

Always work highest priority first unless blocked.

Current broad hierarchy:

### P0 — PUBLIC / REVENUE / TRUST DEFECTS
Examples:
- Results hero/crop/widget problems
- wrong public proof/experience
- wrong Resources covers
- black-strip regression
- consultation reliability

### P1 — RELIABILITY / ARCHITECTURE
Examples:
- article-reader completeness
- conflicting content/image sources
- responsive/nav problems
- hydration/runtime collisions
- obsolete patches that interfere with native behavior

### P2 — SEARCH / GROWTH
Examples:
- native SEO metadata
- flagship article completion/publication
- internal linking
- accessibility acceptance

### P3 — LAUNCH INFRASTRUCTURE / CLEANUP
Examples:
- domain connection
- Search Console
- analytics
- external profile consistency
- safe archival/deletion

A blocked P0 may be temporarily skipped only if its blocker is explicit and the next safe work unit can proceed independently.

---

## 6. BUG DISCOVERY RULE

If a new bug is discovered while executing another step:

- If it is caused by the current change, fix it before closing the step.
- If it is P0 and materially affects trust/revenue/site function, elevate it ahead of lower-priority work.
- If it is unrelated and lower priority, add it to the checkpoint backlog and continue the current work unit.

Do not silently ignore newly discovered defects.

---

## 7. PUBLIC-SITE TRUTH RULE

For visible tasks:

> If the public site still shows the defect, the defect remains open.

Backend/API success is not enough.

If browser access is unavailable:
- mark the item IMPLEMENTED / TECHNICALLY VERIFIED only
- record VISUAL QA PENDING
- do not freeze it

---

## 8. PATCH DISCIPLINE

The site currently contains useful transitional custom embeds.

Rules:
- do not disable a protective patch merely because a native fix is planned
- do not re-enable known-broken archived embeds
- do not stack broad DOM-scraping patches when a direct/native fix is possible
- retire transitional patches only after native behavior is proven independently
- when retiring, verify no first-load/hydration regression returns

Known protected examples include:
- Conversion Trust Strip rev4 must remain disabled
- Consultation Safety/Fallback rev27 remains until full consultation acceptance
- Proof Metrics rev7 remains until native values are corrected and verified

---

## 9. CONSULTATION SAFETY RULE

Do not remove the consultation fallback until all native acceptance requirements pass.

Required before retirement:
- nine-field native path
- frontend required-field behavior including service
- duplicate/in-flight protection
- value preservation on failure
- confirmed success only after Wix record creation
- usable fallback on failure
- two consecutive realistic TEST ONLY submissions
- exactly one CONFIRMED Wix record from each test
- expected owner notification for each
- spam protection restored/retested
- desktop/mobile acceptance

Lead loss is worse than temporary technical ugliness.

---

## 10. RESULTS RULE

Results Showcase rev14 is near Wix custom-embed size limits.

Do not keep stuffing additional behavior into that embed.

For the unresolved Results hero/badge work:
- identify image/native/app ownership first
- prefer repairing/replacing the owning asset or widget configuration
- do not use another text-only cleanup if the visible object is not represented as DOM text
- preserve the verified Results proof block and referral wording

---

## 11. RESOURCES / ARTICLE RULE

Maintain one consistent source per field where possible.

Known split-state to resolve:
- Wix Blog has the correct new Homework/Motivation cover assets
- active transitional article data and/or native catalog still contain older image IDs

Do not call cover replacement finished until every public source that can win rendering uses the intended asset and the public cards/readers show it.

Old overlay/router reader embeds remain disabled unless an intentional rollback is chosen.

---

## 12. SEO RULE

Do not keep editing the wrong Wix SEO object after live resolver evidence shows it does not control the Vibe output.

Repair titles/descriptions/canonical behavior at the native Vibe/page-head layer when available.

Do not publish the flagship article merely to create visible progress.

Publication requires:
- full source-backed body
- correct rich formatting
- four existing graphics inserted appropriately
- mobile/desktop reader acceptance
- factual review
- SEO title/meta/slug
- internal links
- clean public route

---

## 13. OWNER-ONLY BLOCKERS

Only pause for the user when an action genuinely requires them, such as:
- paid Wix plan purchase/upgrade
- confirmation of external domain ownership
- DNS/domain authorization
- Google OAuth/login
- irreversible destructive deletion approval
- material business/credential decision

When blocked:
- state exactly one owner action required
- preserve all unaffected progress
- continue automatically after the user says `go`/`next`

Do not ask broad or unnecessary questions.

---

## 14. GITHUB / RECORD-KEEPING RULE

GitHub is coordination/recovery evidence, not proof that Wix production changed.

Do not claim production changed because a GitHub file changed.

Use:
- `wix/WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md` as the rolling operational state
- this protocol as the execution engine
- dated files as evidence/archive

Update the checkpoint when meaningful state changes. Do not create a new status document for every minor action.

---

## 15. DESTRUCTIVE CLEANUP RULE

Cleanup happens after reliability and launch acceptance.

Before removing old sites/files/embeds:
- confirm no unique content/dependency remains
- retain a recovery snapshot where useful
- get explicit approval when consequential/irreversible

Do not perform destructive cleanup simply to make the backend look tidy.

---

## 16. FINAL PROJECT ACCEPTANCE

Do not tell the user the project is completely done until all agreed categories are either:

1. FINISHED / FROZEN, or
2. explicitly identified as an owner/external dependency the user has chosen not to complete.

Final acceptance sweep must include, where applicable:
- Home
- SAT
- EF
- About
- Results
- Resources
- all canonical article routes
- consultation flow
- header/footer/navigation
- desktop/tablet/mobile
- visible proof/credentials
- image/crop integrity
- no black-strip regression
- article-reader/error states
- native SEO metadata
- flagship article publication/indexing readiness
- accessibility checks
- domain/Search Console status
- analytics/conversion baseline where access permits
- front-end/back-end/runtime bug sweep

Only then may the assistant say:

> The agreed Behavioral Bridge website completion project is complete.

Until then, `NEXT`, `NEXT STEP`, `GO`, or `CONTINUE` resumes execution from the current checkpoint.
