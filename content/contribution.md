To ensure newly added components integrate seamlessly and are properly visualized within the application, **all steps below are mandatory**. The steps may be completed in any order; however, each step must be followed for a successful contribution.

Use `playground.vue` as a sandbox to validate components under development without modifying the production configuration.

> **Important**: Avoid merging or pushing changes to `playground.vue`, as it is intended solely for testing.

## Steps for Adding a New Component

### 1. Develop and Test in `playground.vue`

Build and validate your component’s functionality and styling in `playground.vue` before wiring it into the component hub.

### 2. Create the Vue Component (source of truth)

1. Identify the latest numbered component within the target folder (e.g., if five components exist in `headers`, your component should be `6.vue`).
2. Add the full component in `app/components/Elements/<Category>/N.vue`.
3. Use **Vue + Nuxt UI + Tailwind CSS only** in the `.vue` file:
   - Styling via Tailwind utility classes (`primary-*`, `dark-*` tokens).
   - UI primitives from Nuxt UI (`UButton`, `UContainer`, `UMarquee`, etc.).
   - No shared style utils, no per-component CSS files, no scoped `<style>` unless animation cannot be done with Tailwind (rare).
   - Optional `<script setup>` only when the demo needs interactivity (forms, carousels, lists).

### 3. Create a Corresponding `.md` Metadata File

1. In `content/<category>/`, create a Markdown file with the same number as the Vue file (e.g., `6.md` for `6.vue`).
2. **Frontmatter only** — do not embed Vue source code in the `.md` file.

```yaml
---
title: string          # unique slug used in templates.ts and index.vue
description: string
dark: boolean          # supports color mode
animated: boolean      # uses motion or transitions
parent: string         # category folder name, e.g. hero, logos
component: number      # file number, e.g. 6 for 6.vue
preview: true
copied: false
---
```

The component hub reads **live source** from `app/components/Elements/<Category>/N.vue` for preview and copy-to-clipboard. The `.md` file is the metadata index for Nuxt Content.

### 4. Register the Component in `types/templates.ts`

Add the `title` slug to the appropriate union type:

```ts
export type LogosTemplates = "simple" | "animated" | "..." | "your-new-slug";
```

### 5. Update the Category `index.vue`

In `app/pages/components/<category>/index.vue`:

1. Import the lazy component with a conditional on `item.title`.
2. Use the typed template name from `types/templates.ts`.

```vue
<LazyElementsLogos6 v-if="item.title === ('your-new-slug' as LogosTemplates)" />
```

### 6. UMarquee fade (when applicable)

If the section background is `bg-dark-50 dark:bg-dark-950`, match the edge fade inline on each `UMarquee` (do not use shared utils):

```vue
<UMarquee
  pause-on-hover
  :ui="{
    root: 'before:!from-dark-50 after:!from-dark-50 dark:before:!from-dark-950 dark:after:!from-dark-950',
  }"
>
```

The `!` prefix overrides Nuxt UI’s default `from-default` overlay color.

---

## Verification

After completing these steps, verify that:

- The component displays correctly in `/components/<category>`.
- Preview and **Copy code** output match `app/components/Elements/<Category>/N.vue`.
- Light and dark mode look correct (use `dark-*` / `primary-*` tokens, not `white`, `black`, or palette names like `gray-*`, `blue-*`).

Following this process keeps each section self-contained and copy-paste ready while the hub handles discovery and documentation.
