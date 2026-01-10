# social - CTA Component

## Component Overview

This CTA component showcases a title, description, and a social profile with minimal data and avatars

## Implementation Guidelines for Claude

### Context
You are helping to implement a cta component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-32">
    <div class="flex flex-col gap-y-4">
      <div class="mx-auto">
        <UBadge variant="soft" size="lg"> ✨ LandiNuxt ✨ </UBadge>
      </div>
      <h1
        class="text-dark-950 dark:text-dark-50 mx-auto w-full text-center text-4xl font-normal lg:w-1/2"
      >
        Boost Your Startup Full Potential and Achieve Unparalleled Success with
        Our Expert Guidance
      </h1>
      <p
        class="text-dark-950/50 dark:text-dark-50/50 mx-auto w-full text-center text-lg font-normal lg:w-1/2"
      >
        Unlock your Startup full potential with our guidance you can achieve a
        new milestone and reach unparalleled success
      </p>
      <div
        class="mx-auto flex w-auto flex-col items-center justify-center gap-y-12"
      >
        <UButton
          size="lg"
          variant="solid"
          trailing-icon="i-heroicons-arrow-right"
        >
          Discover more about
        </UButton>
        <div class="flex flex-col items-center gap-y-2">
          <UAvatarGroup size="sm" :max="8">
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2UlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="my-alt-description"
            />
          </UAvatarGroup>
          <div
            class="text-dark-950/50 dark:text-dark-50/50 text-sm text-pretty"
          >
            <b class="mr-1">5,075,550+ </b> Clients already happy
          </div>
          <div class="flex items-center justify-center">
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/40 dark:text-dark-50/40"
            />
          </div>
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
