<template>
  <div class="flex w-full h-full">
    <USidebar v-model:open="sidebarOpen" collapsible="icon" variant="inset" :ui="componentsHubSidebarUi">
      <template #header="{ open: isOpen }">
        <div class="flex items-center justify-between w-full px-2" :class="{ 'flex-col gap-y-4': !isOpen }">
          <NuxtLink to="/" class="flex w-full h-auto items-center justify-start gap-x-2 min-w-0">
            <div class="size-8 shrink-0">
              <AppLogo />
            </div>
            <template v-if="isOpen">
              <div class="h-5 min-w-0">
                <AppName />
              </div>
            </template>
          </NuxtLink>
          <div v-motion class="inline-flex shrink-0 mt-1" :tapped="toggleButtonTapped">
            <UButton icon="i-lucide-panel-left" :size="isOpen ? 'sm' : 'md'" color="neutral" variant="ghost" square
              class="cursor-pointer" aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
          </div>
        </div>
      </template>

      <template #default="{ open: isOpen }">
        <div v-if="isOpen" class="flex min-h-0 flex-1 flex-col gap-3 mt-4">
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="Search categories..."
            size="sm"
            color="neutral"
            variant="outline"
            class="w-full"
            aria-label="Search component categories"
          />
          <UNavigationMenu :items="navItems" orientation="vertical" class="min-h-0 min-w-0 flex-1 overflow-y-auto"
            :ui="{ root: 'min-h-0', link: 'p-1.5 overflow-hidden' }" />
        </div>
      </template>

      <template #footer>
        <div class="px-2">
          <UTooltip text="Go to home">
            <UButton block square leading-icon="i-lucide-home" color="neutral" variant="subtle"
              class="cursor-pointer rounded-xl" aria-label="Go to home" @click="router.push('/')" />
          </UTooltip>
        </div>
      </template>
    </USidebar>
    <!--CONTENT CONTAINER-->
    <div
      class="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-scroll overflow-x-hidden bg-white dark:bg-black p-2 relative h-screen">
      <!--HEADER CONTAINER-->
      <div
        class="sticky top-0 left-0 h-12 w-full z-999 shrink-0 backdrop-blur-sm rounded-2xl bg-dark-50 dark:bg-dark-50/6 ring-1 shadow-md ring-dark-950/10 shadow-dark-950/10 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black">
        <div class="flex items-center h-full px-2">
          <UTooltip v-if="showBackToComponents" text="Back to all components">
            <UButton to="/components" icon="i-lucide-arrow-left" size="sm" color="neutral" variant="ghost" square
              class="cursor-pointer" aria-label="Back to all components" />
          </UTooltip>
          <div class="ml-auto flex items-center justify-end gap-x-1">
            <AppSwitchMode />
            <AppSwitchPrimaryColor />
          </div>
        </div>
      </div>
      <!--CONTENT/BODY-->
      <div class="flex-1 w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from "@vueuse/core";
import type { NavigationMenuItem } from "@nuxt/ui";
import { categoryNavLabel, filterCategoriesBySearch } from "../utils/elementsNav";

const route = useRoute();
const router = useRouter();
const reduceMotion = usePreferredReducedMotion();

const sidebarOpen = ref(true);
const { search } = useComponentsHubSearch();

const showBackToComponents = computed(() => route.path !== "/components");

const componentsHubSidebarUi = {
  gap: "relative w-(--sidebar-width) bg-transparent transition-none",
  container:
    "fixed bottom-0 p-2 left-0 z-10 hidden h-full w-(--sidebar-width) transition-none lg:flex bg-white dark:bg-black",
  inner:
    "size-full py-2 max-h-full rounded-2xl bg-dark-50 dark:bg-dark-50/6 ring-1 shadow-md ring-dark-950/10 shadow-dark-950/10 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black",
  body: "min-h-0 overflow-y-auto p-0 px-2",
  header: "shrink-0 p-0 min-h-0",
  footer: "shrink-0 p-0",
} as const;

const toggleButtonTapped = computed(() => {
  if (reduceMotion.value) {
    return { scale: 1 };
  }
  return {
    scale: 0.96,
    transition: {
      duration: 100,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  };
});

const categories = await fetchElementsCategories();

const filteredCategories = computed(() =>
  filterCategoriesBySearch(categories, search.value),
);

const navItems = computed<NavigationMenuItem[]>(() =>
  filteredCategories.value.map((c) => ({
    label: categoryNavLabel(c.name),
    to: `/components/${c.name}`,
    badge: String(c.total).padStart(2, "0"),
    active: route.path === `/components/${c.name}`,
  })),
);
</script>
