# simple - FAQ Component

## Description

This FAQ section provides a simple and intuitive interface with collapsible menus for easy access to answers.

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-12">
    <UContainer>
      <div class="flex flex-col items-center justify-center">
        <UBadge variant="subtle" size="lg"> FAQ </UBadge>
        <h1
          class="text-dark-900 dark:text-dark-100 mt-2 text-center text-4xl font-semibold"
        >
          Frequently Asked Questions
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-2 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Explore answers to your most pressing questions about our services
        </p>
      </div>
      <div class="mt-12 flex flex-col gap-y-4">
        <template v-for="(faq, index) in faqs" :key="index">
          <div class="mx-auto w-full md:max-w-xl">
            <UCollapsible class="flex flex-col gap-2" :defaultOpen="faq.open">
              <UButton
                class="group cursor-pointer"
                :label="faq.question"
                color="neutral"
                variant="soft"
                trailing-icon="i-lucide-chevron-down"
                :ui="{
                  trailingIcon:
                    'group-data-[state=open]:rotate-180 transition-transform duration-200',
                }"
                block
                size="xl"
              />
              <template #content>
                <p
                  class="text-dark-900/60 dark:text-dark-50/60 relative w-full px-4"
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

## Code Explanation

This Vue component implements a simple for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

