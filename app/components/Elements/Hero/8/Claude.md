# double-marquee - Hero Component

## Component Overview

A hero section that includes a title, description, two call-to-action buttons, and a double marquee display of art

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
  <!-- README
  To use the Instrument Serif Font Family, ensure you have installed the latest version of
      Nuxt UI. You can visit the following link to install:
  https://ui.nuxt.com/docs/getting-started/installation/nuxt
  After this, ensure to add the following code in your main.css file or app.vue
  
  --font-family-instrument: "Instrument Serif", serif;
  
  That's it! You can now use the Instrument Serif font in your app.
   -->
  <div
    class="bg-dark-50 dark:bg-dark-950 relative flex h-full min-h-dvh w-full flex-col items-center justify-center pt-32 pb-4 xl:pt-24"
  >
    <div class="relative z-20 grid w-full grid-cols-12 gap-y-12 md:gap-y-24">
      <div class="col-span-full flex flex-col items-start justify-center px-4">
        <h1
          class="text-dark-900 dark:text-dark-50 mt-4 w-full text-left font-sans text-5xl font-light md:text-7xl"
        >
          Share
          <span class="font-family-instrument inline-block italic">skills</span>
          <br />
          &
          <span class="font-family-instrument inline-block italic">grow</span>
          together
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-4 w-full text-left text-lg leading-8 2xl:text-xl"
        >
          Swap your talents, learn new tricks, and level up—together we grow
          faster!
        </p>
        <div class="mt-4 flex w-auto items-start justify-start gap-2">
          <UButton
            variant="solid"
            color="neutral"
            size="lg"
            class="rounded-full"
          >
            Get started
          </UButton>
          <UButton
            variant="link"
            color="neutral"
            size="lg"
            class="rounded-full"
          >
            Discover more
          </UButton>
        </div>
      </div>
      <div class="col-span-full">
        <div class="flex w-full flex-col gap-4">
          <UMarquee pause-on-hover>
            <div
              class="flex w-full items-center justify-center gap-4 first:ml-0 xl:justify-between xl:first:ml-4"
            >
              <template v-for="(f_image, index) in images" :key="index">
                <NuxtImg
                  class="size-48 object-cover object-center xl:size-52"
                  :src="f_image"
                  loading="lazy"
                  alt="my-photo-work"
                  :placeholder="[50, 25, 75, 5]"
                  format="webp"
                />
              </template>
            </div>
          </UMarquee>
          <UMarquee pause-on-hover reverse>
            <div
              class="flex w-full items-center justify-center gap-4 first:ml-4 xl:first:ml-4"
            >
              <template v-for="(f_image, index) in images" :key="index">
                <NuxtImg
                  class="size-48 object-cover object-center xl:size-52"
                  :src="f_image"
                  loading="lazy"
                  alt="my-photo-work"
                  :placeholder="[50, 25, 75, 5]"
                  format="webp"
                />
              </template>
            </div>
          </UMarquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "https://images.unsplash.com/photo-1557802891-958ecf3d5992?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560135874-bb540cdd5929?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559926431-73aebfacd993?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559762412-627400abeec1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560065569-21beb63d2b0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=1754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
