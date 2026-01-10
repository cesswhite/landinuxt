import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

// GitHub repository configuration
const GITHUB_REPO = 'cesswhite/landingnuxt'
const GITHUB_BRANCH = 'feat/add-llm-instructions'
const GITHUB_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`

function extractVueCode(vueContent: string): string {
  const templateMatch = vueContent.match(/<template>([\s\S]*?)<\/template>/)
  return templateMatch ? templateMatch[1].trim() : vueContent
}

function extractMarkdownCode(mdContent: string): string {
  const codeBlockMatch = mdContent.match(/```vue\n([\s\S]*?)```/)
  if (codeBlockMatch) {
    return codeBlockMatch[1].trim()
  }
  return ''
}

function findImagePath(category: string, componentNumber: string): { local: string; github: string } | null {
  const categoryLower = category.toLowerCase()
  const publicDir = join(process.cwd(), 'public/components')
  const imageDir = join(publicDir, categoryLower)
  
  if (!existsSync(imageDir)) {
    return null
  }

  const files = readdirSync(imageDir)
  const imagePattern = new RegExp(`^${componentNumber}\\.`)
  const imageFile = files.find(file => imagePattern.test(file) && /\.(png|jpg|jpeg|webp)$/i.test(file))
  
  if (!imageFile) {
    return null
  }

  const localPath = `/components/${categoryLower}/${imageFile}`
  const githubUrl = `${GITHUB_BASE_URL}/public${localPath}`
  
  return { local: localPath, github: githubUrl }
}

function generateSkillsFile(): string {
  return `# Required Technical Skills

This document outlines the technical knowledge and skills required to successfully implement this component. Ensure you have proficiency in these areas before beginning implementation.

## Core Framework Knowledge

### Vue 3 (Essential)
- **Composition API**: Deep understanding of \`setup()\`, \`ref()\`, \`reactive()\`, \`computed()\`, \`watch()\`, \`watchEffect()\`
- **Script Setup Syntax**: Mastery of \`<script setup lang="ts">\` syntax, including:
  - Automatic return of variables and functions to template
  - Top-level await support
  - Props and emits definition using \`defineProps()\` and \`defineEmits()\`
  - Expose API with \`defineExpose()\`
- **Template Syntax**: 
  - Directives: \`v-if\`, \`v-for\`, \`v-show\`, \`v-bind\`, \`v-on\`, \`v-model\`
  - Template refs: \`ref\` attribute and \`$refs\` access
  - Slots: default slots, named slots, scoped slots
  - Dynamic components: \`<component :is="">\`
- **Reactivity System**: 
  - Understanding of reactive proxies
  - Shallow vs deep reactivity
  - Ref unwrapping in templates
  - Reactive object limitations

### Nuxt 4 (Essential)
- **File-based Routing**: Understanding of \`app/pages/\` directory structure and dynamic routes
- **Auto-imports**: Knowledge of what's auto-imported (composables, components, utilities)
- **Composables**: 
  - \`useState()\` for reactive state management
  - \`useRoute()\`, \`useRouter()\` for navigation
  - \`useFetch()\`, \`useAsyncData()\` for data fetching
  - \`useSeoMeta()\`, \`useHead()\` for SEO
  - \`useRuntimeConfig()\` for configuration
- **Server-Side Rendering (SSR)**: Understanding of hydration, server/client context differences
- **Directory Structure**: Knowledge of \`app/\`, \`server/\`, \`public/\`, \`assets/\` directories
- **Configuration**: \`nuxt.config.ts\` setup, module registration, runtime config
- **Build System**: Understanding of Vite/Rspack bundling, code splitting, and optimization

### Nuxt UI v4 (Essential)
- **Component Library**: Proficiency with component props, slots, and events:
  - \`UButton\`: variants, sizes, colors, icons, loading states
  - \`NuxtImg\`: optimization, lazy loading, placeholders, formats
  - \`USlideover\`, \`UModal\`: programmatic control, slots, events
  - \`UCard\`, \`UBadge\`, \`UIcon\`: styling and customization
  - \`UInput\`, \`UTextarea\`, \`USelect\`: form components
- **Auto-imports**: Understanding that Nuxt UI components are globally available
- **Theme System**: Color mode, custom colors, dark mode integration
- **Composables**: \`useToast()\`, \`useOverlay()\` for programmatic UI control

### Tailwind CSS v4 (Essential)
- **Utility-First Approach**: Understanding of utility classes vs component classes
- **Responsive Design**: 
  - Breakpoint system: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`
  - Mobile-first methodology
  - Container queries (if used)
- **Dark Mode**: 
  - \`dark:\` variant usage
  - Color mode integration with Nuxt Color Mode
- **Layout Utilities**: 
  - Flexbox: \`flex\`, \`items-center\`, \`justify-between\`, \`gap-*\`
  - Grid: \`grid\`, \`grid-cols-*\`, \`gap-*\`
  - Positioning: \`relative\`, \`absolute\`, \`fixed\`, \`sticky\`
  - Spacing: \`p-*\`, \`m-*\`, \`space-*\`
- **Typography**: \`text-*\`, \`font-*\`, \`leading-*\`, \`tracking-*\`
- **Custom Utilities**: Understanding of arbitrary values: \`w-[100px]\`, \`bg-[#ff0000]\`
- **CSS Functions**: \`calc()\`, custom properties integration

## Advanced Technical Skills

### TypeScript (Highly Recommended)
- **Type Definitions**: 
  - Interface and type aliases
  - Generic types
  - Utility types: \`Partial<>\`, \`Pick<>\`, \`Omit<>\`, \`Record<>\`
- **Vue-Specific Types**: 
  - \`Ref<>\`, \`ComputedRef<>\`, \`MaybeRef<>\`
  - Component props typing with \`defineProps<>()\`
  - Emit event typing with \`defineEmits<>()\`
- **Type Inference**: Understanding of TypeScript's type inference in Vue components
- **Type Safety**: Proper typing for composables, API responses, and component props

### Modern CSS (Essential)
- **Flexbox**: 
  - Container properties: \`display: flex\`, \`flex-direction\`, \`flex-wrap\`
  - Item properties: \`flex-grow\`, \`flex-shrink\`, \`flex-basis\`, \`align-self\`
  - Alignment: \`justify-content\`, \`align-items\`, \`align-content\`
- **CSS Grid**: 
  - Grid container: \`grid-template-columns\`, \`grid-template-rows\`, \`gap\`
  - Grid items: \`grid-column\`, \`grid-row\`, \`grid-area\`
- **Gradients**: Linear and radial gradients, gradient stops, color transitions
- **Transitions & Animations**: 
  - CSS transitions: \`transition-property\`, \`transition-duration\`, \`transition-timing-function\`
  - CSS animations: \`@keyframes\`, \`animation-*\` properties
  - Vue transitions: \`<Transition>\`, \`<TransitionGroup>\` components
- **Positioning**: Understanding of stacking context, z-index, and positioning contexts
- **Viewport Units**: \`vh\`, \`vw\`, \`vmin\`, \`vmax\`, \`dvh\`, \`dvw\` (dynamic viewport units)

### Responsive Design (Essential)
- **Mobile-First Methodology**: Starting with mobile styles and progressively enhancing
- **Breakpoint Strategy**: Understanding when and how to use breakpoints
- **Flexible Layouts**: 
  - Fluid typography: \`clamp()\`, viewport-based units
  - Flexible images: \`object-fit\`, \`object-position\`
  - Container queries (modern approach)
- **Touch Targets**: Minimum 44x44px for interactive elements
- **Viewport Meta**: Proper viewport configuration for responsive behavior

### Accessibility (WCAG 2.1 Compliance)
- **Semantic HTML**: Proper use of \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<footer>\`
- **ARIA Attributes**: 
  - \`aria-label\`, \`aria-labelledby\`, \`aria-describedby\`
  - \`aria-hidden\`, \`aria-live\`, \`aria-atomic\`
  - \`role\` attributes when semantic HTML isn't sufficient
- **Keyboard Navigation**: 
  - Tab order management
  - Focus management: \`tabindex\`, focus traps
  - Keyboard event handling: \`@keydown\`, \`@keyup\`
- **Screen Reader Support**: 
  - Alt text for images
  - Descriptive link text
  - Form label associations
- **Color Contrast**: WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)

### Performance Optimization
- **Image Optimization**: 
  - Lazy loading strategies
  - Responsive images: \`srcset\`, \`sizes\`
  - Modern formats: WebP, AVIF
  - Placeholder strategies
- **Code Splitting**: Understanding of dynamic imports, route-based splitting
- **Bundle Optimization**: Tree-shaking, dead code elimination
- **Caching Strategies**: Browser caching, CDN caching, service workers
- **Critical CSS**: Above-the-fold CSS optimization

### Component Architecture
- **Single File Components (SFC)**: 
  - Template, script, and style sections
  - Scoped styles: \`<style scoped>\`
  - CSS modules (if used)
- **Props & Emits**: 
  - Prop validation and default values
  - Event emission patterns
  - Two-way binding with \`v-model\`
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
- **Memoization**: \`computed()\` for expensive calculations
- **Debouncing/Throttling**: For event handlers and API calls
- **Virtual Scrolling**: For long lists (if applicable)

### Security
- **XSS Prevention**: Sanitizing user input, avoiding \`v-html\` with untrusted content
- **CSRF Protection**: Understanding of token-based authentication
- **Content Security Policy**: CSP headers configuration

### Testing (Recommended)
- **Unit Testing**: Component testing with Vitest/Vue Test Utils
- **E2E Testing**: Playwright/Cypress for integration testing
- **Accessibility Testing**: Automated a11y testing tools

## Skill Assessment

Before implementing this component, ensure you can:
- ✅ Create a Vue 3 component using Composition API and \`<script setup>\`
- ✅ Use Nuxt 4 composables for routing, state, and data fetching
- ✅ Style components using Tailwind CSS v4 utility classes
- ✅ Implement responsive designs with mobile-first approach
- ✅ Add dark mode support using Tailwind's \`dark:\` variant
- ✅ Use Nuxt UI v4 components with proper props and slots
- ✅ Optimize images using \`NuxtImg\` component
- ✅ Write accessible HTML with proper ARIA attributes
- ✅ Type components and composables with TypeScript
- ✅ Debug and troubleshoot Vue/Nuxt applications

If you lack proficiency in any of these areas, refer to the official documentation links provided in the \`llms.txt\` file before beginning implementation.
`
}

function generateClaudeFile(
  category: string,
  componentNumber: string,
  title: string,
  description: string,
  vueCode: string,
  imageInfo: { local: string; github: string } | null
): string {
  let content = `# ${title} - ${category} Component\n\n`
  content += `## Component Overview\n\n`
  content += `${description}\n\n`
  
  if (imageInfo) {
    content += `## Visual Reference\n\n`
    content += `Reference Image: ${imageInfo.github}\n\n`
    content += `Please analyze the reference image to understand the visual design and layout requirements.\n\n`
  }
  
  content += `## Critical Instructions for Claude\n\n`
  content += `### Step 1: Read the LLM Instructions File\n\n`
  content += `**IMPORTANT**: Before implementing this component, you MUST read and understand the \`llms.txt\` file in this same directory. This file contains:\n\n`
  content += `- Complete implementation rules and guidelines\n`
  content += `- Reference documentation links (Nuxt UI, Nuxt 4, Tailwind CSS v4)\n`
  content += `- Detailed component code reference\n`
  content += `- Step-by-step implementation guide\n`
  content += `- Technical implementation details\n\n`
  content += `**Action Required**: \n`
  content += `1. Locate and read the \`llms.txt\` file in this component's directory\n`
  content += `2. Review all sections, especially "Implementation Rules and Guidelines"\n`
  content += `3. Understand the reference code structure\n`
  content += `4. Note the documentation URLs for reference during implementation\n\n`
  
  content += `### Step 2: Verify Your Skills\n\n`
  content += `**IMPORTANT**: Before starting implementation, review the \`Skills.md\` file in this directory to verify you have the required technical knowledge.\n\n`
  content += `**Action Required**:\n`
  content += `1. Read the \`Skills.md\` file completely\n`
  content += `2. Self-assess your proficiency in each skill area:\n`
  content += `   - Core Framework Knowledge (Vue 3, Nuxt 4, Nuxt UI v4, Tailwind CSS v4)\n`
  content += `   - Advanced Technical Skills (TypeScript, Modern CSS, Responsive Design, Accessibility)\n`
  content += `   - Performance Optimization\n`
  content += `   - Component Architecture\n`
  content += `3. If you lack proficiency in any essential skill, refer to the documentation links in \`llms.txt\` to fill knowledge gaps\n`
  content += `4. Only proceed with implementation once you're confident in your skills\n\n`
  
  content += `### Step 3: Implementation Context\n\n`
  content += `You are helping to implement a ${category.toLowerCase()} component for a **Nuxt 4** landing page. This component should:\n\n`
  content += `- Match the design shown in the reference image exactly\n`
  content += `- Follow the code structure provided in \`llms.txt\`\n`
  content += `- Adhere to all rules and guidelines specified in \`llms.txt\`\n`
  content += `- Use the technical skills outlined in \`Skills.md\`\n\n`
  
  content += `## Implementation Requirements\n\n`
  content += `### Framework & Tools\n`
  content += `1. **Use Nuxt 4** (not Nuxt 3) with Composition API (\`<script setup lang="ts">\`)\n`
  content += `2. **Implement using Nuxt UI v4 components** exclusively\n`
  content += `3. **Apply Tailwind CSS v4 utility classes** for all styling\n`
  content += `4. **Ensure full responsiveness** across all screen sizes (mobile-first)\n`
  content += `5. **Support dark mode** using Tailwind's \`dark:\` prefix\n`
  content += `6. **Include proper accessibility attributes** (ARIA labels, semantic HTML)\n`
  content += `7. **Optimize images** using \`NuxtImg\` component (never use \`<img>\` tags)\n`
  content += `8. **Follow Vue 3 and Nuxt 4 best practices** as outlined in \`llms.txt\`\n\n`
  
  content += `### Code Quality Standards\n`
  content += `- Write clean, readable, and maintainable code\n`
  content += `- Use TypeScript for type safety\n`
  content += `- Follow the component structure patterns shown in \`llms.txt\`\n`
  content += `- Leverage Nuxt 4's auto-imports (no manual imports needed)\n`
  content += `- Ensure proper semantic HTML structure\n`
  content += `- Include appropriate ARIA attributes for accessibility\n\n`
  
  content += `## Reference Code\n\n`
  content += `The complete reference code is available in the \`llms.txt\` file. Use it as your primary reference for:\n\n`
  content += `- Component structure and organization\n`
  content += `- Tailwind CSS class usage\n`
  content += `- Nuxt UI component implementation\n`
  content += `- Responsive design patterns\n`
  content += `- Dark mode implementation\n`
  content += `- Accessibility features\n\n`
  content += `\`\`\`vue\n${vueCode}\n\`\`\`\n\n`
  
  content += `## Implementation Workflow\n\n`
  content += `### Pre-Implementation Checklist\n`
  content += `- [ ] Read and understood \`llms.txt\` file completely\n`
  content += `- [ ] Reviewed and verified skills in \`Skills.md\` file\n`
  content += `- [ ] Analyzed reference image for visual requirements\n`
  content += `- [ ] Understood the reference code structure\n`
  content += `- [ ] Have access to Nuxt UI, Nuxt 4, and Tailwind CSS v4 documentation\n\n`
  
  content += `### Implementation Steps\n`
  content += `1. **Analyze Requirements**: Review the reference image and understand the visual design\n`
  content += `2. **Review Reference Code**: Study the code structure in \`llms.txt\` to understand patterns\n`
  content += `3. **Check Skills**: Verify you have all required skills from \`Skills.md\`\n`
  content += `4. **Implement Component**: Create the component following all rules from \`llms.txt\`\n`
  content += `5. **Ensure Responsiveness**: Test at all breakpoints (mobile, tablet, desktop)\n`
  content += `6. **Test Dark Mode**: Verify appearance in both light and dark modes\n`
  content += `7. **Verify Accessibility**: Test with keyboard navigation and screen readers\n`
  content += `8. **Optimize Performance**: Ensure images are optimized and code is efficient\n`
  content += `9. **Code Review**: Review your implementation against the rules in \`llms.txt\`\n`
  content += `10. **Final Testing**: Test all functionality and visual appearance\n\n`
  
  content += `### Quality Assurance\n`
  content += `- Component matches the reference image pixel-perfectly\n`
  content += `- All responsive breakpoints work correctly\n`
  content += `- Dark mode displays properly\n`
  content += `- Accessibility standards are met (WCAG 2.1 AA)\n`
  content += `- Code follows all rules from \`llms.txt\`\n`
  content += `- Performance is optimized (lazy loading, image optimization)\n`
  content += `- TypeScript types are properly defined\n`
  content += `- Code is clean, readable, and maintainable\n\n`
  
  content += `## Important Notes\n\n`
  content += `- **Always refer to \`llms.txt\`** for the most up-to-date implementation rules and guidelines\n`
  content += `- **Verify your skills** using \`Skills.md\` before starting implementation\n`
  content += `- **Use the reference documentation** links provided in \`llms.txt\` when you need clarification\n`
  content += `- **Follow Nuxt 4 best practices** as outlined in the official documentation\n`
  content += `- **Test thoroughly** at different screen sizes and in both light/dark modes\n`
  content += `- **Prioritize accessibility** - ensure your implementation is usable by everyone\n`
  content += `- **Maintain code quality** - write code that is maintainable and follows best practices\n\n`
  
  content += `## Getting Help\n\n`
  content += `If you encounter issues during implementation:\n\n`
  content += `1. Re-read the relevant sections in \`llms.txt\`\n`
  content += `2. Check the official documentation links provided in \`llms.txt\`\n`
  content += `3. Review the \`Skills.md\` file to identify any knowledge gaps\n`
  content += `4. Refer to the reference code in \`llms.txt\` for implementation patterns\n`
  content += `5. Ensure you're following all 12 implementation rules from \`llms.txt\`\n`

  return content
}

function updateAllFiles() {
  const categoryMap: Record<string, string> = {
    'Headers': '1.headers',
    'Hero': '2.hero',
    'Features': '3.features',
    'Footers': '4.footers',
    'CTA': '5.cta',
    'Testimonials': '6.testimonials',
    'Contact': '7.contact',
    'Logos': '8.logos',
    'FAQ': '9.faq',
    'Auth': '10.auth',
    'Gallery': '11.gallery',
  }

  const contentDir = join(process.cwd(), 'content')
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let skillsUpdated = 0
  let claudeUpdated = 0

  for (const category of categories) {
    if (!categoryMap[category]) {
      continue
    }

    const categoryPath = join(componentsDir, category)
    const contentCategory = categoryMap[category]
    const contentPath = join(contentDir, contentCategory)
    const componentDirs = readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir)
      const componentNumber = componentDir
      const mdPath = join(contentPath, `${componentNumber}.md`)
      const indexVuePath = join(componentPath, 'index.vue')

      if (!existsSync(mdPath) || !existsSync(indexVuePath)) {
        continue
      }

      try {
        const vueContent = readFileSync(indexVuePath, 'utf-8')
        const mdContent = readFileSync(mdPath, 'utf-8')
        const imageInfo = findImagePath(category, componentNumber)

        // Extract metadata
        const mdLines = mdContent.split('\n')
        const frontmatterStart = mdLines.findIndex(line => line.trim() === '---')
        const frontmatterEnd = mdLines.findIndex((line, idx) => idx > frontmatterStart && line.trim() === '---')
        const frontmatter = mdLines.slice(frontmatterStart + 1, frontmatterEnd).join('\n')
        
        const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/) || frontmatter.match(/title:\s*(.+)/)
        const descriptionMatch = frontmatter.match(/description:\s*"([^"]+)"/) || frontmatter.match(/description:\s*(.+)/)
        
        const title = titleMatch ? titleMatch[1].trim() : `${category} Component ${componentNumber}`
        const description = descriptionMatch ? descriptionMatch[1].trim() : ''
        
        const vueCode = extractVueCode(vueContent)
        const mdCode = extractMarkdownCode(mdContent)
        const codeToUse = mdCode || vueCode

        // Update Skills.md
        const skillsContent = generateSkillsFile()
        const skillsPath = join(componentPath, 'Skills.md')
        writeFileSync(skillsPath, skillsContent, 'utf-8')
        console.log(`✓ Actualizado: ${category}/${componentDir}/Skills.md`)
        skillsUpdated++

        // Update Claude.md
        const claudeContent = generateClaudeFile(category, componentNumber, title, description, codeToUse, imageInfo)
        const claudePath = join(componentPath, 'Claude.md')
        writeFileSync(claudePath, claudeContent, 'utf-8')
        console.log(`✓ Actualizado: ${category}/${componentDir}/Claude.md`)
        claudeUpdated++

      } catch (error) {
        console.error(`❌ Error procesando ${category}/${componentDir}:`, error)
      }
    }
  }

  return { skillsUpdated, claudeUpdated }
}

const { skillsUpdated, claudeUpdated } = updateAllFiles()
console.log(`\n✅ Actualización completada:`)
console.log(`   - ${skillsUpdated} archivos Skills.md actualizados`)
console.log(`   - ${claudeUpdated} archivos Claude.md actualizados`)
