import { BrandWordmark } from "@/components/brand/graphics";
import { ThemeSelect } from "@/components/theme-provider";
export function BrandNavigation() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="page-shell flex min-h-22 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4">
        <a href="#top" aria-label="OG’s Luke Studio — back to top">
          <BrandWordmark compact />
        </a>
        <nav
          aria-label="Brand guide"
          className="order-3 flex w-full flex-wrap gap-x-6 lg:order-0 lg:w-auto"
        >
          <a className="nav-link" href="#identity">
            Identity
          </a>
          <a className="nav-link" href="#palette">
            Palette
          </a>
          <a className="nav-link" href="#typography">
            Typography
          </a>
          <a className="nav-link" href="#elements">
            Elements
          </a>
          <a className="nav-link" href="#components">
            Components
          </a>
        </nav>
        <ThemeSelect />
      </div>
    </header>
  );
}
