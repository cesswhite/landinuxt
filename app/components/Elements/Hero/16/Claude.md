# next - Hero Component

## Component Overview

This hero section displays a prominent title and headline with minimal input to get started.

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
  <div class="relative h-dvh w-full">
    <div class="size-full p-4">
      <NuxtImg
        class="size-full rounded-2xl object-cover object-center saturate-120 xl:object-left dark:saturate-0"
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/space-2_unxqb6.webp"
      />
      <div
        class="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-y-2 px-6"
      >
        <UBadge
          class="text-dark-50/70 bg-transparent text-center text-xs md:text-base xl:text-xl"
        >
          Stay ahead with exclusive updates and early access
        </UBadge>
        <h1
          class="text-dark-50 text-center text-4xl font-bold tracking-tighter md:text-5xl xl:text-6xl xl:leading-[3.6rem]"
        >
          Be a part of the future <br />
          and drive the next wave of innovation
        </h1>
        <div class="mt-12 w-full md:w-1/2 lg:w-1/3">
          <UInput
            v-model="value"
            placeholder="Type something..."
            :ui="{
              root: 'w-full',
              base: 'py-4 pl-4 w-full rounded-full',
              trailing: 'py-1.5 pr-1.5',
            }"
          >
            <template #trailing>
              <UButton
                color="primary"
                variant="solid"
                class="h-full rounded-full"
                label="Get Started"
                @click="value = ''"
              />
            </template>
          </UInput>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref("");
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
