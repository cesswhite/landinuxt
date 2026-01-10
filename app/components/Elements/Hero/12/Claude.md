# care - Hero Component

## Component Overview

A clean and modern hero section featuring a full-width image background, a prominent title, and a banner at the bottom highlighting key features

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
  <div class="relative h-dvh w-full">
    <NuxtImg
      format="webp"
      class="size-full object-cover object-center"
      loading="lazy"
      src="https://images.unsplash.com/photo-1554057009-4bb718be3f32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <UContainer>
      <div class="relative w-full">
        <div class="absolute bottom-48 lg:bottom-32">
          <h1 class="text-dark-50 text-5xl font-medium md:text-8xl">
            SKIN CARE <br />
            <span
              class="text-primary-600 font-family-instrument tracking-widest italic"
              >NOURISHMENT</span
            >
            <br />
            SOLUTION
          </h1>
        </div>
      </div>
    </UContainer>
    <div
      class="bg-primary-600 absolute bottom-0 flex h-auto w-full items-center py-4 lg:h-16"
    >
      <UContainer class="w-full">
        <div
          class="flex w-full flex-col items-start justify-between gap-2 md:items-center lg:flex-row"
        >
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-leaf" />
            <span class="inline-block font-medium"
              >Made with natural ingredients</span
            >
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-vegan" />
            <span class="inline-block font-medium">Vegan-friendly</span>
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-cross" />
            <span class="inline-block font-medium"
              >Dermatologically tested</span
            >
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-recycle" />
            <span class="inline-block font-medium"
              >Eco-conscious packaging</span
            >
          </div>
        </div>
      </UContainer>
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
