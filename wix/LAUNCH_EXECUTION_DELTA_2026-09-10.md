# Behavioral Bridge — Launch Execution Delta — 2026-09-10

Status: CURRENT DELTA / SUPPORTING RECORD
Authority remains: public live Wix behavior > current screenshots/public render > live Wix configuration > `wix/CURRENT_STATE_2026-09-09.md` > `wix/CURRENT_PRIORITY_EXECUTION_2026-09-09.md` > this delta > older handoffs.

This file records only newly verified facts from the September 10 execution pass. It does not replace the canonical queue or authorize destructive cleanup.

## 1. Accessibility — fresh scan completed

Canonical Wix site: `e6f68a23-cc00-421a-985e-515963cbe5f0`.

Fresh scan ID: `2cac6b01-0b63-4a4f-a2a8-172e05c9e19c`.

Final status: `ACCESSIBILITY_SCAN_STATUS_PARTIALLY_COMPLETED`.

Results:
- 5 pages discovered.
- 4 pages completed analysis with **0 findings**.
- 1 root page failed analysis with `ANALYSIS_FAILED` / `This page could not be checked.`
- Successful pages were checked for alternative text, color contrast, heading structure, keyboard support, and screen-reader support.
- The successful-page rule coverage included color contrast, DOM order, heading structure, image alt, inaccessible component/layout, media alternatives, and page title.

Important limitation: Wix again scanned its older internal hostname `https://ryancarvalho6.wixsite.com/wix-vibe-site-5cld/...`, not the canonical public Vibe hostname. Therefore this is useful partial evidence, not a current-public accessibility freeze. Do not repeatedly rerun the scanner absent a meaningful site change.

## 2. Browser / public visual QA

Opera Browser Connector still reports that the browser is not connected even after the user reported updated permissions. Therefore no claim of live desktop/mobile visual verification was made during this pass.

An alternate browser-capable connector (TinyFish) was surfaced to the user as an optional connection. It is not yet installed/connected and must not be treated as available until that happens.

Still awaiting browser-level acceptance:
- sitewide `Nearly 14` visual confirmation
- Results stray-response badge visual confirmation
- two replacement Resources covers visual confirmation
- desktop/mobile responsive QA
- header/footer/navigation QA
- current-public keyboard/accessibility QA
- native consultation TEST ONLY submissions

## 3. BehavioralBridge.org — domain state resolved

Official Wix domain availability check for `behavioralbridge.org` returned `available: false`, meaning the exact domain is already registered.

Authenticated Wix-account ownership lookups then returned:
- assigned domains: no exact match
- unassigned domains: no exact match

Therefore the verified statement is:
- `BehavioralBridge.org` is registered.
- It is **not currently present in this Wix account** as an assigned or unassigned domain.
- This does **not** prove whether Ryan owns it at an outside registrar.

Do not purchase, bind, move, or alter DNS from this state. If Ryan confirms he owns it externally, use Wix's existing-domain connection flow. The canonical Behavioral Bridge site is still on a Free plan, so custom-domain connection also remains subject to Wix plan requirements.

## 4. Google Search Console — exact blocker resolved

Wix GSC readiness remains `NOT_READY`, previously reporting `SITE_OWNER_NOT_VERIFIED`.

A supported META verification attempt was made once after permissions were updated. It did not verify because Wix has no connected Google token for this site (`MISSING_TOKEN`).

Wix GSC connection state is currently `NOT_CONNECTED`.

The separate GSC Wizard workspace was also checked and currently contains **zero registered Search Console properties**. There is no hidden existing property available to reuse.

Required next external gate:
1. complete the one-time Google authorization in Wix using a fresh connect URL;
2. then re-check connection/readiness;
3. verify/add the site;
4. submit sitemap / inspect indexing only after the property is valid.

Do not report Search Console as configured before that gate passes.

## 5. Native Vibe source boundary confirmed

A recursive inspection of `A1BlackLotus/GPT-Work` confirms the repository does **not** contain a complete deployable Wix Vibe site source tree. It contains website handoffs/recovery material, consultation reference code, SEO/article production records, and the separate `behavioral-bridge/math-interactives/` assets.

Therefore GitHub remains coordination/recovery evidence, not proof of deployed Wix source. Do not make a repository code edit and claim it updated production. Native article-reader/page-head repairs still require actual Wix Vibe editor/source access or a future supported source-edit path.

## 6. Analytics baseline attempt

Wix Analytics semantic models are available. The `traffic` model was resolved as `cad7fd34-2c8b-4dda-8296-3f9d47fb484d`, with confirmed measures including sessions, visitors, views, pages per session, site time, and bounce rate.

A launch-period aggregate query was attempted but was blocked upstream before Wix returned analytics data. No traffic total was recorded and no number should be inferred.

## 7. Flagship SEO article / visuals

The canonical source-backed article draft remains:
`wix/seo/DRAFT_DIGITAL_SAT_ADHD_EXECUTIVE_FUNCTION_GUIDE_2026-09-09.md`

Working title:
`Digital SAT Prep for Students with ADHD: A Focus, Timing, and Executive Function Guide`

A fresh September 10, 2026 fact-check against current College Board sources confirmed the draft's key policy/structure claims: standard SAT testing time is 2 hours 14 minutes; Reading and Writing is 64 minutes and Math 70 minutes; each section has two equal modules; full-length Bluebook practice can be configured for approved accommodations; students using approved extended time may move forward after standard time has elapsed; and extended-time use can include extra breaks. Preserve the draft's distinction between tutoring strategy and formally approved SSD accommodations.

A real Wix Blog staging draft has now been created on the canonical site:
- Draft ID: `3f20ae47-004c-4171-995f-893e7c102f43`
- Status: `UNPUBLISHED`
- Title: `Digital SAT Prep for Students with ADHD: A Focus, Timing, and Executive Function Guide`
- Requested SEO slug field: `digital-sat-prep-adhd-executive-function`
- Wix preview path currently returned as `/post/digital-sat-prep-for-students-with-adhd-a-focus-timing-and-executive-function-guide`
- SEO title/meta and excerpt staged
- `publish:false`
- no duplicate title was created
- the staging body contains an editorial do-not-publish note only; the complete article body remains protected in GitHub until native article-reader formatting can be visually inspected

Publication remains gated on article-reader/visual QA.

The higher-control image generator that successfully produced the earlier replacement Resources covers was attempted for the first flagship diagram on September 10 but returned `insufficient_balance` before generation. No asset was produced or uploaded. Do not lower the visual standard or publish a substitute collage merely to close the task.

Planned four isolated visuals remain:
1. SAT Performance Pipeline
2. Attention-Safe SAT Decision Loop
3. Diagnose → Repair → Micro-Redo → Verify Transfer
4. Hyperfocus Time Trap

## Current practical blockers after this execution pass

The remaining project is no longer blocked by general permissions. The specific external/manual gates are now isolated:
- live browser/editor connection for visual/native Vibe QA and source edits
- one-time Google OAuth for Search Console
- confirmation/connection path for the already-registered `BehavioralBridge.org`
- usable image-generation path for the four flagship graphics

Everything else should continue from the canonical queue without restarting frozen work.


## Continuation — live audit and graphics completed September 10

- Chrome is no longer exposed by the browser connector. An attempted Chrome editor tab returned "Browser is not available: chrome". Owner was asked to reconnect signed-in Chrome; native source edits remain blocked. Public checks continued in the in-app browser.
- All 12 canonical article routes were checked after their "In this article" navigation became visible. Every route displayed its matching H1, substantial article paragraphs and lists; no reader error was observed. This is content-loading QA, not full desktop/mobile visual acceptance.
- Results menu destinations are canonical: Home, SAT Tutoring, EF & Specialized Support, About, Results, Resources, consultation.
- Confirmed and repaired a regression: Resources displayed "Nearly 14 articles" because the experience patch searched distant ancestors. ProofMetricsCoherence embed 0adc9e67-d1d6-43fa-bd06-abc7a923793f is now revision 7. expContext stops before BODY/MAIN/HTML, searches at most four ancestors, and rejects contexts over 300 characters. After propagation, a fresh public Resources load showed "12 articles" and the delivered script contained V7. Preserve this fix; verify Home/SAT experience blocks when native edits resume.
- Confirmed stale native Resources catalog image: the Homework card still loads 445f86_155995d6565c4de28e6b65214bf45a1e~mv2.png instead of the replacement documented above. Update src/lib/resourceArticles.ts in actual Vibe source for both replacement covers, including reader hero overrides.
- Results screenshots show two unresolved image issues: at desktop width 1280 the cover background severely crops its baked-in slogan; at width 702 a small white "I typically respond within 24 hours" rectangle remains visible in the hero image area despite no matching DOM text node. Investigate the image itself/background before adding another text cleanup script. The existing Results embed is 14,999 characters, so do not exceed its limit.
- Attempted 390px viewport override did not take effect: observed innerWidth remained 1280. No mobile acceptance claimed. Override reset.

### Four flagship visuals — generated, inspected, uploaded

Built-in image generation succeeded. Each is a separate 1254px square ivory/charcoal/muted-gold infographic; text inspected in generated output. Wix upload returned success for all four (processing status initially PENDING):

1. SAT Performance Pipeline: 445f86_3e2818d5b4d0490995d87782c56974c7~mv2.png
2. SAT Decision Loop: 445f86_d8b0f8cba046437dac159d5663b77fed~mv2.png
3. Error Repair Loop: 445f86_b528c44c67b74af894bc0a84ab85c7ae~mv2.png
4. Hyperfocus Time Trap: 445f86_ee5297959a624790adea9d4fea83de86~mv2.png

Media URLs use https://static.wixstatic.com/media/ followed by the exact ID.
Project copies are in C:/Users/ryanm/Documents/Codex/2026-09-06/gmail-plugin-gmail-openai-curated-remote/output/website-finalization/:
sat-performance-pipeline.png, sat-decision-loop.png, sat-error-repair-loop.png, sat-hyperfocus-time-trap.png.

Prompt set: separate premium editorial ivory/charcoal/gold diagrams with large mobile-readable text. Pipeline: Content Knowledge → Decision Process → Attention Control → Execution → Score. Decision loop: Classify (question type) → Activate (rule) → Predict (answer requirement) → Prove (evidence). Repair: Diagnose the Error → Repair the Decision → Micro-Redo → Verify Transfer, loop back if pattern returns. Hyperfocus: productive persistence (clear strategy/new information/progress) versus time trap (repeated rereading/no new information/easier questions waiting), stay/flag decision. No generated credentials, score claims, portraits or collage.

Do not regenerate these assets. The staging article remains unpublished; no body/publication change was made in this continuation. Next: reconnect actual Wix editor, repair catalog and reader image/caption support as needed, insert the full clean article and these assets into existing draft 3f20ae47-004c-4171-995f-893e7c102f43, and pass visual/reader gates before publication. Consultation end-to-end tests, native SEO, domain and GSC gates remain open as described above. No claim of launch completion.
