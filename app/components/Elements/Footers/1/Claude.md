# simple - Footers Component

## Component Overview

This footer component features a minimal navigation with a logo and a responsive menu

## Implementation Guidelines for Claude

### Context
You are helping to implement a footers component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <footer class="relative w-full">
    <div class="flex flex-col">
      <div
        class="border-dark-950/10 dark:border-dark-50/10 flex items-center justify-between border-b px-4 pt-4 pb-12"
      >
        <div class="flex flex-col items-start gap-y-8">
          <div class="h-10 w-auto">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
              class="size-full object-contain object-center"
              loading="lazy"
              alt="my-company-logo-description"
              :placeholder="[50, 25, 75, 5]"
              format="webp"
            />
          </div>
          <div class="flex gap-x-4">
            <template v-for="(nav, index) in navigation" :key="index">
              <UButton
                :to="nav.link"
                target="_blank"
                variant="link"
                color="neutral"
                class="p-0"
              >
                {{ nav.label }}
              </UButton>
            </template>
          </div>
        </div>
        <div class="relative">
          <div class="flex items-end gap-x-4">
            <UFormField
              label="Join to our newsletter"
              name="email"
              size="lg"
              class="w-96"
            >
              <UInput
                v-model="state.email"
                placeholder="Enter your email"
                class="w-full"
              />
            </UFormField>
            <UTooltip text="Subscribe to newsletter">
              <UButton
                type="submit"
                color="primary"
                variant="solid"
                :disabled="!state.email"
                size="lg"
              >
                Subscribe
              </UButton>
            </UTooltip>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-between px-4 pt-12 pb-4">
        <div class="w-full">
          <UButton
            type="button"
            variant="link"
            color="neutral"
            class="p-0"
            aria-readonly="true"
          >
            ©LandiNuxt is a Open Source Project by Eco Development Studios
          </UButton>
        </div>
        <div class="flex h-auto w-full justify-end gap-x-4">
          <template v-for="(nav, index) in bottom_navigation" :key="index">
            <UButton
              :to="nav.link"
              target="_blank"
              variant="link"
              color="neutral"
              class="p-0"
            >
              {{ nav.label }}
            </UButton>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const state = reactive({
  email: undefined,
});

const navigation = [
  {
    label: "Development",
    link: "#",
  },
  {
    label: "Design",
    link: "#",
  },
  {
    label: "Mobile Apps",
    link: "#",
  },
  {
    label: "Imagene Data",
    link: "#",
  },
];

const bottom_navigation = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Website",
    link: "#",
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
