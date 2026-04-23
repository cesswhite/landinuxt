<template>
  <div class="grid w-full grid-cols-12 gap-2">
    <template v-for="_comp in _components" :key="_comp.name">
      <ElementsTile :data="_comp" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "../../../types/index";

const props = defineProps<{
  categories?: Component[];
}>();

const internal = ref<Component[] | null>(null);

if (props.categories === undefined) {
  internal.value = await fetchElementsCategories();
}

const _components = computed(() =>
  props.categories !== undefined ? props.categories : internal.value!,
);
</script>
