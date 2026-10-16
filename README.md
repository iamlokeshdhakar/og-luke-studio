# OG’s Luke Studio

Brand foundation built with Next.js 16 App Router, React 19, Tailwind CSS v4, and the existing shadcn/Base UI setup. The home page is an interactive brand guide, not a product feature.

## Run

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Open http://localhost:3000. Use the header selector to preview light, dark, or system mode.

## Build on the foundation

- `src/app/globals.css`: the source of truth for brand primitives, semantic theme colors, typography, spacing, radius, elevation, and motion.
- `src/components/ui/`: buttons, inputs, cards, badges, labels, field composition, and separators.
- `src/components/brand/`: vector motifs, wordmark, monogram, navigation, section headings, and interactive component specimens.
- `src/components/theme-provider.tsx`: persisted light/dark/system preferences and system/cross-tab synchronization.
- `public/brand/`: portable SVG mark and repeating pattern. No SVG loader is required.
- [Design system guide](docs/design-system.md): visual decisions, usage, accessibility, and reference fidelity.

Read the relevant guides in `node_modules/next/dist/docs/` before changing Next.js code, as required by AGENTS.md.
