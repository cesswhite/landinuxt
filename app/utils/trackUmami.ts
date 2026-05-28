export function trackUmami(event: string) {
  if (import.meta.client && typeof window !== "undefined" && window.umami?.track) {
    window.umami.track(event);
  }
}
