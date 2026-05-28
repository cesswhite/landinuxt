import type { Component, ElementCatalogItem, Elements } from "../../types/index";
import { categoryNavLabel } from "./elementsNav";

const ELEMENT_PARENTS: Elements[] = [
  "hero",
  "headers",
  "features",
  "footers",
  "cta",
  "testimonials",
  "contact",
  "logos",
  "faq",
  "auth",
  "gallery",
];

function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}

function matchesNeedle(text: string, needle: string) {
  return text.toLowerCase().includes(needle);
}

function categoryHaystack(name: Elements) {
  return [name, categoryNavLabel(name)].join(" ");
}

export async function fetchElementsCatalog(): Promise<ElementCatalogItem[]> {
  const collections = await Promise.all(
    ELEMENT_PARENTS.map((parent) => queryContent(parent).find()),
  );

  return collections.flatMap((items) =>
    items.map((item) => ({
      title: String(item.title ?? ""),
      description: String(item.description ?? ""),
      parent: String(item.parent) as Elements,
      component: Number(item.component ?? 0),
      tags: Array.isArray(item.tags) ? item.tags.map(String) : [],
      animated: Boolean(item.animated),
      dark: Boolean(item.dark),
    })),
  );
}

export function filterCategoriesBySearch(
  categories: Component[],
  query: string,
): Component[] {
  const needle = normalizeQuery(query);
  if (!needle) {
    return categories;
  }

  return categories.filter((category) =>
    matchesNeedle(categoryHaystack(category.name), needle),
  );
}

export function filterComponentsBySearch(
  catalog: ElementCatalogItem[],
  query: string,
): ElementCatalogItem[] {
  const needle = normalizeQuery(query);
  if (!needle) {
    return [];
  }

  return catalog.filter((item) => {
    const fields = [
      item.title,
      item.description,
      categoryHaystack(item.parent),
      ...item.tags,
    ];

    return fields.some((field) => matchesNeedle(field, needle));
  });
}

export function componentAnchorId(title: string) {
  return `component-${title}`;
}

export function componentDetailPath(item: Pick<ElementCatalogItem, "parent" | "title">) {
  return `/components/${item.parent}#${componentAnchorId(item.title)}`;
}
