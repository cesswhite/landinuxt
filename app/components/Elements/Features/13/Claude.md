# high-converting - Features Component

## Component Overview

A high-converting feature section displaying a modern bento grid layout with one primary component and two supporting sections for additional information

## Implementation Guidelines for Claude

### Context
You are helping to implement a features component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="relative w-full py-12">
    <UContainer>
      <div class="grid w-full grid-cols-12 gap-4">
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-t-2xl px-12 pt-4"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              The only way to get the best mesh gradient
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Effortlessly design, customize, and distribute stunning mesh
              gradients with our intuitive platform, perfect for both beginners
              and professionals.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom_faq7kt.webp"
              class="h-96 w-full object-contain"
            />
          </div>
        </div>
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-b-2xl px-12 py-8 md:col-span-6"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              Create stunning mesh gradients in seconds
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Transform your designs with powerful mesh gradients in just a few
              clicks. Our AI-powered tools make it simple to create unique
              visual elements for any project.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom3_wvy3rj.webp"
              class="h-96 w-full object-contain"
            />
          </div>
        </div>
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-b-2xl px-12 py-8 md:col-span-6"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              Export and share your gradients anywhere
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Seamlessly integrate your custom mesh gradients into any project
              with multiple export formats. Share directly with your team or
              download for immediate use in your designs.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom2_cwpqdi.webp"
              class="h-96 w-full object-contain"
            />
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
