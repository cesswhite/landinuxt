# big - Footers Component

## Component Overview

This footer component displays a large logo and a description of the brand. It is organized into columns with links for easy navigation.

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
    <div class="grid w-full grid-cols-12">
      <div
        class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-6"
      >
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="h-6 object-contain object-center md:h-10"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
        <p
          class="text-dark-950/50 dark:text-dark-50/50 font-family-inter inline-block w-full text-sm md:w-1/2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae
          labore accusamus perspiciatis quasi aperiam amet voluptatibus vero
          quidem consectetur architecto dolore quaerat, ad id facilis eligendi
          totam, quas maiores!
        </p>
        <div class="">
          <UButton
            icon="i-heroicons-arrow-right"
            trailing
            variant="link"
            color="primary"
            class="p-0"
          >
            Learn more about us
          </UButton>
        </div>
        <div
          class="text-dark-950/50 dark:text-dark-50/50 flex items-center justify-start text-sm"
        >
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </div>
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
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
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
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
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
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

    <div class="relative -bottom-4 mt-44 w-full">
      <div
        class="from-dark-50 dark:from-dark-950 absolute size-full bg-gradient-to-t from-25%"
      />
      <NuxtImg
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/logo-neutral_q3bdxv.webp"
        class="size-full object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
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
