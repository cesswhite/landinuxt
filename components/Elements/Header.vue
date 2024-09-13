<template>
  <div class="flex flex-col items-start justify-start px-2">
    <UTooltip text="Go to back">
      <UButton
        @click="$router.back()"
        icon="i-heroicons-arrow-left"
        variant="link"
        :padded="false"
      />
    </UTooltip>
    <div class="flex items-end gap-2">
      <h1 class="mt-1 text-4xl font-bold capitalize">
        {{ props.name }} Sections
      </h1>
      <small class="mb-1 font-bold text-gray-500/50">
        ({{ props.number }})</small
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  number: number;
}>();
</script>
