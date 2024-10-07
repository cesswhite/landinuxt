<template>
  <div class="w-full">
    <div class="grid w-full grid-cols-12 gap-4">
      <template v-for="(_comp, index) in _components" :key="index">
        <ElementsTile :data="_comp" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "~/types/index";

const _hero = await queryContent("hero").find();
const _headers = await queryContent("headers").find();
const _features = await queryContent("features").find();
const _components = ref<Component[]>([
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
    total: 0,
  },
  {
    name: "CTA",
    total: 0,
  },
  {
    name: "testimonials",
    total: 0,
  },
  {
    name: "contact",
    total: 0,
  },
]);
</script>
