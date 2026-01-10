# portrait - Features Component

## Component Overview

Explore this feature section, showcasing a prominent image, detailed description, and a call-to-action to learn more.

## Implementation Guidelines for Claude

### Context
You are helping to implement a features component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <!-- README
  To use the Instrument Serif Font Family, ensure you have installed the latest version of
  Nuxt UI. You can visit the following link to install:
  https://ui.nuxt.com/docs/getting-started/installation/nuxt
  After this, ensure to add the following code in your main.css file or app.vue
  
  --font-family-instrument: "Instrument Serif", serif;
  
  That's it! You can now use the Instrument Serif font in your app.
   -->
  <div class="flex w-full flex-col gap-y-32">
    <template v-for="(feat, index) in features" :key="index">
      <div
        class="flex w-full flex-col-reverse items-end justify-start md:flex-row md:even:flex-row-reverse"
      >
        <div class="mt-12 h-[320px] w-full md:w-1/2 lg:h-[640px]">
          <NuxtImg
            :src="feat.image"
            class="size-full rounded-sm object-cover object-center"
            loading="lazy"
            alt="my-company-logo-description"
            width="640"
            height="640"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
        <div
          class="flex w-full flex-col items-start gap-y-2 p-0 md:w-1/2 md:px-8"
        >
          <span
            class="font-family-instrument text-dark-950 dark:text-dark-50 text-4xl lg:text-6xl"
          >
            {{ feat.title }}
          </span>
          <p
            class="font-family-instrument text-dark-950/50 dark:text-dark-50/50 text-xl lg:text-2xl"
          >
            {{ feat.description }}
          </p>
          <div class="mt-12 w-auto">
            <UButton
              :to="feat.link"
              icon="i-heroicons-arrow-long-right"
              variant="link"
              color="neutral"
            >
              Learn more about
            </UButton>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Development",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    image: "https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg",
    title: "Design",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    image:
      "https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg",
    title: "Mobile Apps",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    image:
      "https://images.pexels.com/photos/12495614/pexels-photo-12495614.jpeg",
    title: "Imagene Data",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
];
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
