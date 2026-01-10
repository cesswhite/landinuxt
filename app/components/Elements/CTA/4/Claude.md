# art - CTA Component

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
    class="bg-dark-50 dark:bg-dark-950 relative grid h-auto w-full grid-cols-12"
  >
    <div
      class="col-span-full flex h-auto flex-col items-start justify-center gap-y-4 px-8 py-14 md:col-span-7 lg:h-96"
    >
      <UBadge variant="soft" size="lg"> Digitally Crafted Simplicity </UBadge>
      <h1 class="text-dark-950 dark:text-dark-50 mt-14 text-4xl font-light">
        Designed and developed in Hidalgo
      </h1>
      <p
        class="text-dark-950/60 dark:text-dark-50/60 font-family-lora w-full text-base font-light md:w-8/12"
      >
        Our product merges clean aesthetics with the precision of modern digital
        craftsmanship. This creation showcases the essence of minimalism with a
        focus on seamless digital integration.
      </p>
      <UButton variant="solid" to="#" color="primary" size="lg">
        Where Design Meets Technology
      </UButton>
    </div>
    <div class="col-span-full h-auto md:col-span-5 lg:h-96">
      <NuxtImg
        format="webp"
        class="size-full object-cover object-center"
        alt="my-product-cta"
        src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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
