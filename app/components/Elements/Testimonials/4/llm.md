# stars - Testimonials Component

## Description

This component displays testimonials in a three-column layout, featuring a brief description and star ratings to illustrate satisfaction

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full px-4 py-24">
    <UContainer>
      <div class="relative h-auto w-full px-4 py-24">
        <h1
          class="text-dark-950 dark:text-dark-50 text-left text-3xl font-light md:text-4xl"
        >
          Trusted by businesses and <br />
          individuals worldwide.
        </h1>
        <div class="mt-12 grid grid-cols-12 gap-4">
          <template v-for="(testimonial, index) in testimonials">
            <div class="col-span-full gap-4 lg:col-span-4">
              <div
                class="border-dark-950/10 dark:border-dark-600/30 shadow-dark-950/5 dark:shadow-primary-500/5 flex h-full flex-col items-start justify-between rounded-2xl border p-4 shadow-xl"
              >
                <div class="flex w-full items-start">
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/80 dark:text-yellow-600/80"
                  />
                  <UIcon
                    name="i-heroicons-star-20-solid"
                    class="text-yellow-500/40 dark:text-yellow-600/40"
                  />
                </div>
                <p class="text-dark-950/60 dark:text-dark-50/60 mt-8 text-base">
                  {{ testimonial.text }}
                </p>
                <div class="mt-12 flex w-full items-center gap-x-4">
                  <div class="inline w-auto">
                    <UAvatar
                      :alt="testimonial.name"
                      size="md"
                      class="bg-primary-500"
                      :ui="{ fallback: 'text-dark-50/90' }"
                    />
                  </div>
                  <div class="flex flex-col">
                    <span
                      class="text-dark-950/80 dark:text-dark-50/90 text-sm font-medium"
                    >
                      {{ testimonial.name }}
                    </span>
                    <span
                      class="text-dark-950/60 dark:text-dark-50/60 text-sm font-medium"
                    >
                      {{ testimonial.username }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj",
    text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    title: "Business Transformation",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod",
    text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
    title: "Negocio Transformado",
  },
  {
    name: "Michael Lee",
    username: "@michaellee",
    text: "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
    title: "Intuitive Experience",
  },
]);
</script>
```

## Code Explanation

This Vue component implements a stars for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

