<template>
  <div
    class="relative flex h-dvh w-full items-center justify-center bg-dark-50 dark:bg-dark-950"
  >
    <div
      class="absolute top-0 left-0 z-10 flex h-full w-full flex-col md:flex-row"
    >
      <div class="group h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
        <NuxtImg
          class="h-full w-full transform-gpu object-cover object-center saturate-150 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105"
          src="https://images.unsplash.com/photo-1512103154942-f12b1bff1c36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
      <div class="group h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
        <NuxtImg
          class="h-full w-full transform-gpu object-cover object-center saturate-150 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105"
          src="https://images.unsplash.com/photo-1512102935621-443f9165ad73?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, filter: 'blur(10px)' }"
      :enter="{ opacity: 1, filter: 'blur(0px)' }"
      :duration="1200"
      class="relative z-20 flex flex-col items-center justify-center gap-4"
    >
      <h1
        class="text-center font-sans text-6xl font-extralight text-dark-50 md:text-7xl"
      >
        Unlock your fashion journey!
      </h1>
      <UButton variant="subtle" color="primary" size="xl" class="text-dark-50">
        New collection
      </UButton>
    </div>
  </div>
</template>
