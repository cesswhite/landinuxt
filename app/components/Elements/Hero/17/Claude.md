# coffee - Hero Component

## Component Overview

This hero section features a striking title and description, along with a bottom slider to showcase a brief glimpse of our shop.

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

You are helping to implement a hero component for a **Nuxt 4** landing page. This component should:

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
    <div class="h-auto min-h-dvh w-full dark:bg-dark-950 flex flex-col items-center justify-center relative">
        <NuxtImg class="size-full object-cover object-center absolute z-10"
            src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div class="bg-gradient-to-t from-dark-950/60 size-full absolute top-0 left-0 z-10" />
        <div class="relative z-30 pt-44 md:pt-0">
            <UContainer>
                <h1
                    class="text-left text-dark-50 text-5xl md:text-7xl font-bold font-family-inter tracking-tighter md:leading-[3.8rem]">
                    Discover the Perfect Blend of Coffee and Community
                </h1>
                <p class="text-dark-50/80 mt-4 text-left text-lg md:text-xl 2xl:text-xl font-family-inter w-full lg:w-1/2">
                    Experience the finest coffee crafted with passion and precision, in a space where community
                    thrives
                </p>
                <div class="mt-4 flex flex-col items-center justify-start gap-4 md:flex-row">
                    <UButton variant="solid" color="neutral" to="#" size="lg">
                        Explore our coffee
                    </UButton>
                    <UButton variant="soft" color="neutral" to="#" size="lg"> More info </UButton>
                </div>
            </UContainer>
        </div>
        <div class="relative md:absolute w-full bottom-0 z-20 py-6">
            <UContainer>
                <div class="flex justify-end">
                    <div class="w-full md:w-96 relative">
                        <UCarousel v-slot="{ item }" arrows :prev="{ variant: 'solid', color: 'neutral' }"
                            :next="{ variant: 'solid', color: 'neutral' }" :items="images"
                            :ui="{ controls: 'hidden absolute -left-14 bottom-4 md:flex items-center justify-start', prev: 'absolute -left-6 rounded-xl', next: 'rounded-xl' }">
                            <div class="h-56 w-full md:w-96 p-1 bg-dark-50/10 rounded-xl overflow-hidden relative">
                                <div class="bg-dark-950/40 size-full absolute top-0 left-0 z-10" />
                                <NuxtImg class="size-full object-cover object-center rounded-lg" :src="item"
                                    height="1024" width="1920" loading="lazy" alt="my-hero-background"
                                    :placeholder="[50, 25, 75, 5]" format="webp" />
                            </div>
                        </UCarousel>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
const images = ref([
    'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1529022805552-1c88a713c1c5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
])
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
