# space - Hero Component

## Component Overview

A hero section featuring a title, description, and a primary gradient call-to-action button

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
    class="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-dark-50 dark:bg-dark-950"
  >
    <!-- SVG Container -->
    <div
      class="absolute z-10 h-dvh w-[820px] pt-24 opacity-70 saturate-200 md:w-[1080px] lg:w-full lg:pt-[400px] xl:pt-0 dark:opacity-90"
    >
      <svg
        class="h-full w-full"
        viewBox="0 0 1834 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3106_1413)">
          <path
            class="fill-primary-500"
            d="M2043.57 646.103C1998.53 578.986 1921.39 545.06 1845.18 558.851L759.526 755.313C541.677 794.736 536.297 1124.82 752.689 1174.82L2193.64 1507.76C2373.22 1549.25 2505.73 1334.72 2398.87 1175.5L2043.57 646.103Z"
          />
        </g>
        <g filter="url(#filter1_f_3106_1413)">
          <path
            class="fill-primary-400"
            d="M2023.6 770.094C1978.55 702.977 1901.41 669.051 1825.2 682.842L739.547 879.304C521.698 918.727 516.318 1248.82 732.71 1298.81L2173.66 1631.75C2353.24 1673.24 2485.75 1458.71 2378.89 1299.49L2023.6 770.094Z"
          />
        </g>
        <g
          style="mix-blend-mode: plus-lighter"
          filter="url(#filter2_f_3106_1413)"
        >
          <path
            class="fill-white"
            d="M1900.49 905.625C1837.91 854.458 1754.25 844.366 1685.31 879.668L703.319 1382.59C506.27 1483.5 596.866 1800.96 818.457 1786.04L2294.03 1686.71C2477.92 1674.33 2542.51 1430.59 2394.07 1309.21L1900.49 905.625Z"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3106_1413"
            x="0.827881"
            y="-36.5913"
            width="3028.72"
            height="2141.98"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="296.204"
              result="effect1_foregroundBlur_3106_1413"
            />
          </filter>
          <filter
            id="filter1_f_3106_1413"
            x="217.812"
            y="324.363"
            width="2554.79"
            height="1668.05"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="177.722"
              result="effect1_foregroundBlur_3106_1413"
            />
          </filter>
          <filter
            id="filter2_f_3106_1413"
            x="239.247"
            y="503.372"
            width="2592.35"
            height="1638.62"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="177.722"
              result="effect1_foregroundBlur_3106_1413"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="relative z-30">
      <div class="flex flex-col items-center justify-center px-4">
        <!-- You can change the gradient color and direction easy in https://www.onamu.dev/ -->
        <h1
          class="via-primary-900/90 to-primary-600/90 dark:via-primary-200/90 dark:to-primary-400/90 font-family-inter mt-4 bg-gradient-to-br from-dark-950/90 from-55% via-70% to-85% bg-clip-text text-center text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl dark:from-dark-50/90"
        >
          Embark on a Journey to <br />
          Space Exploration
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/60 mt-4 w-full text-center text-lg leading-8 md:w-3/5 2xl:text-xl"
        >
          Join our startup and experience the thrill of traveling to space with
          our innovative solutions.
        </p>
        <div class="mt-4 flex gap-4">
          <UButton
            variant="solid"
            color="neutral"
            to="#"
            size="lg"
            class="px-12"
            icon="i-heroicons-rocket-launch-solid"
          >
            Launch rocket
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
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
