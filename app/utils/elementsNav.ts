import type { Elements } from "../../types/index";

export function categoryNavLabel(name: Elements): string {
  if (name === "cta") {
    return "CTA";
  }
  if (name === "faq") {
    return "FAQ";
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}
