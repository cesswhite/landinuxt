import type { Component } from "../../types/index";

export async function fetchElementsCategories(): Promise<Component[]> {
  const [
    _hero,
    _headers,
    _features,
    _footers,
    _cta,
    _testimonials,
    _contact,
    _logos,
    _faq,
    _auth,
    _gallery,
  ] = await Promise.all([
    queryContent("hero").find(),
    queryContent("headers").find(),
    queryContent("features").find(),
    queryContent("footers").find(),
    queryContent("cta").find(),
    queryContent("testimonials").find(),
    queryContent("contact").find(),
    queryContent("logos").find(),
    queryContent("faq").find(),
    queryContent("auth").find(),
    queryContent("gallery").find(),
  ]);

  return [
    { name: "headers", total: _headers.length },
    { name: "hero", total: _hero.length },
    { name: "logos", total: _logos.length },
    { name: "features", total: _features.length },
    { name: "cta", total: _cta.length },
    { name: "testimonials", total: _testimonials.length },
    { name: "contact", total: _contact.length },
    { name: "faq", total: _faq.length },
    { name: "footers", total: _footers.length },
    { name: "auth", total: _auth.length },
    { name: "gallery", total: _gallery.length },
  ];
}
