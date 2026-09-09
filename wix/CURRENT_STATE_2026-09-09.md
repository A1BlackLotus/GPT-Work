# Behavioral Bridge Website — Canonical Current / Archive / Delete Ledger

Date: 2026-09-09
Status: CURRENT SOURCE OF TRUTH FOR WEBSITE CLEANUP / HANDOFF

This ledger classifies website-related Wix sites, custom embeds, GitHub records, Google Drive handoffs, routes, and known launch debt. It does **not** authorize destructive deletion by itself. Items marked DELETE are deletion candidates to remove only after the stated safety condition or explicit owner approval.

## Legend

- **CURRENT** — active, frozen production dependency, or required recovery reference. Keep.
- **CURRENT — TRANSITIONAL** — still needed now, but expected to retire after its named acceptance gate passes.
- **ARCHIVE** — useful historical/recovery evidence; do not use as the active source of truth.
- **DELETE CANDIDATE** — obsolete, duplicate, blank, or superseded; remove only after snapshot/verification/approval as noted.
- **OUT OF SCOPE** — current non-website work; do not touch during website cleanup.

## Canonical production site

**CURRENT**
- Site: Behavioral Bridge
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Published primary URL: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Editor: Picasso / Wix Vibe
- Velo: enabled
- Current service routes: `/sat-tutoring` and `/ef-specialized-support`
- Other core routes: `/about`, `/results`, `/resources`, `/book-consultation`, and `/post/<slug>` for the 12 published articles.

No custom domain is currently connected as a published primary or secondary URL. `BehavioralBridge.org` remains the intended permanent brand domain but is not yet connected to this site.

## Wix site inventory

| Classification | Site | ID | Reason / gate |
|---|---|---|---|
| **CURRENT** | Behavioral Bridge | `e6f68a23-cc00-421a-985e-515963cbe5f0` | Canonical production site. |
| **ARCHIVE — KEEP PUBLISHED TEMPORARILY** | The Behavioral Bridg | `adfac523-4bcc-4d88-8117-bf7e7f32ea92` | Legacy site. Do not trash until Step 11–12 domain/indexing migration and redirect strategy are complete. |
| **DELETE CANDIDATE** | wix-vibe-site-e88t | `6b9eddc0-83f7-440d-a3aa-fa3579c1fa6b` | Older duplicate Vibe/Picasso site. Before trashing, do one final visual/asset check for any unique content. |
| **DELETE CANDIDATE** | Behavioral Bridge Sa | `20252bf3-c346-4552-b0d2-038875afcdc9` | Accidental Sep. 6 Odeditor site; not canonical. Final confirmation only before trashing. |
| **DELETE CANDIDATE** | My Site | `cf390a29-57a1-4309-8906-a4b20b23ffc6` | Accidental Sep. 6 draft Odeditor site; not canonical. Final confirmation only before trashing. |

## Roadmap state

- **Steps 1–5: CURRENT / FROZEN / PUBLISHED / VISUALLY VERIFIED.** SAT, EF, About, and Home native rebuilds are not to be reopened absent a regression.
- **Step 6 Resources: CURRENT ACTIVE WORK.**
- **Step 7 Article reading: CURRENT ACTIVE WORK.**
- **Step 8 Consultation end-to-end: PENDING / SAFETY-CRITICAL.**
- **Step 9 Header/footer/mobile navigation + route aliases: PENDING.**
- **Step 10 Responsive/accessibility QA: PENDING.**
- **Step 11 Domain/email/technical SEO: PENDING.**
- **Step 12 Search Console/indexing: PENDING.**
- **Steps 13–15 Analytics, authority/distribution, automation/final freeze: PENDING.**

## Route classification

**CURRENT**
- `/sat-tutoring`
- `/ef-specialized-support`
- `/about`
- `/results`
- `/resources`
- `/book-consultation`
- the 12 canonical `/post/...` article routes

**ARCHIVE / LEGACY ROUTE — RECONCILE IN STEP 9**
- `/sat-prep`
- `/executive-function`

These legacy routes should not be treated as the current service-page source of truth. Reconcile them deliberately through native routing/redirect work; do not create duplicate pages.

## Wix custom embeds — CURRENT

The following are enabled and must not be deleted merely for cleanup:

### CURRENT / production-frozen
- `245d2c02-9ebb-4b3f-b863-53d787d8d13c` — Results Showcase v11 · Referral QA Repair — live revision 13; proof block now uses `75+` 5-star reviews and `300+` tutoring hours with non-Wyzant-only labels.
- `caa6261a-3fe9-447b-8727-956b34045c60` — Parent Fit FAQ v2 — live revision 3.

### CURRENT — TRANSITIONAL / safety or migration dependency
- `b3ececaf-c221-4ad1-9590-4aa112486e11` — Consultation Safety & Fallback — live revision 26. **Safety-critical.** Keep until Step 8 passes two consecutive realistic live submissions, both become new `CONFIRMED` Wix Forms records, both owner notification emails arrive, and spam protection is restored/retested.
- `f0a554b0-9b98-4615-8742-fb7e468eed45` — Professional Portrait Replacement — revision 1. Keep until native portrait placement is visually confirmed everywhere it replaces.
- `1764a383-90b2-4914-ad0f-2e4b7f8be903` — Article Content V2 — Accuracy + Procrastination — revision 6.
- `793f13b5-fb2e-4753-91b6-a57865ae0d90` — Article Content V2 — Method + Practice — revision 6.
- `4ddd3978-de08-4610-ba46-e305693c7c20` — Article Content V2 — Parents + R&W Errors — revision 6.
- `2a7a7da5-e3e1-4bb8-9ee8-5ec506e2f8a9` — Article Content V2 — Executive Function + Desmos — revision 6.
- `607a5c1c-380c-4a10-bd50-8e0c4b1339ad` — Article Content V2 — Weekly EF Reset — revision 1.
- `657b96c8-0080-48c0-975f-c71142570bcb` — Article Content V2 — Reminders to Independence — revision 1.
- `a18756c1-5508-4c55-85a1-4bbb1d38a192` — Article Content V2 — Homework Initiation — revision 1.
- `0c3d4f1e-ff9f-4ead-b67e-d369bc9fee07` — Article Content V2 — Motivation Systems — revision 1.
  - Keep these eight Article Content V2 embeds until Steps 6–7 native resource/article rendering is visually verified for all 12 articles, including unknown-slug/error states.
- `73a2dd88-1c32-44e4-a5a1-4e031f95e685` — Core Authenticity Pass v7 · SAT Native Editor Handoff — revision 7. Keep through Step 9 route cleanup. The retired SAT renderer must never be revived.
- `28670858-0820-42d0-850f-a7ab79b93de4` — Home & Resources Authenticity v1 — revision 1. Keep until native resource/home behavior is proven independent of it.

## Wix custom embeds — ARCHIVE / KEEP DISABLED FOR ROLLBACK

Keep these disabled as rollback references until the named roadmap gate is frozen; do not re-enable casually:

- `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5` — Conversion Trust Strip v1 — revision 4, **DISABLED 2026-09-09** after screenshots and source inspection confirmed an intermittent first-hydration race could insert the full-width black strip in the middle of Home/SAT/EF content. Preserve only as rollback/history; **do not re-enable**.
- `827e1cf6-b008-40e1-9df4-d8f822f88a63` — Article Reader & Publication Layout — revision 17. Archive after Steps 6–7.
- `65311ea0-35cf-4aef-8a6a-55dc2915212e` — Resources Router & Cards — revision 15. Archive after Steps 6–7.
- `965f4e07-3f81-4ea0-a03d-7501444795dc` — Resources Executive Function Extension v2 — revision 3. Archive after Steps 6–7.
- `1fd9bef8-e06b-4add-acf2-28f4359721dc` — Results Navigation & Frame v4 — revision 5. Archive through Step 9 because route/header reconciliation may still need its history.

## Wix custom embeds — DELETE CANDIDATES AFTER SNAPSHOT

These are disabled and superseded. Take one recovery snapshot/export of names/IDs/revisions first, then they can be removed after explicit approval:

- `0ac3fcaf-b699-42da-9867-972e09d58b75` — old Consultation Form Connector — revision 5. Retired and dangerous if accidentally re-enabled.
- `01e488ae-430d-4172-bbcd-dbd779af9dff` — old Resources Hub v1 — revision 2.
- `8b8ba9c6-bae9-4cb8-ae23-0066eb7bc5c5` — per-article reader: Accuracy Before Speed — revision 3.
- `4f74067b-34ca-4665-a561-1898724d0281` — per-article reader: Behavioral Bridge Method — revision 3.
- `5ea80cc1-f6cc-4a6f-b851-5978152cf2a2` — per-article reader: Parents + SAT Prep — revision 3.
- `264baa2f-b0fa-4b8f-9d25-5726e237cda9` — per-article reader: Executive Function in High-Achieving Teen — revision 3.
- `67ae8c6a-2d34-4a40-9a48-7b2dde30f61b` — per-article reader: Smart Students Procrastinate — revision 3.
- `633a2960-3890-4513-b724-084124a2977d` — per-article reader: More SAT Practice Often Fails — revision 3.
- `f97c6ee9-2838-4c9d-8bc1-341a592144ea` — per-article reader: SAT R&W Error Patterns — revision 3.
- `f73b4dae-b7b6-4cb2-8f40-3b51b61a0e32` — per-article reader: Desmos — revision 3.
- `c0d2cee1-a2ed-4672-add0-1d6b890e1fc9` — Generated Article Image Override v1 — revision 2; delete only after native article imagery is visually verified.

## Consultation system

**CURRENT**
- Wix Form ID `b692e647-b20c-45b0-ae1d-2530df030907`, revision 8.
- Required targets: first name, last name, email, student name, grade, goals.
- Optional in Wix schema: phone, availability, `service_bb`.
- Notification automation `2695710a-a944-4fbd-9fe6-a7341b8cf53f` is ACTIVE and filtered to this exact form; owner notification recipient is `Ryan_Carvalho@behavioralbridge.org`.
- Four historical records are confirmed, but they are Sep. 3 evidence and do not constitute current live-browser acceptance.
- Native recovery endpoint `wix/native-vibe-consultation/src/pages/api/consultation.ts` remains **CURRENT — RECOVERY REFERENCE** until Step 8 is frozen.
- `wix/native-vibe-consultation/FRONTEND_HANDLER.example.tsx` remains **CURRENT — RECOVERY REFERENCE** until Step 8 is frozen.

**KNOWN STEP-8 DEBT**
- `service_bb` is optional in the Wix schema while the prepared native endpoint requires a service value. Align before removing safety fallback.
- Do not remove/reduce the safety fallback until the full live acceptance gate passes.

## SEO / domain / indexing state

**CURRENT / HEALTHY**
- Sitewide indexing is allowed; there is no sitewide `noindex`.
- `robots.txt` allows normal crawling and includes the Wix sitemap.
- All 12 published blog posts have unique slugs and strong page-specific SEO title/description/canonical data.

**CURRENT KNOWN DEBT — STEP 11**
- Main native routes `/sat-tutoring`, `/ef-specialized-support`, `/about`, `/results`, `/resources`, `/book-consultation` currently resolve weak/raw-slug titles and the same generic description. Repair in native Vibe/Astro page-head/routing metadata; these routes are not ordinary Wix STATIC_PAGE SEO items.
- Home has a stronger saved SEO override but the resolved published Home metadata still shows the older title/description state. Reconcile publication state.
- Site Properties still contains stale `externalSiteUrl: https://TheBehavioralBridge.org`. Do not blindly change it; resolve only when the permanent domain is actually connected.
- No custom domain is currently present in the canonical site's published URL list.

## Current known content debt — proof metrics

- User screenshots on 2026-09-09 visually confirm the **native Home proof bar** still shows `60+` Wyzant ratings and `240+` Wyzant tutoring hours.
- Check native SAT/EF and any other native proof blocks for the same stale values during the next native-editor pass.
- Current aggregate website wording requested by Ryan is `75+` 5-star reviews and `300+` tutoring hours, with general/cross-platform labels rather than falsely attributing those aggregate totals to Wyzant alone.
- Fresh public Wyzant counters should remain separately attributable to Wyzant when used; do not relabel aggregate totals as Wyzant counts.
- **Do not add another DOM-mutating proof-number rewrite.** Update these values natively in the existing Vibe page source and verify desktop/mobile when editor/browser access is available.

## Article/resource state

**CURRENT**
- All 12 core articles are published and should be preserved.
- Preserve titles, slugs, bodies, and existing per-post SEO.

**VERIFY VISUALLY — DO NOT AUTO-FIX**
- Homework Initiation and Motivation Systems currently report `coverImageDisplayed=true` but no Blog `coverImage` value. Check live cards/article pages before deciding whether an image repair is needed.

## GitHub repository classification

Repository: `A1BlackLotus/GPT-Work`

### CURRENT
- `wix/CURRENT_STATE_2026-09-09.md` — this ledger; canonical website state.
- `wix/SAT_NATIVE_EDITOR_HANDOFF_2026-09-06.md` — current published build handoff supporting Steps 1–5 frozen and Steps 6–7 next; keep as supporting evidence, but this ledger supersedes it for cleanup/status.
- `wix/native-vibe-consultation/src/pages/api/consultation.ts` — current recovery reference until Step 8 freeze.
- `wix/native-vibe-consultation/FRONTEND_HANDLER.example.tsx` — current recovery reference until Step 8 freeze.
- `wix/native-vibe-consultation/VIBE_APPLY_PROMPT.md` — **CURRENT — RECOVERY/APPLY REFERENCE UNTIL STEP 8 FREEZE**; preserve because it contains the canonical application instructions and live acceptance gate for the native consultation repair.
- `behavioral-bridge/math-interactives/` — **OUT OF SCOPE / DO NOT TOUCH**; current curriculum work, not website cleanup.

### ARCHIVE
- `wix/SAT_COLLISION_AUDIT_2026-09-06.md` — historical collision proof; route/revision assumptions have moved on.
- `wix/SAT_STEP1_FREEZE_RECORD_TEMPLATE_2026-09-06.md` — completed frozen Step-1 evidence despite the old “TEMPLATE” filename.
- `wix/SAT_STEP2_METHOD_PROOF_CONVERSION_SPEC_2026-09-06.md` — Step 2 is already implemented/frozen; document still says PREPARED ONLY and names the legacy route.
- `wix/SITE_MAINTENANCE_2026-09-05.md` — historical maintenance record; current embed/article counts have advanced.
- `wix/WORKSTREAM_HANDOFF.md` — historical consultation/resource chronology; no longer the active website source of truth.
- `wix/native-vibe-consultation/VIBE_ACCESS_BLOCKER.md` — historical Sep. 3 access investigation.

### DELETE CANDIDATE
- root `Website` — one-byte blank file; safe to remove.
- `wix/consultation-bridge.js` — stale comment-only “live state pointer” with obsolete revision/submission counts; Git history already preserves it.
- `wix/native-vibe-consultation/NEXT_ACTION.md` — its next action is stale and can misdirect future work because the native code/editor state has advanced.

## Google Drive classification

**ARCHIVE**
- `CURRENT — Behavioral Bridge — SAT Desktop Action — 2026-09-06` — Drive file ID `1PBiVMkjgp64E3KBc4t3QA34SLxANURDTwUedGSKjNg4`. Its title says CURRENT, but its body still says Step 1 is blocked on phone/desktop access and names `/sat-prep`; later verified work completed and froze Steps 1–5. Rename/move to archive when Drive cleanup is performed.

**CURRENT / OUT OF SCOPE — DO NOT TOUCH**
- SAT Math production checkpoint and curriculum/master-guide files that only mention Wix incidentally. They belong to the curriculum production system, not this website cleanup.

## Deletion order when owner approves

Use this order to avoid destroying recovery evidence:

1. Snapshot the DELETE-CANDIDATE disabled custom embeds (ID/name/revision/source if needed).
2. Remove the one-byte GitHub `Website` file and stale `native-vibe-consultation/NEXT_ACTION.md`; then remove `consultation-bridge.js` once this ledger/README point to the current state.
3. Remove the 11 disabled custom-embed DELETE candidates only after Steps 6–8 gates relevant to them are satisfied and rollback copies exist.
4. Trash the three noncanonical Wix sites only after one final visual/asset check confirms no unique content.
5. Keep the legacy `The Behavioral Bridg` site until permanent domain + redirects + indexing migration are complete; retire it last.

## Next execution order

1. Finish and visually freeze Steps 6–7 Resources + native article reading.
2. Finish Step 8 consultation transport acceptance; only then reduce safety fallback and restore/retest spam protection.
3. Step 9 route aliases/header/footer/mobile nav; explicitly reconcile `/sat-prep` and `/executive-function`.
4. Step 10 responsive/accessibility QA.
5. Step 11 domain + native-page SEO + stale `externalSiteUrl` reconciliation.
6. Step 12 Search Console/indexing and migration checks.
7. Only then retire the old indexed Wix site and do final destructive cleanup.

## Destructive-action rule

Nothing in this file means “delete immediately.” No live site, custom embed, repository file, or Drive file was deleted while producing this ledger. Use explicit owner approval and the listed gates for any destructive action.