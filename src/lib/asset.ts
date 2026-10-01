const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public/ path with the configured basePath (needed for GitHub project pages). */
export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${base}${path}`;
}
