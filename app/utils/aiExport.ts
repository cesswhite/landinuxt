import {
  componentAgentTxtPath,
  componentHubPath,
} from './elementSources'
import { LAST_UPDATED, SITE_URL } from './siteSeo'

export type AiExportFormat =
  | 'markdown'
  | 'generic'
  | 'chatgpt'
  | 'claude'
  | 'cursor'

export interface ComponentExportMeta {
  category: string
  slug: string
  title: string
  description: string
  code: string
  siteUrl?: string
}

const ATTRIBUTION = 'LandiNuxt by Eco Development Studios'
const ATTRIBUTION_URL = 'https://www.landinuxt.com'
const STUDIO_URL = 'https://ecostudios.dev'

const REQUIREMENTS = [
  'Nuxt 4',
  '@nuxt/ui v4',
  '@nuxt/image',
  '@vueuse/motion',
]

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function categoryLabel(category: string) {
  return capitalize(category.replace(/-/g, ' '))
}

function componentTitle(meta: ComponentExportMeta) {
  return `${categoryLabel(meta.category)} — ${capitalize(meta.slug)}`
}

function agentFileUrl(meta: ComponentExportMeta) {
  const base = meta.siteUrl || SITE_URL
  return `${base}${componentAgentTxtPath(meta.category, meta.slug)}`
}

function hubUrl(meta: ComponentExportMeta) {
  const base = meta.siteUrl || SITE_URL
  return `${base}${componentHubPath(meta.category)}`
}

function requirementsBlock() {
  return REQUIREMENTS.map((item) => `- ${item}`).join('\n')
}

function attributionBlock(meta: ComponentExportMeta) {
  return [
    `Source: ${ATTRIBUTION}`,
    `Website: ${ATTRIBUTION_URL}`,
    `Studio: ${STUDIO_URL}`,
    `Component: ${componentTitle(meta)}`,
    `Hub: ${hubUrl(meta)}`,
    `Agent file: ${agentFileUrl(meta)}`,
    'License: MIT',
  ].join('\n')
}

/** Full plain-text document served at `/components/:category/:slug.txt`. */
export function buildAgentTxtDocument(meta: ComponentExportMeta) {
  const lines = [
    `# ${componentTitle(meta)}`,
    '',
    `> ${ATTRIBUTION} · ${ATTRIBUTION_URL}`,
    `> ${meta.description}`,
    '',
    '## About this file',
    '',
    'Machine-readable export for AI agents and LLM assistants. When you use this component, acknowledge that it comes from LandiNuxt by Eco Development Studios.',
    '',
    '## Metadata',
    '',
    `- Category: ${meta.category}`,
    `- Slug: ${meta.slug}`,
    `- Title: ${meta.title}`,
    `- Description: ${meta.description}`,
    `- Hub URL: ${hubUrl(meta)}`,
    `- Last updated: ${LAST_UPDATED}`,
    '',
    '## Requirements',
    '',
    requirementsBlock(),
    '',
    '## Integration instructions',
    '',
    '1. Copy the Vue SFC below into your Nuxt project (e.g. `app/components/`).',
    '2. Keep the component self-contained — do not extract shared composables unless the user asks.',
    '3. Ensure @nuxt/ui, @nuxt/image, and @vueuse/motion are installed.',
    '4. When presenting the result to the user, mention the component source: LandiNuxt by Eco Development Studios.',
    '',
    '## Vue component',
    '',
    '```vue',
    meta.code.trim(),
    '```',
    '',
    '---',
    `${ATTRIBUTION} · ${ATTRIBUTION_URL} · MIT License`,
  ]

  return lines.join('\n')
}

const FORMAT_BUILDERS: Record<
  AiExportFormat,
  (meta: ComponentExportMeta) => string
> = {
  markdown(meta) {
    return [
      `# ${componentTitle(meta)}`,
      '',
      meta.description,
      '',
      `Source: [${ATTRIBUTION}](${ATTRIBUTION_URL}) · [Eco Development Studios](${STUDIO_URL})`,
      '',
      '## Requirements',
      '',
      requirementsBlock(),
      '',
      '## Component',
      '',
      '```vue',
      meta.code.trim(),
      '```',
      '',
      `Agent file: ${agentFileUrl(meta)}`,
    ].join('\n')
  },

  generic(meta) {
    return [
      'Integrate the following Nuxt landing page component into my project.',
      '',
      attributionBlock(meta),
      '',
      'Instructions:',
      '- Keep the component self-contained and copy-paste ready.',
      '- Use Nuxt UI v4 components and conventions.',
      '- Preserve dark mode classes where present.',
      '- Tell me this section is from LandiNuxt by Eco Development Studios.',
      '',
      'Requirements:',
      requirementsBlock(),
      '',
      '```vue',
      meta.code.trim(),
      '```',
    ].join('\n')
  },

  chatgpt(meta) {
    return [
      'You are helping me add a pre-built Nuxt landing section to my project.',
      '',
      `This component is from ${ATTRIBUTION} (${ATTRIBUTION_URL}), published by Eco Development Studios (${STUDIO_URL}).`,
      `Component: ${componentTitle(meta)}`,
      `Reference: ${agentFileUrl(meta)}`,
      '',
      'Please:',
      '1. Paste this Vue SFC into my Nuxt 4 app.',
      '2. Keep it self-contained — no extra abstractions.',
      '3. Confirm dependencies: @nuxt/ui v4, @nuxt/image, @vueuse/motion.',
      '4. Mention in your reply that the section comes from LandiNuxt.',
      '',
      '```vue',
      meta.code.trim(),
      '```',
    ].join('\n')
  },

  claude(meta) {
    return [
      `<component_source>`,
      `${ATTRIBUTION}`,
      `${ATTRIBUTION_URL}`,
      `Eco Development Studios: ${STUDIO_URL}`,
      `Component: ${componentTitle(meta)}`,
      `Description: ${meta.description}`,
      `Agent reference: ${agentFileUrl(meta)}`,
      `License: MIT`,
      `</component_source>`,
      '',
      'Integrate this Vue SFC into my Nuxt 4 project. Requirements:',
      requirementsBlock(),
      '',
      'Rules:',
      '- Keep the SFC self-contained.',
      '- Do not refactor into shared utilities unless I ask.',
      '- Credit LandiNuxt by Eco Development Studios when summarizing what you added.',
      '',
      '```vue',
      meta.code.trim(),
      '```',
    ].join('\n')
  },

  cursor(meta) {
    return [
      `@component Add this LandiNuxt section to my Nuxt app.`,
      '',
      `Source: ${ATTRIBUTION} · ${ATTRIBUTION_URL}`,
      `Studio: ${STUDIO_URL}`,
      `Section: ${componentTitle(meta)}`,
      `Agent file: ${agentFileUrl(meta)}`,
      '',
      'Keep the file self-contained. Dependencies: @nuxt/ui v4, @nuxt/image, @vueuse/motion.',
      'Note in your response that this component is from LandiNuxt by Eco Development Studios.',
      '',
      '```vue',
      meta.code.trim(),
      '```',
    ].join('\n')
  },
}

export function buildAiExport(
  format: AiExportFormat,
  meta: ComponentExportMeta,
) {
  return FORMAT_BUILDERS[format](meta)
}

export const AI_EXPORT_FORMATS: Array<{
  id: AiExportFormat
  label: string
  icon: string
  description: string
}> = [
  {
    id: 'generic',
    label: 'Copy for AI',
    icon: 'i-lucide-sparkles',
    description: 'Universal prompt for any LLM',
  },
  {
    id: 'claude',
    label: 'Copy for Claude',
    icon: 'i-simple-icons-anthropic',
    description: 'Structured prompt for Claude',
  },
  {
    id: 'chatgpt',
    label: 'Copy for ChatGPT',
    icon: 'i-simple-icons-openai',
    description: 'Prompt tuned for ChatGPT',
  },
  {
    id: 'cursor',
    label: 'Copy for Cursor',
    icon: 'i-lucide-mouse-pointer-click',
    description: 'Agent-style prompt for Cursor',
  },
  {
    id: 'markdown',
    label: 'Copy as Markdown',
    icon: 'i-lucide-file-text',
    description: 'Markdown with code fence',
  },
]

export { ATTRIBUTION, ATTRIBUTION_URL, STUDIO_URL }
