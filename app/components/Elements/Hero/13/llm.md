# ivvi - Hero Component

## Description

A captivating hero section with a compelling title, a brief description, and an option to leave an email. It also features three stunning images to showcase a product.

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
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto min-h-dvh w-full items-center justify-center overflow-x-hidden"
  >
    <div class="absolute z-10 h-full w-[1440px] md:w-[1720px] xl:w-full">
      <svg
        class="h-full w-full"
        viewBox="0 0 1024 672"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="242" cy="-172" r="844" fill="url(#paint0_radial_1812_79)" />
        <defs>
          <radialGradient
            id="paint0_radial_1812_79"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(928 834) rotate(-135) scale(993.485)"
          >
            <stop
              :stop-color="
                $colorMode.value === 'dark'
                  ? 'var(--color-primary-500)'
                  : 'var(--color-primary-600)'
              "
            />
            <stop
              offset="1"
              :stop-color="
                $colorMode.value === 'dark'
                  ? 'var(--color-dark-950)'
                  : 'var(--color-dark-50)'
              "
              stop-opacity="0"
            />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div class="relative z-20 py-28 md:py-64">
      <UContainer>
        <div class="size-full">
          <div class="flex flex-col gap-y-4 md:w-10/12">
            <h1
              class="text-primary-950 dark:text-primary-50 font-family-inter text-5xl font-semibold tracking-tighter text-pretty lg:text-6xl"
            >
              Create stunning digital invitations <br />
              for your special moments
            </h1>
            <p
              class="text-primary-950/60 dark:text-primary-50/60 w-full text-justify text-xl md:w-9/12"
            >
              Design and share personalized digital invitations for weddings,
              birthdays, and events effortlessly. Impress your guests with
              templates tailored to your needs and celebrate in style.
            </p>
            <div class="flex flex-col gap-4 md:flex-row">
              <UInput
                variant="subtle"
                size="xl"
                placeholder="Enter your email"
                class="w-full md:w-96"
              >
              </UInput>
              <UButton
                variant="subtle"
                size="xl"
                class="flex items-center justify-center"
              >
                Get Started
              </UButton>
            </div>
          </div>
        </div>
        <div class="relative mt-24">
          <NuxtImg
            format="webp"
            class="w-full object-contain object-center md:object-cover"
            loading="lazy"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/vivvento_demo_0_wdsm1j.webp"
          />
          <div class="v absolute -bottom-2 -left-2 h-44 md:h-80 lg:h-[420px]">
            <NuxtImg
              format="webp"
              class="size-full object-cover object-center"
              loading="lazy"
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/vivvento_demo_1_vzxibu.webp"
            />
          </div>
          <div class="v absolute -top-2 -right-2 h-44 md:h-80 lg:h-[420px]">
            <NuxtImg
              format="webp"
              class="size-full object-cover object-center"
              loading="lazy"
              src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/vivvento_demo_2_nbgz0u.webp"
            />
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a ivvi for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

