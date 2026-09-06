# Behavioral Bridge SAT — Native Vibe Editor Handoff

Date: 2026-09-06

## Status

Current roadmap step: **Step 1 — SAT Runtime + Hero Completion**

- 1A Source-of-truth/runtime audit: COMPLETE
- 1B Deterministic architecture/spec: COMPLETE
- 1C Custom-embed implementation attempt: EXHAUSTED / RETIRED
- 1D Live visual QA: BLOCKED ON NATIVE VIBE EDIT
- 1E Freeze + canonical sync: PENDING AFTER VISUAL PASS

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

Current revision 7 was renamed as a native-editor handoff and the SAT branch was neutralized so it cannot unexpectedly double-render later. EF/About behavior remains separate and should not be casually altered during the SAT native edit.

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

After the native edit is published, verify on a real mobile live-page screenshot:

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
3. Confirm the Core Authenticity SAT branch remains neutralized.
4. Update this handoff with the published native state.
5. Begin Step 2 — SAT Method + Proof + Conversion.

## Deferred items

Do not mix these into Step 1:

- Full `Classify → Activate → Predict → Prove` method presentation → Step 2
- Student fit/proof/conversion below first screen → Step 2
- SAT SEO title (`sat-prep | Behavioral Bridge`) → Step 11
- Global header/footer reconciliation → Step 9
- Domain/GSC work → Steps 11–12

## Rule going forward

For native Vibe visual content, screenshots are visual truth. API/custom-embed revision success is not proof that the live page changed.