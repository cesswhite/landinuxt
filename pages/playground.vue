<template>
  <NuxtLayout name="playground">
    <div class="relative w-full h-auto grid grid-cols-12 bg-dark-50 dark:bg-dark-950 gap-y-12 lg:gap-y-0 py-2">
      <div class="relative col-span-full right-12 lg:col-span-4 overflow-hidden group">
        <NuxtImg class="h-64 w-full object-center object-cover rounded-r-2xl group-hover:saturate-150" loading="lazy"
          height="200" width="200" alt="my-work"
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div class="w-full col-span-full lg:col-span-4 lg:py-12">
        <div class="w-full relative flex flex-col gap-y-4 z-10">
          <div class="mx-auto">
            <UIcon name="i-heroicons-sparkles-solid" class="size-12 text-dark-950 animate-pulse dark:text-dark-50" />
          </div>
          <h1 class="text-dark-950/90 dark:text-dark-50/90 text-4xl md:text-5xl font-serif text-center">
            Turning <span class="font-instrument italic text-dark-950 dark:text-dark-50">ideas</span> <br>
            into <span class="font-instrument italic text-dark-950 dark:text-dark-50">reality</span>.
          </h1>
          <p class="text-center font-serif text-dark-950/60 dark:text-dark-50/60 px-2 md:w-1/2 mx-auto lg:w-full">
            Discover a seamless blend of creativity and innovation. We bring your vision to life with precision,
            expertise, and a commitment to excellence in every project.
          </p>
          <div class="mx-auto">
            <UButton block to="#" color="primary" variant="solid" class="px-6" size="lg">
              Explore Our Services
            </UButton>
          </div>
        </div>
      </div>
      <div class="relative col-span-full left-12 lg:col-span-4 overflow-hidden lg:pt-44 group">
        <NuxtImg class="h-64 w-full object-center object-cover rounded-l-2xl group-hover:saturate-150" loading="lazy"
          height="200" width="200" alt="my-work"
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  </NuxtLayout>
</template>
