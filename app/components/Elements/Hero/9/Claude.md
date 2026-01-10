# split - Hero Component

## Component Overview

A dynamic hero section with a striking title, a single call-to-action, and a visually appealing background image divided into two distinct sections with smooth animation

## Implementation Guidelines for Claude

### Context
You are helping to implement a hero component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <!-- README
  To use the VueUse Motion library, ensure you have installed the latest version of
  VueUse Motion. You can visit the following link to install:
  https://motion.vueuse.org/getting-started/nuxt
  After this, ensure to add the following code in your nuxt.config.ts
  
  modules: ['@vueuse/motion/nuxt']

  That's it! You can now use VueUse Motion in your app.
   -->
  <div
    class="bg-dark-50 dark:bg-dark-950 relative flex h-dvh w-full items-center justify-center"
  >
    <div
      class="absolute top-0 left-0 z-10 flex h-full w-full flex-col md:flex-row"
    >
      <div class="group h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
        <NuxtImg
          class="h-full w-full transform-gpu object-cover object-center saturate-150 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105"
          src="https://images.unsplash.com/photo-1512103154942-f12b1bff1c36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <div class="group h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
        <NuxtImg
          class="h-full w-full transform-gpu object-cover object-center saturate-150 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105"
          src="https://images.unsplash.com/photo-1512102935621-443f9165ad73?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, filter: 'blur(10px)' }"
      :enter="{ opacity: 1, filter: 'blur(0px)' }"
      :duration="1200"
      class="relative z-20 flex flex-col items-center justify-center gap-4"
    >
      <h1
        class="text-dark-50 text-center font-sans text-6xl font-extralight md:text-7xl"
      >
        Unlock your fashion journey!
      </h1>
      <UButton variant="subtle" color="primary" size="xl" class="text-dark-50">
        New collection
      </UButton>
    </div>
  </div>
</template>
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
