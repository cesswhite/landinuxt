<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Hero" :number="_hero.length"
        description="Discover a wide range of hero sections tailored to engage your audience. Clean and simple to feature-rich designs, these sections are designed to convey your message effectively and captivate users." />
      <ContentList path="/hero" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsHero1 v-if="item.title === ('simple' as HeroTemplates)" />
              <LazyElementsHero2 v-if="item.title === ('main' as HeroTemplates)" />
              <LazyElementsHero3 v-if="item.title === ('half' as HeroTemplates)" />
              <LazyElementsHero4 v-if="item.title === ('marquee' as HeroTemplates)" />
              <LazyElementsHero5 v-if="item.title === ('only-dark' as HeroTemplates)" />
              <LazyElementsHero6 v-if="item.title === ('desaturate' as HeroTemplates)" />
              <LazyElementsHero7 v-if="item.title === ('big' as HeroTemplates)" />
              <LazyElementsHero8 v-if="item.title === ('double-marquee' as HeroTemplates)" />
              <LazyElementsHero9 v-if="item.title === ('split' as HeroTemplates)" />
              <LazyElementsHero10 v-if="item.title === ('space' as HeroTemplates)" />
              <LazyElementsHero11 v-if="item.title === ('management' as HeroTemplates)" />
              <LazyElementsHero12 v-if="item.title === ('care' as HeroTemplates)" />
              <LazyElementsHero13 v-if="item.title === ('ivvi' as HeroTemplates)" />
              <LazyElementsHero14 v-if="item.title === ('luxury' as HeroTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { HeroTemplates } from "~/types/templates";
const _hero = await queryContent("hero").find();

useSeoMeta({
  title: "Hero Section | LandiNuxt",
});
</script>
