# luxury - Features Component

## Component Overview

A feature section with a title and description, showcasing services across three columns.

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

You are helping to implement a features component for a **Nuxt 4** landing page. This component should:

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
  <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-32">
    <UContainer>
      <div class="w-full">
        <div class="grid grid-cols-12 gap-8 md:gap-4">
          <h1
            class="text-dark-950 dark:text-dark-50 col-span-full text-5xl font-medium md:col-span-6"
          >
            Experience the Pinnacle <br />
            of Luxury Living
          </h1>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 col-span-full text-pretty md:col-span-6"
          >
            Indulge in an exquisite collection of world-class luxury hotels.
            Each destination offers unparalleled elegance, exceptional service,
            and unforgettable experiences tailored to your every desire.
          </p>
        </div>
      </div>
    </UContainer>
     <div class="grid grid-cols-12 mt-24">
            <template v-for="(img, index) in images" :key="index">
                <div class="col-span-full md:col-span-6 lg:col-span-4 h-96 relative">
                    <NuxtImg :src="img.url" class="size-full object-center object-cover" />
                    <div class="absolute bottom-6 left-6 flex flex-col z-20">
                        <span class="inline-block text-dark-50 text-sm">
                            {{ img.title }}
                        </span>
                        <span class="inline-block text-dark-50/60 truncate w-56 text-sm">
                            {{ img.short_description }}
                        </span>
                    </div>
                    <div class="absolute bottom-6 right-6 flex items-center justify-center z-20">
                        <UButton :to="img.url" target="_blank" icon="i-lucide-arrow-up-right" variant="link"
                            color="neutral" />
                    </div>
                    <div class="absolute left-o top-0 size-full z-10 bg-gradient-to-t from-dark-950/80" />
                </div>
            </template>
        </div>
  </div>
</template>

<script setup lang="ts">
const images = ref([
  {
    title: "Sunset over the Mountains",
    url: "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A breathtaking view of the sun setting behind majestic mountains.",
  },
  {
    title: "Calm Lake Reflection",
    url: "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A serene lake mirroring the clear sky and lush surroundings.",
  },
  {
    title: "Foggy Forest Path",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_description:
      "A mysterious path surrounded by tall trees and dense fog.",
  },
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
