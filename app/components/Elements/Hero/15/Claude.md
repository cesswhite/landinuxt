# earth - Hero Component

## Component Overview

This hero section features a full image background with a monospaced font to create a sleek, modern design.

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
  <!-- This component is based on the design from https://x.com/berlickfold -->
  <div
    class="group relative flex h-dvh w-full items-center justify-center font-mono"
  >
    <NuxtImg
      class="absolute size-full object-cover object-center saturate-120 xl:object-left"
      src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/space_tzvubk.webp"
    />
    <div class="text-dark-50/90 relative z-20 mx-auto text-sm font-bold">
      [START EXPLORING]
    </div>
    <div class="absolute bottom-0 left-0 z-20 w-full px-4 py-12 xl:px-24">
      <div class="relative z-20 grid grid-cols-12 gap-8">
        <div class="col-span-full flex flex-col gap-y-2 text-xs lg:col-span-6">
          <span class="text-dark-50 font-bold uppercase">
            [Mission to Mars]
          </span>
          <p
            class="text-dark-50/60 hidden w-8/12 text-justify uppercase xl:flex"
          >
            Exploring the Red Planet is one of humanity's greatest scientific
            challenges. NASA's perseverance and innovation push the boundaries
            of space exploration every day.
          </p>
          <div class="flex items-center">
            <UButton
              icon="i-lucide-rocket"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-facebook"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-globe"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-link"
              to="https://x.com/berlickfold"
              target="_blank"
              variant="link"
              color="neutral"
              size="xs"
            />
          </div>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Lunar Gateway]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            The Gateway will be a vital outpost orbiting the Moon, supporting
            sustainable exploration and science.
          </p>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Hubble Legacy]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            Since 1990, the Hubble Space Telescope has transformed our
            understanding of the cosmos with breathtaking images.
          </p>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Artemis Program]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            NASA's Artemis program aims to return astronauts to the Moon and
            prepare for human missions to Mars.
          </p>
        </div>
      </div>
      <div
        class="from-dark-950 absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t py-32"
      />
      <div
        class="absolute bottom-0 left-0 z-5 w-full py-32 backdrop-blur-[0.08rem]"
      />
      <div></div>
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
