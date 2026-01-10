# openai - Footers Component

## Component Overview

A minimalist footer inspired by Open AI's design

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
    class="bg-dark-50 dark:bg-dark-950 relative flex h-auto w-full flex-col gap-8 overflow-hidden px-4 py-4"
  >
    <div class="grid grid-cols-12">
      <div class="col-span-full mb-12 md:col-span-8 md:mb-0">
        <NuxtImg
          src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="h-10 object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
          format="webp"
        />
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in api_navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-1">
        <ul
          class="col-span-full flex flex-col pb-4 sm:col-span-4 lg:col-span-2"
        >
          <template v-for="(nav, index) in other_navigation" :key="index">
            <li
              class="text-dark-950 dark:text-dark-50 font-family-inter mb-1 text-sm capitalize"
            >
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton
                :to="inner_link.link"
                target="_blank"
                variant="link"
                color="neutral"
                size="sm"
                class="p-0"
              >
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div
      class="border-dark-950/10 dark:border-dark-50/10 mb-12 grid grid-cols-12 border-t pt-2"
    >
      <div class="col-span-6 flex flex-col md:col-span-8">
        <span class="inline-block text-sm font-bold"
          >Spotlight ©2020-2024</span
        >
        <template v-for="(nav, index) in bottom_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            size="sm"
            class="p-0"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
      <div class="col-span-6 flex flex-col gap-x-4 md:col-span-4">
        <template v-for="(nav, index) in social_media_navigation" :key="index">
          <UButton
            :to="nav.link"
            target="_blank"
            variant="link"
            color="neutral"
            size="sm"
            class="p-0"
          >
            {{ nav.label }}
          </UButton>
        </template>
      </div>
    </div>
    <div class="h-full w-full overflow-hidden">
      <svg
        viewBox="0 0 1920 1080"
        class="fill-dark-950 dark:fill-dark-50 h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1920V1H0V0Z" />
        <path d="M0 11H1920V15.18H0V11Z" />
        <path d="M0 25.1802H1920V33.3602H0V25.1802Z" />
        <path d="M0 43.3599H1920V55.5399H0V43.3599Z" />
        <path d="M0 65.54H1920V81.72H0V65.54Z" />
        <path d="M0 91.7202H1920V111.9H0V91.7202Z" />
        <path d="M0 121.9H1920V146.08H0V121.9Z" />
        <path d="M0 156.08H1920V184.26H0V156.08Z" />
        <path d="M0 194.26H1920V226.44H0V194.26Z" />
        <path d="M0 236.44H1920V272.62H0V236.44Z" />
        <path d="M0 282.62H1920V322.8H0V282.62Z" />
        <path d="M0 332.8H1920V376.98H0V332.8Z" />
        <path d="M0 386.98H1920V435.16H0V386.98Z" />
        <path d="M0 445.16H1920V674H0V445.16Z" />
        <path d="M0 684H1920V1080H0V684Z" />
      </svg>
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
const api_navigation = [
  {
    label: "API",
    links: [
      {
        label: "Documentation",
        link: "#",
      },
      {
        label: "API Keys",
        link: "#",
      },
      {
        label: "Rate Limits",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
    ],
  },
];
const social_media_navigation = [
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
];
const bottom_navigation = [
  {
    label: "Privacy policy",
    link: "#",
  },
  {
    label: "Terms & policies",
    link: "#",
  },
  {
    label: "Brand",
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
