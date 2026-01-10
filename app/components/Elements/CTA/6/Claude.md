# gradient - CTA Component

## Component Overview

This CTA component features a bold title paired with a prominent button, inviting users to get in touch and start their next project.

## Implementation Guidelines for Claude

### Context
You are helping to implement a cta component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
    class="bg-primary-50/50 dark:bg-dark-500/5 relative flex w-full flex-col items-start justify-end"
  >
    <div
      class="flex w-full flex-col items-center justify-center gap-y-8 px-4 py-12 md:p-12"
    >
      <UBadge variant="subtle" size="sm"> ecodevcontact@gmail.com </UBadge>
      <h1
        class="font-family-inter text-dark-950 dark:text-dark-50 mx-auto text-center text-5xl font-bold sm:text-6xl lg:text-7xl 2xl:w-10/12"
      >
        <span
          class="from-primary-950 via-primary-500 to-primary-950 dark:from-dark-50 dark:via-primary-500 dark:to-dark-50 bg-gradient-to-br bg-clip-text text-center text-transparent"
        >
          Contact
        </span>
        us to
        <span
          class="from-primary-950 via-primary-500 to-primary-950 dark:from-dark-50 dark:via-primary-500 dark:to-dark-50 bg-gradient-to-br bg-clip-text text-center text-transparent"
        >
          bring
        </span>
        your digital
        <span
          class="from-primary-950 via-primary-500 to-primary-950 dark:from-dark-50 dark:via-primary-500 dark:to-dark-50 bg-gradient-to-br bg-clip-text text-center text-transparent"
        >
          vision to life
        </span>
      </h1>
      <UButton
        variant="solid"
        to="#"
        size="xl"
        trailing-icon="i-heroicons-arrow-right"
        label="Connect us"
        class="bg-primary-950/90 hover:bg-primary-950 text-primary-50 dark:bg-dark-50/90 hover:dark:bg-dark-50 dark:text-primary-950 px-12"
      />
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
