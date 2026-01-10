# minimal - Footers Component

## Component Overview

A minimalist footer component featuring social media and a few essential links

## Implementation Guidelines for Claude

### Context
You are helping to implement a footers component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

### Requirements
1. Use Nuxt 3 with Composition API (script setup)
2. Implement using Nuxt UI v4 components
3. Apply Tailwind CSS v4 utility classes for styling
4. Ensure full responsiveness across all screen sizes
5. Support dark mode using Tailwind's dark: prefix
6. Include proper accessibility attributes
7. Optimize images using NuxtImg component
8. Follow Vue 3 best practices

### Reference Code

```vue
<template>
  <footer
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col gap-8 overflow-hidden px-4 py-4"
  >
    <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
      <template v-for="(nav, index) in other_navigation" :key="index">
        <UButton
          :to="nav.link"
          target="_blank"
          variant="link"
          color="neutral"
          class="p-0"
          size="xs"
        >
          {{ nav.label }}
        </UButton>
      </template>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
      <template v-for="(nav, index) in social_media_navigation" :key="index">
        <UButton
          :to="nav.link"
          target="_blank"
          variant="link"
          color="neutral"
          class="p-0"
          size="xs"
        >
          {{ nav.label }}
        </UButton>
      </template>
    </div>
    <div class="text-dark-950/70 dark:text-dark-50/70 text-center text-xs">
      ©LandiNuxt is a Open Source Project by Eco Development Studios
    </div>
  </footer>
</template>

<script setup lang="ts">
const other_navigation = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Website",
    link: "#",
  },
  {
    label: "Brand",
    link: "#",
  },
  {
    label: "Gallery",
    link: "#",
  },
  {
    label: "Blog",
    link: "#",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "Careers",
    link: "#",
  },
];

const social_media_navigation = [
  {
    label: "X",
    link: "https://x.com/",
  },
  {
    label: "Instagram",
    link: "https://instagram.com/",
  },
  {
    label: "Facebook",
    link: "https://facebook.com/",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/",
  },
  {
    label: "YouTube",
    link: "https://youtube.com/",
  },
  {
    label: "GitHub",
    link: "https://github.com/",
  },
];
</script>
```

### Implementation Steps
1. Review the reference image to understand the visual design
2. Analyze the provided code structure
3. Implement the component matching the design and code patterns
4. Ensure responsive behavior matches the reference
5. Test dark mode compatibility
6. Verify accessibility features

### Notes
- Pay special attention to spacing, typography, and color usage
- Ensure the component is pixel-perfect to the reference image
- Maintain code quality and readability
- Use semantic HTML elements where appropriate
