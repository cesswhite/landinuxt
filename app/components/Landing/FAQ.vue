<template>
  <UContainer>
    <section class="py-24 border-t border-dark-200 dark:border-dark-800">
      <div class="mx-auto max-w-3xl">
        <h2 class="text-3xl font-bold text-center text-dark-950 dark:text-dark-50 mb-2">
          Frequently Asked Questions
        </h2>
        <p class="text-center text-dark-950/60 dark:text-dark-50/60 mb-8">
          Last updated: {{ LAST_UPDATED }}
        </p>
        <UAccordion
          :items="faqItems"
          :unmount-on-hide="false"
          :ui="{ trigger: 'text-base', body: 'text-base text-muted' }"
        />
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const faqItems = HOME_FAQ_ITEMS.map((item) => ({
  label: item.label,
  content: item.content,
}))
</script>
