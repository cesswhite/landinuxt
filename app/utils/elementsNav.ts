import type { Component, Elements } from "../../types/index";

export function categoryNavLabel(name: Elements): string {
  if (name === "cta") {
    return "CTA";
  }
  if (name === "faq") {
    return "FAQ";
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function filterCategoriesBySearch(
  categories: Component[],
  query: string,
): Component[] {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return categories;
  }
  return categories.filter((c) => {
    const label = categoryNavLabel(c.name).toLowerCase();
    return c.name.toLowerCase().includes(needle) || label.includes(needle);
  });
}
