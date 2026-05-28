<template>
  <div
    class="relative aspect-1080/670 w-full shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-dark-950/5 dark:bg-black dark:ring-dark-50/10">
    <div class="absolute inset-0 flex justify-center overflow-hidden" :class="alignClass">
      <div class="pointer-events-none w-[1080px] max-w-none origin-top" :class="scaleClass">
        <component :is="previewComponent" v-if="previewComponent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElementCatalogItem } from '../../../types/index'
import {
  elementPreviewAlignClass,
  elementPreviewScaleClass,
  resolveElementPreviewComponent,
} from '../../utils/elementPreview'

const props = defineProps<{
  parent: ElementCatalogItem['parent']
  component: number
  title: string
}>()

const previewComponent = computed(() =>
  resolveElementPreviewComponent(props.parent, props.component),
)

const scaleClass = computed(() =>
  elementPreviewScaleClass({
    parent: props.parent,
    title: props.title,
  }),
)

const alignClass = computed(() => elementPreviewAlignClass(props.parent))
</script>
