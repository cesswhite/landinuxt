#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { cwd } from 'node:process'

const SITE_URL = 'https://www.landinuxt.com'

const CATEGORIES = [
  'hero',
  'headers',
  'features',
  'footers',
  'cta',
  'testimonials',
  'contact',
  'logos',
  'faq',
  'auth',
  'gallery',
]

function printHelp() {
  console.log(`
landiNuxt — add copy-paste landing sections to your Nuxt project

Usage:
  npx landinuxt add <category>/<slug>   Add a section (e.g. hero/simple)
  npx landinuxt add hero-simple         Same as hero/simple
  npx landinuxt list                    List available categories
  npx landinuxt --help                  Show this help

Options:
  --out <dir>       Output directory (default: app/components or components/)
  --name <file>     Output filename (default: Landi{Category}{Slug}.vue)
  --dry-run         Print path and source URL without writing
  --site <url>      LandiNuxt site URL (default: ${SITE_URL})

Examples:
  npx landinuxt add hero/simple
  npx landinuxt add features/bento --out app/components/sections
  npx landinuxt add cta/minimal --name LandingCta.vue

Docs: ${SITE_URL}/for-agents
Agent guide: ${SITE_URL}/AGENTS.md
`)
}

function parseArgs(argv) {
  const args = [...argv]
  const options = {
    out: null,
    name: null,
    dryRun: false,
    site: SITE_URL,
  }
  const positional = []

  while (args.length > 0) {
    const arg = args.shift()
    if (arg === '--help' || arg === '-h') {
      options.help = true
      continue
    }
    if (arg === '--dry-run') {
      options.dryRun = true
      continue
    }
    if (arg === '--out') {
      options.out = args.shift()
      continue
    }
    if (arg === '--name') {
      options.name = args.shift()
      continue
    }
    if (arg === '--site') {
      options.site = args.shift()?.replace(/\/$/, '') ?? SITE_URL
      continue
    }
    positional.push(arg)
  }

  return { positional, options }
}

function parseComponentRef(input) {
  if (!input) {
    return null
  }

  if (input.includes('/')) {
    const [category, slug] = input.split('/')
    return { category: category.toLowerCase(), slug: slug.toLowerCase() }
  }

  const dash = input.indexOf('-')
  if (dash > 0) {
    return {
      category: input.slice(0, dash).toLowerCase(),
      slug: input.slice(dash + 1).toLowerCase(),
    }
  }

  return null
}

function toPascalCase(value) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function defaultOutputDir() {
  const root = cwd()
  if (existsSync(join(root, 'app', 'components'))) {
    return join(root, 'app', 'components')
  }
  if (existsSync(join(root, 'components'))) {
    return join(root, 'components')
  }
  return join(root, 'app', 'components')
}

function defaultFileName(category, slug) {
  return `Landi${toPascalCase(category)}${toPascalCase(slug)}.vue`
}

function parseVueFromAgentTxt(text) {
  const match = text.match(/```vue\n([\s\S]*?)```/)
  if (!match?.[1]) {
    throw new Error('No Vue SFC found in agent export. Check category and slug.')
  }
  return match[1].trim()
}

async function fetchAgentTxt(site, category, slug) {
  const url = `${site}/components/${category}/${slug}.txt`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `Component not found (${response.status}): ${url}\nBrowse sections at ${site}/components`,
    )
  }

  return { url, text: await response.text() }
}

function listCategories() {
  console.log('Available categories:\n')
  for (const category of CATEGORIES) {
    console.log(`  ${category.padEnd(14)} ${SITE_URL}/components/${category}`)
  }
  console.log(`\nPick a slug from the hub, then run:`)
  console.log(`  npx landinuxt add hero/simple`)
}

async function addComponent(ref, options) {
  const parsed = parseComponentRef(ref)
  if (!parsed) {
    throw new Error(`Invalid component ref "${ref}". Use category/slug (e.g. hero/simple).`)
  }

  const { category, slug } = parsed

  if (!CATEGORIES.includes(category)) {
    throw new Error(
      `Unknown category "${category}". Run "npx landinuxt list" for valid categories.`,
    )
  }

  const { url, text } = await fetchAgentTxt(options.site, category, slug)
  const code = parseVueFromAgentTxt(text)

  const outDir = resolve(options.out ?? defaultOutputDir())
  const fileName = options.name ?? defaultFileName(category, slug)
  const outPath = join(outDir, fileName)

  if (options.dryRun) {
    console.log(`Would write: ${outPath}`)
    console.log(`Source:    ${url}`)
    return
  }

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, `${code}\n`, 'utf8')

  console.log(`✓ Added ${category}/${slug}`)
  console.log(`  File:   ${outPath}`)
  console.log(`  Source: ${url}`)
  console.log(`\nEnsure @nuxt/ui v4, @nuxt/image, and @vueuse/motion are installed.`)
  console.log(`Setup: ${options.site}/instructions`)
}

async function main() {
  const { positional, options } = parseArgs(process.argv.slice(2))

  if (options.help || positional.length === 0) {
    printHelp()
    process.exit(positional.length === 0 ? 1 : 0)
  }

  const [command, ...rest] = positional

  try {
    if (command === 'list') {
      listCategories()
      return
    }

    if (command === 'add') {
      const ref = rest[0]
      if (!ref) {
        throw new Error('Missing component ref. Example: npx landinuxt add hero/simple')
      }
      await addComponent(ref, options)
      return
    }

    throw new Error(`Unknown command "${command}". Run npx landinuxt --help`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error(`\nlandiNuxt: ${message}\n`)
    process.exit(1)
  }
}

main()
