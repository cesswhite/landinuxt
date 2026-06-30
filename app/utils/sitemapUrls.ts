import type { H3Event } from 'h3'
import { queryElementsByParentOnServer } from '../../server/utils/contentElements'
import { componentAgentTxtPath } from './elementSources'
import { SITE_URL } from './siteSeo'

const LANDING_SLUGS = ['simple', 'showcase', 'saas', 'agency'] as const

const ES_PAGES = [
  '/es/nuxt-componentes-landing',
  '/es/como-crear-landing-nuxt',
] as const

const MACHINE_READABLE = ['/llms.txt', '/pricing.md', '/AGENTS.md'] as const

const CONTENT_CATEGORIES = [
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
] as const

/** Extra URLs not always discovered by the pages scanner (landings, ES, agent .txt, docs). */
export async function collectExtraSitemapUrls(event: H3Event) {
  const urls: string[] = [
    ...LANDING_SLUGS.map((slug) => `/landings/${slug}`),
    ...ES_PAGES,
    ...MACHINE_READABLE,
  ]

  for (const category of CONTENT_CATEGORIES) {
    const items = await queryElementsByParentOnServer(event, category)
    for (const item of items) {
      const slug = item.title
      if (typeof slug === 'string' && slug.length > 0) {
        urls.push(componentAgentTxtPath(category, slug))
      }
    }
  }

  return urls.map((loc) => ({
    loc: loc.startsWith('http') ? loc : `${SITE_URL}${loc}`,
  }))
}
