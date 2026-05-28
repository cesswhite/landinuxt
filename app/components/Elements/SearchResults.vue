<template>
  <div class="w-full px-2 py-4">
    <p v-if="queryLabel" class="mb-6 text-sm text-dark-500 dark:text-dark-400">
      Results for
      <span class="font-medium text-dark-950 dark:text-dark-50">"{{ queryLabel }}"</span>
    </p>

    <section v-if="sections.length" class="mb-10">
      <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-400">
        Sections
      </h2>
      <div class="grid w-full grid-cols-12 items-start gap-4">
        <ElementsTile
          v-for="section in sections"
          :key="section.name"
          :data="section"
        />
      </div>
    </section>

    <section v-if="components.length">
      <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-400">
        Components
      </h2>
      <ul class="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <li v-for="item in components" :key="`${item.parent}-${item.title}`">
          <NuxtLink
            :to="componentDetailPath(item)"
            class="group flex h-full flex-col gap-4 rounded-xl bg-dark-50 p-4 ring-1 ring-dark-950/10 shadow-sm shadow-dark-950/5 transition-colors duration-150 ease-out hover:bg-dark-100/80 sm:flex-row sm:items-stretch dark:bg-dark-950 dark:ring-dark-50/15 dark:hover:bg-dark-900/80"
            @click="onComponentClick(item)"
          >
            <ElementsSearchPreview
              :parent="item.parent"
              :component="item.component"
              :title="item.title"
              class="sm:w-[min(100%,280px)] sm:max-w-[42%]"
            />
            <div class="flex min-w-0 flex-1 flex-col">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-base font-semibold capitalize text-dark-950 dark:text-dark-50">
                  {{ item.title }}
                </span>
                <UBadge color="neutral" variant="subtle" size="sm">
                  {{ categoryNavLabel(item.parent) }}
                </UBadge>
                <UBadge v-if="item.animated" color="primary" variant="subtle" size="sm">
                  Animated
                </UBadge>
              </div>
              <p class="mt-1 line-clamp-2 text-sm text-dark-500 dark:text-dark-400">
                {{ item.description }}
              </p>
              <div v-if="item.tags.length" class="mt-3 flex flex-wrap gap-1.5">
                <UBadge
                  v-for="tag in item.tags.slice(0, 5)"
                  :key="tag"
                  color="neutral"
                  variant="outline"
                  size="sm"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <div
      v-if="!sections.length && !components.length"
      class="flex flex-col items-center justify-center gap-2 py-24 text-center"
    >
      <UIcon name="i-lucide-search-x" class="size-10 text-dark-400 dark:text-dark-500" />
      <p class="text-base font-medium text-dark-950 dark:text-dark-50">No results found</p>
      <p class="max-w-sm text-sm text-dark-500 dark:text-dark-400">
        Try a section name, component title, tag, or keyword from the description.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component, ElementCatalogItem } from "../../../types/index";
import { categoryNavLabel } from "../../utils/elementsNav";
import { componentDetailPath } from "../../utils/elementsSearch";

defineProps<{
  queryLabel: string;
  sections: Component[];
  components: ElementCatalogItem[];
}>();

function onComponentClick(item: ElementCatalogItem) {
  trackUmami(`search-component-${item.parent}-${item.title}`);
}
</script>
