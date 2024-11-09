export type Elements = "hero" | "headers" | "features" | "footers" | "cta" | 'testimonials' | 'contact' | 'logos';

export interface Component {
  name: Elements;
  total: number;
}
