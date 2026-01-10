# indeed - Headers Component

## Component Overview

This header component includes a logo, central navigation, dropdown menu, and a pair of action buttons

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
    class="dark:bg-dark-950 relative flex w-full items-center justify-between bg-white px-4 py-4"
  >
    <div class="size-8 min-w-8 flex-1 items-center justify-start lg:flex-none">
      <NuxtImg
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
        class="size-full object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </div>
    <nav class="hidden w-full flex-1 items-center justify-center gap-2 lg:flex">
      <UButton
        variant="ghost"
        color="neutral"
        size="lg"
        to="#"
        class="rounded-full"
      >
        Home
      </UButton>
      <UButton
        variant="ghost"
        color="neutral"
        size="lg"
        to="#"
        class="rounded-full"
      >
        About
      </UButton>

      <UDropdownMenu :items="items">
        <UButton
          variant="ghost"
          color="neutral"
          size="lg"
          label="Services"
          class="rounded-full"
        >
          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </UButton>
        <template #item="{ item }">
          <span class="truncate text-sm font-medium">{{ item.label }}</span>
          <UIcon
            v-if="item.icon"
            :name="item.icon"
            class="text-dark-700 dark:text-dark-700 ms-auto h-4 w-4 flex-shrink-0"
          />
        </template>
      </UDropdownMenu>
      <UButton
        variant="ghost"
        color="neutral"
        size="lg"
        to="#"
        class="rounded-full"
      >
        Pricing
      </UButton>
      <UButton
        variant="ghost"
        color="neutral"
        size="lg"
        to="#"
        class="rounded-full"
      >
        Contact
      </UButton>
    </nav>
    <div class="flex flex-1 items-center justify-end gap-4 lg:flex-none">
      <UButton
        block
        label="English"
        variant="ghost"
        color="primary"
        size="lg"
        icon="i-heroicons-globe-alt"
        class="hidden w-auto rounded-full lg:flex"
      />
      <UButton
        block
        label="Register now"
        variant="solid"
        color="primary"
        size="lg"
        class="hidden w-auto rounded-full lg:flex"
      />
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <div class="inline-block md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            variant="link"
            color="primary"
            size="lg"
          />
        </div>
        <template #body>
          <nav class="flex w-full flex-col">
            <UButton block variant="link" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              About
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              Services
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              Contact
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              Blog
            </UButton>
          </nav>
        </template>
      </USlideover>
    </div>
  </header>
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: "Design UI/UX",
      icon: "i-heroicons-paint-brush",
    },
    {
      label: "Development",
      icon: "i-heroicons-command-line",
    },
    {
      label: "Mobile App",
      icon: "i-heroicons-device-phone-mobile",
    },
  ],
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
