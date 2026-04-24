<template>
  <div class="relative mt-12 w-full">
    <div
      class="mb-12 h-full overflow-hidden p-2 rounded-2xl bg-dark-50 dark:bg-dark-950 ring-1 shadow-md ring-dark-950/10 shadow-dark-950/10 dark:ring-dark-50/10 dark:shadow-2xs dark:shadow-black lg:h-full">
      <div class="flex items-center justify-between">
        <div class="flex min-w-0 flex-col text-base">
          <div class="flex items-center gap-2">
            <span class="text-dark-900 dark:text-dark-50/90 inline-block text-base font-bold capitalize">
              {{ props.item.title }}
            </span>
            <UTooltip v-if="props.item.dark" text="Component with color mode support">
              <UIcon name="i-heroicons-moon-20-solid" class="text-dark-950 dark:text-dark-50 mt-0.5 text-xs" />
            </UTooltip>
            <UTooltip v-if="props.item.animated" text="Component with animation">
              <UIcon name="i-heroicons-sparkles-20-solid" class="text-dark-950 dark:text-dark-50 mt-0.5 text-sm" />
            </UTooltip>
          </div>
          <p class="text-dark-400 dark:text-dark-50/40 text-sm font-normal">
            {{ props.item.description }}
          </p>
        </div>
        <div class="flex shrink-0 items-center justify-end gap-1">
          <UTooltip text="Preview">
            <UButton color="neutral" square icon="i-heroicons-eye" :variant="previewCode ? 'subtle' : 'link'"
              class="cursor-pointer" aria-label="Preview" @click="previewCode = true" />
          </UTooltip>
          <UTooltip text="Code">
            <UButton color="neutral" square icon="i-heroicons-code-bracket" :variant="!previewCode ? 'subtle' : 'link'"
              class="cursor-pointer" aria-label="Code" @click="previewCode = false" />
          </UTooltip>
          <UTooltip :text="current === props.item.title ? 'Copied' : 'Copy code'">
            <UButton color="neutral" square variant="ghost" class="cursor-pointer" :icon="current === props.item.title
              ? 'i-heroicons-clipboard-document-check'
              : 'i-heroicons-clipboard-document-list'
              " :aria-label="current === props.item.title ? 'Copied' : 'Copy code'" @click="copyCode()" />
          </UTooltip>
        </div>
      </div>
      <Transition name="wrapper-panel" mode="out-in">
        <div v-if="previewCode" key="preview"
          class="scrollbar-hide scrollbar-hide mt-4 h-auto overflow-x-hidden rounded-b-xl bg-dark-200/80 p-2 dark:bg-dark-900"
          :class="setHeightClass">
          <slot name="components" />
        </div>
        <div v-else id="code" key="code" class="mt-2 min-h-96">
          <template v-if="usesRawElementSource">
            <div class="scrollbar-hide overflow-x-auto rounded-2xl text-sm [&_.shiki]:rounded-md [&_pre]:m-0"
              v-html="highlightedCodeHtml" />
          </template>
          <template v-else>
            <ContentQuery :path="item._path" find="one" v-slot="{ data }">
              <ContentRenderer>
                <ContentRendererMarkdown :value="data" class="prose max-w-full" />
              </ContentRenderer>
            </ContentQuery>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  HeroTemplates,
  FeaturesTemplates,
  HeadersTemplates,
  FootersTemplates,
  CTATemplates,
  TestimonialsTemplates,
  ContactTemplates,
  LogosTemplates,
  AuthTemplates,
  FAQTemplates,
  GalleryTemplates,
} from "../../../types/templates";
import { useClipboard } from "@vueuse/core";
import { codeToHtml } from "shiki";

/** Matches `content.highlight.theme.default` in nuxt.config.ts */
const CODE_THEME = "github-dark";

/** Maps `Elements/<Folder>/N.vue` to content frontmatter `parent` */
const FOLDER_TO_PARENT: Record<string, string> = {
  Headers: "headers",
  Hero: "hero",
  Logos: "logos",
  Features: "features",
  Footers: "footers",
  CTA: "cta",
  Testimonials: "testimonials",
  Contact: "contact",
  Auth: "auth",
  FAQ: "faq",
  Gallery: "gallery",
};

const elementRawGlob = import.meta.glob<string>(
  [
    "./Headers/*.vue",
    "./Hero/*.vue",
    "./Logos/*.vue",
    "./Features/*.vue",
    "./Footers/*.vue",
    "./CTA/*.vue",
    "./Testimonials/*.vue",
    "./Contact/*.vue",
    "./Auth/*.vue",
    "./FAQ/*.vue",
    "./Gallery/*.vue",
  ],
  { query: "?raw", import: "default", eager: true },
);

function buildElementSources(
  glob: Record<string, string>,
): Record<string, Record<number, string>> {
  const out: Record<string, Record<number, string>> = {};
  for (const filePath in glob) {
    const match = filePath.match(/\.\/([^/]+)\/(\d+)\.vue$/);
    if (!match) {
      continue;
    }
    const folder = match[1];
    if (!folder) {
      continue;
    }
    const parent = FOLDER_TO_PARENT[folder];
    if (!parent) {
      continue;
    }
    const n = Number(match[2]);
    if (!out[parent]) {
      out[parent] = {};
    }
    out[parent][n] = glob[filePath] as string;
  }
  return out;
}

const ELEMENT_SOURCES = buildElementSources(elementRawGlob);

const current = ref<
  | HeroTemplates
  | FeaturesTemplates
  | HeadersTemplates
  | FootersTemplates
  | CTATemplates
  | TestimonialsTemplates
  | ContactTemplates
  | LogosTemplates
  | AuthTemplates
  | FAQTemplates
  | GalleryTemplates
  | undefined
  | null
  | string
>(null);

const props = withDefaults(
  defineProps<{
    item: any;
    code?: string;
    title:
    | HeroTemplates
    | FeaturesTemplates
    | HeadersTemplates
    | FootersTemplates
    | CTATemplates
    | TestimonialsTemplates
    | ContactTemplates
    | LogosTemplates
    | AuthTemplates
    | FAQTemplates
    | GalleryTemplates
    | string
    | undefined;
  }>(),
  { code: "" },
);

const resolvedCode = computed(() => {
  const parent = props.item.parent as string;
  const byParent = ELEMENT_SOURCES[parent];
  if (byParent) {
    const n = Number(props.item.component);
    return byParent[n] ?? props.code ?? "";
  }
  return props.code ?? "";
});

const usesRawElementSource = computed(() =>
  Object.hasOwn(ELEMENT_SOURCES, props.item.parent),
);

const previewCode = ref(props.item.preview);

const highlightedCodeHtml = ref("");
let codeHighlightSeq = 0;

watch(
  () =>
    ({
      useRaw: usesRawElementSource.value,
      preview: previewCode.value,
      code: resolvedCode.value,
    }) as const,
  async ({ useRaw, preview, code }) => {
    if (!useRaw || preview) {
      highlightedCodeHtml.value = "";
      return;
    }
    if (!code) {
      highlightedCodeHtml.value = "";
      return;
    }
    const seq = ++codeHighlightSeq;
    const html = await codeToHtml(code, {
      lang: "vue",
      theme: CODE_THEME,
    });
    if (seq === codeHighlightSeq) {
      highlightedCodeHtml.value = html;
    }
  },
  { immediate: true },
);

const setHeightClass = computed(() => {
  if (props.item.parent === "headers") {
    if (props.item.title === "agency") {
      return "min-h-[305px]";
    }
    return "min-h-[80px] flex items-center justify-center";
  }
  if (props.item.parent === "footers") {
    return "min-h-[420px] flex items-end justify-end";
  }
  if (props.item.parent == "hero") {
    return "max-h-[720px]";
  }
  if (props.item.parent == "features") {
    return "min-h-[420px]";
  }
  if (props.item.parent == "cta") {
    return "min-h-[540px] flex items-center justify-center";
  }

  if (props.item.parent == "testimonials") {
    return "min-h-[1024px] flex items-center justify-center";
  }
  if (props.item.parent == "gallery") {
    return "min-h-[1024px] flex items-center justify-center";
  }
});

function copyCode() {
  const { copy, copied } = useClipboard();
  copy(resolvedCode.value);
  if (props.title) {
    current.value = props.title;
  }


  window.umami.track(`component-copied-${props.item.parent.toLowerCase()}-${props.title?.toLowerCase()}`);

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>

<style scoped>
/* Preview ↔ Code: opacity + transform only (GPU-friendly). Easing: ease-out-quint per animations playbook. */
.wrapper-panel-enter-active {
  transition:
    opacity 220ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
}

.wrapper-panel-leave-active {
  transition:
    opacity 175ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 175ms cubic-bezier(0.23, 1, 0.32, 1);
}

.wrapper-panel-enter-from,
.wrapper-panel-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {

  .wrapper-panel-enter-active,
  .wrapper-panel-leave-active {
    transition: none;
  }

  .wrapper-panel-enter-from,
  .wrapper-panel-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>

<style>
pre {
  padding: 0.75rem;
}
</style>