# windows - Gallery Component

## Component Overview

A clean windows-style gallery with desaturated images that come to life on hover. Features a fullscreen lightbox modal for immersive image viewing. Perfect for portfolios and image showcases.

## Implementation Guidelines for Claude

### Context
You are helping to implement a gallery component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
        class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-44 lg:py-0 h-auto min-h-dvh flex items-center justify-center">
        <UContainer>
            <div class="grid grid-cols-12">
                <template v-for="(image, index) in images" :key="index">
                    <div class="col-span-full md:col-span-3 group relative overflow-hidden cursor-pointer"
                        @click="openLightbox(index)">
                        <NuxtImg :src="image.src" :alt="image.alt"
                            class="h-96 w-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-300" loading="lazy"
                            :placeholder="[50, 25, 75, 5]" format="webp" />
                    </div>
                </template>
            </div>
        </UContainer>
        <UModal v-model:open="isLightboxOpen" fullscreen :ui="{
            body: 'p-0 bg-transparent flex items-center justify-center',
        }">
            <template #content>
                <div class="relative w-full h-dvh flex items-center justify-center bg-dark-950/90 backdrop-blur-sm">
                    <UButton @click="isLightboxOpen = false" icon="i-heroicons-x-mark" variant="ghost" color="neutral"
                        class="absolute right-2 top-2 z-10" />
                    <NuxtImg v-if="currentImage" :src="currentImage.src" :alt="currentImage.alt"
                        class="w-full h-10/12 object-contain" format="webp" />
                </div>
            </template>
        </UModal>
    </div>
</template>

<script setup lang="ts">

const images = [
    {
        src: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Desert landscape with sand dunes",
    },
    {
        src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Cacti in desert",
    },
    {
        src: "https://images.unsplash.com/photo-1566345984367-fa2ba5cedc17?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Desert sunset",
    },
    {
        src: "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Mountain landscape",
    },
    {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Ocean view",
    },
    {
        src: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Forest path",
    },
    {
        src: "https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Ocean view",
    },
    {
        src: "https://images.unsplash.com/photo-1529788295308-1eace6f67388?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Forest path",
    },
];

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => {
    return images[currentIndex.value];
});

function openLightbox(index: number) {
    currentIndex.value = index;
    isLightboxOpen.value = true;
}
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
