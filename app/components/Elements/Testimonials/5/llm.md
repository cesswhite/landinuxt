# bento - Testimonials Component

## Description

This component displays a bento layout with two main sections and three user testimonial sections

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
    <div class="py-36 bg-dark-50 dark:bg-dark-950 px-4 w-full">
        <UContainer>
            <div class="flex flex-col gap-y-8">
                <div class="w-full flex flex-col gap-y-2">
                    <h1 class="text-dark-900 dark:text-dark-100 text-left text-4xl font-bold sm:text-4xl md:text-5xl">
                        What Our Customers Are Saying
                    </h1>
                    <p class="text-primary-950/60 dark:text-primary-50/50 w-full text-left text-lg md:px-0 2xl:text-xl">
                        Discover the delightful experiences our customers have had with our coffee and service.
                    </p>
                </div>
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-full md:col-span-8 h-96 rounded-lg overflow-hidden relative">
                        <NuxtImg class="size-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1516197370049-569c4eaba1d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div class="absolute left-o top-0 size-full flex items-end justify-start p-4 z-20">
                            <div class="flex flex-col gap-y-2 w-full md:w-10/12">
                                <span class="text-4xl text-dark-50 font-bold">
                                    Our Coffee Shop Testimonials
                                </span>
                                <p class="text-xl text-dark-50/70">See what our customers are saying about their
                                    favorite
                                    coffee
                                    experiences.</p>
                            </div>
                        </div>
                        <div class="absolute left-o top-0 size-full z-10 bg-gradient-to-t from-dark-950/70" />
                    </div>
                    <div
                        class="col-span-full md:col-span-4 h-96 bg-gradient-to-tr from-primary-600 via-primary-500 to-primary-400 flex items-end justify-start p-4 rounded-lg">
                        <div class="flex flex-col gap-y-2">
                            <span class="text-6xl text-dark-50 font-bold">
                                95%
                            </span>
                            <p class="text-xl text-dark-50/70">Of our customers ❤️ our ☕ and service</p>
                        </div>
                    </div>
                    <template v-for="(testimonial, index) in testimonials" :key="index">
                        <div
                            class="col-span-full md:col-span-4 h-56 md:h-72 lg:h-56 bg-dark-100 dark:bg-dark-900 p-2 rounded-lg border border-dark-950/10 dark:border-dark-50/5">
                            <div class="flex flex-col gap-y-4 h-full items-start justify-center p-4">
                                <p class="h-full italic text-dark-950/60 dark:text-dark-50/60">
                                    "{{ testimonial.text }}"
                                </p>
                                <div
                                    class="flex gap-x-4 items-center border-t border-dark-200 w-full pt-2 dark:border-dark-50/5">
                                    <NuxtImg :src="testimonial.image"
                                        class="size-12 min-h-12 max-h-12 rounded-full object-cover object-center" />
                                    <div class="flex flex-col">
                                        <span class="inline-block text-sm font-bold">
                                            {{ testimonial.name }}
                                        </span>
                                        <span class="inline-block text-sm text-dark-950/60 dark:text-dark-50/60">
                                            {{ testimonial.username }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef(
    [
        {
            "name": "Emily Johnson",
            "username": "@emilyj",
            "text": "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
            "image": "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            "name": "Ana Rodríguez",
            "username": "@anarod",
            "text": "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
            "image": "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            "name": "Michael Lee",
            "username": "@michaellee",
            "text": "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
            "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ]);
</script>
```

## Code Explanation

This Vue component implements a bento for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

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

