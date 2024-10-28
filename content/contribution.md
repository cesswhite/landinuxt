To ensure newly added components integrate seamlessly and are properly visualized within the application, **all steps below are mandatory**. The steps may be completed in any order; however, each step must be followed for a successful contribution. A testing component, `playground.vue`, is available to validate components under development without modifying the production configuration.

> **Important**: Avoid merging or pushing changes to `playground.vue`, as it is intended solely for testing.

## Steps for Adding a New Component

### 1. Develop and Test in `playground.vue`

Use `playground.vue` as a sandbox environment to build and validate your component’s functionality and styling. Here, you can interact with the component under real conditions, ensuring it behaves as expected before integration.

### 2. Create the Component with Sequential Naming

1. Identify the latest numbered component within the target folder (e.g., if five components exist in `header`, your component should be `6.vue`).

2. Add the code for your new component in this `.vue` file, using the appropriate structure, conventions, and styling rules for the project.

### 3. Create a Corresponding `.md` Documentation File

1. In the `content/{element}/` directory, create a Markdown file with the same number as the component file (e.g., `6.md` if the component is `6.vue`).
2. This `.md` file will utilize **Nuxt Content** to handle metadata (title, component number, description, and source code) for display.
3. Following the next structure:

````md
---
title: string
description: string
dark: boolean | false
animated: boolean | false
parent: string
component: number
preview: boolean | false
copied: boolean | false
---

```vue
<!-- Code here -->
```
````

### 4. Embed Source Code in the `.md` File

1. Copy the content from the `.vue` component file and paste it into the `.md` file inside Vue code blocks.

````md
```vue
<!-- Code here -->
```
````

2. This will allow both the source code and the rendered component to be visible within the documentation.

### 5. Register the Component in `/types/templates.ts`

1. Open `/types/templates.ts`.
2. Add the name of your component to the appropriate type (e.g., `header`, `footer`) to ensure proper typing and accessibility.

```ts
export type FootersTemplates = '...' | '...' | '...' | 'new component name'
```

### 6. Update the Relevant `index.vue` for Component Loading

1. Navigate to the `pages` directory and locate the folder for the target component type (e.g., `header`, `footer`).
2. In the corresponding `index.vue` file:
   - Auto-import your new component.
   - Add a conditional to display the component based on its type, leveraging TypeScript typing for consistency and error prevention.

```vue
<!-- Example -->
<LazyElementsFooters6 v-if="..." />
```

---

### Verification

After completing these steps, verify that:

- The component displays correctly in the intended location.
- The source code and render preview appear as expected within the documentation.

Following this process will ensure your component is fully integrated and ready for use, with accessible source code and proper visualization.
