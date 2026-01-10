# solid - CTA Component

## Component Overview

This CTA component features a prominent title and a single button, set against a solid background with a primary color theme, creating a visually appealing call-to-action.

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
    class="bg-primary-600 dark:bg-primary-500 relative flex h-[520px] w-full flex-col items-start justify-end"
  >
    <div class="flex w-full items-end justify-between p-12">
      <h1
        class="text-dark-50 dark:text-dark-950 text-5xl text-7xl font-light md:text-6xl"
      >
        Where Design <br />
        Meets Technology
      </h1>
      <UButton
        variant="solid"
        to="#"
        size="xl"
        icon="i-heroicons-chevron-right"
        class="bg-dark-50/90 hover:bg-dark-50 text-primary-600 dark:bg-dark-950/90 hover:dark:bg-dark-950 dark:text-primary-500"
      />
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
