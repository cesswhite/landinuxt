# big - Hero Component

## Component Overview

Hero section featuring a prominent title, concise description, a pair of call-to-action buttons, brand logos, and a large background image

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
    class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-white pt-32 dark:bg-black"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="text-dark-900 mt-4 text-center font-sans text-8xl font-bold sm:text-6xl md:text-9xl dark:text-white"
        >
          Explore. <br />
          Amaze.
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Embark on an unforgettable adventure safari with our expert guides
        </p>
        <div class="mt-8 flex flex-col gap-4 md:flex-row">
          <UButton variant="solid" color="black" to="#" size="lg" class="px-8">
            Book a tour now
          </UButton>
          <UButton variant="link" color="white" to="#" size="lg" class="px-8">
            Discover more
          </UButton>
        </div>
      </div>
    </div>
    <div class="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
      <template v-for="icon in icons">
        <div class="flex size-auto items-center justify-center p-2">
          <UIcon
            :name="icon"
            class="text-dark-500/50 dark:text-dark-50/20 mx-auto size-10"
          />
        </div>
      </template>
    </div>
    <div
      class="xl:max-w-screen-2xl relative z-10 mt-12 mx-auto w-full p-4 md:p-2"
    >
      <NuxtImg
        class="h-[520px] w-full object-cover object-center lg:h-[640px] 2xl:h-[720px]"
        src="https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  "i-simple-icons-adobeillustrator",
  "i-simple-icons-amazon",
  "i-simple-icons-google",
  "i-simple-icons-facebook",
  "i-simple-icons-vite",
  "i-simple-icons-nike",
  "i-simple-icons-apple",
  "i-simple-icons-microsoft",
  "i-simple-icons-twitter",
];
</script>
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
