<template>
  <div class="relative flex w-full items-center justify-center bg-[#ffffff] dark:bg-[#000000]">
    <div class="fixed right-0 top-2 z-100 w-auto flex items-center justify-between gap-4">
      <div class="size-5">
        <AppLogo />
      </div>
      <AppSwitchPrimaryColor />
      <AppSwitchMode />
    </div>
    <slot />
  </div>
</template>