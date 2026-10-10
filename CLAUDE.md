# Alert Engineering Works — project rules

Rebuild of <https://www.alertengg.com/> as a static Astro site. The original is a
BootstrapMade template with hand-edited HTML; this repo replaces it, but **not** its words.

---

## Ground rules (non-negotiable)

### Content is frozen
- Keep **all** existing wording and facts exactly as captured in `/content`.
- **Do not invent** copy, facts, numbers, customers, certifications, testimonials,
  years, capacities or client names. If a fact is not in `/content`, it does not go on
  the site.
- **Do not fix the content conflicts** listed in `content/INVENTORY.md` §6 — the
  465 kg vs 500 kg contradiction, "30+ years" vs founded 1982, "Measurment",
  "Vaccum", "Atmost", ASTM grade "154", and the rest.
  **Spelling and fact fixes wait for owner sign-off.** Reproduce them as published.
- No placeholder text. No Lorem ipsum. No stock imagery.

### Broken mechanics — these we DO fix
| Defect in the original | Fix |
|---|---|
| Stray `-->` rendered as visible text (`<!-- <--whtaspp--> --&gt;`, twice per page on 10 pages) | Gone — never reproduce it |
| Dead `href="##"` on the 4 footer "Get in Touch" rows | Real links: `tel:`, `mailto:`, and a Google Maps link for the address |
| Empty `href="#"` social links (twitter, facebook, instagram, skype, linkedin) | **Removed** — the company has no social accounts on record |
| `href="#"` nav parents ("The Company", "Facilities") | Proper accessible dropdown toggles (`<button aria-expanded>`), not fake links |
| `<li>` nested directly inside `<h5>`/`<h3>` with no `<ul>` | Valid HTML: real `<ul><li>`, heading separate |
| Empty `<h4></h4>` | Omitted |
| Mis-nested `</center></iframe>` on contact | Valid iframe markup |
| 2133×2133 `phone.jpg` drawn at 25×25 | Inline SVG icons at the right size — never ship the oversized raster icons |

### The two commented-out images stay unused
`source-images/gallery/products-56.jpeg` and
`source-images/Foundry-Quality-Control/Thermo-Analysis-1.jpg` were inside HTML comments
on the live site. They are captured for completeness and **must not be rendered**.

---

## Stack
- **Astro** (latest stable), `output: 'static'` — fully static, no SSR, no adapter.
- **Tailwind CSS** (v4, via `@tailwindcss/vite`).
- No UI framework (no React/Vue/Svelte). Plain `.astro` components.
- Minimal client JS: the mobile menu and nav dropdowns only.

## Content pipeline
- **Content comes only from `/content`** — `content/pages/*.md` and `content/site.json`.
  Components must not hard-code copy, phone numbers, emails or addresses.
- `content/site.json` is the single source of truth for company details, nav tree,
  footer lists, WhatsApp link, maps URL and the JotForm config.
- `/source-images/**` holds the untouched originals from the capture. **Keep them.**
  They are imported through Astro's image pipeline; never hand-optimise or overwrite.

## Contact details
- Phone displays as **+91 93279 42888** and links as `tel:+919327942888`. Both live
  once in `site.json` (`contact.phone.display` / `contact.phone.e164`); never hard-code them.
- The footer carries no web-designer credit — only the copyright line.
- **info@alertengg.com** and **sales@alertengg.com** → `mailto:` links.
- No Cloudflare email obfuscation; plain mailto is correct here.

## Required on every page
- Floating **WhatsApp** button → `https://wa.me/919327942888` (source adds
  `?text=Hi%20There!`), `target="_blank"`, `rel="noopener"`.
- A **Request a Quote** button → `/contact` for now.
- A **unique `<title>` and meta description**, taken from that page's own existing
  text in `/content` — never a generic site-wide string.

## Images
- Every image goes through Astro's image pipeline (`astro:assets`): responsive
  **WebP/AVIF**, explicit `width`/`height` to prevent layout shift.
- `loading="lazy"` + `decoding="async"` below the fold; `loading="eager"` with
  `fetchpriority="high"` for the hero only.
- **Descriptive alt text** derived from the existing captions and headings in
  `/content`. Decorative images get `alt=""`.
- Icons are inline SVG at the rendered size. Do not use `phone.jpg` (2133px),
  `address.jpg` (512px), `email.png` (768px) or `icon person.png` (559px).

## URLs
Clean URLs, no `.html`:

| New | Old (must redirect) |
|---|---|
| `/` | `/index.html` |
| `/about` | `/about-us.html` |
| `/certification` | `/certification.html` |
| `/aluminium-foundry` | `/Aluminium-Foundry.html` |
| `/machine-shop` | `/Machine-Shop.html` |
| `/casting-design` | `/Casting-Design.html` |
| `/tool-making` | `/Tool-Making.html` |
| `/foundry-quality-control` | `/Foundry-Quality-Control.html` |
| `/gallery` | `/gallery.html` |
| `/quality-policy` | `/quality-policy.html` |
| `/contact` | `/contact.html` |

**Every old URL must redirect to its new URL** — true 301s in `public/_redirects`,
applied by Cloudflare at the edge (including `/index.html` → `/`). Do **not** add
Astro `redirects` (they emit `about-us.html/` folders) and never add an SSR adapter:
this is a static-assets-only Worker (`wrangler.jsonc`). See `DEPLOY.md`.

## Design direction
Clean, industrial, trustworthy. Dark slate/steel neutrals, **one** accent colour
(molten orange — see `src/styles/global.css`), generous white space, strong modern
typography via Google Fonts, large real photos from `/source-images`.

## Quality bar
- **Mobile-first; must look right at 375px wide.** No horizontal body scroll.
  Wide content (tables, image rows) scrolls inside its own container.
- **Accessible**: full keyboard navigation, visible focus states
  (`:focus-visible`, never `outline: none` with no replacement), correct heading
  order (one `<h1>` per page, no skipped levels), labelled landmarks, a skip link,
  `aria-expanded`/`aria-controls` on every disclosure, and AA contrast minimum.
- `npm run build` must pass clean before any commit.

## Commands
```
npm run dev      # dev server
npm run build    # static build to ./dist
npm run preview  # serve ./dist
npx wrangler deploy --dry-run   # validate the Cloudflare config (see DEPLOY.md)
```
