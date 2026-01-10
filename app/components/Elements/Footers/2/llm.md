# space - Footers Component

## Description

This footer component includes a complete minimal navigation with a brand name and 3 columns to display links and social network

## Rules for Implementation

When creating this component, follow these rules:

1. **Framework**: Use Nuxt 3 with Composition API (script setup)
2. **UI Library**: Use Nuxt UI v4 components (UButton, NuxtImg, etc.)
3. **Styling**: Use Tailwind CSS v4 utility classes
4. **Responsive Design**: Ensure the component is fully responsive (mobile-first approach)
5. **Dark Mode**: Make sure the component supports dark mode when applicable
6. **Accessibility**: Include proper ARIA labels and semantic HTML
7. **Performance**: Use lazy loading for images and optimize assets
8. **Code Quality**: Write clean, readable, and maintainable code
9. **TypeScript**: Use TypeScript for type safety (if applicable)
10. **Component Structure**: Follow Vue 3 best practices and composition patterns

## Reference Component Code

This is the complete working code for this component. Use it as a reference:

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

## Code Explanation

This Vue component implements a space for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

## Technical Implementation Details

### Key Features:

- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)
- **Component Library**: Leverages Nuxt UI v4 for consistent design system
- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading
- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Usage Instructions

1. Copy the component code above
2. Paste it into your Nuxt 3 project
3. Ensure you have Nuxt UI v4 installed: `npm install @nuxt/ui`
4. Make sure Nuxt Image is configured: `npm install @nuxt/image`
5. Customize the content, colors, and styling to match your needs
6. Test the component in different screen sizes and dark mode

