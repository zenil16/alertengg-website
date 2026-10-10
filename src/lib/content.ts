/**
 * The ONLY bridge between /content and the site.
 *
 * Components must never hard-code copy, phone numbers, emails or addresses —
 * everything comes from content/site.json and content/pages/*.md.
 * See CLAUDE.md -> "Content pipeline".
 */
import siteJson from '../../content/site.json';

export const site = siteJson;

/* ------------------------------------------------------------------ images */

import { IMAGES } from './images';

/**
 * Resolve a `/source-images/...` path (possibly %20-encoded) to ImageMetadata.
 * Only images registered in ./images.ts are available — see the note there on
 * why the registry is explicit rather than a glob.
 */
export function img(path: string): ImageMetadata {
  const key = decodeURI(path);
  const found = IMAGES[key];
  if (!found) {
    throw new Error(
      `Image "${key}" is not registered in src/lib/images.ts. ` +
        `Add an explicit import for it there before using it.`,
    );
  }
  return found;
}

/* --------------------------------------------------------------- markdown */

export type Block =
  | { kind: 'heading'; level: number; text: string }
  | { kind: 'para'; text: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] };

export interface Page {
  frontmatter: Record<string, string>;
  blocks: Block[];
}

const rawPages = import.meta.glob<string>('/content/pages/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/** Minimal frontmatter reader: `key: value` plus `key: >` folded blocks. */
function parseFrontmatter(src: string): [Record<string, string>, string] {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(src);
  if (!m) return [{}, src];
  const fm: Record<string, string> = {};
  const lines = m[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(lines[i]);
    if (!kv) continue;
    const [, key, value] = kv;
    if (value.trim() === '>' || value.trim() === '|') {
      const folded: string[] = [];
      while (i + 1 < lines.length && /^\s{2,}\S/.test(lines[i + 1])) {
        folded.push(lines[++i].trim());
      }
      fm[key] = folded.join(' ');
    } else {
      fm[key] = value.trim();
    }
  }
  return [fm, src.slice(m[0].length)];
}

function parseBlocks(body: string): Block[] {
  const blocks: Block[] = [];
  // Strip HTML comments — they carry capture notes, not page content.
  const lines = body.replace(/<!--[\s\S]*?-->/g, '').split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) {
      blocks.push({ kind: 'heading', level: heading[1].length, text: heading[2].trim() });
      continue;
    }

    const image = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(line);
    if (image) {
      blocks.push({ kind: 'image', alt: image[1], src: image[2] });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
      i++;
      }
      i--;
      blocks.push({ kind: 'list', items });
      continue;
    }

    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i]
          .trim()
          .replace(/^\||\|$/g, '')
          .split('|')
          .map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      i--;
      if (rows.length) blocks.push({ kind: 'table', head: rows[0], rows: rows.slice(1) });
      continue;
    }

    blocks.push({ kind: 'para', text: line });
  }
  return blocks;
}

const pageCache = new Map<string, Page>();

/** Load a captured page by its /content/pages basename, e.g. `index`. */
export function page(name: string): Page {
  if (pageCache.has(name)) return pageCache.get(name)!;
  const raw = rawPages[`/content/pages/${name}.md`];
  if (raw === undefined) {
    throw new Error(
      `No such captured page: content/pages/${name}.md. ` +
        `Available: ${Object.keys(rawPages).join(', ')}`,
    );
  }
  const [frontmatter, body] = parseFrontmatter(raw);
  const result: Page = { frontmatter, blocks: parseBlocks(body) };
  pageCache.set(name, result);
  return result;
}

/** Paragraph blocks of a page, in order — the page's own words, untouched. */
export function paragraphs(name: string): string[] {
  return page(name)
    .blocks.filter((b): b is Extract<Block, { kind: 'para' }> => b.kind === 'para')
    .map((b) => b.text);
}

/** Strip inline Markdown links/emphasis, keeping the visible words only. */
export function plain(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\*([^*]*)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Like `plain`, but drops inline links entirely — text and all.
 * Used where the link is template chrome ("Read More...") that the layout
 * re-renders as a real call-to-action, so keeping the words would duplicate it.
 */
export function plainNoLinks(text: string): string {
  return plain(text.replace(/\[[^\]]*\]\([^)]*\)/g, ''));
}

/* ------------------------------------------------------------- contact bits */

export const tel = `tel:+91${site.contact.phone}`;
export const whatsappHref = site.contact.whatsapp.href_in_source;
export const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=Alert+Engineering+Works+GIDC+Vapi+Gujarat+India';
export const emails = site.contact.emails;
