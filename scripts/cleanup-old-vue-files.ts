import { readdirSync, unlinkSync, existsSync, statSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

function cleanupOldVueFiles() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let deletedCount = 0

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const files = readdirSync(categoryPath)
      .filter(file => /^\d+\.vue$/.test(file))

    for (const file of files) {
      const filePath = join(categoryPath, file)
      const componentNumber = file.match(/^(\d+)/)?.[1] || ''
      const componentDir = join(categoryPath, componentNumber)
      const newIndexFile = join(componentDir, 'index.vue')

      // Solo eliminar si existe el nuevo archivo index.vue en la carpeta
      if (existsSync(newIndexFile)) {
        try {
          unlinkSync(filePath)
          console.log(`✓ Eliminado: ${category}/${file}`)
          deletedCount++
        } catch (error) {
          console.error(`❌ Error eliminando ${filePath}:`, error)
        }
      } else {
        console.log(`⚠️  No se eliminó ${file} porque no existe ${componentNumber}/index.vue`)
      }
    }
  }

  return deletedCount
}

const deleted = cleanupOldVueFiles()
console.log(`\n✅ Limpieza completada: ${deleted} archivos eliminados`)
