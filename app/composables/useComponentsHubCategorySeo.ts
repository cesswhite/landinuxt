import type { ComponentCategorySlug } from '../utils/siteSeo'
import { COMPONENT_CATEGORY_FAQS } from '../utils/componentCategoryFaqs'

/** SEO meta, canonical, and schema for a `/components/:category` hub page. */
export function useComponentsHubCategorySeo(
  category: ComponentCategorySlug,
  faqItems?: Array<{ question: string; answer: string }>,
) {
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

  const { generateBreadcrumbs } = useBreadcrumbs()
  const { generateBreadcrumbList, generateFAQPage, addStructuredData } = useStructuredData()

  addStructuredData(generateBreadcrumbList(generateBreadcrumbs()))
  addStructuredData(generateFAQPage(faqItems ?? COMPONENT_CATEGORY_FAQS[category]))
}
