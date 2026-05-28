import type { ComponentCategorySlug } from '../utils/siteSeo'

/** SEO meta + canonical for a `/components/:category` hub page. */
export function useComponentsHubCategorySeo(category: ComponentCategorySlug) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const meta = COMPONENT_CATEGORY_SEO[category]
  const siteUrl = siteUrlFromConfig(config)
  const pageUrl = `${siteUrl}${route.path}`

  useSeoMeta({
    title: meta.title,
    description: meta.description,
    ogTitle: meta.ogTitle,
    ogDescription: meta.description,
    ogImage: '/og-landinuxt.jpg',
    ogUrl: pageUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: meta.ogTitle,
    twitterDescription: meta.description,
    twitterImage: '/og-landinuxt.jpg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  })

  useCanonicalHead()
}
