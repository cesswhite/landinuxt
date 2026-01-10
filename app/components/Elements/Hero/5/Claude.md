# only-dark - Hero Component

## Component Overview

This hero section features a single title and a pair of call-to-action buttons. The background image is dark, and the bottom of the section showcases various brands.

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
    class="relative flex h-full min-h-dvh w-full items-center justify-center"
  >
    <!-- Background Image (try a dark image) -->
    <NuxtImg
      class="absolute z-10 h-full w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1651352076676-58a34812f3d2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy"
      alt="my-hero-background"
      :placeholder="[50, 25, 75, 5]"
      format="webp"
    />
    <div class="relative z-10 w-11/12 md:w-10/12">
      <div class="flex flex-col items-start justify-start">
        <h1
          class="text-dark-100 mt-4 text-left text-5xl font-normal sm:text-6xl md:text-7xl"
        >
          Unlock the Power of <br />
          Cutting-Edge Innovation
        </h1>
        <div class="mt-8 flex gap-4">
          <UButton
            variant="solid"
            color="neutral"
            to="#"
            size="lg"
            trailing
            class="rounded-full px-8"
          >
            Get started
          </UButton>
          <UButton
            variant="link"
            color="neutral"
            to="#"
            size="lg"
            class="rounded-full px-8"
          >
            Request demo
          </UButton>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 z-20 w-full">
      <div class="flex w-full items-center justify-center gap-16">
        <template v-for="icon in icons">
          <div class="group size-auto items-center justify-center">
            <UIcon
              :name="icon"
              class="text-dark-50/10 group-hover:text-dark-50/50 size-8"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  "i-simple-icons-adobeillustrator",
  "i-simple-icons-amazon",
  "i-simple-icons-akaunting",
  "i-simple-icons-alchemy",
  "i-simple-icons-amp",
  "i-simple-icons-google",
  "i-simple-icons-facebook",
  "i-simple-icons-vite",
  "i-simple-icons-nike",
  "i-simple-icons-apple",
  "i-simple-icons-microsoft",
  "i-simple-icons-twitter",
  "i-simple-icons-linkedin",
  "i-simple-icons-instagram",
  "i-simple-icons-youtube",
  "i-simple-icons-whatsapp",
  "i-simple-icons-telegram",
  "i-simple-icons-tiktok",
  "i-simple-icons-snapchat",
  "i-simple-icons-pinterest",
  "i-simple-icons-twitch",
  "i-simple-icons-discord",
  "i-simple-icons-reddit",
  "i-simple-icons-medium",
  "i-simple-icons-spotify",
  "i-simple-icons-netflix",
  "i-simple-icons-hulu",
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
