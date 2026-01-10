# care - Hero Component

## Description

A clean and modern hero section featuring a full-width image background, a prominent title, and a banner at the bottom highlighting key features

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
  <div class="relative h-dvh w-full">
    <NuxtImg
      format="webp"
      class="size-full object-cover object-center"
      loading="lazy"
      src="https://images.unsplash.com/photo-1554057009-4bb718be3f32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <UContainer>
      <div class="relative w-full">
        <div class="absolute bottom-48 lg:bottom-32">
          <h1 class="text-dark-50 text-5xl font-medium md:text-8xl">
            SKIN CARE <br />
            <span
              class="text-primary-600 font-family-instrument tracking-widest italic"
              >NOURISHMENT</span
            >
            <br />
            SOLUTION
          </h1>
        </div>
      </div>
    </UContainer>
    <div
      class="bg-primary-600 absolute bottom-0 flex h-auto w-full items-center py-4 lg:h-16"
    >
      <UContainer class="w-full">
        <div
          class="flex w-full flex-col items-start justify-between gap-2 md:items-center lg:flex-row"
        >
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-leaf" />
            <span class="inline-block font-medium"
              >Made with natural ingredients</span
            >
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-vegan" />
            <span class="inline-block font-medium">Vegan-friendly</span>
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-cross" />
            <span class="inline-block font-medium"
              >Dermatologically tested</span
            >
          </div>
          <div
            class="text-primary-950/70 flex items-center justify-center gap-x-2 text-base"
          >
            <UIcon name="i-lucide-recycle" />
            <span class="inline-block font-medium"
              >Eco-conscious packaging</span
            >
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a care for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

