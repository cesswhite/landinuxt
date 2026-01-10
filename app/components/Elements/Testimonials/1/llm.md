# masonry - Testimonials Component

## Description

This section showcases numerous testimonials in a masonry grid layout, each featuring a name, description, and social media username.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-24">
    <div class="flex flex-col items-center justify-center gap-y-2">
      <UBadge
        variant="soft"
        class="bg-transparent px-4 text-center md:px-12"
        size="lg"
      >
        Trusted by Thousands Worldwide
      </UBadge>
      <h1
        class="text-dark-900 dark:text-dark-100 text-center text-4xl font-semibold sm:text-4xl md:text-4xl"
      >
        See What Our Clients Have to Say
      </h1>
    </div>
    <UContainer>
      <div class="font-family-inter mt-8 grid grid-cols-12 gap-4 p-4 md:mt-24">
        <template v-for="(col, index) in testimonials" :key="index">
          <div
            class="col-span-full flex h-full flex-col gap-4 even:mt-4 md:col-span-4"
          >
            <template v-for="(testimonial, _index) in col" :key="_index">
              <div
                class="border-dark-200 bg-dark-100 hover:bg-dark-200/70 dark:bg-dark-800/50 dark:border-dark-800 dark:hover:bg-dark-800/70 rounded-2xl border p-4 transition-all duration-300 ease-in-out"
              >
                <p
                  class="text-dark-950/80 dark:text-dark-50/60 text-base font-normal"
                >
                  {{ testimonial.text }}
                </p>
                <div class="mt-20">
                  <span
                    class="text-dark-950 dark:text-dark-50 inline-block w-full text-sm font-bold"
                    >{{ testimonial.name }}</span
                  >
                  <span
                    class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-sm font-normal"
                    >{{ testimonial.username }}</span
                  >
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  [
    {
      name: "Emily Johnson",
      username: "@emilyj",
      text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    },
    //Add more data
  ],
  [
    {
      name: "Laura Fernández",
      username: "@laurafern",
      text: "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
    },
    //Add more data
  ],
  [
    {
      name: "David Wilson",
      username: "@davidw",
      text: "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
    },
    //Add more data
  ],
]);
</script>
```

## Code Explanation

This Vue component implements a masonry for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

