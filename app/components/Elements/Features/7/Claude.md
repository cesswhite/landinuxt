# trebol - Features Component

## Component Overview

This feature section includes a title, description, and call-to-action button. It highlights 4 items, each with a center icon.

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
    class="grid h-auto w-full grid-cols-12 gap-y-24 py-24 xl:gap-x-24 xl:gap-y-0 xl:px-4"
  >
    <div
      class="col-span-full flex flex-col items-start justify-center gap-y-8 xl:col-span-4"
    >
      <h1
        class="mx-auto text-left text-3xl font-medium text-dark-950 md:w-11/12 md:text-center lg:text-4xl xl:w-full xl:text-left dark:text-dark-50"
      >
        Unlock Your Project's Full Potential with Expert Services
      </h1>
      <p
        class="mx-auto w-full text-left text-lg text-dark-950/50 md:w-10/12 md:text-center xl:w-full xl:text-left dark:text-dark-50/50"
      >
        Unlock your website's full user experience potential with our diverse
        range of feature sections, from minimalist to feature-packed designs,
        all crafted to convey your brand.
      </p>
      <div
        class="flex w-full items-center justify-start md:justify-center xl:justify-start"
      >
        <UButton variant="subtle" color="primary" size="lg" to="#">
          Learn more about features
        </UButton>
      </div>
    </div>
    <div
      class="col-span-full grid w-full grid-cols-subgrid gap-y-12 md:gap-x-6 xl:col-span-8"
    >
      <template v-for="(feat, index) in features" :key="index">
        <div
          class="col-span-full flex h-auto flex-col justify-center gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 md:items-center xl:col-span-4"
        >
          <div
            class="border-primary-500/50 bg-primary-100/10 dark:bg-primary-50/10 flex h-12 w-12 flex-auto items-center justify-center rounded-full border p-3"
          >
            <UIcon
              :name="feat.icon"
              class="? text-primary-600 dark:text-primary-400 size-8"
            />
          </div>
          <span class="text-xl font-semibold text-dark-950 dark:text-dark-50">{{
            feat.title
          }}</span>
          <p
            class="px-0 text-left text-base font-normal text-dark-950/50 md:px-4 md:px-12 md:text-center dark:text-dark-50/50"
          >
            {{ feat.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "i-heroicons-command-line",
    title: "Development",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-swatch",
    title: "Design",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    title: "Mobile Apps",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
  },
  {
    icon: "i-heroicons-cloud",
    title: "Imagene Data",
    description:
      "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
    link: "#",
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
