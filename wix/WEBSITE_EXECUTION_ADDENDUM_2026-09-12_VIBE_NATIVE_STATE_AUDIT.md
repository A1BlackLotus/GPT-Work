# Behavioral Bridge — Vibe Native State Audit Addendum — 2026-09-12

## Authority
Public live behavior > current Wix APIs/data > authenticated native Vibe preview/report > checkpoint/history.

## Current audit findings

### Home
- Public live Home still uses the lighthouse hero.
- Authenticated native Vibe preview currently uses Ryan's portrait as the Home hero.
- Neither is the newly approved final hero.
- Approved replacement asset already uploaded to Wix Media Manager:
  - display name: `BB_Home_Hero_Bridge-Clarity-Guidance-Structure-Independence_Editorial_v1`
  - media ID: `445f86_55d560892aba4714b627a1e87fad1ee8~mv2.png`
- Desired native end state: approved bridge hero integrated responsively. Do not publish yet.

### Results
Vibe reported `ResultsPage.tsx` complete and said review cards pull from the `testimonials` CMS collection. Direct Wix CMS inspection proves that collection currently contains only 3 old placeholder records:
- Sarah M. — SAT Tutoring — generic `over 200 points` quote
- David L. — EF Coaching — generic organizational-skills quote
- Emily R. — College Application Assistance — generic application/essay quote

These are NOT the accepted public Results review summaries. Therefore native Results is NOT at parity despite Vibe's completion claim.

Accepted public review summaries are preserved in `wix/rollback/results-showcase-rev16-native-recovery-reference-2026-09-12.json`:
- Maria — 22 lessons — SAT Parent — Wyzant
- Reeta — 10 lessons — SAT Parent — Wyzant
- Brian — 36 lessons — Parent — Wyzant
- Leon — 1 lesson — Parent — Wyzant
- Terri — 30 lessons — Parent — Wyzant
- Brak — 12 lessons — Parent — Wyzant
- Bryan — PUBLIC RECOMMENDATION — Parent · Superprof

Vibe also reported the approved Results hero image as a 5%-opacity background. The accepted public runtime reference instead uses a clear split/two-column dark hero with the image visibly occupying the right side. Native visual parity therefore remains open.

Do not mutate/delete the current `testimonials` CMS collection in the next source pass. Use one dedicated curated native review-summary owner for Results unless a separately verified real-review data source already exists.

### Priority articles / PostPage
Wix Blog rich content is already updated and published for both priority articles.

Homework:
- route `/post/homework-initiation-executive-function`
- external IMAGE media ID `445f86_a1f958393d6a47258ab6773c31e61639~mv2.jpg`
- alt: `Homework Start Sequence: identify task, first visible action, start cue, reduce distraction, short work block, review next step`
- `Try This` heading + paragraph already stored and publicly rendering.

Motivation:
- route `/post/why-motivation-is-wrong-target-executive-function`
- external IMAGE media ID `445f86_95ec120daff34701addcf9a9e68209a1~mv2.jpg`
- alt: `Build Action, Not Motivation: visible cue, concrete next action, protected start, short feedback loop, recovery rule`
- `Key Idea` heading + paragraph already stored and publicly rendering.

Public reader still does not render either in-body IMAGE node.

Vibe's latest report says `PostPage.tsx` currently injects slug-specific components around lines ~164-167:
- `HomeworkProcessVisual`
- `HomeworkCallout`
- `MotivationSystemVisual`
- `MotivationCallout`

That is not the desired architecture and will duplicate the already-published Blog content once the IMAGE nodes are rendered. Next native pass must first add generic Ricos IMAGE support, then remove/retire the slug-specific visual/callout injections if they are still present. Do not reinsert Blog nodes and do not regenerate assets.

### Validation
Vibe reported `Build Status: READY`, but its completion report did not provide actual ESLint, TypeScript/typecheck, or production-build command outputs. Treat build/lint/type validation as NOT independently proven. Next pass must run the configured project commands if executable; if the Vibe environment cannot run them, it must say so explicitly rather than reporting PASS.

## Publication boundary
DO NOT PUBLISH yet. Protected public runtime layers remain in place until:
1. generic article IMAGE rendering is correct and duplicate-free,
2. native Results uses the accepted review set and matches accepted public visual hierarchy,
3. approved Home bridge hero is integrated,
4. actual available validation is run,
5. native desktop/tablet/mobile preview is accepted,
6. controlled publish and public regression are executed separately.
