# high-converting - CTA Component

## Description

This CTA component features a grid layout with six key product benefits, designed to highlight your product's capabilities and drive conversions through clear value proposition.

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
  <div class="relative w-full py-24">
    <UContainer>
      <div
        class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
      >
        <h2
          class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
        >
          Why
          <span
            class="text-primary-500 dark:text-primary-400 font-family-instrument font-semibold italic"
            >Mesh Gradients</span
          >
          is the Best App for Your Business
        </h2>
        <p
          class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center"
        >
          Mesh gradient toolkit that streamlines creation, customization, and
          implementation—saving you time while delivering professional-quality
          visuals that captivate your audience.
        </p>
      </div>
      <div class="mt-24 grid grid-cols-12 gap-x-4 gap-y-12">
        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-layout-grid"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Responsive Design
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Seamlessly adapt to all screen sizes with layouts that scale
            beautifully across devices.
          </p>
          <UButton
            to="#"
            label="Explore Our Gallery"
            variant="link"
            color="primary"
          />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-settings"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Advanced Customization
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Fine-tune every detail of your gradients for a perfectly tailored
            look.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-plug"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Easy Integration
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Export and implement gradients into any platform with just a few
            clicks.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-wand-2"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            One-Click Magic
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Generate stunning gradients instantly with AI-powered suggestions.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-palette"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Rich Color Library
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Access a wide selection of trendy and professional color
            combinations.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
        </div>

        <div
          class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-4"
        >
          <UIcon
            name="i-lucide-cloud-upload"
            class="text-primary-500 dark:text-primary-400 text-4xl"
          />
          <span
            class="text-dark-950 dark:text-dark-50 text-xl font-bold tracking-tight"
          >
            Cloud Sync
          </span>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
            Save your gradient presets and access them anytime, from anywhere.
          </p>
          <UButton to="#" label="Explore more" variant="link" color="primary" />
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

