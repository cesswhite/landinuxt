import type { ComponentCategorySlug } from './siteSeo'

export const COMPONENT_CATEGORY_FAQS: Record<
  ComponentCategorySlug,
  Array<{ question: string; answer: string }>
> = {
  hero: [
    {
      question: 'How do I add a LandiNuxt hero section to my Nuxt project?',
      answer:
        'Copy the Vue SFC from the component hub or fetch the machine-readable .txt export, paste it into your app/components folder, and ensure @nuxt/ui v4, @nuxt/image, and @vueuse/motion are installed.',
    },
    {
      question: 'Do LandiNuxt hero components support dark mode?',
      answer:
        'Yes. All hero sections include Tailwind dark mode classes and work with Nuxt UI color mode out of the box.',
    },
    {
      question: 'Can I customize LandiNuxt hero copy and images?',
      answer:
        'Yes. Each hero is a self-contained Vue SFC. Edit text, images, and CTA links directly in the component file.',
    },
  ],
  headers: [
    {
      question: 'Are LandiNuxt header components responsive?',
      answer:
        'Yes. All navigation headers include mobile menu patterns and responsive layouts built with Nuxt UI.',
    },
    {
      question: 'How do I link header nav items to my routes?',
      answer:
        'Update the NuxtLink `to` props in the copied SFC to match your app routes or use your own navigation data.',
    },
  ],
  features: [
    {
      question: 'What types of feature sections does LandiNuxt include?',
      answer:
        'LandiNuxt offers grids, icon lists, benefit blocks, bento layouts, and comparison-style feature sections for landing pages.',
    },
    {
      question: 'Do feature components require extra dependencies?',
      answer:
        'They use Nuxt UI v4, @nuxt/image for optimized images, and @vueuse/motion for optional animations.',
    },
  ],
  footers: [
    {
      question: 'Can I add newsletter signup to a LandiNuxt footer?',
      answer:
        'Several footer variants include newsletter or CTA blocks. Wire the form to your email provider or API after copying the component.',
    },
  ],
  cta: [
    {
      question: 'Are LandiNuxt CTA sections optimized for conversions?',
      answer:
        'CTA sections use clear headlines, supporting copy, and prominent buttons following common landing page patterns.',
    },
  ],
  testimonials: [
    {
      question: 'How do I replace placeholder testimonials?',
      answer:
        'Edit the testimonial array or static copy inside the Vue SFC. Each section is self-contained with no external data layer.',
    },
  ],
  contact: [
    {
      question: 'Do LandiNuxt contact forms submit automatically?',
      answer:
        'Contact sections provide UI only. Connect the form submit handler to your backend, Formspree, or another service.',
    },
  ],
  logos: [
    {
      question: 'How do I swap partner logos in a logo cloud?',
      answer:
        'Replace image sources and alt text in the copied component. Use @nuxt/image NuxtImg for optimized delivery.',
    },
  ],
  faq: [
    {
      question: 'Do LandiNuxt FAQ sections include schema markup?',
      answer:
        'The FAQ UI is in the Vue SFC. Add FAQPage JSON-LD on the page where you use the section for rich results.',
    },
  ],
  auth: [
    {
      question: 'How do I implement authentication with these Nuxt components?',
      answer:
        'These components provide the UI for authentication flows. Integrate them with your backend (Supabase, Auth0, or a custom API) for actual auth logic.',
    },
    {
      question: 'Are these authentication components secure?',
      answer:
        'These components are UI-only. Security depends on your backend. Use HTTPS, server-side validation, and OWASP best practices.',
    },
    {
      question: 'Do these components work with Nuxt Auth?',
      answer:
        'Yes. They are UI-only and work with Nuxt Auth, Supabase Auth, or custom solutions.',
    },
  ],
  gallery: [
    {
      question: 'Can LandiNuxt gallery sections be used for portfolios?',
      answer:
        'Yes. Gallery components support image grids and lightbox-style layouts suitable for portfolios and media showcases.',
    },
  ],
}
