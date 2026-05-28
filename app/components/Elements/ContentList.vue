<template>
  <ContentList :path="path" :query="contentQuery" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </ContentList>
</template>

<script setup lang="ts">
const props = defineProps<{
  path: string;
}>();

const contentQuery = computed(() => ({
  where: { parent: props.path.replace(/^\//, "") },
  sort: [{ component: -1, $numeric: true }],
}));
</script>
