# bento - Testimonials Component

## Component Overview

This component displays a bento layout with two main sections and three user testimonial sections

## Critical Instructions for Claude

### Step 1: Read the LLM Instructions File

**IMPORTANT**: Before implementing this component, you MUST read and understand the `llms.txt` file in this same directory. This file contains:

- Complete implementation rules and guidelines
- Reference documentation links (Nuxt UI, Nuxt 4, Tailwind CSS v4)
- Detailed component code reference
- Step-by-step implementation guide
- Technical implementation details

**Action Required**: 
1. Locate and read the `llms.txt` file in this component's directory
2. Review all sections, especially "Implementation Rules and Guidelines"
3. Understand the reference code structure
4. Note the documentation URLs for reference during implementation

### Step 2: Verify Your Skills

**IMPORTANT**: Before starting implementation, review the `Skills.md` file in this directory to verify you have the required technical knowledge.

**Action Required**:
1. Read the `Skills.md` file completely
2. Self-assess your proficiency in each skill area:
   - Core Framework Knowledge (Vue 3, Nuxt 4, Nuxt UI v4, Tailwind CSS v4)
   - Advanced Technical Skills (TypeScript, Modern CSS, Responsive Design, Accessibility)
   - Performance Optimization
   - Component Architecture
3. If you lack proficiency in any essential skill, refer to the documentation links in `llms.txt` to fill knowledge gaps
4. Only proceed with implementation once you're confident in your skills

### Step 3: Implementation Context

You are helping to implement a testimonials component for a **Nuxt 4** landing page. This component should:

- Match the design shown in the reference image exactly
- Follow the code structure provided in `llms.txt`
- Adhere to all rules and guidelines specified in `llms.txt`
- Use the technical skills outlined in `Skills.md`

## Implementation Requirements

### Framework & Tools
1. **Use Nuxt 4** (not Nuxt 3) with Composition API (`<script setup lang="ts">`)
2. **Implement using Nuxt UI v4 components** exclusively
3. **Apply Tailwind CSS v4 utility classes** for all styling
4. **Ensure full responsiveness** across all screen sizes (mobile-first)
5. **Support dark mode** using Tailwind's `dark:` prefix
6. **Include proper accessibility attributes** (ARIA labels, semantic HTML)
7. **Optimize images** using `NuxtImg` component (never use `<img>` tags)
8. **Follow Vue 3 and Nuxt 4 best practices** as outlined in `llms.txt`

### Code Quality Standards
- Write clean, readable, and maintainable code
- Use TypeScript for type safety
- Follow the component structure patterns shown in `llms.txt`
- Leverage Nuxt 4's auto-imports (no manual imports needed)
- Ensure proper semantic HTML structure
- Include appropriate ARIA attributes for accessibility

## Reference Code

The complete reference code is available in the `llms.txt` file. Use it as your primary reference for:

- Component structure and organization
- Tailwind CSS class usage
- Nuxt UI component implementation
- Responsive design patterns
- Dark mode implementation
- Accessibility features

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

## Implementation Workflow

### Pre-Implementation Checklist
- [ ] Read and understood `llms.txt` file completely
- [ ] Reviewed and verified skills in `Skills.md` file
- [ ] Analyzed reference image for visual requirements
- [ ] Understood the reference code structure
- [ ] Have access to Nuxt UI, Nuxt 4, and Tailwind CSS v4 documentation

### Implementation Steps
1. **Analyze Requirements**: Review the reference image and understand the visual design
2. **Review Reference Code**: Study the code structure in `llms.txt` to understand patterns
3. **Check Skills**: Verify you have all required skills from `Skills.md`
4. **Implement Component**: Create the component following all rules from `llms.txt`
5. **Ensure Responsiveness**: Test at all breakpoints (mobile, tablet, desktop)
6. **Test Dark Mode**: Verify appearance in both light and dark modes
7. **Verify Accessibility**: Test with keyboard navigation and screen readers
8. **Optimize Performance**: Ensure images are optimized and code is efficient
9. **Code Review**: Review your implementation against the rules in `llms.txt`
10. **Final Testing**: Test all functionality and visual appearance

### Quality Assurance
- Component matches the reference image pixel-perfectly
- All responsive breakpoints work correctly
- Dark mode displays properly
- Accessibility standards are met (WCAG 2.1 AA)
- Code follows all rules from `llms.txt`
- Performance is optimized (lazy loading, image optimization)
- TypeScript types are properly defined
- Code is clean, readable, and maintainable

## Important Notes

- **Always refer to `llms.txt`** for the most up-to-date implementation rules and guidelines
- **Verify your skills** using `Skills.md` before starting implementation
- **Use the reference documentation** links provided in `llms.txt` when you need clarification
- **Follow Nuxt 4 best practices** as outlined in the official documentation
- **Test thoroughly** at different screen sizes and in both light/dark modes
- **Prioritize accessibility** - ensure your implementation is usable by everyone
- **Maintain code quality** - write code that is maintainable and follows best practices

## Getting Help

If you encounter issues during implementation:

1. Re-read the relevant sections in `llms.txt`
2. Check the official documentation links provided in `llms.txt`
3. Review the `Skills.md` file to identify any knowledge gaps
4. Refer to the reference code in `llms.txt` for implementation patterns
5. Ensure you're following all 12 implementation rules from `llms.txt`
