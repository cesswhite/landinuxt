# big - Footers Component

## Component Overview

This footer component displays a large logo and a description of the brand. It is organized into columns with links for easy navigation.

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

You are helping to implement a footers component for a **Nuxt 4** landing page. This component should:

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
  <footer
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col overflow-hidden px-4 py-2"
  >
    <div class="grid w-full grid-cols-12">
      <div
        class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-6"
      >
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="h-6 object-contain object-center md:h-10"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
        <p
          class="text-dark-950/50 dark:text-dark-50/50 font-family-inter inline-block w-full text-sm md:w-1/2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae
          labore accusamus perspiciatis quasi aperiam amet voluptatibus vero
          quidem consectetur architecto dolore quaerat, ad id facilis eligendi
          totam, quas maiores!
        </p>
        <div class="">
          <UButton
            icon="i-heroicons-arrow-right"
            trailing
            variant="link"
            color="primary"
            class="p-0"
          >
            Learn more about us
          </UButton>
        </div>
        <div
          class="text-dark-950/50 dark:text-dark-50/50 flex items-center justify-start text-sm"
        >
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </div>
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter mb-3 text-base capitalize"
          >
            {{ nav.label }}
          </li>
          <li v-for="(inner_link, _index) in nav.links" :key="_index">
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="lg"
              class="p-0 hover:underline"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
    </div>

    <div class="relative -bottom-4 mt-44 w-full">
      <div
        class="from-dark-50 dark:from-dark-950 absolute size-full bg-gradient-to-t from-25%"
      />
      <NuxtImg
        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/logo-neutral_q3bdxv.webp"
        class="size-full object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
        format="webp"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
const navigation = [
  {
    label: "Services",
    links: [
      {
        label: "Development",
        link: "#",
      },
      {
        label: "Design",
        link: "#",
      },
      {
        label: "Mobile Apps",
        link: "#",
      },
      {
        label: "Imagene Data",
        link: "#",
      },
    ],
  },
];

const other_navigation = [
  {
    label: "Company",
    links: [
      {
        label: "About",
        link: "#",
      },
      {
        label: "Website",
        link: "#",
      },
      {
        label: "Brand",
        link: "#",
      },
      {
        label: "Gallery",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
      {
        label: "Services",
        link: "#",
      },
      {
        label: "Careers",
        link: "#",
      },
    ],
  },
];

const social_media_navigation = [
  {
    label: "Social Media",
    links: [
      {
        label: "X",
        link: "https://x.com/",
      },
      {
        label: "Instagram",
        link: "https://instagram.com/",
      },
      {
        label: "Facebook",
        link: "https://facebook.com/",
      },
      {
        label: "LinkedIn",
        link: "https://linkedin.com/",
      },
      {
        label: "YouTube",
        link: "https://youtube.com/",
      },
      {
        label: "GitHub",
        link: "https://github.com/",
      },
    ],
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
