/**
 * Inline Markdown → HTML for captured paragraphs: **bold** and [links](slug)
 * only, which is all the capture uses. Text is escaped first, so the only
 * markup that can come out is what these two rules produce.
 */
import { route } from './nav';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string): string {
  return esc(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_, label: string, slug: string) => `<a href="${route(slug)}">${label}</a>`);
}
