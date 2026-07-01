<template>
  <NuxtLayout name="default">
    <UContainer>
      <div class="pt-8 pb-4">
        <UBreadcrumb :items="breadcrumbs" />
      </div>

      <div class="mx-auto flex flex-col gap-y-4 pt-12 pb-16 text-center">
        <UBadge color="primary" variant="subtle" size="lg" class="mx-auto">
          AI Agent Ready
        </UBadge>
        <h1
          class="text-4xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-5xl 2xl:text-6xl"
        >
          The AI-Agent-Ready Nuxt Landing Library
        </h1>
        <p
          class="mx-auto w-full text-xl/7 text-dark-950/60 dark:text-dark-50/50 md:w-2/3 md:text-2xl/7"
        >
          Every section ships with machine-readable <code class="text-sm">.txt</code> exports,
          CLI install, and prompts for Cursor, Claude, and ChatGPT.
        </p>
        <p class="text-sm text-dark-950/50 dark:text-dark-50/40">
          Last updated: {{ LAST_UPDATED }}
        </p>
        <div class="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <UButton to="/components" size="xl" class="rounded-full px-8">
            Browse 90+ Sections
          </UButton>
          <UButton
            to="/cursor-rules/landinuxt.mdc"
            target="_blank"
            variant="outline"
            size="xl"
            icon="i-lucide-download"
          >
            Download Cursor Rule
          </UButton>
        </div>
      </div>

      <div class="grid gap-6 py-8 md:grid-cols-3">
        <UCard v-for="highlight in highlights" :key="highlight.title">
          <div class="flex flex-col gap-3">
            <UIcon :name="highlight.icon" class="size-8 text-primary-500" />
            <h2 class="text-lg font-bold text-dark-950 dark:text-dark-50">
              {{ highlight.title }}
            </h2>
            <p class="text-sm text-dark-950/70 dark:text-dark-50/70">
              {{ highlight.description }}
            </p>
          </div>
        </UCard>
      </div>

      <div class="space-y-12 py-12">
        <div v-for="(step, index) in workflowSteps" :key="step.name" class="flex gap-6">
          <div class="shrink-0">
            <div
              class="flex size-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900"
            >
              <span class="text-lg font-bold text-primary-600 dark:text-primary-400">
                {{ index + 1 }}
              </span>
            </div>
          </div>
          <div class="flex-1">
            <UCard>
              <h2 class="mb-4 text-2xl font-bold text-dark-950 dark:text-dark-50">
                {{ step.name }}
              </h2>
              <p class="mb-4 text-dark-950/80 dark:text-dark-50/80">
                {{ step.text }}
              </p>
              <UCodeBlock v-if="step.code" :code="step.code" :language="step.language" />
              <div
                v-if="step.tip"
                class="mt-4 rounded-lg bg-primary-50 p-4 dark:bg-primary-950/20"
              >
                <p class="text-sm text-dark-950/80 dark:text-dark-50/80">
                  {{ step.tip }}
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <div class="space-y-6 border-t border-dark-200 py-12 dark:border-dark-800">
        <h2 class="text-2xl font-bold text-dark-950 dark:text-dark-50">
          Agent reference files
        </h2>
        <div class="grid gap-4 md:grid-cols-2">
          <UCard v-for="file in agentFiles" :key="file.url">
            <div class="flex flex-col gap-2">
              <h3 class="font-semibold text-dark-950 dark:text-dark-50">
                {{ file.label }}
              </h3>
              <p class="text-sm text-dark-950/70 dark:text-dark-50/70">
                {{ file.description }}
              </p>
              <UButton
                :to="file.url"
                target="_blank"
                variant="link"
                color="primary"
                class="justify-start p-0"
                :trailing-icon="file.external ? 'i-lucide-external-link' : undefined"
              >
                {{ file.url }}
              </UButton>
            </div>
          </UCard>
        </div>
      </div>

      <UCard class="mb-16 bg-primary-50 dark:bg-primary-950/20">
        <div class="flex flex-col items-center gap-4 text-center">
          <h2 class="text-2xl font-bold text-dark-950 dark:text-dark-50">
            Try it in 30 seconds
          </h2>
          <p class="max-w-xl text-dark-950/70 dark:text-dark-50/70">
            Ask your agent to build a Nuxt landing with LandiNuxt, or run the CLI in your project.
          </p>
          <UCodeBlock
            :code="`npx landinuxt add hero/simple\n# → writes app/components/LandiHeroSimple.vue`"
            language="bash"
          />
          <UButton to="/components/hero" size="lg">
            Pick a hero section
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbList, generateArticle, addStructuredData } = useStructuredData()

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'For Agents', icon: 'i-lucide-bot' },
]

const highlights = [
  {
    icon: 'i-lucide-file-text',
    title: 'Per-component .txt exports',
    description:
      'Every section has a fetchable URL with metadata, integration rules, and the full Vue SFC.',
  },
  {
    icon: 'i-lucide-terminal',
    title: 'CLI install',
    description:
      'Run npx landinuxt add hero/simple to drop a section into app/components/ without copy-paste.',
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Prompt presets',
    description:
      'Each component hub includes Copy for Cursor, Claude, and ChatGPT prompts tuned for agents.',
  },
]

const workflowSteps = [
  {
    name: 'Install dependencies',
    text: 'LandiNuxt sections run on Nuxt 4 with Nuxt UI v4, Nuxt Image, and VueUse Motion.',
    code: 'npm install @nuxt/ui @nuxt/image @vueuse/motion',
    language: 'bash' as const,
    tip: 'See /instructions for theme tokens and font setup.',
  },
  {
    name: 'Add sections via CLI',
    text: 'The fastest path for humans and agents alike — one command per section.',
    code: 'npx landinuxt add hero/simple\nnpx landinuxt add features/bento\nnpx landinuxt add cta/minimal',
    language: 'bash' as const,
    tip: 'Use npx landinuxt list to see all categories.',
  },
  {
    name: 'Or fetch the agent .txt file',
    text: 'Agents can GET the machine-readable export and parse the Vue block directly.',
    code: 'curl https://www.landinuxt.com/components/hero/simple.txt',
    language: 'bash' as const,
    tip: 'Pattern: /components/{category}/{slug}.txt — documented in AGENTS.md.',
  },
  {
    name: 'Add the Cursor rule (optional)',
    text: 'Drop the LandiNuxt rule into .cursor/rules/ so Cursor knows to use .txt exports and the CLI.',
    code: 'curl -o .cursor/rules/landinuxt.mdc \\\n  https://www.landinuxt.com/cursor-rules/landinuxt.mdc',
    language: 'bash' as const,
    tip: 'You can also copy a prompt from any component page via the sparkles menu.',
  },
  {
    name: 'Compose your landing',
    text: 'Import the generated components into your page and customize copy, images, and links.',
    code: '<template>\n  <LandiHeroSimple />\n  <LandiFeaturesBento />\n  <LandiCtaMinimal />\n</template>',
    language: 'vue' as const,
    tip: 'Browse full templates at /landings if you want a starting layout.',
  },
]

const agentFiles = [
  {
    label: 'AGENTS.md',
    description: 'Primary integration guide for coding agents and LLM workflows.',
    url: '/AGENTS.md',
    external: true,
  },
  {
    label: 'llms.txt',
    description: 'Product summary, stats, and key URLs for LLM crawlers.',
    url: '/llms.txt',
    external: true,
  },
  {
    label: 'Example component export',
    description: 'Machine-readable hero section with full Vue source.',
    url: '/components/hero/simple.txt',
    external: true,
  },
  {
    label: 'Cursor rule',
    description: 'Downloadable rule file for .cursor/rules/landinuxt.mdc.',
    url: '/cursor-rules/landinuxt.mdc',
    external: true,
  },
]

useSeoMeta({
  title: 'For AI Agents — LandiNuxt CLI & Machine-Readable Components',
  description:
    'LandiNuxt is the AI-agent-ready Nuxt landing library. Install sections with npx landinuxt add, fetch .txt exports, or use Cursor/Claude prompts.',
  ogTitle: 'For AI Agents — LandiNuxt',
  ogDescription:
    '90+ Nuxt landing sections with .txt exports, CLI install, and agent prompts. Built for Cursor, Claude Code, and Windsurf.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'For AI Agents — LandiNuxt',
  twitterDescription:
    'The AI-agent-ready Nuxt landing library. CLI, .txt exports, and Cursor rule included.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

addStructuredData(generateBreadcrumbList(breadcrumbs))
addStructuredData(
  generateArticle({
    headline: 'LandiNuxt for AI Agents — CLI, .txt Exports, and Cursor Integration',
    description:
      'How coding agents install LandiNuxt landing sections via CLI, machine-readable .txt files, and Cursor rules.',
    datePublished: '2026-01-01',
    dateModified: '2026-07-01',
  }),
)

useCanonicalHead()
</script>
