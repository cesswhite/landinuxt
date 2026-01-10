# high-converting - FAQ Component

## Component Overview

This high-converting FAQ section features a clean layout with a prominent title, concise description, and a responsive grid of frequently asked questions designed to improve user engagement and conversion rates.

## Implementation Guidelines for Claude

### Context
You are helping to implement a faq component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
  <div class="relative w-full py-24">
    <UContainer>
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-full flex flex-col items-start justify-start gap-4 md:col-span-5"
        >
          <h2
            class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl"
          >
            Find answers to common questions about our products, services, and
            policies to help you make informed decisions.
          </p>
        </div>
        <div class="col-span-full flex flex-col gap-4 md:col-span-7">
          <template v-for="(faq, index) in faqs" :key="index">
            <div class="w-full">
              <UCollapsible :defaultOpen="faq.open">
                <UButton
                  @click="faq.open = !faq.open"
                  class="group flex cursor-pointer items-center justify-between rounded-md py-5 text-lg"
                  :label="faq.question"
                  color="primary"
                  variant="soft"
                  block
                  size="xl"
                >
                  <template #trailing>
                    <UIcon
                      :name="
                        faq.open ? 'i-heroicons-minus' : 'i-heroicons-plus'
                      "
                    />
                  </template>
                </UButton>
                <template #content>
                  <p
                    class="text-dark-950/60 dark:text-dark-50/60 relative w-full px-3 py-4 text-lg"
                  >
                    {{ faq.answer }}
                  </p>
                </template>
              </UCollapsible>
            </div>
          </template>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const faqs = ref([
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services including...",
    open: true,
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support via...",
    open: false,
  },
  // Add more questions here
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
