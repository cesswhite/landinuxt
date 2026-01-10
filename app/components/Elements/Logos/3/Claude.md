# multi - Logos Component

## Component Overview

This section showcases multiple logos, a title, description, and call-to-action buttons

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
  <div class="bg-dark-50 relative w-full px-4 py-12">
    <UContainer>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-full md:col-span-6">
          <h2 class="text-dark-900 text-5xl font-semibold">
            Empowering Visionaries Worldwide
          </h2>
          <p class="text-dark-900/60 mt-4 text-lg font-normal">
            More than 5,000 companies trust us to transform their ideas into
            success stories. Unlock your potential with a reliable partner.
          </p>
          <div class="mt-4 flex gap-x-4">
            <UButton variant="solid" size="lg">
              Explore the possibilities
            </UButton>
            <UButton variant="link" size="lg"> Learn more </UButton>
          </div>
        </div>
        <div class="col-span-full md:col-span-6">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-nuxt" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-supabase" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-tailwindcss" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-cloudflare" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-expo" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-dev" class="text-3xl" />
            </div>
          </div>
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
