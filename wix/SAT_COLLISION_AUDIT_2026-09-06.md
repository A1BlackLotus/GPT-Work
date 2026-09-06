# Behavioral Bridge SAT — Collision Audit

Date: 2026-09-06

## Purpose

Confirm which currently enabled Wix custom embeds reference `/sat-prep` so a later native Vibe hero edit is not unexpectedly overridden.

## Result

Three enabled embeds currently contain SAT references:

### 1) Conversion Trust Strip

- ID: `2d0a6ae7-7661-48fc-8bb0-e948f23cbda5`
- Revision: `2`
- Name: `Behavioral Bridge — Conversion Trust Strip v1`
- SAT behavior: intentional lower-page proof/CTA strip only.
- SAT copy currently includes `SAT PREPARATION`, `Strategy backed by a repeatable system.`, and the proof/CTA row.
- It inserts before the footer and does **not** own or replace the SAT hero.
- Preserve for now.

### 2) Results Navigation & Frame

- ID: `1fd9bef8-e06b-4add-acf2-28f4359721dc`
- Revision: `4`
- Name: `Behavioral Bridge — Results Navigation & Frame v4`
- `/sat-prep` appears only as a navigation href / native-header-detection reference.
- Runtime guard is `if(path()!='/results'){remove();return}`.
- Therefore it does **not** modify `/sat-prep`.
- Preserve.

### 3) Core Authenticity Pass

- ID: `73a2dd88-1c32-44e4-a5a1-4e031f95e685`
- Revision: `7`
- Name: `Behavioral Bridge — Core Authenticity Pass v7 · SAT Native Editor Handoff`
- Historical SAT hero functions/strings still exist in the source, but they are now dead code for `/sat-prep`.
- Current runtime branch is:

```js
if(x==='/sat-prep'){satClean();}
else{
  satClean();
  if(x==='/executive-function')ef();
  else if(x==='/about')about();
}
```

- On `/sat-prep`, revision 7 performs cleanup only and does not call the retired SAT renderer.
- This is the intended safe handoff state before a native Vibe edit.

## Conclusion

The future native `/sat-prep` hero edit has no currently active custom-embed hero owner competing with it.

Expected post-edit behavior:

- Native Vibe hero owns the first screen.
- Conversion Trust Strip remains lower on the SAT page.
- Results Navigation remains results-only.
- Core Authenticity stays neutralized on SAT while continuing its non-SAT responsibilities.

Do not re-enable the retired SAT hero renderer unless a deliberate architecture change is approved and visually verified.