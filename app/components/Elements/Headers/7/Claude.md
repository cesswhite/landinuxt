# agency - Headers Component

## Component Overview

A modern agency header design that incorporates a menu and a brief portfolio showcase

## Implementation Guidelines for Claude

### Context
You are helping to implement a headers component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="relative w-full">
    <header
      class="bg-dark-50 dark:bg-dark-950 relative z-20 flex h-16 w-full items-center justify-between gap-4 rounded-xl px-4 lg:justify-start"
    >
      <div class="size-8 min-w-8">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="size-full object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <nav
        class="relative z-10 hidden items-center justify-start gap-2 lg:flex"
      >
        <UButton variant="link" color="neutral" size="lg" to="#">
          Home
        </UButton>
        <UButton
          @click="showMenu = !showMenu"
          variant="link"
          color="neutral"
          size="lg"
        >
          <template #trailing>
            <UIcon
              v-if="showMenu"
              name="i-heroicons-chevron-up"
              class="size-4"
            />
            <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
          </template>
          Services
        </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#">
          Tools
        </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#">
          Contact
        </UButton>
      </nav>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <UButton
          color="neutral"
          icon="i-heroicons-bars-3"
          variant="link"
          size="xl"
          class="inline-block lg:hidden"
        />
        <template #body>
          <nav
            class="relative z-10 flex flex-col items-center justify-start gap-2"
          >
            <UButton variant="link" color="neutral" size="lg" to="#">
              Home
            </UButton>
            <UCollapsible class="w-auto">
              <UButton variant="soft" color="neutral" size="lg">
                Services
                <template #trailing>
                  <UIcon
                    v-if="showMenu"
                    name="i-heroicons-chevron-up"
                    class="size-4"
                  />
                  <UIcon
                    v-else
                    name="i-heroicons-chevron-down"
                    class="size-4"
                  />
                </template>
              </UButton>
              <template #content>
                <div class="flex w-full flex-col gap-y-2">
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Development
                  </UButton>
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Design
                  </UButton>
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Mobile Apps
                  </UButton>
                </div>
              </template>
            </UCollapsible>
            <UButton variant="link" color="neutral" size="lg" to="#">
              Tools
            </UButton>
            <UButton variant="link" color="neutral" size="lg" to="#">
              Contact
            </UButton>
          </nav>
        </template>
      </USlideover>
    </header>
    <Transition
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500"
      leave-from-class="opacity-100 "
      leave-to-class="opacity-0 -translate-y-2"
      mode="out-in"
    >
      <div
        v-if="showMenu"
        class="bg-dark-100 dark:border-dark-950/50 dark:bg-dark-900 absolute top-0 left-0 z-10 hidden h-72 w-full rounded-xl border px-4 pt-16 lg:flex"
      >
        <div class="flex w-3/5 items-center">
          <template v-for="(service, index) in services" :key="index">
            <div class="flex flex-col gap-y-2">
              <div
                class="border-dark-950/20 bg-dark-200/20 dark:border-dark-700 dark:bg-dark-800 flex size-8 items-center justify-center rounded-md border p-1"
              >
                <UIcon
                  :name="service.icon"
                  class="text-dark-950 dark:text-dark-50 size-full"
                />
              </div>
              <span class="text-dark-950 dark:text-dark-50 text-base font-bold">
                {{ service.name }}
              </span>
              <p
                class="text-dark-950/60 dark:text-dark-50/60 w-4/5 text-sm font-normal"
              >
                {{ service.description }}
              </p>
            </div>
          </template>
        </div>
        <div class="w-2/5 pt-4">
          <div
            class="bg-primary-200 dark:bg-primary-700 h-full w-full overflow-hidden rounded-t-xl p-4"
          >
            <span class="text-dark-950 dark:text-dark-50 text-base font-bold">
              Explore Our Services
            </span>
            <p
              class="text-dark-950/60 dark:text-dark-50/60 w-4/5 text-sm font-normal"
            >
              Discover how our services can help you achieve your business
              goals.
            </p>
            <div class="mt-6 flex h-full">
              <template v-for="(image, index) in images">
                <div
                  class="flex-1 rotate-4 transform-gpu overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-4 hover:rotate-0"
                >
                  <NuxtImg
                    :src="image"
                    class="h-full w-full object-cover object-center"
                    loading="lazy"
                    alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]"
                    format="webp"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const images = [
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const services = ref([
  {
    icon: "i-heroicons-command-line",
    name: "Development",
    description:
      "Our development services focus on crafting scalable, efficient, and user-friendly solutions tailored to your business needs.",
  },
  {
    icon: "i-heroicons-swatch",
    name: "Design",
    description:
      "Our design team creates visually stunning and intuitive interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    name: "Mobile Apps",
    description:
      "We develop mobile applications that are fast, secure, and optimized for both iOS and Android platforms.",
  },
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
