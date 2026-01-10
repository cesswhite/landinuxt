# coffee - Hero Component

## Component Overview

This hero section features a striking title and description, along with a bottom slider to showcase a brief glimpse of our shop.

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
    <div class="h-auto min-h-dvh w-full dark:bg-dark-950 flex flex-col items-center justify-center relative">
        <NuxtImg class="size-full object-cover object-center absolute z-10"
            src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div class="bg-gradient-to-t from-dark-950/60 size-full absolute top-0 left-0 z-10" />
        <div class="relative z-30 pt-44 md:pt-0">
            <UContainer>
                <h1
                    class="text-left text-dark-50 text-5xl md:text-7xl font-bold font-family-inter tracking-tighter md:leading-[3.8rem]">
                    Discover the Perfect Blend of Coffee and Community
                </h1>
                <p class="text-dark-50/80 mt-4 text-left text-lg md:text-xl 2xl:text-xl font-family-inter w-full lg:w-1/2">
                    Experience the finest coffee crafted with passion and precision, in a space where community
                    thrives
                </p>
                <div class="mt-4 flex flex-col items-center justify-start gap-4 md:flex-row">
                    <UButton variant="solid" color="neutral" to="#" size="lg">
                        Explore our coffee
                    </UButton>
                    <UButton variant="soft" color="neutral" to="#" size="lg"> More info </UButton>
                </div>
            </UContainer>
        </div>
        <div class="relative md:absolute w-full bottom-0 z-20 py-6">
            <UContainer>
                <div class="flex justify-end">
                    <div class="w-full md:w-96 relative">
                        <UCarousel v-slot="{ item }" arrows :prev="{ variant: 'solid', color: 'neutral' }"
                            :next="{ variant: 'solid', color: 'neutral' }" :items="images"
                            :ui="{ controls: 'hidden absolute -left-14 bottom-4 md:flex items-center justify-start', prev: 'absolute -left-6 rounded-xl', next: 'rounded-xl' }">
                            <div class="h-56 w-full md:w-96 p-1 bg-dark-50/10 rounded-xl overflow-hidden relative">
                                <div class="bg-dark-950/40 size-full absolute top-0 left-0 z-10" />
                                <NuxtImg class="size-full object-cover object-center rounded-lg" :src="item"
                                    height="1024" width="1920" loading="lazy" alt="my-hero-background"
                                    :placeholder="[50, 25, 75, 5]" format="webp" />
                            </div>
                        </UCarousel>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
const images = ref([
    'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1529022805552-1c88a713c1c5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
])
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
