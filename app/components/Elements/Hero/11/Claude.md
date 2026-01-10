# management - Hero Component

## Component Overview

A visually appealing hero section tailored for a CMS landing page, featuring a clean, modern layout and motion effects

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
    v-motion-fade
    :delay="100"
    :duration="1250"
    class="bg-dark-50 dark:bg-dark-950 relative flex h-full min-h-dvh w-full flex-col items-center justify-center py-24"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="text-dark-900 dark:text-dark-100 mt-4 text-center text-5xl font-semibold sm:text-6xl md:text-7xl"
        >
          Manage your
          <span
            class="from-primary-500 via-primary-400 to-primary-300 bg-gradient-to-b from-0% via-60% to-100% bg-clip-text font-bold text-transparent"
          >
            content effortlessly</span
          >
          with our powerful CMS
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 md:w-1/2 2xl:text-xl"
        >
          Streamline your content creation, editing, and publishing with our
          intuitive CMS. Collaborate easily, keep your site up-to-date, and
          enhance your digital presence.
        </p>
        <div class="my-8">
          <UButton variant="solid" to="#" size="xl"> Learn more about </UButton>
        </div>
      </div>
    </div>
    <div
      class="grid w-[1200px] grid-cols-12 items-center gap-x-4 xl:w-[1800px] 2xl:w-[2500px]"
    >
      <div class="bg-primary-500/10 dark:bg-primary-600/10 col-span-3 p-2">
        <NuxtImg
          class="h-[580px] w-full object-cover object-center"
          format="webp"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div class="bg-primary-500/10 dark:bg-primary-600/10 col-span-6 p-2">
        <NuxtImg
          class="h-[600px] w-full object-cover object-center"
          format="webp"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div class="bg-primary-500/10 dark:bg-primary-600/10 col-span-3 p-2">
        <NuxtImg
          class="h-[580px] w-full object-cover object-center"
          format="webp"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
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
