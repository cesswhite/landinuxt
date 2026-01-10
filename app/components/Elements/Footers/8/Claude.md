# gradient - Footers Component

## Component Overview

A footer featuring minimal data across 4 columns, highlighted by a central gradient with the primary color

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
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col overflow-hidden p-2"
  >
    <div class="relative z-10 grid w-full grid-cols-12 gap-y-4 lg:gap-y-0">
      <div
        class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-4 xl:col-span-8"
      >
        <span
          class="text-dark-950 dark:text-dark-50/50 font-family-inter inline-block w-full text-lg font-medium md:w-1/2"
        >
          LandiNuxt
        </span>
        <p
          class="text-dark-950/50 dark:text-dark-50/50 font-family-inter inline-block w-full text-sm md:w-1/2"
        >
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit.
        </p>
        <div
          class="text-dark-950/50 dark:text-dark-50/50 flex items-center justify-start gap-x-4"
        >
          <UButton
            icon="i-simple-icons-facebook"
            variant="link"
            color="neutral"
            to="#"
            target="_blank"
          />
          <UButton
            icon="i-simple-icons-instagram"
            variant="link"
            color="neutral"
            to="#"
            target="_blank"
          />
          <UButton
            icon="i-simple-icons-x"
            variant="link"
            color="neutral"
            to="#"
            target="_blank"
          />
          <UButton
            icon="i-simple-icons-github"
            variant="link"
            color="neutral"
            to="#"
            target="_blank"
          />
        </div>
      </div>
      <ul
        class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base font-medium capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in product_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base font-medium capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base font-medium capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="col-span-full flex w-full flex-col gap-y-2 md:col-span-6 lg:col-span-2 xl:col-span-1"
      >
        <template v-for="(nav, index) in resources_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base font-medium capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <div
        class="border-dark-950/10 dark:border-dark-50/10 text-dark-950/50 dark:text-dark-50/50 col-span-full mt-4 mb-2 flex items-center justify-center border-t pt-4 text-sm"
      >
        ©LandiNuxt is a Open Source Project by Eco Development Studios
      </div>
    </div>
    <div class="absolute -bottom-96 left-1/2 -translate-x-1/2">
      <div
        class="from-primary-100 to-primary-300 dark:from-primary-500/30 dark:to-primary-300/30 size-[620px] rounded-full bg-gradient-to-br opacity-50 blur-3xl"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigation = [
  {
    label: "Services",
    links: [
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
    ],
  },
];

const other_navigation = [
  {
    label: "Company",
    links: [
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
    ],
  },
];

const product_navigation = [
  {
    label: "Product",
    links: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "FAQs",
        link: "#",
      },
      {
        label: "Updates",
        link: "#",
      },
    ],
  },
];

const resources_navigation = [
  {
    label: "Resources",
    links: [
      {
        label: "Documentation",
        link: "#",
      },
      {
        label: "Tutorials",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
      {
        label: "Webinars",
        link: "#",
      },
      {
        label: "Case Studies",
        link: "#",
      },
    ],
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
