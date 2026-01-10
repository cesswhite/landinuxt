# masonry - Testimonials Component

## Component Overview

This section showcases numerous testimonials in a masonry grid layout, each featuring a name, description, and social media username.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-24">
    <div class="flex flex-col items-center justify-center gap-y-2">
      <UBadge
        variant="soft"
        class="bg-transparent px-4 text-center md:px-12"
        size="lg"
      >
        Trusted by Thousands Worldwide
      </UBadge>
      <h1
        class="text-dark-900 dark:text-dark-100 text-center text-4xl font-semibold sm:text-4xl md:text-4xl"
      >
        See What Our Clients Have to Say
      </h1>
    </div>
    <UContainer>
      <div class="font-family-inter mt-8 grid grid-cols-12 gap-4 p-4 md:mt-24">
        <template v-for="(col, index) in testimonials" :key="index">
          <div
            class="col-span-full flex h-full flex-col gap-4 even:mt-4 md:col-span-4"
          >
            <template v-for="(testimonial, _index) in col" :key="_index">
              <div
                class="border-dark-200 bg-dark-100 hover:bg-dark-200/70 dark:bg-dark-800/50 dark:border-dark-800 dark:hover:bg-dark-800/70 rounded-2xl border p-4 transition-all duration-300 ease-in-out"
              >
                <p
                  class="text-dark-950/80 dark:text-dark-50/60 text-base font-normal"
                >
                  {{ testimonial.text }}
                </p>
                <div class="mt-20">
                  <span
                    class="text-dark-950 dark:text-dark-50 inline-block w-full text-sm font-bold"
                    >{{ testimonial.name }}</span
                  >
                  <span
                    class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-sm font-normal"
                    >{{ testimonial.username }}</span
                  >
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  [
    {
      name: "Emily Johnson",
      username: "@emilyj",
      text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    },
    //Add more data
  ],
  [
    {
      name: "Laura Fernández",
      username: "@laurafern",
      text: "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
    },
    //Add more data
  ],
  [
    {
      name: "David Wilson",
      username: "@davidw",
      text: "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
    },
    //Add more data
  ],
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
