// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { readFile, rm, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const redirects = {
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
};

/**
 * Astro writes each redirect as `<path>/index.html`, so `/about-us.html` lands
 * at `dist/about-us.html/index.html` — a DIRECTORY named `about-us.html`.
 * Plain static hosts then answer `/about-us.html` with a 301 to
 * `/about-us.html/` (or a 404) before the redirect page is ever served.
 * This flattens each one to a real file at the exact legacy path, so the
 * meta-refresh redirect is served directly on any static host.
 */
const legacyHtmlFiles = () => ({
  name: 'legacy-html-redirect-files',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const out = fileURLToPath(dir);
      for (const from of Object.keys(redirects)) {
        const folder = `${out}${from.slice(1)}`;
        const isDir = await stat(folder).then((s) => s.isDirectory(), () => false);
        if (!isDir) continue;
        const html = await readFile(`${folder}/index.html`, 'utf8');
        await rm(folder, { recursive: true });
        await writeFile(folder, html);
      }
      logger.info(`Flattened ${Object.keys(redirects).length} legacy .html redirects to files`);
    },
  },
});

/**
 * Fully static output. Every legacy `.html` URL from the old BootstrapMade site
 * redirects to its clean equivalent (see CLAUDE.md -> URLs).
 */
export default defineConfig({
  site: 'https://www.alertengg.com',
  output: 'static',
  trailingSlash: 'ignore',

  redirects,
  integrations: [legacyHtmlFiles()],

  image: {
    // Originals in /source-images are never written to; Astro emits optimised
    // AVIF/WebP derivatives into the build output.
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
