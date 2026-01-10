# map - Contact Component

## Component Overview

This contact section provides links to reach out to us and displays a map with our address for easy location

## Implementation Guidelines for Claude

### Context
You are helping to implement a contact component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <UContainer>
    <div class="relative grid w-full grid-cols-12 gap-8 py-24">
      <div class="col-span-full md:col-span-6">
        <div class="flex h-auto w-full flex-col items-start justify-between">
          <div class="relative">
            <h2 class="text-dark-900 dark:text-dark-50 text-4xl font-semibold">
              We are here to help you
            </h2>
            <p
              class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-lg font-normal"
            >
              Got questions or need assistance? Feel free to reach out to us.
              <br />
              We're just a message away!
            </p>
            <div class="mt-8 flex w-full items-center justify-start">
              <div
                class="bg-primary-500/20 dark:bg-primary-600/40 flex size-8 items-center justify-center rounded-md"
              >
                <UIcon
                  name="i-heroicons-envelope-solid"
                  class="text-primary-900/80 dark:text-primary-50/60 size-4"
                />
              </div>
              <UButton
                :to="`mailto:${email}`"
                variant="link"
                color="neutral"
                size="xl"
              >
                {{ email }}
              </UButton>
            </div>
            <div class="mt-2 flex w-full items-center justify-start">
              <div
                class="bg-primary-500/20 dark:bg-primary-600/40 flex size-8 items-center justify-center rounded-md"
              >
                <UIcon
                  name="i-heroicons-phone-solid"
                  class="text-primary-900/80 dark:text-primary-50/60 size-4"
                />
              </div>
              <UButton
                :to="`tel:${phone}`"
                variant="link"
                color="neutral"
                size="xl"
              >
                {{ phone }}
              </UButton>
            </div>
            <div class="mt-2 flex w-full items-center justify-start">
              <div
                class="bg-primary-500/20 dark:bg-primary-600/40 flex size-8 items-center justify-center rounded-md"
              >
                <UIcon
                  name="i-heroicons-map-pin-solid"
                  class="text-primary-900/80 dark:text-primary-50/60 size-4"
                />
              </div>
              <UButton to="#" variant="link" color="neutral" size="xl">
                {{ address }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-full md:col-span-6">
        <iframe
          class="h-96 w-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5813962729862!2d-98.77224488818499!3d20.067969020004014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67b458ce9ad89ab7%3A0xc30b7153dd77af0c!2sEco%20Development%20Studios!5e0!3m2!1ses-419!2smx!4v1733365718622!5m2!1ses-419!2smx"
          height="450"
          width="600"
          style="border:0;"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const email = ref("example@example.com");
const phone = ref("123-456-7890");
const address = ref("123 Main St, Anytown, USA");
</script>
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
