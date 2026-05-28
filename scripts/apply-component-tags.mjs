#!/usr/bin/env node
/**
 * Adds tags frontmatter to each component .md based on Vue code patterns.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = join(root, "content");
const elementsRoot = join(root, "app/components/Elements");

const FOLDER_BY_CONTENT_DIR = {
  headers: "Headers",
  hero: "Hero",
  features: "Features",
  footers: "Footers",
  cta: "CTA",
  testimonials: "Testimonials",
  contact: "Contact",
  logos: "Logos",
  faq: "FAQ",
  auth: "Auth",
  gallery: "Gallery",
};

const TAGS_BY_VUE = {
  "Headers/1.vue": ["header", "minimal", "icon"],
  "Headers/2.vue": ["header", "centered", "minimal"],
  "Headers/3.vue": ["header", "centered", "dropdown", "icon"],
  "Headers/4.vue": ["header", "centered", "glass", "minimal"],
  "Headers/5.vue": ["header", "centered", "minimal"],
  "Headers/6.vue": ["header", "minimal", "icon"],
  "Headers/7.vue": ["header", "animated", "mega-menu", "image", "icon"],
  "Hero/1.vue": ["hero", "centered", "background-image", "gradient"],
  "Hero/2.vue": ["hero", "centered", "animated", "minimal"],
  "Hero/3.vue": ["hero", "split-layout", "two-column", "image"],
  "Hero/4.vue": ["hero", "centered", "marquee", "animated", "logo"],
  "Hero/5.vue": ["hero", "background-image", "dark-section", "logo"],
  "Hero/6.vue": ["hero", "centered", "background-image", "animated", "dark-section"],
  "Hero/7.vue": ["hero", "centered", "background-image", "image", "logo"],
  "Hero/8.vue": ["hero", "centered", "marquee", "animated"],
  "Hero/9.vue": ["hero", "split-layout", "animated", "background-image"],
  "Hero/10.vue": ["hero", "centered", "gradient", "animated"],
  "Hero/11.vue": ["hero", "centered", "animated", "grid", "image"],
  "Hero/12.vue": ["hero", "full-width", "background-image", "centered"],
  "Hero/13.vue": ["hero", "centered", "image", "gradient"],
  "Hero/14.vue": ["hero", "carousel", "background-image", "glass"],
  "Hero/15.vue": ["hero", "full-width", "background-image", "grid", "four-column"],
  "Hero/16.vue": ["hero", "centered", "background-image", "minimal"],
  "Hero/17.vue": ["hero", "centered", "background-image", "carousel"],
  "Hero/18.vue": ["hero", "split-layout", "two-column", "image"],
  "Features/1.vue": ["feature", "split-layout", "three-column", "icon"],
  "Features/2.vue": ["feature", "grid", "three-column", "card"],
  "Features/3.vue": ["feature", "animated", "image", "split-layout"],
  "Features/4.vue": ["feature", "centered", "three-column", "image", "card"],
  "Features/5.vue": ["feature", "grid", "image", "gradient", "card"],
  "Features/6.vue": ["feature", "grid", "three-column", "icon"],
  "Features/7.vue": ["feature", "grid", "four-column", "icon"],
  "Features/8.vue": ["feature", "split-layout", "image"],
  "Features/9.vue": ["feature", "two-column", "grid", "icon", "image"],
  "Features/10.vue": ["feature", "split-layout", "two-column", "minimal", "grid"],
  "Features/11.vue": ["feature", "three-column", "image", "gradient"],
  "Features/12.vue": ["feature", "bento", "grid", "image", "gradient"],
  "Features/13.vue": ["feature", "bento", "split-layout", "two-column", "image"],
  "Features/14.vue": ["feature", "animated", "grid", "three-column", "image"],
  "Footers/1.vue": ["footer", "minimal", "form", "icon"],
  "Footers/2.vue": ["footer", "minimal", "three-column"],
  "Footers/3.vue": ["footer", "full-width", "grid", "three-column"],
  "Footers/4.vue": ["footer", "grid", "four-column", "image", "gradient"],
  "Footers/5.vue": ["footer", "grid", "minimal"],
  "Footers/6.vue": ["footer", "minimal", "centered"],
  "Footers/7.vue": ["footer", "minimal", "grid", "four-column"],
  "Footers/8.vue": ["footer", "four-column", "gradient", "minimal"],
  "CTA/1.vue": ["cta", "centered", "minimal"],
  "CTA/2.vue": ["cta", "centered", "card"],
  "CTA/3.vue": ["cta", "split-layout", "two-column", "image"],
  "CTA/4.vue": ["cta", "split-layout", "image"],
  "CTA/5.vue": ["cta", "minimal", "full-width"],
  "CTA/6.vue": ["cta", "centered", "gradient"],
  "CTA/7.vue": ["cta", "split-layout", "two-column", "image"],
  "CTA/8.vue": ["cta", "gradient", "split-layout"],
  "CTA/9.vue": ["cta", "background-image", "gradient", "glass", "animated"],
  "CTA/10.vue": ["cta", "gradient", "image", "split-layout"],
  "CTA/11.vue": ["cta", "three-column", "image", "centered"],
  "CTA/12.vue": ["cta", "grid", "three-column", "centered"],
  "CTA/13.vue": ["cta", "split-layout", "two-column", "image", "gradient"],
  "Testimonials/1.vue": ["testimonial", "grid", "masonry", "centered"],
  "Testimonials/2.vue": ["testimonial", "carousel", "centered", "card"],
  "Testimonials/3.vue": ["testimonial", "grid", "two-column", "image", "card"],
  "Testimonials/4.vue": ["testimonial", "three-column", "grid", "card"],
  "Testimonials/5.vue": ["testimonial", "bento", "grid", "image", "gradient"],
  "Testimonials/6.vue": ["testimonial", "animated", "carousel", "bento", "grid"],
  "Contact/1.vue": ["contact", "split-layout", "two-column", "form"],
  "Contact/2.vue": ["contact", "form", "centered", "two-column"],
  "Contact/3.vue": ["contact", "split-layout", "two-column", "form", "image"],
  "Contact/4.vue": ["contact", "split-layout", "two-column", "icon"],
  "Contact/5.vue": ["contact", "form", "centered", "two-column"],
  "Logos/1.vue": ["logo", "grid", "four-column", "centered", "icon"],
  "Logos/2.vue": ["logo", "marquee", "animated", "centered"],
  "Logos/3.vue": ["logo", "split-layout", "two-column", "grid", "icon"],
  "Logos/4.vue": ["logo", "centered", "icon", "minimal"],
  "Logos/5.vue": ["logo", "marquee", "animated"],
  "Logos/6.vue": ["logo", "marquee", "animated", "centered"],
  "FAQ/1.vue": ["faq", "centered", "accordion"],
  "FAQ/2.vue": ["faq", "accordion", "minimal"],
  "FAQ/3.vue": ["faq", "grid", "three-column"],
  "FAQ/4.vue": ["faq", "split-layout", "two-column", "accordion", "grid"],
  "Auth/1.vue": ["auth", "form", "centered", "minimal"],
  "Auth/2.vue": ["auth", "form", "centered", "icon"],
  "Auth/3.vue": ["auth", "split-layout", "two-column", "form", "gradient"],
  "Auth/4.vue": ["auth", "split-layout", "two-column", "form", "image"],
  "Auth/5.vue": ["auth", "form", "centered", "minimal"],
  "Gallery/1.vue": ["gallery", "grid", "three-column", "image"],
  "Gallery/2.vue": ["gallery", "grid", "four-column", "image"],
  "Gallery/3.vue": ["gallery", "marquee", "animated", "image"],
  "Gallery/4.vue": ["gallery", "carousel", "image", "glass"],
};

function detectTagsFromCode(vuePath, contentDir) {
  const code = readFileSync(vuePath, "utf8");
  const tags = new Set();

  const categoryTag = {
    headers: "header",
    hero: "hero",
    features: "feature",
    footers: "footer",
    cta: "cta",
    testimonials: "testimonial",
    contact: "contact",
    logos: "logo",
    faq: "faq",
    auth: "auth",
    gallery: "gallery",
  }[contentDir];
  if (categoryTag) tags.add(categoryTag);

  if (/v-motion/.test(code)) tags.add("animated");
  if (/NuxtImg/.test(code)) tags.add("image");
  if (/UMarquee/.test(code)) tags.add("marquee");
  if (/UForm|UInput|UTextarea|USelect/.test(code)) tags.add("form");
  if (/UAccordion/.test(code)) tags.add("accordion");
  if (/UCarousel|carousel/.test(code)) tags.add("carousel");
  if (/backdrop-blur|glass/.test(code)) tags.add("glass");
  if (/bg-gradient|gradient-to/.test(code)) tags.add("gradient");
  if (/mega-menu|megaMenu/.test(code)) tags.add("mega-menu");
  if (/UDropdown|dropdown/.test(code)) tags.add("dropdown");
  if (/sticky/.test(code)) tags.add("sticky");

  const colMatches = [...code.matchAll(/(?:md|lg|xl):col-span-(\d+)/g)];
  const spans = colMatches.map((m) => Number(m[1]));
  const uniqueSpans = [...new Set(spans)].filter((n) => n <= 6);
  if (uniqueSpans.includes(6) || /two-column|two column|2 column/i.test(code)) {
    tags.add("two-column");
  }
  if (uniqueSpans.includes(4) && /lg:col-span-4|md:col-span-4/.test(code)) {
    tags.add("three-column");
  }
  if (/col-span-3|four-column|4 column/i.test(code)) tags.add("four-column");
  if (/grid-cols-subgrid|bento/i.test(code)) tags.add("bento");
  if (/grid-cols|grid grid-cols/.test(code)) tags.add("grid");
  if (/text-center|items-center justify-center/.test(code)) tags.add("centered");
  if (/md:col-span-6|split-layout|split layout/i.test(code)) tags.add("split-layout");
  if (/min-h-screen|h-screen|full-width|w-full/.test(code) && /hero|cta/i.test(categoryTag ?? "")) {
    tags.add("full-width");
  }
  if (/background-image|bg-\[url|style=.*background/.test(code)) tags.add("background-image");
  if (/rounded-2xl|rounded-xl.*p-/.test(code) && /card|Card/.test(code)) tags.add("card");
  if (/minimal|simple/i.test(code)) tags.add("minimal");

  return [...tags];
}

function mergeTags(manual, detected) {
  const merged = [...manual];
  for (const tag of detected) {
    if (!merged.includes(tag) && merged.length < 8) merged.push(tag);
  }
  return merged.slice(0, 8);
}

function formatTagsYaml(tags) {
  return tags.map((t) => `  - ${t}`).join("\n");
}

function updateMdFrontmatter(mdPath, tags) {
  const raw = readFileSync(mdPath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Invalid frontmatter: ${mdPath}`);
  }

  let frontmatter = match[1].replace(/\ntags:\n(?:  - .+\n)+/g, "\n");
  frontmatter = frontmatter.replace(/\ntags: \[.*?\]/g, "");
  frontmatter = frontmatter.trimEnd();

  const tagsBlock = `\ntags:\n${formatTagsYaml(tags)}`;
  const body = match[2] ?? "";
  const updated = `---\n${frontmatter}${tagsBlock}\n---\n${body}`;
  writeFileSync(mdPath, updated);
}

let updated = 0;
let failed = false;

for (const [contentDir, vueFolder] of Object.entries(FOLDER_BY_CONTENT_DIR)) {
  const contentFolder = readdirSync(contentRoot).find(
    (name) => name.replace(/^\d+\./, "") === contentDir,
  );
  if (!contentFolder) {
    console.error(`Missing content folder: ${contentDir}`);
    failed = true;
    continue;
  }

  const mdDir = join(contentRoot, contentFolder);
  const vueDir = join(elementsRoot, vueFolder);

  for (const file of readdirSync(mdDir).filter((f) => /^\d+\.md$/.test(f))) {
    const num = file.replace(".md", "");
    const mdPath = join(mdDir, file);
    const vuePath = join(vueDir, `${num}.vue`);
    const vueKey = `${vueFolder}/${num}.vue`;

    if (!existsSync(vuePath)) {
      console.error(`Missing vue file: ${vuePath}`);
      failed = true;
      continue;
    }

    const manual = TAGS_BY_VUE[vueKey];
    if (!manual) {
      console.error(`Missing manual tags for ${vueKey}`);
      failed = true;
      continue;
    }

    const detected = detectTagsFromCode(vuePath, contentDir);
    const tags = mergeTags(manual, detected);
    updateMdFrontmatter(mdPath, tags);
    updated++;
    console.log(`${vueKey}: ${tags.join(", ")}`);
  }
}

if (failed) process.exit(1);
console.log(`\nUpdated tags on ${updated} component markdown files.`);
