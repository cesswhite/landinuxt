import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(rootDir, 'app/components/Elements')
const targetDir = join(rootDir, 'server/assets/elements')

if (!existsSync(sourceDir)) {
  console.warn('[sync-element-assets] Source directory not found:', sourceDir)
  process.exit(0)
}

if (existsSync(targetDir)) {
  rmSync(targetDir, { recursive: true, force: true })
}

mkdirSync(dirname(targetDir), { recursive: true })
cpSync(sourceDir, targetDir, { recursive: true })

console.log('[sync-element-assets] Synced element sources to server/assets/elements')
