# Morocco Private Drivers — Brand & Asset Brief

Everything a professional, modern private-driver website needs, with exact files, sizes, where each one is used, and how to get it.
This is a production brief, not a gap-filler list: work top to bottom, one section at a time.

---

## How to use this brief

**Priority**
- **P1 — before launch.** The site looks unfinished or untrustworthy without it.
- **P2 — first month.** Lifts conversion and SEO.
- **P3 — when you grow.** Polish and marketing.

**Source** (what to use for each asset)
- **PHOTO** — real photography: your cars, your drivers, real places. Hire a local photographer for one day; it covers almost all P1 items.
- **DESIGN** — made by a designer, or in Figma/Canva using the brand rules below.
- **AI OK** — atmosphere only (landscapes, light, textures). **Never use AI for your cars or drivers.** Customers book a specific vehicle and person, and AI pictures of cars you don't own will mislead them.
- **OFFICIAL** — download from the owner's official brand kit (Google, TripAdvisor, Visa…).

**Where files go:** everything lives in the project's `public/` folder. The paths below are already wired into the site, or are the obvious place to add them.

---

## 1. Brand identity

### Colours (already in the site, `app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| Black | `#000000` | Main surfaces, text |
| White | `#FFFFFF` | Main surfaces, text |
| Sand-gold | `#B8955A` | Buttons, accents, highlights |
| Gold on white text | `#8C6D3C` | Small gold text on light backgrounds (readable) |
| Gold on black | `#C9A66B` | Gold text on dark backgrounds |
| Sand | `#F4EEE4` | Warm section backgrounds |
| Sand 2 | `#E8DDCB` | Borders, large pale numbers |

**Rule:** gold is the accent, never the background of a whole section. Roughly 80% black/white, 15% sand, 5% gold.

### Type
- **Inter Tight** (all text) and **IBM Plex Mono** (small labels). Both are already loaded.
- If you buy a premium grotesk later (e.g. *Neue Haas Grotesk*, *Söhne*), swap it in `app/layout.tsx`.

### Logo — ✅ DONE (in `public/brand/`)
| File | Size / format | Use |
|---|---|---|
| `public/brand/logo.svg` | SVG, black | Light backgrounds, documents |
| `public/brand/logo-white.svg` | SVG, white | Header, footer, dark sections |
| `public/brand/logo-gold.svg` | SVG, sand-gold | Special use: vehicle decals, business cards |
| `public/brand/monogram.svg` | SVG, square, e.g. "MD" | Favicon, WhatsApp avatar, social avatar |

Brief for the designer: a wordmark in a tight grotesk that matches Inter Tight, plus a simple monogram that still reads at 16 px. No car silhouettes, no steering wheels, no camels.

### Favicons & app icons — ✅ DONE (`app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`)
| File | Size | Notes |
|---|---|---|
| `app/favicon.ico` | 32 × 32 | Next.js picks it up automatically |
| `app/icon.png` | 512 × 512 | Black monogram on gold, or gold on black |
| `app/apple-icon.png` | 180 × 180 | iPhone home screen |

### Social share images (Open Graph) — P1 · DESIGN
1200 × 630 JPG. One photo, logo bottom-left, one short line of text.
| File | Page |
|---|---|
| `public/og/default.jpg` | Home and fallback |
| `public/og/airport.jpg` | Airport transfers |
| `public/og/fleet.jpg` | Fleet |
| `public/og/calculator.jpg` | Price calculator ("Know your price before you land") |
| `public/og/blog.jpg` | Journal |
| `public/og/city-<city>.jpg` × 7 | Each city page |

---

## 2. Photography art direction (applies to every photo)

This is what makes the images look **premium** rather than "stock".

- **Light:** golden hour or soft overcast. No harsh midday sun, no flash.
- **Grade:** warm, slightly low contrast, deep (not crushed) blacks, highlights leaning gold. **Apply one Lightroom preset to every photo** so the whole set looks like one shoot.
- **Composition:** generous empty space; the subject off-centre. Leave room for text on hero images (left third or bottom third).
- **Cars:** washed and polished, wheels clean, windows closed, no reflections of the photographer. Shoot at car-headlight height with a 35–50 mm lens.
- **People:** real drivers in the uniform (dark suit or dark polo with a small gold logo). Natural, never posed with a thumbs-up. **Signed model release for every person.**
- **Avoid:** HDR, oversaturated blue skies, crowds, visible competitor branding, readable number plates (blur them).
- **Masters:** keep full-resolution JPG/RAW. Export for web at the sizes below; Next.js produces the WebP/AVIF versions automatically.

---

## 3. Hero visuals — P1

### Home hero video (the biggest single upgrade) · PHOTO (videographer)
| File | Spec |
|---|---|
| `public/video/hero.mp4` | 1920 × 1080, H.264, 10–15 s seamless loop, **no sound**, ≤ 4 MB |
| `public/video/hero.webm` | Same clip, VP9, ≤ 3 MB |
| `public/img/hero.jpg` | 2400 × 1350, first frame as the poster (replaces the current hero) |

Shot list (slow, calm, 3–4 cuts): car gliding along an empty road at golden hour (drone or tracking) → driver opening a rear door → passenger's view through the windscreen toward the Atlas → car arriving at a riad door.

### Page heroes · PHOTO (AI OK for landscapes only)
2400 × 1350 JPG, ≤ 450 KB, subject on the right so the title on the left stays readable.
| File | Subject |
|---|---|
| `public/img/hero-airport.jpg` | Driver in the arrivals hall holding a name board (real driver, real airport, with permission) |
| `public/img/hero-city-to-city.jpg` | Car on the open N8/A7 road, golden hour |
| `public/img/hero-day-trips.jpg` | Car parked at an Atlas viewpoint, valley behind |
| `public/img/hero-tours.jpg` | 4x4 at the edge of the Erg Chebbi dunes at sunset |
| `public/img/hero-fleet.jpg` | Three fleet cars side by side in front of a sand wall |
| `public/img/hero-about.jpg` | The team beside the cars in a riad courtyard |
| `public/img/hero-contact.jpg` | Driver handing a passenger a bottle of water at the car door |
| `public/img/hero-calculator.jpg` | Close-up of a dashboard on a mountain road (no screen text) |

---

## 4. Fleet — P1 · PHOTO only

The site shows 9 vehicles (edit them in `lib/fleet.ts`). **Each card shows a placeholder until its photo exists.** Drop the file in, and it appears automatically.

**Same location, same angle, same time of day for every car.** That consistency is what makes a fleet page look professional. Ideal: one plain sand-coloured wall, late afternoon.

| Main photo (card) | Model |
|---|---|
| `public/img/fleet/skoda-octavia.jpg` | Škoda Octavia |
| `public/img/fleet/mercedes-e-class.jpg` | Mercedes E-Class |
| `public/img/fleet/bmw-5-series.jpg` | BMW 5 Series |
| `public/img/fleet/hyundai-tucson.jpg` | Hyundai Tucson |
| `public/img/fleet/toyota-prado.jpg` | Toyota Land Cruiser Prado |
| `public/img/fleet/mercedes-vito.jpg` | Mercedes Vito |
| `public/img/fleet/ford-tourneo.jpg` | Ford Tourneo |
| `public/img/fleet/mercedes-sprinter.jpg` | Mercedes Sprinter |
| `public/img/fleet/ford-transit.jpg` | Ford Transit |

**Spec:** 1800 × 1200 (3:2) JPG, ≤ 350 KB, three-quarter front view, car filling about 70% of the width, plate blurred.

**Extra shots per car (P2), for a future vehicle detail page:**
- `<slug>-interior.jpg`: rear seats from the open door, 1800 × 1200
- `<slug>-boot.jpg`: boot with two suitcases, showing luggage space
- `<slug>-side.jpg`: clean side profile

If you don't own a model yet, **remove it from `lib/fleet.ts`** rather than showing a picture of someone else's car.

---

## 5. People & service moments — P1/P2 · PHOTO only

| File | Size | Subject | Priority |
|---|---|---|---|
| `public/img/drivers/<name>.jpg` | 800 × 1000 (4:5) | Portrait of each driver, uniform, plain background | P1 |
| `public/img/service-airport.jpg` | 1200 × 800 | Name board at arrivals (replaces the AI one) | P1 |
| `public/img/about-team.jpg` | 1600 × 900 | Real team photo (replaces the AI one) | P1 |
| `public/img/moments/luggage.jpg` | 1200 × 800 | Driver loading suitcases | P2 |
| `public/img/moments/door.jpg` | 1200 × 800 | Driver opening the rear door | P2 |
| `public/img/moments/water.jpg` | 1200 × 800 | Water bottles and Wi-Fi card on the rear seat | P2 |
| `public/img/moments/child-seat.jpg` | 1200 × 800 | Child seat installed (families convert well) | P2 |

---

## 6. Cities — P1 (upgrade the current set)

The current city photos are acceptable placeholders. For a premium look, reshoot or license **one strong hero and two details per city**, all with the same grade.

| Files (per city) | Size |
|---|---|
| `public/img/city-<city>.jpg` (hero) | 2400 × 1350 |
| `public/img/cities/<city>-1.jpg`, `<city>-2.jpg` (details: doors, textures, streets) | 1200 × 1500 (4:5) |

Cities: marrakech, casablanca, agadir, fes, tangier, rabat, essaouira.
Source: PHOTO, or licensed stock (Stocksy, Adobe Stock) with the grade applied. **AI OK** for empty landscapes, not for recognisable landmarks.

---

## 7. Routes — P2

For the 6 most-booked routes, each gets its own page later (big SEO win: "Marrakech to Essaouira private driver").
| File | Size | Subject |
|---|---|---|
| `public/img/routes/<from>-<to>.jpg` | 2400 × 1350 | The road or the arrival view for that route |
| `public/img/routes/<from>-<to>-map.svg` | 1200 × 800 | Minimal route map: black roads, one gold line, city names in Inter Tight · DESIGN |

Routes: marrakech-essaouira, marrakech-agadir, marrakech-merzouga, casablanca-marrakech, marrakech-fes, airport-medina (Marrakech).

---

## 8. Journal (blog) — P2

| File | Size | Notes |
|---|---|---|
| `public/img/blog-<slug>.jpg` | 1600 × 900 | Featured image (already in place; upgrade with real photos over time) |
| `public/img/blog/<slug>-1.jpg`, `-2.jpg` | 1600 × 1067 | Two inline images per article, which helps long reads and Google Images |

Every new article needs: one featured image, two inline images, alt text describing the scene.

---

## 9. Trust & credibility — P1

These do more for bookings than any photo.
| Asset | File / where | Source |
|---|---|---|
| Google Business Profile with real reviews | Link from the reviews section; embed with a review widget | Set up the profile |
| Google rating badge | `public/brand/badges/google.svg` | OFFICIAL |
| TripAdvisor listing + badge | `public/brand/badges/tripadvisor.svg` | OFFICIAL |
| Payment logos | `public/brand/pay/visa.svg`, `mastercard.svg`, `amex.svg`, `apple-pay.svg`, `paypal.svg`, plus a "Cash: MAD / EUR" text label | OFFICIAL brand kits only |
| Tourist transport licence / company registration number | Text in the footer + About page | Your documents |
| Insurance statement | One line on About + FAQ | Your insurer |
| Real review screenshots (optional) | `public/img/reviews/*.png` | Only real reviews, with the reviewer's first name |

---

## 10. Icons — P2 · DESIGN

One icon family, line style, **1.5 px stroke**, black with gold on hover. Use **Lucide** or **Phosphor (Light)**: free, and they match the typography.
Needed: plane, map-pin, route, calendar, clock, users, luggage, snowflake (A/C), wifi, baby (child seat), shield-check, credit-card, banknote, whatsapp, phone, mail, globe (language), star, check.

---

## 11. Video & social — P2/P3

| Asset | Spec | Priority |
|---|---|---|
| 30 s brand film | 1920 × 1080 + 1080 × 1920 vertical cut | P2 |
| Reel/TikTok template | 1080 × 1920, logo end card, gold captions | P3 |
| Instagram post template | 1080 × 1350 | P3 |
| WhatsApp Business profile photo | 640 × 640, monogram | **P1** |
| WhatsApp Business catalogue | 1080 × 1080, one image per vehicle with name + "from" price | P2 |
| Google Business Profile photos | Cover 1080 × 608, plus at least 10 real photos (cars, drivers, office) | **P1** |

---

## 12. Documents — P2 · DESIGN

| Document | Format |
|---|---|
| Price list | A4 PDF, routes × vehicles, brand colours |
| Booking confirmation (sent on WhatsApp/email) | One-page PDF or image: driver name, photo, car, plate, pickup time, price |
| Airport name board | A4 landscape template: logo + "MR / MRS NAME" in Inter Tight |
| Email signature | HTML, logo + WhatsApp link |
| Business card | 85 × 55 mm, black with gold monogram |
| Driver uniform logo | Embroidered monogram, gold thread on black |

---

## 13. Technical rules for every image

- **Naming:** lowercase, hyphens, no spaces: `mercedes-vito.jpg`, not `Mercedes Vito (1).JPG`.
- **Format:** upload JPG; Next.js serves WebP/AVIF automatically if images are switched to `next/image` (recommended next code step).
- **Weight:** heroes ≤ 450 KB, cards ≤ 350 KB, thumbnails ≤ 150 KB.
- **Alt text:** describe the scene and the place ("Mercedes Vito parked outside a riad in Marrakech"), never "image1".
- **Rights:** keep a simple sheet of every image: source, licence, photographer, model release (yes/no).

---

## 14. Launch checklist

**P1 — before launch**
- [x] Logo set + favicon / icon / apple-icon
- [ ] Default social image + calculator social image
- [ ] Home hero video (or at minimum a real hero photo)
- [ ] 9 fleet photos, same location and angle (or remove the models you don't have)
- [ ] Driver portraits + real team photo + real airport name-board photo
- [ ] Google Business Profile live, WhatsApp Business profile photo
- [ ] Licence/registration number and insurance line
- [ ] Official payment logos

**P2 — first month**
- [ ] Page heroes (8)
- [ ] Interior and boot photo per vehicle
- [ ] Service moments (4)
- [ ] Route images + route maps (6)
- [ ] Two inline images per blog post
- [ ] Icon set, price-list PDF, booking confirmation template
- [ ] 30 s brand film

**P3 — growth**
- [ ] City detail photos (14)
- [ ] Social templates, uniform, business cards

---

## Appendix — AI prompts (atmosphere only)

Use these only where the brief says **AI OK**. Add to every prompt:
> photorealistic editorial travel photography, warm low-contrast grade, highlights leaning gold, deep soft blacks, calm and premium, generous negative space, no text, no logos, no people in focus

- **hero-city-to-city (landscape only):** empty two-lane road crossing the Haouz plain toward the High Atlas at golden hour, long shadows, wide 16:9, road leading in from the right
- **hero-day-trips (landscape only):** High Atlas valley viewpoint at morning light, terraced fields and an earthen village far below, 16:9, subject on the right
- **hero-tours (landscape only):** Erg Chebbi dunes at sunset, rippled sand in the foreground, soft haze, 16:9, horizon low
- **routes (landscape only):** the specific road for each route (argan plain for Essaouira, Tizi n'Tichka bends for Ouarzazate, coastal cliffs for Agadir), 16:9
- **textures (backgrounds, P3):** close-up of a sand-coloured tadelakt plaster wall in raking light; brass lantern detail; zellige tile pattern in muted sand and black, square

**Not for AI:** any car, any driver, any customer, airport interiors with signage, recognisable landmarks used as "our" location.
