/**
 * Nav structure comes from content/site.json; this module only maps the
 * captured page slugs onto the new clean URLs (CLAUDE.md -> URLs).
 */
import { site } from './content';

/** Captured page slug -> clean URL. */
export const ROUTES: Record<string, string> = {
  index: '/',
  'about-us': '/about',
  certification: '/certification',
  'Aluminium-Foundry': '/aluminium-foundry',
  'Machine-Shop': '/machine-shop',
  'Casting-Design': '/casting-design',
  'Tool-Making': '/tool-making',
  'Foundry-Quality-Control': '/foundry-quality-control',
  gallery: '/gallery',
  'quality-policy': '/quality-policy',
  contact: '/contact',
};

export function route(slug: string): string {
  const r = ROUTES[slug];
  if (!r) throw new Error(`No clean URL mapped for captured slug: ${slug}`);
  return r;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

/**
 * The header nav, built from site.json. Parent entries that were `href="#"`
 * in the original become real dropdown toggles with no href — a fake link is
 * one of the broken mechanics we fix.
 */
export const NAV: NavItem[] = site.nav.map((item: any) => {
  if (item.children?.length) {
    return {
      label: item.label,
      children: item.children.map((c: any) => ({ label: c.label, href: route(c.href) })),
    };
  }
  return { label: item.label, href: route(item.href) };
});

/** Footer link columns, straight from site.json. */
export const FOOTER_NAV: Record<string, { label: string; href: string }[]> =
  Object.fromEntries(
    Object.entries(site.footer_nav).map(([heading, links]) => [
      heading,
      (links as any[]).map((l) => ({ label: l.label, href: route(l.href) })),
    ]),
  );

/** True when `current` is this nav href or one of its children. */
export function isActive(item: NavItem, current: string): boolean {
  const norm = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);
  const here = norm(current);
  if (item.href) return norm(item.href) === here;
  return (item.children ?? []).some((c) => norm(c.href) === here);
}
