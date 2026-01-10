# multi - Logos Component

## Description

This section showcases multiple logos, a title, description, and call-to-action buttons

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
  <div class="bg-dark-50 relative w-full px-4 py-12">
    <UContainer>
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-full md:col-span-6">
          <h2 class="text-dark-900 text-5xl font-semibold">
            Empowering Visionaries Worldwide
          </h2>
          <p class="text-dark-900/60 mt-4 text-lg font-normal">
            More than 5,000 companies trust us to transform their ideas into
            success stories. Unlock your potential with a reliable partner.
          </p>
          <div class="mt-4 flex gap-x-4">
            <UButton variant="solid" size="lg">
              Explore the possibilities
            </UButton>
            <UButton variant="link" size="lg"> Learn more </UButton>
          </div>
        </div>
        <div class="col-span-full md:col-span-6">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-nuxt" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-supabase" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-tailwindcss" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-cloudflare" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-expo" class="text-3xl" />
            </div>
            <div class="col-span-6 flex h-24 items-center justify-start">
              <UIcon name="i-logos-dev" class="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
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

