<template>
  <div class="relative w-full py-24 px-4">
    <div class="mb-32">
      <ElementsHeader
        name="Hero"
        :number="_hero.length"
        description="Discover a wide range of hero sections tailored to engage your audience. Clean and simple to feature-rich designs, these sections are designed to convey your message effectively and captivate users."
      />
    </div>
    <ContentList path="/hero" v-slot="{ list }">
      <template v-for="(item, index) in list" :key="item._path">
        <ElementsWrapper
          :item="item"
          :code="item.body?.children[0]?.props?.code"
          :title="item.title"
        >
          <template #components>
            <ElementsHero1 v-if="item.title === ('simple' as HeroTemplates)" />
            <ElementsHero2 v-if="item.title === ('main' as HeroTemplates)" />
            <ElementsHero3 v-if="item.title === ('half' as HeroTemplates)" />
            <ElementsHero4 v-if="item.title === ('marquee' as HeroTemplates)" />
            <ElementsHero5
              v-if="item.title === ('only-dark' as HeroTemplates)"
            />
            <ElementsHero6
              v-if="item.title === ('desaturate' as HeroTemplates)"
            />
            <ElementsHero7 v-if="item.title === ('big' as HeroTemplates)" />
            <ElementsHero8
              v-if="item.title === ('double-marquee' as HeroTemplates)"
            />
            <ElementsHero9 v-if="item.title === ('split' as HeroTemplates)" />
            <ElementsHero10 v-if="item.title === ('space' as HeroTemplates)" />
          </template>
        </ElementsWrapper>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { HeroTemplates } from "~/types/templates";
const _hero = await queryContent("hero").find();

useSeoMeta({
  title: "Hero Section | LandiNuxt",
});
</script>
