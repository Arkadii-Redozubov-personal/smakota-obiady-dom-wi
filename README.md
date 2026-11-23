# Smakota · Obiady Domowe (Warszawa)

Многостраничный и многофилиальный двуязычный (`Polski` / `Українська`) веб-сайт меню и онлайн-заказа украинской и домашней кухни **Smakota — Obiady Domowe** в Варшаве (`ul. Stanisława Wojciechowskiego 33, 02-495 Warszawa — Ursus`).

## Карта страниц сайта

1. **[index.html](file:///Users/arkady/Documents/smakota-obiady-dom-wi/index.html) (Главная / Strona główna)** — Hero-блок с фирменной скалкой `SMAKOTA menu` и штампом ланча `33 zł`, быстрый выбор филиала и способа получения, 6 избранных хитов меню с фотографиями, тизер ланча дня и карточки перехода к разделам сайта.
2. **[menu.html](file:///Users/arkady/Documents/smakota-obiady-dom-wi/menu.html) (Меню и Ланч 33 zł / Menu i Lunch)** — Полный интерактивный каталог из **53 позиций в 11 категориях**, поиск на польском и украинском языках, переключение режимов («Все блюда / Карточки с фото (21) / Вид печатного листа меню»), лайтбокс с оригиналами фотографий бумажного меню и пошаговый конструктор **Lunch Dnia за 33 zł**.
3. **[about.html](file:///Users/arkady/Documents/smakota-obiady-dom-wi/about.html) (О нас, Для строек и Отзывы / O nas, Dla budów i Opinie)** — История и принципы кухни Smakota (приготовление строго после заказа без разогрева, натуральные ингредиенты, ручная лепка), калькулятор групповых заказов **«Обеды для строек и бригад (10–15+ порций)»**, отзывы гостей и настольная QR-карточка отзывов.
4. **[locations.html](file:///Users/arkady/Documents/smakota-obiady-dom-wi/locations.html) (Филиалы и Доставка / Lokale i Dostawa)** — Карточки точек сети (`Smakota Ursus`, `Smakota Lokal #2 — Wkrótce`, резерв расширения на 3–5 филиалов), правила самовывоза и доставки собственным курьером, интерактивная проверка зоны доставки по почтовому индексу/району Варшавы.
5. **[contact.html](file:///Users/arkady/Documents/smakota-obiady-dom-wi/contact.html) (Контакты / Kontakt)** — Прямой телефон для заказов (`+48 576 113 316`), адрес, график работы, ссылки на Instagram (`@smakotawarszawa`), Facebook и Google Maps, а также форма заявки на групповой заказ или обратный звонок.

## Единое состояние между страницами (`localStorage`)

- Переключение языка **PL ↔ UA**, выбранный филиал, способ получения (`Odbiór osobisty` / `Dostawa kurierem`), содержимое корзины (`Koszyk`) и изменения в **DEMO Admin-панели** автоматически сохраняются при переходе между всеми 5 страницами.

## Запуск локально

```bash
python3 -m http.server 4173
```

После запуска сайт доступен по адресу `http://localhost:4173`.
