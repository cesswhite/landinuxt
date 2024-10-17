<template>
  <div class="flex h-auto min-h-dvh w-full items-center justify-center bg-white p-4 py-24 dark:bg-black">
    <footer class="w-full relative">
      <div class="flex flex-col">
        <div
          class="border-b border-gray-950/10 dark:border-gray-50/10 flex items-center justify-between pb-12 px-4 pt-4">
          <div class="flex flex-col items-start  gap-y-8">
            <div class="h-10 w-auto">
              <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683150145/Group_26_tooxf6.svg"
                class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
                :placeholder="[50, 25, 75, 5]" />
            </div>
            <div class="flex gap-x-4">
              <template v-for="(nav, index) in navigation" :key="index">
                <UButton :to="nav.link" target="_blank" variant="link" color="gray" class="p-0">
                  {{ nav.label }}
                </UButton>
              </template>

            </div>
          </div>
          <div class="relative">
            <div class="flex items-end gap-x-4">
              <UFormField label="Join to our newsletter" name="email" size="lg" class="w-96">
                <UInput v-model="state.email" placeholder="Enter your email" class="w-full" />
              </UFormField>
              <UTooltip text="Subscribe to newsletter">
                <UButton type="submit" color="primary" variant="solid" :disabled="!state.email" size="lg">
                  Subscribe
                </UButton>
              </UTooltip>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between pt-12 px-4 pb-4 w-full">
          <div class="w-full">
            <UButton type="button" variant="link" color="gray" class="p-0" aria-readonly="true">
              ©LandiNuxt is a Open Source Project by Eco Development Studios
            </UButton>
          </div>
          <div class="h-auto flex gap-x-4 w-full justify-end">
            <template v-for="(nav, index) in bottom_navigation" :key="index">
              <UButton :to="nav.link" target="_blank" variant="link" color="gray" class="p-0">
                {{ nav.label }}
              </UButton>
            </template>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

const state = reactive({
  email: undefined,
})

const navigation = [
  {
    label: "Development",
    link: "#",
  },
  {
    label: "Design",
    link: "#",
  },
  {
    label: "Mobile Apps",
    link: "#",
  },
  {
    label: "Imagene Data",
    link: "#",
  },
];

const bottom_navigation = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Website",
    link: "#",
  },
];
</script>
