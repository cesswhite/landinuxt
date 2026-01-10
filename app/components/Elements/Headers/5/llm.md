# multi - Headers Component

## Description

A header component featuring a central logo and extensive navigation options

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

## Code Explanation

This Vue component implements a multi for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

