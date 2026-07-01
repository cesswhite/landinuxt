# LandiNuxt

**The AI-agent-ready Nuxt landing library.** 90+ copy-paste sections built on Nuxt UI v4 — each with machine-readable `.txt` exports, CLI install, and prompts for Cursor and Claude.

## Why LandiNuxt

- **For AI agents:** Every section has a fetchable `.txt` export with full Vue SFC source
- **CLI install:** `npx landinuxt add hero/simple` — no manual copy-paste
- **For humans:** Browse, copy, and customize 90+ hero, features, CTA, FAQ, and more sections
- **Nuxt native:** Nuxt 4, Nuxt UI v4, `@nuxt/image`, `@vueuse/motion`

**Site:** https://www.landinuxt.com · **Agent guide:** https://www.landinuxt.com/AGENTS.md

## Quick start

### Option A — CLI (recommended)

```bash
# In your Nuxt project
npx landinuxt add hero/simple
npx landinuxt add features/bento
npx landinuxt list
```

Writes to `app/components/LandiHeroSimple.vue` by default.

### Option B — Ask your coding agent

Tell Cursor, Claude Code, or Windsurf:

> Fetch https://www.landinuxt.com/components/hero/simple.txt and add the Vue SFC to my Nuxt project.

Download the Cursor rule: https://www.landinuxt.com/cursor-rules/landinuxt.mdc

### Option C — Copy from the web

Browse https://www.landinuxt.com/components and copy the Vue source, or use the **Copy for AI** button on any section.

## Requirements

- **Nuxt 4**
- **@nuxt/ui** v4
- **@nuxt/image**
- **@vueuse/motion**

See [setup instructions](https://www.landinuxt.com/instructions) for theme tokens and fonts.

## Agent integration files

| File | URL |
|------|-----|
| Agent guide | https://www.landinuxt.com/AGENTS.md |
| LLMs context | https://www.landinuxt.com/llms.txt |
| Component export | `https://www.landinuxt.com/components/{category}/{slug}.txt` |
| For agents page | https://www.landinuxt.com/for-agents |
| Cursor rule | https://www.landinuxt.com/cursor-rules/landinuxt.mdc |

## Development (this repo)

```bash
git clone https://github.com/cesswhite/landingnuxt.git
cd landingnuxt
bun install
bun run dev
```

```bash
bun run verify:elements  # content/*.md counts match Elements/*.vue
bun run typecheck
bun run check            # verify + typecheck + build
bun run cli -- add hero/simple --dry-run  # test CLI locally
```

### CLI package

The CLI lives in `packages/cli/`. To publish to npm:

```bash
cd packages/cli && npm publish
```

## Contributing

Contributions welcome! When adding a section, follow [`.cursor/skills/add-landing-component/SKILL.md`](.cursor/skills/add-landing-component/SKILL.md). Run `bun run verify:elements` before opening a PR.

## License

MIT — see [LICENSE](LICENSE).
