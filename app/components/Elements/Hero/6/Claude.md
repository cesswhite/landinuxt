# desaturate - Hero Component

## Component Overview

Hero section with one title and description with a CTA button, also has a background that changes by dark theme with a button question

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
  <!-- README
  To use the Lora Font Family, ensure you have installed the latest version of
  Nuxt UI. You can visit the following link to install:
  https://ui.nuxt.com/docs/getting-started/installation/nuxt
  After this, ensure to add the following code in your main.css file or app.vue
  
  --font-family-lora: "Lora", serif;
  
  That's it! You can now use the Lora font in your app.
   -->
  <div class="relative flex h-full min-h-dvh w-full items-end justify-center">
    <!-- Background Image (try a dark image to see the magic) -->
    <NuxtImg
      class="absolute z-10 h-full w-full object-cover object-center transition-all duration-300 ease-in-out dark:saturate-0"
      src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy"
      alt="my-hero-background"
      :placeholder="[50, 25, 75, 5]"
      format="webp"
    />
    <div class="relative bottom-24 z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="font-family-lora text-dark-50/80 mt-4 text-center text-5xl font-normal sm:text-6xl md:text-7xl dark:text-white"
        >
          Discover the Magic of <br />
          Luxurious Comfort
        </h1>
        <p
          class="text-dark-50/60 dark:text-dark-50/80 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Indulge in the ultimate sleep experience with our wide range of
          luxurious bedding collections
        </p>
        <div class="mt-8 flex gap-4">
          <UButton
            variant="solid"
            color="neutral"
            to="#"
            size="lg"
            class="px-8"
          >
            Shop now
          </UButton>
        </div>
      </div>
    </div>
    <div class="absolute right-4 bottom-4 z-20">
      <UTooltip text="Questions? Contact Us">
        <UButton
          class="rounded-full"
          icon="i-heroicons-question-mark-circle"
          variant="ghost"
          color="neutral"
        />
      </UTooltip>
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
