# simple - Hero Component

## Description

This hero section features a captivating background image, a clear and concise title, and an engaging button for user interaction

## Reference Image

**Public Image URL (GitHub Raw):**
https://raw.githubusercontent.com/cesswhite/landingnuxt/feat/add-llm-instructions/public/components/hero/1.simple.png

You can view this image directly in your browser or use it as a reference when implementing the component.

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
    class="relative flex h-full min-h-dvh w-full items-center justify-center"
  >
    <!-- Background Image -->
    <NuxtImg
      class="absolute h-full w-full object-cover object-[right_-14rem_top_0rem] md:object-center"
      src="https://images.unsplash.com/photo-1637552862488-825fdebd3949?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy"
      alt="my-hero-background"
      :placeholder="[50, 25, 75, 5]"
      format="webp"
    />
    <!-- Overlay -->
    <div
      class="from-dark-950/70 absolute top-0 left-0 h-full w-4/5 bg-gradient-to-r"
    />
    <div class="relative z-20 w-10/12">
      <div class="flex flex-col gap-4">
        <h1
          class="text-center text-5xl font-semibold text-white sm:text-6xl md:text-left md:text-7xl 2xl:text-8xl"
        >
          Support your <br />
          friends with <br />
          heartfelt care
        </h1>
        <div class="mt-4 mx-auto w-full sm:w-96 md:mx-0">
          <UButton
            block
            to="/"
            size="xl"
            type="solid"
            color="primary"
            class="flex items-center justify-center gap-6 rounded-full"
            aria-label="Explore our proposals"
          >
            Explore our proposals
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a simple for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

## Visual Reference

**View the reference image here:**
https://raw.githubusercontent.com/cesswhite/landingnuxt/feat/add-llm-instructions/public/components/hero/1.simple.png

The image shows exactly how this component should look when rendered. Use it as a visual guide to ensure your implementation matches the design.
