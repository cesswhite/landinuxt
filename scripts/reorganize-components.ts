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
  
  if (imageInfo) {
    content += `## Reference Image\n\n`
    content += `**Public Image URL (GitHub Raw):**\n`
    content += `${imageInfo.github}\n\n`
    content += `You can view this image directly in your browser or use it as a reference when implementing the component.\n\n`
  }
  
  content += `## Rules for Implementation\n\n`
  content += `When creating this component, follow these rules:\n\n`
  content += `1. **Framework**: Use Nuxt 3 with Composition API (script setup)\n`
  content += `2. **UI Library**: Use Nuxt UI v4 components (UButton, NuxtImg, etc.)\n`
  content += `3. **Styling**: Use Tailwind CSS v4 utility classes\n`
  content += `4. **Responsive Design**: Ensure the component is fully responsive (mobile-first approach)\n`
  content += `5. **Dark Mode**: Make sure the component supports dark mode when applicable\n`
  content += `6. **Accessibility**: Include proper ARIA labels and semantic HTML\n`
  content += `7. **Performance**: Use lazy loading for images and optimize assets\n`
  content += `8. **Code Quality**: Write clean, readable, and maintainable code\n`
  content += `9. **TypeScript**: Use TypeScript for type safety (if applicable)\n`
  content += `10. **Component Structure**: Follow Vue 3 best practices and composition patterns\n\n`
  
  content += `## Reference Component Code\n\n`
  content += `This is the complete working code for this component. Use it as a reference:\n\n`
  content += `\`\`\`vue\n${vueCode}\n\`\`\`\n\n`
  
  content += `## Code Explanation\n\n`
  content += `This Vue component implements a ${title.toLowerCase()} for landing pages. `
  content += `It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. `
  content += `The code is optimized to be responsive and compatible with dark mode when available.\n\n`
  
  content += `## Technical Implementation Details\n\n`
  content += `### Key Features:\n\n`
  content += `- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)\n`
  content += `- **Component Library**: Leverages Nuxt UI v4 for consistent design system\n`
  content += `- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading\n`
  content += `- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching\n`
  content += `- **Accessibility**: Proper semantic HTML and ARIA attributes\n\n`
  
  content += `## Usage Instructions\n\n`
  content += `1. Copy the component code above\n`
  content += `2. Paste it into your Nuxt 3 project\n`
  content += `3. Ensure you have Nuxt UI v4 installed: \`npm install @nuxt/ui\`\n`
  content += `4. Make sure Nuxt Image is configured: \`npm install @nuxt/image\`\n`
  content += `5. Customize the content, colors, and styling to match your needs\n`
  content += `6. Test the component in different screen sizes and dark mode\n\n`
  
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

        // Generate llm.md
        const llmContent = generateLLMFile(category, componentNumber, title, description, codeToUse, imageInfo)
        const llmPath = join(componentDir, 'llm.md')
        writeFileSync(llmPath, llmContent, 'utf-8')
        console.log(`✓ Generado: ${componentNumber}/llm.md`)

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
