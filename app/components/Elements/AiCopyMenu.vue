<template>
  <div class="flex shrink-0 items-center gap-0.5">
    <UDropdownMenu :items="menuItems" :content="{ align: 'end' }">
      <UTooltip text="Copy for AI / LLM">
        <UButton
          color="neutral"
          square
          variant="ghost"
          icon="i-lucide-sparkles"
          class="cursor-pointer transition-transform duration-150 ease-out active:scale-[0.96]"
          aria-label="Copy for AI or LLM"
        />
      </UTooltip>
    </UDropdownMenu>

    <UTooltip text="Open agent .txt file">
      <UButton
        :to="agentTxtUrl"
        target="_blank"
        color="neutral"
        square
        variant="ghost"
        icon="i-lucide-bot"
        class="cursor-pointer transition-transform duration-150 ease-out active:scale-[0.96]"
        aria-label="Open agent text file"
        @click="onAgentLinkClick"
      />
    </UTooltip>

    <Transition name="ai-copy-toast">
      <div
        v-if="copiedLabel"
        class="pointer-events-none absolute -bottom-9 right-0 z-20 whitespace-nowrap rounded-lg bg-dark-950 px-2.5 py-1 text-xs font-medium text-dark-50 shadow-lg dark:bg-dark-50 dark:text-dark-950"
        role="status"
      >
        {{ copiedLabel }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  category: string
  slug: string
  title: string
  description: string
  code: string
}>()

const config = useRuntimeConfig()
const { copy } = useClipboard()

const copiedLabel = ref<string | null>(null)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const exportMeta = computed<ComponentExportMeta>(() => ({
  category: props.category,
  slug: props.slug,
  title: props.title,
  description: props.description,
  code: props.code,
  siteUrl: siteUrlFromConfig(config),
}))

const agentTxtUrl = computed(() =>
  componentAgentTxtUrl(props.category, props.slug, exportMeta.value.siteUrl),
)

const menuItems = computed(() => [
  AI_EXPORT_FORMATS.map((format) => ({
    label: format.label,
    icon: format.icon,
    onSelect: () => copyFormat(format.id, format.label),
  })),
  [
    {
      label: 'Open .txt for agents',
      icon: 'i-lucide-external-link',
      onSelect: () => {
        window.open(agentTxtUrl.value, '_blank', 'noopener,noreferrer')
        onAgentLinkClick()
      },
    },
  ],
])

async function copyFormat(format: AiExportFormat, label: string) {
  const payload = buildAiExport(format, exportMeta.value)
  await copy(payload)

  trackUmami(`ai-copy-${format}-${props.category}-${props.slug}`)

  copiedLabel.value = `${label} copied`
  if (copiedTimer) {
    clearTimeout(copiedTimer)
  }
  copiedTimer = setTimeout(() => {
    copiedLabel.value = null
  }, 1600)
}

function onAgentLinkClick() {
  trackUmami(`ai-txt-open-${props.category}-${props.slug}`)
}

onBeforeUnmount(() => {
  if (copiedTimer) {
    clearTimeout(copiedTimer)
  }
})
</script>

<style scoped>
.ai-copy-toast-enter-active {
  transition:
    opacity 180ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
}

.ai-copy-toast-leave-active {
  transition:
    opacity 140ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 140ms cubic-bezier(0.23, 1, 0.32, 1);
}

.ai-copy-toast-enter-from,
.ai-copy-toast-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

@media (prefers-reduced-motion: reduce) {
  .ai-copy-toast-enter-active,
  .ai-copy-toast-leave-active {
    transition: none;
  }

  .ai-copy-toast-enter-from,
  .ai-copy-toast-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
