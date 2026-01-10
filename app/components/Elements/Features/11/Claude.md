# luxury - Features Component

## Component Overview

A feature section with a title and description, showcasing services across three columns.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-32">
    <UContainer>
      <div class="w-full">
        <div class="grid grid-cols-12 gap-8 md:gap-4">
          <h1
            class="text-dark-950 dark:text-dark-50 col-span-full text-5xl font-medium md:col-span-6"
          >
            Experience the Pinnacle <br />
            of Luxury Living
          </h1>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 col-span-full text-pretty md:col-span-6"
          >
            Indulge in an exquisite collection of world-class luxury hotels.
            Each destination offers unparalleled elegance, exceptional service,
            and unforgettable experiences tailored to your every desire.
          </p>
        </div>
      </div>
    </UContainer>
     <div class="grid grid-cols-12 mt-24">
            <template v-for="(img, index) in images" :key="index">
                <div class="col-span-full md:col-span-6 lg:col-span-4 h-96 relative">
                    <NuxtImg :src="img.url" class="size-full object-center object-cover" />
                    <div class="absolute bottom-6 left-6 flex flex-col z-20">
                        <span class="inline-block text-dark-50 text-sm">
                            {{ img.title }}
                        </span>
                        <span class="inline-block text-dark-50/60 truncate w-56 text-sm">
                            {{ img.short_description }}
                        </span>
                    </div>
                    <div class="absolute bottom-6 right-6 flex items-center justify-center z-20">
                        <UButton :to="img.url" target="_blank" icon="i-lucide-arrow-up-right" variant="link"
                            color="neutral" />
                    </div>
                    <div class="absolute left-o top-0 size-full z-10 bg-gradient-to-t from-dark-950/80" />
                </div>
            </template>
        </div>
  </div>
</template>

<script setup lang="ts">
const images = ref([
  {
    title: "Sunset over the Mountains",
    url: "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A breathtaking view of the sun setting behind majestic mountains.",
  },
  {
    title: "Calm Lake Reflection",
    url: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A serene lake mirroring the clear sky and lush surroundings.",
  },
  {
    title: "Foggy Forest Path",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A mysterious path surrounded by tall trees and dense fog.",
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
