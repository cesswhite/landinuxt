# luxury - Hero Component

## Component Overview

This hero section features a carousel that displays a full image of the service. The minimal and blurred menu allows for easy navigation and search, with options to select hotels and luxury services.

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
  <div
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full items-center justify-center overflow-x-hidden"
  >
    <UCarousel
      v-slot="{ item }"
      loop
      fade
      :autoplay="{ delay: 5000 }"
      :items="images"
      :ui="{ container: 'h-full', item: 'basis-full h-dvh ?' }"
    >
      <NuxtImg
        class="h-full w-full object-cover object-center"
        :src="item"
        height="1024"
        width="1920"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </UCarousel>
    <div class="absolute mx-auto">
      <UContainer>
        <h1
          class="text-dark-50 leading-12 text-center text-6xl font-medium tracking-tighter"
        >
          Experience Luxury <br />
          In All Its Glory
        </h1>
        <div class="mt-32">
          <div
            class="bg-dark-50/10 dark:bg-dark-950/50 grid w-full grid-cols-12 gap-4 rounded-full p-4 backdrop-blur-sm"
          >
            <div class="col-span-3">
              <USelect
                v-model="hotel"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_hotel"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <USelect
                v-model="city"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_city"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <USelect
                v-model="location"
                size="lg"
                icon="i-lucide-hotel"
                :items="items_location"
                :ui="{
                  leadingIcon: 'shrink-0 text-dark-50/80',
                  content:
                    'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50',
                }"
                class="bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70 w-full rounded-full"
              />
            </div>
            <div class="col-span-3">
              <UButton size="lg" block class="rounded-full">
                Find property
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const items_hotel = ref(["Hilton", "Marriott", "Hyatt", "Ritz-Carlton"]);
const hotel = ref(items_hotel.value[0]);

const items_city = ref(["New York", "Los Angeles", "Chicago", "Miami"]);
const city = ref(items_city.value[0]);

const items_location = ref(["Downtown", "Airport", "Suburbs", "Beachfront"]);
const location = ref(items_location.value[0]);

const images = ref([
  "https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
