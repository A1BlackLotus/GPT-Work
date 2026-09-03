# Behavioral Bridge — Vibe source access blocker (2026-09-03)

## What is already proven

The canonical Wix Forms backend is working when called server-side:

- Site: `BehavioralBridge`
- Site ID: `e6f68a23-cc00-421a-985e-515963cbe5f0`
- Form ID: `b692e647-b20c-45b0-ae1d-2530df030907`
- Form revision: `8`
- Service target: `service_bb`
- Existing owner notification automation: `2695710a-a944-4fbd-9fe6-a7341b8cf53f`
- A deliberate create-PENDING → confirm-CONFIRMED system test generated a real Wix Forms record and the owner notification email.

Prepared native endpoint:
- `wix/native-vibe-consultation/src/pages/api/consultation.ts`

Prepared Vibe implementation instructions:
- `wix/native-vibe-consultation/VIBE_APPLY_PROMPT.md`

## What remains

The public `/consultation` page still needs to be wired to the prepared native Astro endpoint in the actual Wix Vibe source. The current sitewide direct-email safety banner must remain active until two consecutive public live submissions become `CONFIRMED` and both owner notification emails arrive.

## Access investigation completed

The current Wix connector can manage the site's Forms, Automations, Custom Embeds, app state, and other business data, but no supported REST method was found that reads or writes arbitrary existing Vibe/Astro source files.

Dynamic Site Context confirms the target site is:

- `editorType: PICASSO`
- `namespace: HEADLESS`
- `veloEnabled: true`
- owner account `445f8684-e5a0-48ca-99c5-6230e666e912`
- Wix-managed OAuth client `1e6ddb20-006b-4ce7-ab4b-fd4316f6f161`

The new Wix Containers Chat API can drive the Wix AI coding agent, but it requires a separate `projectId`. The following real identifiers were tested and both returned 404 from Query Conversations, so neither is the coding-agent project ID:

1. Vibe site ID `e6f68a23-cc00-421a-985e-515963cbe5f0`
2. Wix-managed OAuth client ID `1e6ddb20-006b-4ce7-ab4b-fd4316f6f161`

The Dynamic Site Context response exposes no Containers coding-agent `projectId`. Browsing the public Containers App API exposes Containers Chat methods but no project list/get method for resolving that ID.

The connected GitHub account currently exposes only `A1BlackLotus/GPT-Work`; there is no separate Wix Vibe source repository connected to GitHub that can be edited from this connector.

## Lowest-friction remaining handoff

Use the actual Wix Vibe editor/chat for `BehavioralBridge` and apply `VIBE_APPLY_PROMPT.md`. If a future Wix Vibe editor URL exposes a distinct project/container GUID, test that GUID with Containers Chat before asking the owner to paste the prompt manually.

Do not restart browser OAuth experiments, do not create a second form/automation, and do not remove the direct-email safety banner until the native path passes the two-live-submission acceptance test.
