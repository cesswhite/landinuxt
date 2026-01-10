# heading - CTA Component

## Component Overview

This premium CTA component features a bold headline, compelling description, and dual call-to-action buttons alongside a visually striking two-image showcase that highlights your product's key features and benefits.

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
  <div class="relative w-full px-8 py-24">
    <div
      class="bg-primary-500 dark:bg-primary-600 grid grid-cols-12 gap-4 rounded-xl"
    >
      <div
        class="col-span-full flex flex-col items-start justify-center gap-2 p-8 lg:col-span-6"
      >
        <h2 class="text-dark-50 text-center text-4xl font-bold tracking-tight">
          Elevate Your Design with Mesh Gradient App
        </h2>
        <p class="text-dark-50/60 w-full text-center text-lg md:text-xl">
          Create stunning visual effects and unique gradients that will make
          your projects stand out. Join over 200k designers who've transformed
          their workflow with our intuitive tools.
        </p>
        <div class="mx-auto flex flex-col gap-2 lg:flex-row">
          <UButton
            to="#"
            size="lg"
            color="neutral"
            variant="solid"
            icon="i-ic-baseline-apple"
            label="Download App"
            class="cursor-pointer"
          />
          <UButton
            to="#"
            size="lg"
            color="neutral"
            variant="soft"
            icon="i-mdi-google-play"
            label="Download App"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div class="col-span-full grid grid-cols-subgrid gap-4 lg:col-span-6">
        <div class="col-span-full lg:col-span-3">
          <NuxtImg
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/single-2_jqyqd8_bmrdlq.webp"
            alt="mesh-gradient"
            class="w-full rounded-md object-cover object-bottom md:h-96 md:object-contain lg:h-auto"
          />
        </div>
        <div class="col-span-full lg:col-span-3">
          <NuxtImg
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/single-1_jcfqxi_v7ciwm.webp"
            alt="mesh-gradient"
            class="w-full rounded-md object-cover object-center md:h-96 md:object-contain lg:h-auto"
          />
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
