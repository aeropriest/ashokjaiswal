"use client";

import { useEffect, useState } from "react";
import { Mail, Moon, Sun, Sparkles, List } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { categories, profile } from "@/data/projects";
import { useMode } from "./ModeProvider";

export function Nav() {
  const { mode, setMode, theme, setTheme } = useMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? "border-line bg-bg/80 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {categories.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="hover:text-fg">
                {c.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#timeline" className="hover:text-fg">
              Timeline
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1.5">
          <div
            role="group"
            aria-label="View mode"
            className="flex rounded-full border border-line bg-elev p-0.5 text-xs font-medium"
          >
            <button
              type="button"
              onClick={() => setMode("interactive")}
              aria-pressed={mode === "interactive"}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${
                mode === "interactive" ? "bg-accent text-white" : "text-muted hover:text-fg"
              }`}
            >
              <Sparkles size={13} />
              <span className="hidden sm:inline">Interactive</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("simple")}
              aria-pressed={mode === "simple"}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 ${
                mode === "simple" ? "bg-accent text-white" : "text-muted hover:text-fg"
              }`}
            >
              <List size={13} />
              <span className="hidden sm:inline">Simple</span>
            </button>
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-line bg-elev p-2 text-muted hover:text-fg"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-line bg-elev p-2 text-muted hover:text-fg sm:inline-flex"
            aria-label="GitHub"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-line bg-elev p-2 text-muted hover:text-fg sm:inline-flex"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={15} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-line bg-elev p-2 text-muted hover:text-fg sm:inline-flex"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </nav>
  );
}
