<template>
  <div
    class="relative flex h-auto min-h-dvh w-full items-center justify-center bg-[#ffffff] p-4 py-24 dark:bg-[#000000]">
    <div class="fixed right-0 top-2 z-100 w-auto">
      <AppSwitchPrimaryColor />
      <AppSwitchMode />
    </div>
    <slot />
  </div>
</template>