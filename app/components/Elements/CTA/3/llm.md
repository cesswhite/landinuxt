# serif - CTA Component

## Description

CTA component showcases an image, description, and call-to-action link, making it an ideal choice for highlighting your product or service and driving user engagement

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
    class="bg-dark-50 dark:bg-dark-950 relative grid w-full grid-cols-12 overflow-hidden rounded-xl"
  >
    <div class="col-span-full h-96 md:col-span-5">
      <NuxtImg
        format="webp"
        class="size-full object-cover object-center"
        alt="my-product-cta"
        src="https://images.unsplash.com/photo-1730407401172-aeed1b1ace5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    <div
      class="col-span-full flex min-h-96 flex-col items-center justify-center gap-y-4 p-8 md:col-span-7"
    >
      <span
        class="font-family-instrument text-primary-600 dark:text-primary-500 mx-auto inline-block text-center tracking-wide"
      >
        Minimal by Design
      </span>
      <h1
        class="text-dark-950 dark:text-dark-50 font-family-lora w-full text-center text-2xl font-light md:text-3xl"
      >
        Engineered in Hidalgo, Mexico, this product blends pure, subtle
        sweetness with a streamlined, minimal finish.
      </h1>
      <UButton
        variant="link"
        to="#"
        color="primary"
        size="xl"
        class="font-family-lora mx-auto inline-block text-center"
      >
        Where precision meets aesthetic, learn more
      </UButton>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a serif for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

