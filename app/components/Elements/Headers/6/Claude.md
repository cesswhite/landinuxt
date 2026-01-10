# store - Headers Component

## Component Overview

A comprehensive e-commerce header component incorporating navigation and search capabilities

## Implementation Guidelines for Claude

### Context
You are helping to implement a headers component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <header
    class="dark:bg-dark-950 relative flex w-full items-center justify-between bg-white px-4 py-2"
  >
    <div class="flex items-center gap-2">
      <USlideover side="left" title="Menu" close-icon="i-heroicons-x-mark">
        <UButton
          icon="i-heroicons-bars-3-bottom-left"
          variant="link"
          color="primary"
          size="xl"
        />
        <template #body>
          <nav class="flex w-full flex-col items-center justify-start">
            <UButton variant="link" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Woman
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Man
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Kids
            </UButton>
          </nav>
        </template>
      </USlideover>
      <div class="size-8 min-w-8">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="size-full object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
    </div>
    <div class="hidden items-center justify-start gap-2 md:flex">
      <UButton variant="link" color="primary" size="lg" to="#"> Home </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Woman </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Man </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Kids </UButton>
    </div>
    <div class="flex items-center gap-2">
      <UModal>
        <UButton
          icon="i-heroicons-magnifying-glass"
          variant="link"
          color="primary"
          size="lg"
        />
        <template #content>
          <UCommandPalette
            multiple
            placeholder="Search an app..."
            :groups="groups"
            class="flex-1"
          />
        </template>
      </UModal>

      <UChip text="3" size="2xl">
        <UButton
          icon="i-heroicons-shopping-cart"
          variant="link"
          color="primary"
        />
      </UChip>
    </div>
  </header>
</template>

<script setup lang="ts">
const groups = ref([
  {
    id: "categories",
    items: [
      {
        label: "Electronics",
        icon: "i-heroicons-device-phone-mobile",
      },
      {
        label: "Fashion",
        icon: "i-heroicons-swatch",
      },
      {
        label: "Home & Garden",
        icon: "i-heroicons-home",
      },
    ],
  },
]);
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
