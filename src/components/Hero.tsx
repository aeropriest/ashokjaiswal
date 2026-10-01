"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, projects, skills } from "@/data/projects";
import { asset } from "@/lib/asset";
import { useMode } from "./ModeProvider";

const heroPicks = ["riowallet", "goingape", "kyozo", "pawme", "orbie", "yomee", "ezeecube", "coinwatch"];

export function Hero() {
  const { mode } = useMode();
  const interactive = mode === "interactive";
  const picks = heroPicks.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <header id="top" className="glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pb-20 md:pt-20">
        <div className="flex flex-col justify-center gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {profile.location} · Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-medium text-muted sm:text-3xl md:text-[2rem]">
              <span className="text-gradient">Product builder.</span> Crypto, AI, robots and the apps
              around them.
            </span>
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">{profile.intro}</p>

          <div className="flex flex-wrap gap-2">
            <a
              href="#crypto"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg hover:opacity-90"
            >
              See the work <ArrowDown size={14} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-4 py-2 text-sm font-medium hover:border-accent"
            >
              <GithubIcon size={14} /> aeropriest
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-4 py-2 text-sm font-medium hover:border-accent"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-4 py-2 text-sm font-medium hover:border-accent"
            >
              <Mail size={14} /> Email
            </a>
          </div>

          <dl className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight">{s.value}</dt>
                <dd className="text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {interactive ? (
          <div className="relative hidden md:block" aria-hidden>
            <div className="grid grid-cols-2 gap-3">
              {picks.map((p, i) => (
                <motion.a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="card group relative aspect-[4/3] overflow-hidden rounded-xl"
                  initial={{ opacity: 0, y: 24, rotate: i % 2 ? 1.5 : -1.5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(p.cover!)}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white">
                    {p.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        ) : (
          <div className="card self-center rounded-xl p-5">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Skills</h2>
            <ul className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
