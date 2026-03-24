---
name: nuxt-ui-update
description: Update and align Nuxt UI usage in LandingNuxt — use when upgrading @nuxt/ui, fixing deprecated props, or adding new Nuxt UI components.
---

# Nuxt UI Update Skill — LandingNuxt

Use this skill when you are **upgrading @nuxt/ui**, **fixing deprecated or incorrect component usage**, or **adding new Nuxt UI components** in this project.

## Project context

- **Stack:** Nuxt 4, @nuxt/ui 4.x, Tailwind CSS.
- **Docs:** [Nuxt UI LLMs.txt](https://ui.nuxt.com/docs/getting-started/ai/llms-txt) — use `/llms.txt` for overview and `/llms-full.txt` for full API when needed.
- **Change list:** Project-specific list of required and optional changes is in `docs/NUXT-UI-CHANGELIST.md`. Update that file when you apply or discover new changes.

## When to use this skill

- Upgrading @nuxt/ui (e.g. minor/major version bump).
- Fixing broken or deprecated Nuxt UI usage (e.g. renames, removed props).
- Adding a new Nuxt UI component and you want to follow current API and project patterns.
- Answering questions about what must change for Nuxt UI v4 in this codebase.

## Instructions

### 1. Before changing code

- Read `docs/NUXT-UI-CHANGELIST.md` for the current checklist and known issues.
- For component API details, prefer [Nuxt UI docs](https://ui.nuxt.com) or the MCP Nuxt UI tools (e.g. `get-component` for props/slots). Use `https://ui.nuxt.com/llms.txt` (or llms-full.txt) when you need structured docs for the model.

### 2. When upgrading @nuxt/ui

1. Check the [Nuxt UI v4 migration guide](https://ui.nuxt.com/docs/getting-started/migration/v4) (and v3 if coming from v2).
2. Update `package.json`:
   - From **Nuxt UI Pro:** remove `@nuxt/ui-pro`, add `@nuxt/ui` and `tailwindcss`.
   - From **Nuxt UI v3:** bump `@nuxt/ui` and ensure `tailwindcss` is present.
3. In config:
   - Replace `@nuxt/ui-pro` with `@nuxt/ui` in `nuxt.config.ts` modules and in CSS `@import`.
   - Use the `ui` key (not `uiPro`) in `app.config.ts` or Vite config.
4. Apply renames and removals from the migration guide (e.g. ButtonGroup → FieldGroup, PageMarquee → Marquee, PageAccordion → Accordion, model modifier `nullify` → `nullable`).
5. Re-run the project audit (see below) and update `docs/NUXT-UI-CHANGELIST.md` with any new findings.

### 3. When fixing or adding components

1. **Check current API:** Use Nuxt UI docs or MCP to confirm props/slots/emits for the component (e.g. Button, Card, Accordion, Marquee).
2. **Follow project conventions:** Use kebab-case in templates for props/events; prefer explicit `leading-icon` / `trailing-icon` when you want an icon (not only the boolean `leading`/`trailing`).
3. **Update the changelist:** After fixing a deprecated or incorrect usage, add or tick the corresponding item in `docs/NUXT-UI-CHANGELIST.md`.

### 4. Quick audit (what we use)

Search the repo for Nuxt UI components (e.g. `UButton`, `UCard`, `UIcon`, `UMarquee`, `UAccordion`, `UBreadcrumb`, `UAvatar`, `UBadge`, `UCarousel`, `UTooltip`, `USelect`, `UInput`, `ULink`, `UContainer`). For each:

- Confirm the component name is still valid (no renames in the target version).
- Confirm props and slots match the current API (no removed or renamed props).
- Fix any misuse (e.g. `trailing` without an icon on UButton) and document in the changelist.

### 5. Key v4 migration points (reference)

- **ButtonGroup** → **FieldGroup**
- **PageMarquee** → **Marquee**
- **PageAccordion** → **Accordion** (with `unmount-on-hide` and `ui` as needed)
- **Model modifiers:** `nullify` → `nullable`; new `optional` for undefined
- **Form (nested):** Use `nested` prop and `name` for nested forms
- **Nuxt Content utils:** `findPageHeadline` / `findPageBreadcrumb` from `@nuxt/content/utils`, not `@nuxt/ui-pro`

## Output expectations

- All changes must stay consistent with Nuxt UI v4 and the project’s existing patterns.
- After any upgrade or fix, `docs/NUXT-UI-CHANGELIST.md` should be updated so the checklist reflects the current state.
- Do not remove or alter non–Nuxt UI code unless the task explicitly asks for it.

## References

- [Nuxt UI — LLMs.txt](https://ui.nuxt.com/docs/getting-started/ai/llms-txt)
- [Migration to v4](https://ui.nuxt.com/docs/getting-started/migration/v4)
- [Nuxt UI Skills (install in Cursor)](https://ui.nuxt.com/docs/getting-started/ai/skills) — optional: `npx skills add nuxt/ui --agent cursor`
- Project changelist: `docs/NUXT-UI-CHANGELIST.md`
