# grid - Gallery Component

## Component Overview

A responsive grid gallery with lightbox functionality. Perfect for showcasing portfolios, images, or visual content with hover effects and modal viewing.

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

You are helping to implement a gallery component for a **Nuxt 4** landing page. This component should:

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
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-24">
    <UContainer>
      <div class="flex flex-col items-center justify-center gap-y-2 mb-12">
        <UBadge variant="soft" class="bg-transparent text-center" size="lg">
          Our Portfolio
        </UBadge>
        <h1
          class="text-dark-900 dark:text-dark-100 text-center text-4xl font-semibold sm:text-4xl md:text-5xl"
        >
          Explore Our Gallery
        </h1>
        <p
          class="text-dark-900/60 dark:text-dark-50/60 mt-2 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Discover our collection of stunning visuals and creative works
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="(image, index) in images" :key="index">
          <div
            class="group relative overflow-hidden rounded-lg cursor-pointer"
            @click="openLightbox(index)"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              :placeholder="[50, 25, 75, 5]"
              format="webp"
            />
            <div
              class="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300 flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-magnifying-glass-plus"
                class="text-dark-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-8"
              />
            </div>
          </div>
        </template>
      </div>
    </UContainer>
    <UModal v-model="isLightboxOpen" :ui="{ width: 'max-w-7xl' }">
      <div class="relative">
        <UButton
          @click="isLightboxOpen = false"
          icon="i-heroicons-x-mark"
          variant="ghost"
          color="neutral"
          class="absolute right-2 top-2 z-10"
        />
        <NuxtImg
          v-if="currentImage"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="w-full h-auto object-contain"
          format="webp"
        />
        <div
          v-if="images.length > 1"
          class="flex items-center justify-between mt-4"
        >
          <UButton
            @click="previousImage"
            icon="i-heroicons-chevron-left"
            variant="soft"
            :disabled="currentIndex === 0"
          />
          <span class="text-sm text-dark-950/60 dark:text-dark-50/60">
            {{ currentIndex + 1 }} / {{ images.length }}
          </span>
          <UButton
            @click="nextImage"
            icon="i-heroicons-chevron-right"
            variant="soft"
            :disabled="currentIndex === images.length - 1"
          />
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert landscape with sand dunes",
  },
  {
    src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cacti in desert",
  },
  {
    src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ocean view",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Forest path",
  },
];

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => {
  return images[currentIndex.value];
});

function openLightbox(index: number) {
  currentIndex.value = index;
  isLightboxOpen.value = true;
}

function nextImage() {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value++;
  }
}

function previousImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
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
