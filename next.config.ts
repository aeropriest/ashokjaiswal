import type { NextConfig } from "next";

// Static export for GitHub Pages (user site: aeropriest.github.io → no basePath).
// Set NEXT_PUBLIC_BASE_PATH="/portfolio" when deploying to a project page instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
