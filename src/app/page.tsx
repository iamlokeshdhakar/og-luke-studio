import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Camera,
  Gem,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import { ComponentSpecimens } from "@/components/brand/component-specimens";
import {
  ArchMotif,
  BrandMonogram,
  BrandWordmark,
  CircleMotif,
  StudioSlats,
} from "@/components/brand/graphics";
import { BrandNavigation } from "@/components/brand/navigation";
import { SectionHeading } from "@/components/brand/section-heading";
import { Separator } from "@/components/ui/separator";

const palette = [
  {
    name: "Deep Forest Green",
    hex: "#163B33",
    token: "--brand-forest",
    className: "bg-brand-forest text-brand-ivory",
    role: "Grounded. Rich. Enduring.",
    ratio: "01 / Primary",
  },
  {
    name: "Warm Luxe Gold",
    hex: "#C8934E",
    token: "--brand-gold",
    className: "bg-brand-gold text-brand-ink",
    role: "A considered touch of warmth.",
    ratio: "02 / Accent",
  },
  {
    name: "Soft Ivory Beige",
    hex: "#F3E7D7",
    token: "--brand-ivory",
    className: "bg-brand-ivory text-brand-forest",
    role: "Quiet space for bold ideas.",
    ratio: "03 / Foundation",
  },
];

export default function Home() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <BrandNavigation />
      <main id="main-content" tabIndex={-1} className="page-shell">
        <section
          className="section-block grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]"
          aria-labelledby="brand-title"
        >
          <div className="flex flex-col items-start gap-8">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Brand identity / Vol. 01
            </p>
            <h1 id="brand-title">
              A considered
              <br />
              creative{" "}
              <em className="font-normal text-accent-text">identity.</em>
            </h1>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Rooted in forest. Warmed by gold. Framed in ivory.
              <br className="hidden sm:block" /> The visual world of OG’s Luke
              Studio.
            </p>
            <a className="brand-link mt-2" href="#identity">
              Discover the foundation{" "}
              <ArrowDown aria-hidden="true" className="ml-5 size-4" />
            </a>
            <p className="eyebrow mt-5 text-muted-foreground">
              Luxury &nbsp; · &nbsp; Minimal &nbsp; · &nbsp; Editorial &nbsp; ·
              &nbsp; Studio
            </p>
          </div>
          <figure className="brand-stage relative flex aspect-[1.05] flex-col items-center justify-center overflow-hidden rounded-t-[45%] border border-brand-gold/40 px-7 pb-10 pt-14 shadow-elevated">
            <div className="absolute inset-4 rounded-t-[45%] border border-brand-gold/30" />
            <BrandMonogram className="relative w-[86%] max-w-80" />
            <figcaption className="relative text-center">
              <span className="block font-serif text-3xl tracking-[0.2em]">
                LUKE STUDIO
              </span>
              <span className="mt-3 block text-label uppercase tracking-[0.3em]">
                Space for bold ideas
              </span>
            </figcaption>
          </figure>
        </section>

        <section id="identity" className="section-block">
          <SectionHeading number="01" title="An identity, with intention.">
            An elegant wordmark. An architectural emblem. One unmistakable
            visual language.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-[1.7fr_1fr]">
            <figure>
              <div className="specimen-tile min-h-72">
                <BrandWordmark />
              </div>
              <figcaption className="mt-4 flex justify-between gap-4 text-xs text-muted-foreground">
                <span>Primary wordmark</span>
                <span>01.01</span>
              </figcaption>
            </figure>
            <figure>
              <div className="brand-stage flex min-h-72 items-center justify-center">
                <BrandMonogram className="w-56" />
              </div>
              <figcaption className="mt-4 flex justify-between gap-4 text-xs text-muted-foreground">
                <span>Architectural monogram</span>
                <span>01.02</span>
              </figcaption>
            </figure>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { name: "Luxury", copy: "Quality in every detail.", icon: Gem },
              { name: "Minimal", copy: "Only what matters.", icon: Sprout },
              {
                name: "Editorial",
                copy: "A distinct point of view.",
                icon: BookOpen,
              },
              { name: "Studio", copy: "Made for expression.", icon: Camera },
            ].map(({ name, copy, icon: Icon }) => (
              <div key={name} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent text-accent-text">
                  <Icon
                    className="size-5"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="text-2xl">{name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="palette" className="section-block">
          <SectionHeading number="02" title="A naturally refined palette.">
            Three signature colors form the foundation. Supporting tones keep
            every interface clear and comfortable.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-3">
            {palette.map((color) => (
              <figure key={color.hex}>
                <div
                  className={`flex aspect-[1.15] flex-col justify-between p-6 ${color.className}`}
                >
                  <span className="eyebrow">{color.ratio}</span>
                  <span className="font-serif text-3xl lg:text-4xl">
                    {color.name}
                  </span>
                  <div className="flex flex-wrap justify-between gap-2 font-mono text-xs">
                    <span>{color.hex}</span>
                    <span>{color.token}</span>
                  </div>
                </div>
                <figcaption className="mt-4 text-xs text-muted-foreground">
                  {color.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: "Background", color: "bg-background" },
              { name: "Surface", color: "bg-card" },
              { name: "Muted", color: "bg-muted" },
              { name: "Border", color: "bg-border" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <span
                  className={`size-9 shrink-0 rounded-full border border-input ${item.color}`}
                />
                <span className="text-xs text-muted-foreground">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Signature colors remain constant. Interface tones adapt to your
            selected theme.
          </p>
        </section>

        <section id="typography" className="section-block">
          <SectionHeading number="03" title="Two voices. One story.">
            Expressive serif forms meet a precise, modern sans serif. A balance
            of character and clarity.
          </SectionHeading>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-5 border-b border-border pb-8 md:border-r md:border-b-0 md:pr-10">
              <p className="eyebrow">Primary / Cormorant Garamond</p>
              <p className="font-serif text-[8rem] leading-none tracking-tight">
                Aa<span className="text-accent-text">.</span>
              </p>
              <p className="font-serif text-3xl">
                The art of being <em>intentional.</em>
              </p>
              <p className="text-xs text-muted-foreground">
                Regular 400 · Medium 500 · Semibold 600
                <br />
                Display, headings, wordmarks & editorial moments
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="eyebrow">Secondary / Manrope</p>
              <p className="text-[7rem] font-light leading-[1.14] tracking-tight">
                Aa<span className="text-accent-text">.</span>
              </p>
              <p className="text-xl">Clarity in every little detail.</p>
              <p className="text-xs text-muted-foreground">
                Regular 400 · Medium 500 · Semibold 600
                <br />
                Body, navigation, labels & interface elements
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            {[
              {
                label: "Display",
                style: "font-serif text-display",
                text: "Make room.",
                detail: "56–108 / 0.98",
              },
              {
                label: "Heading",
                style: "font-serif text-heading",
                text: "A different perspective.",
                detail: "40–64 / 1.08",
              },
              {
                label: "Title",
                style: "font-serif text-title",
                text: "Details make the difference.",
                detail: "28–40 / 1.15",
              },
              {
                label: "Body",
                style: "text-base",
                text: "A curated space for photography, content, and creative expression.",
                detail: "16 / 1.7",
              },
              {
                label: "Label",
                style: "eyebrow",
                text: "Thoughtfully made, always",
                detail: "11 / 1.5 / +18%",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-t border-border py-6 md:grid-cols-[100px_1fr_130px] md:items-center"
              >
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
                <p className={item.style}>{item.text}</p>
                <span className="font-mono text-xs text-muted-foreground md:text-right">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="elements" className="section-block">
          <SectionHeading number="04" title="A language beyond words.">
            Architectural arches, rhythmic slats, and overlapping forms echo the
            warmth and depth of the studio.
          </SectionHeading>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <figure>
              <div className="specimen-tile">
                <ArchMotif className="h-40" />
              </div>
              <figcaption className="eyebrow mt-4">01 / Arch motif</figcaption>
            </figure>
            <figure>
              <div className="specimen-tile">
                <StudioSlats className="h-40" />
              </div>
              <figcaption className="eyebrow mt-4">
                02 / Studio slats
              </figcaption>
            </figure>
            <figure>
              <div className="specimen-tile">
                <CircleMotif className="w-full max-w-48" />
              </div>
              <figcaption className="eyebrow mt-4">
                03 / Circle elements
              </figcaption>
            </figure>
            <figure>
              <div className="relative min-h-52 overflow-hidden border border-border">
                <Image
                  src="/brand/arch-pattern.svg"
                  alt="Repeating forest arches outlined in gold on ivory"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-4">
                04 / Repeat pattern
              </figcaption>
            </figure>
          </div>
          <a
            href="/brand/arch-pattern.svg"
            download
            className="brand-link mt-6"
          >
            Download the pattern SVG{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </section>

        <section id="components" className="section-block">
          <SectionHeading number="05" title="The building blocks.">
            A shared set of quiet, useful components. Consistent in character,
            responsive by nature.
          </SectionHeading>
          <ComponentSpecimens />
        </section>

        <section id="tokens" className="section-block">
          <SectionHeading number="06" title="Consistency, by design.">
            A deliberate rhythm of space, restrained corners, and soft elevation
            ties every element together.
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="token-cell">
              <p className="eyebrow">Spacing / 4px rhythm</p>
              <div className="flex h-24 items-end gap-3">
                {[4, 8, 16, 24, 32, 48].map((size) => (
                  <div className="flex flex-col items-center gap-2" key={size}>
                    <div className="w-5 bg-accent" style={{ height: size }} />
                    <span className="font-mono text-xs text-muted-foreground">
                      {size}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Tailwind spacing scale · generous section spacing
              </p>
            </div>
            <div className="token-cell">
              <p className="eyebrow">Shape / Subtle softness</p>
              <div className="flex h-24 items-center gap-4">
                <span className="size-14 rounded-sm border border-input" />
                <span className="size-14 rounded-md border border-input" />
                <span className="size-14 rounded-xl border border-input" />
                <span className="size-14 rounded-full border border-input" />
              </div>
              <p className="text-xs text-muted-foreground">
                3px · 6px · 12px · full
              </p>
            </div>
            <div className="token-cell">
              <p className="eyebrow">Depth / Quiet elevation</p>
              <div className="flex h-24 items-center gap-6">
                <span className="h-14 w-20 rounded-md bg-card shadow-soft" />
                <span className="h-14 w-20 rounded-md bg-card shadow-elevated" />
              </div>
              <p className="text-xs text-muted-foreground">
                Soft · elevated / motion respects user preference
              </p>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <h3>One identity. In every light.</h3>
            <p className="section-copy">
              Use the theme selector above to explore light, dark, or your
              system preference. Every component shares the same adaptive
              foundation.
            </p>
          </div>
        </section>
      </main>
      <footer className="page-shell flex flex-col justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <BrandWordmark compact />
        <p className="eyebrow text-muted-foreground">
          Brand foundation · Version 1.0
        </p>
        <a href="#top" className="brand-link">
          Back to top <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </footer>
    </div>
  );
}
