# earth - Hero Component

## Description

This hero section features a full image background with a monospaced font to create a sleek, modern design.

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
  <!-- This component is based on the design from https://x.com/berlickfold -->
  <div
    class="group relative flex h-dvh w-full items-center justify-center font-mono"
  >
    <NuxtImg
      class="absolute size-full object-cover object-center saturate-120 xl:object-left"
      src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/space_tzvubk.webp"
    />
    <div class="text-dark-50/90 relative z-20 mx-auto text-sm font-bold">
      [START EXPLORING]
    </div>
    <div class="absolute bottom-0 left-0 z-20 w-full px-4 py-12 xl:px-24">
      <div class="relative z-20 grid grid-cols-12 gap-8">
        <div class="col-span-full flex flex-col gap-y-2 text-xs lg:col-span-6">
          <span class="text-dark-50 font-bold uppercase">
            [Mission to Mars]
          </span>
          <p
            class="text-dark-50/60 hidden w-8/12 text-justify uppercase xl:flex"
          >
            Exploring the Red Planet is one of humanity's greatest scientific
            challenges. NASA's perseverance and innovation push the boundaries
            of space exploration every day.
          </p>
          <div class="flex items-center">
            <UButton
              icon="i-lucide-rocket"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-facebook"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-globe"
              variant="link"
              color="neutral"
              size="xs"
            />
            <UButton
              icon="i-lucide-link"
              to="https://x.com/berlickfold"
              target="_blank"
              variant="link"
              color="neutral"
              size="xs"
            />
          </div>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Lunar Gateway]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            The Gateway will be a vital outpost orbiting the Moon, supporting
            sustainable exploration and science.
          </p>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Hubble Legacy]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            Since 1990, the Hubble Space Telescope has transformed our
            understanding of the cosmos with breathtaking images.
          </p>
        </div>
        <div class="col-span-4 flex flex-col gap-y-2 text-xs lg:col-span-2">
          <span class="text-dark-50 font-bold uppercase">
            [Artemis Program]
          </span>
          <p
            class="text-dark-50/60 hidden text-pretty uppercase xl:flex 2xl:text-justify"
          >
            NASA's Artemis program aims to return astronauts to the Moon and
            prepare for human missions to Mars.
          </p>
        </div>
      </div>
      <div
        class="from-dark-950 absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t py-32"
      />
      <div
        class="absolute bottom-0 left-0 z-5 w-full py-32 backdrop-blur-[0.08rem]"
      />
      <div></div>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a earth for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

