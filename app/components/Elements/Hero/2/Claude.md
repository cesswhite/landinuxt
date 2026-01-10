# main - Hero Component

## Component Overview

Hero section featuring four key elements to convey more information at first glance

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
  <div
    class="relative flex h-full min-h-dvh w-full items-center justify-center bg-dark-50 dark:bg-dark-950"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <UBadge
          variant="soft"
          class="border-primary rounded-full border px-4 text-center md:px-12"
          size="lg"
        >
          Beautifully crafted components
        </UBadge>
        <h1
          v-motion
          :initial="{ opacity: 0, filter: 'blur(10px)' }"
          :enter="{ opacity: 1, filter: 'blur(0px)' }"
          :delay="100"
          :duration="1250"
          class="mt-8 text-center text-5xl font-semibold text-dark-900 sm:text-6xl md:text-7xl dark:text-dark-100"
        >
          Build your <br />
          Dream Home
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Unlock your construction project's full potential with our
          comprehensive suite of tools and services
        </p>
        <div
          class="mt-8 flex flex-col-reverse items-center justify-center gap-4 lg:flex-row"
        >
          <UButton variant="ghost" to="#" size="lg"> More info </UButton>
          <UButton variant="solid" to="#" size="lg">
            Explore components
          </UButton>
        </div>
      </div>
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
