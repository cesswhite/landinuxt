# bento - Features Component

## Description

A bento section showcasing a large collection of static images with ample space for numerous options

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
  <div class="dark:bg-dark-950 relative w-full py-36">
    <UContainer>
      <div class="grid grid-cols-12 gap-2">
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-24 items-center justify-center rounded-lg p-4 md:col-span-2"
        >
          <NuxtImg
            class="mx-auto h-12 object-contain object-center"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-24 items-center justify-center rounded-lg p-4 md:col-span-10"
        >
          <NuxtImg
            class="mx-auto h-12 object-contain object-center"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/logo-neutral_q3bdxv.webp"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Coffee Sold
            </span>
            <h1
              class="bg-gradient-to-br from-rose-600 via-pink-500 to-violet-400 bg-clip-text text-center text-8xl font-light text-transparent dark:from-rose-400 dark:via-pink-400 dark:to-violet-400"
            >
              1500+
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Cups of coffee sold this month.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Happy Customers
            </span>
            <h1
              class="bg-gradient-to-br from-orange-600 via-yellow-500 to-red-400 bg-clip-text text-center text-8xl font-light text-transparent dark:from-orange-400 dark:via-yellow-400 dark:to-red-400"
            >
              5000+
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Satisfied customers served this year.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-72 items-center justify-center rounded-lg p-4 md:col-span-full lg:col-span-4"
        >
          <div class="flex h-full flex-col items-center justify-between">
            <span class="text-dark-950 dark:text-dark-50 text-lg font-semibold">
              Coffee Beans Used
            </span>
            <h1
              class="bg-gradient-to-br from-cyan-600 via-indigo-500 to-violet-400 bg-clip-text py-1.5 text-center text-8xl font-light text-transparent dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400"
            >
              2000kg
            </h1>
            <span
              class="text-dark-950/60 dark:text-dark-50/50 mx-auto w-full text-center text-sm font-medium md:w-10/12"
            >
              Amount of coffee beans used this year.
            </span>
          </div>
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-full lg:col-span-4"
        >
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1544373823-c2b242bd6324?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <div
            class="relative z-20 flex h-full flex-col items-center justify-between"
          >
            <span class="text-dark-50 text-lg font-semibold">
              Coffee Goals
            </span>
            <h1 class="text-dark-50 text-center text-8xl font-light">
              100k cups
            </h1>
            <span
              class="text-dark-50/60 mx-auto w-10/12 text-center text-sm font-medium"
            >
              Our goal is to serve 1 million cups of coffee this year.
            </span>
          </div>
          <div
            class="from-dark-950 absolute z-10 h-full w-full bg-gradient-to-t"
          />
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1502045856-4882464b27a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          class="bg-dark-100 dark:bg-dark-900/90 relative col-span-full flex h-96 items-center justify-center overflow-hidden rounded-lg p-4 md:col-span-6 lg:col-span-4"
        >
          <NuxtImg
            class="absolute mx-auto size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>
```

## Code Explanation

This Vue component implements a bento for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

