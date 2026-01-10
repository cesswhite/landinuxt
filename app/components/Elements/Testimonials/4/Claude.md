# stars - Testimonials Component

## Component Overview

This component displays testimonials in a three-column layout, featuring a brief description and star ratings to illustrate satisfaction

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full px-4 py-24">
    <UContainer>
      <div class="relative h-auto w-full px-4 py-24">
        <h1
          class="text-dark-950 dark:text-dark-50 text-left text-3xl font-light md:text-4xl"
        >
          Trusted by businesses and <br />
          individuals worldwide.
        </h1>
        <div class="mt-12 grid grid-cols-12 gap-4">
          <template v-for="(testimonial, index) in testimonials">
            <div class="col-span-full gap-4 lg:col-span-4">
              <div
                class="border-dark-950/10 dark:border-dark-600/30 shadow-dark-950/5 dark:shadow-primary-500/5 flex h-full flex-col items-start justify-between rounded-2xl border p-4 shadow-xl"
              >
                <div class="flex w-full items-start">
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/40 dark:text-yellow-600/40"
                  />
                </div>
                <p class="text-dark-950/60 dark:text-dark-50/60 mt-8 text-base">
                  {{ testimonial.text }}
                </p>
                <div class="mt-12 flex w-full items-center gap-x-4">
                  <div class="inline w-auto">
                    <UAvatar
                      :alt="testimonial.name"
                      size="md"
                      class="bg-primary-500"
                      :ui="{ fallback: 'text-dark-50/90' }"
                    />
                  </div>
                  <div class="flex flex-col">
                    <span
                      class="text-dark-950/80 dark:text-dark-50/90 text-sm font-medium"
                    >
                      {{ testimonial.name }}
                    </span>
                    <span
                      class="text-dark-950/60 dark:text-dark-50/60 text-sm font-medium"
                    >
                      {{ testimonial.username }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj",
    text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    title: "Business Transformation",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod",
    text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
    title: "Negocio Transformado",
  },
  {
    name: "Michael Lee",
    username: "@michaellee",
    text: "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
    title: "Intuitive Experience",
  },
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
