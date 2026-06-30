<template>
  <slot :list="list" />
</template>

<script setup lang="ts">
import { queryElementsByParent } from '../../utils/contentElements'

const props = defineProps<{
  path: string
}>()

const parent = props.path.replace(/^\//, '')
const list = await queryElementsByParent(parent)
</script>
