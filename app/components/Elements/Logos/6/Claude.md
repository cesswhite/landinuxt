# high-converting - Logos Component

## Component Overview

This section strategically displays partner logos in a dynamic marquee to instantly build credibility and foster audience trust.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12">
    <UContainer>
      <div
        class="flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-12 md:gap-y-0"
      >
        <div class="w-full md:w-1/2">
          <h2
            class="text-dark-950 dark:text-dark-50 text-left text-xl font-semibold lg:text-2xl"
          >
            TRUSTED BY OVER 50+ LEADING COMPANIES WORLDWIDE
          </h2>
        </div>
        <div class="w-full md:w-1/2">
          <UMarquee pause-on-hover>
            <div class="flex items-center gap-x-8">
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-nuxt" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-supabase" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-cloudflare" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-nuxt" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-supabase" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-cloudflare" class="text-3xl" />
              </div>
            </div>
          </UMarquee>
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
