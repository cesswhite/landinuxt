# ancient - Features Component

## Component Overview

Minimalist feature section, designed to showcase the features you need directly in columns.

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
