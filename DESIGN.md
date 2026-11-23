---
name: Smakota · Obiady Domowe
description: Tactile Ukrainian-Polish Bistro Menu Sheet & Burgundy Folk Banner System
colors:
  paprika-terracotta: "#AE2C12"
  paprika-terracotta-deep: "#8F220C"
  stamp-terracotta-ink: "#F26846"
  borscht-mahogany: "#5E1914"
  borscht-mahogany-deep: "#3E0F0B"
  cast-iron-stamp: "#161110"
  rolling-pin-dough: "#E5D1B5"
  menu-sheet-paper: "#FFFDFB"
  flour-parchment: "#F6EFE6"
  golden-smetana: "#DDA022"
  fresh-dill: "#1E5227"
  espresso-ink: "#21110E"
  mahogany-body-ink: "#54332A"
  warm-border: "#DEC8AE"
typography:
  display:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "clamp(2.1rem, 4vw, 3.35rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "0.02em"
  title:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 800
    letterSpacing: "0.02em"
rounded:
  stamp: "6px"
  control: "10px"
  card: "14px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.paprika-terracotta}"
    textColor: "{colors.menu-sheet-paper}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.paprika-terracotta-deep}"
  button-call:
    backgroundColor: "{colors.borscht-mahogany}"
    textColor: "{colors.menu-sheet-paper}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  category-stamp:
    backgroundColor: "{colors.cast-iron-stamp}"
    textColor: "{colors.stamp-terracotta-ink}"
    rounded: "{rounded.stamp}"
    padding: "8px 18px"
  dish-card:
    backgroundColor: "{colors.menu-sheet-paper}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.card}"
    padding: "16px 18px"
---

# Design System: Smakota · Obiady Domowe

## Overview

**Creative North Star: "The Rolling-Pin Menu Board & Folk Dish Banner"**

Smakota's visual language translates the physical artifact of its Warsaw bistro menu (`WhatsApp Image 2026-11-21 at 9.13.10 a.m..jpeg`), its table-tent review cards, and its 21 branded dish photographs directly into an interactive bilingual (Polish and Ukrainian) storefront. Rather than adopting generic dark-mode food delivery chrome or sterile minimalist cards, every section is anchored by tactile culinary artifacts: the wooden rolling-pin emblem (`SMAKOTA menu`), pitch-espresso category stamp blocks (`ZUPA`, `PIEROGI`, `PIELMIENI`, `CZEBUREKI`, `CHINKALI`), deep borscht-mahogany header bars with folk three-petal flourishes, and subtle hand-drawn pierogi watermarks.

**Key Characteristics:**
- **Physical Menu Continuity:** Category headers replicate the black rectangular stamp blocks with condensed paprika-terracotta display lettering from the printed menu sheet.
- **Borscht & Flour Warmth:** Crisp menu-sheet paper (`#FFFDFB`) and warm dough containers (`#F6EFE6`, `#E5D1B5`) contrast with deep borscht mahogany (`#5E1914`) and cast-iron stamp blocks (`#161110`).
- **Honest Culinary Photography:** Uses only the 21 real dish photos provided by the restaurant; dishes without separate photos use the authentic printed-menu sheet layout with category stamp badges instead of stock substitutes.
- **Tabular Price Precision:** Every PLN (`zł`) price, phone number, and cart badge uses `tabular-nums` for instant lunchtime scanning.

## Colors

The palette is extracted directly from Smakota's physical printed menu sheet, official logo, and 21 dish banners.

### Primary
- **Paprika Terracotta** (`#AE2C12`): Primary action buttons (`Dodaj do koszyka`, `Zobacz pełne menu`), active fulfillment toggles, and price callouts.
- **Borscht Mahogany** (`#5E1914`): Signature dish banner header bars, direct phone call buttons (`tel:+48576113316`), modal headers, and the B2B construction/group order section.
- **Cast-Iron Stamp** (`#161110`) with **Stamp Terracotta Ink** (`#F26846`): The solid rectangular stamp blocks behind uppercase category headings (`ZUPA`, `DANIA MIĘSNE`, `PIEROGI`, `PIELMIENI`, `CZEBUREKI`).

### Secondary
- **Rolling-Pin Dough** (`#E5D1B5`): The wooden rolling-pin emblem body and the `33 zł` lunch medallion.
- **Golden Smetana** (`#DDA022`): 5-star review ratings, online-menu confirmation badges, and Ukrainian flag heart accents.
- **Fresh Dill** (`#1E5227`): Active branch indicators, confirmed printed-menu source badges, and order confirmation alerts.

### Neutral
- **Menu Sheet Paper** (`#FFFDFB`): Primary page and card background, matching the clean paper of the printed menu and table-tent cards.
- **Flour Parchment** (`#F6EFE6`): Secondary section background (`Lunch 33 zł` configurator, toolbar containers, and reviews section).
- **Espresso Ink** (`#21110E`) & **Mahogany Body Ink** (`#54332A`): High-contrast primary and secondary text hues tinted with warm mahogany rather than neutral gray.
- **Warm Border** (`#DEC8AE`): Crisp 1px structural borders on resting cards and form fields.

### Named Rules
**The Zero-Gray Rule.** Secondary text, muted labels, and borders are always tinted from warm mahogany (`#54332A`, `#69443A`) or dough (`#DEC8AE`), never neutral gray.
**The Stamp Contrast Rule.** All category stamp blocks (`#161110`) use high-luminance paprika-orange (`#F26846`) to preserve the printed menu's signature look while exceeding 4.5:1 WCAG AA contrast.

## Typography

**Display Font:** `Yeseva One` (with `Georgia, serif` fallback)
**Stamp & UI Display Font:** `Rubik` Black 800/900 (with `system-ui, sans-serif` fallback)
**Body Font:** `Onest` 400–800 (with `-apple-system, BlinkMacSystemFont, sans-serif` fallback)

**Character:** `Yeseva One` echoes the high-contrast folk-serif lettering of the 21 dish banners (`Barszcz ukraiński`, `Chłodnik ukraiński`, `Pielmieni`), `Rubik` 900 reproduces the heavy rounded uppercase category stamps (`ZUPA`, `PIEROGI`, `CZEBUREKI`) and `SMAKOTA menu` rolling-pin logo, and `Onest` delivers effortless bilingual Polish (`ąęćłńóśźż`) and Ukrainian Cyrillic (`іїєґ`) readability.

### Hierarchy
- **Display** (`400`, `clamp(2.1rem, 4vw, 3.35rem)`, `1.12`): Hero headline and primary story statements.
- **Headline / Category Stamp** (`900`, `clamp(1.35rem, 2.4vw, 1.85rem)`, `1.05`, uppercase): Section and category stamp blocks (`ZUPA`, `DANIA MIĘSNE`, `PIEROGI`).
- **Title** (`400`, `1.15rem`, `1.25`): Individual dish titles on cards and modals.
- **Body** (`400–600`, `1rem`, `1.55`, max `65ch`): Dish descriptions, branch details, and checkout instructions.
- **Label** (`800`, `0.85rem`, `0.02em`): Filter pills, branch tabs, and source status badges.

### Named Rules
**The No-Kicker Rule.** Headings stand on their own authority or wear the black-and-terracotta stamp block directly; never place a small eyebrow label above a heading.

## Layout

The layout uses a centered `1320px` max-width container (`20px` horizontal padding on mobile, `32px` on tablet/desktop).
- **First Viewport:** Split two-column grid (`1.08fr 0.92fr` on desktop) pairing the rolling-pin emblem, headline, 3 factual cooking pillars, primary CTAs, and branch switcher on the left with the burgundy folk dish showcase on the right.
- **Lunch 33 zł Configurator:** 4-column interactive step grid (`1. Zupa`, `2. Danie mięsne`, `3. Dodatek`, `4. Surówka`).
- **Menu Catalog:** Supports both a 3-column e-commerce card grid (`dishes-grid`) and a 2-column printed menu sheet view (`paper-menu-sheet`) mirroring the physical two-sided menu.

## Elevation & Depth

Surfaces follow a strict single-elevation doctrine: resting cards declare their boundary via a `1px solid #DEC8AE` border with zero shadow, while floating or featured focal containers (hero showcase card, lunch builder shell, table-tent card, and modals) use a warm mahogany-tinted offset shadow with no outer border.

### Shadow Vocabulary
- **Soft Bistro Lift** (`box-shadow: 0 14px 32px -10px rgba(62, 18, 13, 0.13)`): Used on the Lunch 33 zł configurator shell and table-tent review card.
- **Elevated Showcase** (`box-shadow: 0 20px 44px -12px rgba(54, 14, 10, 0.20)`): Used on the hero featured dish card, cart drawer, and modal dialogs.

### Named Rules
**The Single-Elevation Rule.** Declare elevation once per container: either a `1px` warm border or a soft shadow, never both on the same card.

## Shapes

- **Cards & Modals:** `14px` border radius (`--radius-card`).
- **Category Stamp Blocks:** `6px` border radius, solid `#161110` fill, mimicking ink-stamped menu headers.
- **Form Controls & Variant Chips:** `10px` border radius (`--radius-control`).
- **Primary Action & Phone Buttons:** Full pill radius (`999px`) for friendly tap ergonomics on mobile.

## Components

### Buttons
- **Shape:** Full pill (`999px`) for primary CTAs and phone links; `10px` rounded rectangle for card-level `Dodaj do koszyka` buttons.
- **Primary:** Paprika Terracotta (`#AE2C12`) background, `#FFFDFB` bold text (`800`), `14px 24px` padding.
- **Hover / Focus:** Darkens to `#8F220C` with a `-2px` vertical lift on `cubic-bezier(0.16, 1, 0.3, 1)` and a `2.5px` terracotta focus ring.
- **Direct Call Button:** Borscht Mahogany (`#5E1914`) background with phone SVG icon and tabular phone number (`+48 576 113 316`).

### Chips
- **Style:** Warm parchment fill (`#FFFDFB`) with `1px solid #C8AD8D` border for dish variants (`M — 15 zł`, `XL — 21 zł`, `500 g — 82 zł`, `1000 g — 153 zł`).
- **State:** Selected state fills with Borscht Mahogany (`#5E1914`) and `#FDF7F0` text.

### Cards / Containers
- **Corner Style:** `14px` radius.
- **Background:** `#FFFFFF` on `#FFFDFB` or `#F6EFE6` sections.
- **Shadow Strategy:** `1px solid #DEC8AE` at rest; border shifts to `#AE2C12` with `-3px` lift on hover.
- **Internal Padding:** `16px 18px`.

### Inputs / Fields
- **Style:** `1px solid #C8AD8D` stroke, `#FFFFFF` background, `10px` radius, `10px 13px` padding.
- **Focus:** `2.5px solid #AE2C12` outline with `3px` offset.
- **Error / Disabled:** Inline `#B01C12` bold validation message directly beneath the field.

### Navigation
- **Top Utility Bar:** Deep mahogany (`#3E0F0B`) with vyshyvanka geometric top trim, live branch selector pill, opening hours, and quick triggers for original menu photos, ТЗ audit, and DEMO Admin.
- **Main Sticky Header:** Translucent menu paper (`rgba(255, 253, 251, 0.95)`) with official Smakota logo, section links, `PL / UA` language switcher, phone CTA, and live cart counter.

### Rolling-Pin Emblem & Category Stamps (Signature Components)
- **Rolling-Pin Header (`rolling-pin-banner`):** Wooden dough body (`#E5D1B5`) with left/right turned handles, housing the twin Polish-Ukrainian hearts SVG, `SMAKOTA menu` display wordmark, and the circular `Lunch 33 zł` stamp.
- **Category Stamp Block (`stamp-heading`):** Solid `#161110` block with `#F26846` `Rubik` 900 uppercase type, directly reproducing the physical menu's category headers.

## Do's and Don'ts

### Do:
- **Do** use the black-and-terracotta stamp blocks (`#161110` background, `#F26846` `Rubik` 900 uppercase text) for all menu category headings.
- **Do** preserve stateful bilingual switching between `Polski (PL)` and `Українська (UA)` without resetting the visitor's active branch or cart.
- **Do** use only real client photography from `img/` and transparently mark items whose prices come from online delivery profiles or await owner confirmation.

### Don't:
- **Don't** generate or insert stock food photography for dishes that lack an individual photo file; render those dishes in the authentic printed-menu sheet card style.
- **Don't** place kickers or eyebrows above headings, or combine a `1px` border with a wide drop shadow on the same card.
- **Don't** enable online ordering on unconfirmed/upcoming branches (`Lokal #2 — Wkrótce`) or dishes marked `Cena do potwierdzenia`.

