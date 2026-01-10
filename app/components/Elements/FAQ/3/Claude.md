# grid - FAQ Component

## Component Overview

This FAQ section displays a title and description in a grid format, showcasing six or more questions

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
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-2 w-full text-left text-lg 2xl:text-xl"
        >
          Explore answers to your most pressing questions about our services
        </p>
      </div>
      <div class="mt-12 grid w-full grid-cols-12 gap-x-0 gap-y-8 md:gap-x-8">
        <template v-for="(faq, index) in faqs" :key="index">
          <div class="col-span-full md:col-span-4">
            <span
              class="text-dark-900 dark:text-dark-50 text-base font-semibold"
              >{{ faq.question }}</span
            >
            <p class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-base">
              {{ faq.answer }}
            </p>
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
    answer:
      "We offer a variety of services including web development, digital marketing, and cybersecurity solutions to cater to diverse business needs.",
    open: true,
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support via email, phone, or through our website's contact form. Our support team is available 24/7 to assist you with any inquiries or issues.",
    open: false,
  },
  {
    question: "What is your refund policy?",
    answer:
      "Our refund policy is designed to ensure customer satisfaction. If you are not satisfied with our services, you can request a refund within a specified timeframe as outlined in our terms and conditions.",
    open: false,
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time by logging into your account and following the cancellation process. Please note that cancellation policies may vary depending on the subscription plan you have chosen.",
    open: false,
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order through our website or by contacting support directly. We provide regular updates on order status to ensure you are informed throughout the delivery process.",
    open: false,
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes, we offer various discounts and promotions to our customers. These may include seasonal discounts, loyalty rewards, or special offers for new customers. Please check our website regularly for any available discounts.",
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
