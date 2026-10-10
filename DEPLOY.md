# Deploying alertengg.com

The site is **purely static**. It deploys as a **static-assets-only Cloudflare
Worker**: no Worker script, no SSR, no adapter.

| Piece | Where |
|---|---|
| Static build | `npm run build` → `./dist` |
| Worker config | `wrangler.jsonc` (assets only, no `main`) |
| Legacy URL 301s | `public/_redirects` → copied to `dist/_redirects` |
| Headers | `public/_headers` → copied to `dist/_headers` |
| Canonical origin | `site: 'https://www.alertengg.com'` in `astro.config.mjs` |

## Cloudflare build settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node version | 22 (see `.nvmrc`) |

`wrangler` is a devDependency, so `npx wrangler` uses the pinned local copy instead
of downloading it on every build.

## Do not

- **Do not run `astro add cloudflare`** or install `@astrojs/cloudflare` or any
  other adapter. If `wrangler.jsonc` is missing, `wrangler deploy` tries to
  auto-configure the project by doing exactly that, and then fails with
  `Missing file or directory: public/.assetsignore`. Keep `wrangler.jsonc` in
  the repo root.
- **Do not add a `main` entry** to `wrangler.jsonc`. There is no Worker script.
- **Do not use Astro `redirects`** in `astro.config.mjs`. In a static build they
  emit `about-us.html/` folders and meta-refresh pages instead of real 301s.

## wrangler.jsonc

- `assets.directory: "./dist"`: the build output.
- `assets.not_found_handling: "404-page"`: unknown paths get `dist/404.html`
  with a real 404 status.
- `assets.html_handling: "drop-trailing-slash"`: `/about` is served from
  `about/index.html` directly; `/about/` redirects to `/about`. This matches the
  clean URLs used in the nav, canonicals and `sitemap.xml`.

## Redirects (`public/_redirects`)

All 11 old URLs are true **301**s, applied at the edge before any asset is served:

| Old | New |
|---|---|
| `/index.html` | `/` |
| `/about-us.html` | `/about` |
| `/certification.html` | `/certification` |
| `/Aluminium-Foundry.html` | `/aluminium-foundry` |
| `/Machine-Shop.html` | `/machine-shop` |
| `/Casting-Design.html` | `/casting-design` |
| `/Tool-Making.html` | `/tool-making` |
| `/Foundry-Quality-Control.html` | `/foundry-quality-control` |
| `/gallery.html` | `/gallery` |
| `/quality-policy.html` | `/quality-policy` |
| `/contact.html` | `/contact` |

These only run on Cloudflare (or `wrangler dev`). `npm run dev` and
`npm run preview` do not apply them.

## Headers (`public/_headers`)

- **Every response:** `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`,
  and a `Permissions-Policy` that turns off camera, microphone, geolocation,
  payment and USB.
- **`/_astro/*`:** `Cache-Control: public, max-age=31536000, immutable`. These
  files are content-hashed, so a changed file always gets a new name. HTML keeps
  Cloudflare's default (`max-age=0, must-revalidate`), so new deploys show at once.

There is no Content-Security-Policy yet. Astro inlines its small page scripts, and
the contact page loads JotForm and Google Maps iframes plus JotForm's embed
script, so a CSP needs hashes or `'unsafe-inline'` and testing against both
embeds. Add it as a separate change.

## Checking before a deploy

```sh
npm run build
npx wrangler deploy --dry-run   # validates config + assets, uploads nothing
npx wrangler dev                # local Cloudflare runtime: test 301s, 404s, headers
```

With `wrangler dev` running:

```sh
curl -sI http://localhost:8787/about-us.html   # 301 → /about
curl -sI http://localhost:8787/index.html      # 301 → /
curl -sI http://localhost:8787/nope            # 404 (404.html)
```

---

# GitHub Pages preview

A shareable preview is published to **https://zenil16.github.io/alertengg-website/**
by `.github/workflows/deploy-pages.yml` on every push to `main` (it can also be run
by hand from the Actions tab).

| | Production (Cloudflare) | Preview (GitHub Pages) |
|---|---|---|
| Build | `npm run build` | `DEPLOY_TARGET=github-pages npm run build` |
| `site` | `https://www.alertengg.com` | `https://zenil16.github.io` |
| `base` | none | `/alertengg-website` |

`astro.config.mjs` switches on `DEPLOY_TARGET`; nothing else differs.

**Base path rule:** never write a root-relative internal link (`href="/contact"`).
Use `route('contact')` from `src/lib/nav.ts` (captured page slugs) or `withBase()`
from `src/lib/paths.ts`. Images from `astro:assets` include the base automatically.

**What the preview does not do:** GitHub Pages ignores `_redirects` and
`_headers`, so the old `.html` URLs do not redirect there, and the security and
cache headers are not sent. `/about` is answered with a redirect to `/about/`
(GitHub Pages' folder handling). All of this works on Cloudflare.
