# high-converting - Logos Component

## Description

This section strategically displays partner logos in a dynamic marquee to instantly build credibility and foster audience trust.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12">
    <UContainer>
      <div
        class="flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-x-12 md:gap-y-0"
      >
        <div class="w-full md:w-1/2">
          <h2
            class="text-dark-950 dark:text-dark-50 text-left text-xl font-semibold lg:text-2xl"
          >
            TRUSTED BY OVER 50+ LEADING COMPANIES WORLDWIDE
          </h2>
        </div>
        <div class="w-full md:w-1/2">
          <UMarquee pause-on-hover>
            <div class="flex items-center gap-x-8">
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-nuxt" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-supabase" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-cloudflare" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-nuxt" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-supabase" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
              </div>
              <div class="flex h-24 w-full items-center justify-center">
                <UIcon name="i-logos-cloudflare" class="text-3xl" />
              </div>
            </div>
          </UMarquee>
        </div>
      </div>
    </UContainer>
  </div>
</template>
```

## Code Explanation

This Vue component implements a high-converting for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

