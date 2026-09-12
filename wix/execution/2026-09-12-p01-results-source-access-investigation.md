# Behavioral Bridge — P0.1 Results Source Access Investigation — 2026-09-12

Status: READ-ONLY INVESTIGATION / NO SITE MUTATION / DO NOT PUBLISH

## Target
Continue the locked P0.1 unit: obtain the actual native Results owner/source safely, back it up, map against accepted public Results rev16, and only then consider native parity edits.

## Current editor evidence
- Ryan's local authenticated Opera session is open at the canonical Wix Vibe editor for site `e6f68a23-cc00-421a-985e-515963cbe5f0`.
- The Code tab is available and the native user-code tree is visible, including `src/components/pages/ResultsPage.tsx`, `PostPage.tsx`, `ResourcesPage.tsx`, Home/About/SAT/EF/Consultation page files, shared Header/Footer/Router, and lib directories.
- Current screenshot shows `ResourcesPage.tsx` open and code visible. The Opera connector can inspect accessibility/screenshot state but does not expose generic click/type/source-export actions.
- Latest Vibe transcript still only proves Vibe *reported* the `PostPage.tsx` parser repair; no independent build/lint pass exists yet.
- Vibe AI credits remain exhausted. No AI edit was triggered.

## GitHub search result
- Connected GitHub code search did not locate the live Vibe native `ResultsPage.tsx` in the existing `A1BlackLotus/GPT-Work` coordination repository or another known installed repository.
- Therefore GPT-Work remains coordination/recovery evidence, not the native deployment repo.

## Official Wix source-path research
Wix official documentation confirms `Git Integration & Wix CLI for Sites` is a supported path for Wix site code. It creates/connects a GitHub repository for the site's code, which can then be cloned and edited with Wix CLI/Local Editor.

Important consequence from Wix documentation: **once the site is connected to GitHub, the Wix editor enters read-only mode**. Therefore connecting GitHub is a material workflow/architecture change and must not be performed merely as an inspection workaround without explicit Ryan approval and a rollback/working-plan decision.

Docs used:
- https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/about-git-integration-wix-cli-for-sites
- https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/setting-up-git-integration-wix-cli-for-sites

## Alternate browser probe
A read-only Browser Use attempt opened the Vibe editor solely to inspect GitHub integration status, with explicit instructions not to connect/create/install/edit/publish. The cloud browser was unauthenticated and stopped at Wix sign-in. No mutation occurred.

## Safety conclusion
Do NOT connect GitHub yet solely to obtain source. Do NOT publish. Do NOT touch protected runtime embeds.

## Current source-access blocker
Authentication itself is no longer the blocker in Ryan's local Opera session. The remaining blocker is a supported way for this assistant to read/copy the actual editor source. Current Opera tooling can see the Code UI but cannot click files or extract editor buffer text reliably.

## Next safe action
Use the existing authenticated local editor to expose `ResultsPage.tsx` through a non-destructive path. Preferred options in order:
1. If the editor has a built-in file copy/export/share mechanism that does not alter Git mode, expose/copy `ResultsPage.tsx` and its direct imports.
2. If Ryan is available for one tiny owner action, have him click `ResultsPage.tsx` in the already-open Code tree; then re-inspect the visible editor buffer/screenshots before asking for anything larger.
3. Only if direct editor extraction remains impossible, make an explicit owner decision about enabling Wix Git Integration, understanding it moves the editor to read-only and changes the development workflow.

Once source is obtained: back up source -> map against accepted public Results rev16 -> resolve review data ownership -> implement native parity -> validate -> inspect native desktop/tablet/mobile. Runtime protection remains enabled throughout.
