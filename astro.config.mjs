// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Fully static output — no adapter, no SSR. Deployed as a static-assets-only
 * Cloudflare Worker (wrangler.jsonc). Legacy `.html` URLs are 301-redirected
 * at the edge by public/_redirects, not by Astro (see DEPLOY.md).
 */
export default defineConfig({
  site: 'https://www.alertengg.com',
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
