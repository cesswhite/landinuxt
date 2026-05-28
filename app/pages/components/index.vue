<template>
  <NuxtLayout name="components-hub">
    <ElementsContainer :categories="filteredCategories" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { filterCategoriesBySearch } from "../../utils/elementsSearch";

const categories = await fetchElementsCategories();
const { search } = useComponentsHubSearch();

const filteredCategories = computed(() =>
  filterCategoriesBySearch(categories, search.value),
);

useComponentsHubIndexSeo();
</script>
