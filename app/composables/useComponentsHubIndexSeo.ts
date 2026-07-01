/** SEO for `/components` index only — category pages set their own meta. */
export function useComponentsHubIndexSeo() {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = siteUrlFromConfig(config)

  useSeoMeta({
    title: 'All Nuxt Landing Components — AI-Agent-Ready Sections',
    description:
      'Browse 90+ AI-agent-ready Nuxt landing sections. Each includes .txt exports, CLI install, and Cursor/Claude prompts. Built for Nuxt UI v4.',
    ogTitle: 'Nuxt Landing Components — AI-Agent-Ready',
    ogDescription:
      '90+ Nuxt landing sections with machine-readable exports and CLI install. Hero, features, CTA, headers, footers, and more.',
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
