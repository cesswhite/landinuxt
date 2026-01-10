# grid - Footers Component

## Component Overview

This footer component showcases a description, a mini logo, columns, all organized within a grid layout with borders.

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
    <div class="border-dark-950 dark:border-dark-50 grid grid-cols-12 border">
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex flex-col items-start justify-start gap-y-4 border-b p-8 lg:col-span-6 lg:border-r lg:border-b-0"
      >
        <div class="mx-auto h-10 md:mx-0">
          <NuxtImg
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
            class="size-full object-contain object-center"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
        <p class="text-dark-950/70 dark:text-dark-50/70 w-full md:pr-44">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui
          vero nihil laudantium? Nemo reiciendis asperiores quidem ducimus
          corrupti incidunt porro ad itaque natus, quisquam commodi, ipsa vitae
          nulla ex!
        </p>
      </div>
      <ul
        class="border-dark-950 dark:border-dark-50 col-span-full flex flex-col gap-y-4 pb-4 sm:col-span-4 sm:border-r lg:col-span-2"
      >
        <template v-for="(nav, index) in navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="border-dark-950 dark:border-dark-50 dark:border-dark-50 col-span-full flex flex-col gap-y-4 border-t pb-4 sm:col-span-4 sm:border-t-0 sm:border-r lg:col-span-2"
      >
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <ul
        class="col-span-full flex flex-col gap-y-4 border-t pb-4 sm:col-span-4 sm:border-t-0 lg:col-span-2"
      >
        <template v-for="(nav, index) in other_navigation" :key="index">
          <li
            class="text-dark-950 dark:text-dark-50 font-family-inter border-dark-950 dark:border-dark-50 border-b p-4 text-base capitalize uppercase"
          >
            {{ nav.label }}
          </li>
          <li
            v-for="(inner_link, _index) in nav.links"
            :key="_index"
            class="px-4"
          >
            <UButton
              :to="inner_link.link"
              target="_blank"
              variant="link"
              color="neutral"
              size="md"
              class="p-0 uppercase"
            >
              {{ inner_link.label }}
            </UButton>
          </li>
        </template>
      </ul>
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex w-full flex-col items-center justify-center gap-4 border-t py-4 md:flex-row"
      >
        <template v-for="(nav, index) in bottom_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            class="p-0 uppercase"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
      <div
        class="border-dark-950 dark:border-dark-50 col-span-full flex w-full flex-col items-center justify-center gap-4 border-t p-4 md:flex-row"
      >
        <div
          class="text-dark-950/70 dark:text-dark-50/70 flex items-center justify-start text-center text-sm uppercase"
        >
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </div>
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

const bottom_navigation = [
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Terms & Conditions",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Website",
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
