# app - CTA Component

## Component Overview

This CTA component showcases a title with a description, a button for downloading the app, and an app image.

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
      class="bg-primary-200 dark:bg-primary-600 col-span-full flex h-auto flex-col items-center justify-center gap-y-4 px-8 py-14 md:col-span-6 lg:h-96"
    >
      <h1
        class="text-dark-950 dark:text-dark-50 text-center text-3xl font-bold uppercase"
      >
        Manage your tasks
      </h1>
      <p
        class="text-dark-950/70 dark:text-dark-50/70 font-family-lora text-center text-base font-light xl:w-1/2"
      >
        Unlock your productivity by joining a community of over 250,000 users
        with Minima
      </p>
      <NuxtLink to="#" target="_blank">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/download_app_store_zk4cdf.svg"
          class="size-auto h-9"
          format="webp"
        />
      </NuxtLink>
    </div>
    <div
      class="bg-primary-50/5 dark:bg-dark-500/5 col-span-full flex h-auto items-center justify-center py-14 md:col-span-6"
    >
      <NuxtImg
        class="border-dark-50/5 size-56 rounded-3xl border object-cover object-center"
        alt="my-product-cta"
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/hero-1-demo_c9ywjy_hhruic.webp"
        format="webp"
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
