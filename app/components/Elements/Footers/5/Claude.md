# grid - Footers Component

## Component Overview

This footer component showcases a description, a mini logo, columns, all organized within a grid layout with borders.

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
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col overflow-hidden px-4 py-2"
  >
    <div class="border-dark-950 dark:border-dark-50 grid grid-cols-12 border">
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex flex-col items-start justify-start gap-y-4 border-b p-8 lg:col-span-6 lg:border-r lg:border-b-0"
      >
        <div class="mx-auto h-10 md:mx-0">
          <NuxtImg
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
            class="size-full object-contain object-center"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
        <p class="text-dark-950/70 dark:text-dark-50/70 w-full md:pr-44">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui
          vero nihil laudantium? Nemo reiciendis asperiores quidem ducimus
          corrupti incidunt porro ad itaque natus, quisquam commodi, ipsa vitae
          nulla ex!
        </p>
      </div>
      <ul
        class="border-dark-950 dark:border-dark-50 col-span-full flex flex-col gap-y-4 pb-4 sm:col-span-4 sm:border-r lg:col-span-2"
      >
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="border-dark-950 dark:border-dark-50 dark:border-dark-50 col-span-full flex flex-col gap-y-4 border-t pb-4 sm:col-span-4 sm:border-t-0 sm:border-r lg:col-span-2"
      >
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="col-span-full flex flex-col gap-y-4 border-t pb-4 sm:col-span-4 sm:border-t-0 lg:col-span-2"
      >
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex w-full flex-col items-center justify-center gap-4 border-t py-4 md:flex-row"
      >
        <template v-for="(nav, index) in bottom_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            class="p-0 uppercase"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex w-full flex-col items-center justify-center gap-4 border-t p-4 md:flex-row"
      >
        <div
          class="text-dark-950/70 dark:text-dark-50/70 flex items-center justify-start text-center text-sm uppercase"
        >
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </div>
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

const social_media_navigation = [
  {
    label: "Social Media",
    links: [
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
    ],
  },
];

const bottom_navigation = [
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Terms & Conditions",
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
