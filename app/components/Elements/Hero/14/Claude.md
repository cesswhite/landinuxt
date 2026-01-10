# luxury - Hero Component

## Component Overview

This hero section features a carousel that displays a full image of the service. The minimal and blurred menu allows for easy navigation and search, with options to select hotels and luxury services.

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
  <div
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full items-center justify-center overflow-x-hidden"
  >
    <UCarousel
      v-slot="{ item }"
      loop
      fade
      :autoplay="{ delay: 5000 }"
      :items="images"
      :ui="{ container: 'h-full', item: 'basis-full h-dvh ?' }"
    >
      <NuxtImg
        class="h-full w-full object-cover object-center"
        :src="item"
        height="1024"
        width="1920"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </UCarousel>
    <div class="absolute mx-auto">
      <UContainer>
        <h1
          class="text-dark-50 leading-12 text-center text-6xl font-medium tracking-tighter"
        >
          Experience Luxury <br />
          In All Its Glory
        </h1>
        <div class="mt-32">
          <div
            class="bg-dark-50/10 dark:bg-dark-950/50 grid w-full grid-cols-12 gap-4 rounded-full p-4 backdrop-blur-sm"
          >
            <div class="col-span-3">
              <USelect
                v-model="hotel"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_hotel"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <USelect
                v-model="city"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_city"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <USelect
                v-model="location"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_location"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <UButton size="lg" block class="rounded-full">
                Find property
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const items_hotel = ref(["Hilton", "Marriott", "Hyatt", "Ritz-Carlton"]);
const hotel = ref(items_hotel.value[0]);

const items_city = ref(["New York", "Los Angeles", "Chicago", "Miami"]);
const city = ref(items_city.value[0]);

const items_location = ref(["Downtown", "Airport", "Suburbs", "Beachfront"]);
const location = ref(items_location.value[0]);

const images = ref([
  "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]);
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
