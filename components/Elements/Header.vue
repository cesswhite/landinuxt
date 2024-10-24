<template>
  <div class="flex flex-col items-start justify-start px-2">
    <UTooltip text="Go to back">
      <UButton @click="goToComponentsView()" icon="i-heroicons-chevron-left" variant="link" :padded="false" />
    </UTooltip>
    <div class="flex flex-col items-start gap-y-4 mt-4">
      <h1 class="mt-1 text-5xl font-bold capitalize text-gray-950 dark:text-gray-50">
        {{ props.name }} Sections
      </h1>
      <span v-if="props.number" class="font-semibold text-gray-950/60 inline-block dark:text-gray-50/60">
        {{ props.number }} Nuxt UI components</span>
      <p>
      <p class="text-lg font-normal text-gray-400 dark:text-gray-50/40 w-full lg:w-1/2">
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
