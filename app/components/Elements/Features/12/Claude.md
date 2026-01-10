# bento - Features Component

## Component Overview

A bento section showcasing a large collection of static images with ample space for numerous options

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
  <div class="dark:bg-dark-950 relative w-full py-36">
    <UContainer>
      <div class="grid grid-cols-12 gap-2">
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-24 items-center justify-center rounded-lg p-4 md:col-span-2"
        >
          <NuxtImg
            class="mx-auto h-12 object-contain object-center"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-24 items-center justify-center rounded-lg p-4 md:col-span-10"
        >
          <NuxtImg
            class="mx-auto h-12 object-contain object-center"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/logo-neutral_q3bdxv.webp"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Coffee Sold
            </span>
            <h1
              class="bg-gradient-to-br from-rose-600 via-pink-500 to-violet-400 bg-clip-text text-center text-8xl font-light text-transparent dark:from-rose-400 dark:via-pink-400 dark:to-violet-400"
            >
              1500+
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Cups of coffee sold this month.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Happy Customers
            </span>
            <h1
              class="bg-gradient-to-br from-orange-600 via-yellow-500 to-red-400 bg-clip-text text-center text-8xl font-light text-transparent dark:from-orange-400 dark:via-yellow-400 dark:to-red-400"
            >
              5000+
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Satisfied customers served this year.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-full lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Coffee Beans Used
            </span>
            <h1
              class="bg-gradient-to-br from-cyan-600 via-indigo-500 to-violet-400 bg-clip-text py-1.5 text-center text-8xl font-light text-transparent dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400"
            >
              2000kg
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Amount of coffee beans used this year.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-full lg:col-span-4"
        >
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1544373823-c2b242bd6324?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div
            class="relative z-20 flex h-full flex-col items-center justify-between"
          >
            <span class="text-dark-50 text-lg font-semibold">
              Coffee Goals
            </span>
            <h1 class="text-dark-50 text-center text-8xl font-light">
              100k cups
            </h1>
            <span
              class="text-dark-50/60 mx-auto w-10/12 text-center text-sm font-medium"
            >
              Our goal is to serve 1 million cups of coffee this year.
            </span>
          </div>
          <div
            class="from-dark-950 absolute z-10 h-full w-full bg-gradient-to-t"
          />
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1502045856-4882464b27a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
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
