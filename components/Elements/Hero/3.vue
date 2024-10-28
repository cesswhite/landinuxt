<template>
  <div class="relative h-auto w-full bg-dark-50 dark:bg-dark-950">
    <div
      class="mx-auto grid h-full min-h-dvh w-full grid-cols-2 items-center justify-center gap-4 px-4 2xl:max-w-screen-2xl"
    >
      <div class="relative col-span-full mt-28 lg:col-span-1">
        <div class="flex flex-col items-center justify-center lg:items-start">
          <h1
            class="w-full text-center font-sans text-4xl font-bold leading-10 text-dark-900 sm:text-5xl md:w-10/12 lg:w-full lg:text-left lg:text-6xl dark:text-dark-100"
          >
            Welcome to the future of construction
          </h1>
          <p
            class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 md:w-1/2 lg:w-3/5 lg:text-left 2xl:text-xl"
          >
            Unlock your construction project's full potential with our
            comprehensive suite of tools and services
          </p>
          <div
            class="mt-4 flex w-full flex-col-reverse items-center justify-center gap-4 lg:flex-row-reverse lg:justify-end"
          >
            <UButton variant="ghost" to="#" size="lg" class="">
              More info
            </UButton>
            <UButton variant="solid" to="#" size="lg" class="">
              Explore components
            </UButton>
          </div>
          <div
            class="mt-8 flex w-full items-center justify-center gap-12 lg:items-start lg:justify-start"
          >
            <UIcon name="i-simple-icons-nike" class="text-4xl text-dark-400" />
            <UIcon
              name="i-simple-icons-google"
              class="text-4xl text-dark-400"
            />
            <UIcon
              name="i-simple-icons-adidas"
              class="text-4xl text-dark-400"
            />
            <UIcon
              name="i-simple-icons-doubanread"
              class="text-4xl text-dark-400"
            />
          </div>
        </div>
      </div>
      <div class="relative col-span-full mt-4 lg:col-span-1">
        <NuxtImg
          class="max-h-[420px] w-full rounded-lg object-cover object-center lg:max-h-[720px]"
          src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-company-hero-image"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
    </div>
  </div>
</template>
