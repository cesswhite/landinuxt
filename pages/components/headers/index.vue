<template>
  <div class="relative w-full py-24 px-4">
    <div class="mb-32">
      <ElementsHeader
        name="Hero"
        :number="_headers.length"
        description="Explore a diverse collection of headers sections crafted to captivate your audience. From clean and simple to feature-rich designs, these sections are designed to effectively convey your message and engage users."
      />
    </div>
    <ContentList path="/headers" v-slot="{ list }">
      <template v-for="(item, index) in list" :key="item._path">
        <ElementsWrapper
          :item="item"
          :code="item.body?.children[0]?.props?.code"
          :title="item.title"
        >
          <template #components>
            <ElementsHeaders1
              v-if="item.title === ('simple' as HeadersTemplates)"
            />
            <ElementsHeaders2
              v-if="item.title === ('saas' as HeadersTemplates)"
            />
            <ElementsHeaders3
              v-if="item.title === ('indeed' as HeadersTemplates)"
            />
            <ElementsHeaders4
              v-if="item.title === ('float' as HeadersTemplates)"
            />
            <ElementsHeaders5
              v-if="item.title === ('multi' as HeadersTemplates)"
            />
            <ElementsHeaders6
              v-if="item.title === ('store' as HeadersTemplates)"
            />
            <ElementsHeaders7
              v-if="item.title === ('agency' as HeadersTemplates)"
            />
          </template>
        </ElementsWrapper>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { HeadersTemplates } from "~/types/templates";
const _headers = await queryContent("headers").find();

useSeoMeta({
  title: "Headers Section | LandiNuxt",
});
</script>
