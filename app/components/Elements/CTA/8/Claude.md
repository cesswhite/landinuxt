# connect - CTA Component

## Component Overview

This CTA component features a title, description, and a prominent button for connecting, all set against a vibrant gradient background with a primary color scheme

## Implementation Guidelines for Claude

### Context
You are helping to implement a cta component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
    class="from-primary-800 via-primary-500 to-primary-300 relative flex h-auto w-full flex-col items-start justify-between gap-y-4 rounded-xl bg-gradient-to-tr p-8 lg:p-14 xl:flex-row xl:items-center xl:gap-y-0"
  >
    <div class="flex flex-col items-start justify-start gap-y-2">
      <h1 class="text-dark-50 text-3xl font-bold">
        Explore Components. <br />
        Speed Up Your Development
      </h1>
      <p class="text-dark-50/70 w-full text-base font-medium lg:w-1/2">
        Discover our collection of ready-to-use components, optimized with Nuxt
        UI. Copy, paste, and customize easily to create effective landing pages
        in minutes.
      </p>
    </div>
    <UButton
      to="/components"
      trailing-icon="i-heroicons-arrow-right"
      variant="solid"
      size="xl"
      class="bg-dark-50/90 hover:bg-dark-50 text-primary-500 rounded-full px-6"
    >
      Connect
    </UButton>
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
