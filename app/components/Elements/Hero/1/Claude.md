# simple - Hero Component

## Component Overview

This hero section features a captivating background image, a clear and concise title, and an engaging button for user interaction

## Visual Reference

Reference Image: https://raw.githubusercontent.com/cesswhite/landingnuxt/feat/add-llm-instructions/public/components/hero/1.simple.png

Please analyze the reference image to understand the visual design and layout requirements.

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
    class="relative flex h-full min-h-dvh w-full items-center justify-center"
  >
    <!-- Background Image -->
    <NuxtImg
      class="absolute h-full w-full object-cover object-[right_-14rem_top_0rem] md:object-center"
      src="https://images.unsplash.com/photo-1637552862488-825fdebd3949?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy"
      alt="my-hero-background"
      :placeholder="[50, 25, 75, 5]"
      format="webp"
    />
    <!-- Overlay -->
    <div
      class="from-dark-950/70 absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r"
    />
    <div class="relative z-20 w-10/12">
      <div class="flex flex-col gap-4">
        <h1
          class="text-center text-5xl font-semibold text-white sm:text-6xl md:text-left md:text-7xl 2xl:text-8xl"
        >
          Support your <br />
          friends with <br />
          heartfelt care
        </h1>
        <div class="mt-4 mx-auto w-full sm:w-96 md:mx-0">
          <UButton
            block
            to="/"
            size="xl"
            type="solid"
            color="primary"
            class="flex items-center justify-center gap-6 rounded-full"
            aria-label="Explore our proposals"
          >
            Explore our proposals
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
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
