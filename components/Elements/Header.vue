<template>
  <div class="flex flex-col items-start justify-start">
    <UTooltip text="Go to back">
      <UButton @click="goToComponentsView()" size="sm" icon="i-heroicons-chevron-left" variant="link" class="p-0" />
    </UTooltip>
    <div class="flex flex-col items-start gap-y-4 mt-4">
      <h1 class="mt-1 text-5xl font-bold capitalize text-dark-950 dark:text-dark-50">
        {{ props.name }} Sections
      </h1>
      <span v-if="props.number" class="font-semibold text-dark-950/60 inline-block dark:text-dark-50/60">
        {{ props.number }} Nuxt UI components</span>
      <p>
      <p class="text-lg font-normal text-dark-400 dark:text-dark-50/40 w-full lg:w-1/2">
        {{ props.description }}
      </p>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  number: number;
  description: string
}>();
const router = useRouter();

function goToComponentsView() {
  router.push({ path: "/components" });
}
</script>
