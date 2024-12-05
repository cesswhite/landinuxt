export type Elements = "hero" | "headers" | "features" | "footers" | "cta" | 'testimonials' | 'contact' | 'logos' | 'faq';

export interface Component {
  name: Elements;
  total: number;
}
