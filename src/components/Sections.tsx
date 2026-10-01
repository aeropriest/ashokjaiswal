"use client";

import { useState } from "react";
import { categories, facets, projects, skills, timeline, type Category, type Facet } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { useMode } from "./ModeProvider";

export function Sections() {
  const { mode } = useMode();
  const interactive = mode === "interactive";
  const [facet, setFacet] = useState<Facet | null>(null);

  const byCategory = (c: Category) =>
    projects.filter((p) => p.category === c && (!facet || p.facets.includes(facet)));

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        className="no-print scrollbar-none flex max-w-full gap-2 overflow-x-auto pb-2 sm:flex-wrap"
        role="group"
        aria-label="Filter projects"
      >
        <button
          type="button"
          onClick={() => setFacet(null)}
          aria-pressed={!facet}
          className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
            !facet ? "border-accent bg-accent text-white" : "border-line bg-elev text-muted hover:text-fg"
          }`}
        >
          All
        </button>
        {facets.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFacet(facet === f.id ? null : f.id)}
            aria-pressed={facet === f.id}
            className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
              facet === f.id ? "border-accent bg-accent text-white" : "border-line bg-elev text-muted hover:text-fg"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {categories.map((c, ci) => {
        const items = byCategory(c.id);
        if (!items.length) return null;
        return (
          <section key={c.id} id={c.id} className="scroll-mt-20 py-12 md:py-16">
            <Reveal>
              <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {String(ci + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.label}</h2>
                </div>
                <p className="max-w-xl text-sm text-muted">{c.blurb}</p>
              </div>
            </Reveal>
            <div className={interactive ? "grid gap-5 md:grid-cols-2" : "grid gap-4"}>
              {items.map((p, i) => (
                <ProjectCard key={p.slug} p={p} index={i} />
              ))}
            </div>
          </section>
        );
      })}

      <section id="timeline" className="scroll-mt-20 py-12 md:py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">05</p>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Timeline</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <ol className="relative space-y-5 border-l border-line pl-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.03}>
                <li className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
                  <p className="font-mono text-xs text-muted">{t.year}</p>
                  <p className="text-[15px]">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <div className="card rounded-xl p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Toolbox</h3>
              <ul className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
