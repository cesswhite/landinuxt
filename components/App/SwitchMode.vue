<template>
  <ClientOnly>
    <UButton
      aria-label="button to switch theme dark to light"
      @click="toggleDark"
      variant="link"
      color="primary"
      size="lg"
      :icon="
        color.preference === 'dark'
          ? 'i-heroicons-sun-solid'
          : 'i-heroicons-moon-solid'
      "
    />
  </ClientOnly>
</template>

<script setup>
const color = useColorMode();
function toggleDark() {
  color.preference = color.value === "dark" ? "light" : "dark";
}
</script>
