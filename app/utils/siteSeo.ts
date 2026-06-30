export const SITE_URL = 'https://www.landinuxt.com'

export const LAST_UPDATED = 'June 2026'

export const COMPONENT_COUNT = 90

export const SITE_LINKS = {
  github: 'https://github.com/cesswhite/landingnuxt',
  productHunt: 'https://www.producthunt.com/posts/landinuxt',
  x: 'https://x.com/ecostudios_dev',
  org: 'https://github.com/Eco-Dev-Studios',
} as const

export function siteUrlFromConfig(config?: { public?: { siteUrl?: string } }) {
  return config?.public?.siteUrl || SITE_URL
}

export function canonicalUrl(path: string, config?: { public?: { siteUrl?: string } }) {
  const base = siteUrlFromConfig(config)
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

export const HOME_FAQ_ITEMS = [
  {
    label: 'What is LandiNuxt?',
    content:
      'LandiNuxt is a free library of 90+ copy-paste Nuxt landing page components built on Nuxt UI v4. It includes hero sections, feature grids, CTAs, FAQ blocks, headers, footers, and complete page templates.',
  },
  {
    label: 'Is LandiNuxt free to use?',
    content:
      'Yes. All components are open source under the MIT License and free for personal and commercial projects.',
  },
  {
    label: 'Does LandiNuxt work with Nuxt 4?',
    content:
      'Yes. LandiNuxt is built for Nuxt 4 and Nuxt UI v4, using Vue 3 Composition API and modern Nuxt conventions.',
  },
  {
    label: 'How is LandiNuxt different from Nuxt UI?',
    content:
      'Nuxt UI provides base UI primitives (buttons, inputs, cards). LandiNuxt provides complete landing page sections — ready-to-paste hero, features, FAQ, and CTA blocks built on top of Nuxt UI.',
  },
  {
    label: 'How do I get started?',
    content:
      'Browse the component hub at /components, copy the section you need, and paste it into your Nuxt project. See /instructions for setup steps.',
  },
] as const

export type ComponentCategorySlug =
  | 'hero'
  | 'headers'
  | 'features'
  | 'footers'
  | 'cta'
  | 'testimonials'
  | 'contact'
  | 'logos'
  | 'faq'
  | 'auth'
  | 'gallery'

export const COMPONENT_CATEGORY_SEO: Record<
  ComponentCategorySlug,
  { title: string; description: string; ogTitle: string }
> = {
  hero: {
    title: 'Nuxt Hero Components — 18+ Copy-Paste Sections',
    description:
      '18+ pre-built Nuxt hero sections with CTAs, animations, and images. Copy-paste ready for Nuxt UI v4 landing pages.',
    ogTitle: 'Nuxt Hero Components — 18+ Sections',
  },
  headers: {
    title: 'Nuxt Header Components — 7 Navigation Sections',
    description:
      '7 pre-built Nuxt header and navigation sections. Copy-paste ready for landing pages with Nuxt UI v4.',
    ogTitle: 'Nuxt Header Components — 7 Sections',
  },
  features: {
    title: 'Nuxt Feature Components — 14 Copy-Paste Sections',
    description:
      '14 pre-built Nuxt feature sections for landing pages. Grids, icons, and benefit blocks. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt Feature Components — 14 Sections',
  },
  footers: {
    title: 'Nuxt Footer Components — 8 Copy-Paste Sections',
    description:
      '8 pre-built Nuxt footer sections with links, social icons, and newsletter blocks. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt Footer Components — 8 Sections',
  },
  cta: {
    title: 'Nuxt CTA Components — 13 Call-to-Action Sections',
    description:
      '13 high-converting Nuxt CTA sections for landing pages. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt CTA Components — 13 Sections',
  },
  testimonials: {
    title: 'Nuxt Testimonial Components — 6 Social Proof Sections',
    description:
      '6 pre-built Nuxt testimonial sections to build trust on landing pages. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt Testimonial Components — 6 Sections',
  },
  contact: {
    title: 'Nuxt Contact Components — 5 Form Sections',
    description:
      '5 pre-built Nuxt contact form sections for landing pages. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt Contact Components — 5 Sections',
  },
  logos: {
    title: 'Nuxt Logo Cloud Components — 6 Partner Sections',
    description:
      '6 pre-built Nuxt logo cloud sections for social proof. Copy-paste ready for Nuxt UI v4 landing pages.',
    ogTitle: 'Nuxt Logo Cloud Components — 6 Sections',
  },
  faq: {
    title: 'Nuxt FAQ Components — 4 Accordion Sections',
    description:
      '4 pre-built Nuxt FAQ accordion sections for landing pages. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt FAQ Components — 4 Sections',
  },
  auth: {
    title: 'Nuxt Auth Components — Sign-in & Sign-up UI',
    description:
      '5 pre-built Nuxt authentication UI sections: sign-in, sign-up, and password recovery. Copy-paste ready for Nuxt UI v4.',
    ogTitle: 'Nuxt Auth Components — Sign-in & Sign-up',
  },
  gallery: {
    title: 'Nuxt Gallery Components — 4 Image Grid Sections',
    description:
      '4 pre-built Nuxt gallery sections for portfolios and media. Copy-paste ready for Nuxt UI v4 landing pages.',
    ogTitle: 'Nuxt Gallery Components — 4 Sections',
  },
}
