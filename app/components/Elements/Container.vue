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
import type { Component } from "../../../types/index";

const _hero = await queryContent("hero").find();
const _headers = await queryContent("headers").find();
const _features = await queryContent("features").find();
const _footers = await queryContent("footers").find();
const _cta = await queryContent("cta").find();
const _testimonials = await queryContent("testimonials").find();
const _contact = await queryContent("contact").find();
const _logos = await queryContent('logos').find()
const _faq = await queryContent('faq').find()
const _auth = await queryContent('auth').find()
const _components = ref<Component[]>([
  {
    name: "headers",
    total: _headers.length,
  },
  {
    name: "hero",
    total: _hero.length,
  },
  {
    name: 'logos',
    total: _logos.length
  },
  {
    name: "features",
    total: _features.length,
  },
  {
    name: "cta",
    total: _cta.length,
  },
  {
    name: "testimonials",
    total: _testimonials.length,
  },
  {
    name: "contact",
    total: _contact.length,
  },
  {
    name: 'faq',
    total: _faq.length
  },
  {
    name: "footers",
    total: _footers.length,
  },
  {
    name: "auth",
    total: _auth.length,
  },
]);
</script>
