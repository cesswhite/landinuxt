export type Elements = "hero" | "headers" | "features" | "footers" | "cta" | 'testimonials' | 'contact' | 'logos' | 'faq';
export type LandingPages = 'simple'

export interface Component {
  name: Elements;
  total: number;
}

export interface Landing {
  name: LandingPages;
  image: string
}
