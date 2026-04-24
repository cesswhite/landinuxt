<template>
  <div class="relative mt-24 w-full">
    <div
      class="ring-1 ring-dark-950/10 shadow shadow-dark-950/10 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black mb-12 h-full overflow-hidden rounded-xl bg-dark-50 p-2 lg:h-full">
      <div class="flex flex-col items-start justify-between">
        <div class="text-base">
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
        <div class="mt-4 flex w-full items-center justify-end">
          <UButton @click="previewCode = true" icon="i-heroicons-eye" label="Preview"
            :variant="previewCode ? 'solid' : 'link'" class="cursor-pointer" />
          <UButton @click="previewCode = false" icon="i-heroicons-code-bracket" label="Code"
            :variant="!previewCode ? 'solid' : 'link'" class="cursor-pointer" />
          <UButton @click="copyCode()" :icon="current === props.item.title
            ? 'i-heroicons-clipboard-document-check'
            : 'i-heroicons-clipboard-document-list'
            " variant="ghost" class="cursor-pointer" />
        </div>
      </div>
      <div v-if="previewCode"
        class="scrollbar-hide scrollbar-hide bg-dark-200/80 dark:bg-dark-900 mt-4 h-auto overflow-x-hidden rounded-md p-2"
        :class="setHeightClass">
        <slot name="components" />
      </div>
      <div v-else id="code" class="mt-2 min-h-96">
        <template v-if="usesRawElementSource">
          <div
            class="scrollbar-hide overflow-x-auto rounded-md border border-dark-500/10 text-sm [&_.shiki]:rounded-md [&_pre]:m-0"
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
    return "min-h-[420px] ";
  }
  if (props.item.parent === "footers") {
    return "min-h-[420px] flex items-end justify-end";
  }
  if (props.item.parent == "hero") {
    return "min-h-[1024px]";
  }
  if (props.item.parent == "features") {
    return "min-h-[1024px]";
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
