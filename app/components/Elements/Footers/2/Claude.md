# space - Footers Component

## Component Overview

This footer component includes a complete minimal navigation with a brand name and 3 columns to display links and social network

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
    class="relative w-full border-t border-dark-950/10 py-2 py-12 dark:border-dark-50/50"
  >
    <div
      class="flex flex-col-reverse items-start justify-between gap-y-12 md:flex-row md:items-end"
    >
      <div class="flex w-full flex-col md:w-1/2">
        <span
          class="inline-block text-sm text-dark-950/50 dark:text-dark-50/50"
        >
          (000) 000-0000
        </span>
        <span
          class="inline-block text-sm text-dark-950/50 dark:text-dark-50/50"
        >
          ©2024 Spotlight All rights reserved
        </span>
      </div>
      <div
        class="flex w-full items-start justify-start gap-x-24 sm:justify-end md:w-1/2"
      >
        <div class="flex flex-col gap-y-2">
          <template v-for="(nav, index) in navigation" :key="index">
            <UButton
              :to="nav.link"
              target="_blank"
              variant="link"
              color="neutral"
              class="p-0"
            >
              {{ nav.label }}
            </UButton>
          </template>
        </div>
        <div class="flex flex-col gap-y-2">
          <template v-for="(b_nav, index) in bottom_navigation" :key="index">
            <UButton
              :to="b_nav.link"
              target="_blank"
              variant="link"
              color="neutral"
              class="p-0"
            >
              {{ b_nav.label }}
            </UButton>
          </template>
        </div>
        <div class="flex flex-col gap-y-2">
          <template
            v-for="(social, index) in social_network_navigation"
            :key="index"
          >
            <UButton
              :to="social.link"
              target="_blank"
              variant="link"
              color="neutral"
              class="p-0"
            >
              {{ social.label }}
            </UButton>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigation = [
  {
    label: "Development",
    link: "#",
  },
  {
    label: "Design",
    link: "#",
  },
  {
    label: "Mobile Apps",
    link: "#",
  },
  {
    label: "Imagene Data",
    link: "#",
  },
];

const bottom_navigation = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Contact",
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

const social_network_navigation = [
  {
    label: "X",
    link: "https://x.com/",
  },
  {
    label: "IG",
    link: "https://x.com/",
  },
  {
    label: "FB",
    link: "https://x.com/",
  },
  {
    label: "IN",
    link: "https://x.com/",
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
