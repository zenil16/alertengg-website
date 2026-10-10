// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Fully static output. Every legacy `.html` URL from the old BootstrapMade site
 * redirects to its clean equivalent (see CLAUDE.md -> URLs).
 */
export default defineConfig({
  site: 'https://www.alertengg.com',
  output: 'static',
  trailingSlash: 'ignore',

  redirects: {
    // NOTE: `/index.html` is deliberately absent. In a static build it is the
    // home page's own output file, so a redirect route would collide with it
    // (`dist/index.html` as both file and directory). Requesting /index.html
    // already serves the home page, and its <link rel="canonical"> points at
    // `/`, so the legacy URL resolves correctly without one.
    '/about-us.html': '/about',
    '/certification.html': '/certification',
    '/Aluminium-Foundry.html': '/aluminium-foundry',
    '/Machine-Shop.html': '/machine-shop',
    '/Casting-Design.html': '/casting-design',
    '/Tool-Making.html': '/tool-making',
    '/Foundry-Quality-Control.html': '/foundry-quality-control',
    '/gallery.html': '/gallery',
    '/quality-policy.html': '/quality-policy',
    '/contact.html': '/contact',
  },

  image: {
    // Originals in /source-images are never written to; Astro emits optimised
    // AVIF/WebP derivatives into the build output.
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
