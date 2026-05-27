<template>
  <ContentList :path="path" :query="contentQuery" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </ContentList>
</template>

<script setup lang="ts">
defineProps<{
  path: string;
}>();

const contentQuery = {
  sort: { component: -1 },
};
</script>
