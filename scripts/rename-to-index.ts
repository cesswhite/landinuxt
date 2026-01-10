import { readdirSync, renameSync, existsSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

function renameVueFiles() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const componentDirs = readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    for (const componentDir of componentDirs) {
      const componentPath = join(categoryPath, componentDir)
      const vueFile = join(componentPath, '1.vue')
      const indexFile = join(componentPath, 'index.vue')

      if (existsSync(vueFile) && !existsSync(indexFile)) {
        renameSync(vueFile, indexFile)
        console.log(`✓ Renombrado: ${category}/${componentDir}/1.vue → index.vue`)
      }
    }
  }
}

renameVueFiles()
console.log('\n✅ Renombrado completado')
