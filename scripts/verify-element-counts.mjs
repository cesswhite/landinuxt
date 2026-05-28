#!/usr/bin/env node
/**
 * Ensures each content category has the same number of numbered .md and .vue files.
 */
import { readdirSync, existsSync } from "node:fs";
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

function countNumberedFiles(dir) {
  if (!existsSync(dir)) {
    return 0;
  }
  return readdirSync(dir).filter((f) => /^\d+\.(md|vue)$/.test(f)).length;
}

let failed = false;

for (const [contentDir, vueFolder] of Object.entries(FOLDER_BY_CONTENT_DIR)) {
  const contentFolder = readdirSync(contentRoot).find(
    (name) => name.replace(/^\d+\./, "") === contentDir,
  );
  if (!contentFolder) {
    console.error(`Missing content folder for category: ${contentDir}`);
    failed = true;
    continue;
  }

  const mdCount = countNumberedFiles(join(contentRoot, contentFolder));
  const vueCount = countNumberedFiles(join(elementsRoot, vueFolder));

  if (mdCount !== vueCount) {
    console.error(
      `${contentDir}: content has ${mdCount} .md files, Elements/${vueFolder} has ${vueCount} .vue files`,
    );
    failed = true;
  } else {
    console.log(`ok ${contentDir}: ${mdCount}`);
  }
}

if (failed) {
  process.exit(1);
}

console.log("All element categories are in sync.");
