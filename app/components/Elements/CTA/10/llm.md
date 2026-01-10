# overflow - CTA Component

## Description

This CTA component features a small title and description alongside an image on the left, styled with a beautiful serif font, perfect for adding an elegant touch.

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
    class="from-primary-900 to-primary-700 relative flex h-auto w-full flex-col items-center justify-start gap-y-12 rounded-2xl bg-gradient-to-r px-4 pt-12 pb-4 md:h-auto md:px-8 md:pb-12 lg:rounded-3xl lg:px-0"
  >
    <div class="w-full p-0 lg:pl-12">
      <div class="relative z-10 flex w-full flex-col gap-y-4">
        <UBadge
          size="lg"
          color="neutral"
          class="text-dark-50/50 dark:text-dark-50/50 bg-transparent font-serif"
        >
          Shaping the Future of Architecture
        </UBadge>
        <h1
          class="text-dark-50/80 dark:text-dark-50 font-serif text-4xl md:text-5xl"
        >
          Elevate Your Vision<br />
          with
          <span class="font-family-instrument text-dark-50 italic">
            Innovative Home
          </span>
          <br />
          Building Solutions
        </h1>
        <div class="mt-4 flex w-full flex-col sm:w-1/3 2xl:w-1/5">
          <UButton
            block
            to="#"
            color="neutral"
            variant="soft"
            class="px-6"
            size="lg"
          >
            Visit Our Creative Hub
          </UButton>
        </div>
      </div>
    </div>
    <div
      class="relative bottom-0 h-[420px] w-full overflow-hidden rounded-3xl lg:absolute lg:right-12 lg:w-[520px] lg:rounded-t-3xl lg:rounded-b-none"
    >
      <NuxtImg
        format="webp"
        class="h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1570675894641-8860d49afece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a overflow for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

