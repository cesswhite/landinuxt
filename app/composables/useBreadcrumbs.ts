import type { BreadcrumbItem } from '@nuxt/ui'

export const useBreadcrumbs = () => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const generateBreadcrumbs = (customItems?: BreadcrumbItem[]): BreadcrumbItem[] => {
    if (customItems) {
      return customItems
    }

    const pathSegments = route.path.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [
      {
        label: 'Home',
        icon: 'i-lucide-home',
        to: '/',
      },
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1

      // Format label
      const label = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      items.push({
        label,
        to: isLast ? undefined : currentPath,
        icon: getIconForSegment(segment),
      })
    })

    return items
  }

  const getIconForSegment = (segment: string): string | undefined => {
    const iconMap: Record<string, string> = {
      components: 'i-lucide-box',
      hero: 'i-lucide-sparkles',
      features: 'i-lucide-star',
      headers: 'i-lucide-menu',
      footers: 'i-lucide-layout',
      cta: 'i-lucide-megaphone',
      testimonials: 'i-lucide-message-square',
      contact: 'i-lucide-mail',
      faq: 'i-lucide-help-circle',
      logos: 'i-lucide-image',
      auth: 'i-lucide-lock',
      gallery: 'i-lucide-images',
      landings: 'i-lucide-layout-template',
      'nuxt-landing-components': 'i-lucide-layers',
      'nuxt-landing-comparison': 'i-lucide-git-compare',
      'how-to-build-nuxt-landing-page': 'i-lucide-book-open',
      'nuxt-landing-performance': 'i-lucide-gauge',
    }

    return iconMap[segment] || 'i-lucide-chevron-right'
  }

  return {
    generateBreadcrumbs,
  }
}

