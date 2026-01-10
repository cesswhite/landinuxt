# central - Features Component

## Component Overview

A feature section showcasing three columns of features, accompanied by a title and description.

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
  <div class="bg-dark-50 dark:bg-dark-900 flex w-full flex-col py-12">
    <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
      <div
        class="mx-auto flex w-full flex-col items-center justify-center gap-2 md:w-1/2"
      >
        <UBadge
          variant="outline"
          color="neutral"
          class="flex items-center justify-center gap-4 rounded-full px-4 md:px-12"
          size="lg"
        >
          <UIcon name="i-heroicons-solid-sparkles" size="size-4" />
          Beautifully crafted components
        </UBadge>
        <h1
          class="text-dark-900 dark:text-dark-100 mt-4 text-center text-4xl font-semibold sm:text-4xl md:text-5xl"
        >
          Build your Dream Home
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full px-8 text-center text-lg leading-8 md:px-0 2xl:text-xl"
        >
          Unlock your construction project's full potential with our
          comprehensive suite of tools and services
        </p>
      </div>
    </div>
    <div
      class="mt-24 flex flex-col items-start justify-between gap-x-0 gap-y-24 px-4 md:mt-12 md:gap-x-6 md:gap-y-12 lg:flex-row xl:px-24"
    >
      <template v-for="image in images" :key="image.src">
        <div class="flex flex-1 flex-col gap-y-6">
          <NuxtImg
            :src="image.src"
            class="mx-auto h-72 w-full rounded-xl object-cover object-center md:w-96 2xl:w-full"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />

          <span
            class="text-dark-950 dark:text-dark-50 text-center text-2xl font-medium"
          >
            {{ image.name }}
          </span>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 mx-auto w-full text-center text-base font-normal md:w-1/2 lg:w-full"
          >
            {{ image.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.pexels.com/photos/16062771/pexels-photo-16062771/free-photo-of-ordenador-personal.jpeg",
    name: "Digital Innovation",
    description:
      "Unlock your agency's digital potential with cutting-edge solutions tailored to drive growth and innovation.",
  },
  {
    src: "https://images.pexels.com/photos/18338405/pexels-photo-18338405/free-photo-of-ordenador-placa-base-cpu-intel.jpeg",
    name: "Data Analytics",
    description:
      "Gain insights into your agency's performance with advanced data analytics tools, empowering data-driven decision-making.",
  },
  {
    src: "https://images.pexels.com/photos/8100067/pexels-photo-8100067.jpeg",
    name: "Cybersecurity",
    description:
      "Protect your agency's digital assets with robust cybersecurity measures, ensuring the integrity of sensitive information.",
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
