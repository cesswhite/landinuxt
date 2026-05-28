/** SEO for `/components` index only — category pages set their own meta. */
export function useComponentsHubIndexSeo() {
  const config = useRuntimeConfig();
  const route = useRoute();

  const siteUrl = config.public.siteUrl || "https://www.landinuxt.com";

  useSeoMeta({
    title:
      "All Nuxt Landing Components | Hero, Features, FAQ, CTA, Headers, Footers | LandiNuxt",
    description:
      "Browse 90+ pre-built Nuxt landing page components: hero, headers, features, CTAs, testimonials, contact, FAQ, footers, auth, gallery, and more. Copy-paste ready for Nuxt UI v4.",
    ogTitle: "All Nuxt Landing Components | LandiNuxt",
    ogDescription:
      "Browse 90+ pre-built Nuxt landing page components. Hero, features, FAQ, CTA, headers, footers, and more. Copy-paste ready for Nuxt UI v4.",
    ogImage: "/og-landinuxt.jpg",
    ogUrl: `${siteUrl}${route.path}`,
    twitterCard: "summary_large_image",
    twitterTitle: "All Nuxt Landing Components | LandiNuxt",
    twitterDescription:
      "Browse 90+ pre-built Nuxt landing page components. Copy-paste ready for Nuxt UI v4.",
    twitterImage: "/og-landinuxt.jpg",
    ogImageWidth: 1200,
    ogImageHeight: 630,
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
  });
}
