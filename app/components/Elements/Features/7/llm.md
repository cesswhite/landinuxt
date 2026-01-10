# trebol - Features Component

## Description

This feature section includes a title, description, and call-to-action button. It highlights 4 items, each with a center icon.

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
  <div
    class="grid h-auto w-full grid-cols-12 gap-y-24 py-24 xl:gap-x-24 xl:gap-y-0 xl:px-4"
  >
    <div
      class="col-span-full flex flex-col items-start justify-center gap-y-8 xl:col-span-4"
    >
      <h1
        class="mx-auto text-left text-3xl font-medium text-dark-950 md:w-11/12 md:text-center lg:text-4xl xl:w-full xl:text-left dark:text-dark-50"
      >
        Unlock Your Project's Full Potential with Expert Services
      </h1>
      <p
        class="mx-auto w-full text-left text-lg text-dark-950/50 md:w-10/12 md:text-center xl:w-full xl:text-left dark:text-dark-50/50"
      >
        Unlock your website's full user experience potential with our diverse
        range of feature sections, from minimalist to feature-packed designs,
        all crafted to convey your brand.
      </p>
      <div
        class="flex w-full items-center justify-start md:justify-center xl:justify-start"
      >
        <UButton variant="subtle" color="primary" size="lg" to="#">
          Learn more about features
        </UButton>
      </div>
    </div>
    <div
      class="col-span-full grid w-full grid-cols-subgrid gap-y-12 md:gap-x-6 xl:col-span-8"
    >
      <template v-for="(feat, index) in features" :key="index">
        <div
          class="col-span-full flex h-auto flex-col justify-center gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 md:items-center xl:col-span-4"
        >
          <div
            class="border-primary-500/50 bg-primary-100/10 dark:bg-primary-50/10 flex h-12 w-12 flex-auto items-center justify-center rounded-full border p-3"
          >
            <UIcon
              :name="feat.icon"
              class="? text-primary-600 dark:text-primary-400 size-8"
            />
          </div>
          <span class="text-xl font-semibold text-dark-950 dark:text-dark-50">{{
            feat.title
          }}</span>
          <p
            class="px-0 text-left text-base font-normal text-dark-950/50 md:px-4 md:px-12 md:text-center dark:text-dark-50/50"
          >
            {{ feat.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "i-heroicons-command-line",
    title: "Development",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-swatch",
    title: "Design",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    title: "Mobile Apps",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-cloud",
    title: "Imagene Data",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
];
</script>
```

## Code Explanation

This Vue component implements a trebol for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

