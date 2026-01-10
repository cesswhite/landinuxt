# simple - CTA Component

## Component Overview

This CTA component displays a title and description, encouraging quick action

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
  <div class="bg-primary-700 relative w-full py-32">
    <div class="flex flex-col gap-y-4">
      <h1 class="text-dark-50 text-center text-4xl font-bold">
        Unlock Your Startup Success
      </h1>
      <p
        class="text-dark-50/70 mx-auto w-full text-center text-lg font-normal md:w-1/2"
      >
        Unlock your Startup full potential with our guidance <br />
        you can achieve a new milestone
      </p>
      <div class="mx-auto w-auto">
        <UButton
          to="#"
          size="lg"
          variant="solid"
          class="text-dark-50 bg-primary-900 hover:bg-primary-950"
        >
          Discover more about
        </UButton>
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
