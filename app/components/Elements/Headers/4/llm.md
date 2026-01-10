# float - Headers Component

## Description

A header component featuring rounded corners, background blur, and a simplified navigation

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
  <header
    class="relative z-20 flex w-full items-center justify-between px-4 py-2"
  >
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
    <div
      class="border-dark-200/60 bg-dark-50/30 dark:border-dark-500/5 dark:bg-dark-900/90 hidden items-center justify-center rounded-full border px-24 py-1 backdrop-blur md:flex"
    >
      <nav class="flex w-full items-center justify-center gap-2">
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Home
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          About
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Pricing
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Contact
        </UButton>
      </nav>
    </div>
    <div class="flex w-auto gap-4">
      <UButton
        icon="i-heroicons-user-solid"
        class="hidden rounded-full md:flex"
        size="lg"
      >
        Create Account
      </UButton>
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
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              About
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Pricing
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Contact
            </UButton>
            <UButton block icon="i-heroicons-user-solid" size="lg">
              Create Account
            </UButton>
          </nav>
        </template>
      </USlideover>
    </div>
  </header>
</template>
```

## Code Explanation

This Vue component implements a float for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

