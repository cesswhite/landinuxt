/** Maps `Elements/<Folder>/N.vue` to content frontmatter `parent`. */
export const FOLDER_TO_PARENT: Record<string, string> = {
  Headers: 'headers',
  Hero: 'hero',
  Logos: 'logos',
  Features: 'features',
  Footers: 'footers',
  CTA: 'cta',
  Testimonials: 'testimonials',
  Contact: 'contact',
  Auth: 'auth',
  FAQ: 'faq',
  Gallery: 'gallery',
}

export const PARENT_TO_FOLDER: Record<string, string> = Object.fromEntries(
  Object.entries(FOLDER_TO_PARENT).map(([folder, parent]) => [parent, folder]),
)

export function buildElementSources(
  glob: Record<string, string>,
): Record<string, Record<number, string>> {
  const out: Record<string, Record<number, string>> = {}
  for (const filePath in glob) {
    const match = filePath.match(/\/([^/]+)\/(\d+)\.vue$/)
    if (!match) {
      continue
    }
    const folder = match[1]
    if (!folder) {
      continue
    }
    const parent = FOLDER_TO_PARENT[folder]
    if (!parent) {
      continue
    }
    const n = Number(match[2])
    if (!out[parent]) {
      out[parent] = {}
    }
    out[parent][n] = glob[filePath] as string
  }
  return out
}

export function componentAgentTxtPath(category: string, slug: string) {
  return `/components/${category}/${slug}.txt`
}

export function componentAgentTxtUrl(
  category: string,
  slug: string,
  siteUrl = SITE_URL,
) {
  return `${siteUrl}${componentAgentTxtPath(category, slug)}`
}

export function componentHubPath(category: string) {
  return `/components/${category}`
}
