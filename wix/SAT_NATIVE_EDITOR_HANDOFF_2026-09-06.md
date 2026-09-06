# Behavioral Bridge — Native Wix Execution Handoff

Updated 2026-09-06. Canonical site: e6f68a23-cc00-421a-985e-515963cbe5f0.
Editor: https://vibe.wix.com/projects/e6f68a23-cc00-421a-985e-515963cbe5f0/v/editor
Live: https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/

## Current checkpoint
Steps 1–5 are PUBLISHED / VISUALLY VERIFIED / FROZEN. Continue with Step 6 Resources and Step 7 native article presentation. Do not restart connection audits, the SAT hero, or previous build recovery.

- Step 1: approved native SAT hero, exact copy and two CTAs, frozen at 21:45:51 UTC. Detailed gate: SAT_STEP1_FREEZE_RECORD_TEMPLATE_2026-09-06.md.
- Steps 2–3: rebuilt SAT lower sections and the full EF page. Native build passed 21:55:53 UTC (13.76 seconds), published successfully. Live desktop and 390×844 mobile views verified; mobile client/scroll width375px for both. SAT hero remains unchanged and appears once.
- Steps 4–5: rebuilt About and Home with Ryan's preserved portrait, the existing lighthouse artwork, cream/charcoal/gold editorial composition, concrete copy, real proof statistics, and direct service paths. Native build passed 22:06:03 UTC (15.08 seconds), published successfully. Live desktop and mobile screenshots inspected; both mobile client/scroll widths375px, one H1, no failed main images.
- No Vibe AI prompts were used for these visual edits. Source changed through the existing native Code editor. No new site or paid service was created.

## Changed native source
src/components/pages/SATTutoringPage.tsx — approved frozen hero plus diagnosis, Classify→Activate→Predict→Prove, illustrative error repair, accuracy before speed, fit, parent role, proof, CTA.
src/components/pages/EFSpecializedSupportPage.tsx — sunlit study image, real student/parent problems, Capture→Plan→Prioritize→Start→Sustain→Monitor→Finish, coaching example, expectations, fit, Ryan background, Results/consultation.
src/components/pages/AboutPage.tsx — real portrait, specific philosophy, defensible experience/education, Systems→Strategy→Behavior→Performance, clear service/consultation links.
src/components/pages/HomePage.tsx — visible lighthouse artwork, clear promise, ratings/experience strip, two primary service routes, method, Ryan portrait, real article links, restrained CTA. Removed generic testimonial paraphrases and placeholder resource promotions; established Results proof preserved.

Previously repaired: src/pages/api/consultation.ts and src/pages/api/blog/posts.ts. Their build succeeds. Generated ecommerce type-expansion errors remain in protected, read-only integration files; no override was attempted. Avoid repeating the broad 10-minute source check; build is the meaningful publication gate.

## Immediate next batch: Resources and articles
Native /post/accuracy-before-speed-sat-timing has been verified live with the real article body. Current native reader flattens rich content to text and needs headings/lists/paragraph spacing, image, related navigation, honest loading/not-found/error states, and stale-request cancellation.
All TWELVE core articles are published in Wix Blog, freshly verified via Query Posts. They contain PARAGRAPH, HEADING, BULLETED_LIST, and some ORDERED_LIST nodes. Preserve bodies/slugs.
Core slugs:
- accuracy-before-speed-sat-timing
- behavioral-bridge-method-systems-strategy-behavior-performance
- parents-support-sat-prep-without-sat-police
- executive-function-high-achieving-teen
- why-smart-students-still-procrastinate
- why-more-sat-practice-often-fails
- sat-reading-writing-error-patterns-below-700
- how-high-scoring-students-use-desmos-digital-sat
- weekly-executive-function-reset
- from-reminders-to-independence
- homework-initiation-executive-function
- why-motivation-is-wrong-target-executive-function

Existing custom embeds, read this batch:
- Resources Router & Cards 65311ea0-35cf-4aef-8a6a-55dc2915212e revision14, enabled. Contains eight image/title/description records, replaces legacy resource grid, rewrites all eight native /post links to /resources?article=slug. Home replacement only triggers old Featured Resources/placeholder headings; new Home does not trigger it.
- EF resource extension 965f4e07-3f81-4ea0-a03d-7501444795dc revision2, enabled. Adds four EF records/images to the injected hub.
- Article Reader 827e1cf6-b008-40e1-9df4-d8f822f88a63 revision16, enabled. Renders /resources?article=slug from an existing article library; does not intercept direct /post paths.
Preserve legacy query reader until native routes for all twelve plus unknown slug pass. Native library should retain twelve existing images, offer clear SAT/EF/method categories, and avoid old dead CMS tiles. Once native reader verified, remove/restrict the obsolete link rewrite rather than piling on another DOM hack; keep old query URLs working through an intentional native redirect.

## Remaining roadmap
6 Resources library; 7 Article reading; 8 Consultation end-to-end; 9 Header/footer/mobile navigation and route aliases; 10 Sitewide responsive/accessibility; 11 Domain/email/SEO; 12 Search Console; 13 Analytics; 14 Authority/distribution; 15 Useful automation + final maintenance freeze.

## Consultation gate
Form b692e647-b20c-45b0-ae1d-2530df030907 revision8 enabled.
Required targets first_name_bb,last_name_bb,email_bb,student_name_bb,student_grade_bb,goals_bb; optional phone_bb,availability_bb,service_bb. Frontend/endpoint require service too.
Owner email Ryan_Carvalho@BehavioralBridge.org; public phone508-774-0989.
Automation2695710a-a944-4fbd-9fe6-a7341b8cf53f revision2 ACTIVE, correct owner notification.
Safety embed b3ececaf-c221-4ad1-9590-4aa112486e11 revision25 ENABLED: still intercepts form submission to mailto and injects four fields. Do not remove fallback prematurely.
Publish native nine-field form with in-flight guard, preserved values, confirmed-record-only success, inline email fallback. Then replace interception/field injection with banner-only fallback and reload. Test TWO consecutive live TEST ONLY submissions using owner email; confirm exactly one Wix record each and corresponding owner emails. Restore BASIC spam protection from NONE and retest. Do not freeze based on API success alone.

## Global / launch facts
Canonical native service routes are /sat-tutoring and /ef-specialized-support. /sat-prep and /executive-function currently render Home; reconcile deliberately at Step9 without duplicate pages.
Header still has duplicate logo/wordmark desktop, deferred to Step9. Footer's stale copy/archive link needs review then.
Results page and evidence are frozen. Preserve reviews, source attribution, referral terms, and Results custom embeds.
Core Authenticity embed73a2dd88-1c32-44e4-a5a1-4e031f95e685 revision7 has SAT cleanup-only active path; never revive retired SAT injection.
Site is Free plan, with Wix badge. Do not purchase plan/domain or change DNS. Domain ownership/connection unresolved; API403 DOMAIN_NOT_PERMITTED is not proof of no ownership. Stale externalSiteUrl TheBehavioralBridge.org needs scoped review.
Search Console account authenticated but no properties. No bootstrap property route established. Complete what supported UI/auth allows; otherwise specific owner handoff.
Native Wix analytics already works. Prior development traffic:33sessions/33visitors/97views Aug29–Sep5; no meaningful conversion baseline. No new analytics stack needed merely to show activity.

## Credentials and style
Ryan Carvalho: B.S.Psychology magna cum laude Bridgewater State;12+years; Boston Latin/Brookline/Newton experience. No graduate attendance/graduation claim. No clinical diagnosis, fake scores, fabricated reviews, or unsupported elite/proven claims.
Cream/white, charcoal, graphite, silver, restrained accessible gold#806326; editorial serif headings, sans-serif body. Preserve useful existing imagery. Distinct page compositions, concrete methods/examples, modest CTAs.
Chrome connected and working. No more plugin audit. Eighteen connectors authenticated previously; Opera disconnected and irrelevant. No Calendar/Stripe/Make changes needed unless a concrete remaining website requirement justifies them.
Use native source edits, coherent builds/publishes, and concise freeze records. No repeated micro-update reports. Finish only after live visual/function gates pass and remaining domain/owner constraints are honestly documented.
