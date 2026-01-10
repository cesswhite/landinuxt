import { readFileSync, writeFileSync, existsSync, readdirSync, renameSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

// URLs to add
const NUXT_UI_URL = 'https://ui.nuxt.com/llms-full.txt'
const NUXT_URL = 'https://nuxt.com/llms-full.txt'
const TAILWINDCSS_URL = 'https://tailwindcss.com/'

function updateLLMFiles() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let updatedCount = 0
  let renamedCount = 0

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const componentDirs = readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir)
      const llmMdPath = join(componentPath, 'llm.md')
      const llmsTxtPath = join(componentPath, 'llms.txt')

      // Rename llm.md to llms.txt if it exists
      if (existsSync(llmMdPath)) {
        const content = readFileSync(llmMdPath, 'utf-8')
        
        // Add reference URLs section at the beginning (after title and description)
        const lines = content.split('\n')
        let insertIndex = 0
        
        // Find where to insert (after description section, before Reference Image or Rules)
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('## Description')) {
            // Find the end of description section (next ## or end of file)
            for (let j = i + 1; j < lines.length; j++) {
              if (lines[j].startsWith('##')) {
                insertIndex = j
                break
              }
              if (j === lines.length - 1) {
                insertIndex = j + 1
              }
            }
            break
          }
        }
        
        // Check if Reference Documentation section already exists
        const hasReferenceSection = content.includes('## Reference Documentation')
        if (hasReferenceSection) {
          console.log(`⚠️  ${category}/${componentDir}/llms.txt ya tiene la sección de Reference Documentation`)
          // Just rename if needed
          if (existsSync(llmMdPath)) {
            const { unlinkSync } = require('fs')
            unlinkSync(llmMdPath)
          }
          continue
        }

        // Create reference URLs section
        const referenceSection = [
          '',
          '## Reference Documentation',
          '',
          'When implementing this component, refer to the following official documentation:',
          '',
          `- **Nuxt UI Documentation**: ${NUXT_UI_URL}`,
          `- **Nuxt 4 Documentation**: ${NUXT_URL}`,
          `- **Tailwind CSS v4 Documentation**: ${TAILWINDCSS_URL}`,
          ''
        ]

        // Insert the reference section
        const newLines = [
          ...lines.slice(0, insertIndex),
          ...referenceSection,
          ...lines.slice(insertIndex)
        ]

        // Write to llms.txt and delete old llm.md
        writeFileSync(llmsTxtPath, newLines.join('\n'), 'utf-8')
        
        // Delete old llm.md file
        const { unlinkSync } = require('fs')
        unlinkSync(llmMdPath)
        console.log(`✓ Actualizado y renombrado: ${category}/${componentDir}/llm.md → llms.txt`)
        updatedCount++
        renamedCount++
      } else if (existsSync(llmsTxtPath)) {
        // If llms.txt already exists, just update it
        const content = readFileSync(llmsTxtPath, 'utf-8')
        
        // Check if reference section already exists
        if (!content.includes(NUXT_UI_URL)) {
          const lines = content.split('\n')
          let insertIndex = 0
          
          // Find where to insert (after description section)
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('## Description')) {
              for (let j = i + 1; j < lines.length; j++) {
                if (lines[j].startsWith('##')) {
                  insertIndex = j
                  break
                }
                if (j === lines.length - 1) {
                  insertIndex = j + 1
                }
              }
              break
            }
          }

          const referenceSection = [
            '',
            '## Reference Documentation',
            '',
            'When implementing this component, refer to the following official documentation:',
            '',
            `- **Nuxt UI Documentation**: ${NUXT_UI_URL}`,
            `- **Nuxt 4 Documentation**: ${NUXT_URL}`,
            `- **Tailwind CSS v4 Documentation**: ${TAILWINDCSS_URL}`,
            ''
          ]

          const newLines = [
            ...lines.slice(0, insertIndex),
            ...referenceSection,
            ...lines.slice(insertIndex)
          ]

          writeFileSync(llmsTxtPath, newLines.join('\n'), 'utf-8')
          console.log(`✓ Actualizado: ${category}/${componentDir}/llms.txt`)
          updatedCount++
        }
      }
    }
  }

  return { updatedCount, renamedCount }
}

const { updatedCount, renamedCount } = updateLLMFiles()
console.log(`\n✅ Actualización completada: ${updatedCount} archivos actualizados, ${renamedCount} archivos renombrados`)
