export const THEME_STORAGE_KEY = "ogs-luke-theme";
export type Theme = "light" | "dark" | "system";
export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}
// Trusted static bootstrap runs before paint; storage may be unavailable.
export const themeScript = `(function(){var t='system';try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');if(s==='light'||s==='dark'||s==='system')t=s}catch(e){}var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=t;})()`;
