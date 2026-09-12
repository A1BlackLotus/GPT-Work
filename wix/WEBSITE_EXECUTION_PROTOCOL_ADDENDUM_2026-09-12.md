# Behavioral Bridge — Website Execution Protocol Addendum — 2026-09-12

This addendum supplements `wix/WEBSITE_EXECUTION_PROTOCOL_CURRENT.md` and is incorporated into the CURRENT checkpoint.

## Upgraded execution sequence

For every website work unit and every Astra/Vibe implementation prompt, use:

**recover intent → inspect actual current state → identify visible outcome → identify exact defect → identify owning layer → diagnose root cause → specify implementation constraints → define responsive cases → define regression protections → define PASS/FAIL acceptance criteria → implement one coherent batch → verify the actual result → update the CURRENT checkpoint → only then design the next prompt**

## Prompt construction rule

A high-value implementation prompt must say:

1. what Ryan should actually see or be able to do;
2. what is currently wrong or missing;
3. which layer/component owns it as evidence allows;
4. what must be preserved;
5. what shortcuts/approaches are forbidden;
6. how desktop/tablet/mobile should behave;
7. what nearby working behavior must not regress;
8. what specific evidence counts as PASS or FAIL;
9. what exact files/commands/checks the executor must report.

Generic `polish`, animation, spacing, hover effects, focus-ring work, or adjacent technical cleanup never substitutes for the requested visible/content deliverable.

Do not create/spend the next Vibe/Astra prompt until the previous result is inspected against its acceptance criteria.

## NEXT / GO behavior

`NEXT`, `NEXT STEP`, `GO`, or `CONTINUE` means:

> Read `wix/WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md`, execute the highest-priority unfinished coherent unit current tools can safely advance, verify it, update the checkpoint, and stop only at a natural verification boundary or genuine owner-only blocker.

No project reconfirmation is required.

## Current immediate unit

P0.1 native Results ownership/parity. Do not publish the current native draft. Preserve all protected runtime layers until native parity is accepted, controlled publication occurs, and public regression passes.
