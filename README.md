# GPT-Work

Behavioral Bridge website development repository.

## Current Wix/Vibe status

This repo is approved for the `A1BlackLotus` GitHub App installation and ChatGPT can read/write it. However, it is **not currently the Wix-generated source checkout for the live Vibe/Picasso site**. Wix has not populated a Vibe source tree (`src/`, Wix config, page files, etc.) here, so commits in this repo do not automatically deploy to Wix.

The live Behavioral Bridge site remains managed by Wix Vibe. The consultation backend is Wix Forms.

## Consultation page recovery bridge

A Wix Custom Embed currently provides the working consultation form on `/consultation` while preserving Wix Forms as the system of record.

- Live custom embed ID: `b3ececaf-c221-4ad1-9590-4aa112486e11`
- Wix form ID: `b692e647-b20c-45b0-ae1d-2530df030907`
- Embed category: `ESSENTIAL`
- Embed position: `BODY_END`
- `loadOnce`: `false`
- Version-controlled copy: `wix/consultation-bridge.js`

The Vibe OAuth client ID referenced by the bridge is a public client identifier, not a client secret. No API key, client secret, password, or private token is committed here.

## Deployment rule

Until Wix exposes or syncs the actual Vibe/Picasso site source into this repository, treat this repo as version control/recovery documentation only. Do not assume a Git commit changes the live site.
