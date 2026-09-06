# Behavioral Bridge SAT — Native Vibe Editor Handoff

Date: 2026-09-06

## Status

Current roadmap step: **Step 1D — SAT native hero implementation + visual QA**

- 1A Source-of-truth/runtime audit: COMPLETE
- 1B Deterministic architecture/spec: COMPLETE
- 1C Custom-embed implementation attempt: EXHAUSTED / RETIRED
- 1D Native Vibe hero edit: IMPLEMENTED; PREVIEW VISUALLY VERIFIED; PUBLICATION / LIVE QA PENDING
- 1E Freeze + canonical sync: PENDING AFTER VISUAL PASS

### Current execution checkpoint — native source accessible, 2026-09-06

Chrome extension connection is fixed. The canonical signed-in editor is controllable through Chrome. Do not repeat plugin audits, login, native Windows fallback, or browser setup.

Implemented directly in the native Code tab:
- src/components/pages/SATTutoringPage.tsx: approved Step1 hero, two correct CTAs, light cream/charcoal/legible gold. Removed unused hero image/animation declaration. Original lower SAT sections retained.
- src/components/pages/HomePage.tsx: a narrow four-number tuple annotation for the existing easing curve clears 19 pre-existing type errors without changing its behavior or appearance.
- src/pages/api/consultation.ts: repairs pre-existing build errors (wrong Forms namespace, uninvoked elevated functions) and Astro handler shape; uses verified *_bb form target fields and only confirms success with a confirmed submission ID. Public safety fallback remains unchanged.
- src/pages/api/blog/posts.ts: repairs pre-existing invalid Blog import, fieldsets, response wrapper, published-post fields, and Astro handler. Plain contentText matches the existing reader.

The API repairs are required build dependencies discovered while publishing Step1, not a completed consultation/article rollout.

Verification:
- Native desktop hero preview passed.
- Native 390x844 mobile preview passed; measured client/scroll widths both375px; CTAs stacked and copy readable.
- Saved hero survived editor reload and is present in native source history.
- Two publication attempts failed with Wix's technical-issue message. Full native source checking found the old endpoint errors plus generated integration SDK type-expansion errors. The corrected source is undergoing the production build now.
- integrations/cms/cms-ecom/currency.ts is read-only. An attempted editor change was refused; it was not modified. Do not bypass that protection.
- Public /sat-tutoring still showed old hero at last check. No live visual pass or freeze is claimed.

Next: complete native production build, publish the corrected existing site, verify live desktop/mobile and CTA destinations, then complete Step1E before Step2 live edits.
Prepared local Step2 JSX and read-only consultation/launch investigations exist in the Codex task's work directory. Consultation safety embed is now rev25 (not the older rev21 in brief); preserve it until Step8 native transport is verified.

### Current connection audit

Successful read-only checks: Wix, GitHub (including this repository), Google Drive, Gmail, Google Calendar, GSC Wizard, Make, Stripe, Walla, Canva, Figma, Vercel, Adobe, Notion, OpenArt, Lucid, Malwarebytes, and Norton. These checks do not establish every write permission or paid feature.

- GSC Wizard: Google account authenticated with webmaster scope, but no website properties connected. Defer property setup to Step 12.
- Opera Browser Connector: disconnected; requires “Allow AI connection” and Opera account sign-in. Chrome is now connected and used for the native editor.
- Codex document control: no connected Excel/PowerPoint/Sheets document sessions.
- Figma: authenticated with a View seat on the starter team; edit access unverified.
- Vercel: request succeeded, but no teams returned; project/deployment access unverified.
- Notion: basic workspace access confirmed; advanced features have plan restrictions.
- Malwarebytes and Norton: reputation requests succeeded; both reported unknown for the live Wix hostname, not a security clearance.
- Local artifact/development skills are not external account connections. Recommended but uninstalled Outlook/Slack/Teams/Box/SharePoint/Atlassian plugins were not treated as connected or installed for this website.
- No calendar changes, payments, broad permission changes, or new external systems were made.

### Fresh route evidence — inspect before the native edit

The public `/sat-prep` URL resolved to the homepage after client rendering in this session. The current site's header/footer SAT links point to `/sat-tutoring`. Following that link rendered the existing SAT page with “PREMIUM DIGITAL SAT TUTORING”, “Elite SAT Preparation”, “Built for Excellence”, the generic paragraph, and one consultation CTA.

Desktop and 390 × 844 mobile baseline screenshots were visually inspected in the Codex task. Mobile document client/scroll width were both 375 px. At that baseline the approved replacement hero was not present; see current checkpoint for the new native preview implementation. Desktop header crowding is deferred to Step 9.

After Chrome control is available, inspect the existing SAT page and native route configuration within site `e6f68a23-cc00-421a-985e-515963cbe5f0` before acting on the older `/sat-prep` assumption below. Reconcile the route using current editor evidence; do not create a duplicate page/site and do not reopen the retired embed approach. No production content or embeds were changed during this audit.

## Important architectural conclusion

Do **not** continue trying to replace the SAT hero through the Core Authenticity custom embed.

The live `/sat-prep` page repeatedly showed the unchanged native Vibe hero after multiple technically valid embed revisions. The custom-embed approach was therefore retired for SAT rather than continuing selector/timing patches.

The native Vibe/Picasso editor is the source of truth for this hero.

Editor URL:

`https://vibe.wix.com/projects/e6f68a23-cc00-421a-985e-515963cbe5f0/v/editor`

Preview URL:

`https://vibe.wix.com/preview/e6f68a23-cc00-421a-985e-515963cbe5f0`

Live site:

`https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`

SAT route:

`/sat-prep`

## Failed/retired SAT custom-embed path

Canonical Core Authenticity embed ID:

`73a2dd88-1c32-44e4-a5a1-4e031f95e685`

Historical SAT attempts included:

- rev2 — SAT Hero
- rev3 — SAT Render Repair
- rev4 — SAT Route-Owned Hero
- rev5 — SAT Body-Fallback Repair
- rev6 — Vibe Hydration Timing Repair

Each revision was technically stored/enabled and the route resolved correctly, but the live mobile SAT page still rendered the old native hero.

The working Results embeds and failing SAT embed were compared. Delivery settings matched: enabled, `loadOnce=false`, `BODY_END`, no domain restriction, no page filter, `ESSENTIAL`. Route/hydration timing was also tested. The live result still did not change.

Therefore: **do not burn additional time on SAT DOM replacement through this embed.**

Current revision 7 was renamed as a native-editor handoff and the active SAT branch is cleanup/neutralization only so old SAT injected elements cannot unexpectedly double-render later. The retained historical `sat()` function is not the active `/sat-prep` execution path. EF/About behavior remains separate and should not be casually altered during the SAT native edit.

## Approved native SAT hero

Replace only the first hero section on `/sat-prep`.

Eyebrow:

**DIGITAL SAT TUTORING**

Primary headline:

**Digital SAT Preparation**

Gold-accent headline line:

**Built Around Better Decisions**

Body:

**Strong students usually don’t need more random practice. I identify where points are actually being lost, teach a repeatable route, and build speed only after the decision process is reliable.**

Support line:

**DIAGNOSE THE ERROR → FIX THE DECISION → VERIFY THE TRANSFER**

CTA 1:

**BOOK A CONSULTATION →** → `/book-consultation`

CTA 2:

**SEE RESULTS →** → `/results`

## Exact Vibe editor instruction

Paste this into the existing Behavioral Bridge Vibe editor:

> On the EXISTING `/sat-prep` page only, replace the current first hero section natively. Do not create a new page or new site. Do not change the global header/navigation or any sections below the hero.
>
> Remove the current hero content including:
> - “PREMIUM DIGITAL SAT TUTORING”
> - “Elite SAT Preparation”
> - “Built for Excellence”
> - the current comprehensive tutoring paragraph
> - the current “Schedule a Consultation” hero button
>
> Replace it with:
>
> Eyebrow: **DIGITAL SAT TUTORING**
>
> Main heading: **Digital SAT Preparation**
>
> Gold-accent heading line: **Built Around Better Decisions**
>
> Body copy: **Strong students usually don’t need more random practice. I identify where points are actually being lost, teach a repeatable route, and build speed only after the decision process is reliable.**
>
> Supporting line: **DIAGNOSE THE ERROR → FIX THE DECISION → VERIFY THE TRANSFER**
>
> Add exactly two CTA buttons:
> 1. **BOOK A CONSULTATION →** linking to `/book-consultation`
> 2. **SEE RESULTS →** linking to `/results`
>
> Keep the design consistent with Behavioral Bridge: premium soft white/cream and grayscale base, charcoal text, restrained gold accents, editorial serif headline with clean sans-serif support text, generous spacing, rounded buttons, professional rather than flashy.
>
> On mobile, the headline must fit without clipping, the paragraph must remain comfortably readable, and the two CTAs should stack full-width.
>
> Preserve all content below the hero exactly as it currently exists. Do not modify Executive Function, About, Results, Resources, navigation, footer, forms, SEO, or other pages.

## 1D visual verification checklist

After the native edit is published, verify from live-page screenshots:

- Behavioral Bridge header/logo unchanged
- eyebrow reads exactly `DIGITAL SAT TUTORING`
- no `PREMIUM` remnant
- headline reads `Digital SAT Preparation`
- gold line reads `Built Around Better Decisions`
- no `Elite SAT Preparation`
- no `Built for Excellence`
- approved paragraph visible and readable
- support line visible and not awkwardly wrapped
- exactly two hero CTAs
- consultation CTA points to `/book-consultation`
- Results CTA points to `/results`
- buttons stack cleanly on mobile
- no duplicate native consultation button
- no clipping/overflow
- hero height is reasonable
- lower SAT content remains unchanged
- no duplicate hero injected by a dormant custom embed

## 1E freeze checklist

Only after 1D passes:

1. Mark Step 1 visually verified.
2. Freeze the SAT hero copy/layout.
3. Confirm the Core Authenticity SAT branch remains cleanup/neutralized.
4. Complete `wix/SAT_STEP1_FREEZE_RECORD_TEMPLATE_2026-09-06.md` with live evidence.
5. Update this handoff with the published native state.
6. Begin Step 2 — SAT Method + Proof + Conversion.

## Step 2 ready state

Step 2 planning has already been prepared so desktop time is not spent re-investigating the lower page.

Canonical Step 2 spec:

`wix/SAT_STEP2_METHOD_PROOF_CONVERSION_SPEC_2026-09-06.md`

Status: PREPARED ONLY — DO NOT IMPLEMENT LIVE UNTIL STEP 1 IS FROZEN.

The recovered lower-page architecture is generic assessment → content mastery → deliberate practice → performance tracking. Step 2 will preserve the useful intent while rebuilding it around the actual Behavioral Bridge SAT decision system, defensible proof, student/parent fit, and conversion.

## Deferred items

Do not mix these into Step 1:

- Full `Classify → Activate → Predict → Prove` method presentation → Step 2
- Student fit/proof/conversion below first screen → Step 2
- SAT SEO title (`sat-prep | Behavioral Bridge`) → Step 11
- Global header/footer reconciliation → Step 9
- Domain/GSC work → Steps 11–12

## Desktop resume sequence

When computer/editor access is restored:

1. Open the exact editor URL above.
2. Inspect the existing SAT page currently linked at `/sat-tutoring` and reconcile the `/sat-prep` route assumption without duplicating the page.
3. Apply only the approved native hero instruction.
4. Publish.
5. Capture/inspect live desktop and mobile hero evidence.
6. If the 1D checklist passes, complete the Step 1 freeze record and mark Step 1 FINISHED/FROZEN.
7. Begin Step 2A inspection. Do not redesign the hero again unless a regression is found.

## Rule going forward

For native Vibe visual content, screenshots are visual truth. API/custom-embed revision success is not proof that the live page changed.
