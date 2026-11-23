# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Semantic HTML5, custom CSS design tokens & responsive layout, vanilla ES6 modular JavaScript (interactive multi-branch storefront, bilingual PL/UA catalog, 33 zł Lunch configurator, B2B construction/group order calculator, guest cart & checkout flow, and interactive DEMO Admin panel).

## Users

1. **Polish-speaking and Ukrainian-speaking individual customers in Warsaw (Ursus & expanding districts):** Looking for freshly cooked, authentic Ukrainian and traditional home-style meals (*obiady domowe*) at accessible everyday prices, ordering via direct phone call to the branch, self-pickup, or delivery by Smakota's own courier.
2. **Construction site teams and group coordinators (*budowy i firmy*):** Ordering batches of 10–15+ hot lunches (*Lunch dnia 33 zł* or hearty dumpling/meat platters) delivered directly to work sites in Warsaw.
3. **Branch staff and business owner:** Managing branch-specific incoming orders, dish availability, and multi-branch expansion (from 1–2 current locations to 3–5 branches across Warsaw).

## Product Purpose

Smakota — Obiady Domowe is a multi-branch restaurant menu and ordering website for an authentic Ukrainian and home-style kitchen in Warsaw (`ul. Stanisława Wojciechowskiego 33, 02-495 Warszawa`). It presents the complete bilingual (Polish and Ukrainian) menu with real dish photography and prices in PLN (`zł`), enables one-tap phone ordering directly to the selected branch (`+48 576 113 316`), supports interactive online cart and guest checkout for self-pickup and courier delivery, and scales cleanly across 3–5 branches.

## Positioning

Unlike neighboring chain eateries that pre-cook and reheat food or mask ingredients with heavy artificial spice mixes, Smakota cooks every dish fresh only after receiving the order using natural ingredients, offers an everyday 4-course home lunch combo (`zupa + danie mięsne + dodatek + surówka`) for `33 zł`, hand-folds pierogi, pielmieni, chinkali, and crispy czebureki, and delivers with its own dedicated courier as well as serving 10–15+ meal batches for construction sites.

## Operating Context

- Customers frequently browse on mobile phones at lunchtime or on construction sites and want to see dishes, prices, and the direct phone button immediately in the first viewport.
- Polish (`PL`) is the primary default language (as the majority of customers are Polish), with instant, stateful switching to Ukrainian (`UA`) that preserves the selected branch and cart.
- Orders are strictly scoped to a single branch (`Ursus — Wojciechowskiego 33`, plus upcoming `Lokal #2` and scalable `3–5` branch slots).

## Capabilities and Constraints

- **Confirmed Menu & Pricing (PLN):** Complete 11-category printed menu (`Zupa`, `Dania mięsne`, `Dodatki obiadowe`, `Surówki`, `Sosy`, `Napoje`, `Chinkali`, `Pierogi`, `Pielmieni`, `Czebureki`, `Naleśniki`, `Sałatki`) plus the `33 zł` 4-course Lunch combo and 21 photo-banner dishes.
- **Unconfirmed / Ambiguous Data Transparency:** Items present in photo banners or external delivery platforms but not on the physical printed menu sheet, as well as the exact apartment number (`lok. 40` on printed menu vs `lok. 44` in Google Maps/ТЗ), second branch launch status (`Puławska 246` / upcoming branch), delivery zone fees, and online payment provider are explicitly flagged for owner confirmation rather than fabricated as guaranteed production rules.
- **DEMO Stage Scope:** Interactive frontend with branch selection, bilingual PL/UA switcher, full category/search filtering, 33 zł Lunch builder, group/construction site order calculator, cart & guest checkout simulation, physical menu lightbox, and interactive DEMO Admin panel.

## Brand Commitments

- **Brand Name:** `Smakota — Obiady Domowe` (in ТЗ draft noted as `Smakota obiady domówi`; Ukrainian: `Смакота — Домашні обіди`).
- **Visual Authority from Attached Photos:**
  - Warm parchment/dough paper surfaces (`#FAF4EB`, `#F1E5D4`, `#E2CEB3`).
  - Deep borscht burgundy / mahogany header bars (`#5E1914`, `#7A1F19`) with high-contrast serif display titles flanked by three folk petal flourishes and the Ukrainian-Polish twin hearts emblem.
  - Pitch-espresso stamp blocks (`#1A1514`) with bold condensed terracotta-orange display lettering (`#C84326`, `#B5341B`) for category headings.
  - Rolling-pin (`SMAKOTA MENU`) emblem and circular `Lunch 33 zł` spoon-and-fork stamp.
  - Subtle hand-drawn culinary line-art illustrations (smiling pierogi/varenyky characters, borscht tureen, garlic, herbs) and Ukrainian vyshyvanka geometric borders.
  - Official Smakota logo (blue ribbon with yellow smiling pierogi characters and steam lines).

## Evidence on Hand

- Physical printed menu photos (2 pages): `img/WhatsApp Image 2026-11-21 at 9.13.10 a.m..jpeg`, `(1).jpeg`, `(2).jpeg`, `(3).jpeg`.
- Official logo & review table tent cards: `img/WhatsApp Image 2026-11-21 at 9.30.05 a.m..jpeg`, `9.30.29 a.m..jpeg`.
- 21 branded dish photographs in `img/` (`20260712*.jpg` and `Gemini_Generated_Image_*.jpg`).
- Technical Specification (`smakota_technical_specification.pdf`) and client call transcript (`Griffith College 4 (1).pdf`).
- Verified NAP data: `ul. Stanisława Wojciechowskiego 33 / lok. 40 (44), 02-495 Warszawa (Ursus)`, phone `+48 576 113 316`, Instagram `@smakotawarszawa`, hours `Pon–Czw 11:00–20:00, Pt–Ndz 10:00–20:30`.

## Product Principles

1. **Menu & Direct Call First:** The visitor sees real food, prices in PLN, branch status, and a working `tel:+48576113316` button immediately without hunting through decorative chrome.
2. **Physical Menu Heritage in Digital Form:** Every block, heading stamp, rolling-pin badge, and dish card feels unmistakably crafted from Smakota's printed menu and photo cards.
3. **Zero Fabricated Business Rules:** Distinguish confirmed printed-menu facts from online-aggregator prices and open pre-production questions clearly in both the UI and documentation.
4. **Bilingual Parity (PL & UA):** Full, natural Polish and Ukrainian culinary terminology with stateful switching that never drops the visitor's cart or branch context.

## Accessibility & Inclusion

WCAG 2.2 AA target: semantic HTML landmarks, keyboard-navigable tabs and modals, visible focus rings, >= 4.5:1 text contrast on warm parchment and burgundy surfaces, and localized form validation messages.

