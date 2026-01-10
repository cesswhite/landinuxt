# high-converting - Testimonials Component

## Component Overview

This component showcases a high-converting testimonial layout with a bento-style grid featuring customer reviews, statistics, and visual elements to build trust and credibility.

## Implementation Guidelines for Claude

### Context
You are helping to implement a testimonials component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="relative h-auto w-full py-24">
    <div
      class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
    >
      <h2
        class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
      >
        What Our Clients Say
      </h2>
      <p
        class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center"
      >
        Discover how our solutions have transformed businesses through the words
        of our satisfied clients.
      </p>
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 6000 }"
      align="center"
      :items="testimonials"
      class="mt-12"
      :ui="{
        item: 'basis-full sm:basis-1/3 md:basis-2/5 relative ps-0 md:ps-4',
        container: 'flex items-center relative m-0',
        prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
        next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
      }"
    >
      <div
        class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24"
      >
        <div class="mx-auto flex items-start">
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/40 dark:text-primary-600/40"
          />
        </div>
        <p
          class="text-dark-950 dark:text-dark-50 mt-4 text-center text-xl font-medium italic"
        >
          "{{ item.text }}"
        </p>
        <div class="mt-12 flex flex-col items-center justify-center">
          <span
            class="text-dark-950 dark:text-dark-50 inline-block w-full text-center text-base font-bold"
            >{{ item.name }}</span
          >
          <span
            class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-center text-base font-semibold italic"
            >{{ item.username }}</span
          >
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj_design",
    text: "The mesh gradient toolkit revolutionized my design workflow. The intuitive interface and powerful customization options helped me create stunning visuals in minutes instead of hours.",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod_creative",
    text: "As a creative director, I needed a solution that balances quality with efficiency. This platform delivers both, allowing my team to produce consistent, high-quality visuals across all our client projects.",
  },
  //Add more testimonials here
]);
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
