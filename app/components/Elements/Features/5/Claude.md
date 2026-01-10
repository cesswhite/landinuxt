# mush - Features Component

## Component Overview

A visually striking feature section showcasing large images with titles and descriptions overlayed on top.

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
  <div class="bg-dark-50 dark:bg-dark-900 flex w-full flex-col py-12">
    <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
      <div
        class="mx-auto flex w-full flex-col items-center justify-center gap-2 md:w-1/2"
      >
        <span
          class="text-dark-950/50 dark:text-dark-50/50 text-center text-sm font-medium md:text-base"
        >
          New Features
        </span>
        <h1
          class="text-dark-950 dark:text-dark-50 mt-1 text-center text-4xl font-semibold sm:text-4xl md:text-5xl"
        >
          Unlock Your Fungal Potential
        </h1>
      </div>
    </div>
    <div
      class="mt-12 flex flex-col items-start justify-between gap-x-0 gap-y-8 px-4 md:gap-x-6 md:gap-y-12 lg:flex-row"
    >
      <template v-for="image in images" :key="image.src">
        <div class="group relative w-full flex-1 overflow-hidden rounded-xl">
          <div
            class="from-dark-950/60 group-hover:from-dark-950/30 absolute bottom-0 z-10 flex h-full w-full flex-col items-start justify-end gap-y-2 bg-gradient-to-t p-8"
          >
            <span class="text-dark-50 text-left text-4xl font-semibold">
              {{ image.name }}
            </span>
            <p
              class="text-dark-50/60 mx-auto w-full text-left text-base font-normal"
            >
              {{ image.description }}
            </p>
          </div>
          <NuxtImg
            :src="image.src"
            class="h-[420px] w-full object-cover object-center group-hover:saturate-150 md:h-[520px] lg:h-[620px]"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.pexels.com/photos/20424275/pexels-photo-20424275/free-photo-of-naturaleza-azul-bosque-abstracto.jpeg",
    name: "Mushroom Exploration",
    description:
      "Embark on a journey to discover the hidden wonders of the fungal kingdom, unlocking the secrets of the forest floor.",
  },
  {
    src: "https://images.pexels.com/photos/18290448/pexels-photo-18290448/free-photo-of-madera-naturaleza-arte-mano.jpeg",
    name: "Fungal Network",
    description:
      "Delve into the intricate networks of mycelium, understanding the symbiotic relationships that shape the ecosystem.",
  },
  {
    src: "https://images.pexels.com/photos/17651134/pexels-photo-17651134/free-photo-of-naturaleza-rojo-azul-verano.jpeg",
    name: "Spore Dispersal",
    description:
      "Witness the fascinating process of spore dispersal, as mushrooms release their reproductive units into the air.",
  },
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
