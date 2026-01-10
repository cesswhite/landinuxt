# high-converting - CTA Component

## Component Overview

This CTA component features a grid layout with six key product benefits, designed to highlight your product's capabilities and drive conversions through clear value proposition.

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
  <div class="relative w-full py-24">
    <UContainer>
      <div
        class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
      >
        <h2
          class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
        >
          Why
          <span
            class="text-primary-500 dark:text-primary-400 font-family-instrument font-semibold italic"
            >Mesh Gradients</span
          >
          is the Best App for Your Business
        </h2>
        <p
          class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center"
        >
          Mesh gradient toolkit that streamlines creation, customization, and
          implementation—saving you time while delivering professional-quality
          visuals that captivate your audience.
        </p>
      </div>
      <div class="mt-24 grid grid-cols-12 gap-x-4 gap-y-12">
        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-layout-grid"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Responsive Design
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Seamlessly adapt to all screen sizes with layouts that scale
            beautifully across devices.
          </p>
          <UButton
            to="#"
            label="Explore Our Gallery"
            variant="link"
            color="primary"
          />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-settings"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Advanced Customization
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Fine-tune every detail of your gradients for a perfectly tailored
            look.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-plug"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Easy Integration
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Export and implement gradients into any platform with just a few
            clicks.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-wand-2"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            One-Click Magic
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Generate stunning gradients instantly with AI-powered suggestions.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-palette"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Rich Color Library
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Access a wide selection of trendy and professional color
            combinations.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-cloud-upload"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Cloud Sync
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Save your gradient presets and access them anytime, from anywhere.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
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
