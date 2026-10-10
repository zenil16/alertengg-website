/**
 * Explicit registry of the captured originals the site actually uses.
 *
 * Why explicit and not `import.meta.glob('/source-images/**')`: an eager glob
 * makes Vite emit EVERY matched file into the build, which shipped all 120
 * originals (22 MB) — including the two images that were commented out on the
 * live site and must stay unused (CLAUDE.md). Listing imports by hand keeps the
 * output to what is really referenced, and makes that set auditable.
 *
 * Add an entry here when a page starts using another captured image.
 */
import logo from '../../source-images/shared/alert-engineering-works-logo.png';
import favicon from '../../source-images/shared/favicon.png';
import banner from '../../source-images/shared/banner.png';

import aluminiumFoundry1 from '../../source-images/Aluminium-Foundry/Aluminium foundry1.jpeg';
import aluminiumFoundry4 from '../../source-images/Aluminium-Foundry/aluminium_foundry4.jpg';
import machineShop2 from '../../source-images/Machine-Shop/machine_shop2.jpg';
import tool1 from '../../source-images/Tool-Making/tool1.jpg';
import aboutAlert1 from '../../source-images/about-us/alert1_1771251175535.jpg';

/** Keyed by the same `/source-images/...` path the captured Markdown uses. */
export const IMAGES: Record<string, ImageMetadata> = {
  '/source-images/shared/alert-engineering-works-logo.png': logo,
  '/source-images/shared/favicon.png': favicon,
  '/source-images/shared/banner.png': banner,
  '/source-images/Aluminium-Foundry/Aluminium foundry1.jpeg': aluminiumFoundry1,
  '/source-images/Aluminium-Foundry/aluminium_foundry4.jpg': aluminiumFoundry4,
  '/source-images/Machine-Shop/machine_shop2.jpg': machineShop2,
  '/source-images/Tool-Making/tool1.jpg': tool1,
  '/source-images/about-us/alert1_1771251175535.jpg': aboutAlert1,
};
