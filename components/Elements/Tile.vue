<template>
  <div
    @click="goToComponentIndex(props.data.name)"
    class="col-span-full h-auto transform-gpu cursor-pointer rounded-lg bg-gray-200/50 p-1 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3 dark:bg-gray-500/10"
  >
    <div
      class="flex h-56 w-full items-center justify-center rounded-md bg-gray-200/60 dark:bg-gray-500/10"
    />
    <div
      class="mt-2 p-1 text-base font-bold capitalize text-gray-950/90 dark:text-gray-50/90"
    >
      {{ props.data.name }}
      <small class="text-gray-400 dark:text-gray-500"
        >({{
          props.data.total === 0
            ? "Cooming soon"
            : `${props.data.total}
              components`
        }})</small
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "~/types/index";

const props = defineProps<{
  data: Component;
}>();

function goToComponentIndex(name: string) {
  navigateTo(`/components/${name}`);
}
</script>
