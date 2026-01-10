# half - Hero Component

## Description

Hero section featuring two grid sections for showcasing information alongside an image, making a strong first impression

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full">
    <div
      class="2xl:max-w-screen-2xl mx-auto grid h-full min-h-dvh w-full grid-cols-2 items-center justify-center gap-4 px-4"
    >
      <div class="relative col-span-full mt-28 lg:col-span-1">
        <div class="flex flex-col items-center justify-center lg:items-start">
          <h1
            class="text-dark-900 dark:text-dark-100 w-full text-center font-sans text-4xl leading-10 font-bold sm:text-5xl md:w-10/12 lg:w-full lg:text-left lg:text-6xl"
          >
            Welcome to the future of construction
          </h1>
          <p
            class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 md:w-1/2 lg:w-3/5 lg:text-left 2xl:text-xl"
          >
            Unlock your construction project's full potential with our
            comprehensive suite of tools and services
          </p>
          <div
            class="mt-4 flex w-full flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse lg:justify-end"
          >
            <UButton variant="ghost" to="#" size="lg" class="">
              More info
            </UButton>
            <UButton variant="solid" to="#" size="lg" class="">
              Explore components
            </UButton>
          </div>
          <div
            class="mt-8 flex w-full items-center justify-center gap-12 lg:items-start lg:justify-start"
          >
            <UIcon name="i-simple-icons-nike" class="text-dark-400 text-4xl" />
            <UIcon
              name="i-simple-icons-google"
              class="text-dark-400 text-4xl"
            />
            <UIcon
              name="i-simple-icons-adidas"
              class="text-dark-400 text-4xl"
            />
            <UIcon
              name="i-simple-icons-doubanread"
              class="text-dark-400 text-4xl"
            />
          </div>
        </div>
      </div>
      <div class="relative col-span-full mt-4 lg:col-span-1">
        <NuxtImg
          class="max-h-[420px] w-full rounded-lg object-cover object-center lg:max-h-[720px]"
          src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-company-hero-image"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a half for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

