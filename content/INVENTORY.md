# Content & Image Inventory

Capture of <https://www.alertengg.com/> on **2026-10-10**. Wording is preserved verbatim;
nothing in this capture has been rewritten. Items flagged below are recorded, not fixed.

---

## 1. Pages captured

All 11 requested pages returned HTTP 200. The home page source was crawled for
additional internal links; **no unlisted pages exist** — every `*.html` href across the
whole site resolves to one of these 11 files.

Word counts cover main content only (header nav, footer and breadcrumb chrome excluded),
and exclude image references and HTML comments.

| # | Page | Source URL | Markdown | Words | Displayed image refs | Files captured |
|---|------|-----------|----------|------:|---------------------:|---------------:|
| 1 | index | `/index.html` | `/content/pages/index.md` | 119 | 5 | 4 |
| 2 | about-us | `/about-us.html` | `/content/pages/about-us.md` | 308 | 3 | 3 |
| 3 | certification | `/certification.html` | `/content/pages/certification.md` | 71 | 2 | 2 |
| 4 | Aluminium-Foundry | `/Aluminium-Foundry.html` | `/content/pages/Aluminium-Foundry.md` | 276 | 5 | 5 |
| 5 | Machine-Shop | `/Machine-Shop.html` | `/content/pages/Machine-Shop.md` | 212 | 5 | 5 |
| 6 | Casting-Design | `/Casting-Design.html` | `/content/pages/Casting-Design.md` | 78 | 3 | 3 |
| 7 | Tool-Making | `/Tool-Making.html` | `/content/pages/Tool-Making.md` | 47 | 4 | 4 |
| 8 | Foundry-Quality-Control | `/Foundry-Quality-Control.html` | `/content/pages/Foundry-Quality-Control.md` | 90 | 5 | 6 |
| 9 | gallery | `/gallery.html` | `/content/pages/gallery.md` | 33 | 79 | 79 |
| 10 | quality-policy | `/quality-policy.html` | `/content/pages/quality-policy.md` | 164 | 0 | 0 |
| 11 | contact | `/contact.html` | `/content/pages/contact.md` | 23 | 1 | 1 |
| | **Total** | | | **1421** | **112** | **120** |

Notes on the counts:

- *Displayed image refs* counts `<img>` slots the visitor actually sees. *Files captured*
  counts files written to disk for that page, which also includes 2 images that exist in
  the source but sit inside HTML comments (see §5). The two columns therefore differ for
  gallery and Foundry-Quality-Control.
- **quality-policy** has 0 images — it is text and a table only.
- **gallery** has 79 displayed slots rendering **78 distinct files** (`4.jpeg` is used
  twice, see §4), plus 1 commented-out file = 79 captured.
- **contact** has 1 image (the JotForm header logo); its map is an `<iframe>`, not an image.
- **index** counts 5 refs: the shared banner plus 4 service-strip images.
- Site chrome (logo, favicon, banner, WhatsApp gif, 4 footer icons) is stored once in
  `/source-images/shared/` and is referenced by all 11 pages. The 8 shared files are
  counted in the Files-captured total but attributed to no single page, which is why the
  per-page columns sum to 112 displayed refs while 120 files were captured.

---

## 2. Images

**120 files, 21.38 MB total.** Saved under
`/source-images/<page-name>/` with original filenames (URL-decoded, so `%20` is a real space).

### `/source-images/shared/` — 8 files, 690.3 KB

Site chrome, used on every page.

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/shared/address.jpg` | `img/address.jpg` | 512x512 | PNG | 3.7 KB |
| `/source-images/shared/alert-engineering-works-logo.png` | `img/alert-engineering-works-logo.png` | 1164x142 | PNG | 30.6 KB |
| `/source-images/shared/banner.png` | `img/banner.png` | 1339x500 | PNG | 453.9 KB |
| `/source-images/shared/email.png` | `img/email.png` | 768x768 | PNG | 54.8 KB |
| `/source-images/shared/favicon.png` | `img/favicon.png` | 217x142 | PNG | 10.9 KB |
| `/source-images/shared/icon person.png` | `img/icon person.png` | 559x671 | PNG | 6.3 KB |
| `/source-images/shared/phone.jpg` | `img/phone.jpg` | 2133x2133 | PNG | 74.2 KB |
| `/source-images/shared/whatsapp.gif` | `img/whatsapp.gif` | 200x200 | GIF (12 frames) | 55.9 KB |

### `/source-images/index/` — 4 files, 7.10 MB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/index/gravity die casting.jpg` | `img/gravity die casting.jpg` | 1051x254 | JPEG | 1.78 MB |
| `/source-images/index/precision machining.jpg` | `img/precision machining.jpg` | 1052x254 | JPEG | 1.78 MB |
| `/source-images/index/sand casting.jpg` | `img/sand casting.jpg` | 1053x254 | JPEG | 1.77 MB |
| `/source-images/index/tool mould making.jpg` | `img/tool mould making.jpg` | 1053x254 | JPEG | 1.78 MB |

### `/source-images/about-us/` — 3 files, 281.0 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/about-us/alert1_1771251175535.jpg` | `alert1_1771251175535.jpg` | 996x564 | JPEG | 92.1 KB |
| `/source-images/about-us/alert2_1771250748749.jpg` | `alert2_1771250748749.jpg` | 855x477 | JPEG | 104.0 KB |
| `/source-images/about-us/alert3_1771250759684.jpg` | `alert3_1771250759684.jpg` | 819x475 | JPEG | 84.9 KB |

### `/source-images/certification/` — 2 files, 271.2 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/certification/alertiso_1791458416987.jpg` | `alertiso_1791458416987.jpg` | 647x911 | JPEG | 166.9 KB |
| `/source-images/certification/certificate_alert_1782881638369.jpg` | `certificate_alert_1782881638369.jpg` | 641x901 | JPEG | 104.3 KB |

### `/source-images/Aluminium-Foundry/` — 5 files, 1014.1 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/Aluminium-Foundry/Aluminium foundry1.jpeg` | `img/product/Aluminium foundry1.jpeg` | 664x671 | JPEG | 85.0 KB |
| `/source-images/Aluminium-Foundry/aluminium_foundry2.jpg` *(converted from .jfif)* | `aluminium_foundry2.jfif` | 732x941 | JPEG | 178.3 KB |
| `/source-images/Aluminium-Foundry/aluminium_foundry3.jpg` *(converted from .jfif)* | `aluminium_foundry3.jfif` | 823x923 | JPEG | 247.7 KB |
| `/source-images/Aluminium-Foundry/aluminium_foundry4.jpg` *(converted from .jfif)* | `aluminium_foundry4.jfif` | 1600x900 | JPEG | 236.4 KB |
| `/source-images/Aluminium-Foundry/aluminium_foundry5.jpg` *(converted from .jfif)* | `aluminium_foundry5.jfif` | 900x1600 | JPEG | 266.8 KB |

### `/source-images/Machine-Shop/` — 5 files, 1.48 MB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/Machine-Shop/Jyoti CNC  Automation Limited.png` | `img/product/Jyoti CNC  Automation Limited.png` | 650x400 | PNG | 202.7 KB |
| `/source-images/Machine-Shop/machine_shop1.jpg` *(converted from .jfif)* | `machine_shop1.jfif` | 1600x901 | JPEG | 398.4 KB |
| `/source-images/Machine-Shop/machine_shop2.jpg` *(converted from .jfif)* | `machine_shop2.jfif` | 1600x900 | JPEG | 376.1 KB |
| `/source-images/Machine-Shop/machine_shop3.jpg` *(converted from .jfif)* | `machine_shop3.jfif` | 1600x900 | JPEG | 495.4 KB |
| `/source-images/Machine-Shop/Mercury Machine Tools Services.jpeg` | `img/product/Mercury Machine Tools Services.jpeg` | 500x375 | JPEG | 39.9 KB |

### `/source-images/Casting-Design/` — 3 files, 17.1 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/Casting-Design/casting1.jpg` | `img/product/casting1.jpg` | 300x225 | JPEG | 4.6 KB |
| `/source-images/Casting-Design/casting2.jpg` | `img/product/casting2.jpg` | 300x225 | JPEG | 7.3 KB |
| `/source-images/Casting-Design/casting3.jpg` | `img/product/casting3.jpg` | 300x225 | JPEG | 5.3 KB |

### `/source-images/Tool-Making/` — 4 files, 221.7 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/Tool-Making/tool1.jpg` | `img/product/tool1.jpg` | 450x350 | JPEG | 60.9 KB |
| `/source-images/Tool-Making/tool2.jpg` | `img/product/tool2.jpg` | 450x350 | JPEG | 53.0 KB |
| `/source-images/Tool-Making/tool3.jpg` | `img/product/tool3.jpg` | 450x350 | JPEG | 51.7 KB |
| `/source-images/Tool-Making/tool4.jpg` | `img/product/tool4.jpg` | 450x350 | JPEG | 56.0 KB |

### `/source-images/Foundry-Quality-Control/` — 6 files, 1.14 MB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/Foundry-Quality-Control/foundry-quality.png` | `img/product/foundry-quality.png` | 1581x1021 | PNG | 1.03 MB |
| `/source-images/Foundry-Quality-Control/melt-quality-equipment1.jpg` | `img/product/melt-quality-equipment1.jpg` | 350x354 | JPEG | 10.3 KB |
| `/source-images/Foundry-Quality-Control/melt-quality-equipment2.jpg` | `img/product/melt-quality-equipment2.jpg` | 350x354 | JPEG | 13.3 KB |
| `/source-images/Foundry-Quality-Control/Quality-control-2.jpg` | `img/product/Quality-control-2.jpg` | 897x1484 | JPEG | 48.9 KB |
| `/source-images/Foundry-Quality-Control/Quality-control-3.jpg` | `img/product/Quality-control-3.jpg` | 166x234 | JPEG | 4.4 KB |
| `/source-images/Foundry-Quality-Control/Thermo-Analysis-1.jpg` | `img/product/Thermo-Analysis-1.jpg` | 300x401 | JPEG | 38.2 KB |

### `/source-images/gallery/` — 79 files, 9.20 MB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/gallery/1.jpeg` | `img/new/1.jpeg` | 973x901 | JPEG | 109.7 KB |
| `/source-images/gallery/1.png` | `img/gallery/1.png` | 250x252 | PNG | 69.0 KB |
| `/source-images/gallery/10.png` | `img/new/10.png` | 667x757 | PNG | 419.2 KB |
| `/source-images/gallery/11.png` | `img/new/11.png` | 1086x1011 | PNG | 1.03 MB |
| `/source-images/gallery/2.jpeg` | `img/new/2.jpeg` | 1011x900 | JPEG | 121.8 KB |
| `/source-images/gallery/2.png` | `img/gallery/2.png` | 250x252 | PNG | 67.6 KB |
| `/source-images/gallery/3.jpeg` | `img/new/3.jpeg` | 1054x901 | JPEG | 148.7 KB |
| `/source-images/gallery/3.png` | `img/gallery/3.png` | 250x252 | PNG | 46.4 KB |
| `/source-images/gallery/4.jpeg` | `img/new/4.jpeg` | 1576x901 | JPEG | 131.2 KB |
| `/source-images/gallery/4.png` | `img/gallery/4.png` | 250x252 | PNG | 57.1 KB |
| `/source-images/gallery/5.jpeg` | `img/new/5.jpeg` | 1015x900 | JPEG | 156.4 KB |
| `/source-images/gallery/6.jpeg` | `img/new/6.jpeg` | 896x900 | JPEG | 100.0 KB |
| `/source-images/gallery/7.jpeg` | `img/new/7.jpeg` | 946x900 | JPEG | 94.8 KB |
| `/source-images/gallery/8.png` | `img/new/8.png` | 988x1305 | PNG | 1.12 MB |
| `/source-images/gallery/9.png` | `img/new/9.png` | 1054x1207 | PNG | 1.00 MB |
| `/source-images/gallery/Aluminium Reserve Dise1.jpeg` | `img/gallery/Aluminium Reserve Dise1.jpeg` | 899x1599 | JPEG | 218.2 KB |
| `/source-images/gallery/Aluminium Reserve Dise2.jpeg` | `img/gallery/Aluminium Reserve Dise2.jpeg` | 1280x678 | JPEG | 295.2 KB |
| `/source-images/gallery/aluminium-motor-body.jpeg` | `img/gallery/aluminium-motor-body.jpeg` | 780x1600 | JPEG | 123.0 KB |
| `/source-images/gallery/products-43.jpeg` | `img/gallery/products-43.jpeg` | 1200x1600 | JPEG | 307.8 KB |
| `/source-images/gallery/products-44.jpeg` | `img/gallery/products-44.jpeg` | 1200x1600 | JPEG | 199.1 KB |
| `/source-images/gallery/products-45.jpeg` | `img/gallery/products-45.jpeg` | 1200x1600 | JPEG | 179.1 KB |
| `/source-images/gallery/products-46.jpeg` | `img/gallery/products-46.jpeg` | 1200x1600 | JPEG | 265.7 KB |
| `/source-images/gallery/products-48.jpeg` | `img/gallery/products-48.jpeg` | 1480x1600 | JPEG | 142.6 KB |
| `/source-images/gallery/products-49.jpeg` | `img/gallery/products-49.jpeg` | 1521x1600 | JPEG | 161.0 KB |
| `/source-images/gallery/products-50.jpeg` | `img/gallery/products-50.jpeg` | 1285x1600 | JPEG | 102.3 KB |
| `/source-images/gallery/products-51.jpeg` | `img/gallery/products-51.jpeg` | 1476x1600 | JPEG | 265.5 KB |
| `/source-images/gallery/products-52.jpeg` | `img/gallery/products-52.jpeg` | 1589x1600 | JPEG | 149.9 KB |
| `/source-images/gallery/products-53.jpeg` | `img/gallery/products-53.jpeg` | 1599x1575 | JPEG | 189.6 KB |
| `/source-images/gallery/products-54.jpeg` | `img/gallery/products-54.jpeg` | 1600x1553 | JPEG | 118.3 KB |
| `/source-images/gallery/products-55.jpeg` | `img/gallery/products-55.jpeg` | 1599x1599 | JPEG | 282.6 KB |
| `/source-images/gallery/products-56.jpeg` | `img/gallery/products-56.jpeg` | 1498x1600 | JPEG | 318.2 KB |
| `/source-images/gallery/products-59.jpeg` | `img/gallery/products-59.jpeg` | 960x1280 | JPEG | 116.3 KB |
| `/source-images/gallery/products-60.jpeg` | `img/gallery/products-60.jpeg` | 1200x1600 | JPEG | 184.8 KB |
| `/source-images/gallery/products-61.jpeg` | `img/gallery/products-61.jpeg` | 805x988 | JPEG | 82.8 KB |
| `/source-images/gallery/products-62.jpeg` | `img/gallery/products-62.jpeg` | 841x925 | JPEG | 77.4 KB |
| `/source-images/gallery/products-63.jpeg` | `img/gallery/products-63.jpeg` | 1280x960 | JPEG | 143.0 KB |
| `/source-images/gallery/products-64.jpeg` | `img/gallery/products-64.jpeg` | 960x1280 | JPEG | 143.2 KB |
| `/source-images/gallery/products-65.jpeg` | `img/gallery/products-65.jpeg` | 960x1280 | JPEG | 98.8 KB |
| `/source-images/gallery/products_01.jpg` | `img/gallery/products_01.jpg` | 197x148 | JPEG | 24.3 KB |
| `/source-images/gallery/products_02.jpg` | `img/gallery/products_02.jpg` | 197x148 | JPEG | 26.8 KB |
| `/source-images/gallery/products_03.jpg` | `img/gallery/products_03.jpg` | 197x148 | JPEG | 24.5 KB |
| `/source-images/gallery/products_04.jpg` | `img/gallery/products_04.jpg` | 197x148 | JPEG | 27.2 KB |
| `/source-images/gallery/products_05.jpg` | `img/gallery/products_05.jpg` | 197x148 | JPEG | 24.8 KB |
| `/source-images/gallery/products_06.jpg` | `img/gallery/products_06.jpg` | 197x148 | JPEG | 27.0 KB |
| `/source-images/gallery/products_07.jpg` | `img/gallery/products_07.jpg` | 197x148 | JPEG | 21.0 KB |
| `/source-images/gallery/products_08.jpg` | `img/gallery/products_08.jpg` | 197x148 | JPEG | 26.7 KB |
| `/source-images/gallery/products_09.jpg` | `img/gallery/products_09.jpg` | 197x148 | JPEG | 19.4 KB |
| `/source-images/gallery/products_10.jpg` | `img/gallery/products_10.jpg` | 197x131 | JPEG | 9.6 KB |
| `/source-images/gallery/products_11.jpg` | `img/gallery/products_11.jpg` | 197x131 | JPEG | 8.7 KB |
| `/source-images/gallery/products_12.jpg` | `img/gallery/products_12.jpg` | 197x131 | JPEG | 9.3 KB |
| `/source-images/gallery/products_13.jpg` | `img/gallery/products_13.jpg` | 197x131 | JPEG | 10.0 KB |
| `/source-images/gallery/products_14.jpg` | `img/gallery/products_14.jpg` | 197x131 | JPEG | 7.0 KB |
| `/source-images/gallery/products_15.jpg` | `img/gallery/products_15.jpg` | 197x131 | JPEG | 7.4 KB |
| `/source-images/gallery/products_16.jpg` | `img/gallery/products_16.jpg` | 197x131 | JPEG | 11.5 KB |
| `/source-images/gallery/products_17.jpg` | `img/gallery/products_17.jpg` | 197x131 | JPEG | 12.8 KB |
| `/source-images/gallery/products_18.jpg` | `img/gallery/products_18.jpg` | 197x131 | JPEG | 11.9 KB |
| `/source-images/gallery/products_19.jpg` | `img/gallery/products_19.jpg` | 197x131 | JPEG | 11.4 KB |
| `/source-images/gallery/products_20.jpg` | `img/gallery/products_20.jpg` | 197x131 | JPEG | 7.2 KB |
| `/source-images/gallery/products_21.jpg` | `img/gallery/products_21.jpg` | 197x131 | JPEG | 9.2 KB |
| `/source-images/gallery/products_22.jpg` | `img/gallery/products_22.jpg` | 197x131 | JPEG | 7.3 KB |
| `/source-images/gallery/products_23.jpg` | `img/gallery/products_23.jpg` | 197x131 | JPEG | 7.0 KB |
| `/source-images/gallery/products_24.jpg` | `img/gallery/products_24.jpg` | 197x131 | JPEG | 9.7 KB |
| `/source-images/gallery/products_25.jpg` | `img/gallery/products_25.jpg` | 197x131 | JPEG | 7.8 KB |
| `/source-images/gallery/products_26.jpg` | `img/gallery/products_26.jpg` | 197x131 | JPEG | 7.3 KB |
| `/source-images/gallery/products_27.jpg` | `img/gallery/products_27.jpg` | 197x131 | JPEG | 7.6 KB |
| `/source-images/gallery/products_28.jpg` | `img/gallery/products_28.jpg` | 197x131 | JPEG | 8.5 KB |
| `/source-images/gallery/products_29.jpg` | `img/gallery/products_29.jpg` | 197x131 | JPEG | 8.6 KB |
| `/source-images/gallery/products_30.jpg` | `img/gallery/products_30.jpg` | 192x144 | JPEG | 10.0 KB |
| `/source-images/gallery/products_31.jpg` | `img/gallery/products_31.jpg` | 192x144 | JPEG | 9.9 KB |
| `/source-images/gallery/products_32.jpg` | `img/gallery/products_32.jpg` | 192x144 | JPEG | 8.0 KB |
| `/source-images/gallery/products_33.jpg` | `img/gallery/products_33.jpg` | 192x144 | JPEG | 8.3 KB |
| `/source-images/gallery/products_34.jpg` | `img/gallery/products_34.jpg` | 197x148 | JPEG | 12.9 KB |
| `/source-images/gallery/products_35.jpg` | `img/gallery/products_35.jpg` | 197x148 | JPEG | 6.9 KB |
| `/source-images/gallery/products_36.jpg` | `img/gallery/products_36.jpg` | 197x148 | JPEG | 5.9 KB |
| `/source-images/gallery/products_37.jpg` | `img/gallery/products_37.jpg` | 197x148 | JPEG | 5.5 KB |
| `/source-images/gallery/products_38.jpg` | `img/gallery/products_38.jpg` | 197x148 | JPEG | 11.9 KB |
| `/source-images/gallery/products_39.jpg` | `img/gallery/products_39.jpg` | 197x148 | JPEG | 6.8 KB |
| `/source-images/gallery/products_40.jpg` | `img/gallery/products_40.jpg` | 197x148 | JPEG | 5.6 KB |
| `/source-images/gallery/products_42.jpeg` | `img/gallery/products_42.jpeg` | 197x148 | JPEG | 15.2 KB |

### `/source-images/contact/` — 1 files, 20.1 KB

| Local path | Source path on live site | Dimensions | Format | Size |
|------------|--------------------------|-----------:|--------|-----:|
| `/source-images/contact/logo.6312ed593f7110.66565181.png` | `https://www.jotform.com/uploads/Alert_Engineering/form_files/logo.6312ed593f7110.66565181.png` | 1553x177 | PNG | 20.1 KB |

---

## 3. .jfif conversions

The live site serves 7 facility photos as `.jfif`. Each was re-encoded to baseline JPEG
(quality 95, no chroma subsampling) and saved with a `.jpg` extension. Pixel dimensions
are unchanged.

| Original | Saved as | Dimensions |
|----------|----------|-----------:|
| `aluminium_foundry2.jfif` | `/source-images/Aluminium-Foundry/aluminium_foundry2.jpg` | 732x941 |
| `aluminium_foundry3.jfif` | `/source-images/Aluminium-Foundry/aluminium_foundry3.jpg` | 823x923 |
| `aluminium_foundry4.jfif` | `/source-images/Aluminium-Foundry/aluminium_foundry4.jpg` | 1600x900 |
| `aluminium_foundry5.jfif` | `/source-images/Aluminium-Foundry/aluminium_foundry5.jpg` | 900x1600 |
| `machine_shop1.jfif` | `/source-images/Machine-Shop/machine_shop1.jpg` | 1600x901 |
| `machine_shop2.jfif` | `/source-images/Machine-Shop/machine_shop2.jpg` | 1600x900 |
| `machine_shop3.jfif` | `/source-images/Machine-Shop/machine_shop3.jpg` | 1600x900 |

---

## 4. Duplicates

Every downloaded file was hashed with SHA-256, and additionally compared on decoded
pixel data to catch re-encodings of the same photo.

**No two files are byte-identical, and no two are pixel-identical.** The repetition in
the gallery is a *repeated reference*, not a duplicated file:

| Kind | Detail |
|------|--------|
| Repeated reference | `img/new/4.jpeg` appears **twice** in `gallery.html` — at slot 4 and again at slot 12. 79 `<img>` slots therefore render 78 distinct files. |
| Byte-identical files (SHA-256) | none |
| Pixel-identical files (different bytes) | none |
| Cross-page reuse of a content image | none — only the 8 shared chrome assets are reused, and they are stored once |

---

## 5. Fetch & download failures

**None.** 11/11 pages fetched (HTTP 200) and 120/120 images downloaded successfully.

Two images exist in the page source but are inside HTML comments, so they are **not
displayed** on the live site. Both were captured anyway and are flagged in the Markdown:

| File | Page | Status |
|------|------|--------|
| `/source-images/gallery/products-56.jpeg` | gallery | commented out in source |
| `/source-images/Foundry-Quality-Control/Thermo-Analysis-1.jpg` | Foundry-Quality-Control | commented out in source |

`img/gallery/products_41`, `products-47`, `products-57` and `products-58` are absent from
the source entirely — the numbering simply skips them. Nothing failed to download.

---

## 6. Content conflicts

Contradictions and inconsistencies observed in the existing copy. **Listed only — nothing
has been changed.** Resolving these needs a decision from the site owner.

### 6.1 Maximum single-piece casting weight — 465 kg vs 500 kg

| Page | Statement |
|------|-----------|
| about-us | "We Manufacture Castings from 10gm to **500 Kg**. Single Piece Weight ." |
| Aluminium-Foundry (intro) | "casting weights from 10 g up to **465 kg** per piece" |
| Aluminium-Foundry (list) | "Single-piece casting weights from 10 g up to **465 kg**" |
| gallery (heading) | "**500 kg** casting successfully product" |

Three pages disagree on the headline capability figure. The gallery heading and about-us
say 500 kg; the Aluminium Foundry page says 465 kg twice.

### 6.2 Years of experience — "more than 30 years" vs founded 1982

| Page | Statement |
|------|-----------|
| index | "The company was established in **1982**" and "more than **30 years** of experience" |
| about-us | "Established in **1982**" and "More Than **30 Years** of Experience" |
| Aluminium-Foundry | "**Since 1982**" |
| footer (all pages) | "established in **1982**" |

Founding year 1982 means **44 years** as of 2026. "More than 30 years" was accurate when
written but now understates the company by over a decade. It appears on 2 pages.

### 6.3 Page title misspells "Foundry"

`Foundry-Quality-Control.html` has `<title>Alert Engineering Works - Found**a**ry Quality
Control</title>`, while the nav, breadcrumb and H2 on the same page all read "Foundry
Quality Control".

### 6.4 Tool-Making image alt attributes are swapped

| File shown | alt attribute | Caption below it |
|------------|---------------|------------------|
| `tool4.jpg` | `alt="tool3"` | Vaccum forming mold |
| `tool3.jpg` | `alt="tool4"` | Rotomolding exhaust pipe mold |

The file numbering and the alt text disagree. Captions have been kept with the file each
one actually sits beside. The same page also has a commented-out `tool3.jpg` block whose
caption duplicates the live "Rotomolding exhaust pipe mold" entry.

### 6.5 Two different H3 headings with identical text (Machine-Shop)

"Conventional Machining Support" is used twice on Machine-Shop — once as a photo caption
and once as the heading of the capability list below it.

### 6.6 Contact form field labelled "Subject" is internally "lastName"

JotForm field `qid 9` has internal name `q9_lastName` but its visible label is "Subject *".
Submissions will arrive under a "Last Name" column containing subject text.

### 6.7 Spelling and formatting inconsistencies in existing copy

| Page | As written |
|------|-----------|
| Foundry-Quality-Control | "Melt Quality **Measurment**" (heading) |
| Tool-Making | "**Vaccum** forming mold" |
| about-us | "With **Atmost** Reliability" |
| footer credit | "Designed by **Accuarte** Management" |
| about-us, footer | "vapi" lowercase in the address; "**G.I.D.C**" without trailing period |
| about-us | "10**gm**" vs Aluminium-Foundry "10 **g**" |
| about-us | "**VAC-Test** System" vs Foundry-Quality-Control "**VAC Test** System" vs Aluminium-Foundry "a **vacuum test** system" |
| about-us | trailing space before the period: "Single Piece Weight ." |
| about-us breadcrumb/H2 | "About **us**" vs nav "About **Us**" |

### 6.8 Worth verifying with the owner

- Aluminium-Foundry lists ASTM alloy grade "**154**" among otherwise 3-digit casting
  designations (204, 208, 319, A413, A360, 336, 355, A356, 356). It may be a typo, but the
  value has been captured exactly as published.
- The `index.html` `keywords` meta tag duplicates the `description` tag word for word.
- certification page asserts ISO 9001:2015 certification; the second certificate image is
  described only as a generic "Quality & Compliance Certificate" with no issuing body named.

---

## 7. Broken mechanics (recorded for a later phase — not fixed)

Per the ground rules these are mechanical defects, left untouched in this capture.

| Issue | Where | Count |
|-------|-------|------:|
| **Stray `-->` rendered as visible text.** Source reads `<!-- <--whtaspp--> --&gt;` — the comment closes at the first `-->`, leaving a literal `--&gt;` that displays on the page. Occurs twice per page, just below the nav. | all pages except index | 2 x 10 pages |
| **Dead `href="##"` links** on all four footer "Get in Touch" rows (Mehul Patel, phone, emails, address) | footer, all pages | 4 x 11 |
| **Empty `href="#"` social links** (twitter, facebook, instagram, skype, linkedin) | footer, all pages | 5 x 11 |
| **Nav dropdown parents `href="#"`** ("The Company", "Facilities") | header, all pages | 2 x 11 |
| **`<li>` nested directly inside `<h5>` / `<h3>`** with no `<ul>` wrapper | Foundry-Quality-Control (3), Tool-Making (1) | 4 |
| **Empty `<h4></h4>`** | Casting-Design | 1 |
| **Mis-nested `</center></iframe>`** — the iframe closing tag sits outside the `<center>` it opened inside | contact | 1 |
| **Emails are Cloudflare-obfuscated** (`span.__cf_email__`), so they need JS to render; two also point at `href="/cdn-cgi/l/email-protection"` | all pages | — |
| **Two commented-out `<img>` blocks** (see §5) | gallery, Foundry-Quality-Control | 2 |
| **Wrong file extension** — `phone.jpg` and `address.jpg` are actually PNG data served with a `.jpg` name. Browsers sniff the type so they render, but the names are misleading. | shared footer icons | 2 |
| **Oversized footer icons** — `phone.jpg` is 2133x2133 and `address.jpg` 512x512, both rendered at 25x25; `email.png` is 768x768 and `icon person.png` 559x671. ~139 KB of icons to draw 4 tiny glyphs. | footer, all pages | 4 |

---

## 8. Decoded site data

Written to `/content/site.json`. The two email addresses were decoded from the
Cloudflare `data-cfemail` attributes (first hex byte is the XOR key for the rest):

| Field | Value |
|-------|-------|
| Company | Alert Engineering Works |
| Founded | 1982 |
| Contact person | Mehul Patel |
| Phone | 9327942888 |
| Email 1 | info@alertengg.com *(decoded)* |
| Email 2 | sales@alertengg.com *(decoded)* |
| Address | C-1/2308, 3rd Phase, G.I.D.C, vapi - Gujarat, INDIA. |
| WhatsApp | https://wa.me/919327942888 *(source adds `?text=Hi%20There!`)* |
| JotForm ID | 222451131643445 |
| Maps coords | 20.370098215313362, 72.94543201444414 |
| Footer credit | Designed by Accuarte Management — https://www.websitedesignvapi.com/ |
| Template origin | BootstrapMade "Company" free HTML template |

