# Behavioral Bridge — Article Image / PostPage Renderer Addendum

**Date:** 2026-09-12  
**Status:** CURRENT ADDENDUM — use with `WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md`

## Approved external assets now uploaded to canonical Wix Media Manager

Canonical site: `e6f68a23-cc00-421a-985e-515963cbe5f0`

1. Homepage hero — approved/staged, not yet wired into native Home:
   - Display name: `BB_Home_Hero_Bridge-Clarity-Guidance-Structure-Independence_Editorial_v1.png`
   - Media ID: `445f86_55d560892aba4714b627a1e87fad1ee8~mv2.png`
   - URL: `https://static.wixstatic.com/media/445f86_55d560892aba4714b627a1e87fad1ee8~mv2.png`

2. Homework article infographic — approved and inserted into Wix Blog rich content:
   - Display name: `BB_Resources_Homework-Start-Sequence_Infographic_v1.jpg`
   - Media ID: `445f86_a1f958393d6a47258ab6773c31e61639~mv2.jpg`
   - URL: `https://static.wixstatic.com/media/445f86_a1f958393d6a47258ab6773c31e61639~mv2.jpg`

3. Motivation article infographic — approved and inserted into Wix Blog rich content:
   - Display name: `BB_Resources_Build-Action-Not-Motivation_Infographic_v1.jpg`
   - Media ID: `445f86_95ec120daff34701addcf9a9e68209a1~mv2.jpg`
   - URL: `https://static.wixstatic.com/media/445f86_95ec120daff34701addcf9a9e68209a1~mv2.jpg`

## Blog mutations completed

### Homework
Route: `/post/homework-initiation-executive-function`

Draft/post owner ID: `21945cef-4d24-4bc8-8b4b-6001ca7d7404`

Wix Blog rich content was updated with `UPDATE_PUBLISH` while preserving the existing node tree. Added:
- IMAGE node for the approved Homework infographic
- meaningful alt text
- H3 `Try This`
- paragraph: `Pick one assignment. Write the first visible action, choose the cue that starts it, put the phone out of reach, work for ten minutes, then write the next step before stopping.`

API result:
- status `PUBLISHED`
- `hasUnpublishedChanges=false`
- image node present in stored rich content
- callout present
- node count 156 → 161

### Motivation
Route: `/post/why-motivation-is-wrong-target-executive-function`

Draft/post owner ID: `c07b0cad-b856-4e4a-8afd-a07db6944e3e`

Wix Blog rich content was updated with `UPDATE_PUBLISH` while preserving the existing node tree. Added:
- IMAGE node for the approved Motivation infographic
- meaningful alt text
- H3 `Key Idea`
- paragraph: `Do not wait for motivation to appear. Make the cue visible, define the next action, protect a short start, use quick feedback, and decide in advance how to recover after interruption.`

API result:
- status `PUBLISHED`
- `hasUnpublishedChanges=false`
- image node present in stored rich content
- callout present
- node count 166 → 171

## Decisive public QA finding

Authenticated public-browser QA proves the Blog data write succeeded but the shared native article renderer does not render Ricos IMAGE nodes:

- Homework public article renders the new `Try This` heading and paragraph.
- Motivation public article renders the new `Key Idea` heading and paragraph.
- Neither public article exposes the newly inserted infographic in its rendered/accessibility image tree.
- Existing hero images continue to render normally.

Therefore the failure is **not** the image upload and **not** the Wix Blog rich-content mutation. The current owning defect is the shared native article renderer, most likely `src/components/pages/PostPage.tsx`, which is consuming text/headings but ignoring Ricos `IMAGE` nodes.

This also means the staged flagship ADHD article's inline graphics cannot be considered safe until native IMAGE rendering is fixed and regression-tested.

## NEXT coherent source task

Repair the shared native article renderer at the source layer:

1. Inspect actual current `src/components/pages/PostPage.tsx` and its rich-content renderer/helper imports.
2. Preserve the previous parser fix; run ESLint/type/build after changes.
3. Add native handling for Ricos `IMAGE` nodes using `imageData.image.src.id`, width/height, alt text, alignment/container width where available.
4. Do not add a runtime DOM observer, overlay, custom article router, or another compatibility patch.
5. Preserve all currently working rendering for paragraphs, headings, lists, TOC, hero, related cards and final CTA.
6. Verify the two exact media IDs above render in their respective public/native previews.
7. Verify one ordinary untouched article still renders correctly.
8. Check desktop and mobile sizing; infographic must scale responsively without overflow or microscopic text.
9. **Do not publish the broader native site draft merely to test this fix if it risks Results/native parity.** Use native preview/source validation first; controlled publication remains gated by the CURRENT checkpoint.

## Homepage hero placement

The new homepage bridge hero is approved and staged in Wix Media Manager, but native placement is intentionally deferred until source-level work can safely update Home without introducing a runtime patch or publishing the still-unaccepted native Results draft.
