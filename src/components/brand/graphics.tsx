import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type GraphicProps = SVGProps<SVGSVGElement>;
/** Decorative graphics. Supply meaningful alternatives in the parent figure. */
export function ArchMotif({ className, ...props }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 200 230"
      fill="none"
      aria-hidden="true"
      className={cn("text-accent", className)}
      {...props}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M ${14 + i * 9} 224 V 100 A ${86 - i * 9} ${86 - i * 9} 0 0 1 ${186 - i * 9} 100 V 224`}
          stroke="currentColor"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}
export function StudioSlats({ className, ...props }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 200 230"
      fill="none"
      aria-hidden="true"
      className={cn("text-accent", className)}
      {...props}
    >
      {Array.from({ length: 13 }, (_, i) => i).map((i) => (
        <path
          key={i}
          d={`M ${16 + i * 14} 8 V 224`}
          stroke="currentColor"
          strokeWidth={i % 3 === 0 ? 5 : 2}
        />
      ))}
    </svg>
  );
}
export function CircleMotif({ className, ...props }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle
        cx="95"
        cy="91"
        r="78"
        fill="var(--brand-forest)"
        stroke="var(--brand-gold)"
        strokeWidth="0.5"
      />
      <circle
        cx="167"
        cy="125"
        r="61"
        fill="var(--brand-gold)"
        fillOpacity="0.88"
      />
      <path
        d="M 156 65 V 185"
        stroke="var(--brand-ivory)"
        strokeOpacity="0.65"
      />
    </svg>
  );
}
export function BrandMonogram({ className, ...props }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M45 210V114a74 74 0 0 1 148 0v96Z"
        fill="var(--brand-ink)"
        stroke="var(--brand-gold)"
        strokeWidth="2"
      />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${54 + i * 8} 209V114a${65 - i * 8} ${65 - i * 8} 0 0 1 ${130 - i * 16} 0v95`}
          stroke="var(--brand-gold)"
          strokeWidth="1"
          opacity={1 - i * 0.14}
        />
      ))}
      <text
        x="104"
        y="219"
        fill="var(--brand-ivory)"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="188"
        letterSpacing="-18"
      >
        G
      </text>
      <text
        x="240"
        y="197"
        fill="var(--brand-gold)"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="80"
      >
        ’s
      </text>
      <path d="M42 230H274" stroke="var(--brand-gold)" strokeWidth="0.8" />
    </svg>
  );
}
export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex flex-col gap-1 leading-none">
      <span
        className={cn(
          "font-serif font-semibold tracking-tight",
          compact ? "text-2xl" : "text-4xl sm:text-5xl",
        )}
      >
        OG’s Luke Studio<span className="text-accent-text">.</span>
      </span>
      {!compact && (
        <span className="eyebrow mt-3 text-center">
          A considered creative space
        </span>
      )}
    </span>
  );
}
