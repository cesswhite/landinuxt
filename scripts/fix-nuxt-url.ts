import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')
const OLD_NUXT_URL = 'https://nuxt.com/'
const NEW_NUXT_URL = 'https://nuxt.com/llms-full.txt'

function fixNuxtUrl() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let updatedCount = 0

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const componentDirs = readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir)
      const llmsTxtPath = join(componentPath, 'llms.txt')

      if (existsSync(llmsTxtPath)) {
        const content = readFileSync(llmsTxtPath, 'utf-8')
        
        if (content.includes(OLD_NUXT_URL)) {
          const newContent = content.replace(OLD_NUXT_URL, NEW_NUXT_URL)
          writeFileSync(llmsTxtPath, newContent, 'utf-8')
          console.log(`✓ Actualizado: ${category}/${componentDir}/llms.txt`)
          updatedCount++
        }
      }
    }
  }

  return updatedCount
}

const updated = fixNuxtUrl()
console.log(`\n✅ Actualización completada: ${updated} archivos actualizados`)
