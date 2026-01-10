# Required Technical Skills

This document outlines the technical knowledge and skills required to successfully implement this component. Ensure you have proficiency in these areas before beginning implementation.

## Core Framework Knowledge

### Vue 3 (Essential)
- **Composition API**: Deep understanding of `setup()`, `ref()`, `reactive()`, `computed()`, `watch()`, `watchEffect()`
- **Script Setup Syntax**: Mastery of `<script setup lang="ts">` syntax, including:
  - Automatic return of variables and functions to template
  - Top-level await support
  - Props and emits definition using `defineProps()` and `defineEmits()`
  - Expose API with `defineExpose()`
- **Template Syntax**: 
  - Directives: `v-if`, `v-for`, `v-show`, `v-bind`, `v-on`, `v-model`
  - Template refs: `ref` attribute and `$refs` access
  - Slots: default slots, named slots, scoped slots
  - Dynamic components: `<component :is="">`
- **Reactivity System**: 
  - Understanding of reactive proxies
  - Shallow vs deep reactivity
  - Ref unwrapping in templates
  - Reactive object limitations

### Nuxt 4 (Essential)
- **File-based Routing**: Understanding of `app/pages/` directory structure and dynamic routes
- **Auto-imports**: Knowledge of what's auto-imported (composables, components, utilities)
- **Composables**: 
  - `useState()` for reactive state management
  - `useRoute()`, `useRouter()` for navigation
  - `useFetch()`, `useAsyncData()` for data fetching
  - `useSeoMeta()`, `useHead()` for SEO
  - `useRuntimeConfig()` for configuration
- **Server-Side Rendering (SSR)**: Understanding of hydration, server/client context differences
- **Directory Structure**: Knowledge of `app/`, `server/`, `public/`, `assets/` directories
- **Configuration**: `nuxt.config.ts` setup, module registration, runtime config
- **Build System**: Understanding of Vite/Rspack bundling, code splitting, and optimization

### Nuxt UI v4 (Essential)
- **Component Library**: Proficiency with component props, slots, and events:
  - `UButton`: variants, sizes, colors, icons, loading states
  - `NuxtImg`: optimization, lazy loading, placeholders, formats
  - `USlideover`, `UModal`: programmatic control, slots, events
  - `UCard`, `UBadge`, `UIcon`: styling and customization
  - `UInput`, `UTextarea`, `USelect`: form components
- **Auto-imports**: Understanding that Nuxt UI components are globally available
- **Theme System**: Color mode, custom colors, dark mode integration
- **Composables**: `useToast()`, `useOverlay()` for programmatic UI control

### Tailwind CSS v4 (Essential)
- **Utility-First Approach**: Understanding of utility classes vs component classes
- **Responsive Design**: 
  - Breakpoint system: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
  - Mobile-first methodology
  - Container queries (if used)
- **Dark Mode**: 
  - `dark:` variant usage
  - Color mode integration with Nuxt Color Mode
- **Layout Utilities**: 
  - Flexbox: `flex`, `items-center`, `justify-between`, `gap-*`
  - Grid: `grid`, `grid-cols-*`, `gap-*`
  - Positioning: `relative`, `absolute`, `fixed`, `sticky`
  - Spacing: `p-*`, `m-*`, `space-*`
- **Typography**: `text-*`, `font-*`, `leading-*`, `tracking-*`
- **Custom Utilities**: Understanding of arbitrary values: `w-[100px]`, `bg-[#ff0000]`
- **CSS Functions**: `calc()`, custom properties integration

## Advanced Technical Skills

### TypeScript (Highly Recommended)
- **Type Definitions**: 
  - Interface and type aliases
  - Generic types
  - Utility types: `Partial<>`, `Pick<>`, `Omit<>`, `Record<>`
- **Vue-Specific Types**: 
  - `Ref<>`, `ComputedRef<>`, `MaybeRef<>`
  - Component props typing with `defineProps<>()`
  - Emit event typing with `defineEmits<>()`
- **Type Inference**: Understanding of TypeScript's type inference in Vue components
- **Type Safety**: Proper typing for composables, API responses, and component props

### Modern CSS (Essential)
- **Flexbox**: 
  - Container properties: `display: flex`, `flex-direction`, `flex-wrap`
  - Item properties: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`
  - Alignment: `justify-content`, `align-items`, `align-content`
- **CSS Grid**: 
  - Grid container: `grid-template-columns`, `grid-template-rows`, `gap`
  - Grid items: `grid-column`, `grid-row`, `grid-area`
- **Gradients**: Linear and radial gradients, gradient stops, color transitions
- **Transitions & Animations**: 
  - CSS transitions: `transition-property`, `transition-duration`, `transition-timing-function`
  - CSS animations: `@keyframes`, `animation-*` properties
  - Vue transitions: `<Transition>`, `<TransitionGroup>` components
- **Positioning**: Understanding of stacking context, z-index, and positioning contexts
- **Viewport Units**: `vh`, `vw`, `vmin`, `vmax`, `dvh`, `dvw` (dynamic viewport units)

### Responsive Design (Essential)
- **Mobile-First Methodology**: Starting with mobile styles and progressively enhancing
- **Breakpoint Strategy**: Understanding when and how to use breakpoints
- **Flexible Layouts**: 
  - Fluid typography: `clamp()`, viewport-based units
  - Flexible images: `object-fit`, `object-position`
  - Container queries (modern approach)
- **Touch Targets**: Minimum 44x44px for interactive elements
- **Viewport Meta**: Proper viewport configuration for responsive behavior

### Accessibility (WCAG 2.1 Compliance)
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **ARIA Attributes**: 
  - `aria-label`, `aria-labelledby`, `aria-describedby`
  - `aria-hidden`, `aria-live`, `aria-atomic`
  - `role` attributes when semantic HTML isn't sufficient
- **Keyboard Navigation**: 
  - Tab order management
  - Focus management: `tabindex`, focus traps
  - Keyboard event handling: `@keydown`, `@keyup`
- **Screen Reader Support**: 
  - Alt text for images
  - Descriptive link text
  - Form label associations
- **Color Contrast**: WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)

### Performance Optimization
- **Image Optimization**: 
  - Lazy loading strategies
  - Responsive images: `srcset`, `sizes`
  - Modern formats: WebP, AVIF
  - Placeholder strategies
- **Code Splitting**: Understanding of dynamic imports, route-based splitting
- **Bundle Optimization**: Tree-shaking, dead code elimination
- **Caching Strategies**: Browser caching, CDN caching, service workers
- **Critical CSS**: Above-the-fold CSS optimization

### Component Architecture
- **Single File Components (SFC)**: 
  - Template, script, and style sections
  - Scoped styles: `<style scoped>`
  - CSS modules (if used)
- **Props & Emits**: 
  - Prop validation and default values
  - Event emission patterns
  - Two-way binding with `v-model`
- **Slots**: 
  - Default slots
  - Named slots
  - Scoped slots for data passing
- **Composition Patterns**: 
  - Composable functions for reusable logic
  - Separation of concerns
  - Component composition vs inheritance

## Development Tools & Workflow

### Code Quality
- **Linting**: ESLint configuration, Vue-specific rules
- **Formatting**: Prettier configuration, code style consistency
- **Type Checking**: TypeScript compiler, type errors resolution

## Best Practices & Patterns

### Code Organization
- **File Naming**: Consistent naming conventions (kebab-case for files, PascalCase for components)
- **Directory Structure**: Logical organization of components, composables, utilities
- **Code Reusability**: DRY principle, composable extraction, component abstraction

### Performance Best Practices
- **Lazy Loading**: Components, images, routes
- **Memoization**: `computed()` for expensive calculations
- **Debouncing/Throttling**: For event handlers and API calls
- **Virtual Scrolling**: For long lists (if applicable)

### Security
- **XSS Prevention**: Sanitizing user input, avoiding `v-html` with untrusted content
- **CSRF Protection**: Understanding of token-based authentication
- **Content Security Policy**: CSP headers configuration

### Testing (Recommended)
- **Unit Testing**: Component testing with Vitest/Vue Test Utils
- **E2E Testing**: Playwright/Cypress for integration testing
- **Accessibility Testing**: Automated a11y testing tools

## Skill Assessment

Before implementing this component, ensure you can:
- ✅ Create a Vue 3 component using Composition API and `<script setup>`
- ✅ Use Nuxt 4 composables for routing, state, and data fetching
- ✅ Style components using Tailwind CSS v4 utility classes
- ✅ Implement responsive designs with mobile-first approach
- ✅ Add dark mode support using Tailwind's `dark:` variant
- ✅ Use Nuxt UI v4 components with proper props and slots
- ✅ Optimize images using `NuxtImg` component
- ✅ Write accessible HTML with proper ARIA attributes
- ✅ Type components and composables with TypeScript
- ✅ Debug and troubleshoot Vue/Nuxt applications

If you lack proficiency in any of these areas, refer to the official documentation links provided in the `llms.txt` file before beginning implementation.
