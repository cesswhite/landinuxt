# sparkles - CTA Component

## Component Overview

This CTA component showcases a three-column grid layout, featuring two columns with images and a central column containing an icon, title, and detailed description.

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
  <div
    class="bg-dark-50 dark:bg-dark-950 relative grid h-auto w-full grid-cols-12 gap-y-12 overflow-hidden py-2 lg:gap-y-0"
  >
    <div
      class="group relative right-12 col-span-full overflow-hidden lg:col-span-4"
    >
      <NuxtImg
        format="webp"
        class="h-64 w-full rounded-r-2xl object-cover object-center group-hover:saturate-150"
        loading="lazy"
        height="200"
        width="200"
        alt="my-work"
        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    <div class="col-span-full w-full lg:col-span-4 lg:py-12">
      <div class="relative z-10 flex w-full flex-col gap-y-4">
        <div class="mx-auto">
          <UIcon
            name="i-heroicons-sparkles-solid"
            class="text-dark-950 dark:text-dark-50 size-12 animate-pulse"
          />
        </div>
        <h1
          class="text-dark-950/90 dark:text-dark-50/90 text-center font-serif text-4xl md:text-5xl"
        >
          Turning
          <span class="font-family-instrument text-dark-950 dark:text-dark-50 italic"
            >ideas</span
          >
          <br />
          into
          <span class="font-family-instrument text-dark-950 dark:text-dark-50 italic"
            >reality</span
          >.
        </h1>
        <p
          class="text-dark-950/60 dark:text-dark-50/60 mx-auto px-2 text-center font-serif md:w-1/2 lg:w-full"
        >
          Discover a seamless blend of creativity and innovation. We bring your
          vision to life with precision, expertise, and a commitment to
          excellence in every project.
        </p>
        <div class="mx-auto">
          <UButton
            block
            to="#"
            color="primary"
            variant="solid"
            class="px-6"
            size="lg"
          >
            Explore Our Services
          </UButton>
        </div>
      </div>
    </div>
    <div
      class="group relative left-12 col-span-full overflow-hidden lg:col-span-4 lg:pt-44"
    >
      <NuxtImg
        format="webp"
        class="h-64 w-full rounded-l-2xl object-cover object-center group-hover:saturate-150"
        loading="lazy"
        height="200"
        width="200"
        alt="my-work"
        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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
