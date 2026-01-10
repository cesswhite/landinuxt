# border - FAQ Component

## Component Overview

This FAQ section offers a user-friendly interface with expandable sections, featuring plus and minus icons for effortless access to answers.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-12">
    <UContainer>
      <div class="flex flex-col">
        <h1 class="text-dark-900 dark:text-dark-100 text-4xl font-semibold">
          Frequently Asked Questions
        </h1>
      </div>
      <div class="mt-12 flex flex-col gap-y-4">
        <template v-for="(faq, index) in faqs" :key="index">
          <div class="w-full">
            <UCollapsible class="flex flex-col gap-2" :defaultOpen="faq.open">
              <UButton
                @click="faq.open = !faq.open"
                class="group border-dark-200 flex cursor-pointer items-center justify-between rounded-none border-b pb-2"
                :label="faq.question"
                color="neutral"
                variant="link"
                block
                size="xl"
              >
                <template #trailing>
                  <UIcon
                    :name="faq.open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                  />
                </template>
              </UButton>
              <template #content>
                <p
                  class="text-dark-900/50 dark:text-dark-50/50 relative w-full px-4"
                >
                  {{ faq.answer }}
                </p>
              </template>
            </UCollapsible>
          </div>
        </template>
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
  {
    question: "What is your refund policy?",
    answer: "Our refund policy is...",
    open: false,
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time...",
    open: false,
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order through our website or by contacting support...",
    open: false,
  },
  {
    question: "Do you offer any discounts?",
    answer: "Yes, we offer various discounts and promotions...",
    open: false,
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
