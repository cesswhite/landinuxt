# explore - Features Component

## Component Overview

Immersive feature section with stunning imagery, captivating titles, and smooth blur animation for an engaging user experience, evoking the thrill of adventure and exploration.

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
  <div
    class="bg-dark-100 dark:bg-dark-900 flex w-full flex-col gap-12 rounded-xl p-4 md:gap-24"
  >
    <div
      v-motion
      :initial="{ opacity: 0, filter: 'blur(10px)' }"
      :enter="{ opacity: 1, filter: 'blur(0px)' }"
      :duration="1200"
      class="flex w-full flex-col gap-4 md:flex-row md:gap-0"
    >
      <div class="flex w-full flex-col gap-2 md:w-1/2">
        <div class="text-primary-600 dark:text-primary-500 text-sm">
          Embark on a Wild Adventure
        </div>
        <h1 class="text-dark-950 dark:text-dark-50 text-7xl font-normal">
          Safari Tour Experience
        </h1>
      </div>
      <div class="flex w-full items-center justify-start md:w-1/2">
        <p
          class="font-base text-dark-950/60 dark:text-dark-50/80 w-full md:w-1/2"
        >
          Join us on an unforgettable safari tour, where you'll explore the
          untamed wilderness and get up close with incredible wildlife.
        </p>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-between gap-x-16 gap-y-8 md:flex-row"
    >
      <template v-for="image in images" :key="image.src">
        <div
          v-motion
          :initial="{ opacity: 0, filter: 'blur(10px)' }"
          :enter="{ opacity: 1, filter: 'blur(0px)' }"
          :duration="1200"
          class="flex flex-1 flex-col gap-2"
        >
          <div
            class="bg-dark-200/20 dark:bg-dark-800 flex h-96 w-full items-center justify-center rounded-md p-1"
          >
            <NuxtImg
              format="webp"
              :src="image.src"
              class="size-full rounded-sm object-cover object-center"
              loading="lazy"
              alt="my-company-logo-description"
              :placeholder="[50, 25, 75, 5]"
            />
          </div>

          <span
            class="text-dark-950 dark:text-dark-50 text-2xl font-medium md:text-4xl"
          >
            {{ image.label }}
          </span>
          <p
            class="text-dark-950/60 dark:text-dark-50/60 w-full text-base font-normal"
          >
            {{ image.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Dunes",
    description:
      "A breathtaking panorama of endless sand dunes stretching towards the horizon, bathed in the warm light of a vibrant blue sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Cacti",
    description:
      "A majestic stand of towering cacti, set against a backdrop of crystal-clear blue skies and expansive desert landscapes that seem to stretch on forever.",
  },
  {
    src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Sunset",
    description:
      "A serene and peaceful sunset over the desert, casting a warm, golden orange glow over the landscape, as the day slowly gives way to the tranquility of night.",
  },
];
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
