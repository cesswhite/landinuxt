<template>
  <div class="grid w-full grid-cols-12 gap-4">
    <template v-for="(_comp, index) in components" :key="index">
      <div
        @click="goToComponentIndex(_comp.name)"
        class="col-span-full h-auto transform-gpu cursor-pointer rounded-lg bg-gray-200/50 p-1 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3 dark:bg-gray-500/10"
      >
        <div
          class="flex h-56 w-full items-center justify-center rounded-md bg-gray-200/60 dark:bg-gray-500/10"
        ></div>
        <div
          class="mt-2 p-1 text-base font-bold capitalize text-gray-950/90 dark:text-gray-50/90"
        >
          {{ _comp.name }}
          <small class="text-gray-400 dark:text-gray-500"
            >({{
              _comp.total === 0
                ? "Cooming soon"
                : `${_comp.total}
            components`
            }})</small
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const _hero = await queryContent("hero").find();
const _headers = await queryContent("headers").find();
const _features = await queryContent("features").find();
const components = [
  {
    name: "hero",
    total: _hero.length,
  },
  {
    name: "headers",
    total: _headers.length,
  },
  {
    name: "features",
    total: _features.length,
  },
  {
    name: "footers",
    total: 10,
  },
  {
    name: "CTA",
    total: 1,
  },
  {
    name: "testimonials",
    total: 2,
  },
  {
    name: "contact",
    total: 0,
  },
];

function goToComponentIndex(name: string) {
  navigateTo(`/components/${name}`);
}
</script>
