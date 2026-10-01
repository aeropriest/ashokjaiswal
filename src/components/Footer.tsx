import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";
import { profile } from "@/data/projects";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s build something.</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Available for product leadership, Web3 and AI builds, and the odd piece of hardware. Based in
            Hong Kong, working with teams anywhere.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg hover:opacity-90"
            >
              <Mail size={14} /> {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent"
            >
              <GithubIcon size={14} /> GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm hover:border-accent"
            >
              <XIcon size={14} /> X
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-8 text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name}. Screenshots belong to their respective products; several
        are of apps no longer on the stores.
      </p>
    </footer>
  );
}
