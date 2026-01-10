# openai - Footers Component

## Description

A minimalist footer inspired by Open AI's design

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
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col gap-8 overflow-hidden px-4 py-4"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-full mb-12 md:col-span-8 md:mb-0">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="h-10 object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in api_navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in other_navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div
      class="border-dark-950/10 dark:border-dark-50/10 mb-12 grid grid-cols-12 border-t pt-2"
    >
      <div class="col-span-6 flex flex-col md:col-span-8">
        <span class="inline-block text-sm font-bold"
          >Spotlight ©2020-2024</span
        >
        <template v-for="(nav, index) in bottom_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            size="sm"
            class="p-0"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
      <div class="col-span-6 flex flex-col gap-x-4 md:col-span-4">
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            size="sm"
            class="p-0"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
    </div>
    <div class="h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        class="fill-dark-950 dark:fill-dark-50 h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1920V1H0V0Z" />
        <path d="M0 11H1920V15.18H0V11Z" />
        <path d="M0 25.1802H1920V33.3602H0V25.1802Z" />
        <path d="M0 43.3599H1920V55.5399H0V43.3599Z" />
        <path d="M0 65.54H1920V81.72H0V65.54Z" />
        <path d="M0 91.7202H1920V111.9H0V91.7202Z" />
        <path d="M0 121.9H1920V146.08H0V121.9Z" />
        <path d="M0 156.08H1920V184.26H0V156.08Z" />
        <path d="M0 194.26H1920V226.44H0V194.26Z" />
        <path d="M0 236.44H1920V272.62H0V236.44Z" />
        <path d="M0 282.62H1920V322.8H0V282.62Z" />
        <path d="M0 332.8H1920V376.98H0V332.8Z" />
        <path d="M0 386.98H1920V435.16H0V386.98Z" />
        <path d="M0 445.16H1920V674H0V445.16Z" />
        <path d="M0 684H1920V1080H0V684Z" />
      </svg>
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
const api_navigation = [
  {
    label: "API",
    links: [
      {
        label: "Documentation",
        link: "#",
      },
      {
        label: "API Keys",
        link: "#",
      },
      {
        label: "Rate Limits",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
    ],
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
const bottom_navigation = [
  {
    label: "Privacy policy",
    link: "#",
  },
  {
    label: "Terms & policies",
    link: "#",
  },
  {
    label: "Brand",
    link: "#",
  },
];
</script>
```

## Code Explanation

This Vue component implements a openai for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

