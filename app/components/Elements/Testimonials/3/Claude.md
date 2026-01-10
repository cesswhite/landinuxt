# tiles - Testimonials Component

## Component Overview

This component showcases testimonials with descriptions and images in a tile layout

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-24">
    <div class="flex flex-col items-center justify-center gap-y-2">
      <UBadge color="primary" variant="soft"> Join the Movement </UBadge>
      <h1
        class="text-dark-950 dark:text-dark-50 text-center text-5xl font-light md:text-6xl"
      >
        Welcome to the Wellness Hub
      </h1>
      <p
        class="text-dark-950/50 dark:text-dark-50/50 mt-4 mx-auto w-full px-4 text-center md:w-1/2 md:p-0"
      >
        Discover a space where mind, body, and soul connect. Our tribe embraces
        holistic well-being, offering a community for everyone to explore and
        grow together.
      </p>
    </div>
    <UContainer>
      <div class="mt-12 grid grid-cols-12 gap-4">
        <template v-for="(testimonial, index) in testimonials">
          <div class="col-span-full grid grid-cols-2 gap-4 lg:col-span-6">
            <div class="col-span-full h-auto lg:col-span-1">
              <NuxtImg
                format="webp"
                :src="testimonial.img"
                class="h-96 w-full rounded-2xl object-cover object-center"
              />
            </div>
            <div
              class="bg-dark-100 dark:bg-dark-900/80 col-span-full flex flex-col items-start rounded-2xl p-4 lg:col-span-1 lg:items-center lg:justify-between"
            >
              <div class="flex w-full flex-col">
                <UIcon name="i-ri-double-quotes-r" class="size-8" />
                <h2 class="text-dark-950 dark:text-dark-50 text-xl">
                  {{ testimonial.title }}
                </h2>
              </div>
              <div class="mt-12 flex flex-col">
                <p class="text-dark-950/60 dark:text-dark-50/60 text-base">
                  {{ testimonial.text }}
                </p>
                <span
                  class="text-dark-950/80 dark:text-dark-50/80 mt-1 text-base font-medium"
                >
                  {{ testimonial.name }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
  {
    name: "Emily Johnson",
    username: "@emilyj",
    text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
    title: "Business Transformation",
    img: "https://images.unsplash.com/photo-1512291313931-d4291048e7b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ana Rodríguez",
    username: "@anarod",
    text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
    title: "Negocio Transformado",
    img: "https://images.unsplash.com/photo-1640622659613-26d7d08893e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  //Add More data
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
