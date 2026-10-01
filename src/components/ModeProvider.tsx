"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Mode = "interactive" | "simple";
export type Theme = "dark" | "light";

interface ModeCtx {
  mode: Mode;
  setMode: (m: Mode) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ModeCtx>({
  mode: "interactive",
  setMode: () => {},
  theme: "dark",
  setTheme: () => {},
});

const MODE_KEY = "aj-portfolio-mode";
const THEME_KEY = "aj-portfolio-theme";

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("interactive");
  const [theme, setThemeState] = useState<Theme>("dark");

  // Preferences are read after mount (not in the initializer) so the server
  // and first client render match; the lint rule flags the synchronous set.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const m = localStorage.getItem(MODE_KEY) as Mode | null;
      if (m === "simple" || m === "interactive") setModeState(m);
      const t = localStorage.getItem(THEME_KEY) as Theme | null;
      if (t === "light" || t === "dark") setThemeState(t);
      else if (window.matchMedia("(prefers-color-scheme: light)").matches) setThemeState("light");
    } catch {}
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setMode = (m: Mode) => {
    setModeState(m);
    try {
      localStorage.setItem(MODE_KEY, m);
    } catch {}
  };
  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {}
  };

  return <Ctx.Provider value={{ mode, setMode, theme, setTheme }}>{children}</Ctx.Provider>;
}

export const useMode = () => useContext(Ctx);
