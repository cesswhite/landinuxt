# elegance - Features Component

## Component Overview

A feature section with a headline title and description, divided into three sections to showcase features or services

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
  <div
    class="flex w-full flex-col gap-12 rounded-xl bg-dark-50 p-4 md:gap-24 dark:bg-dark-900"
  >
    <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
      <div class="flex w-full flex-col gap-2 md:w-1/2">
        <div class="text-primary-600 dark:text-primary-500 text-sm">
          Unlock Your Project's Full Potential
        </div>
        <h1 class="text-7xl font-normal text-dark-950 dark:text-dark-50">
          Expert Development Services
        </h1>
      </div>
      <div class="flex w-full items-center justify-start md:w-1/2">
        <p
          class="font-base w-full text-dark-950/60 md:w-1/2 dark:text-dark-50/80"
        >
          Unlock your project's full potential with our comprehensive feature
          section. Explore cutting-edge technologies and expert services
          tailored to drive your business forward.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-between gap-x-4 gap-y-8 md:flex-row"
    >
      <div class="flex flex-1 flex-col gap-2">
        <div
          class="flex size-10 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800"
        >
          <UIcon
            name="i-heroicons-command-line"
            class="size-full text-dark-950 dark:text-dark-50"
          />
        </div>

        <span class="text-xl font-bold text-dark-950 dark:text-dark-50">
          Development
        </span>
        <p
          class="w-full text-base font-normal text-dark-950/60 lg:w-10/12 dark:text-dark-50/60"
        >
          Unlock your project's full potential with our expert development
          services. From conceptualization to deployment, we ensure a seamless
          integration of cutting-edge technologies to drive your business
          forward.
        </p>
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div
          class="flex size-10 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800"
        >
          <UIcon
            name="i-heroicons-swatch"
            class="size-full text-dark-950 dark:text-dark-50"
          />
        </div>

        <span class="text-xl font-bold text-dark-950 dark:text-dark-50">
          Design
        </span>
        <p
          class="w-full text-base font-normal text-dark-950/60 lg:w-10/12 dark:text-dark-50/60"
        >
          Explore the limitless possibilities of your project with our
          comprehensive design services. From initial conceptualization to final
          deployment, we guarantee a smooth integration of the latest
          technologies to propel your business ahead.
        </p>
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div
          class="flex size-10 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800"
        >
          <UIcon
            name="i-heroicons-device-phone-mobile"
            class="size-full text-dark-950 dark:text-dark-50"
          />
        </div>

        <span class="text-xl font-bold text-dark-950 dark:text-dark-50">
          Mobile Apps
        </span>
        <p
          class="w-full text-base font-normal text-dark-950/60 lg:w-10/12 dark:text-dark-50/60"
        >
          Explore the limitless possibilities of your project with our
          comprehensive mobile app development services. From initial
          conceptualization to final deployment, we guarantee a smooth
          integration of the latest technologies to propel your business ahead.
        </p>
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
