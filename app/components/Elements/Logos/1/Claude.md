# simple - Logos Component

## Component Overview

This logos section showcases a title, description, and four logos

## Implementation Guidelines for Claude

### Context
You are helping to implement a logos component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-12">
    <UContainer>
      <h2
        class="text-dark-900 dark:text-dark-50 text-center text-5xl font-semibold"
      >
        Our Partners
      </h2>
      <p
        class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-center text-lg font-normal"
      >
        Explore the possibilities with us, trusted by over +5,000 companies
      </p>
      <div class="mt-12 mx-auto grid max-w-2xl grid-cols-12 gap-4">
        <div
          class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-start"
        >
          <UIcon name="i-logos-nuxt" class="text-3xl" />
        </div>
        <div
          class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-end"
        >
          <UIcon name="i-logos-supabase" class="text-3xl" />
        </div>
        <div
          class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-start"
        >
          <UIcon name="i-logos-tailwindcss" class="text-3xl" />
        </div>
        <div
          class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-end"
        >
          <UIcon name="i-logos-cloudflare" class="text-3xl" />
        </div>
      </div>
    </UContainer>
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
