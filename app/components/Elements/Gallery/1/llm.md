# grid - Gallery Component

## Description

A responsive grid gallery with lightbox functionality. Perfect for showcasing portfolios, images, or visual content with hover effects and modal viewing.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-24">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-y-2 mb-12">
        <UBadge variant="soft" class="bg-transparent text-center" size="lg">
          Our Portfolio
        </UBadge>
        <h1
          class="text-dark-900 dark:text-dark-100 text-center text-4xl font-semibold sm:text-4xl md:text-5xl"
        >
          Explore Our Gallery
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-2 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Discover our collection of stunning visuals and creative works
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="(image, index) in images" :key="index">
          <div
            class="group relative overflow-hidden rounded-lg cursor-pointer"
            @click="openLightbox(index)"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              :placeholder="[50, 25, 75, 5]"
              format="webp"
            />
            <div
              class="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300 flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-magnifying-glass-plus"
                class="text-dark-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-8"
              />
            </div>
          </div>
        </template>
      </div>
    </UContainer>
    <UModal v-model="isLightboxOpen" :ui="{ width: 'max-w-7xl' }">
      <div class="relative">
        <UButton
          @click="isLightboxOpen = false"
          icon="i-heroicons-x-mark"
          variant="ghost"
          color="neutral"
          class="absolute right-2 top-2 z-10"
        />
        <NuxtImg
          v-if="currentImage"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="w-full h-auto object-contain"
          format="webp"
        />
        <div
          v-if="images.length > 1"
          class="flex items-center justify-between mt-4"
        >
          <UButton
            @click="previousImage"
            icon="i-heroicons-chevron-left"
            variant="soft"
            :disabled="currentIndex === 0"
          />
          <span class="text-sm text-dark-950/60 dark:text-dark-50/60">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>
          <UButton
            @click="nextImage"
            icon="i-heroicons-chevron-right"
            variant="soft"
            :disabled="currentIndex === images.length - 1"
          />
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert landscape with sand dunes",
  },
  {
    src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cacti in desert",
  },
  {
    src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ocean view",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

function nextImage() {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  }
}

function previousImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
</script>
```

## Code Explanation

This Vue component implements a grid for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

