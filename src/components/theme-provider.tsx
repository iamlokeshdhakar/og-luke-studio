"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = (value: Theme) => {
      document.documentElement.dataset.theme = value;
      document.documentElement.classList.toggle(
        "dark",
        value === "dark" || (value === "system" && media.matches),
      );
      setThemeState(value);
    };
    const initial = document.documentElement.dataset.theme;
    apply(isTheme(initial) ? initial : "system");
    const onSystemChange = () => {
      if (document.documentElement.dataset.theme === "system") apply("system");
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null)
        apply(isTheme(event.newValue) ? event.newValue : "system");
    };
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  function setTheme(value: Theme) {
    setThemeState(value);
    document.documentElement.dataset.theme = value;
    document.documentElement.classList.toggle(
      "dark",
      value === "dark" ||
        (value === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value);
    } catch {
      /* Persistence is optional. */
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function ThemeSelect() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeSelect requires ThemeProvider");
  return (
    <select
      aria-label="Color theme"
      className="theme-select"
      value={context.theme}
      onChange={(event) => {
        if (isTheme(event.target.value)) context.setTheme(event.target.value);
      }}
    >
      <option value="system">System theme</option>
      <option value="light">Light theme</option>
      <option value="dark">Dark theme</option>
    </select>
  );
}
