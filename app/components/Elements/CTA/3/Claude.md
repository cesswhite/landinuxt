# serif - CTA Component

## Component Overview

CTA component showcases an image, description, and call-to-action link, making it an ideal choice for highlighting your product or service and driving user engagement

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
    class="bg-dark-50 dark:bg-dark-950 relative grid w-full grid-cols-12 overflow-hidden rounded-xl"
  >
    <div class="col-span-full h-96 md:col-span-5">
      <NuxtImg
        format="webp"
        class="size-full object-cover object-center"
        alt="my-product-cta"
        src="https://images.unsplash.com/photo-1730407401172-aeed1b1ace5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    <div
      class="col-span-full flex min-h-96 flex-col items-center justify-center gap-y-4 p-8 md:col-span-7"
    >
      <span
        class="font-family-instrument text-primary-600 dark:text-primary-500 mx-auto inline-block text-center tracking-wide"
      >
        Minimal by Design
      </span>
      <h1
        class="text-dark-950 dark:text-dark-50 font-family-lora w-full text-center text-2xl font-light md:text-3xl"
      >
        Engineered in Hidalgo, Mexico, this product blends pure, subtle
        sweetness with a streamlined, minimal finish.
      </h1>
      <UButton
        variant="link"
        to="#"
        color="primary"
        size="xl"
        class="font-family-lora mx-auto inline-block text-center"
      >
        Where precision meets aesthetic, learn more
      </UButton>
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
