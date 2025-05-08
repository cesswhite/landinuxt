export type Elements = "hero" | "headers" | "features" | "footers" | "cta" | 'testimonials' | 'contact' | 'logos' | 'faq' | 'auth';
export type LandingPages = 'simple' | 'showcase' | 'saas' | 'agency'
export interface Component {
  name: Elements;
  total: number;
}
export interface Landing {
  name: LandingPages;
  image: string
}
export interface Repository {
  name: string
  url: string
  description: string
  image: string
  isPremium: boolean
}
declare global {
  interface Window {
    umami: {
      track: (event: string) => void;
    }
  }
}
