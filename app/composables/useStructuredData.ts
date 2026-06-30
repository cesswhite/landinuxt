import type { BreadcrumbItem } from '@nuxt/ui'

export interface StructuredDataOptions {
  type: 'BreadcrumbList' | 'FAQPage' | 'Article' | 'HowTo' | 'Organization' | 'WebSite' | 'SoftwareApplication'
  data?: Record<string, any>
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

  const generateOrganization = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LandiNuxt',
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      description:
        'Pre-built Nuxt landing page components and templates. Build beautiful, responsive landing pages faster.',
      sameAs: [
        'https://github.com/cesswhite/landingnuxt',
        'https://www.producthunt.com/posts/landinuxt',
        'https://x.com/ecostudios_dev',
        'https://github.com/Eco-Dev-Studios',
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
    }
  }

  const generateSoftwareApplication = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'LandiNuxt',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      url: siteUrl,
      description:
        'Free open-source library of 90+ copy-paste Nuxt landing page components built on Nuxt UI v4.',
      softwareVersion: 'Nuxt 4',
      license: 'https://opensource.org/licenses/MIT',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Organization',
        name: 'Eco Development Studios',
        url: 'https://ecostudios.dev',
      },
    }
  }

  const addStructuredData = (structuredData: Record<string, any>) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData),
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
    generateSoftwareApplication,
    addStructuredData,
  }
}

