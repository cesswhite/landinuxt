# double-marquee - Hero Component

## Component Overview

A hero section that includes a title, description, two call-to-action buttons, and a double marquee display of art

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
  To use the Instrument Serif Font Family, ensure you have installed the latest version of
      Nuxt UI. You can visit the following link to install:
  https://ui.nuxt.com/docs/getting-started/installation/nuxt
  After this, ensure to add the following code in your main.css file or app.vue
  
  --font-family-instrument: "Instrument Serif", serif;
  
  That's it! You can now use the Instrument Serif font in your app.
   -->
  <div
    class="bg-dark-50 dark:bg-dark-950 relative flex h-full min-h-dvh w-full flex-col items-center justify-center pt-32 pb-4 xl:pt-24"
  >
    <div class="relative z-20 grid w-full grid-cols-12 gap-y-12 md:gap-y-24">
      <div class="col-span-full flex flex-col items-start justify-center px-4">
        <h1
          class="text-dark-900 dark:text-dark-50 mt-4 w-full text-left font-sans text-5xl font-light md:text-7xl"
        >
          Share
          <span class="font-family-instrument inline-block italic">skills</span>
          <br />
          &
          <span class="font-family-instrument inline-block italic">grow</span>
          together
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-4 w-full text-left text-lg leading-8 2xl:text-xl"
        >
          Swap your talents, learn new tricks, and level up—together we grow
          faster!
        </p>
        <div class="mt-4 flex w-auto items-start justify-start gap-2">
          <UButton
            variant="solid"
            color="neutral"
            size="lg"
            class="rounded-full"
          >
            Get started
          </UButton>
          <UButton
            variant="link"
            color="neutral"
            size="lg"
            class="rounded-full"
          >
            Discover more
          </UButton>
        </div>
      </div>
      <div class="col-span-full">
        <div class="flex w-full flex-col gap-4">
          <UMarquee pause-on-hover>
            <div
              class="flex w-full items-center justify-center gap-4 first:ml-0 xl:justify-between xl:first:ml-4"
            >
              <template v-for="(f_image, index) in images" :key="index">
                <NuxtImg
                  class="size-48 object-cover object-center xl:size-52"
                  :src="f_image"
                  loading="lazy"
                  alt="my-photo-work"
                  :placeholder="[50, 25, 75, 5]"
                  format="webp"
                />
              </template>
            </div>
          </UMarquee>
          <UMarquee pause-on-hover reverse>
            <div
              class="flex w-full items-center justify-center gap-4 first:ml-4 xl:first:ml-4"
            >
              <template v-for="(f_image, index) in images" :key="index">
                <NuxtImg
                  class="size-48 object-cover object-center xl:size-52"
                  :src="f_image"
                  loading="lazy"
                  alt="my-photo-work"
                  :placeholder="[50, 25, 75, 5]"
                  format="webp"
                />
              </template>
            </div>
          </UMarquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "https://images.unsplash.com/photo-1557802891-958ecf3d5992?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560135874-bb540cdd5929?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559926431-73aebfacd993?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559762412-627400abeec1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560065569-21beb63d2b0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
