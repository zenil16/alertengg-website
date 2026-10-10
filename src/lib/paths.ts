/**
 * Prefix an internal path with Astro's `base`.
 *
 * Production (Cloudflare) builds have no base, so `/about` stays `/about`.
 * The GitHub Pages preview is served from `/alertengg-website/`, so the same
 * call returns `/alertengg-website/about`. Every internal href goes through
 * this (usually via `route()` in nav.ts). Images from `astro:assets` already
 * carry the base, so they do not need it.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/')) throw new Error(`withBase expects a root-relative path, got "${path}"`);
  return path === '/' ? `${BASE}/` : `${BASE}${path}`;
}
