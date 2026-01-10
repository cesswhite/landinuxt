# gradient - CTA Component

## Description

This CTA component features a bold title paired with a prominent button, inviting users to get in touch and start their next project.

## Rules for Implementation

When creating this component, follow these rules:

1. **Framework**: Use Nuxt 3 with Composition API (script setup)
2. **UI Library**: Use Nuxt UI v4 components (UButton, NuxtImg, etc.)
3. **Styling**: Use Tailwind CSS v4 utility classes
4. **Responsive Design**: Ensure the component is fully responsive (mobile-first approach)
5. **Dark Mode**: Make sure the component supports dark mode when applicable
6. **Accessibility**: Include proper ARIA labels and semantic HTML
7. **Performance**: Use lazy loading for images and optimize assets
8. **Code Quality**: Write clean, readable, and maintainable code
9. **TypeScript**: Use TypeScript for type safety (if applicable)
10. **Component Structure**: Follow Vue 3 best practices and composition patterns

## Reference Component Code

This is the complete working code for this component. Use it as a reference:

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

## Code Explanation

This Vue component implements a gradient for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

## Technical Implementation Details

### Key Features:

- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)
- **Component Library**: Leverages Nuxt UI v4 for consistent design system
- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading
- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Usage Instructions

1. Copy the component code above
2. Paste it into your Nuxt 3 project
3. Ensure you have Nuxt UI v4 installed: `npm install @nuxt/ui`
4. Make sure Nuxt Image is configured: `npm install @nuxt/image`
5. Customize the content, colors, and styling to match your needs
6. Test the component in different screen sizes and dark mode

