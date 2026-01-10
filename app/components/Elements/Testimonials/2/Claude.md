# pastelide - Testimonials Component

## Component Overview

This section features a slide carousel with testimonials, each having a pastel background color.

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
    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :autoplay="{ delay: 6000 }"
      align="center"
      :items="testimonials"
      :ui="{
        item: 'basis-full sm:basis-1/3 md:basis-3/5 relative ps-0 md:ps-4',
        container: 'flex items-center relative m-0',
        prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
        next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
      }"
    >
      <div
        class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24"
        :class="item['class-color']"
      >
        <p class="text-dark-950 text-center text-xl font-medium italic">
          "{{ item.text }}"
        </p>
        <div class="mt-12 flex flex-col items-center justify-center">
          <span class="text-dark-950 inline-block w-full text-base font-bold">{{
            item.name
          }}</span>
          <span
            class="text-dark-950/50 inline-block w-full text-center text-base font-bold"
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
    username: "@emilyj",
    text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    "class-color": "bg-blue-100",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod",
    text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
    "class-color": "bg-green-100",
  },
  {
    name: "Michael Lee",
    username: "@michaellee",
    text: "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
    "class-color": "bg-yellow-100",
  },
  //Add more data
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
