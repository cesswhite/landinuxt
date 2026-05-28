interface HreflangAlternate {
  hreflang: string
  href: string
}

interface CanonicalHeadOptions {
  lang?: string
  alternates?: HreflangAlternate[]
}

/** Sets canonical URL and optional hreflang alternates. */
export function useCanonicalHead(options: CanonicalHeadOptions = {}) {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = siteUrlFromConfig(config)
  const canonical = `${siteUrl}${route.path}`

  const links: Array<Record<string, string>> = [{ rel: 'canonical', href: canonical }]

  for (const alternate of options.alternates ?? []) {
    links.push({
      rel: 'alternate',
      hreflang: alternate.hreflang,
      href: alternate.href,
    })
  }

  useHead({
    htmlAttrs: {
      lang: options.lang ?? 'en',
    },
    link: links,
  })
}
