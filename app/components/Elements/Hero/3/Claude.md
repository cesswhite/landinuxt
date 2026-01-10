# half - Hero Component

## Component Overview

Hero section featuring two grid sections for showcasing information alongside an image, making a strong first impression

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full">
    <div
      class="2xl:max-w-screen-2xl mx-auto grid h-full min-h-dvh w-full grid-cols-2 items-center justify-center gap-4 px-4"
    >
      <div class="relative col-span-full mt-28 lg:col-span-1">
        <div class="flex flex-col items-center justify-center lg:items-start">
          <h1
            class="text-dark-900 dark:text-dark-100 w-full text-center font-sans text-4xl leading-10 font-bold sm:text-5xl md:w-10/12 lg:w-full lg:text-left lg:text-6xl"
          >
            Welcome to the future of construction
          </h1>
          <p
            class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 md:w-1/2 lg:w-3/5 lg:text-left 2xl:text-xl"
          >
            Unlock your construction project's full potential with our
            comprehensive suite of tools and services
          </p>
          <div
            class="mt-4 flex w-full flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse lg:justify-end"
          >
            <UButton variant="ghost" to="#" size="lg" class="">
              More info
            </UButton>
            <UButton variant="solid" to="#" size="lg" class="">
              Explore components
            </UButton>
          </div>
          <div
            class="mt-8 flex w-full items-center justify-center gap-12 lg:items-start lg:justify-start"
          >
            <UIcon name="i-simple-icons-nike" class="text-dark-400 text-4xl" />
            <UIcon
              name="i-simple-icons-google"
              class="text-dark-400 text-4xl"
            />
            <UIcon
              name="i-simple-icons-adidas"
              class="text-dark-400 text-4xl"
            />
            <UIcon
              name="i-simple-icons-doubanread"
              class="text-dark-400 text-4xl"
            />
          </div>
        </div>
      </div>
      <div class="relative col-span-full mt-4 lg:col-span-1">
        <NuxtImg
          class="max-h-[420px] w-full rounded-lg object-cover object-center lg:max-h-[720px]"
          src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-company-hero-image"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
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
