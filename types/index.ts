export type Elements = "hero" | "headers" | "features" | "footers" | "cta";

export interface Component {
  name: Elements;
  total: number;
}
