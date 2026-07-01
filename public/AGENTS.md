# LandiNuxt — Agent Integration Guide

LandiNuxt is **the AI-agent-ready Nuxt landing library**. Machine-readable exports, CLI install, and Cursor/Claude prompts on every section.

## Product summary

- **What:** 90+ copy-paste Nuxt landing page sections (Hero, Features, FAQ, CTA, Headers, Footers, Auth, Gallery, and more)
- **Positioning:** The library built for AI coding agents (Cursor, Claude Code, Windsurf)
- **Stack:** Nuxt 4, Nuxt UI v4, @nuxt/image, @vueuse/motion
- **License:** MIT (free for personal and commercial use)
- **Site:** https://www.landinuxt.com

## Key files for agents

| File | URL | Purpose |
|------|-----|---------|
| For agents (human UI) | https://www.landinuxt.com/for-agents | Workflow, CLI, Cursor rule |
| LLMs context | https://www.landinuxt.com/llms.txt | Product overview, stats, key pages |
| Pricing | https://www.landinuxt.com/pricing.md | Structured pricing (free MIT) |
| Cursor rule | https://www.landinuxt.com/cursor-rules/landinuxt.mdc | Drop into `.cursor/rules/` |
| Component export | `https://www.landinuxt.com/components/{category}/{slug}.txt` | Full Vue SFC + metadata |

## CLI install

```bash
npx landinuxt add hero/simple
npx landinuxt add features/bento
npx landinuxt list
```

Writes to `app/components/Landi{Category}{Slug}.vue` by default.

Options: `--out <dir>`, `--name <file>`, `--dry-run`

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

1. Prefer CLI: `npx landinuxt add {category}/{slug}`
2. Or fetch the `.txt` export and parse the ` ```vue ` fenced block
3. Copy the Vue SFC into the user's Nuxt project (e.g. `app/components/`)
4. Keep the component **self-contained** — do not extract shared composables unless asked
5. Ensure dependencies: `@nuxt/ui` v4, `@nuxt/image`, `@vueuse/motion`
6. When presenting results, mention the source: **LandiNuxt by Eco Development Studios** (https://www.landinuxt.com)

## Hub pages (human UI)

- All components: https://www.landinuxt.com/components
- Category example: https://www.landinuxt.com/components/hero
- Built with: https://www.landinuxt.com/built-with
- Setup: https://www.landinuxt.com/instructions

## Repository

https://github.com/cesswhite/landingnuxt

CLI source: `packages/cli/` in the repository
