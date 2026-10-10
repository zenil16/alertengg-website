/**
 * sitemap.xml from the clean-URL table — one entry per real page. Legacy
 * `.html` redirect stubs and the 404 page are deliberately not listed.
 */
import type { APIRoute } from 'astro';
import { ROUTES } from '../lib/nav';

export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(ROUTES)
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
