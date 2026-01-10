import type { BreadcrumbItem } from '@nuxt/ui'

export interface StructuredDataOptions {
  type: 'BreadcrumbList' | 'FAQPage' | 'Article' | 'HowTo' | 'Organization' | 'WebSite' | 'ItemList' | 'WebPage' | 'Person'
  data?: Record<string, any>
}

export interface ItemListItem {
  '@type': string
  position: number
  name: string
  description?: string
  url?: string
  image?: string
}

export const useStructuredData = () => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = config.public?.siteUrl || process.env.NUXT_PUBLIC_SITE_URL || 'https://www.landinuxt.com'

  const generateBreadcrumbList = (items: BreadcrumbItem[]) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.to ? `${siteUrl}${item.to}` : undefined,
      })),
    }
  }

  const generateFAQPage = (faqs: Array<{ question: string; answer: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  }

  const generateArticle = (article: {
    headline: string
    description: string
    author?: string
    datePublished?: string
    dateModified?: string
    image?: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      author: article.author
        ? {
            '@type': 'Person',
            name: article.author,
            url: `${siteUrl}/about`,
          }
        : undefined,
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      image: article.image || `${siteUrl}/og-landinuxt.jpg`,
      publisher: {
        '@type': 'Organization',
        name: 'LandiNuxt',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/favicon.svg`,
        },
      },
    }
  }

  const generateHowTo = (howTo: {
    name: string
    description: string
    steps: Array<{ name: string; text: string; image?: string; url?: string }>
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        image: step.image,
        url: step.url,
      })),
    }
  }

  const generateOrganization = (options?: {
    sameAs?: string[]
    logo?: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LandiNuxt',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: options?.logo || `${siteUrl}/favicon.svg`,
      },
      description:
        'Pre-built Nuxt landing page components and templates. Build beautiful, responsive landing pages faster.',
      sameAs: options?.sameAs || [
        // Add social media links: GitHub, YouTube, X/Twitter, LinkedIn
        // Example: 'https://github.com/yourusername/landinuxt',
        // 'https://www.youtube.com/@landinuxt',
        // 'https://twitter.com/landinuxt',
        // 'https://www.linkedin.com/company/landinuxt',
      ],
    }
  }

  const generateWebSite = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LandiNuxt',
      url: siteUrl,
      description:
        'Pre-built Nuxt landing page components and templates. Build beautiful, responsive landing pages faster.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  }

  const generateItemList = (items: Array<{
    name: string
    description?: string
    url?: string
    image?: string
    position: number
  }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item) => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        description: item.description,
        url: item.url ? `${siteUrl}${item.url}` : undefined,
        image: item.image ? `${siteUrl}${item.image}` : undefined,
      })),
    }
  }

  const generateWebPage = (options: {
    name: string
    description: string
    url?: string
    breadcrumb?: BreadcrumbItem[]
    mainEntity?: {
      '@type': string
      [key: string]: any
    }
  }) => {
    const pageUrl = options.url || route.path
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: options.name,
      description: options.description,
      url: `${siteUrl}${pageUrl}`,
      breadcrumb: options.breadcrumb ? generateBreadcrumbList(options.breadcrumb) : undefined,
      mainEntity: options.mainEntity,
    }
  }

  const generatePerson = (options: {
    name: string
    description?: string
    jobTitle?: string
    image?: string
    sameAs?: string[]
    url?: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: options.name,
      description: options.description,
      jobTitle: options.jobTitle,
      image: options.image ? `${siteUrl}${options.image}` : undefined,
      url: options.url ? `${siteUrl}${options.url}` : options.url,
      sameAs: options.sameAs || [],
    }
  }

  const addStructuredData = (structuredData: Record<string, any>) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData),
        },
      ],
    })
  }

  return {
    generateBreadcrumbList,
    generateFAQPage,
    generateArticle,
    generateHowTo,
    generateOrganization,
    generateWebSite,
    generateItemList,
    generateWebPage,
    generatePerson,
    addStructuredData,
  }
}

