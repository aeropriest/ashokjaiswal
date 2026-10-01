# Ashok Jaiswal · Portfolio

Static Next.js site (App Router, Tailwind v4, framer-motion) listing crypto/Web3 work, founded products,
AI apps and enterprise roles. All content lives in `src/data/projects.ts`; images in `public/images`.

## Develop

```bash
pnpm install
pnpm dev
```

## Build (static export → `out/`)

```bash
pnpm build
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the static export and publishes it to
GitHub Pages. For a user site (`aeropriest.github.io`) no base path is needed. For a project page set a
repository variable `NEXT_PUBLIC_BASE_PATH=/<repo-name>`.

## Modes

The header toggle switches between **Interactive** (animated cards, tag filters, gallery lightbox) and
**Simple** (plain stacked list, print-friendly). The choice and the light/dark theme persist in `localStorage`.
