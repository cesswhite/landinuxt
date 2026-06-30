/** SEO for `/components` index only — category pages set their own meta. */
export function useComponentsHubIndexSeo() {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = siteUrlFromConfig(config)

  useSeoMeta({
    title: 'All Nuxt Landing Components — 90+ Copy-Paste Sections',
    description:
      'Browse 90+ pre-built Nuxt landing page components: hero, headers, features, CTAs, testimonials, contact, FAQ, footers, auth, gallery, and more. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'All Nuxt Landing Components — 90+ Sections',
    ogDescription:
      'Browse 90+ pre-built Nuxt landing page components. Hero, features, FAQ, CTA, headers, footers, and more. Copy-paste ready for Nuxt UI v4.',
    ogImage: '/og-landinuxt.jpg',
    ogUrl: `${siteUrl}${route.path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: 'All Nuxt Landing Components — 90+ Sections',
    twitterDescription:
      'Browse 90+ pre-built Nuxt landing page components. Copy-paste ready for Nuxt UI v4.',
    twitterImage: '/og-landinuxt.jpg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  })

  useCanonicalHead()

  const { generateBreadcrumbs } = useBreadcrumbs()
  const { generateBreadcrumbList, generateFAQPage, addStructuredData } = useStructuredData()

  addStructuredData(generateBreadcrumbList(generateBreadcrumbs()))
  addStructuredData(
    generateFAQPage([
      {
        question: 'How many components does LandiNuxt include?',
        answer:
          'LandiNuxt includes 90+ copy-paste landing sections across 11 categories: hero, headers, features, CTAs, testimonials, contact, FAQ, footers, auth, logos, and gallery.',
      },
      {
        question: 'Where can AI agents fetch component source code?',
        answer:
          'Each component has a machine-readable export at /components/{category}/{slug}.txt with full Vue SFC source and integration instructions.',
      },
    ]),
  )
}
