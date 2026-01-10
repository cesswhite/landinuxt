import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname, basename } from 'path'

// Mapeo de categorías a números de contenido
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
const GITHUB_BRANCH = 'feat/add-llm-instructions' // Branch for testing
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

function generateTxtFile(
  componentPath: string,
  category: string,
  componentNumber: string,
  vueContent: string,
  mdContent: string,
  imageInfo: { local: string; github: string } | null
) {
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

  let txtContent = `# ${title} - ${category} Component\n\n`
  txtContent += `## Description\n\n${description}\n\n`
  
  // Reference Image Section
  if (imageInfo) {
    txtContent += `## Reference Image\n\n`
    txtContent += `**Public Image URL (GitHub Raw):**\n`
    txtContent += `${imageInfo.github}\n\n`
    txtContent += `You can view this image directly in your browser or use it as a reference when implementing the component.\n\n`
  }
  
  // Rules Section
  txtContent += `## Rules for Implementation\n\n`
  txtContent += `When creating this component, follow these rules:\n\n`
  txtContent += `1. **Framework**: Use Nuxt 3 with Composition API (script setup)\n`
  txtContent += `2. **UI Library**: Use Nuxt UI v4 components (UButton, NuxtImg, etc.)\n`
  txtContent += `3. **Styling**: Use Tailwind CSS v4 utility classes\n`
  txtContent += `4. **Responsive Design**: Ensure the component is fully responsive (mobile-first approach)\n`
  txtContent += `5. **Dark Mode**: Make sure the component supports dark mode when applicable\n`
  txtContent += `6. **Accessibility**: Include proper ARIA labels and semantic HTML\n`
  txtContent += `7. **Performance**: Use lazy loading for images and optimize assets\n`
  txtContent += `8. **Code Quality**: Write clean, readable, and maintainable code\n`
  txtContent += `9. **TypeScript**: Use TypeScript for type safety (if applicable)\n`
  txtContent += `10. **Component Structure**: Follow Vue 3 best practices and composition patterns\n\n`
  
  // Skills Section
  txtContent += `## Required Skills\n\n`
  txtContent += `To implement this component, you should have knowledge of:\n\n`
  txtContent += `- **Vue 3**: Composition API, script setup, template syntax\n`
  txtContent += `- **Nuxt 3**: File-based routing, auto-imports, composables\n`
  txtContent += `- **Nuxt UI v4**: Component library usage (UButton, NuxtImg, USlideover, etc.)\n`
  txtContent += `- **Tailwind CSS v4**: Utility-first CSS framework, responsive design, dark mode\n`
  txtContent += `- **TypeScript**: Type definitions, interfaces (optional but recommended)\n`
  txtContent += `- **Responsive Design**: Mobile-first approach, breakpoints, flexible layouts\n`
  txtContent += `- **Modern CSS**: Flexbox, Grid, gradients, positioning\n\n`
  
  // Component Code Section
  txtContent += `## Reference Component Code\n\n`
  txtContent += `This is the complete working code for this component. Use it as a reference:\n\n`
  txtContent += `\`\`\`vue\n${codeToUse}\n\`\`\`\n\n`
  
  // Code Explanation
  txtContent += `## Code Explanation\n\n`
  txtContent += `This Vue component implements a ${title.toLowerCase()} for landing pages. `
  txtContent += `It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. `
  txtContent += `The code is optimized to be responsive and compatible with dark mode when available.\n\n`
  
  // Technical Details
  txtContent += `## Technical Implementation Details\n\n`
  txtContent += `### Key Features:\n\n`
  txtContent += `- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)\n`
  txtContent += `- **Component Library**: Leverages Nuxt UI v4 for consistent design system\n`
  txtContent += `- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading\n`
  txtContent += `- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching\n`
  txtContent += `- **Accessibility**: Proper semantic HTML and ARIA attributes\n\n`
  
  // Usage Section
  txtContent += `## Usage Instructions\n\n`
  txtContent += `1. Copy the component code above\n`
  txtContent += `2. Paste it into your Nuxt 3 project\n`
  txtContent += `3. Ensure you have Nuxt UI v4 installed: \`npm install @nuxt/ui\`\n`
  txtContent += `4. Make sure Nuxt Image is configured: \`npm install @nuxt/image\`\n`
  txtContent += `5. Customize the content, colors, and styling to match your needs\n`
  txtContent += `6. Test the component in different screen sizes and dark mode\n\n`
  
  // Visual Reference
  if (imageInfo) {
    txtContent += `## Visual Reference\n\n`
    txtContent += `**View the reference image here:**\n`
    txtContent += `${imageInfo.github}\n\n`
    txtContent += `The image shows exactly how this component should look when rendered. `
    txtContent += `Use it as a visual guide to ensure your implementation matches the design.\n\n`
  }

  const txtPath = componentPath.replace('.vue', '.txt')
  writeFileSync(txtPath, txtContent, 'utf-8')
  console.log(`✓ Generado: ${txtPath}`)
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
        const imagePath = findImagePath(category, componentNumber)

        generateTxtFile(
          componentPath,
          category,
          componentNumber,
          vueContent,
          mdContent,
          imagePath
        )
      } catch (error) {
        console.error(`❌ Error procesando ${componentPath}:`, error)
      }
    }
  }
}

processComponents()
console.log('\n✅ Proceso completado')

