# saturate - CTA Component

## Component Overview

This CTA component showcases a badge, title, and description against a background image, complemented by a gradient for an elegant look. A hover effect is also included

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
    class="bg-dark-50 group relative flex h-auto w-full items-center bg-[url('https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-left-top py-24 grayscale-75 transition-all duration-700 ease-in-out will-change-auto hover:grayscale-0 hover:saturate-150 md:h-[640px]"
  >
    <div
      class="from-dark-50 dark:from-dark-950 absolute z-0 h-full w-full bg-gradient-to-r transition-all duration-700 ease-in-out will-change-auto lg:group-hover:backdrop-blur-sm"
    />
    <UContainer>
      <div
        class="relative z-10 flex w-full flex-col gap-y-4 will-change-auto lg:w-1/2"
      >
        <UBadge
          size="sm"
          color="neutral"
          class="text-dark-500 dark:text-dark-50/50 bg-transparent"
        >
          Design Studio
        </UBadge>
        <h1
          class="text-dark-950 dark:text-dark-50 text-left text-5xl font-extrabold uppercase md:text-6xl"
        >
          Create Your <br />
          Perfect Living Space
        </h1>
        <p
          class="text-dark-950/80 dark:text-dark-50/70 font-family-inter mt-4 w-full text-left text-lg font-normal md:text-xl"
        >
          Transform your home with our powerful design tool, trusted by over
          250,000 users to visualize, customize, and bring their ideal living
          room to life. Elevate your interior design skills and unlock the
          potential of your space with ease.
        </p>
        <div
          class="mt-4 flex w-full flex-col gap-4 md:w-8/12 md:flex-row lg:w-full"
        >
          <UButton
            block
            to="#"
            color="primary"
            variant="solid"
            class="rounded-full px-6 py-3"
          >
            Explore Our Design Studio
          </UButton>
          <UButton
            block
            to="#"
            color="neutral"
            variant="outline"
            class="rounded-full px-6 py-3"
          >
            Discover Your Dream Space
          </UButton>
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
