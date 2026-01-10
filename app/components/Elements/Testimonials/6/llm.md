# high-converting - Testimonials Component

## Description

This component showcases a high-converting testimonial layout with a bento-style grid featuring customer reviews, statistics, and visual elements to build trust and credibility.

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
  <div class="relative h-auto w-full py-24">
    <div
      class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
    >
      <h2
        class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
      >
        What Our Clients Say
      </h2>
      <p
        class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center"
      >
        Discover how our solutions have transformed businesses through the words
        of our satisfied clients.
      </p>
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 6000 }"
      align="center"
      :items="testimonials"
      class="mt-12"
      :ui="{
        item: 'basis-full sm:basis-1/3 md:basis-2/5 relative ps-0 md:ps-4',
        container: 'flex items-center relative m-0',
        prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
        next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
      }"
    >
      <div
        class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24"
      >
        <div class="mx-auto flex items-start">
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/40 dark:text-primary-600/40"
          />
        </div>
        <p
          class="text-dark-950 dark:text-dark-50 mt-4 text-center text-xl font-medium italic"
        >
          "{{ item.text }}"
        </p>
        <div class="mt-12 flex flex-col items-center justify-center">
          <span
            class="text-dark-950 dark:text-dark-50 inline-block w-full text-center text-base font-bold"
            >{{ item.name }}</span
          >
          <span
            class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-center text-base font-semibold italic"
            >{{ item.username }}</span
          >
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj_design",
    text: "The mesh gradient toolkit revolutionized my design workflow. The intuitive interface and powerful customization options helped me create stunning visuals in minutes instead of hours.",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod_creative",
    text: "As a creative director, I needed a solution that balances quality with efficiency. This platform delivers both, allowing my team to produce consistent, high-quality visuals across all our client projects.",
  },
  //Add more testimonials here
]);
</script>
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

