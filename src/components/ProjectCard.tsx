"use client";

import { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/asset";
import { useMode } from "./ModeProvider";
import { Lightbox } from "./Lightbox";
import { Reveal } from "./Reveal";

function Meta({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
      <span className="font-mono">{p.period}</span>
      <span aria-hidden>·</span>
      <span>{p.role}</span>
      {p.org && (
        <>
          <span aria-hidden>·</span>
          <span>{p.org}</span>
        </>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-[11px] font-medium text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Links({ links }: { links?: Project["links"] }) {
  if (!links?.length) return null;
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            {l.label}
            <ExternalLink size={13} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Cover({ p, onOpen }: { p: Project; onOpen?: () => void }) {
  if (p.cover) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="group relative block aspect-[16/10] w-full overflow-hidden bg-black/5 text-left"
        aria-label={`Open ${p.title} gallery`}
      >
        {p.portrait && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(p.cover)}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-125 object-cover opacity-50 blur-2xl"
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(p.cover)}
          alt={`${p.title} cover`}
          loading="lazy"
          className={`relative h-full w-full transition-transform duration-700 group-hover:scale-[1.03] ${
            p.portrait ? "object-contain p-3" : "object-cover object-top"
          }`}
        />
        {p.gallery && p.gallery.length > 1 && (
          <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] text-white backdrop-blur">
            <Images size={12} /> {p.gallery.length}
          </span>
        )}
      </button>
    );
  }
  return (
    <div
      className={`relative flex aspect-[16/10] w-full items-end bg-gradient-to-br ${p.accent ?? "from-accent/30 to-accent-2/30"} p-5`}
    >
      <span className="font-mono text-xs uppercase tracking-widest text-fg/70">{p.org ?? p.title}</span>
    </div>
  );
}

export function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  const { mode } = useMode();
  const [lb, setLb] = useState<number | null>(null);
  const gallery = p.gallery ?? (p.cover ? [p.cover] : []);
  const interactive = mode === "interactive";

  if (!interactive) {
    return (
      <article id={p.slug} className="card rounded-xl p-5 sm:p-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <header className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="text-base text-muted">{p.tagline}</p>
              <Meta p={p} />
              {p.status && <p className="text-xs font-medium text-accent">{p.status}</p>}
            </header>
            <p className="text-[15px] leading-relaxed">{p.description}</p>
            {p.highlights && (
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <Tags tags={p.tags} />
            <Links links={p.links} />
          </div>
          {gallery.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {gallery.slice(0, 6).map((g) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={g}
                  src={asset(g)}
                  alt={`${p.title} screenshot`}
                  loading="lazy"
                  className="h-36 max-w-full rounded-md border border-line object-contain sm:h-44"
                />
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <Reveal
      id={p.slug}
      delay={Math.min(index, 4) * 0.05}
      className={`card flex flex-col overflow-hidden rounded-2xl ${p.featured ? "md:col-span-2" : ""}`}
    >
      <article className="contents">
      <div className={p.featured ? "grid md:grid-cols-2" : ""}>
        <Cover p={p} onOpen={gallery.length ? () => setLb(0) : undefined} />
        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <header className="space-y-1.5">
            <div className="flex items-center gap-2">
              {p.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset(p.logo)} alt="" className="h-7 w-7 rounded-md object-contain" />
              )}
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{p.title}</h3>
            </div>
            <p className="text-sm text-muted sm:text-[15px]">{p.tagline}</p>
            <Meta p={p} />
            {p.status && (
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {p.status}
              </p>
            )}
          </header>
          <p className="text-sm leading-relaxed text-fg/90">{p.description}</p>
          {p.highlights && p.featured && (
            <ul className="space-y-1 text-sm text-muted">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
          <Tags tags={p.tags} />
          <Links links={p.links} />
        </div>
      </div>
      {gallery.length > 1 && (
        <div className="scrollbar-none flex gap-2 overflow-x-auto border-t border-line p-3">
          {gallery.map((g, i) => (
            <button
              key={g}
              type="button"
              onClick={() => setLb(i)}
              className="shrink-0 overflow-hidden rounded-md border border-line bg-black/5 transition hover:border-accent"
              aria-label={`Open screenshot ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(g)} alt="" loading="lazy" className="h-20 w-auto object-cover" />
            </button>
          ))}
        </div>
      )}
      <Lightbox images={gallery} index={lb} title={p.title} onClose={() => setLb(null)} onIndex={setLb} />
      </article>
    </Reveal>
  );
}
