# high-converting - Testimonials Component

## Component Overview

This component showcases a high-converting testimonial layout with a bento-style grid featuring customer reviews, statistics, and visual elements to build trust and credibility.

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
  <div class="relative h-auto w-full py-24">
    <div
      class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6"
    >
      <h2
        class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight"
      >
        What Our Clients Say
      </h2>
      <p
        class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center"
      >
        Discover how our solutions have transformed businesses through the words
        of our satisfied clients.
      </p>
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 6000 }"
      align="center"
      :items="testimonials"
      class="mt-12"
      :ui="{
        item: 'basis-full sm:basis-1/3 md:basis-2/5 relative ps-0 md:ps-4',
        container: 'flex items-center relative m-0',
        prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
        next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
      }"
    >
      <div
        class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24"
      >
        <div class="mx-auto flex items-start">
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/80 dark:text-primary-600/80"
          />
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-primary-500/40 dark:text-primary-600/40"
          />
        </div>
        <p
          class="text-dark-950 dark:text-dark-50 mt-4 text-center text-xl font-medium italic"
        >
          "{{ item.text }}"
        </p>
        <div class="mt-12 flex flex-col items-center justify-center">
          <span
            class="text-dark-950 dark:text-dark-50 inline-block w-full text-center text-base font-bold"
            >{{ item.name }}</span
          >
          <span
            class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-center text-base font-semibold italic"
            >{{ item.username }}</span
          >
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj_design",
    text: "The mesh gradient toolkit revolutionized my design workflow. The intuitive interface and powerful customization options helped me create stunning visuals in minutes instead of hours.",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod_creative",
    text: "As a creative director, I needed a solution that balances quality with efficiency. This platform delivers both, allowing my team to produce consistent, high-quality visuals across all our client projects.",
  },
  //Add more testimonials here
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
