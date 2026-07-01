export interface BuiltWithEntry {
  name: string
  url: string
  description: string
  image: string
  sections: string[]
  tag?: string
}

export const BUILT_WITH_SHOWCASE: BuiltWithEntry[] = [
  {
    name: 'LandiNuxt',
    url: 'https://www.landinuxt.com',
    description:
      'The component library site itself — built with its own hero, features, FAQ, and CTA sections on Nuxt UI v4.',
    image: '/og-landinuxt.jpg',
    sections: ['Hero', 'Features', 'FAQ', 'CTA'],
    tag: 'Product site',
  },
  {
    name: 'Kalibra',
    url: 'https://buy.polar.sh/polar_cl_sgamgcxuNdvD8nI8jv1krHrblvaZtDk6pkB411CUsy5',
    description:
      'AI image generation SaaS template launched with LandiNuxt sections as the marketing foundation.',
    image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/kalibra_ad3nig.webp',
    sections: ['Hero', 'Features', 'CTA', 'Testimonials'],
    tag: 'SaaS launch',
  },
  {
    name: 'Eco Development Studios',
    url: 'https://ecostudios.dev',
    description:
      'Studio site showcasing Nuxt products — assembled from LandiNuxt sections for fast iteration.',
    image: '/og-landinuxt.jpg',
    sections: ['Hero', 'Features', 'Contact'],
    tag: 'Agency',
  },
  {
    name: 'v4.20 Starter',
    url: 'https://github.com/cesswhite/v4.20',
    description:
      'Minimal Nuxt 4 starter paired with LandiNuxt sections for teams that want a thin base and rich landing blocks.',
    image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/v4.20_qxnmfj.webp',
    sections: ['Headers', 'Hero', 'Footers'],
    tag: 'Open source',
  },
]
