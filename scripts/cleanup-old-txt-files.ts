import { readdirSync, unlinkSync, existsSync } from 'fs'
import { join } from 'path'

const componentsDir = join(process.cwd(), 'app/components/Elements')

function cleanupOldTxtFiles() {
  const categories = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  let deletedCount = 0

  for (const category of categories) {
    const categoryPath = join(componentsDir, category)
    const files = readdirSync(categoryPath)
      .filter(file => /^\d+\.txt$/.test(file))

    for (const file of files) {
      const filePath = join(categoryPath, file)
      const componentNumber = file.match(/^(\d+)/)?.[1] || ''
      const componentDir = join(categoryPath, componentNumber)
      const llmFile = join(componentDir, 'llm.md')

      // Solo eliminar si existe el nuevo archivo llm.md en la carpeta
      if (existsSync(llmFile)) {
        try {
          unlinkSync(filePath)
          console.log(`✓ Eliminado: ${category}/${file}`)
          deletedCount++
        } catch (error) {
          console.error(`❌ Error eliminando ${filePath}:`, error)
        }
      } else {
        console.log(`⚠️  No se eliminó ${file} porque no existe ${componentNumber}/llm.md`)
      }
    }
  }

  return deletedCount
}

const deleted = cleanupOldTxtFiles()
console.log(`\n✅ Limpieza completada: ${deleted} archivos .txt eliminados`)
