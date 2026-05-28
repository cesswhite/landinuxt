<template>
  <!-- <AppFullLoading /> -->
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();

const updateBodyBackground = () => {
  if (import.meta.client) {
    // Pure white (light) / black (dark), aligned with `html` rules in `global.css`
    document.body.style.backgroundColor =
      colorMode.value === 'dark' ? 'black' : 'white';
  }
};

// Watch for color mode changes and update body background color
watch(() => colorMode.value, () => {
  updateBodyBackground();
}, { immediate: true });

// Set initial background color on mount
onMounted(() => {
  updateBodyBackground();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 200ms cubic-bezier(0.19, 1, 0.22, 1),
    transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

@media (prefers-reduced-motion: reduce) {

  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-leave-to,
  .page-enter-from {
    opacity: 1;
    transform: none;
  }
}
</style>