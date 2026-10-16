# OG’s Luke Studio design system

## Reference and interpretation

The supplied identity image is the visual reference. Its exact named colors are Deep Forest Green `#163B33`, Warm Luxe Gold `#C8934E`, and Soft Ivory Beige `#F3E7D7`. These primitive colors stay constant in both modes.

The image reads “OG’s Luxe Studios”; the implementation uses “OG’s Luke Studio” as requested. The image labels fonts only as “Elegant Serif” and “Clean Sans Serif,” without font names or numeric specifications. Cormorant Garamond and Manrope are selected interpretations, not identified original typefaces. Sizes, spacing, semantic colors, dark mode, and interaction states extend the reference for a responsive, accessible interface.

The reference is a raster mood board, not an original SVG asset package. The monogram is an intentionally simplified vector adaptation of its architectural O and serif G. It does not reproduce the 3D photography, metallic lighting, plants, or photographic signage mockups. Keep the simplified mark for interface use; retain original master artwork for any future exact dimensional logo reproduction. The arch, slats, circles, and repeating arch pattern are recreated as editable vectors. Do not substitute the mood board itself for a production logo.

## Tokens and themes

All tokens live in `src/app/globals.css`, mapped into Tailwind v4 through `@theme inline`. Use semantic utilities in application UI: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border`, `border-input`, `ring-ring`. Reserve `brand-*` utilities for intentionally fixed brand artwork.

| Role | Light | Dark |
| --- | --- | --- |
| Background / foreground | `#FAF6EF` / `#163B33` | `#101F1A` / `#F3E7D7` |
| Card / card foreground | `#FFFAF3` / `#163B33` | `#172C24` / `#F3E7D7` |
| Primary / primary foreground | `#163B33` / `#FAF6EF` | `#F3E7D7` / `#163B33` |
| Secondary / secondary foreground | `#F3E7D7` / `#163B33` | `#263D32` / `#F3E7D7` |
| Accent / accent foreground | `#C8934E` / `#102820` | Same |
| Accent text | `#80551F` | `#DFB478` |
| Muted / muted foreground | `#EFE9DF` / `#61675E` | `#20372D` / `#B5BDAC` |
| Border / control border | `#D6C9B5` / `#8B8879` | `#425448` / `#86927E` |
| Focus ring | `#80551F` | `#DFB478` |
| Success / subtle surface | `#286040` / `#E4EEE3` | `#B0D3AC` / `#243E2D` |
| Warning / subtle surface | `#80551F` / `#F7EAD3` | `#EDC58B` / `#403321` |
| Destructive / subtle surface | `#A1302C` / `#F8E8E4` | `#FFAAA0` / `#442923` |
| Information / subtle surface | `#335C76` / `#E4EDF1` | `#AACDE4` / `#243844` |

Gold is used for decoration and filled accents with dark text. Use `accent-text` for readable gold-colored text on page surfaces. Do not use ivory/white body text on the gold fill. Decorative rules use `border`; input boundaries use the stronger `input` color.

`ThemeProvider` exposes a global theme selector. Default is the OS preference. A trusted inline script applies the preference before first paint. `localStorage` uses `ogs-luke-theme`; unavailable storage is safely ignored. System changes are followed only in system mode. Changes synchronize between tabs. Hydration suppression is limited to the root HTML element. A future strict CSP must allow the bootstrap with a nonce or hash; no dynamic user content is interpolated into it.

## Type and rhythm

Fonts are built and self-hosted through `next/font/google`; visitors make no Google font requests. A fresh build needs access to the font source. Serif weights: 400, 500, 600, with italics. Sans is variable; standard interface weights are 400, 500, 600. Fallbacks are Georgia and Arial.

| Utility | Size | Line height | Use |
| --- | --- | --- | --- |
| `text-display font-serif` | 56–108px, fluid | 0.98 | Editorial hero |
| `text-heading font-serif` | 40–64px, fluid | 1.08 | Section headings |
| `text-title font-serif` | 28–40px, fluid | 1.15 | Titles |
| `text-base` | 16px | 1.7 body default | Body |
| `text-sm` | 14px | Tailwind default | Interface copy |
| `eyebrow` | 11px, 0.18em tracking | 1.5 | Short uppercase labels |

Headings use semantic h1–h4 tags. Global type styles are defaults; utilities can select a visual size independently of the semantic heading level.

Spacing uses Tailwind’s 4px rhythm (4, 8, 12, 16, 24, 32, 48, 64, 96). Page gutters and section spacing use responsive tokens. Radius: small 3px, default 6px, large 9px, XL 12px; full rounding is reserved for badges and symbolic circles. `shadow-soft` and `shadow-elevated` adapt to both themes. Motion tokens are 160ms/240ms with `--ease-brand`; reduced-motion preference overrides animations, transitions, and smooth scrolling.

## Components

Reuse installed components; keep layout classes on consumers and variant styling in component definitions.

```tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

<Button variant="accent">Continue</Button>
<Badge variant="success">Ready</Badge>
<Field>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" aria-describedby="name-help" />
  <FieldDescription id="name-help">Your preferred display name.</FieldDescription>
</Field>
```

- Button variants: default, accent, secondary, outline, ghost, destructive, link. Default and icon buttons are 44px; large is 48px. Smaller variants require adequate surrounding spacing for touch use. Use `buttonVariants` on anchors for link semantics.
- Badge variants add success, warning, info, and accent. Always include readable status text.
- Compose cards with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
- Input labels need `htmlFor` and matching IDs. Connect descriptions/errors with `aria-describedby`; combine `data-invalid` on Field and `aria-invalid` on Input. Disabled controls use the native disabled attribute.
- `brand-link`, `nav-link`, `eyebrow`, `page-shell`, and `SectionHeading` provide shared editorial styling.
- Lucide icons use a restrained line style. Hide decorative icons from assistive technology; label icon-only controls.

## SVG handling

Use typed React SVG components from `components/brand/graphics.tsx` for theme-aware inline vectors. They are decorative (`aria-hidden`); meaningful instances use surrounding text or figure captions. Motifs inherit theme colors, while the signature monogram keeps fixed brand colors. `public/brand/mark.svg` is a portable path-only small mark used by metadata. `arch-pattern.svg` is a standalone downloadable pattern. Static SVG files work through Next Image or ordinary image URLs; no SVGR dependency or unsafe SVG configuration is required. Importing `.svg` as a React component is intentionally not configured.

## Verification

Run `pnpm lint` and `pnpm build`. Inspect `/` at mobile, tablet, and desktop widths in both themes. Check theme persistence after reload, OS mode changes, keyboard focus and skip navigation, editable/disabled/error fields, action feedback, and absence of horizontal overflow. Component specimens are demonstrations only; they do not submit data or implement product functionality.

### Verification recorded — 2 October 2026

- Production compilation, TypeScript, and Biome validation passed.
- Chromium + axe-core: zero WCAG A/AA rule violations at 320, 390, 768, and 1440px, in light and dark themes, after transitions settled. No horizontal overflow or browser runtime errors.
- Theme reload persistence, live OS preference changes, cross-tab synchronization, and unavailable-localStorage fallback passed.
- Interactive action feedback, editable input, native disabled controls, keyboard skip navigation, and reduced-motion behavior passed.
- Keyboard focus is a solid 2px theme-colored outline. Primary hover colors and active displacement were checked in both themes.
- Thirty-two semantic color pair checks passed: normal text pairs at least 4.5:1; focus/control boundaries at least 3:1. Light muted-on-muted is 4.82:1; gold-fill text is 5.75:1.
- Desktop and mobile screenshots were inspected against the supplied reference for palette, serif/sans hierarchy, whitespace, rules, and motifs. Exact typeface identification and photographic/3D logo reproduction remain outside what can be recovered from this raster reference.

These automated checks complement visual review; they are not a full assistive-technology or cross-browser certification. Verification packages were installed only into ignored build tooling, with no new application dependencies.
