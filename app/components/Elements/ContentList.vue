<template>
  <ContentList :path="path" :query="contentQuery">
    <template #default="slotProps: any">
      <slot v-bind="slotProps" />
    </template>
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
