# classic - Features Component

## Component Overview

A grid showcasing features with an image representing the services of branding

## Implementation Guidelines for Claude

### Context
You are helping to implement a features component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="flex flex-col items-center justify-start gap-x-24 lg:flex-row">
    <div class="flex w-full flex-col gap-y-24 lg:w-1/2">
      <div class="flex flex-col gap-y-2">
        <span
          class="text-dark-950 dark:text-dark-50 inline-block text-3xl font-bold"
          >Features</span
        >
        <p class="text-dark-950/50 dark:text-dark-50/50 text-lg font-normal">
          Explore the wide range of features our website has to offer. From
          user-friendly interfaces to seamless navigation, we've got you
          covered. Check out our features and start your journey today!
        </p>
      </div>
      <div class="grid w-full grid-cols-4 gap-24">
        <template v-for="(feat, index) in features" :key="index">
          <div class="col-span-full flex flex-col gap-y-2 md:col-span-2">
            <div
              class="border-dark-950/20 bg-dark-200/20 dark:border-dark-700 dark:bg-dark-800 flex size-8 items-center justify-center rounded-md border p-1"
            >
              <UIcon
                :name="feat.icon"
                class="text-dark-950 dark:text-dark-50"
              />
            </div>
            <span
              class="text-dark-950 dark:text-dark-50 inline-block text-lg font-bold"
              >{{ feat.title }}</span
            >
            <p
              class="text-dark-950/50 dark:text-dark-50 inline-block text-base font-normal"
            >
              {{ feat.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
    <div class="relative mt-24 h-full w-full lg:mt-0 lg:w-1/2 xl:h-[620px]">
      <NuxtImg
        src="https://images.pexels.com/photos/12495614/pexels-photo-12495614.jpeg"
        class="size-full rounded-sm object-cover object-center"
        loading="lazy"
        alt="my-company-logo-description"
        width="640"
        height="640"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
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
