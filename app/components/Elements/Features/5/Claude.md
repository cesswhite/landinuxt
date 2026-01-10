# mush - Features Component

## Component Overview

A visually striking feature section showcasing large images with titles and descriptions overlayed on top.

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
  <div class="bg-dark-50 dark:bg-dark-900 flex w-full flex-col py-12">
    <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
      <div
        class="mx-auto flex w-full flex-col items-center justify-center gap-2 md:w-1/2"
      >
        <span
          class="text-dark-950/50 dark:text-dark-50/50 text-center text-sm font-medium md:text-base"
        >
          New Features
        </span>
        <h1
          class="text-dark-950 dark:text-dark-50 mt-1 text-center text-4xl font-semibold sm:text-4xl md:text-5xl"
        >
          Unlock Your Fungal Potential
        </h1>
      </div>
    </div>
    <div
      class="mt-12 flex flex-col items-start justify-between gap-x-0 gap-y-8 px-4 md:gap-x-6 md:gap-y-12 lg:flex-row"
    >
      <template v-for="image in images" :key="image.src">
        <div class="group relative w-full flex-1 overflow-hidden rounded-xl">
          <div
            class="from-dark-950/60 group-hover:from-dark-950/30 absolute bottom-0 z-10 flex h-full w-full flex-col items-start justify-end gap-y-2 bg-gradient-to-t p-8"
          >
            <span class="text-dark-50 text-left text-4xl font-semibold">
              {{ image.name }}
            </span>
            <p
              class="text-dark-50/60 mx-auto w-full text-left text-base font-normal"
            >
              {{ image.description }}
            </p>
          </div>
          <NuxtImg
            :src="image.src"
            class="h-[420px] w-full object-cover object-center group-hover:saturate-150 md:h-[520px] lg:h-[620px]"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.pexels.com/photos/20424275/pexels-photo-20424275/free-photo-of-naturaleza-azul-bosque-abstracto.jpeg",
    name: "Mushroom Exploration",
    description:
      "Embark on a journey to discover the hidden wonders of the fungal kingdom, unlocking the secrets of the forest floor.",
  },
  {
    src: "https://images.pexels.com/photos/18290448/pexels-photo-18290448/free-photo-of-madera-naturaleza-arte-mano.jpeg",
    name: "Fungal Network",
    description:
      "Delve into the intricate networks of mycelium, understanding the symbiotic relationships that shape the ecosystem.",
  },
  {
    src: "https://images.pexels.com/photos/17651134/pexels-photo-17651134/free-photo-of-naturaleza-rojo-azul-verano.jpeg",
    name: "Spore Dispersal",
    description:
      "Witness the fascinating process of spore dispersal, as mushrooms release their reproductive units into the air.",
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
