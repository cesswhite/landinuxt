import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, renameSync, copyFileSync } from 'fs'
import { join } from 'path'

// Mapeo de categorías
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

// GitHub repository configuration
const GITHUB_REPO = 'cesswhite/landingnuxt'
const GITHUB_BRANCH = 'feat/add-llm-instructions'
const GITHUB_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}`

const componentsDir = join(process.cwd(), 'app/components/Elements')
const contentDir = join(process.cwd(), 'content')
const publicDir = join(process.cwd(), 'public/components')

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

// URLs for reference documentation
const NUXT_UI_URL = 'https://ui.nuxt.com/llms-full.txt'
const NUXT_URL = 'https://nuxt.com/llms-full.txt'
const TAILWINDCSS_URL = 'https://tailwindcss.com/'

function generateLLMFile(
  category: string,
  componentNumber: string,
  title: string,
  description: string,
  vueCode: string,
  imageInfo: { local: string; github: string } | null
): string {
  let content = `# ${title} - ${category} Component\n\n`
  content += `## Description\n\n${description}\n\n`
  
  content += `## Reference Documentation\n\n`
  content += `When implementing this component, refer to the following official documentation:\n\n`
  content += `- **Nuxt UI Documentation**: ${NUXT_UI_URL}\n`
  content += `- **Nuxt 4 Documentation**: ${NUXT_URL}\n`
  content += `- **Tailwind CSS v4 Documentation**: ${TAILWINDCSS_URL}\n\n`
  
  if (imageInfo) {
    content += `## Reference Image\n\n`
    content += `**Public Image URL (GitHub Raw):**\n`
    content += `${imageInfo.github}\n\n`
    content += `You can view this image directly in your browser or use it as a reference when implementing the component.\n\n`
  }
  
  content += `## Implementation Rules and Guidelines\n\n`
  content += `When implementing this component, you MUST follow these rules strictly:\n\n`
  content += `1. **Framework Version**: Use Nuxt 4 (not Nuxt 3). Nuxt 4 is the latest version with improved performance and features.\n`
  content += `2. **Composition API**: Always use Vue 3 Composition API with \`<script setup lang="ts">\` syntax. Do not use Options API.\n`
  content += `3. **UI Library**: Use Nuxt UI v4 components exclusively. Common components include: UButton, NuxtImg, USlideover, UCard, UBadge, UIcon, etc. Refer to the Nuxt UI documentation for component props and usage.\n`
  content += `4. **Styling Framework**: Use Tailwind CSS v4 utility classes for all styling. Do not use inline styles or CSS modules. Apply classes directly to HTML elements using the \`class\` attribute.\n`
  content += `5. **Responsive Design**: Implement mobile-first responsive design using Tailwind breakpoints: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\`, \`2xl:\`. Start with mobile styles and progressively enhance for larger screens.\n`
  content += `6. **Dark Mode Support**: Always include dark mode variants using Tailwind's \`dark:\` prefix. Test both light and dark modes to ensure proper contrast and readability.\n`
  content += `7. **Accessibility**: Include proper ARIA labels, semantic HTML elements (\`<header>\`, \`<nav>\`, \`<main>\`, etc.), and ensure keyboard navigation works correctly. Use \`aria-label\` for icon-only buttons.\n`
  content += `8. **Image Optimization**: Use \`NuxtImg\` component (not regular \`<img>\` tags) for all images. Set \`loading="lazy"\`, appropriate \`alt\` text, and use \`format="webp"\` when possible.\n`
  content += `9. **Code Quality**: Write clean, readable, and maintainable code. Use meaningful variable names, add comments for complex logic, and follow Vue 3 and Nuxt 4 best practices.\n`
  content += `10. **TypeScript**: Use TypeScript for type safety. Define proper types for props, emits, and composables. Use \`lang="ts"\` in script tags.\n`
  content += `11. **Component Structure**: Follow Vue 3 Single File Component (SFC) structure: \`<template>\`, \`<script setup>\`, and optionally \`<style>\`. Keep components focused and reusable.\n`
  content += `12. **Nuxt Auto-imports**: Leverage Nuxt 4's auto-imports feature. You don't need to import composables like \`useState\`, \`useRoute\`, or Nuxt UI components manually.\n\n`
  
  content += `## Reference Component Code\n\n`
  content += `This is the complete working code for this component. Use it as a reference:\n\n`
  content += `\`\`\`vue\n${vueCode}\n\`\`\`\n\n`
  
  content += `## Component Code Analysis\n\n`
  content += `This is a Vue 3 Single File Component (SFC) designed for Nuxt 4 landing pages. The component structure follows these patterns:\n\n`
  content += `- **Template Section**: Contains the HTML structure with Tailwind CSS classes for styling\n`
  content += `- **Component Usage**: Utilizes Nuxt UI v4 components (UButton, NuxtImg, UIcon, etc.) which are auto-imported in Nuxt 4\n`
  content += `- **Responsive Design**: Implements responsive breakpoints using Tailwind's mobile-first approach\n`
  content += `- **Dark Mode**: Includes dark mode variants using the \`dark:\` prefix for theme switching\n`
  content += `- **Accessibility**: Uses semantic HTML and ARIA attributes for screen readers and keyboard navigation\n`
  content += `- **Performance**: Optimizes images with NuxtImg component and lazy loading\n\n`
  content += `**Important**: This code is production-ready and follows Nuxt 4 best practices. Use it as a reference but adapt it to your specific needs.\n\n`
  
  content += `## Technical Implementation Details\n\n`
  content += `### Key Features:\n\n`
  content += `- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)\n`
  content += `- **Component Library**: Leverages Nuxt UI v4 for consistent design system\n`
  content += `- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading\n`
  content += `- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching\n`
  content += `- **Accessibility**: Proper semantic HTML and ARIA attributes\n\n`
  
  content += `## Step-by-Step Implementation Guide\n\n`
  content += `Follow these steps to implement this component in your Nuxt 4 project:\n\n`
  content += `### Prerequisites\n`
  content += `1. Ensure you have a Nuxt 4 project set up. If not, create one with: \`npx nuxi@latest init my-project\`\n`
  content += `2. Install Nuxt UI v4: \`npm install @nuxt/ui\` or \`pnpm add @nuxt/ui\` or \`yarn add @nuxt/ui\`\n`
  content += `3. Install Nuxt Image module: \`npm install @nuxt/image\` (if not already included with Nuxt UI)\n`
  content += `4. Configure \`nuxt.config.ts\` to include the modules: \`modules: ['@nuxt/ui', '@nuxt/image']\`\n\n`
  content += `### Implementation Steps\n`
  content += `1. **Copy the Code**: Copy the entire component code from the "Reference Component Code" section above\n`
  content += `2. **Create Component File**: Create a new \`.vue\` file in your project (e.g., \`components/MyComponent.vue\` or \`app/components/MyComponent.vue\`)\n`
  content += `3. **Paste and Review**: Paste the code into your component file and review the structure\n`
  content += `4. **Customize Content**: Replace placeholder text, images, and links with your actual content\n`
  content += `5. **Adjust Styling**: Modify Tailwind classes to match your design system and color scheme\n`
  content += `6. **Test Responsiveness**: Test the component at different breakpoints (mobile, tablet, desktop)\n`
  content += `7. **Test Dark Mode**: Verify the component looks correct in both light and dark modes\n`
  content += `8. **Verify Accessibility**: Test with keyboard navigation and screen readers\n`
  content += `9. **Optimize Images**: Replace image URLs with your own optimized images\n`
  content += `10. **Final Review**: Ensure all functionality works as expected before deploying\n\n`
  content += `### Important Notes\n`
  content += `- Nuxt 4 auto-imports components and composables, so you don't need manual imports\n`
  content += `- All Nuxt UI components are available globally once \`@nuxt/ui\` is installed\n`
  content += `- Tailwind CSS v4 is included with Nuxt UI v4, no separate installation needed\n`
  content += `- The component uses TypeScript by default in Nuxt 4 projects\n\n`
  
  if (imageInfo) {
    content += `## Visual Reference\n\n`
    content += `**View the reference image here:**\n`
    content += `${imageInfo.github}\n\n`
    content += `The image shows exactly how this component should look when rendered. `
    content += `Use it as a visual guide to ensure your implementation matches the design.\n`
  }

  return content
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
  
  content += `## Implementation Guidelines for Claude\n\n`
  content += `### Context\n`
  content += `You are helping to implement a ${category.toLowerCase()} component for a Nuxt 3 landing page. `
  content += `This component should match the design shown in the reference image (if provided) and follow the code structure below.\n\n`
  
  content += `### Requirements\n`
  content += `1. Use Nuxt 3 with Composition API (script setup)\n`
  content += `2. Implement using Nuxt UI v4 components\n`
  content += `3. Apply Tailwind CSS v4 utility classes for styling\n`
  content += `4. Ensure full responsiveness across all screen sizes\n`
  content += `5. Support dark mode using Tailwind's dark: prefix\n`
  content += `6. Include proper accessibility attributes\n`
  content += `7. Optimize images using NuxtImg component\n`
  content += `8. Follow Vue 3 best practices\n\n`
  
  content += `### Reference Code\n\n`
  content += `\`\`\`vue\n${vueCode}\n\`\`\`\n\n`
  
  content += `### Implementation Steps\n`
  content += `1. Review the reference image to understand the visual design\n`
  content += `2. Analyze the provided code structure\n`
  content += `3. Implement the component matching the design and code patterns\n`
  content += `4. Ensure responsive behavior matches the reference\n`
  content += `5. Test dark mode compatibility\n`
  content += `6. Verify accessibility features\n\n`
  
  content += `### Notes\n`
  content += `- Pay special attention to spacing, typography, and color usage\n`
  content += `- Ensure the component is pixel-perfect to the reference image\n`
  content += `- Maintain code quality and readability\n`
  content += `- Use semantic HTML elements where appropriate\n`

  return content
}

function generateSkillsFile(): string {
  let content = `# Required Skills\n\n`
  content += `To implement this component, you should have knowledge of:\n\n`
  content += `## Core Technologies\n\n`
  content += `- **Vue 3**: Composition API, script setup, template syntax, reactivity system\n`
  content += `- **Nuxt 3**: File-based routing, auto-imports, composables, server-side rendering\n`
  content += `- **Nuxt UI v4**: Component library usage (UButton, NuxtImg, USlideover, UCard, etc.)\n`
  content += `- **Tailwind CSS v4**: Utility-first CSS framework, responsive design, dark mode, custom utilities\n\n`
  content += `## Additional Skills\n\n`
  content += `- **TypeScript**: Type definitions, interfaces, type safety (optional but recommended)\n`
  content += `- **Responsive Design**: Mobile-first approach, breakpoints, flexible layouts, viewport units\n`
  content += `- **Modern CSS**: Flexbox, Grid, gradients, positioning, transitions, animations\n`
  content += `- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation, screen readers\n`
  content += `- **Performance**: Image optimization, lazy loading, code splitting\n`
  content += `- **Component Architecture**: Single File Components (SFC), props, emits, slots\n\n`
  content += `## Best Practices\n\n`
  content += `- Clean, readable, and maintainable code\n`
  content += `- Consistent naming conventions\n`
  content += `- Proper component composition\n`
  content += `- Performance optimization\n`
  content += `- Accessibility compliance\n`
  content += `- Cross-browser compatibility\n`

  return content
}

function processComponents() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  for (const category of categories) {
    if (!categoryMap[category]) {
      console.log(`⚠️  Categoría no mapeada: ${category}`)
      continue
    }

    const categoryPath = join(componentsDir, category)
    const contentCategory = categoryMap[category]
    const contentPath = join(contentDir, contentCategory)

    if (!existsSync(contentPath)) {
      console.log(`⚠️  No existe contenido para: ${category}`)
      continue
    }

    const componentFiles = readdirSync(categoryPath)
      .filter(file => /^\d+\.vue$/.test(file))
      .sort((a, b) => {
        const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0')
        const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0')
        return numA - numB
      })

    for (const componentFile of componentFiles) {
      const componentNumber = componentFile.match(/^(\d+)/)?.[1] || ''
      const componentPath = join(categoryPath, componentFile)
      const mdPath = join(contentPath, `${componentNumber}.md`)

      if (!existsSync(mdPath)) {
        console.log(`⚠️  No existe markdown para: ${category}/${componentFile}`)
        continue
      }

      try {
        const vueContent = readFileSync(componentPath, 'utf-8')
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

        // Create component directory
        const componentDir = join(categoryPath, componentNumber)
        if (!existsSync(componentDir)) {
          mkdirSync(componentDir, { recursive: true })
        }

        // Move/copy Vue file to component directory as index.vue
        const newVuePath = join(componentDir, 'index.vue')
        if (!existsSync(newVuePath)) {
          copyFileSync(componentPath, newVuePath)
          console.log(`✓ Movido: ${componentFile} → ${componentNumber}/index.vue`)
        }

        // Generate llms.txt
        const llmContent = generateLLMFile(category, componentNumber, title, description, codeToUse, imageInfo)
        const llmPath = join(componentDir, 'llms.txt')
        writeFileSync(llmPath, llmContent, 'utf-8')
        console.log(`✓ Generado: ${componentNumber}/llms.txt`)

        // Generate Claude.md
        const claudeContent = generateClaudeFile(category, componentNumber, title, description, codeToUse, imageInfo)
        const claudePath = join(componentDir, 'Claude.md')
        writeFileSync(claudePath, claudeContent, 'utf-8')
        console.log(`✓ Generado: ${componentNumber}/Claude.md`)

        // Generate Skills.md (same for all components)
        const skillsContent = generateSkillsFile()
        const skillsPath = join(componentDir, 'Skills.md')
        writeFileSync(skillsPath, skillsContent, 'utf-8')
        console.log(`✓ Generado: ${componentNumber}/Skills.md`)

      } catch (error) {
        console.error(`❌ Error procesando ${componentPath}:`, error)
      }
    }
  }
}

processComponents()
console.log('\n✅ Reorganización completada')
console.log('\n⚠️  NOTA: Los archivos .vue originales aún existen. Puedes eliminarlos manualmente después de verificar que todo funciona correctamente.')
