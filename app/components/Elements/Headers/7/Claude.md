# agency - Headers Component

## Component Overview

A modern agency header design that incorporates a menu and a brief portfolio showcase

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

You are helping to implement a headers component for a **Nuxt 4** landing page. This component should:

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
  <div class="relative w-full">
    <header
      class="bg-dark-50 dark:bg-dark-950 relative z-20 flex h-16 w-full items-center justify-between gap-4 rounded-xl px-4 lg:justify-start"
    >
      <div class="size-8 min-w-8">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="size-full object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <nav
        class="relative z-10 hidden items-center justify-start gap-2 lg:flex"
      >
        <UButton variant="link" color="neutral" size="lg" to="#">
          Home
        </UButton>
        <UButton
          @click="showMenu = !showMenu"
          variant="link"
          color="neutral"
          size="lg"
        >
          <template #trailing>
            <UIcon
              v-if="showMenu"
              name="i-heroicons-chevron-up"
              class="size-4"
            />
            <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
          </template>
          Services
        </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#">
          Tools
        </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#">
          Contact
        </UButton>
      </nav>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <UButton
          color="neutral"
          icon="i-heroicons-bars-3"
          variant="link"
          size="xl"
          class="inline-block lg:hidden"
        />
        <template #body>
          <nav
            class="relative z-10 flex flex-col items-center justify-start gap-2"
          >
            <UButton variant="link" color="neutral" size="lg" to="#">
              Home
            </UButton>
            <UCollapsible class="w-auto">
              <UButton variant="soft" color="neutral" size="lg">
                Services
                <template #trailing>
                  <UIcon
                    v-if="showMenu"
                    name="i-heroicons-chevron-up"
                    class="size-4"
                  />
                  <UIcon
                    v-else
                    name="i-heroicons-chevron-down"
                    class="size-4"
                  />
                </template>
              </UButton>
              <template #content>
                <div class="flex w-full flex-col gap-y-2">
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Development
                  </UButton>
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Design
                  </UButton>
                  <UButton
                    variant="link"
                    color="neutral"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Mobile Apps
                  </UButton>
                </div>
              </template>
            </UCollapsible>
            <UButton variant="link" color="neutral" size="lg" to="#">
              Tools
            </UButton>
            <UButton variant="link" color="neutral" size="lg" to="#">
              Contact
            </UButton>
          </nav>
        </template>
      </USlideover>
    </header>
    <Transition
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500"
      leave-from-class="opacity-100 "
      leave-to-class="opacity-0 -translate-y-2"
      mode="out-in"
    >
      <div
        v-if="showMenu"
        class="bg-dark-100 dark:border-dark-950/50 dark:bg-dark-900 absolute top-0 left-0 z-10 hidden h-72 w-full rounded-xl border px-4 pt-16 lg:flex"
      >
        <div class="flex w-3/5 items-center">
          <template v-for="(service, index) in services" :key="index">
            <div class="flex flex-col gap-y-2">
              <div
                class="border-dark-950/20 bg-dark-200/20 dark:border-dark-700 dark:bg-dark-800 flex size-8 items-center justify-center rounded-md border p-1"
              >
                <UIcon
                  :name="service.icon"
                  class="text-dark-950 dark:text-dark-50 size-full"
                />
              </div>
              <span class="text-dark-950 dark:text-dark-50 text-base font-bold">
                {{ service.name }}
              </span>
              <p
                class="text-dark-950/60 dark:text-dark-50/60 w-4/5 text-sm font-normal"
              >
                {{ service.description }}
              </p>
            </div>
          </template>
        </div>
        <div class="w-2/5 pt-4">
          <div
            class="bg-primary-200 dark:bg-primary-700 h-full w-full overflow-hidden rounded-t-xl p-4"
          >
            <span class="text-dark-950 dark:text-dark-50 text-base font-bold">
              Explore Our Services
            </span>
            <p
              class="text-dark-950/60 dark:text-dark-50/60 w-4/5 text-sm font-normal"
            >
              Discover how our services can help you achieve your business
              goals.
            </p>
            <div class="mt-6 flex h-full">
              <template v-for="(image, index) in images">
                <div
                  class="flex-1 rotate-4 transform-gpu overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-4 hover:rotate-0"
                >
                  <NuxtImg
                    :src="image"
                    class="h-full w-full object-cover object-center"
                    loading="lazy"
                    alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]"
                    format="webp"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const images = [
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const services = ref([
  {
    icon: "i-heroicons-command-line",
    name: "Development",
    description:
      "Our development services focus on crafting scalable, efficient, and user-friendly solutions tailored to your business needs.",
  },
  {
    icon: "i-heroicons-swatch",
    name: "Design",
    description:
      "Our design team creates visually stunning and intuitive interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    name: "Mobile Apps",
    description:
      "We develop mobile applications that are fast, secure, and optimized for both iOS and Android platforms.",
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
