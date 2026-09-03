/*
 * Behavioral Bridge consultation — LIVE STATE POINTER
 *
 * IMPORTANT: DO NOT DEPLOY THIS FILE DIRECTLY.
 * GPT-Work is coordination/recovery documentation, not the Wix Vibe source checkout.
 * The authoritative implementation must be read from Wix before every edit.
 *
 * LIVE WIX SITE: BehavioralBridge
 * SITE ID: e6f68a23-cc00-421a-985e-515963cbe5f0
 * CONSULTATION ROUTE: /consultation
 * WIX FORM ID: b692e647-b20c-45b0-ae1d-2530df030907
 * CANONICAL CUSTOM EMBED: b3ececaf-c221-4ad1-9590-4aa112486e11
 * LIVE REVISION WHEN THIS FILE WAS UPDATED: 16
 * LIVE NAME: Behavioral Bridge — Visible Email Safety Banner v7
 * LIVE POSITION: BODY_START
 * LIVE PAGE FILTER: none (temporarily sitewide)
 * RETIRED DUPLICATE EMBED: 0ac3fcaf-b699-42da-9867-972e09d58b75 (keep disabled)
 *
 * PRODUCTION-SAFETY DECISION:
 * The browser-to-Wix Forms transport remains unreliable. Exactly 3 confirmed
 * backend submissions are known and repeated later tests failed to create #4.
 * Therefore the public site is temporarily in VISIBLE EMAIL SAFETY MODE.
 *
 * CURRENT LIVE BEHAVIOR:
 * 1. A large premium sitewide EMAIL RYAN DIRECTLY button appears near the top of
 *    every page while the automatic form is untrusted.
 * 2. It opens the visitor's email app addressed to:
 *      Ryan_Carvalho@BehavioralBridge.org
 * 3. The existing consultation form is preserved visually.
 * 4. When the form can be detected, its submit button is changed to
 *    SEND REQUEST BY EMAIL →.
 * 5. That button collects the visible form values and opens a prefilled email
 *    containing contact, student, service, goals, and availability information.
 * 6. The visitor is explicitly told by the flow to complete sending in their
 *    email application.
 * 7. The flaky public-browser Wix Forms POST is not used in this temporary mode.
 *
 * USER VERIFICATION:
 * The user confirmed revision 16's banner is visibly rendering after reopening
 * the site in a fresh/account session. The sitewide placement is intentionally
 * aggressive during the outage; it is not the preferred permanent placement.
 *
 * ARCHITECTURE FINDING:
 * Current Wix documentation does not expose a REST endpoint for arbitrary
 * read/write access to this existing Vibe site's source files. REST/custom embeds
 * are therefore not the right layer for the permanent transport repair. The
 * durable fix needs the site's actual Vibe/source development environment (or a
 * supported site/backend code path) with Wix-managed authentication.
 *
 * CURRENT RULES:
 * - Keep the large direct-email CTA until a true native/server-side solution
 *   passes repeated production tests.
 * - Keep retired duplicate embed disabled.
 * - Do not restore browser-to-Wix Forms POST merely because one test works.
 * - Require at least two consecutive confirmed submissions before declaring a
 *   future native/server-side transport stable.
 * - Read the current live Wix embed before every edit; never trust this pointer
 *   as the live revision after another workstream has changed Wix.
 *
 * See wix/WORKSTREAM_HANDOFF.md for chronology and next technical target.
 */
