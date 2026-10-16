import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "OG’s Luke Studio — Brand & Design System",
  description:
    "The visual foundation of OG’s Luke Studio. An editorial identity in forest, gold, and ivory.",
  icons: { icon: "/brand/mark.svg" },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable}`}
    >
      <head>
        <script>{themeScript}</script>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
