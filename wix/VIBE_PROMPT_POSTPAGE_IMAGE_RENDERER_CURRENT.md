# Behavioral Bridge — Vibe Prompt — PostPage Ricos IMAGE Renderer Repair — CURRENT

Use this as a **targeted native-source repair only**. Do not broaden it into a site redesign.

---

Work in the current Behavioral Bridge native Vibe source for site `e6f68a23-cc00-421a-985e-515963cbe5f0`.

## Exact defect

Two existing published Wix Blog posts now contain valid Ricos `IMAGE` nodes in their stored `richContent`, and Wix confirms those nodes are published. Their newly added H3/callout text renders publicly, but the newly added in-body IMAGE nodes do not render at all in the public article reader.

This proves the Blog data is correct and the defect is in the shared native article renderer, most likely `src/components/pages/PostPage.tsx` or a helper it imports.

Do **not** alter the blog data, regenerate images, create an overlay, revive the old custom reader, add DOM observers, or add a runtime compatibility patch. Fix the native shared reader.

## Approved test assets already in Wix Blog rich content

Homework route:
`/post/homework-initiation-executive-function`

Expected in-body image media ID:
`445f86_a1f958393d6a47258ab6773c31e61639~mv2.jpg`

Expected alt text:
`Homework Start Sequence: identify task, first visible action, start cue, reduce distraction, short work block, review next step`

The same article already publicly renders the newly inserted `Try This` heading and paragraph, which confirms current rich-content fetching is receiving at least the adjacent text nodes.

Motivation route:
`/post/why-motivation-is-wrong-target-executive-function`

Expected in-body image media ID:
`445f86_95ec120daff34701addcf9a9e68209a1~mv2.jpg`

Expected alt text:
`Build Action, Not Motivation: visible cue, concrete next action, protected start, short feedback loop, recovery rule`

The same article already publicly renders the newly inserted `Key Idea` heading and paragraph.

## Required work

1. Inspect the actual current `src/components/pages/PostPage.tsx` before editing.
2. Identify the function/component that maps Wix Ricos nodes to React output.
3. Confirm which node types are currently handled and whether `IMAGE` is absent, filtered, or malformed.
4. Preserve the prior parser-error repair around the conditional JSX. Do not reintroduce the prior `'}' expected` ESLint failure.
5. Add first-class native handling for `node.type === 'IMAGE'` using the actual Ricos shape present in the current data.
6. Use `node.imageData.image.src.id` as the Wix Media identifier where present.
7. Build the proper Wix/static image URL using the same supported media strategy already used elsewhere in this codebase. Do not hard-code only the two test media IDs.
8. Preserve and render `imageData.altText` as `<img alt=...>`.
9. Respect image width/height when present, while rendering responsively so content never exceeds the article column.
10. Respect `imageData.containerData.alignment` where practical.
11. Use responsive styling equivalent to `max-width: 100%; height: auto;` or the existing native design-system equivalent.
12. Maintain the article's premium editorial presentation: appropriate vertical spacing, restrained border radius if the current reader uses one, no giant full-viewport treatment, no distortion.
13. Do not render the article hero twice. This fix is for in-body Ricos IMAGE nodes, not the separate hero-media treatment.
14. Preserve all currently working node behavior: paragraphs, headings, lists, links, TOC generation/anchors, existing hero, related-reading cards, article metadata, and final consultation CTA.
15. Do not revive the retired custom Article Reader or Resources Router.
16. Do not change Results, consultation safety, proof metrics, Home, SAT, EF, About, or global branding in this run.

## Validation

Run the project's available validation after editing:

- ESLint
- TypeScript/typecheck
- build/compile

Do not merely state that syntax looks correct. Report exactly which validation commands actually completed and whether each passed.

Then preview:

### Homework
Confirm the infographic associated with
`445f86_a1f958393d6a47258ab6773c31e61639~mv2.jpg`
actually appears in-body and that the adjacent `Try This` block still appears.

### Motivation
Confirm the infographic associated with
`445f86_95ec120daff34701addcf9a9e68209a1~mv2.jpg`
actually appears in-body and that the adjacent `Key Idea` block still appears.

### Regression article
Open at least one ordinary existing article that does not contain one of these new images and confirm its body, headings, lists/links, related reading, and CTA still render normally.

### Responsive acceptance
Check the two new in-body images on desktop and mobile/narrow-mobile:

- no horizontal overflow
- no clipping
- no distortion
- text in infographic remains readable
- appropriate article-column width
- no duplicated hero/content

## Safety / publication boundary

**Do not publish the broader native site draft as part of this repair.**

The public Results page is currently protected by runtime code while native Results parity remains unaccepted. Complete the source repair and native preview/validation only. Controlled publication is a separate later gate.

## Completion report

Return only concrete evidence:

- files inspected
- files changed
- root cause found
- IMAGE handling added or repaired
- ESLint result
- TypeScript/build result
- Homework preview result
- Motivation preview result
- regression-article result
- desktop/mobile result
- any remaining blocker

Do not say the website is complete after this task. This task closes only the shared article IMAGE-rendering defect if all checks pass.
