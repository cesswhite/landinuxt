<template>
  <ClientOnly>
    <UButton aria-label="button to switch theme dark to light" @click="toggleDark" variant="link" class="cursor-pointer"
      color="primary" size="lg" :icon="color.preference === 'dark'
        ? 'i-lucide-sun'
        : 'i-lucide-moon'
        " />
  </ClientOnly>
</template>

<script setup>
const color = useColorMode();
function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>
