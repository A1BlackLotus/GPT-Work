# Behavioral Bridge — Screenshot QA Current

Date: 2026-09-09
Status: CURRENT SUPPORTING QA RECORD
Authority: public screenshot/render > live Wix state > this record > older handoffs.

## Screenshot defects reported by Ryan

### 1. Stale 12-year experience wording across pages
**Status: IMPLEMENTED / TECHNICALLY VERIFIED / VISUAL RECHECK PENDING**

Current canonical public wording: **Nearly 14 years**.

Live repair:
- Proof Metrics Coherence Patch `0adc9e67-d1d6-43fa-bd06-abc7a923793f`
- revision **6**
- enabled / transitional
- catches `12+`, plain `12`, `12 years`, `12+ years`, and split-card variants when they occur in experience contexts on core public routes
- preserves Home/SAT 75+ / 350+ proof repair and single-plus normalization
- does not intentionally rewrite unrelated numerical 12s

Core Authenticity About repair remains enabled separately.

Permanent plan: replace stale native values in Vibe source when editor access is available, visually verify desktop/mobile, then retire the transitional text patch.

### 2. Results top-right clipped response-time element
**Status: IMPLEMENTED / TECHNICALLY VERIFIED / VISUAL RECHECK PENDING**

Investigation:
- enabled embed scan found no active script that itself renders `within 24 hours`, `24 hour`, `respond`, `reply`, `typically`, or similar response-time content
- Consultation Safety rev27 is route-gated to consultation routes and is not the source
- Results Showcase rev14 contains no response-time badge
- Results Showcase hides native children inside `<main>`, so a native floating element mounted outside `<main>` can escape and remain clipped at the page edge

Repair:
- new embed `4bb4aa54-4956-4a44-af3d-6dbf0ca78d54`
- name `Behavioral Bridge — Results Stray Response Badge Cleanup`
- revision **1**
- enabled
- BODY_END
- small, route-specific cleanup only
- on `/results`, hides only a small stray element whose visible text matches a response-time pattern involving `respond/reply` plus `24` / `business day` or `typically respond/reply`
- excludes the Results Showcase itself
- restores any hidden stray automatically when leaving `/results`
- no new visible UI, bar, CSS overlay, or content injection

An attempted in-place Results Showcase rev15 repair was rejected by Wix because the existing embed is already near the 15,000-character limit. **No Results Showcase mutation occurred from that failed attempt.** The separate small cleanup is the safer architecture.

### 3. Two weak bottom Resources article covers
**Status: REPLACED / PUBLISHED / TECHNICALLY VERIFIED / VISUAL RECHECK PENDING**

Affected existing posts:
1. `21945cef-4d24-4bc8-8b4b-6001ca7d7404` — `The Homework Problem Is Often an Initiation Problem` — slug `homework-initiation-executive-function`
2. `c07b0cad-b856-4e4a-8afd-a07db6944e3e` — `Why Motivation Is the Wrong Target for Executive Function` — slug `why-motivation-is-wrong-target-executive-function`

Original state:
- both PUBLISHED
- no unpublished changes
- no hero image
- cover media displayed but `custom:false`, causing Wix to fall back to weak document-like content imagery

New cover assets uploaded to canonical site:
- initiation cover: `445f86_e228e6e7b201423b82c59cafb022bbc3~mv2.png`
- motivation/systems cover: `445f86_6476bad82bd140e8a4d24dff440a3a67~mv2.png`

Blog update:
- bulk UPDATE_PUBLISH
- total successes: **2**
- total failures: **0**
- only `media` field was targeted through field masks
- titles, slugs, bodies, related-post setup, SEO, and other post fields were not intentionally changed
- meaningful alt text supplied for both covers

Rejected image outputs:
- earlier multi-panel/collage generations were rejected and **not uploaded** as article covers

## Flagship SEO article continuity

The previously selected SEO-first article remains active work and was not lost during screenshot QA:
- topic: `Digital SAT Prep for Students with ADHD: A Focus, Timing, and Executive Function Guide`
- spec: `wix/SEO_FLAGSHIP_ARTICLE_2026-09-09.md`
- full draft: `wix/seo/DRAFT_DIGITAL_SAT_ADHD_EXECUTIVE_FUNCTION_GUIDE_2026-09-09.md`
- research + full draft complete
- custom flagship visuals + final publish remain pending behind article-reader/visual QA gate

## Remaining visual acceptance gates

1. Refresh/recheck Home, SAT, EF, About, Results, Resources on desktop and mobile.
2. Confirm no visible `12 years` / `12+ years` remains in current experience copy.
3. Confirm Home/SAT proof block shows 75+ / 350+ / Nearly 14 with one plus only.
4. Confirm black strip remains absent.
5. Confirm clipped Results response-time element is gone.
6. Confirm the two Resources bottom cards now show the new custom covers cleanly.
7. Keep all unrelated frozen page design intact.
