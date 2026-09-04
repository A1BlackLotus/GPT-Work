# Behavioral Bridge consultation — next action

## Current production state

- The Wix Forms backend is working and has been proven through a real PENDING -> CONFIRMED submission plus owner notification email.
- The public Vibe consultation form is **not** trusted for automatic submission yet.
- Emergency sitewide direct-email safety banner remains live.
- Retired browser connector remains disabled.
- Do not restore browser-side Wix OAuth / direct Forms REST submission.

## Source patch ready

Prepared files:

- `src/pages/api/consultation.ts` reference: `wix/native-vibe-consultation/src/pages/api/consultation.ts`
- frontend helper/reference: `wix/native-vibe-consultation/FRONTEND_HANDLER.example.tsx`
- apply instructions: `wix/native-vibe-consultation/VIBE_APPLY_PROMPT.md`

The endpoint uses server-side `@wix/forms` with `auth.elevate()`, creates PENDING, confirms it, and returns success only for CONFIRMED submissions.

The frontend helper uses Wix-managed Astro's documented `httpClient.fetchWithAuth()` pattern to call `/api/consultation`.

## Remaining deployment boundary

The actual Vibe source repository is not connected to the GitHub account currently exposed to ChatGPT. The connected GitHub account currently exposes only `A1BlackLotus/GPT-Work`.

The main Vibe project is:

- Site/project ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Editor URL: `https://vibe.wix.com/projects/e6f68a23-cc00-421a-985e-515963cbe5f0/v/editor`

Public Wix management APIs expose the site and editor URL but do not expose source-file mutation for this existing Vibe project. The Containers Chat coding-agent endpoint returned 404 for this Vibe project through the connected API access.

## Best transition

Connect the existing Vibe project's source to Ryan's GitHub account (`A1BlackLotus`) through Wix Vibe's source/GitHub integration. Do not create a replacement Wix site or a new headless project.

After the Vibe source repository appears in the connected GitHub account:

1. Inspect the actual source tree and existing `/consultation` component.
2. Apply the prepared endpoint.
3. Integrate the existing visible form with `/api/consultation` using `httpClient.fetchWithAuth()`.
4. Preserve styling and service dropdown.
5. Deploy/publish through the repository's actual Wix Vibe sync workflow after verifying how that repository is configured.
6. Change emergency custom embed from email-intercept mode to banner-only so it cannot compete with the native form.
7. Run two realistic live submissions.
8. Confirm both are new Wix Forms records with status CONFIRMED and both owner notification emails arrive.
9. Only then reduce the sitewide emergency notice and restore normal spam protection.
