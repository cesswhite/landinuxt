# high-converting - Features Component

## Description

A high-converting feature section displaying a modern bento grid layout with one primary component and two supporting sections for additional information

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
  <div class="relative w-full py-12">
    <UContainer>
      <div class="grid w-full grid-cols-12 gap-4">
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-t-2xl px-12 pt-4"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              The only way to get the best mesh gradient
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Effortlessly design, customize, and distribute stunning mesh
              gradients with our intuitive platform, perfect for both beginners
              and professionals.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom_faq7kt.webp"
              class="h-96 w-full object-contain"
            />
          </div>
        </div>
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-b-2xl px-12 py-8 md:col-span-6"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              Create stunning mesh gradients in seconds
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Transform your designs with powerful mesh gradients in just a few
              clicks. Our AI-powered tools make it simple to create unique
              visual elements for any project.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom3_wvy3rj.webp"
              class="h-96 w-full object-contain"
            />
          </div>
        </div>
        <div
          class="bg-dark-50 dark:bg-dark-950 col-span-full grid grid-cols-subgrid gap-4 rounded-b-2xl px-12 py-8 md:col-span-6"
        >
          <div
            class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
          >
            <h2
              class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
            >
              Export and share your gradients anywhere
            </h2>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-lg">
              Seamlessly integrate your custom mesh gradients into any project
              with multiple export formats. Share directly with your team or
              download for immediate use in your designs.
            </p>
          </div>
          <div class="col-span-full md:col-span-6">
            <NuxtImg
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/iPhoneSingleSoftRotateZoom2_cwpqdi.webp"
              class="h-96 w-full object-contain"
            />
          </div>
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

