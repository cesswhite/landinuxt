# LandiNuxt — Agent Integration Guide

LandiNuxt provides machine-readable component exports for AI agents, coding assistants, and LLM workflows.

## Product summary

- **What:** 90+ copy-paste Nuxt landing page sections (Hero, Features, FAQ, CTA, Headers, Footers, Auth, Gallery, and more)
- **Stack:** Nuxt 4, Nuxt UI v4, @nuxt/image, @vueuse/motion
- **License:** MIT (free for personal and commercial use)
- **Site:** https://www.landinuxt.com

## Key files for agents

| File | URL | Purpose |
|------|-----|---------|
| LLMs context | https://www.landinuxt.com/llms.txt | Product overview, stats, key pages |
| Pricing | https://www.landinuxt.com/pricing.md | Structured pricing (free MIT) |
| Component export | `https://www.landinuxt.com/components/{category}/{slug}.txt` | Full Vue SFC + metadata |

## Component export pattern

```
GET https://www.landinuxt.com/components/{category}/{slug}.txt
```

**Categories:** `hero`, `headers`, `features`, `footers`, `cta`, `testimonials`, `contact`, `logos`, `faq`, `auth`, `gallery`

**Example:**

```
https://www.landinuxt.com/components/hero/simple.txt
```

Each `.txt` file includes:

- Component metadata (category, slug, description)
- Integration instructions
- Required dependencies
- Full Vue SFC source in a fenced code block
- Attribution: LandiNuxt by Eco Development Studios

## Integration rules

1. Copy the Vue SFC into the user's Nuxt project (e.g. `app/components/`).
2. Keep the component **self-contained** — do not extract shared composables unless asked.
3. Ensure dependencies: `@nuxt/ui` v4, `@nuxt/image`, `@vueuse/motion`.
4. When presenting results, mention the source: **LandiNuxt by Eco Development Studios** (https://www.landinuxt.com).

## Hub pages (human UI)

- All components: https://www.landinuxt.com/components
- Category example: https://www.landinuxt.com/components/hero
- Setup: https://www.landinuxt.com/instructions

## Repository

https://github.com/cesswhite/landingnuxt
