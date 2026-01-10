# ivvi - Hero Component

## Component Overview

A captivating hero section with a compelling title, a brief description, and an option to leave an email. It also features three stunning images to showcase a product.

## Implementation Guidelines for Claude

### Context
You are helping to implement a hero component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

### Requirements
1. Use Nuxt 3 with Composition API (script setup)
2. Implement using Nuxt UI v4 components
3. Apply Tailwind CSS v4 utility classes for styling
4. Ensure full responsiveness across all screen sizes
5. Support dark mode using Tailwind's dark: prefix
6. Include proper accessibility attributes
7. Optimize images using NuxtImg component
8. Follow Vue 3 best practices

### Reference Code

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

### Implementation Steps
1. Review the reference image to understand the visual design
2. Analyze the provided code structure
3. Implement the component matching the design and code patterns
4. Ensure responsive behavior matches the reference
5. Test dark mode compatibility
6. Verify accessibility features

### Notes
- Pay special attention to spacing, typography, and color usage
- Ensure the component is pixel-perfect to the reference image
- Maintain code quality and readability
- Use semantic HTML elements where appropriate
