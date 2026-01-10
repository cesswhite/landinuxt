# multi - Headers Component

## Component Overview

A header component featuring a central logo and extensive navigation options

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
    <div class="hidden items-center justify-start md:flex">
      <UButton variant="link" color="primary" size="lg" to="#"> Home </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Products
      </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Services
      </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Pricing
      </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Blog </UButton>
    </div>
    <div class="size-8">
      <NuxtImg
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
        class="size-full object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </div>

    <div class="hidden items-center justify-start md:flex">
      <UButton variant="link" color="primary" size="lg" to="#"> About </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Team </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Contact
      </UButton>
      <UButton variant="solid" color="primary" size="lg" class="px-6">
        Join us
      </UButton>
    </div>
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
        <nav class="flex w-full flex-col gap-2">
          <UButton variant="link" color="primary" size="lg" to="#">
            Home
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Products
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Services
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Pricing
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Blog
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            About
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Team
          </UButton>
          <UButton variant="link" color="primary" size="lg" to="#">
            Contact
          </UButton>
          <UButton
            variant="solid"
            color="primary"
            size="lg"
            to="#"
            class="flex items-center justify-center"
          >
            Join us
          </UButton>
        </nav>
      </template>
    </USlideover>
  </header>
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
