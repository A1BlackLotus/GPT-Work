# Behavioral Bridge — Astra Zero-Credit Source Access Recovery — CURRENT

**Purpose:** Prevent further Wix Vibe AI-credit waste. Resolve native source access first, then continue website completion from Git/GitHub/CLI where possible.

## Current verified state

- Canonical site: Behavioral Bridge
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Public root: `https://my-site-h5mhm1d7-ryancarvalho6.wix-vibe-site.com/`
- Editor: Wix Vibe / Picasso; Velo enabled
- Vibe currently shows **1 credit left**.
- Three recent Vibe attempts failed with Wix-side messages: `I couldn’t make the changes you requested due to a technical issue on our side.` / `Couldn't complete request`.
- Do not spend the remaining credit while this failure mode persists.
- Opera can inspect the authenticated editor but cannot reliably perform code-file edits or GitHub authorization clicks.
- OpenAI Browser Use could not be used to complete this authenticated setup path.
- Current ChatGPT GitHub connector can access only:
  - `A1BlackLotus/GPT-Work`
  - `A1BlackLotus/Behavioral-Bridge-AI`
- No Wix native site-source repository is currently visible to ChatGPT.

## Supported Wix path — authoritative docs

Wix's official **Git Integration & Wix CLI for Sites** flow is the correct zero-Vibe-credit path for editing the site's native code outside the AI editor.

Wix documentation confirms:

1. The site can be connected to GitHub from the editor's Code sidebar.
2. Wix/Velo creates a **new dedicated GitHub repository** for the site's code.
3. The owner chooses the repository owner/name.
4. The owner must authorize/install the Velo GitHub app on that repo.
5. After connection, the editor shows the repo name/default branch and code editing moves to Git/CLI/local-development workflow.
6. The repo can be cloned to a computer **or cloud IDE workspace**.
7. Wix CLI for Sites / Local Editor can preview and publish changes without relying on Vibe AI prompts.

Official setup doc used:
`https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli-for-sites/setting-up-git-integration-wix-cli-for-sites`

## Single owner action required now

Ryan must complete the GitHub authorization because Wix requires explicit owner consent. This cannot be bypassed by Astra/ChatGPT.

In the authenticated Wix Vibe editor:

1. Open **Code**.
2. Open **GitHub** / **GitHub Integration**.
3. Click **Connect to GitHub**.
4. Click **Continue**.
5. Click **Sign In** if prompted and authorize GitHub/Velo.
6. Choose GitHub owner: `A1BlackLotus`.
7. Create a new dedicated repository. Preferred name:
   `Behavioral-Bridge-Wix-Site`
   (If Wix requires or already proposes another sensible unique name, use that and record it exactly.)
8. Click **Install** for the Velo GitHub app.
9. Choose **Only select repositories** and select the newly created Wix site repo.
10. Click **Approve and Install**.
11. Return to Wix and complete the connection until the GitHub Integration panel shows the exact repository name and default branch.
12. Do **not** publish and do **not** send another Vibe AI prompt.

### Important
Do not delete the Wix-created repo or revoke the Velo GitHub app's access after connecting; Wix warns this can break the site's GitHub connection.

## Immediately after Ryan completes that owner action

Astra/ChatGPT must:

1. Re-list GitHub repositories accessible to the connected ChatGPT GitHub connector.
2. Look for the new Wix repo.
3. If it is visible, immediately inspect:
   - root directory
   - `package.json`
   - source tree
   - `src/components/pages/PostPage.tsx`
   - `src/components/pages/ResultsPage.tsx`
   - Home page owner/component
   - Router/head/shared helpers
4. If the repo is **not** visible to ChatGPT even though Wix shows it connected, Ryan must grant the ChatGPT GitHub connector/app access to that new repository. Do not recreate the repo.
5. Once visible, create a safety branch before repair work if branch writes are supported and appropriate.
6. Run source-level repair from GitHub/CLI path rather than Vibe AI.
7. Use the controlling completion files:
   - `wix/ASTRA_WEBSITE_FULL_COMPLETION_CONTROL_CURRENT.md`
   - `wix/WEBSITE_EXECUTION_CHECKPOINT_CURRENT.md`
   - `wix/WEBSITE_EXECUTION_ADDENDUM_2026-09-12_VIBE_NATIVE_STATE_AUDIT.md`
   - `wix/VIBE_PROMPT_NATIVE_COMPLETION_CURRENT.md`
   - Results rollback reference

## First zero-credit source repair priorities once repo is available

1. **PostPage / shared Ricos renderer**
   - add generic Wix Blog `IMAGE` node rendering
   - preserve alt/aspect/responsive behavior
   - remove duplicate slug-specific Homework/Motivation injections if present
   - verify external infographic appears exactly once in each target article

2. **Native Results**
   - stop using placeholder `testimonials` CMS records (Sarah M., David L., Emily R.) as accepted Results content
   - use the accepted Maria/Reeta/Brian/Leon/Terri/Brak/Bryan review-summary set from preserved Results reference
   - reproduce accepted split dark hero with clearly visible approved image

3. **Native Home hero**
   - install approved bridge asset `445f86_55d560892aba4714b627a1e87fad1ee8~mv2.png`
   - preserve Home structure and responsive acceptance

4. **Validation**
   - inspect actual package scripts
   - run actual lint/type/build where possible
   - never label an unrun check PASS

5. **Preview / controlled publish only after native acceptance**
   - do not bypass existing protective runtime layers
   - do not bulk-disable patches
   - use the required controlled-publish sequence in the completion-control file

## Remaining Vibe credit policy

The remaining **1 Vibe credit is emergency reserve only**.

Do not use it for:
- retries of the same technical failure
- broad redesign prompts
- source repair that can be done via GitHub/CLI
- verification

Consider using it later only if:
- source access is fully established,
- a specific editor-only operation cannot be accomplished safely through Git/CLI/API,
- the expected effect is narrowly scoped and reversible,
- Ryan explicitly agrees.

## Astra transfer behavior

When this file is handed back to Astra on Medium effort, Astra should **not generate another Vibe prompt first**.

It should first:
1. read this file and the full completion-control file,
2. verify whether the Wix-created source repo is now accessible,
3. if accessible, work directly against source and advance as far as possible toward the end goal,
4. independently verify every change,
5. update the checkpoint,
6. use Vibe only as a last-resort editor-only mechanism rather than the primary execution engine.

If source repo is still unavailable, Astra should report exactly which authorization/connector permission is missing and stop before spending credits.