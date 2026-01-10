# big - Hero Component

## Description

Hero section featuring a prominent title, concise description, a pair of call-to-action buttons, brand logos, and a large background image

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
    class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-white pt-32 dark:bg-black"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="text-dark-900 mt-4 text-center font-sans text-8xl font-bold sm:text-6xl md:text-9xl dark:text-white"
        >
          Explore. <br />
          Amaze.
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Embark on an unforgettable adventure safari with our expert guides
        </p>
        <div class="mt-8 flex flex-col gap-4 md:flex-row">
          <UButton variant="solid" color="black" to="#" size="lg" class="px-8">
            Book a tour now
          </UButton>
          <UButton variant="link" color="white" to="#" size="lg" class="px-8">
            Discover more
          </UButton>
        </div>
      </div>
    </div>
    <div class="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
      <template v-for="icon in icons">
        <div class="flex size-auto items-center justify-center p-2">
          <UIcon
            :name="icon"
            class="text-dark-500/50 dark:text-dark-50/20 mx-auto size-10"
          />
        </div>
      </template>
    </div>
    <div
      class="xl:max-w-screen-2xl relative z-10 mt-12 mx-auto w-full p-4 md:p-2"
    >
      <NuxtImg
        class="h-[520px] w-full object-cover object-center lg:h-[640px] 2xl:h-[720px]"
        src="https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  "i-simple-icons-adobeillustrator",
  "i-simple-icons-amazon",
  "i-simple-icons-google",
  "i-simple-icons-facebook",
  "i-simple-icons-vite",
  "i-simple-icons-nike",
  "i-simple-icons-apple",
  "i-simple-icons-microsoft",
  "i-simple-icons-twitter",
];
</script>
```

## Code Explanation

This Vue component implements a big for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

