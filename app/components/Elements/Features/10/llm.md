# ancient - Features Component

## Description

Minimalist feature section, designed to showcase the features you need directly in columns.

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
    <div class="grid grid-cols-12 gap-y-24">
        <div class="col-span-full lg:col-span-7">
            <h1 class="text-7xl dark:text-dark-50 font-family-inter font-light">
                Our features are changing the game in design and development
            </h1>
        </div>
        <div class="col-span-full lg:col-span-5 flex flex-col gap-y-8 lg:border-l dark:border-dark-50/10 pb-0 lg:pl-16">
            <template v-for="(feat, index) in features" :key="index">
                <div class="col-span-full md:col-span-2 flex items-center border-b dark:border-dark-50/10 pb-8">
                    <div class="w-44 h-16">
                        <UIcon :name="feat.icon" class="text-dark-950 dark:text-dark-50/50 size-full" />
                    </div>
                    <div class="flex flex-col w-auto px-4 gap-y-2">
                        <span class="text-xl font-bold text-dark-950 dark:text-dark-50 inline-block">
                            {{ feat.title }}
                        </span>
                        <p class="text-base font-normal text-dark-950/50 dark:text-dark-50/50 inline-block">{{
                            feat.description }}
                        </p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        icon: "i-oui-app-logs",
        title: "Development",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-shard",
        title: "Design",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-pause",
        title: "Mobile Apps",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-bolt",
        title: "Imagene Data",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
];
</script>
```

## Code Explanation

This Vue component implements a ancient for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

