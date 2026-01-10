import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

function fixDuplicates() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let fixedCount = 0

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const componentDirs = readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir)
      const llmsTxtPath = join(componentPath, 'llms.txt')

      if (existsSync(llmsTxtPath)) {
        let content = readFileSync(llmsTxtPath, 'utf-8')
        let modified = false

        // Remove duplicate "When creating this component, follow these rules:" section
        const duplicateRulesPattern = /\n\n\nWhen creating this component, follow these rules:[\s\S]*?(?=## Reference Component Code|## Code Explanation|## Component Code Analysis|$)/m
        if (duplicateRulesPattern.test(content)) {
          content = content.replace(duplicateRulesPattern, '')
          modified = true
        }

        // Remove old explanation text that appears after Component Code Analysis
        const oldExplanationPattern = /\n\n\nThis Vue component implements a [\s\S]*?The code is optimized to be responsive and compatible with dark mode when available\.\n\n/m
        if (oldExplanationPattern.test(content)) {
          content = content.replace(oldExplanationPattern, '\n\n')
          modified = true
        }

        // Remove duplicate numbered list that appears after Implementation Rules
        // This is the old rules list that wasn't fully removed
        const duplicateListPattern = /\n\n1\. \*\*Framework\*\*: Use Nuxt 4 with Composition API[\s\S]*?10\. \*\*Component Structure\*\*: Follow Vue 3 best practices and composition patterns\n\n(?=## Reference Component Code)/m
        if (duplicateListPattern.test(content)) {
          content = content.replace(duplicateListPattern, '\n\n')
          modified = true
        }

        // Fix the typo "Use Nuxt 4 (not Nuxt 4)" to "Use Nuxt 4 (not Nuxt 3)"
        content = content.replace(/Use Nuxt 4 \(not Nuxt 4\)/g, 'Use Nuxt 4 (not Nuxt 3)')

        if (modified || content.includes('Use Nuxt 4 (not Nuxt 4)')) {
          writeFileSync(llmsTxtPath, content, 'utf-8')
          console.log(`✓ Corregido: ${category}/${componentDir}/llms.txt`)
          fixedCount++
        }
      }
    }
  }

  return fixedCount
}

const fixed = fixDuplicates()
console.log(`\n✅ Corrección completada: ${fixed} archivos corregidos`)
