// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Fully static output — no adapter, no SSR. Deployed as a static-assets-only
 * Cloudflare Worker (wrangler.jsonc). Legacy `.html` URLs are 301-redirected
 * at the edge by public/_redirects, not by Astro (see DEPLOY.md).
 */
const githubPages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  // DEPLOY_TARGET=github-pages builds the shareable preview served from
  // https://zenil16.github.io/alertengg-website/ (see .github/workflows).
  // Any other build is production: the real domain, no base path.
  site: githubPages ? 'https://zenil16.github.io' : 'https://www.alertengg.com',
  base: githubPages ? '/alertengg-website' : undefined,
  output: 'static',
  trailingSlash: 'ignore',

  image: {
    // Originals in /source-images are never written to; Astro emits optimised
    // AVIF/WebP derivatives into the build output.
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
