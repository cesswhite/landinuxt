<template>
  <div class="grid w-full grid-cols-12 gap-2">
    <template v-for="(_comp, index) in components" :key="index">
      <div
        @click="goToComponentIndex(_comp.name)"
        class="col-span-full h-56 cursor-pointer rounded-lg bg-gray-200/50 p-1 sm:col-span-6 md:col-span-4 2xl:col-span-3 dark:bg-zinc-800/10"
      >
        <div
          class="flex h-full w-full items-center justify-center rounded-md bg-gray-200/60 dark:bg-gray-800/10"
        ></div>
        <div
          class="mt-2 text-base font-bold capitalize text-gray-950/90 dark:text-gray-50/90"
        >
          {{ _comp.name }}
          <small class="dark:text-gray-500"
            >({{ _comp.total }} components)</small
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const _hero = await queryContent("hero").find();
const _headers = await queryContent("headers").find();
const components = [
  {
    name: "hero",
    total: _hero.length,
  },
  {
    name: "headers",
    total: _headers.length,
  },
];

function goToComponentIndex(name: string) {
  navigateTo(`/components/${name}`);
}
</script>
