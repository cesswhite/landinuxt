<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

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