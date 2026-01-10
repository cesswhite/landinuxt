# high-converting - Hero Component

## Component Overview

A high-converting hero section featuring a compelling headline, descriptive title, engaging copy, social proof with user avatars, download buttons, and a prominent product showcase image - all optimized for maximum conversion rates.

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
  <div class="flex h-auto min-h-screen w-full items-center justify-center">
    <div class="mx-auto h-full w-full max-w-7xl">
      <div class="grid w-full grid-cols-12 gap-4">
        <div
          class="col-span-full flex h-screen items-center justify-center px-4 sm:h-auto md:col-span-6"
        >
          <div class="flex flex-col gap-y-6 md:gap-y-8">
            <div>
              <UBadge color="primary" size="lg" variant="outline">
                Stunning Mesh Gradients & Effects
              </UBadge>
            </div>
            <h1
              class="text-dark-950 dark:text-dark-50 text-5xl/10 font-bold tracking-tight text-pretty md:text-6xl md:leading-[3.3rem] lg:text-7xl lg:leading-[3.6rem]"
            >
              The only way to make your app look
              <span class="font-family-instrument italic">unique</span>
            </h1>
            <p
              class="text-dark-950/60 dark:text-dark-50/60 text-lg font-medium text-pretty md:text-xl 2xl:text-xl"
            >
              Create stunning mesh gradients and effects that elevate your app's
              visual identity, eye-catching interfaces that users will remember
              and love.
            </p>
            <div class="flex gap-4">
              <UButton
                to="#"
                size="lg"
                color="primary"
                variant="solid"
                icon="i-ic-baseline-apple"
                label="Download App"
                class="cursor-pointer"
              />
              <UButton
                to="#"
                size="lg"
                color="primary"
                variant="soft"
                icon="i-mdi-google-play"
                label="Download App"
                class="cursor-pointer"
              />
            </div>
            <div class="flex gap-4">
              <UAvatarGroup>
                <UAvatar
                  src="https://github.com/cesswhite.png"
                  alt="Cess White"
                />
                <UAvatar
                  src="https://github.com/betomoedano.png"
                  alt="Betomoedano"
                />
                <UAvatar
                  src="https://github.com/cesswhite.png"
                  alt="Cess White"
                />
                <UAvatar
                  src="https://github.com/betomoedano.png"
                  alt="Betomoedano"
                />
              </UAvatarGroup>
              <div
                class="text-primary-500 dark:text-primary-400 text-base font-medium"
              >
                200k+ Downloads
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-full md:col-span-6">
          <NuxtImg
            loading="lazy"
            alt="mesh-gradient"
            format="webp"
            class="h-full w-full rounded-md object-cover object-center"
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/hero-1-demo_c9ywjy_hhruic.webp"
          />
        </div>
      </div>
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
