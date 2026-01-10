# full - Footers Component

## Component Overview

This footer component spans the full screen, featuring an address and columns to highlight links and social networks.

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
  <footer class="relative flex h-auto max-h-dvh w-full flex-col gap-y-56 p-4">
    <div class="grid w-full grid-cols-12 gap-6">
      <div class="col-span-6 flex items-start justify-start lg:col-span-6">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="h-10 object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <ul class="col-span-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter text-xl uppercase md:text-2xl"
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
      <ul class="col-span-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter text-xl uppercase md:text-2xl"
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
      <ul class="col-span-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter text-xl uppercase md:text-2xl"
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
    </div>
    <div
      class="border-dark-950/5 dark:border-dark-50/5 grid w-full grid-cols-12 gap-6 border-t pt-12"
    >
      <div class="col-span-6 flex items-start justify-start lg:col-span-6">
        <span class="text-dark-950 dark:text-dark-50 text-2xl uppercase"
          >Let's Connect</span
        >
      </div>
      <template v-for="(nav, index) in address_company" :key="index">
        <div class="col-span-6 flex w-full flex-col gap-y-2 lg:col-span-2">
          <span
            class="text-dark-950 dark:text-dark-50 font-family-inter inline-block text-2xl uppercase"
          >
            {{ nav.label }}
          </span>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 font-family-inter inline-block text-sm"
          >
            {{ nav.address }}
          </p>
          <span
            class="text-dark-950/60 dark:text-dark-50/60 font-family-inter inline-block text-sm"
          >
            {{ nav.email }}
          </span>
          <span
            class="text-dark-950/60 dark:text-dark-50/60 font-family-inter inline-block text-sm"
          >
            {{ nav.phone }}
          </span>
        </div>
      </template>
    </div>
    <div class="grid w-full grid-cols-12 gap-6">
      <div class="col-span-full lg:col-span-10">
        <UButton
          type="button"
          variant="link"
          color="neutral"
          class="p-0"
          aria-readonly="true"
        >
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </UButton>
      </div>
      <div class="col-span-full flex w-full items-center gap-x-4 lg:col-span-2">
        <template v-for="(nav, index) in bottom_navigation" :key="index">
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

const address_company = [
  {
    label: "México",
    address:
      "Av. Paseo de la Reforma 123, Cuauhtémoc, 06500 Ciudad de México, CDMX",
    phone: "+52 55 5555 5555",
    email: "mexico@company.com",
  },
  {
    label: "USA",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 212 555 1234",
    email: "usa@company.com",
  },
  {
    label: "Spain",
    address: "Calle de Alcalá, 23, 28014 Madrid",
    phone: "+34 91 123 4567",
    email: "spain@company.com",
  },
];

const bottom_navigation = [
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Privacy Policy",
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
