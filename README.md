# GPT-Work

Behavioral Bridge website development repository.

## Current Wix/Vibe status

This repo is approved for the `A1BlackLotus` GitHub App installation and ChatGPT can read/write it. However, it is **not currently the Wix-generated source checkout for the live Vibe/Picasso site**. Wix has not populated a Vibe source tree (`src/`, Wix config, page files, etc.) here, so commits in this repo do not automatically deploy to Wix.

The live Behavioral Bridge site remains managed by Wix Vibe. The consultation backend is Wix Forms.

## Canonical consultation implementation

The two consultation-form workstreams have been reconciled into one live canonical implementation. The useful fixes from both were merged; the competing duplicate handler was disabled so they can no longer race, intercept each other, or show contradictory results.

- Canonical live custom embed ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Canonical live revision after merge: `7`
- Canonical embed name: `Behavioral Bridge Consultation — Canonical`
- Duplicate/legacy connector ID: `0ac3fcaf-b699-42da-9867-972e09d58b75` — **disabled** at revision `5`
- Wix form ID: `b692e647-b20c-45b0-ae1d-2530df030907`
- Embed category: `ESSENTIAL`
- Embed position: `BODY_END`
- `loadOnce`: `false`
- Version-controlled copy: `wix/consultation-bridge.js`
- Reconciliation/status record: `wix/WORKSTREAM_HANDOFF.md`

The canonical bridge now combines the strongest behavior from both earlier versions: it uses the existing Vibe consultation form when one is available, provides a controlled fallback form only when necessary, uses a Bearer visitor token, verifies that Wix returns `CONFIRMED` before showing success, normalizes phone values, blocks false-success states, and opens a prefilled email fallback to `Ryan_Carvalho@BehavioralBridge.org` when Wix cannot confirm the submission.

The Vibe OAuth client ID referenced by the bridge is a public client identifier, not a client secret. No API key, client secret, password, or private token is committed here.

## Deployment / coordination rule

Until Wix exposes or syncs the actual Vibe/Picasso site source into this repository, treat this repo as version control/recovery documentation only. Do not assume a Git commit changes the live site.

For consultation work, `wix/WORKSTREAM_HANDOFF.md` and the current live canonical embed are the coordination source of truth. Before any future live edit, read the current Wix embed revision first and update only the canonical embed. Do not re-enable the retired duplicate connector.
