// ==========================================================================
// SMAKOTA — OBIADY DOMOWE (WARSZAWA)
// Multi-Page Storefront Engine with Persistent State (localStorage)
// Pages: index.html (Home), menu.html (Menu & Lunch 33 zł),
//        about.html (O nas, Dla budów & Opinie),
//        locations.html (Lokale i Dostawa), contact.html (Kontakt)
// ==========================================================================

(function () {
  "use strict";

  const DATA = window.SMAKOTA_DATA;
  const STORAGE_KEY = "smakota_multipagestate_v1";

  const I18N = {
    pl: {
      brandSubtitle: "OBIADY DOMOWE",
      navHome: "Strona główna",
      navMenu: "Menu",
      navAbout: "O nas",
      navLocations: "Lokale i Dostawa",
      navContact: "Kontakt",
      btnOriginalMenu: "Karta menu (Foto)",
      btnAuditTz: "Audyt ТЗ (6)",
      btnAdminDemo: "Panel Admin (DEMO)",
      cartBtnLabel: "Koszyk",
      stampLunchTop: "Lunch dnia:",
      stampLunchItems: "zupa + danie mięsne + dodatek + surówka",
      heroHeadline: "Prawdziwa ukraińska i domowa kuchnia w Warszawie, gotowana na świeżo po Twoim zamówieniu",
      heroLead: "Ręcznie lepione pierogi, pielmieni, soczyste chinkali, złociste czebureki, gęsty barszcz ukraiński oraz domowe kotlety. Nie odgrzewamy gotowych dań i nie zagłuszamy smaku sztucznymi przyprawami. Wchodzisz, zamawiasz lub dzwonisz do lokalu, a my od razu bierzemy się do gotowania.",
      pillar1Title: "Gotujemy po zamówieniu",
      pillar1Desc: "Zero wcześniejszego gotowania i odgrzewania: każde danie powstaje na świeżo.",
      pillar2Title: "100% naturalny skład",
      pillar2Desc: "Domowe receptury i świeże produkty, bez nadmiaru sztucznych mieszanek przypraw.",
      pillar3Title: "Własny kurier i budowy",
      pillar3Desc: "Odbiór osobisty w lokalu, dowóz naszym kurierem oraz pakiety 10–15+ obiadów na budowy.",
      heroBtnMenu: "Otwórz pełne menu (53 dania)",
      heroBtnCall: "Zadzwoń do lokalu: +48 576 113 316",
      heroBtnLunch: "Skomponuj Lunch za 33 zł",
      fulfillmentPickup: "Odbiór osobisty",
      fulfillmentDelivery: "Dostawa kurierem",
      heroFeatSub: "Gęsty barszcz ukraiński ze śmietaną i fasolą",
      heroFeatMeta: "Z karty menu lokalu · Gotowany na świeżo · 20,00 zł",
      btnAdd20: "Dodaj · 20 zł",
      miniPierogi: "Ukraińskie Pierogi",
      miniCzebureki: "Czebureki (M / XL)",

      // Home Page (First Screen + Restored Sections)
      p4HeroLine1: "Prawdziwa ukraińska",
      p4HeroLine2: "domowa kuchnia",
      p4HeroLine3: "w Warszawie",
      p4HeroLead: "Gotujemy dla Was ulubione ukraińskie dania ze świeżych składników, jak w domu: smacznie, szczerze i z troską. Zamawiaj online, a my przygotujemy i dostarczymy.",
      p4BtnOrder: "Zamów dania",
      p4BtnMenu: "Zobacz menu i Lunch 33 zł",
      p4PopularTitle: "Popularne dania",
      p4Card1Title: "Ukraińskie pierogi",
      p4Card2Title: "Czebureki (M / XL)",
      p4Card3Title: "Pielmieni domowe",
      p4Card3Price: "30 zł",
      p4LunchKicker: "LUNCH DNIA",
      p4LunchHeading: "Zupa + danie mięsne + dodatek + surówka",
      homeWhyHeading: "Dlaczego Smakota",
      homeWhyMoreLink: "Poznaj naszą kuchnię",
      homeWhy1Title: "Gotujemy na świeżo po zamówieniu",
      homeWhy1Desc: "Nie przygotowujemy dań wcześniej i niczego nie odgrzewamy: smażymy i gotujemy dopiero po Twoim zamówieniu.",
      homeWhy2Title: "100% naturalne składniki",
      homeWhy2Desc: "Świeże mięso, prawdziwy twaróg, gęsta śmietana i koperek, bez zagłuszania smaku sztucznymi przyprawami.",
      homeWhy3Title: "Ręcznie lepione na miejscu",
      homeWhy3Desc: "Pierogi, pielmieni, chinkali z bulionem i złociste czebureki lepimy własnoręcznie według domowych receptur.",
      homeWhy4Title: "Własny kurier i odbiór osobisty",
      homeWhy4Desc: "Odbierz gorący obiad w lokalu na Ursusie albo zamów dowóz naszym kurierem prosto pod drzwi lub na budowę.",
      homeCatsHeading: "Kategorie menu",
      homeCatsAllLink: "Pełne menu (53 dania)",
      homeCat1Title: "Zupy domowe",
      homeCat1Price: "od 15 zł",
      homeCat1Desc: "Barszcz ukraiński ze śmietaną i fasolą, rosół z makaronem, pomidorowa i zupy sezonowe.",
      homeCat2Title: "Pierogi ręcznie lepione",
      homeCat2Price: "od 22 zł",
      homeCat2Desc: "Z ziemniakami i cebulką, z mięsem, z twarogiem na słono lub słodko oraz z wiśniami.",
      homeCat3Title: "Pielmieni domowe",
      homeCat3Price: "od 30 zł",
      homeCat3Desc: "Soczyste pielmieni wieprzowe, wieprzowo-wołowe lub drobiowe oraz duże talerze 1000 g.",
      homeCat4Title: "Czebureki M / XL",
      homeCat4Price: "od 15 zł",
      homeCat4Desc: "Smażone na świeżo po zamówieniu: z mięsem, z kurczakiem i z serem. Chrupiące i gorące.",
      homeCat5Title: "Chinkali z bulionem",
      homeCat5Price: "od 10 zł",
      homeCat5Desc: "Ręcznie zawijane sakiewki z aromatycznym bulionem: z wieprzowiną lub serem i szpinakiem.",
      homeCat6Title: "Dania mięsne i naleśniki",
      homeCat6Price: "od 18 zł",
      homeCat6Desc: "Kotlety schabowe, De Volaille, gołąbki, żeberka pieczone, placki ziemniaczane i krokiety.",
      homeB2bTitle: "Obiady dla budów, ekip i firm: 10, 15 i więcej porcji",
      homeB2bDesc: "Przygotowujemy gorące zestawy Lunch Dnia (33 zł: zupa, danie mięsne, dodatek, surówka) na ustaloną godzinę. Pakujemy w termoopakowania i dowozimy własnym kurierem na budowę lub do biura w Warszawie.",
      homeB2bCallBtn: "Zadzwoń: +48 576 113 316",
      homeB2bCalcBtn: "Kalkulator pakietu dla ekipy",
      homeReviewsHeading: "Opinie gości i nasze profile",
      homeFaqHeading: "Najczęstsze pytania (FAQ)",
      faq1Q: "Czy dania są gotowane na świeżo po zamówieniu?",
      faq1A: "Tak. Nie gotujemy potraw z wyprzedzeniem i ich nie odgrzewamy. Czebureki, kotlety, pielmieni i pierogi trafiają do przygotowania dopiero po przyjęciu Twojego zamówienia.",
      faq2Q: "Co wchodzi w skład zestawu Lunch Dnia za 33 zł?",
      faq2A: "Lunch Dnia za 33 zł to pełny 4-daniowy obiad: zupa (np. barszcz ukraiński lub rosół), danie mięsne (kotlet, gołąbki lub żeberka), dodatek (ziemniaki, frytki, makaron lub ryż) oraz domowa surówka.",
      faq3Q: "Jak działa odbiór osobisty i dostawa własnym kurierem?",
      faq3A: "Zamówienie możesz odebrać bezpłatnie w lokalu w Ursusie (ul. Wojciechowskiego 33) lub zamówić dowóz własnym kurierem Smakota. Działamy również na Pyszne.pl, Glovo, Uber Eats i Wolt.",
      faq4Q: "Czy przyjmujecie większe zamówienia na budowy i dla grup 10–15+ osób?",
      faq4A: "Tak, regularnie dostarczamy gorące obiady dla brygad budowlanych i zespołów w Warszawie. Zadzwoń pod +48 576 113 316 lub skorzystaj z kalkulatora na stronie O nas i Dla budów.",
      faq5Q: "Gdzie znajduje się lokal główny i kiedy ruszy drugi punkt?",
      faq5A: "Nasz czynny lokal działa w Warszawie na Ursusie przy ul. Stanisława Wojciechowskiego 33 / lok. 40 (w Google Maps oznaczony jako lok. 44). Drugi lokal (Mokotów / nowy punkt) jest w przygotowaniu do otwarcia.",
      faq6Q: "Jakimi metodami mogę zapłacić za zamówienie?",
      faq6A: "W lokalu i u kuriera akceptujemy gotówkę oraz kartę płatniczą. W trybie demonstracyjnym koszyka możesz również przetestować wybór płatności BLIK / online przed pełnym wdrożeniem produkcyjnym.",
      homeContactHeading: "Kontakt i jak nas znaleźć",
      homeContactFullLink: "Pełna strona Kontakt",
      homeBranchBadgeActive: "Aktywny · Przyjmuje zamówienia",
      homeAddressValue: "ul. Stanisława Wojciechowskiego 33 / lok. 40 (w Google Maps: lok. 44), 02-495 Warszawa",
      homeHoursValue: "Pon–Czw: 11:00–20:00 · Pt–Ndz: 10:00–20:30",
      homeBranch2Title: "Smakota Lokal #2 (Otwarcie wkrótce):",
      homeBranch2Note: "Drugi punkt w Warszawie w trakcie konfiguracji przed otwarciem.",
      homeLocationsBtn: "Sprawdź lokale i strefy dostawy",
      homeQuickFormTitle: "Szybki kontakt i zamówienia na budowę",
      homeQuickFormSub: "Zostaw numer telefonu oraz liczbę porcji lub pytanie, a oddzwonimy z kuchni.",
      homeQuickNamePlaceholder: "Np. Marek / Ekipa Ursus",
      homeQuickMsgPlaceholder: "Np. 12 obiadów Lunch Dnia na godz. 13:00 lub pytanie o dostawę",
      homeQuickSubmitBtn: "Zamów oddzwonienie z lokalu (DEMO)",

      // Menu Page (Photo 1 Editorial Design)
      menuHeroEyebrow: "NASZE MENU",
      menuHeroLine1: "Tradycyjna",
      menuHeroLine2: "kuchnia ukraińska",
      menuHeroLead: "Domowe dania przygotowywane ze świeżych i naturalnych składników.",
      menuSeeAllLink: "Zobacz całe menu",
      menuTabAll: "Wszystkie dania",
      menuTabSoups: "Zupy",
      menuTabDumplings: "Pierogi i pielmieni",
      menuTabMains: "Drugie dania",
      menuTabSalads: "Sałatki",
      menuTabDesserts: "Deserty",
      menuTabDrinks: "Napoje",
      menuLunchJump: "Lunch Dnia 33 zł",
      menuSubAll: "Wszystkie w dziale",
      menuPageTitle: "Pełna Karta Menu i Lunch Dnia 33 zł",
      menuPageLead: "Wszystkie 53 pozycje w 11 kategoriach z oficjalnej karty lokalu Smakota oraz 21 kart fotograficznych dań. Wybierz dania do koszyka lub zadzwoń bezpośrednio do kuchni.",
      lunchBuilderTitle: "Zestaw Lunch Dnia: Zupa + Danie mięsne + Dodatek + Surówka",
      lunchBuilderSub: "Oferta specjalna z górnego stempla naszej karty menu. Wybierz po jednym składniku z każdej z 4 kolumn i zamów pełny, gorący domowy obiad za 33 zł.",
      lunchPriceCaption: "PEŁNY ZESTAW 4 DAŃ",
      lunchStep1: "1. Wybierz zupę",
      lunchStep2: "2. Wybierz danie mięsne",
      lunchStep3: "3. Wybierz dodatek obiadowy",
      lunchStep4: "4. Wybierz surówkę",
      btnAddLunchCombo: "Dodaj skomponowany Lunch do koszyka · 33,00 zł",
      menuMainHeading: "SMAKOTA MENU · KARTA DAŃ",
      menuMainLead: "Wszystkie pozycje i ceny w złotych (PLN) przeniesione bezpośrednio z oficjalnej karty menu lokalu przy ul. S. Wojciechowskiego 33 oraz 21 kart fotograficznych dań.",
      btnSeePaperScans: "Zobacz zdjęcia papierowej karty menu",
      searchPlaceholder: "Szukaj dania (barszcz, pierogi, czeburek...)",
      filterAllDishes: "Wszystkie dania (53)",
      filterPhotoOnly: "Karty ze zdjęciem (21)",
      filterPaperSheet: "Widok arkusza menu",
      catAll: "WSZYSTKIE KATEGORIE",
      sourceConfirmed: "Karta menu lokalu",
      sourceOnline: "Foto + cena online (do potw.)",
      sourcePending: "Foto · Cena do potwierdzenia",
      btnAddToCart: "Dodaj do koszyka",
      btnUnavailable: "Chwilowo niedostępne",
      btnCallForPrice: "Zadzwoń o dostępność i cenę",

      // About Page
      aboutHeroEyebrow: "O NAS I DLA BUDÓW",
      aboutHeroLine1: "O naszej kuchni",
      aboutHeroLine2: "i obiadach dla ekip",
      aboutPageTitle: "O naszej kuchni, Obiady dla budów i Opinie gości",
      aboutPageLead: "Poznaj zasady, którymi kierujemy się każdego dnia w Smakocie: naturalne składniki, ręczne lepienie i gotowanie wyłącznie po złożeniu zamówienia.",
      aboutStoryHeading: "DLACZEGO SMAKOTA SMAKUJE JAK W DOMU",
      aboutStoryTitle: "Nie uznajemy półśrodków, sztucznych posypek ani wcześniejszego odgrzewania",
      aboutStoryP1: "W Smakocie wierzymy, że prawdziwy domowy obiad zaczyna się w chwili, gdy gość składa zamówienie. W przeciwieństwie do masowych punktów gastronomicznych nie przygotowujemy stosów jedzenia rano, by potem je odgrzewać, i nie maskujemy jakości mięsa czy warzyw agresywnymi mieszankami sztucznych przypraw.",
      aboutStoryP2: "Naszą dumą jest połączenie ukraińskiej gościnności z ulubionymi smakami polskich i ukraińskich gości w Warszawie. Większość naszych stałych klientów to Polacy, którzy pokochali nasze złociste czebureki, ręcznie zawijane chinkali z gorącym bulionem, domowe pielmieni, pierogi oraz gęsty barszcz ukraiński.",
      val1Title: "Świeżość po zamówieniu",
      val1Desc: "Przychodzisz lub dzwonisz do lokalu, składasz zamówienie i dopiero wtedy kucharz staje do pracy. Czebureki i kotlety trafiają na patelnię na świeżo.",
      val2Title: "100% naturalne produkty",
      val2Desc: "Świeże mięso wieprzowe i drobiowe, naturalny twaróg, prawdziwa śmietana, czosnek i świeży koperek. Bez zbędnej chemii gastronomicznej.",
      val3Title: "Ręcznie lepione ciasto",
      val3Desc: "Pierogi, pielmieni i chinkali lepimy ręcznie na miejscu, dbając o cienkie, sprężyste ciasto i obfite, soczyste nadzienie.",
      val4Title: "Przystępne ceny na co dzień",
      val4Desc: "Pracujemy w segmencie dostępnym dla każdego: pełny 4-daniowy Lunch Dnia kosztuje 33 zł, zupy od 15 zł, a sycące pierogi 22 zł.",

      // B2B Section
      b2bTitle: "Gorące obiady dla budów, ekip i firm: pakiety po 10, 15 i więcej porcji",
      b2bLead: "Obsługujemy zamówienia grupowe dla obiektów budowlanych i brygad w Warszawie. Przygotowujemy wszystko na świeżo na ustaloną godzinę, pakujemy w szczelne opakowania termoizolacyjne i dowozimy własnym kurierem prosto na budowę lub do biura.",
      b2bPerk1: "Sycące domowe zestawy (Zupa + Drugie danie mięsne + Dodatek + Surówka) w cenie 33 zł / porcja.",
      b2bPerk2: "Duże talerze pielmieni (1000 g: 153 zł) oraz zestawy degustacyjne czebureków „Pychota” (99 zł).",
      b2bPerk3: "Bezpośredni kontakt telefoniczny z lokalem lub szybkie zamówienie pakietu jednym kliknięciem.",
      b2bCallBtn: "Zadzwoń i zamów na budowę: +48 576 113 316",
      b2bCalcTitle: "Kalkulator pakietu obiadów dla ekipy",
      b2bCalcSub: "Wybierz liczbę zestawów obiadowych Lunch Dnia (33 zł / osoba), aby dodać pakiet grupowy do koszyka:",
      b2bCalcNote: "Zupa + Danie mięsne + Dodatek + Surówka dla każdej osoby",
      b2bAddBtn: "Dodaj pakiet grupowy do koszyka",

      // Locations Page
      locationsPageTitle: "Nasze Lokale, Odbiór Osobisty i Dostawa Własnym Kurierem",
      locationsPageLead: "Sprawdź adresy, godziny otwarcia i status naszych punktów w Warszawie. System obsługuje aktualny lokal na Ursusie, otwierany drugi punkt oraz dalszy rozwój sieci do 3–5 filii.",
      l1HeroEyebrow: "LOKALE I DOSTAWA",
      l1HeroLine1: "Lokale i dostawa",
      l1HeroLine2: "w Warszawie",
      l1HeroLead: "Odbiór osobisty w Ursusie oraz dostawa własnym kurierem na terenie Warszawy.",
      locationsHeading: "PUNKTY SMAKOTA W WARSZAWIE",
      locationsLead: "Wybierz punkt Smakota, aby zamówić odbiór osobisty, zadzwonić bezpośrednio do kuchni lub sprawdzić dostawę naszym własnym kurierem.",
      l1Heading: "Nasze lokale",
      l1MapGmapsBtn: "Ursus w Google Maps ↗",
      l1DeliveryHeading: "Dostawa",
      l1DeliveryLead: "Zamawiaj ulubione domowe obiady z odbiorem osobistym w Ursusie lub dostawą naszym własnym kurierem. Gotujemy na świeżo po zamówieniu — dowozimy do domu, biura oraz na budowy (10–15+ porcji).",
      l1FeatZonesTitle: "Strefy dostawy",
      l1FeatZonesDesc: "Ursus, Włochy, Bemowo, Ochota i zamówienia grupowe",
      l1FeatHoursTitle: "Godziny pracy",
      l1FeatHoursLine1: "Pon–Czw: 11:00–20:00",
      l1FeatHoursLine2: "Pt–Ndz: 10:00–20:30",
      l1FeatTermsTitle: "Warunki",
      l1FeatTermsLine1: "Odbiór w lokalu: 0 zł",
      l1FeatTermsLine2: "Własny kurier · Pyszne, Glovo, Wolt",
      l1OrderBtn: "Zamów dostawę",
      zoneCheckerTitle: "Sprawdź dostępność dostawy własnym kurierem (DEMO)",
      zoneCheckerSub: "Wpisz kod pocztowy lub dzielnicę Warszawy (np. 02-495, Ursus, Włochy, Bemowo). Dokładne strefy i cennik dostawy zostaną zatwierdzone przez właściciela przed startem produkcyjnym.",
      zoneInputPh: "Np. 02-495, Ursus, Włochy, Bemowo...",
      zoneCheckBtnLabel: "Sprawdź strefę",
      deliveryRulesHeading: "SPOSOBY ODBIORU ZAMÓWIENIA",
      rulePickupTitle: "1. Odbiór osobisty w lokalu (0 zł)",
      rulePickupDesc: "Zadzwoń pod numer +48 576 113 316 lub złóż zamówienie na stronie. Przygotujemy gorące dania dokładnie na Twój przyjazd do lokalu przy ul. S. Wojciechowskiego 33.",
      ruleCourierTitle: "2. Dostawa własnym kurierem Smakota",
      ruleCourierDesc: "Posiadamy własnego kuriera, który odbiera świeżo ugotowany obiad prosto z naszej kuchni i dowozi pod wskazany adres lub na teren budowy.",
      rulePlatformsTitle: "3. Platformy partnerskie",
      rulePlatformsDesc: "Jesteśmy obecni także w serwisach Pyszne.pl, Glovo, Uber Eats oraz Wolt, jednak bezpośredni telefon do lokalu to najszybszy kontakt z naszą kuchnią.",

      // Mobile Navigation Drawer
      mobileNavTitle: "Menu",
      mobileNavLangLabel: "Język",
      mobileNavHoursLabel: "Pon–Czw 11:00–20:00 · Pt–Ndz 10:00–20:30",
      mobileNavCallCta: "Zadzwoń teraz",
      mobileNavPrintedMenu: "Drukowane menu",
      mobileNavRoute: "Trasa",

      // Contact Page (1:1 Editorial + Real Data)
      c1HeroEyebrow: "KONTAKT Z LOKALEM",
      c1HeroLine1: "Skontaktuj się",
      c1HeroLine2: "ze Smakotą",
      c1HeroLead: "Zamówienia telefoniczne, pytania o menu oraz obiady grupowe na budowy i do firm.",
      contactPageTitle: "Kontakt z Lokalem, Zamówienia Telefoniczne i Mapa",
      contactPageLead: "Masz pytanie o menu, chcesz zamówić gorący obiad z odbiorem osobistym, dostawę kurierem lub ustalić regularne posiłki dla ekipy budowlanej? Skontaktuj się z nami bezpośrednio.",
      c1Heading: "Nasze kontakty",
      c1PhoneLabel: "Telefon",
      c1DirectLabel: "Instagram Direct",
      c1AddressLabel: "Adres (Ursus)",
      c1AddressLine1: "ul. S. Wojciechowskiego 33 / lok. 40 (44)",
      c1AddressLine2: "02-495 Warszawa",
      c1HoursLabel: "Godziny otwarcia",
      c1HoursLine1: "Pon – Czw: 11:00 – 20:00",
      c1HoursLine2: "Pt – Ndz: 10:00 – 20:30",
      c1SocialTitle: "Jesteśmy w mediach społecznościowych",
      c1MapBtn: "Pokaż na Google Maps ↗",
      c1FormHeading: "Napisz do nas",
      c1FormSub: "Masz pytania, zamówienie grupowe na budowę lub propozycję? Zostaw wiadomość, odpowiemy najszybciej jak to możliwe.",
      c1NamePh: "Imię *",
      c1PhonePh: "Numer telefonu *",
      c1TopicDefault: "Temat wiadomości",
      c1MsgPh: "Twoja wiadomość *",
      c1SubmitBtn: "Wyślij wiadomość (DEMO)",
      c1BannerTitle: "Zamów ulubione dania już dziś",
      c1BannerDesc: "Domowe obiady, pierogi, pielmieni, czebureki i chinkali z dostawą kurierem po Warszawie lub odbiorem osobistym.",
      c1BannerBtn: "Przejdź do menu →",
      contactInfoHeading: "BEZPOŚREDNI KONTAKT Z LOKALEM",
      contactPhoneLabel: "Telefon do zamówień (Lokal Ursus):",
      contactAddressLabel: "Adres lokalu:",
      contactHoursLabel: "Godziny otwarcia:",
      contactFormHeading: "NAPISZ DO NAS LUB ZAMÓW KONTAKT DLA FIRMY / BUDOWY",
      contactFormSub: "Zostaw numer telefonu i krótką wiadomość (np. liczba obiadów na budowę lub pytanie o dostawę), a oddzwonimy z lokalu.",
      contactNameLabel: "Twoje imię lub nazwa firmy *",
      contactPhoneInputLabel: "Numer telefonu *",
      contactTopicLabel: "Temat wiadomości",
      contactTopic1: "Zamówienie grupowe / Obiady na budowę (10–15+ porcji)",
      contactTopic2: "Pytanie o menu i dostępność dań",
      contactTopic3: "Dostawa własnym kurierem",
      contactTopic4: "Opinia lub współpraca",
      contactMsgLabel: "Wiadomość lub szczegóły zamówienia",
      contactSubmitBtn: "Wyślij wiadomość do lokalu (DEMO)",

      // Reviews & Footer
      reviewsHeading: "OPINIE GOŚCI I NASZE PROFILE",
      reviewsLead: "Dziękujemy za zaufanie polskich i ukraińskich gości w Warszawie. Zobacz opinie o naszych domowych obiadach lub zostaw własną recenzję w Google Maps i na Facebooku.",
      tentHeading: "Najedzony i zadowolony?",
      tentBody: "Będzie nam super miło, jeśli poświęcisz 30 sekund i napiszesz kilka słów.",
      tentItalic: "Dla Ciebie to chwila, dla nas ogromne wsparcie!",
      btnGoogleMapsReview: "Google Maps · Opinie",
      footerAbout: "Autentyczna kuchnia ukraińska i domowe obiady w Warszawie. Gotujemy na świeżo po złożeniu zamówienia z naturalnych składników. Odbiór osobisty oraz dostawa własnym kurierem.",
      footerNavTitle: "Strony serwisu",
      footerSocialTitle: "Social Media & System",
      mobileCallBtn: "Zadzwoń",
      cartDrawerTitle: "Twój koszyk",
      coPageTitle: "Finalizacja zamówienia",
      printedModalTitle: "Oryginalna karta menu i materiały lokalu Smakota",
      printedModalSub: "Poniżej znajdują się oryginalne zdjęcia fizycznej karty menu oraz kart stolikowych przekazane przez właściciela:",
      auditModalTitle: "Audyt ТЗ, Transkrypcji i Materiałów (Rozbieżności i Otwarte Pytania)",
      adminModalTitle: "Panel Administracyjny Smakota (Tryb DEMO · Sekcja 11 ТЗ)"
    },
    uk: {
      brandSubtitle: "ДОМАШНІ ОБІДИ",
      navHome: "Головна",
      navMenu: "Меню",
      navAbout: "Про нас",
      navLocations: "Локали і Доставка",
      navContact: "Контакти",
      btnOriginalMenu: "Друковане меню (Фото)",
      btnAuditTz: "Аудит ТЗ (6)",
      btnAdminDemo: "Панель Admin (DEMO)",
      cartBtnLabel: "Кошик",
      stampLunchTop: "Ланч дня:",
      stampLunchItems: "перше + м'ясна страва + гарнір + салат",
      heroHeadline: "Справжня українська та домашня кухня у Варшаві, готуємо свіже одразу після вашого замовлення",
      heroLead: "Вареники та пельмені ручної ліпки, соковиті хінкалі, золотисті чебуреки, густий український борщ і домашні котлети. Ми не готуємо заздалегідь і не розігріваємо: ви дзвоните в локал або замовляєте на сайті, і кухар одразу починає готувати.",
      pillar1Title: "Готуємо після замовлення",
      pillar1Desc: "Жодних заготовок та розігрівання: кожна страва готується свіжою.",
      pillar2Title: "100% натуральні продукти",
      pillar2Desc: "Домашні рецепти та свіжі інгредієнти без зайвих штучних приправ.",
      pillar3Title: "Власний кур'єр та будови",
      pillar3Desc: "Самовивіз у локалі, доставка нашим кур'єром та партії по 10–15+ обідів на будівництва.",
      heroBtnMenu: "Відкрити повне меню (53 страви)",
      heroBtnCall: "Подзвонити в локал: +48 576 113 316",
      heroBtnLunch: "Зібрати Ланч за 33 zł",
      fulfillmentPickup: "Самовивіз",
      fulfillmentDelivery: "Доставка кур'єром",
      heroFeatSub: "Густий український борщ зі сметаною та квасолею",
      heroFeatMeta: "З друкованого меню локалу · Свіжоприготований · 20,00 zł",
      btnAdd20: "Додати · 20 zł",
      miniPierogi: "Українські вареники",
      miniCzebureki: "Чебуреки (M / XL)",

      // Home Page (First Screen + Restored Sections)
      p4HeroLine1: "Справжня українська",
      p4HeroLine2: "домашня кухня",
      p4HeroLine3: "у Варшаві",
      p4HeroLead: "Готуємо для вас улюблені українські страви зі свіжих інгредієнтів, як вдома: смачно, щиро й з турботою. Замовляйте онлайн, а ми приготуємо та доставимо.",
      p4BtnOrder: "Замовити страви",
      p4BtnMenu: "Меню та Ланч за 33 zł",
      p4PopularTitle: "Популярні страви",
      p4Card1Title: "Українські вареники",
      p4Card2Title: "Чебуреки (M / XL)",
      p4Card3Title: "Пельмені домашні",
      p4Card3Price: "30 zł",
      p4LunchKicker: "ЛАНЧ ДНЯ",
      p4LunchHeading: "Перше + м’ясна страва + гарнір + салат",
      homeWhyHeading: "Чому обирають Smakota",
      homeWhyMoreLink: "Більше про нашу кухню",
      homeWhy1Title: "Готуємо свіже після замовлення",
      homeWhy1Desc: "Не робимо страви заздалегідь і не розігріваємо: смажимо та варимо тільки після вашого замовлення.",
      homeWhy2Title: "100% натуральні продукти",
      homeWhy2Desc: "Свіже м'ясо, натуральний домашній сир, густа сметана та кріп, без зайвих штучних приправ.",
      homeWhy3Title: "Ліпимо вручну на місці",
      homeWhy3Desc: "Вареники, пельмені, хінкалі з бульйоном та хрусткі чебуреки ліпимо власноруч за домашніми рецептами.",
      homeWhy4Title: "Власний кур'єр та самовивіз",
      homeWhy4Desc: "Забирайте гарячий обід у локалі на Урсусі або замовляйте доставку нашим кур'єром додому чи на будову.",
      homeCatsHeading: "Категорії меню",
      homeCatsAllLink: "Усе меню (53 страви)",
      homeCat1Title: "Домашні перші страви",
      homeCat1Price: "від 15 zł",
      homeCat1Desc: "Український борщ зі сметаною та квасолею, курячий бульйон з локшиною, томатний та сезонні супи.",
      homeCat2Title: "Вареники ручної ліпки",
      homeCat2Price: "від 22 zł",
      homeCat2Desc: "З картоплею та смаженою цибулькою, з м'ясом, із солоним чи солодким сиром та з вишнями.",
      homeCat3Title: "Пельмені домашні",
      homeCat3Price: "від 30 zł",
      homeCat3Desc: "Соковиті пельмені зі свинини, асорті або курячі, а також великі порції 1000 г на компанію.",
      homeCat4Title: "Чебуреки M / XL",
      homeCat4Price: "від 15 zł",
      homeCat4Desc: "Смажимо гарячими одразу після замовлення: зі свининою, з куркою або з сиром.",
      homeCat5Title: "Хінкалі з бульйоном",
      homeCat5Price: "від 10 zł",
      homeCat5Desc: "Ароматні мішечки ручної ліпки зі соковитим бульйоном: зі свининою або з сиром та шпинатом.",
      homeCat6Title: "М'ясні страви та млинці",
      homeCat6Price: "від 18 zł",
      homeCat6Desc: "Домашні котлети, Де-Воляй, голубці, запечені реберця, деруни, крокети та солодкі млинці.",
      homeB2bTitle: "Гарячі обіди для будов, бригад і фірм: 10, 15+ порцій",
      homeB2bDesc: "Готуємо ситні набори Ланч Дня (33 zł: перше, м'ясна страва, гарнір, салат) точно на обрану годину. Пакуємо у термоупаковку та доставляємо власним кур'єром на будову або в офіс.",
      homeB2bCallBtn: "Подзвонити: +48 576 113 316",
      homeB2bCalcBtn: "Калькулятор для бригади",
      homeReviewsHeading: "Відгуки гостей та наші профілі",
      homeFaqHeading: "Часті запитання (FAQ)",
      faq1Q: "Чи готуються страви свіжими після замовлення?",
      faq1A: "Так. Ми не готуємо страви наперед і не розігріваємо вчорашнє. Чебуреки, котлети, пельмені та вареники починаємо готувати щойно отримуємо ваше замовлення.",
      faq2Q: "Що входить у комплексний Ланч Дня за 33 zł?",
      faq2A: "Ланч Дня за 33 zł — це ситний обід із 4 страв: суп (наприклад, український борщ чи бульйон), м'ясна страва (котлета, голубці або реберця), гарнір та домашній салат.",
      faq3Q: "Як працює самовивіз і доставка власним кур'єром?",
      faq3A: "Ви можете безкоштовно забрати замовлення в локалі на Урсусі (ul. Wojciechowskiego 33) або замовити доставку кур'єром Smakota. Також працюємо на Pyszne.pl, Glovo, Uber Eats і Wolt.",
      faq4Q: "Чи приймаєте великі замовлення на будівництва для 10–15+ осіб?",
      faq4A: "Так, регулярно готуємо та доставляємо гарячі обіди для будівельних бригад і фірм у Варшаві. Телефонуйте на +48 576 113 316 або розрахуйте пакет у розділі Про нас і Будови.",
      faq5Q: "Де знаходиться головний локал і коли відкриється друга точка?",
      faq5A: "Наш активний заклад працює у Варшаві в районі Урсус: ul. Stanisława Wojciechowskiego 33 / lok. 40 (у Google Maps позначений як lok. 44). Другий локал готується до відкриття.",
      faq6Q: "Якими способами можна оплатити замовлення?",
      faq6A: "У локалі та кур'єру приймаємо готівку й банківську картку. У демо-кошику також доступний попередній вибір оплати BLIK / онлайн до production-запуску.",
      homeContactHeading: "Контакти та як нас знайти",
      homeContactFullLink: "Усі контакти",
      homeBranchBadgeActive: "Активний · Приймає замовлення",
      homeAddressValue: "ul. Stanisława Wojciechowskiego 33 / lok. 40 (у Google Maps: lok. 44), 02-495 Warszawa",
      homeHoursValue: "Пн–Чт: 11:00–20:00 · Пт–Нд: 10:00–20:30",
      homeBranch2Title: "Smakota Локал №2 (Скоро відкриття):",
      homeBranch2Note: "Друга точка у Варшаві на етапі підготовки перед запуском.",
      homeLocationsBtn: "Перевірити локали і доставку",
      homeQuickFormTitle: "Швидкий зв'язок та замовлення на будову",
      homeQuickFormSub: "Залиште номер телефону та кількість обідів або запитання, і ми передзвонимо з локалу.",
      homeQuickNamePlaceholder: "Напр. Андрій / Бригада Урсус",
      homeQuickMsgPlaceholder: "Напр. 12 обідів Ланч Дня на 13:00 або питання щодо доставки",
      homeQuickSubmitBtn: "Замовити дзвінок із локалу (DEMO)",

      // Menu Page (Photo 1 Editorial Design)
      menuHeroEyebrow: "НАШЕ МЕНЮ",
      menuHeroLine1: "Традиційна",
      menuHeroLine2: "українська кухня",
      menuHeroLead: "Домашні страви, приготовані зі свіжих і натуральних інгредієнтів.",
      menuSeeAllLink: "Дивитися все меню",
      menuTabAll: "Усі страви",
      menuTabSoups: "Перші страви",
      menuTabDumplings: "Вареники і пельмені",
      menuTabMains: "Другі страви",
      menuTabSalads: "Салати",
      menuTabDesserts: "Десерти",
      menuTabDrinks: "Напої",
      menuLunchJump: "Ланч Дня 33 zł",
      menuSubAll: "Усі в розділі",
      menuPageTitle: "Повна Карта Меню та Ланч Дня 33 zł",
      menuPageLead: "Усі 53 позиції в 11 категоріях з офіційного друкованого меню Smakota та 21 фото-картки страв. Додавайте страви в кошик або дзвоніть напряму на кухню.",
      lunchBuilderTitle: "Комплексний Ланч Дня: Перше + М'ясна страва + Гарнір + Салат",
      lunchBuilderSub: "Спеціальна пропозиція з верхнього штампа нашого меню. Оберіть по одній позиції з кожної з 4 колонок та замовте повноцінний гарячий домашній обід за 33 zł.",
      lunchPriceCaption: "ПОВНИЙ ОБІД ІЗ 4 СТРАВ",
      lunchStep1: "1. Оберіть першу страву",
      lunchStep2: "2. Оберіть м'ясну страву",
      lunchStep3: "3. Оберіть гарнір",
      lunchStep4: "4. Оберіть салат",
      btnAddLunchCombo: "Додати зібраний Ланч у кошик · 33,00 zł",
      menuMainHeading: "SMAKOTA MENU · КАРТА СТРАВ",
      menuMainLead: "Усі позиції та ціни у злотих (PLN) перенесені безпосередньо з офіційного друкованого меню локалу на ul. S. Wojciechowskiego 33 та 21 фото-картки страв.",
      btnSeePaperScans: "Переглянути фото паперового меню",
      searchPlaceholder: "Пошук страви (борщ, вареники, чебурек...)",
      filterAllDishes: "Усі страви (53)",
      filterPhotoOnly: "Картки з фото (21)",
      filterPaperSheet: "Вигляд аркуша меню",
      catAll: "УСІ КАТЕГОРІЇ",
      sourceConfirmed: "Друковане меню локалу",
      sourceOnline: "Фото + ціна онлайн (до підтв.)",
      sourcePending: "Фото · Ціна уточнюється",
      btnAddToCart: "Додати в кошик",
      btnUnavailable: "Тимчасово недоступно",
      btnCallForPrice: "Подзвонити щодо ціни",

      // About Page
      aboutHeroEyebrow: "ПРО НАС І БУДОВИ",
      aboutHeroLine1: "Про нашу кухню",
      aboutHeroLine2: "та обіди для бригад",
      aboutPageTitle: "Про нашу кухню, Обіди для будов та Відгуки гостей",
      aboutPageLead: "Дізнайтеся про принципи, якими ми керуємося щодня у Smakota: натуральні продукти, ручна ліпка та приготування виключно після замовлення.",
      aboutStoryHeading: "ЧОМУ В SMAKOTA СМАКУЄ ЯК ВДОМА",
      aboutStoryTitle: "Жодних напівфабрикатів, штучних приправ чи розігрівання вчорашніх страв",
      aboutStoryP1: "У Smakota ми переконані: справжній домашній обід починається в ту мить, коли гість робить замовлення. На відміну від мережевих закладів поруч, ми не готуємо їжу заздалегідь і не забиваємо смак м'яса чи овочів штучними сумішами приправ.",
      aboutStoryP2: "Наша гордість — поєднання української гостинності з улюбленими смаками польських та українських гостей у Варшаві. Більшість наших постійних клієнтів — поляки та українці, які із задоволенням замовляють наші хрусткі чебуреки, соковиті хінкалі, домашні пельмені, вареники та густий український борщ.",
      val1Title: "Готуємо тільки після замовлення",
      val1Desc: "Ви приходите або дзвоните в локал, робите замовлення, і тільки тоді кухар стає і готує вашу страву свіжою.",
      val2Title: "100% натуральні інгредієнти",
      val2Desc: "Свіжа свинина та птиця, домашній кисломолочний сир, густа сметана, часник і свіжий кріп без хімічних добавок.",
      val3Title: "Тісто ручної ліпки",
      val3Desc: "Вареники, пельмені та хінкалі ми ліпимо вручну на місці, дбаючи про тонке ніжне тісто та щедру начинку.",
      val4Title: "Доступні народні ціни",
      val4Desc: "Працюємо у доступному ціновому сегменті: повний обід із 4 страв Lunch Dnia коштує 33 zł, перші страви від 15 zł, вареники 22 zł.",

      // B2B Section
      b2bTitle: "Гарячі обіди для будівництв, бригад та фірм: партії по 10, 15 і більше порцій",
      b2bLead: "Обслуговуємо групові замовлення для будівельних об'єктів та колективів у Варшаві. Готуємо все свіжим на визначений час, пакуємо у термобокси та доставляємо власним кур'єром прямо на об'єкт.",
      b2bPerk1: "Ситні домашні комплекси (Перше + М'ясна страва + Гарнір + Салат) за ціною 33 zł / порція.",
      b2bPerk2: "Великі тарілки пельменів (1000 г: 153 zł) та дегустаційні сети чебуреків «Пихота» (99 zł).",
      b2bPerk3: "Прямий телефонний зв'язок із локалом або швидке замовлення пакета в один клік.",
      b2bCallBtn: "Подзвонити і замовити на будову: +48 576 113 316",
      b2bCalcTitle: "Калькулятор пакета обідів для бригади",
      b2bCalcSub: "Оберіть кількість комплексних обідів Ланч Дня (33 zł / особа), щоб додати груповий пакет у кошик:",
      b2bCalcNote: "Перше + М'ясна страва + Гарнір + Салат для кожного працівника",
      b2bAddBtn: "Додати груповий пакет у кошик",

      // Locations Page
      locationsPageTitle: "Наші Локали, Самовивіз та Доставка Власним Кур'єром",
      locationsPageLead: "Перегляньте адреси, графік роботи та статус наших точок у Варшаві. Система підтримує головний локал на Урсусі, другу точку, що готується до відкриття, та масштабування мережі до 3–5 філій.",
      l1HeroEyebrow: "ЛОКАЛИ І ДОСТАВКА",
      l1HeroLine1: "Локали та доставка",
      l1HeroLine2: "у Варшаві",
      l1HeroLead: "Самовивіз на Урсусі та доставка власним кур'єром по Варшаві.",
      locationsHeading: "ТОЧКИ SMAKOTA У ВАРШАВІ",
      locationsLead: "Оберіть точку Smakota для самовивозу, прямого дзвінка на кухню або замовлення доставки власним кур'єром.",
      l1Heading: "Наші локали",
      l1MapGmapsBtn: "Урсус у Google Maps ↗",
      l1DeliveryHeading: "Доставка",
      l1DeliveryLead: "Замовляйте улюблені домашні страви із самовивозом на Урсусі або доставкою нашим власним кур'єром. Готуємо свіжим після замовлення — доставляємо додому, в офіс та на будівництва (10–15+ порцій).",
      l1FeatZonesTitle: "Зони доставки",
      l1FeatZonesDesc: "Ursus, Włochy, Bemowo, Ochota та групові замовлення",
      l1FeatHoursTitle: "Години роботи",
      l1FeatHoursLine1: "Пн–Чт: 11:00–20:00",
      l1FeatHoursLine2: "Пт–Нд: 10:00–20:30",
      l1FeatTermsTitle: "Умови",
      l1FeatTermsLine1: "Самовивіз у локалі: 0 zł",
      l1FeatTermsLine2: "Власний кур'єр · Pyszne, Glovo, Wolt",
      l1OrderBtn: "Замовити доставку",
      zoneCheckerTitle: "Перевірити доступність доставки власним кур'єром (DEMO)",
      zoneCheckerSub: "Введіть поштовий індекс або район Варшави (напр. 02-495, Ursus, Włochy, Bemowo). Точні зони та тарифи доставки узгоджуються власником перед production-запуском.",
      zoneInputPh: "Напр. 02-495, Ursus, Włochy, Bemowo...",
      zoneCheckBtnLabel: "Перевірити зону",
      deliveryRulesHeading: "СПОСОБИ ОТРИМАННЯ ЗАМОВЛЕННЯ",
      rulePickupTitle: "1. Самовивіз із локалу (0 zł)",
      rulePickupDesc: "Зателефонуйте за номером +48 576 113 316 або оформіть замовлення на сайті. Ми приготуємо гарячі страви точно до вашого приходу на ul. S. Wojciechowskiego 33.",
      ruleCourierTitle: "2. Доставка власним кур'єром Smakota",
      ruleCourierDesc: "Маємо власного кур'єра, який забирає свіжоприготований обід прямо з кухні та доставляє за вашою адресою або на будівництво.",
      rulePlatformsTitle: "3. Партнерські платформи доставки",
      rulePlatformsDesc: "Ми також представлені в Pyszne.pl, Glovo, Uber Eats та Wolt, проте прямий дзвінок у локал — найшвидший спосіб замовити без посередників.",

      // Mobile Navigation Drawer
      mobileNavTitle: "Меню",
      mobileNavLangLabel: "Мова",
      mobileNavHoursLabel: "Пн–Чт 11:00–20:00 · Пт–Нд 10:00–20:30",
      mobileNavCallCta: "Подзвонити зараз",
      mobileNavPrintedMenu: "Друковане меню",
      mobileNavRoute: "Маршрут",

      // Contact Page (1:1 Editorial + Real Data)
      c1HeroEyebrow: "ЗВ'ЯЗОК ІЗ ЛОКАЛОМ",
      c1HeroLine1: "Зв’яжіться",
      c1HeroLine2: "зі Смакотою",
      c1HeroLead: "Замовлення за телефоном, питання щодо меню та групові обіди на будови й у фірми.",
      contactPageTitle: "Контакти Локалу, Замовлення за Телефоном та Карта",
      contactPageLead: "Маєте запитання щодо меню, бажаєте замовити гарячий обід із самовивозом, доставку кур'єром або домовитися про регулярні обіди для будівельної бригади? Зв'яжіться з нами напряму.",
      c1Heading: "Наші контакти",
      c1PhoneLabel: "Телефон",
      c1DirectLabel: "Instagram Direct",
      c1AddressLabel: "Адреса (Урсус)",
      c1AddressLine1: "ul. S. Wojciechowskiego 33 / lok. 40 (44)",
      c1AddressLine2: "02-495 Warszawa",
      c1HoursLabel: "Години роботи",
      c1HoursLine1: "Пн – Чт: 11:00 – 20:00",
      c1HoursLine2: "Пт – Нд: 10:00 – 20:30",
      c1SocialTitle: "Ми в соціальних мережах",
      c1MapBtn: "Показати на Google Maps ↗",
      c1FormHeading: "Напишіть нам",
      c1FormSub: "Маєте запитання, групове замовлення на будову чи пропозиції? Залиште повідомлення — ми відповімо якнайшвидше.",
      c1NamePh: "Ім'я *",
      c1PhonePh: "Номер телефону *",
      c1TopicDefault: "Тема повідомлення",
      c1MsgPh: "Ваше повідомлення *",
      c1SubmitBtn: "Надіслати повідомлення (DEMO)",
      c1BannerTitle: "Замовляйте улюблені страви вже сьогодні",
      c1BannerDesc: "Домашні обіди, вареники, пельмені, чебуреки та хінкалі з доставкою кур'єром по Варшаві або самовивозом.",
      c1BannerBtn: "Перейти до меню →",
      contactInfoHeading: "ПРЯМИЙ ЗВ'ЯЗОК ІЗ ЛОКАЛОМ",
      contactPhoneLabel: "Телефон для замовлень (Локал Урсус):",
      contactAddressLabel: "Адреса локалу:",
      contactHoursLabel: "Графік роботи:",
      contactFormHeading: "НАПИШІТЬ НАМ АБО ЗАМОВТЕ ДЗВІНОК ДЛЯ БУДОВИ / ГРУПИ",
      contactFormSub: "Залиште номер телефону та коротке повідомлення (напр. кількість обідів на будову або питання щодо доставки), і ми передзвонимо з локалу.",
      contactNameLabel: "Ваше ім'я або назва фірми *",
      contactPhoneInputLabel: "Номер телефону *",
      contactTopicLabel: "Тема звернення",
      contactTopic1: "Групове замовлення / Обіди на будову (10–15+ порцій)",
      contactTopic2: "Питання щодо меню та наявності страв",
      contactTopic3: "Доставка власним кур'єром",
      contactTopic4: "Відгук або співпраця",
      contactMsgLabel: "Повідомлення або деталі замовлення",
      contactSubmitBtn: "Надіслати повідомлення в локал (DEMO)",

      // Reviews & Footer
      reviewsHeading: "ВІДГУКИ ГОСТЕЙ ТА НАШІ ПРОФІЛІ",
      reviewsLead: "Дякуємо за довіру польським та українським гостям у Варшаві. Читайте відгуки про наші домашні обіди або залиште власну оцінку в Google Maps та Facebook.",
      tentHeading: "Ситий і задоволений?",
      tentBody: "Нам буде дуже приємно, якщо ви приділите 30 секунд і напишете кілька слів.",
      tentItalic: "Для вас це мить, а для нас — величезна підтримка!",
      btnGoogleMapsReview: "Google Maps · Відгуки",
      footerAbout: "Автентична українська кухня та домашні обіди у Варшаві. Готуємо свіже після замовлення з натуральних продуктів. Самовивіз та доставка власним кур'єром.",
      footerNavTitle: "Сторінки сайту",
      footerSocialTitle: "Соцмережі та Система",
      mobileCallBtn: "Подзвонити",
      cartDrawerTitle: "Ваш кошик",
      coPageTitle: "Оформлення замовлення",
      printedModalTitle: "Оригінальне друковане меню та матеріали локалу Smakota",
      printedModalSub: "Нижче наведено оригінальні фотографії паперового меню та настільних карток від власника:",
      auditModalTitle: "Аудит ТЗ, Транскрипції та Матеріалів (Суперечності та Відкриті Питання)",
      adminModalTitle: "Адміністративна панель Smakota (Режим DEMO · Розділ 11 ТЗ)"
    }
  };

  // Default Application State
  const state = {
    lang: "pl",
    selectedBranchId: "branch-ursus",
    fulfillmentType: "DELIVERY",
    paymentMethod: "BLIK_DEMO",
    selectedMenuGroup: "all",
    selectedCategoryId: "all",
    viewMode: "all",
    searchQuery: "",
    selectedVariants: {},
    lunchSelection: {
      soup: DATA.lunchCombo.soups[0].id,
      meat: DATA.lunchCombo.meats[0].id,
      side: DATA.lunchCombo.sides[0].id,
      salad: DATA.lunchCombo.salads[0].id
    },
    b2bQty: 10,
    cart: {
      branchId: "branch-ursus",
      items: []
    },
    checkoutDraft: {
      name: "",
      phone: "",
      email: "",
      address: "",
      apartment: "",
      notes: ""
    },
    orders: [
      {
        id: "SMK-1041",
        branchId: "branch-ursus",
        customerName: "Piotr Kowalski (Budowa Ursus)",
        phone: "+48 601 234 567",
        fulfillmentType: "DELIVERY",
        address: "ul. Posag 7 Panien 12, 02-495 Warszawa",
        status: "PREPARING",
        paymentMethod: "CASH_ON_DELIVERY",
        totalGrosze: 33000,
        createdAt: "12:15 (Europe/Warsaw)",
        itemsSummary: "10 × Lunch Dnia (33 zł)"
      }
    ],
    disabledProducts: [],
    customBranches: [],
    adminRole: "Owner",
    isSubmittingOrder: false,
    lastSubmittedOrder: null
  };

  // Load persisted state across pages
  function loadPersistedState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.lang === "pl" || parsed.lang === "uk") state.lang = parsed.lang;
      if (parsed.selectedBranchId) state.selectedBranchId = parsed.selectedBranchId;
      if (parsed.fulfillmentType === "DELIVERY" || parsed.fulfillmentType === "PICKUP") {
        state.fulfillmentType = parsed.fulfillmentType;
      }
      if (parsed.paymentMethod === "BLIK_DEMO" || parsed.paymentMethod === "AT_PICKUP") {
        state.paymentMethod = parsed.paymentMethod;
      }
      if (parsed.cart && Array.isArray(parsed.cart.items)) {
        state.cart = parsed.cart;
      }
      if (Array.isArray(parsed.orders) && parsed.orders.length > 0) {
        state.orders = parsed.orders;
      }
      if (Array.isArray(parsed.customBranches)) {
        state.customBranches = parsed.customBranches;
        parsed.customBranches.forEach((cb) => {
          if (!DATA.branches.some((b) => b.id === cb.id)) {
            DATA.branches.push(cb);
          }
        });
      }
      if (Array.isArray(parsed.disabledProducts)) {
        state.disabledProducts = parsed.disabledProducts;
        DATA.products.forEach((p) => {
          p.available = !state.disabledProducts.includes(p.id);
        });
      }
    } catch (err) {
      // Ignore storage errors in private mode
    }
  }

  function savePersistedState() {
    try {
      const payload = {
        lang: state.lang,
        selectedBranchId: state.selectedBranchId,
        fulfillmentType: state.fulfillmentType,
        paymentMethod: state.paymentMethod,
        cart: state.cart,
        orders: state.orders,
        disabledProducts: DATA.products.filter((p) => !p.available).map((p) => p.id),
        customBranches: state.customBranches
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      // Ignore storage errors
    }
  }

  function formatPln(grosze, showDecimals = false) {
    if (grosze === null || grosze === undefined || grosze === 0) {
      return state.lang === "pl" ? "Cena do potw." : "Ціна уточн.";
    }
    const zl = grosze / 100;
    if (!showDecimals && grosze % 100 === 0) {
      return `${zl} zł`;
    }
    return `${zl.toFixed(2).replace(".", ",")} zł`;
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getActiveBranch() {
    return DATA.branches.find((b) => b.id === state.selectedBranchId) || DATA.branches[0];
  }

  function showToast(msg) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const el = document.createElement("div");
    el.className = "toast-msg";
    el.innerHTML = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5CE07A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      <span>${msg}</span>
    `;
    container.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 3200);
  }

  // ==========================================================================
  // SHARED MODALS & DRAWERS INJECTION (Works on all 5 pages!)
  // ==========================================================================

  function ensureSharedModals() {
    if (document.getElementById("cartDrawerBackdrop")) return;
    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const activeCls = (target) => (currentPage === target ? "active" : "");

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <!-- MOBILE NAVIGATION DRAWER (Visible via hamburger below 1120px) -->
      <div class="mobile-nav-backdrop" id="mobileNavDrawerBackdrop" role="dialog" aria-modal="true" aria-labelledby="mobileNavDrawerTitle">
        <aside class="mobile-nav-drawer" id="mobileNavDrawer" aria-label="Menu mobilne">
          <div class="mobile-nav-header">
            <div class="mobile-nav-brand">
              <img src="img/smakota-logo.webp" alt="Logo Smakota" class="mobile-nav-logo" />
              <span class="mobile-nav-sep" aria-hidden="true"></span>
              <span class="mobile-nav-wordmark">SMAKOTA</span>
              <span class="mobile-nav-sep" aria-hidden="true"></span>
              <span class="mobile-nav-subtitle" id="mobileNavDrawerTitle" data-i18n="mobileNavTitle">Menu</span>
            </div>
            <button type="button" class="mobile-nav-close-btn" id="closeMobileNavBtn" aria-label="Zamknij menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="mobile-nav-body">
            <nav class="mobile-nav-links" aria-label="Menu główne">
              <a href="index.html" class="mobile-nav-link ${activeCls("index.html")}" data-i18n="navHome">Strona główna</a>
              <a href="menu.html" class="mobile-nav-link ${activeCls("menu.html")}" data-i18n="navMenu">Menu</a>
              <a href="about.html" class="mobile-nav-link ${activeCls("about.html")}" data-i18n="navAbout">O nas</a>
              <a href="locations.html" class="mobile-nav-link ${activeCls("locations.html")}" data-i18n="navLocations">Lokale i Dostawa</a>
              <a href="contact.html" class="mobile-nav-link ${activeCls("contact.html")}" data-i18n="navContact">Kontakt</a>
            </nav>

            <div class="mobile-nav-lang-row">
              <span class="mobile-nav-lang-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span class="mobile-nav-lang-label" data-i18n="mobileNavLangLabel">Język</span>
              </span>
              <div class="lang-switcher" role="group" aria-label="Wybór języka">
                <button type="button" class="lang-btn active" data-lang="pl">PL</button>
                <button type="button" class="lang-btn" data-lang="uk">UA</button>
              </div>
            </div>

            <div class="mobile-nav-card">
              <div class="mobile-nav-branch-title">SMAKOTA <em>Ursus</em></div>
              <div class="mobile-nav-info-row">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+48576113316" class="mobile-nav-phone-num phone-link">+48 576 113 316</a>
              </div>
              <div class="mobile-nav-info-row">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <div>ul. S. Wojciechowskiego 33 / lok. 40 (44), Warszawa</div>
                  <div class="mobile-nav-hours" data-i18n="mobileNavHoursLabel">Pon–Czw 11:00–20:00 · Pt–Ndz 10:00–20:30</div>
                </div>
              </div>
              <a href="tel:+48576113316" class="mobile-nav-call phone-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span data-i18n="mobileNavCallCta">Zadzwoń teraz</span>
              </a>
            </div>

            <div class="mobile-nav-quick">
              <button type="button" class="mobile-nav-sec-btn" id="mobileNavPrintedMenuBtn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>
                <span data-i18n="mobileNavPrintedMenu">Drukowane menu</span>
              </button>
              <a href="https://share.google/1MwYUzSfKmWTu60fy" target="_blank" rel="noopener noreferrer" class="mobile-nav-sec-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                <span data-i18n="mobileNavRoute">Trasa</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <!-- CART & GUEST CHECKOUT DRAWER -->
      <div class="cart-drawer-backdrop" id="cartDrawerBackdrop" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle">
        <div class="cart-drawer">
          <div class="modal-header">
            <h2 class="modal-title" id="cartDrawerTitle" data-i18n="cartDrawerTitle">Twój koszyk i zamówienie</h2>
            <button type="button" class="modal-close-btn" id="closeCartBtn" aria-label="Zamknij koszyk">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="cart-drawer-body" id="cartDrawerBody"></div>
          <div class="cart-drawer-footer" id="cartDrawerFooter"></div>
        </div>
      </div>

      <!-- DISH DETAIL MODAL -->
      <div class="modal-backdrop" id="dishModalBackdrop" role="dialog" aria-modal="true" aria-labelledby="dishModalTitle">
        <div class="modal-card">
          <div class="modal-header">
            <h2 class="modal-title" id="dishModalTitle">Szczegóły dania</h2>
            <button type="button" class="modal-close-btn" id="closeDishModalBtn" aria-label="Zamknij">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="modal-body" id="dishModalBody"></div>
        </div>
      </div>

      <!-- ORIGINAL PRINTED MENU PHOTOS & TABLE TENT LIGHTBOX MODAL -->
      <div class="modal-backdrop" id="printedMenuModalBackdrop" role="dialog" aria-modal="true" aria-labelledby="printedMenuModalTitle">
        <div class="modal-card wide">
          <div class="modal-header">
            <h2 class="modal-title" id="printedMenuModalTitle" data-i18n="printedModalTitle">Oryginalna karta menu i materiały lokalu Smakota</h2>
            <button type="button" class="modal-close-btn" id="closePrintedMenuModalBtn" aria-label="Zamknij">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="modal-body">
            <p style="font-size: 0.92rem; color: var(--ink-secondary); margin-bottom: 18px;" data-i18n="printedModalSub">
              Poniżej znajdują się oryginalne zdjęcia fizycznej karty menu oraz kart stolikowych przekazane przez właściciela:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
              <figure style="background: var(--bg-card); border: 1px solid var(--border-warm); border-radius: var(--radius-card); padding: 12px;">
                <img src="img/WhatsApp Image 2026-11-21 at 9.13.10 a.m..webp" alt="Karta Menu Smakota Strona 1" loading="lazy" style="border-radius: 8px; width: 100%;" />
                <figcaption style="font-weight: 800; font-size: 0.85rem; color: var(--ink-burgundy); margin-top: 10px;">Strona 1: Zupa, Dania mięsne, Dodatki, Surówki, Chinkali, Lunch 33 zł</figcaption>
              </figure>
              <figure style="background: var(--bg-card); border: 1px solid var(--border-warm); border-radius: var(--radius-card); padding: 12px;">
                <img src="img/WhatsApp Image 2026-11-21 at 9.13.10 a.m. (1).webp" alt="Karta Menu Smakota Strona 2" loading="lazy" style="border-radius: 8px; width: 100%;" />
                <figcaption style="font-weight: 800; font-size: 0.85rem; color: var(--ink-burgundy); margin-top: 10px;">Strona 2: Pierogi, Pielmieni, Czebureki, Naleśniki, Sałatki, Kontakt</figcaption>
              </figure>
              <figure style="background: var(--bg-card); border: 1px solid var(--border-warm); border-radius: var(--radius-card); padding: 12px;">
                <img src="img/WhatsApp Image 2026-11-21 at 9.30.05 a.m..webp" alt="Karta opinii Smakota z oficjalnym logo" loading="lazy" style="border-radius: 8px; width: 100%; margin-bottom: 12px;" />
                <img src="img/WhatsApp Image 2026-11-21 at 9.30.29 a.m..webp" alt="Karta QR Zostaw Opinię Smakota" loading="lazy" style="border-radius: 8px; width: 100%;" />
                <figcaption style="font-weight: 800; font-size: 0.85rem; color: var(--ink-burgundy); margin-top: 10px;">Karty stolikowe z oficjalnym logo Smakota i kodem QR</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <!-- TECHNICAL SPECIFICATION & CONTRADICTIONS AUDIT MODAL -->
      <div class="modal-backdrop" id="auditModalBackdrop" role="dialog" aria-modal="true" aria-labelledby="auditModalTitle">
        <div class="modal-card wide">
          <div class="modal-header">
            <h2 class="modal-title" id="auditModalTitle" data-i18n="auditModalTitle">Audyt ТЗ, Transkrypcji i Materiałów (Rozbieżności i Otwarte Pytania)</h2>
            <button type="button" class="modal-close-btn" id="closeAuditModalBtn" aria-label="Zamknij">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="modal-body" id="auditModalBody"></div>
        </div>
      </div>

      <!-- DEMO ADMIN PANEL MODAL -->
      <div class="modal-backdrop" id="adminModalBackdrop" role="dialog" aria-modal="true" aria-labelledby="adminModalTitle">
        <div class="modal-card wide">
          <div class="modal-header">
            <h2 class="modal-title" id="adminModalTitle" data-i18n="adminModalTitle">Panel Administracyjny Smakota (Tryb DEMO · Sekcja 11 ТЗ)</h2>
            <button type="button" class="modal-close-btn" id="closeAdminModalBtn" aria-label="Zamknij">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div class="modal-body" id="adminModalBody"></div>
        </div>
      </div>

      <!-- TOAST NOTIFICATIONS -->
      <div class="toast-container" id="toastContainer" aria-live="polite"></div>
    `;
    document.body.appendChild(wrapper);
  }

  // ==========================================================================
  // 1. LANGUAGE & STATIC TEXT RENDERING
  // ==========================================================================

  function applyTranslations() {
    const dict = I18N[state.lang];
    document.documentElement.lang = state.lang;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.textContent = dict[key];
      }
    });

    const searchInput = document.getElementById("menuSearchInput");
    if (searchInput) {
      searchInput.placeholder = dict.searchPlaceholder;
    }

    const homeCntName = document.getElementById("homeCntName");
    if (homeCntName && dict.homeQuickNamePlaceholder) {
      homeCntName.placeholder = dict.homeQuickNamePlaceholder;
    }

    const homeCntMsg = document.getElementById("homeCntMsg");
    if (homeCntMsg && dict.homeQuickMsgPlaceholder) {
      homeCntMsg.placeholder = dict.homeQuickMsgPlaceholder;
    }

    const cntName = document.getElementById("cntName");
    if (cntName && dict.c1NamePh) {
      cntName.placeholder = dict.c1NamePh;
    }

    const cntPhone = document.getElementById("cntPhone");
    if (cntPhone && dict.c1PhonePh) {
      cntPhone.placeholder = dict.c1PhonePh;
    }

    const cntMsg = document.getElementById("cntMsg");
    if (cntMsg && dict.c1MsgPh) {
      cntMsg.placeholder = dict.c1MsgPh;
    }

    const zoneCheckInput = document.getElementById("zoneCheckInput");
    if (zoneCheckInput && dict.zoneInputPh) {
      zoneCheckInput.placeholder = dict.zoneInputPh;
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === state.lang);
    });

    renderBranchContext();
    renderHomeFeaturedDishes();
    renderLunchBuilder();
    renderCategoryNav();
    renderMenuPopularRow();
    renderMenuCatalog();
    renderB2bCalculator();
    renderLocationsSection();
    renderReviewsSection();
    renderCartDrawer();
    renderCheckoutPage();
    updateCartBadges();
  }

  // ==========================================================================
  // 2. MULTI-BRANCH CONTEXT & SWITCHING (WITH TC-04 & TC-09 PROTECTION)
  // ==========================================================================

  function selectBranch(branchId) {
    const targetBranch = DATA.branches.find((b) => b.id === branchId);
    if (!targetBranch) return;

    if (
      state.cart.items.length > 0 &&
      state.cart.branchId !== branchId
    ) {
      const confirmMsg =
        state.lang === "pl"
          ? `Twój koszyk zawiera dania dla lokalu „${getActiveBranch().name.pl}”. Zmiana lokalu na „${targetBranch.name.pl}” wyczyści bieżący koszyk (zgodnie z CART-03 / TC-09). Czy kontynuować?`
          : `Ваш кошик містить страви для локалу «${getActiveBranch().name.uk}». Зміна локалу на «${targetBranch.name.uk}» очистить поточний кошик (згідно з CART-03 / TC-09). Продовжити?`;

      if (!window.confirm(confirmMsg)) {
        return;
      }
      state.cart.items = [];
    }

    state.selectedBranchId = branchId;
    state.cart.branchId = branchId;
    state.lastSubmittedOrder = null;
    savePersistedState();
    renderBranchContext();
    renderLocationsSection();
    renderCheckoutPage();
    updateCartBadges();

    const msg =
      state.lang === "pl"
        ? `Wybrano lokal: ${targetBranch.name.pl}`
        : `Обрано локал: ${targetBranch.name.uk}`;
    showToast(msg);
  }

  function renderBranchContext() {
    const branch = getActiveBranch();
    const isActive = branch.status === "ACTIVE";

    const topDot = document.getElementById("topBranchDot");
    const topLabel = document.getElementById("topBranchLabel");
    const topHours = document.getElementById("topHoursLabel");
    if (topDot) topDot.className = isActive ? "status-dot" : "status-dot warning";
    if (topLabel) {
      topLabel.textContent = `${branch.name[state.lang]} · ${branch.district}`;
    }
    if (topHours) {
      const span = topHours.querySelector("span");
      if (span) span.textContent = branch.hours[state.lang];
    }

    const headerPhone = document.getElementById("headerPhoneLink");
    const heroPhone = document.getElementById("heroPhoneBtn");
    if (branch.phone) {
      if (headerPhone) {
        headerPhone.href = branch.phoneHref;
        headerPhone.style.opacity = "1";
        headerPhone.style.pointerEvents = "auto";
        const pt = document.getElementById("headerPhoneText");
        if (pt) pt.textContent = branch.phone;
      }
      if (heroPhone) {
        heroPhone.href = branch.phoneHref;
        heroPhone.style.opacity = "1";
        heroPhone.style.pointerEvents = "auto";
        const hpt = document.getElementById("heroPhoneBtnText");
        if (hpt) {
          hpt.textContent =
            state.lang === "pl"
              ? `Zadzwoń do lokalu: ${branch.phone}`
              : `Подзвонити в локал: ${branch.phone}`;
        }
      }
    } else {
      if (headerPhone) {
        headerPhone.removeAttribute("href");
        headerPhone.style.opacity = "0.55";
        const pt = document.getElementById("headerPhoneText");
        if (pt) pt.textContent = state.lang === "pl" ? "Telefon wkrótce" : "Телефон скоро";
      }
      if (heroPhone) {
        heroPhone.removeAttribute("href");
        heroPhone.style.opacity = "0.6";
        const hpt = document.getElementById("heroPhoneBtnText");
        if (hpt) {
          hpt.textContent =
            state.lang === "pl"
              ? "Lokal przed otwarciem: telefon do potwierdzenia"
              : "Локал перед відкриттям: телефон уточнюється";
        }
      }
    }

    const tabsWrap = document.getElementById("heroBranchTabs");
    if (tabsWrap) {
      tabsWrap.innerHTML = DATA.branches
        .map((b) => {
          const activeClass = b.id === state.selectedBranchId ? "active" : "";
          const dotColor = b.status === "ACTIVE" ? "#5CE07A" : "#DDA022";
          return `
            <button type="button" class="branch-tab-btn ${activeClass}" data-select-branch="${b.id}">
              <span style="width:7px;height:7px;border-radius:50%;background:${dotColor};display:inline-block;"></span>
              <span>${b.name[state.lang]}</span>
            </button>
          `;
        })
        .join("");

      tabsWrap.querySelectorAll("[data-select-branch]").forEach((btn) => {
        btn.addEventListener("click", () => {
          selectBranch(btn.getAttribute("data-select-branch"));
        });
      });
    }

    const detailsWrap = document.getElementById("heroBranchDetails");
    if (detailsWrap) {
      const statusBadge =
        branch.status === "ACTIVE"
          ? `<span class="source-badge confirmed">${state.lang === "pl" ? "Otwarte · Przyjmuje zamówienia" : "Відчинено · Приймає замовлення"}</span>`
          : `<span class="source-badge online">${state.lang === "pl" ? "Otwarcie wkrótce · Zamówienia zablokowane (TC-04)" : "Скоро відкриття · Замовлення заблоковані (TC-04)"}</span>`;

      detailsWrap.innerHTML = `
        <div>
          <strong>${branch.address}</strong> (${branch.postalCode} ${branch.city})
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span>${branch.hours[state.lang]}</span>
          ${statusBadge}
        </div>
      `;
    }

    document.querySelectorAll(".fulfillment-btn").forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-fulfillment") === state.fulfillmentType
      );
    });
  }

  // ==========================================================================
  // 3. HOME PAGE FEATURED DISHES PREVIEW (6 SIGNATURE DISHES)
  // ==========================================================================

  function renderHomeFeaturedDishes() {
    const container = document.getElementById("homeFeaturedGrid");
    if (!container) return;

    const featuredIds = [
      "zupa-barszcz-ukrainski",
      "pierogi-z-ziemniakami",
      "pielmieni-z-wieprzowina",
      "czeburek-z-miesem-m",
      "chinkali-z-wieprzowina",
      "danie-zeberka-wieprzowe"
    ];

    const products = featuredIds
      .map((id) => DATA.products.find((p) => p.id === id))
      .filter(Boolean);

    container.innerHTML = products
      .map((p) => {
        const cat = DATA.categories.find((c) => c.id === p.categoryId) || DATA.categories[0];
        return renderDishCard(p, cat);
      })
      .join("");

    bindCatalogCardEvents(container);
  }

  // ==========================================================================
  // 4. INTERACTIVE 33 ZŁ LUNCH DNIA CONFIGURATOR
  // ==========================================================================

  function renderLunchBuilder() {
    const grid = document.getElementById("lunchStepsGrid");
    const summary = document.getElementById("lunchSelectionSummary");
    if (!grid || !summary) return;

    const dict = I18N[state.lang];
    const combo = DATA.lunchCombo;

    const cols = [
      { key: "soup", title: dict.lunchStep1, items: combo.soups },
      { key: "meat", title: dict.lunchStep2, items: combo.meats },
      { key: "side", title: dict.lunchStep3, items: combo.sides },
      { key: "salad", title: dict.lunchStep4, items: combo.salads }
    ];

    grid.innerHTML = cols
      .map((col) => {
        const currentId = state.lunchSelection[col.key];
        const optionsHtml = col.items
          .map((item) => {
            const isSelected = item.id === currentId;
            return `
              <button type="button" class="lunch-option-btn ${isSelected ? "selected" : ""}" data-lunch-col="${col.key}" data-lunch-item="${item.id}">
                <span>${item[state.lang]}</span>
                ${
                  isSelected
                    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
                    : ""
                }
              </button>
            `;
          })
          .join("");

        return `
          <div class="lunch-step-col">
            <h3 class="lunch-step-title">${col.title}</h3>
            <div class="lunch-radio-list">${optionsHtml}</div>
          </div>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-lunch-col]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const colKey = btn.getAttribute("data-lunch-col");
        const itemId = btn.getAttribute("data-lunch-item");
        state.lunchSelection[colKey] = itemId;
        renderLunchBuilder();
      });
    });

    const chosenSoup = combo.soups.find((x) => x.id === state.lunchSelection.soup) || combo.soups[0];
    const chosenMeat = combo.meats.find((x) => x.id === state.lunchSelection.meat) || combo.meats[0];
    const chosenSide = combo.sides.find((x) => x.id === state.lunchSelection.side) || combo.sides[0];
    const chosenSalad = combo.salads.find((x) => x.id === state.lunchSelection.salad) || combo.salads[0];

    summary.innerHTML =
      state.lang === "pl"
        ? `Twój zestaw Lunch (33 zł): <strong>${chosenSoup.pl}</strong> + <strong>${chosenMeat.pl}</strong> + <strong>${chosenSide.pl}</strong> + <strong>${chosenSalad.pl}</strong>`
        : `Ваш комплексний Ланч (33 zł): <strong>${chosenSoup.uk}</strong> + <strong>${chosenMeat.uk}</strong> + <strong>${chosenSide.uk}</strong> + <strong>${chosenSalad.uk}</strong>`;
  }

  // ==========================================================================
  // 5. MENU CATALOG (PHOTO 1 TABS, SUB-CATEGORIES, EDITORIAL CARDS & PAPER VIEW)
  // ==========================================================================

  const MENU_GROUPS = [
    {
      id: "all",
      labelKey: "menuTabAll",
      categoryIds: [],
      iconSvg: ""
    },
    {
      id: "soups",
      labelKey: "menuTabSoups",
      categoryIds: ["zupa"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16c0 4.4-3.6 8-8 8s-8-3.6-8-8Z"/><path d="M9 12 12 4.5"/><path d="M12.5 5.5c.8-1 2.2-1 2.5 0"/><path d="M8 20h8"/></svg>`
    },
    {
      id: "dumplings",
      labelKey: "menuTabDumplings",
      categoryIds: ["pierogi", "pielmieni", "chinkali", "czebureki"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 15c0 2.8 4 4.5 9 4.5s9-1.7 9-4.5c0-4.2-4-8.5-9-8.5S3 10.8 3 15Z"/><path d="M4.5 14c1.4-1.2 2.7-.2 4-1.2 1.4-1 2.6-.2 3.5-1.1 1 .9 2.2.1 3.5 1.1 1.3 1 2.6 0 4 1.2"/></svg>`
    },
    {
      id: "mains",
      labelKey: "menuTabMains",
      categoryIds: ["dania-miesne", "dodatki-obiadowe"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17h18"/><path d="M5 17a7 7 0 0 1 14 0"/><circle cx="12" cy="8.5" r="1.3"/><path d="M2 19.5h20"/></svg>`
    },
    {
      id: "salads",
      labelKey: "menuTabSalads",
      categoryIds: ["salatki", "surowki"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 13h16a8 8 0 0 1-16 0Z"/><path d="M7.5 13c-.6-2.2.7-4 2.5-4 1.1 0 1.9.6 2 1.6.4-1.3 1.6-2 2.8-1.7 1.3.3 2 1.8 1.5 4.1"/><path d="M8 20.5h8"/></svg>`
    },
    {
      id: "desserts",
      labelKey: "menuTabDesserts",
      categoryIds: ["nalesniki"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16v8H4z"/><path d="M4 11c1.8-3 4.8-5 8-5 2.4 0 4.8 1 8 5"/><path d="M4 14.8c2 1 3.6-.5 5.3.5 1.8 1 3.5-.5 5.4.5 1.7.9 3.4-.3 5.3.4"/><circle cx="11.5" cy="5.2" r="1.4"/></svg>`
    },
    {
      id: "drinks",
      labelKey: "menuTabDrinks",
      categoryIds: ["sosy-napoje"],
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 8h11l-1.3 12.5H7.8L6.5 8Z"/><path d="M12 8V4l3.5-1.5"/><path d="M7.2 12.5h9.6"/></svg>`
    }
  ];

  function renderCategoryNav() {
    const strip = document.getElementById("categoryNavStrip");
    if (!strip) return;

    const dict = I18N[state.lang];
    strip.innerHTML = MENU_GROUPS.map((grp) => {
      const isActive = state.selectedMenuGroup === grp.id;
      return `
        <button type="button" class="m1-cat-tab ${isActive ? "active" : ""}" data-group-id="${grp.id}" role="tab" aria-selected="${isActive}">
          ${grp.iconSvg || ""}
          <span>${dict[grp.labelKey]}</span>
        </button>
      `;
    }).join("");

    strip.querySelectorAll("[data-group-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedMenuGroup = btn.getAttribute("data-group-id");
        state.selectedCategoryId = "all";
        renderCategoryNav();
        renderMenuPopularRow();
        renderMenuCatalog();
      });
    });

    renderMenuSubcatStrip();
  }

  function renderMenuSubcatStrip() {
    const subStrip = document.getElementById("menuSubcatStrip");
    if (!subStrip) return;

    const dict = I18N[state.lang];
    const activeGroup = MENU_GROUPS.find((g) => g.id === state.selectedMenuGroup);
    if (!activeGroup || activeGroup.categoryIds.length <= 1) {
      subStrip.style.display = "none";
      subStrip.innerHTML = "";
      return;
    }

    const subCats = activeGroup.categoryIds
      .map((cid) => DATA.categories.find((c) => c.id === cid))
      .filter(Boolean);

    const allPill = `
      <button type="button" class="m1-subcat-pill ${state.selectedCategoryId === "all" ? "active" : ""}" data-subcat-id="all">
        ${dict.menuSubAll}
      </button>
    `;

    const subPills = subCats
      .map((cat) => {
        const isAct = state.selectedCategoryId === cat.id;
        return `
          <button type="button" class="m1-subcat-pill ${isAct ? "active" : ""}" data-subcat-id="${cat.id}">
            ${cat.name[state.lang]}
          </button>
        `;
      })
      .join("");

    subStrip.style.display = "flex";
    subStrip.innerHTML = allPill + subPills;

    subStrip.querySelectorAll("[data-subcat-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedCategoryId = btn.getAttribute("data-subcat-id");
        renderMenuSubcatStrip();
        renderMenuPopularRow();
        renderMenuCatalog();
      });
    });
  }

  function getFilteredProducts() {
    const q = state.searchQuery.trim().toLowerCase();
    const activeGroup = MENU_GROUPS.find((g) => g.id === state.selectedMenuGroup);

    return DATA.products.filter((p) => {
      if (state.selectedCategoryId !== "all") {
        if (p.categoryId !== state.selectedCategoryId) return false;
      } else if (activeGroup && activeGroup.categoryIds.length > 0) {
        if (!activeGroup.categoryIds.includes(p.categoryId)) return false;
      }

      if (state.viewMode === "photo" && !p.image) {
        return false;
      }
      if (q) {
        const inPl = p.name.pl.toLowerCase().includes(q) || p.description.pl.toLowerCase().includes(q);
        const inUk = p.name.uk.toLowerCase().includes(q) || p.description.uk.toLowerCase().includes(q);
        return inPl || inUk;
      }
      return true;
    });
  }

  function renderEditorialDishCard(product) {
    const dict = I18N[state.lang];
    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const selectedVarId =
      state.selectedVariants[product.id] ||
      (hasVariants ? product.variants[0].id : null);
    const activeVariant = hasVariants
      ? product.variants.find((v) => v.id === selectedVarId) || product.variants[0]
      : null;

    const currentPriceGrosze = activeVariant ? activeVariant.priceGrosze : product.priceGrosze;
    const isPendingPrice = product.sourceStatus === "price_pending";
    const isUnavailable = !product.available;

    const variantsHtml = hasVariants
      ? `
        <div class="m1-dish-variants">
          ${product.variants
            .map((v) => {
              const isAct = v.id === activeVariant.id;
              return `
                <button type="button" class="variant-chip ${isAct ? "active" : ""}" data-variant-prod="${product.id}" data-variant-id="${v.id}">
                  ${v.label[state.lang]}
                </button>
              `;
            })
            .join("")}
        </div>
      `
      : "";

    let addControlHtml = "";
    if (isUnavailable) {
      addControlHtml = `
        <button type="button" class="m1-add-btn" disabled title="${dict.btnUnavailable}" aria-label="${dict.btnUnavailable}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </button>
      `;
    } else if (isPendingPrice) {
      addControlHtml = `
        <a href="${DATA.brand.phoneHref}" class="m1-add-btn phone-link" title="${dict.btnCallForPrice}" aria-label="${dict.btnCallForPrice}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      `;
    } else {
      addControlHtml = `
        <button type="button" class="m1-add-btn" data-add-prod="${product.id}" title="${dict.btnAddToCart}" aria-label="${dict.btnAddToCart}: ${product.name[state.lang]}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </button>
      `;
    }

    return `
      <article class="m1-dish-card ${isUnavailable ? "unavailable" : ""}">
        <div class="m1-dish-photo" data-open-dish="${product.id}">
          <img src="${product.image}" alt="${product.name[state.lang]}" loading="lazy" width="600" height="375" />
        </div>
        <div class="m1-dish-body">
          <h3 class="m1-dish-title" data-open-dish="${product.id}">${product.name[state.lang]}</h3>
          <p class="m1-dish-desc">${product.description[state.lang]}</p>
          ${variantsHtml}
          <div class="m1-dish-bottom">
            <span class="m1-dish-price">${formatPln(currentPriceGrosze, true)}</span>
            ${addControlHtml}
          </div>
        </div>
      </article>
    `;
  }

  function renderTextDishRow(product) {
    const dict = I18N[state.lang];
    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const selectedVarId =
      state.selectedVariants[product.id] ||
      (hasVariants ? product.variants[0].id : null);
    const activeVariant = hasVariants
      ? product.variants.find((v) => v.id === selectedVarId) || product.variants[0]
      : null;

    const currentPriceGrosze = activeVariant ? activeVariant.priceGrosze : product.priceGrosze;
    const isPendingPrice = product.sourceStatus === "price_pending";
    const isUnavailable = !product.available;

    const variantsHtml = hasVariants
      ? `
        <div class="m1-dish-variants" style="margin-top:8px;margin-bottom:0;">
          ${product.variants
            .map((v) => {
              const isAct = v.id === activeVariant.id;
              return `
                <button type="button" class="variant-chip ${isAct ? "active" : ""}" data-variant-prod="${product.id}" data-variant-id="${v.id}">
                  ${v.label[state.lang]}
                </button>
              `;
            })
            .join("")}
        </div>
      `
      : "";

    let addControlHtml = "";
    if (isUnavailable) {
      addControlHtml = `
        <button type="button" class="m1-add-btn" disabled title="${dict.btnUnavailable}" aria-label="${dict.btnUnavailable}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </button>
      `;
    } else if (isPendingPrice) {
      addControlHtml = `
        <a href="${DATA.brand.phoneHref}" class="m1-add-btn phone-link" title="${dict.btnCallForPrice}" aria-label="${dict.btnCallForPrice}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      `;
    } else {
      addControlHtml = `
        <button type="button" class="m1-add-btn" data-add-prod="${product.id}" title="${dict.btnAddToCart}" aria-label="${dict.btnAddToCart}: ${product.name[state.lang]}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </button>
      `;
    }

    return `
      <article class="m1-text-dish-row ${isUnavailable ? "unavailable" : ""}">
        <div class="m1-text-dish-info">
          <h3 class="m1-dish-title" data-open-dish="${product.id}" style="font-size:1.12rem;margin-bottom:3px;">
            ${product.name[state.lang]}
          </h3>
          <p class="m1-dish-desc" style="margin-bottom:0;">${product.description[state.lang]}</p>
          ${variantsHtml}
        </div>
        <div class="m1-text-dish-actions">
          <span class="m1-dish-price" style="font-size:1.16rem;">${formatPln(currentPriceGrosze, true)}</span>
          ${addControlHtml}
        </div>
      </article>
    `;
  }

  function renderMenuPopularRow() {
    const section = document.getElementById("menuPopularSection");
    const grid = document.getElementById("menuPopularGrid");
    if (!section || !grid) return;

    const showPopular =
      state.selectedMenuGroup === "all" &&
      state.selectedCategoryId === "all" &&
      !state.searchQuery.trim() &&
      state.viewMode === "all";

    if (!showPopular) {
      section.style.display = "none";
      return;
    }

    section.style.display = "block";
    const popularIds = [
      "zupa-barszcz-ukrainski",
      "pierogi-z-ziemniakami",
      "danie-zeberka-wieprzowe",
      "czeburek-z-miesem-m"
    ];

    const products = popularIds
      .map((id) => DATA.products.find((p) => p.id === id))
      .filter((p) => p && p.image);

    grid.innerHTML = products.map((p) => renderEditorialDishCard(p)).join("");
    bindCatalogCardEvents(grid);
  }

  function getSourceBadgeHtml(sourceStatus) {
    const dict = I18N[state.lang];
    if (sourceStatus === "confirmed_menu") {
      return `<span class="source-badge confirmed">${dict.sourceConfirmed}</span>`;
    }
    if (sourceStatus === "online_menu") {
      return `<span class="source-badge online">${dict.sourceOnline}</span>`;
    }
    return `<span class="source-badge pending">${dict.sourcePending}</span>`;
  }

  function renderDishCard(product, category) {
    const dict = I18N[state.lang];
    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const selectedVarId =
      state.selectedVariants[product.id] ||
      (hasVariants ? product.variants[0].id : null);
    const activeVariant = hasVariants
      ? product.variants.find((v) => v.id === selectedVarId) || product.variants[0]
      : null;

    const currentPriceGrosze = activeVariant ? activeVariant.priceGrosze : product.priceGrosze;
    const isPendingPrice = product.sourceStatus === "price_pending";
    const isUnavailable = !product.available;

    const topVisualHtml = product.image
      ? `
        <div class="dish-photo-frame" data-open-dish="${product.id}">
          <img src="${product.image}" alt="${product.name[state.lang]}" loading="lazy" width="600" height="450" />
        </div>
      `
      : `
        <div class="dish-paper-header">
          <span class="dish-stamp-mini">${category.stampLabel}</span>
          ${getSourceBadgeHtml(product.sourceStatus)}
        </div>
      `;

    const variantsHtml = hasVariants
      ? `
        <div class="dish-variants-row">
          ${product.variants
            .map((v) => {
              const isAct = v.id === activeVariant.id;
              return `
                <button type="button" class="variant-chip ${isAct ? "active" : ""}" data-variant-prod="${product.id}" data-variant-id="${v.id}">
                  ${v.label[state.lang]}
                </button>
              `;
            })
            .join("")}
        </div>
      `
      : "";

    let actionBtnHtml = "";
    if (isUnavailable) {
      actionBtnHtml = `
        <button type="button" class="btn-add-dish" disabled>
          <span>${dict.btnUnavailable}</span>
        </button>
      `;
    } else if (isPendingPrice) {
      actionBtnHtml = `
        <a href="${DATA.brand.phoneHref}" class="btn-call-for-price phone-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>${dict.btnCallForPrice}</span>
        </a>
      `;
    } else {
      actionBtnHtml = `
        <button type="button" class="btn-add-dish" data-add-prod="${product.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          <span>${dict.btnAddToCart} · ${formatPln(currentPriceGrosze)}</span>
        </button>
      `;
    }

    return `
      <article class="dish-card ${isUnavailable ? "unavailable" : ""}">
        <div>
          ${topVisualHtml}
          <div class="dish-card-body">
            ${product.image ? `<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;"><span class="dish-stamp-mini">${category.stampLabel}</span>${getSourceBadgeHtml(product.sourceStatus)}</div>` : ""}
            <div class="dish-title-row">
              <h3 class="dish-title" data-open-dish="${product.id}">${product.name[state.lang]}</h3>
              <span class="dish-price tabular-nums ${isPendingPrice ? "pending-text" : ""}">
                ${formatPln(currentPriceGrosze)}
              </span>
            </div>
            <p class="dish-desc">${product.description[state.lang]}</p>
            ${variantsHtml}
          </div>
        </div>
        <div class="dish-card-footer">
          ${actionBtnHtml}
        </div>
      </article>
    `;
  }

  function renderPaperMenuSheet(filteredProducts) {
    const leftCatIds = ["zupa", "dodatki-obiadowe", "surowki", "sosy-napoje", "chinkali"];
    const rightCatIds = ["dania-miesne", "pierogi", "pielmieni", "czebureki", "nalesniki", "salatki"];

    function renderColumnCats(catIds) {
      return catIds
        .map((cid) => {
          const cat = DATA.categories.find((c) => c.id === cid);
          if (!cat) return "";
          const prods = filteredProducts.filter((p) => p.categoryId === cid);
          if (prods.length === 0) return "";

          const rowsHtml = prods
            .map((p) => {
              const isPending = p.sourceStatus === "price_pending";
              const canAdd = p.available && !isPending;
              return `
                <div class="paper-dish-row">
                  <span class="paper-dish-name" data-open-dish="${p.id}" style="cursor:pointer;">
                    ${p.name[state.lang]}
                    ${!p.available ? ` <small style="color:#B01C12;">(${state.lang === "pl" ? "brak" : "немає"})</small>` : ""}
                  </span>
                  <div class="paper-dish-actions">
                    <span class="paper-dish-price tabular-nums">${formatPln(p.priceGrosze)}</span>
                    ${
                      canAdd
                        ? `<button type="button" class="paper-quick-add" data-add-prod="${p.id}" aria-label="Dodaj ${p.name[state.lang]}">+</button>`
                        : ""
                    }
                  </div>
                </div>
              `;
            })
            .join("");

          return `
            <div class="paper-cat-group">
              <h3 class="stamp-heading md">${cat.stampLabel}</h3>
              <div class="paper-cat-list">${rowsHtml}</div>
            </div>
          `;
        })
        .join("");
    }

    return `
      <div class="paper-menu-sheet">
        <div class="paper-menu-columns">
          <div>${renderColumnCats(leftCatIds)}</div>
          <div>${renderColumnCats(rightCatIds)}</div>
        </div>
      </div>
    `;
  }

  function bindCatalogCardEvents(container) {
    container.querySelectorAll("[data-variant-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodId = btn.getAttribute("data-variant-prod");
        const varId = btn.getAttribute("data-variant-id");
        state.selectedVariants[prodId] = varId;
        renderHomeFeaturedDishes();
        renderMenuPopularRow();
        renderMenuCatalog();
      });
    });

    container.querySelectorAll("[data-add-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodId = btn.getAttribute("data-add-prod");
        addProductToCart(prodId, 1);
      });
    });

    container.querySelectorAll("[data-open-dish]").forEach((el) => {
      el.addEventListener("click", () => {
        openDishModal(el.getAttribute("data-open-dish"));
      });
    });
  }

  function renderMenuCatalog() {
    const container = document.getElementById("menuCatalogContainer");
    if (!container) return;

    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="background:var(--bg-card);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:36px;text-align:center;">
          <h3 style="font-family:var(--font-serif-folk);color:var(--ink-burgundy);margin-bottom:8px;">
            ${state.lang === "pl" ? "Nie znaleziono pasujących dań" : "Страв за вашим запитом не знайдено"}
          </h3>
          <p style="color:var(--ink-secondary);margin-bottom:16px;">
            ${state.lang === "pl" ? "Spróbuj zmienić frazę wyszukiwania lub pokaż wszystkie kategorie." : "Спробуйте змінити пошуковий запит або оберіть усі категорії."}
          </p>
          <button type="button" class="btn-secondary-outline" id="resetMenuFiltersBtn">
            ${state.lang === "pl" ? "Pokaż całe menu" : "Показати все меню"}
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("resetMenuFiltersBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.selectedMenuGroup = "all";
          state.selectedCategoryId = "all";
          state.viewMode = "all";
          state.searchQuery = "";
          const searchInput = document.getElementById("menuSearchInput");
          if (searchInput) searchInput.value = "";
          document.querySelectorAll(".view-mode-btn").forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-filter") === "all");
          });
          renderCategoryNav();
          renderMenuPopularRow();
          renderMenuCatalog();
        });
      }
      return;
    }

    if (state.viewMode === "paper") {
      container.innerHTML = renderPaperMenuSheet(filtered);
    } else {
      const blocksHtml = DATA.categories
        .map((cat) => {
          const catProducts = filtered.filter((p) => p.categoryId === cat.id);
          if (catProducts.length === 0) return "";
          const photoProducts = catProducts.filter((p) => Boolean(p.image));
          const textProducts = catProducts.filter((p) => !p.image);

          return `
            <div class="menu-category-block" id="cat-${cat.id}">
              <div class="m1-cat-group-head">
                <h3 class="m1-cat-group-title">${cat.name[state.lang]}</h3>
                <p class="m1-cat-group-desc">${cat.desc[state.lang]}</p>
              </div>
              ${
                photoProducts.length > 0
                  ? `<div class="m1-cards-grid">${photoProducts.map((p) => renderEditorialDishCard(p)).join("")}</div>`
                  : ""
              }
              ${
                textProducts.length > 0
                  ? `<div class="m1-text-dishes-grid">${textProducts.map((p) => renderTextDishRow(p)).join("")}</div>`
                  : ""
              }
            </div>
          `;
        })
        .join("");
      container.innerHTML = blocksHtml;
    }

    bindCatalogCardEvents(container);
  }

  // ==========================================================================
  // 6. DISH DETAIL MODAL
  // ==========================================================================

  function openDishModal(productId) {
    const product = DATA.products.find((p) => p.id === productId);
    if (!product) return;

    const category = DATA.categories.find((c) => c.id === product.categoryId);
    const modal = document.getElementById("dishModalBackdrop");
    const titleEl = document.getElementById("dishModalTitle");
    const bodyEl = document.getElementById("dishModalBody");
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = product.name[state.lang];

    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const selectedVarId =
      state.selectedVariants[product.id] ||
      (hasVariants ? product.variants[0].id : null);
    const activeVariant = hasVariants
      ? product.variants.find((v) => v.id === selectedVarId) || product.variants[0]
      : null;
    const currentPriceGrosze = activeVariant ? activeVariant.priceGrosze : product.priceGrosze;

    bodyEl.innerHTML = `
      ${
        product.image
          ? `<img src="${product.image}" alt="${product.name[state.lang]}" style="width:100%;max-height:420px;object-fit:cover;border-radius:var(--radius-card);margin-bottom:18px;" />`
          : ""
      }
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="dish-stamp-mini">${category ? category.stampLabel : "MENU"}</span>
          ${getSourceBadgeHtml(product.sourceStatus)}
        </div>
        <span class="dish-price tabular-nums" style="font-size:1.5rem;">
          ${formatPln(currentPriceGrosze, true)}
        </span>
      </div>
      <p style="font-size:1rem;color:var(--ink-secondary);margin-bottom:18px;">
        ${product.description[state.lang]}
      </p>
      <div style="background:var(--bg-parchment-deep);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:14px;margin-bottom:20px;font-size:0.86rem;color:var(--ink-secondary);">
        <strong>${state.lang === "pl" ? "Informacja o przygotowaniu:" : "Інформація про приготування:"}</strong>
        ${
          state.lang === "pl"
            ? "Danie przygotowywane na świeżo po złożeniu zamówienia w wybranym lokalu Smakota."
            : "Страва готується свіжою одразу після отримання замовлення в обраному локалі Smakota."
        }
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        ${
          product.available && product.sourceStatus !== "price_pending"
            ? `<button type="button" class="btn-primary" id="modalAddDishBtn" style="flex:1;">
                 ${I18N[state.lang].btnAddToCart} · ${formatPln(currentPriceGrosze, true)}
               </button>`
            : `<a href="${DATA.brand.phoneHref}" class="btn-call-burgundy phone-link" style="flex:1;">
                 ${I18N[state.lang].btnCallForPrice}: ${DATA.brand.phonePrimary}
               </a>`
        }
      </div>
    `;

    const addBtn = document.getElementById("modalAddDishBtn");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        addProductToCart(product.id, 1);
        modal.classList.remove("open");
      });
    }

    modal.classList.add("open");
  }

  // ==========================================================================
  // 7. B2B / CONSTRUCTION GROUP CALCULATOR (10–15+ OBIADÓW)
  // ==========================================================================

  function renderB2bCalculator() {
    const pillsWrap = document.getElementById("b2bPresetPills");
    const pkgLabel = document.getElementById("b2bCalcPackageLabel");
    const totalEl = document.getElementById("b2bCalcTotal");
    if (!pillsWrap || !pkgLabel || !totalEl) return;

    const unitWord = state.lang === "pl" ? "obiadów" : "обідів";
    const qtys = [8, 10, 12, 15, 20];

    pillsWrap.innerHTML = qtys
      .map((q) => {
        const isAct = q === state.b2bQty;
        return `
          <button type="button" class="b2b-qty-pill ${isAct ? "active" : ""}" data-b2b-qty="${q}">
            ${q} ${unitWord}
          </button>
        `;
      })
      .join("");

    pillsWrap.querySelectorAll("[data-b2b-qty]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.b2bQty = parseInt(btn.getAttribute("data-b2b-qty"), 10);
        renderB2bCalculator();
      });
    });

    const totalZl = state.b2bQty * 33;
    pkgLabel.textContent =
      state.lang === "pl"
        ? `Pakiet ${state.b2bQty} × Lunch Dnia (4 dania w zestawie)`
        : `Пакет ${state.b2bQty} × Комплексний Ланч Дня (4 страви)`;
    totalEl.textContent = `${totalZl} zł`;
  }

  // ==========================================================================
  // 8. CART & GUEST CHECKOUT ENGINE (PERSISTED ACROSS ALL PAGES)
  // ==========================================================================

  function checkBranchActiveForOrder() {
    const branch = getActiveBranch();
    if (branch.status !== "ACTIVE") {
      const msg =
        state.lang === "pl"
          ? `Lokal „${branch.name.pl}” ma status „Wkrótce otwarcie”. Przełącz na aktywny lokal Smakota Ursus, aby złożyć zamówienie (TC-04).`
          : `Локал «${branch.name.uk}» має статус «Скоро відкриття». Перемкніться на активний локал Смакота Урсус для оформлення замовлення (TC-04).`;
      showToast(msg);
      return false;
    }
    return true;
  }

  function addProductToCart(productId, quantity = 1) {
    if (!checkBranchActiveForOrder()) return;

    const product = DATA.products.find((p) => p.id === productId);
    if (!product || !product.available || product.sourceStatus === "price_pending") {
      return;
    }

    const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
    const selectedVarId =
      state.selectedVariants[product.id] ||
      (hasVariants ? product.variants[0].id : null);
    const activeVariant = hasVariants
      ? product.variants.find((v) => v.id === selectedVarId) || product.variants[0]
      : null;

    const cartKey = activeVariant ? `${product.id}__${activeVariant.id}` : product.id;
    const unitPriceGrosze = activeVariant ? activeVariant.priceGrosze : product.priceGrosze;

    const existing = state.cart.items.find((item) => item.cartKey === cartKey);
    if (existing) {
      existing.quantity += quantity;
    } else {
      state.cart.items.push({
        cartKey,
        productId: product.id,
        name: {
          pl: activeVariant
            ? `${product.name.pl} (${activeVariant.label.pl})`
            : product.name.pl,
          uk: activeVariant
            ? `${product.name.uk} (${activeVariant.label.uk})`
            : product.name.uk
        },
        unitPriceGrosze,
        quantity
      });
    }

    state.lastSubmittedOrder = null;
    savePersistedState();
    updateCartBadges();
    const addedName = product.name[state.lang];
    showToast(
      state.lang === "pl"
        ? `Dodano do koszyka: ${addedName}`
        : `Додано в кошик: ${addedName}`
    );
  }

  function addLunchComboToCart(qty = 1) {
    if (!checkBranchActiveForOrder()) return;

    const combo = DATA.lunchCombo;
    const chosenSoup = combo.soups.find((x) => x.id === state.lunchSelection.soup) || combo.soups[0];
    const chosenMeat = combo.meats.find((x) => x.id === state.lunchSelection.meat) || combo.meats[0];
    const chosenSide = combo.sides.find((x) => x.id === state.lunchSelection.side) || combo.sides[0];
    const chosenSalad = combo.salads.find((x) => x.id === state.lunchSelection.salad) || combo.salads[0];

    const cartKey = `lunch__${chosenSoup.id}_${chosenMeat.id}_${chosenSide.id}_${chosenSalad.id}`;
    const existing = state.cart.items.find((item) => item.cartKey === cartKey);

    if (existing) {
      existing.quantity += qty;
    } else {
      state.cart.items.push({
        cartKey,
        productId: combo.id,
        name: {
          pl: `Lunch Dnia 33 zł (${chosenSoup.pl}, ${chosenMeat.pl}, ${chosenSide.pl}, ${chosenSalad.pl})`,
          uk: `Ланч Дня 33 zł (${chosenSoup.uk}, ${chosenMeat.uk}, ${chosenSide.uk}, ${chosenSalad.uk})`
        },
        unitPriceGrosze: combo.priceGrosze,
        quantity: qty
      });
    }

    state.lastSubmittedOrder = null;
    savePersistedState();
    updateCartBadges();
    showToast(
      state.lang === "pl"
        ? `Dodano ${qty} × Lunch Dnia (33 zł) do koszyka`
        : `Додано ${qty} × Ланч Дня (33 zł) у кошик`
    );
  }

  function updateCartItemQty(cartKey, delta) {
    const idx = state.cart.items.findIndex((i) => i.cartKey === cartKey);
    if (idx === -1) return;
    state.cart.items[idx].quantity += delta;
    if (state.cart.items[idx].quantity <= 0) {
      state.cart.items.splice(idx, 1);
    }
    savePersistedState();
    updateCartBadges();
    renderCartDrawer();
    renderCheckoutPage();
  }

  function getCartTotals() {
    const totalCount = state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotalGrosze = state.cart.items.reduce(
      (acc, item) => acc + item.unitPriceGrosze * item.quantity,
      0
    );
    return { totalCount, subtotalGrosze };
  }

  function updateCartBadges() {
    const { totalCount } = getCartTotals();
    const headerCount = document.getElementById("headerCartCount");
    const mobileCount = document.getElementById("mobileCartCount");
    if (headerCount) headerCount.textContent = String(totalCount);
    if (mobileCount) mobileCount.textContent = String(totalCount);
  }

  function getCartItemThumb(item) {
    if (!item) return "img/hero-main.webp";
    if (item.productId === "lunch-dnia-33") {
      return "img/lunch-combo.webp";
    }
    const prod = DATA.products.find((p) => p.id === item.productId);
    if (prod && prod.image) {
      return prod.image;
    }
    const categoryFallback = {
      zupa: "img/clean/barszcz.webp",
      pierogi: "img/clean/pierogi-ziemniaki.webp",
      pielmieni: "img/clean/pielmieni.webp",
      czebureki: "img/clean/czebureki.webp",
      chinkali: "img/clean/chinkali-mieso.webp",
      nalesniki: "img/clean/racuchy.webp",
      "dania-miesne": "img/clean/zeberka.webp",
      salatki: "img/clean/kopytka.webp",
      "dodatki-obiadowe": "img/clean/placki.webp",
      surowki: "img/clean/kalafior.webp",
      "sosy-napoje": "img/hero-borscht.webp"
    };
    return (prod && categoryFallback[prod.categoryId]) || "img/hero-main.webp";
  }

  function splitCheckoutItemTitle(item, lang) {
    const rawName = (item.name && item.name[lang]) || "";
    const defaultMeta = lang === "pl" ? "1 porcja" : "1 порція";

    if (item.productId === "lunch-dnia-33") {
      const parenMatch = rawName.match(/^[^(]+\((.+)\)$/);
      return {
        title: lang === "pl" ? "Lunch Dnia · Zestaw 4 dań" : "Ланч Дня · Комплекс 4 страви",
        meta: parenMatch ? parenMatch[1].trim() : defaultMeta
      };
    }

    const match = rawName.match(/^(.+?)\s*\(([^)]+)\)$/);
    if (match) {
      return {
        title: match[1].trim(),
        meta: match[2].trim()
      };
    }

    return {
      title: rawName,
      meta: defaultMeta
    };
  }

  function renderCartDrawer() {
    const bodyEl = document.getElementById("cartDrawerBody");
    const footerEl = document.getElementById("cartDrawerFooter");
    if (!bodyEl || !footerEl) return;

    const branch = getActiveBranch();
    const { totalCount, subtotalGrosze } = getCartTotals();

    if (state.lastSubmittedOrder && totalCount === 0) {
      const ord = state.lastSubmittedOrder;
      bodyEl.innerHTML = `
        <div style="background:var(--accent-dill-bg);border:1px solid var(--accent-dill);border-radius:var(--radius-card);padding:20px;">
          <div style="font-weight:900;color:var(--accent-dill);font-size:1.1rem;margin-bottom:6px;">
            ${state.lang === "pl" ? "Zamówienie demonstracyjne przyjęte!" : "Демонстраційне замовлення прийнято!"}
          </div>
          <div style="font-size:0.9rem;color:var(--ink-primary);margin-bottom:12px;">
            ${state.lang === "pl" ? "Numer zamówienia:" : "Номер замовлення:"} <strong class="tabular-nums">#${escapeHtml(ord.id)}</strong>
          </div>
          <div style="font-size:0.86rem;color:var(--ink-secondary);display:flex;flex-direction:column;gap:4px;">
            <div><strong>${state.lang === "pl" ? "Lokal:" : "Локал:"}</strong> ${escapeHtml(branch.name[state.lang])}</div>
            <div><strong>${state.lang === "pl" ? "Odbiór:" : "Отримання:"}</strong> ${ord.fulfillmentType === "PICKUP" ? I18N[state.lang].fulfillmentPickup : I18N[state.lang].fulfillmentDelivery}</div>
            <div><strong>${state.lang === "pl" ? "Klient:" : "Клієнт:"}</strong> ${escapeHtml(ord.customerName)} (${escapeHtml(ord.phone)})</div>
            <div><strong>${state.lang === "pl" ? "Suma:" : "Сума:"}</strong> ${formatPln(ord.totalGrosze, true)}</div>
            <div><strong>Status:</strong> NEW → ACCEPTED (Panel Admin DEMO)</div>
          </div>
        </div>
      `;
      footerEl.innerHTML = `
        <button type="button" class="btn-secondary-outline" style="width:100%;" id="newOrderResetBtn">
          ${state.lang === "pl" ? "Zamknij potwierdzenie" : "Закрити підтвердження"}
        </button>
      `;
      document.getElementById("newOrderResetBtn").addEventListener("click", () => {
        state.lastSubmittedOrder = null;
        document.getElementById("cartDrawerBackdrop")?.classList.remove("open");
        renderCartDrawer();
        renderCheckoutPage();
      });
      return;
    }

    if (totalCount === 0) {
      bodyEl.innerHTML = `
        <div style="text-align:center;padding:36px 12px;color:var(--ink-secondary);">
          <p style="font-weight:800;font-size:1.05rem;color:var(--ink-burgundy);margin-bottom:8px;">
            ${state.lang === "pl" ? "Twój koszyk jest pusty" : "Ваш кошик порожній"}
          </p>
          <p style="font-size:0.9rem;margin-bottom:18px;">
            ${
              state.lang === "pl"
                ? "Dodaj ulubione pierogi, barszcz ukraiński, czebureki lub skomponuj Lunch Dnia za 33 zł."
                : "Додайте вареники, український борщ, чебуреки або зберіть комплексний Ланч за 33 zł."
            }
          </p>
          <a href="menu.html" class="btn-primary" style="display:inline-flex;">
            ${state.lang === "pl" ? "Przejdź do pełnego menu" : "Перейти до повного меню"}
          </a>
        </div>
      `;
      footerEl.innerHTML = `
        <a href="${branch.phoneHref || DATA.brand.phoneHref}" class="btn-call-burgundy phone-link" style="width:100%;">
          ${state.lang === "pl" ? "Zadzwoń i zamów:" : "Подзвонити і замовити:"} ${branch.phone || DATA.brand.phonePrimary}
        </a>
      `;
      return;
    }

    const itemsHtml = state.cart.items
      .map((item) => {
        const thumbSrc = getCartItemThumb(item);
        const itemTitle = item.name[state.lang] || "";
        return `
          <div class="cart-item-row">
            <img src="${thumbSrc}" alt="${escapeHtml(itemTitle)}" class="cart-item-thumb" width="58" height="48" />
            <div style="flex:1;min-width:0;">
              <div style="font-weight:800;font-size:0.9rem;color:var(--ink-burgundy);line-height:1.25;margin-bottom:2px;">${escapeHtml(itemTitle)}</div>
              <div class="tabular-nums cart-item-price-line">
                <span style="white-space:nowrap;">${formatPln(item.unitPriceGrosze, true)} × ${item.quantity} =</span>
                <strong style="white-space:nowrap;color:var(--ink-burgundy);">${formatPln(item.unitPriceGrosze * item.quantity, true)}</strong>
              </div>
            </div>
            <div class="qty-controls">
              <button type="button" class="qty-btn" data-cart-key="${escapeHtml(item.cartKey)}" data-delta="-1" aria-label="Zmniejsz ilość">−</button>
              <span class="tabular-nums" style="font-weight:800;min-width:20px;text-align:center;">${item.quantity}</span>
              <button type="button" class="qty-btn" data-cart-key="${escapeHtml(item.cartKey)}" data-delta="1" aria-label="Zwiększ ilość">+</button>
            </div>
          </div>
        `;
      })
      .join("");

    bodyEl.innerHTML = `
      <div style="background:var(--bg-parchment-deep);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:12px 14px;font-size:0.84rem;">
        <div><strong>${state.lang === "pl" ? "Wybrany lokal:" : "Обраний локал:"}</strong> ${escapeHtml(branch.name[state.lang])}</div>
        <div>${escapeHtml(branch.address)}</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;">
        ${itemsHtml}
      </div>
    `;

    footerEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px;">
        <span style="font-weight:700;color:var(--ink-secondary);">
          ${state.lang === "pl" ? "Suma częściowa (PLN):" : "Разом (PLN):"}
        </span>
        <strong class="tabular-nums" style="font-family:var(--font-stamp-display);font-size:1.45rem;color:var(--ink-burgundy);">
          ${formatPln(subtotalGrosze, true)}
        </strong>
      </div>
      <a href="checkout.html" class="btn-primary" style="width:100%;" id="goToCheckoutBtn">
        <span>${state.lang === "pl" ? "Przejdź do zamówienia" : "Оформити замовлення"}</span>
        <span aria-hidden="true">→</span>
      </a>
      <button type="button" class="btn-secondary-outline" style="width:100%;margin-top:8px;padding:10px 16px;" id="continueShoppingBtn">
        ${state.lang === "pl" ? "Kontynuuj zakupy" : "Продовжити покупки"}
      </button>
    `;

    bodyEl.querySelectorAll("[data-cart-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-cart-key");
        const delta = parseInt(btn.getAttribute("data-delta"), 10);
        updateCartItemQty(key, delta);
      });
    });

    const goToCheckoutBtn = document.getElementById("goToCheckoutBtn");
    if (goToCheckoutBtn) {
      goToCheckoutBtn.addEventListener("click", (e) => {
        if (!checkBranchActiveForOrder()) {
          e.preventDefault();
        }
      });
    }

    const continueBtn = document.getElementById("continueShoppingBtn");
    if (continueBtn) {
      continueBtn.addEventListener("click", () => {
        document.getElementById("cartDrawerBackdrop")?.classList.remove("open");
      });
    }
  }

  function renderCheckoutPage() {
    const root = document.getElementById("checkoutContentRoot");
    if (!root) return;

    const branch = getActiveBranch();
    const { totalCount, subtotalGrosze } = getCartTotals();
    const isPl = state.lang === "pl";
    const draft = state.checkoutDraft;

    if (state.lastSubmittedOrder && totalCount === 0) {
      const ord = state.lastSubmittedOrder;
      const isPickup = ord.fulfillmentType === "PICKUP";
      const payLabel =
        ord.paymentMethod === "BLIK_DEMO"
          ? (isPl ? "BLIK / Płatność online (DEMO)" : "Оплата онлайн (BLIK · DEMO)")
          : (isPl ? "Płatność przy odbiorze (gotówka / karta)" : "Оплата при отриманні (готівка / картка)");

      root.innerHTML = `
        <div class="co-status-card">
          <div class="co-status-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <h2 class="co-card-title" style="font-size:1.7rem;margin-bottom:8px;">
            ${isPl ? "Zamówienie zostało przyjęte (DEMO)!" : "Замовлення прийнято (DEMO)!"}
          </h2>
          <p style="font-size:0.96rem;color:var(--ink-secondary);max-width:46ch;margin:0 auto;">
            ${
              isPl
                ? `Dziękujemy! Numer Twojego zamówienia to <strong class="tabular-nums" style="color:var(--ink-burgundy);">#${escapeHtml(ord.id)}</strong>. Lokal otrzymał zgłoszenie.`
                : `Дякуємо! Номер вашого замовлення: <strong class="tabular-nums" style="color:var(--ink-burgundy);">#${escapeHtml(ord.id)}</strong>. Локал отримав заявку.`
            }
          </p>

          <div class="co-status-details">
            <div><strong>${isPl ? "Lokal:" : "Локал:"}</strong> ${escapeHtml(branch.name[state.lang])}</div>
            <div><strong>${isPl ? "Sposób odbioru:" : "Спосіб отримання:"}</strong> ${isPickup ? (isPl ? "Odbiór osobisty (0,00 zł)" : "Самовивіз (0,00 zł)") : (isPl ? "Dostawa kurierem" : "Доставка кур'єром")}</div>
            <div><strong>${isPl ? "Adres / punkt:" : "Адреса / локал:"}</strong> ${escapeHtml(ord.address)}</div>
            <div><strong>${isPl ? "Klient:" : "Клієнт:"}</strong> ${escapeHtml(ord.customerName)} · ${escapeHtml(ord.phone)}</div>
            <div><strong>${isPl ? "Płatność:" : "Оплата:"}</strong> ${escapeHtml(payLabel)}</div>
            <div><strong>${isPl ? "Dania:" : "Страви:"}</strong> ${escapeHtml(ord.itemsSummary)}</div>
            <div><strong>${isPl ? "Do zapłaty (dania):" : "До сплати (страви):"}</strong> <span class="tabular-nums" style="color:var(--ink-burgundy);font-weight:800;">${formatPln(ord.totalGrosze, true)}</span>${!isPickup ? (isPl ? " (+ koszt dostawy wg taryfy)" : " (+ вартість доставки за тарифом)") : ""}</div>
          </div>

          <div class="co-status-actions">
            <a href="menu.html" class="btn-primary">${isPl ? "Wróć do menu →" : "Повернутися до меню →"}</a>
            <button type="button" class="btn-secondary-outline" id="coClearOrderStatusBtn">${isPl ? "Nowe zamówienie" : "Нове замовлення"}</button>
          </div>
        </div>
      `;

      document.getElementById("coClearOrderStatusBtn")?.addEventListener("click", () => {
        state.lastSubmittedOrder = null;
        renderCheckoutPage();
      });
      return;
    }

    if (totalCount === 0) {
      root.innerHTML = `
        <div class="co-status-card">
          <div class="co-status-icon co-status-icon--empty" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <h2 class="co-card-title" style="font-size:1.6rem;margin-bottom:8px;">
            ${isPl ? "Twój koszyk jest pusty" : "Ваш кошик порожній"}
          </h2>
          <p style="font-size:0.95rem;color:var(--ink-secondary);max-width:44ch;margin:0 auto 24px;">
            ${
              isPl
                ? "Wybierz domowe pierogi, barszcz ukraiński, czebureki lub Lunch Dnia za 33 zł z naszej karty menu, aby przejść do zamówienia."
                : "Додайте домашні вареники, український борщ, чебуреки чи Ланч Дня за 33 zł з нашого меню, щоб оформити замовлення."
            }
          </p>
          <div class="co-status-actions">
            <a href="menu.html" class="btn-primary">${isPl ? "Przejdź do menu →" : "Перейти до меню →"}</a>
            <a href="index.html#lunch-builder" class="btn-secondary-outline">${isPl ? "Lunch Dnia (33 zł)" : "Ланч Дня (33 zł)"}</a>
          </div>
        </div>
      `;
      return;
    }

    const itemsHtml = state.cart.items
      .map((item) => {
        const thumbSrc = getCartItemThumb(item);
        const { title, meta } = splitCheckoutItemTitle(item, state.lang);
        return `
          <div class="co-item-row">
            <img src="${thumbSrc}" alt="${escapeHtml(title)}" class="co-item-thumb" width="78" height="62" />
            <div class="co-item-info">
              <div class="co-item-title">${escapeHtml(title)}</div>
              <div class="co-item-meta">${escapeHtml(meta)}</div>
              <div class="co-qty-pill">
                <button type="button" class="co-qty-btn" data-cart-key="${escapeHtml(item.cartKey)}" data-delta="-1" aria-label="Zmniejsz ilość">−</button>
                <span class="co-qty-val tabular-nums">${item.quantity}</span>
                <button type="button" class="co-qty-btn" data-cart-key="${escapeHtml(item.cartKey)}" data-delta="1" aria-label="Zwiększ ilość">+</button>
              </div>
            </div>
            <div class="co-item-price tabular-nums">${formatPln(item.unitPriceGrosze * item.quantity, true)}</div>
          </div>
        `;
      })
      .join("");

    const isDelivery = state.fulfillmentType === "DELIVERY";
    const fulfillmentDetailsHtml = isDelivery
      ? `
        <div class="co-addr-grid">
          <div class="co-input-wrap">
            <span class="co-input-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <input type="text" id="coAddress" class="co-input co-input--icon" value="${escapeHtml(draft.address)}" placeholder="${isPl ? "Adres dostawy *" : "Адреса доставки *"}" />
          </div>
          <div class="co-input-wrap">
            <input type="text" id="coApartment" class="co-input" value="${escapeHtml(draft.apartment)}" placeholder="${isPl ? "Mieszkanie / biuro" : "Квартира / офіс"}" />
          </div>
        </div>
      `
      : `
        <div class="co-pickup-box">
          <div class="co-pickup-info">
            <div class="co-pickup-name">${escapeHtml(branch.name[state.lang])}</div>
            <div>${escapeHtml(branch.address)} · ${escapeHtml(branch.hours[state.lang])}</div>
            <div>${isPl ? "Gotowe do odbioru na miejscu bez kosztów dostawy." : "Приготуємо до самовивозу без додаткової оплати."}</div>
          </div>
          <a href="locations.html" class="co-pickup-link">${isPl ? "Sprawdź lokal →" : "Деталі локалу →"}</a>
        </div>
      `;

    const deliveryFeeText = isDelivery
      ? (isPl ? "Wg taryfy (DEMO)" : "За тарифом (DEMO)")
      : "0,00 zł";

    root.innerHTML = `
      <div class="co-layout-grid">
        <div class="co-left-col">
          <!-- Card 1: Dane kontaktowe -->
          <section class="co-card" aria-labelledby="coContactHeading">
            <h2 class="co-card-title" id="coContactHeading">${isPl ? "Dane kontaktowe" : "Контактні дані"}</h2>
            <div class="co-input-grid-2">
              <div class="co-input-wrap">
                <span class="co-input-icon" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <input type="text" id="coName" class="co-input co-input--icon" required value="${escapeHtml(draft.name)}" placeholder="${isPl ? "Imię *" : "Ваше ім'я *"}" />
              </div>
              <div class="co-input-wrap">
                <span class="co-input-icon" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <input type="tel" id="coPhone" class="co-input co-input--icon" required value="${escapeHtml(draft.phone)}" placeholder="${isPl ? "Numer telefonu *" : "Номер телефону *"}" />
              </div>
            </div>
            <div class="co-input-wrap">
              <span class="co-input-icon" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <input type="email" id="coEmail" class="co-input co-input--icon" value="${escapeHtml(draft.email)}" placeholder="${isPl ? "E-mail (opcjonalnie)" : "E-mail (необов'язково)"}" />
            </div>
          </section>

          <!-- Card 2: Sposób odbioru -->
          <section class="co-card" aria-labelledby="coFulfillmentHeading">
            <h2 class="co-card-title" id="coFulfillmentHeading">${isPl ? "Sposób odbioru" : "Спосіб отримання"}</h2>
            <div class="co-fulfillment-grid" role="radiogroup" aria-label="${isPl ? "Sposób odbioru" : "Спосіб отримання"}">
              <button type="button" class="co-choice-card ${isDelivery ? "active" : ""}" data-co-fulfillment="DELIVERY" role="radio" aria-checked="${isDelivery}">
                <span class="co-radio-dot" aria-hidden="true"></span>
                <span class="co-choice-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="2.5"/><circle cx="5.5" cy="17.5" r="2.5"/><path d="M8 17.5h7"/><path d="M15 6h3l2 5.5v4"/><path d="M12 6H9l-1 5H4.5L3 14.5"/><path d="M13 11h5"/></svg>
                </span>
                <span class="co-choice-text">
                  <span class="co-choice-title">${isPl ? "Dostawa" : "Доставка"}</span>
                  <span class="co-choice-sub">${isPl ? "Dowieziemy pod wskazany adres" : "Привеземо замовлення за вашою адресою"}</span>
                </span>
              </button>

              <button type="button" class="co-choice-card ${!isDelivery ? "active" : ""}" data-co-fulfillment="PICKUP" role="radio" aria-checked="${!isDelivery}">
                <span class="co-radio-dot" aria-hidden="true"></span>
                <span class="co-choice-icon" aria-hidden="true">
                  <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </span>
                <span class="co-choice-text">
                  <span class="co-choice-title">${isPl ? "Odbiór osobisty" : "Самовивіз"}</span>
                  <span class="co-choice-sub">${isPl ? "Odbierz w wybranym lokalu (0,00 zł)" : "Заберіть у зручному для вас локалі (0,00 zł)"}</span>
                </span>
              </button>
            </div>

            ${fulfillmentDetailsHtml}

            <div class="co-notes-row">
              <input type="text" id="coNotes" class="co-input" maxlength="250" value="${escapeHtml(draft.notes)}" placeholder="${isPl ? "Komentarz dla kuchni lub kuriera (opcjonalnie)" : "Коментар для кухні або кур'єра (необов'язково)"}" />
            </div>
          </section>

          <!-- Card 3: Płatność -->
          <section class="co-card" aria-labelledby="coPaymentHeading">
            <h2 class="co-card-title" id="coPaymentHeading">${isPl ? "Płatność" : "Оплата"}</h2>
            <div class="co-payment-list" role="radiogroup" aria-label="${isPl ? "Płatność" : "Оплата"}">
              <button type="button" class="co-payment-row ${state.paymentMethod === "BLIK_DEMO" ? "active" : ""}" data-co-payment="BLIK_DEMO" role="radio" aria-checked="${state.paymentMethod === "BLIK_DEMO"}">
                <span class="co-radio-dot" aria-hidden="true"></span>
                <span class="co-choice-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                </span>
                <span class="co-payment-label">${isPl ? "BLIK / Płatność online (DEMO)" : "Оплата онлайн (BLIK · DEMO)"}</span>
              </button>

              <button type="button" class="co-payment-row ${state.paymentMethod === "AT_PICKUP" ? "active" : ""}" data-co-payment="AT_PICKUP" role="radio" aria-checked="${state.paymentMethod === "AT_PICKUP"}">
                <span class="co-radio-dot" aria-hidden="true"></span>
                <span class="co-choice-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                </span>
                <span class="co-payment-label">${isPl ? "Płatność przy odbiorze (gotówka / karta)" : "Оплата при отриманні (готівка / картка)"}</span>
              </button>
            </div>
          </section>
        </div>

        <!-- Right Sticky Column: Twoje zamówienie -->
        <aside class="co-summary-card" aria-labelledby="coSummaryHeading">
          <div class="co-summary-head">
            <h2 class="co-card-title" id="coSummaryHeading">${isPl ? `Twoje zamówienie (${totalCount})` : `Ваше замовлення (${totalCount})`}</h2>
            <a href="menu.html" class="co-change-link">${isPl ? "Zmień" : "Змінити"}</a>
          </div>

          <div class="co-items-list">
            ${itemsHtml}
          </div>

          <div class="co-divider"></div>

          <div class="co-totals-block">
            <div class="co-total-row">
              <span>${isPl ? "Razem" : "Разом"}</span>
              <strong class="tabular-nums">${formatPln(subtotalGrosze, true)}</strong>
            </div>
            <div class="co-total-row">
              <span>${isPl ? "Dostawa" : "Доставка"}</span>
              <span class="co-total-fee-note tabular-nums">${deliveryFeeText}</span>
            </div>
          </div>

          <div class="co-divider"></div>

          <div class="co-grand-row">
            <span class="co-grand-label">${isPl ? "Do zapłaty" : "До сплати"}</span>
            <span class="co-grand-val tabular-nums">${formatPln(subtotalGrosze, true)}</span>
          </div>
          ${
            isDelivery
              ? `<div class="co-delivery-disclaimer">${isPl ? "+ koszt dostawy wg taryfy kuriera (DEMO)" : "+ вартість доставки уточнюється (DEMO)"}</div>`
              : ""
          }

          <div class="co-field-error" id="coFormError" style="display:none;" role="alert"></div>

          <button type="button" class="co-submit-btn" id="coSubmitOrderBtn">
            <span>${isPl ? "Złóż zamówienie" : "Оформити замовлення"}</span>
            <span aria-hidden="true">→</span>
          </button>
        </aside>
      </div>
    `;

    const draftInputs = [
      ["coName", "name"],
      ["coPhone", "phone"],
      ["coEmail", "email"],
      ["coAddress", "address"],
      ["coApartment", "apartment"],
      ["coNotes", "notes"]
    ];
    draftInputs.forEach(([elId, field]) => {
      const el = document.getElementById(elId);
      if (el) {
        el.addEventListener("input", (e) => {
          state.checkoutDraft[field] = e.target.value;
          el.classList.remove("is-invalid");
          const errEl = document.getElementById("coFormError");
          if (errEl) errEl.style.display = "none";
        });
      }
    });

    root.querySelectorAll("[data-co-fulfillment]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextType = btn.getAttribute("data-co-fulfillment");
        if (nextType === "DELIVERY" || nextType === "PICKUP") {
          state.fulfillmentType = nextType;
          savePersistedState();
          renderBranchContext();
          renderCheckoutPage();
        }
      });
    });

    root.querySelectorAll("[data-co-payment]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextMethod = btn.getAttribute("data-co-payment");
        if (nextMethod === "BLIK_DEMO" || nextMethod === "AT_PICKUP") {
          state.paymentMethod = nextMethod;
          savePersistedState();
          renderCheckoutPage();
        }
      });
    });

    root.querySelectorAll("[data-cart-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-cart-key");
        const delta = parseInt(btn.getAttribute("data-delta"), 10);
        updateCartItemQty(key, delta);
      });
    });

    const submitBtn = document.getElementById("coSubmitOrderBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        if (state.isSubmittingOrder) return;
        if (!checkBranchActiveForOrder()) return;

        const nameEl = document.getElementById("coName");
        const phoneEl = document.getElementById("coPhone");
        const emailEl = document.getElementById("coEmail");
        const addrEl = document.getElementById("coAddress");
        const errEl = document.getElementById("coFormError");

        const showFormError = (msg, targetEl) => {
          if (errEl) {
            errEl.textContent = msg;
            errEl.style.display = "block";
          }
          if (targetEl) {
            targetEl.classList.add("is-invalid");
            targetEl.focus();
          }
        };

        const nameVal = (state.checkoutDraft.name || "").trim();
        const phoneVal = (state.checkoutDraft.phone || "").trim();
        const emailVal = (state.checkoutDraft.email || "").trim();
        const addrVal = (state.checkoutDraft.address || "").trim();
        const aptVal = (state.checkoutDraft.apartment || "").trim();
        const notesVal = (state.checkoutDraft.notes || "").trim();

        if (!nameVal) {
          showFormError(
            isPl ? "Podaj swoje imię przed złożeniem zamówienia." : "Вкажіть ваше ім'я перед оформленням замовлення.",
            nameEl
          );
          return;
        }

        const digitsOnly = phoneVal.replace(/\D/g, "");
        if (digitsOnly.length < 9) {
          showFormError(
            isPl
              ? "Podaj poprawny numer telefonu (min. 9 cyfr): wymagane przed wysłaniem (TC-14)."
              : "Вкажіть коректний номер телефону (мін. 9 цифр): обов'язкове поле (TC-14).",
            phoneEl
          );
          return;
        }

        if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
          showFormError(
            isPl ? "Podaj poprawny adres e-mail lub pozostaw pole puste." : "Вкажіть коректний e-mail або залиште поле порожнім.",
            emailEl
          );
          return;
        }

        if (state.fulfillmentType === "DELIVERY" && addrVal.length < 5) {
          showFormError(
            isPl ? "Podaj dokładny adres dostawy dla kuriera." : "Вкажіть точну адресу доставки для кур'єра.",
            addrEl
          );
          return;
        }

        state.isSubmittingOrder = true;
        const orderId = `SMK-${1042 + state.orders.length}`;
        const summaryStr = state.cart.items
          .map((i) => `${i.quantity}× ${i.name[state.lang]}`)
          .join(", ");
        const fullAddress = aptVal ? `${addrVal}, ${aptVal}` : addrVal;

        const newOrder = {
          id: orderId,
          branchId: state.selectedBranchId,
          customerName: nameVal,
          phone: phoneVal,
          email: emailVal,
          fulfillmentType: state.fulfillmentType,
          address: state.fulfillmentType === "DELIVERY" ? fullAddress : "Odbiór w lokalu",
          notes: notesVal,
          status: "NEW",
          paymentMethod: state.paymentMethod,
          totalGrosze: subtotalGrosze,
          createdAt: new Date().toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Warsaw"
          }) + " (Europe/Warsaw)",
          itemsSummary: summaryStr
        };

        state.orders.unshift(newOrder);
        state.lastSubmittedOrder = newOrder;
        state.cart.items = [];
        state.checkoutDraft.notes = "";
        state.isSubmittingOrder = false;

        savePersistedState();
        updateCartBadges();
        renderCartDrawer();
        renderCheckoutPage();
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast(
          isPl
            ? `Zamówienie #${orderId} przekazane do lokalu!`
            : `Замовлення #${orderId} передано в локал!`
        );
      });
    }
  }

  // ==========================================================================
  // 9. LOCATIONS & DELIVERY ZONE CHECKER + INTERACTIVE WARSAW MAP
  // ==========================================================================

  let locationsMap = null;
  const locationsMarkers = {};
  const BRANCH_COORDS = {
    "branch-ursus": { coords: [52.194743, 20.8741982], zoom: 13 },
    "branch-2": { coords: [52.1645, 21.0235], zoom: 13 },
    "branch-3": { coords: [52.205, 20.955], zoom: 11 }
  };

  function focusLocationsMapBranch(branchId) {
    if (!locationsMap) return;
    const target = BRANCH_COORDS[branchId];
    if (target) {
      locationsMap.flyTo(target.coords, target.zoom, { duration: 0.65 });
    }
    const marker = locationsMarkers[branchId];
    if (marker) {
      marker.openPopup();
    }
  }

  function renderLocationsSection() {
    const grid = document.getElementById("branchesCardsGrid");
    if (!grid) return;

    const branchThumbs = {
      "branch-ursus": "img/hero-main.webp",
      "branch-2": "img/menu-hero-varenyky.webp",
      "branch-3": "img/clean/pielmieni.webp"
    };

    const branchShortTitles = {
      "branch-ursus": { pl: "SMAKOTA Ursus", uk: "SMAKOTA Урсус" },
      "branch-2": { pl: "SMAKOTA Lokal #2", uk: "SMAKOTA Локал №2" },
      "branch-3": { pl: "SMAKOTA Lokal #3", uk: "SMAKOTA Локал №3" }
    };

    const branchCleanAddr = {
      "branch-ursus": {
        pl: "ul. Stanisława Wojciechowskiego 33 / lok. 40 (44), 02-495 Warszawa",
        uk: "ul. Stanisława Wojciechowskiego 33 / lok. 40 (44), 02-495 Warszawa"
      },
      "branch-2": {
        pl: "Warszawa — otwarcie wkrótce (Mokotów, adres do potwierdzenia)",
        uk: "Варшава — скоро відкриття (Мокотув, адреса уточнюється)"
      },
      "branch-3": {
        pl: "Warszawa — planowany punkt sieci (architektura 3–5 lokali)",
        uk: "Варшава — планована точка мережі (архітектура 3–5 локалів)"
      }
    };

    const pinSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
    const phoneSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
    const clockSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const arrowSvg = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

    grid.innerHTML = DATA.branches
      .map((b) => {
        const isSelected = b.id === state.selectedBranchId;
        const isActive = b.status === "ACTIVE";
        const thumb = branchThumbs[b.id] || "img/clean/czebureki.webp";
        const displayTitle = branchShortTitles[b.id]?.[state.lang] || b.name[state.lang];
        const displayAddr = branchCleanAddr[b.id]?.[state.lang] || b.address;

        let pillBadge = "";
        if (isActive) {
          pillBadge = `<span class="l1-branch-pill-badge active">${state.lang === "pl" ? "Aktywny" : "Активний"}</span>`;
        } else if (b.status === "OPENING_SOON") {
          pillBadge = `<span class="l1-branch-pill-badge soon">${state.lang === "pl" ? "Wkrótce" : "Скоро"}</span>`;
        } else {
          pillBadge = `<span class="l1-branch-pill-badge planned">${state.lang === "pl" ? "Planowany" : "Планується"}</span>`;
        }

        const secondRow = b.phone
          ? `<div class="l1-branch-meta-row">
               ${phoneSvg}
               <span><a href="${b.phoneHref}" class="phone-link l1-branch-phone">${b.phone}</a> · ${b.hours[state.lang]}</span>
             </div>`
          : `<div class="l1-branch-meta-row">
               ${clockSvg}
               <span>${b.hours[state.lang]}</span>
             </div>`;

        const ctaLabel = isSelected
          ? state.lang === "pl"
            ? "Wybrany lokal ✓"
            : "Обраний локал ✓"
          : `${state.lang === "pl" ? "Wybierz lokal" : "Обрати локал"} ${arrowSvg}`;

        return `
          <article class="l1-branch-card ${isSelected ? "selected" : ""}">
            <div class="l1-branch-thumb">
              <img src="${thumb}" alt="${displayTitle}" loading="lazy" />
              ${pillBadge}
            </div>
            <div class="l1-branch-info">
              <h3 class="l1-branch-name">${displayTitle}</h3>
              <div class="l1-branch-meta-list">
                <div class="l1-branch-meta-row">
                  ${pinSvg}
                  <span>${displayAddr}</span>
                </div>
                ${secondRow}
              </div>
              <button type="button" class="l1-branch-cta ${isSelected ? "is-selected" : ""}" data-card-branch="${b.id}">
                ${ctaLabel}
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-card-branch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bid = btn.getAttribute("data-card-branch");
        selectBranch(bid);
        focusLocationsMapBranch(bid);
      });
    });
  }

  // ==========================================================================
  // 10. REVIEWS SECTION
  // ==========================================================================

  function renderReviewsSection() {
    const container = document.getElementById("reviewsListContainer");
    if (!container) return;

    const starSvg = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    container.innerHTML = DATA.reviews
      .map((r) => {
        return `
          <article class="review-card">
            <div class="review-card-top">
              <span class="review-author">${r.author}</span>
              <span class="review-source-tag">${r.source}</span>
            </div>
            <div class="review-stars" aria-label="5 na 5">${starSvg.repeat(r.rating)}</div>
            <p style="font-size:0.95rem;color:var(--ink-secondary);">${r.text[state.lang]}</p>
          </article>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // 11. AUDIT MODAL (CONTRADICTIONS BETWEEN TRANSCRIPT, ТЗ & MATERIALS)
  // ==========================================================================

  function renderAuditModal() {
    const bodyEl = document.getElementById("auditModalBody");
    if (!bodyEl) return;

    const intro =
      state.lang === "pl"
        ? "Zgodnie z instrukcją przeanalizowano specyfikację techniczną (ТЗ), transkrypcję rozmowy z właścicielem, zdjęcia karty menu oraz wizytówki Google Maps i Facebook. Poniżej zestawiono wykryte rozbieżności i pytania otwarte bez wymyślania niepotwierdzonych reguł biznesowych:"
        : "Згідно з інструкцією проаналізовано технічне завдання (ТЗ), транскрипцію дзвінка з власником, фотографії друкованого меню та профілі Google Maps і Facebook. Нижче наведено виявлені розбіжності та відкриті питання без вигадування непідтверджених бізнес-правил:";

    const itemsHtml = DATA.contradictionsAudit
      .map((item) => {
        return `
          <div style="background:var(--bg-card);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:16px 18px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              <span class="dish-stamp-mini">${item.id}</span>
              <h3 style="font-size:1.02rem;font-weight:800;color:var(--ink-burgundy);">${item.topic[state.lang]}</h3>
            </div>
            <p style="font-size:0.9rem;color:var(--ink-secondary);line-height:1.5;">${item.detail[state.lang]}</p>
          </div>
        `;
      })
      .join("");

    bodyEl.innerHTML = `
      <p style="font-size:0.94rem;color:var(--ink-secondary);margin-bottom:18px;">${intro}</p>
      ${itemsHtml}
    `;
  }

  // ==========================================================================
  // 12. DEMO ADMIN PANEL MODAL (ADM-01..08, TC-06, TC-19, TC-22)
  // ==========================================================================

  function renderAdminModal() {
    const bodyEl = document.getElementById("adminModalBody");
    if (!bodyEl) return;

    const roles = ["Owner", "Branch Manager (Ursus)", "Order Operator (Ursus)"];

    const visibleOrders = state.orders.filter((o) => {
      if (state.adminRole === "Owner") return true;
      return o.branchId === "branch-ursus";
    });

    const ordersHtml = visibleOrders
      .map((o) => {
        return `
          <div style="background:var(--bg-card);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:14px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
            <div>
              <div style="font-weight:800;color:var(--ink-burgundy);">
                #${o.id} · ${o.customerName} (${o.phone})
              </div>
              <div style="font-size:0.84rem;color:var(--ink-secondary);">
                ${o.itemsSummary} · <strong>${formatPln(o.totalGrosze, true)}</strong> · ${o.createdAt}
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <select class="form-input" data-order-status="${o.id}" style="padding:6px 10px;font-size:0.82rem;font-weight:700;">
                ${["NEW", "ACCEPTED", "PREPARING", "READY_FOR_PICKUP", "OUT_FOR_DELIVERY", "COMPLETED"].map(
                  (st) => `<option value="${st}" ${o.status === st ? "selected" : ""}>${st}</option>`
                ).join("")}
              </select>
            </div>
          </div>
        `;
      })
      .join("");

    const sampleDishes = DATA.products.slice(0, 8);
    const dishesToggleHtml = sampleDishes
      .map((p) => {
        return `
          <div style="background:var(--bg-card);border:1px solid var(--border-warm);border-radius:var(--radius-control);padding:10px 12px;display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <span style="font-weight:700;font-size:0.86rem;">${p.name[state.lang]} (${formatPln(p.priceGrosze)})</span>
            <button type="button" class="utility-btn" style="background:${p.available ? "var(--accent-dill)" : "var(--surface-burgundy)"};color:#fff;" data-toggle-prod="${p.id}">
              ${p.available ? (state.lang === "pl" ? "Dostępne (Ukryj)" : "Доступно (Сховати)") : (state.lang === "pl" ? "Ukryte (Włącz)" : "Приховано (Увімкнути)")}
            </button>
          </div>
        `;
      })
      .join("");

    bodyEl.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:20px;background:var(--bg-parchment-deep);padding:14px 16px;border-radius:var(--radius-card);">
        <div>
          <strong style="color:var(--ink-burgundy);">${state.lang === "pl" ? "Aktywna rola RBAC (ADM-07):" : "Активна роль RBAC (ADM-07):"}</strong>
          <span style="font-size:0.86rem;color:var(--ink-secondary);margin-left:6px;">${state.adminRole}</span>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${roles
            .map(
              (r) =>
                `<button type="button" class="variant-chip ${state.adminRole === r ? "active" : ""}" data-set-role="${r}">${r}</button>`
            )
            .join("")}
        </div>
      </div>

      <h3 style="font-family:var(--font-stamp-display);color:var(--ink-burgundy);margin-bottom:10px;">
        1. ${state.lang === "pl" ? "Zamówienia przypisane do lokalu (ADM-02 / TC-19)" : "Замовлення обраного локалу (ADM-02 / TC-19)"}
      </h3>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
        ${ordersHtml}
      </div>

      <h3 style="font-family:var(--font-stamp-display);color:var(--ink-burgundy);margin-bottom:10px;">
        2. ${state.lang === "pl" ? "Szybkie włączanie / wyłączanie dostępności dań (MENU-05 / TC-06)" : "Швидке перемикання доступності страв (MENU-05 / TC-06)"}
      </h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px;margin-bottom:24px;">
        ${dishesToggleHtml}
      </div>

      <h3 style="font-family:var(--font-stamp-display);color:var(--ink-burgundy);margin-bottom:10px;">
        3. ${state.lang === "pl" ? "Zarządzanie lokalami 3–5 bez zmian w kodzie (ADM-04 / TC-22)" : "Керування філіями 3–5 без зміни коду (ADM-04 / TC-22)"}
      </h3>
      <div style="background:var(--bg-card);border:1px solid var(--border-warm);border-radius:var(--radius-card);padding:16px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
        <input type="text" id="adminNewBranchName" class="form-input" style="flex:1 1 200px;" placeholder="${state.lang === "pl" ? "Nazwa nowego lokalu (np. Smakota Wola)" : "Назва нового локалу (напр. Smakota Wola)"}" />
        <input type="text" id="adminNewBranchAddr" class="form-input" style="flex:1 1 220px;" placeholder="${state.lang === "pl" ? "Adres (np. ul. Górczewska 120, Warszawa)" : "Адреса (напр. ul. Górczewska 120, Warszawa)"}" />
        <button type="button" class="btn-primary" style="padding:10px 18px;font-size:0.86rem;" id="adminAddBranchBtn">
          ${state.lang === "pl" ? "+ Dodaj lokal do sieci" : "+ Додати локал у мережу"}
        </button>
      </div>
    `;

    bodyEl.querySelectorAll("[data-set-role]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.adminRole = btn.getAttribute("data-set-role");
        renderAdminModal();
      });
    });

    bodyEl.querySelectorAll("[data-order-status]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        const ordId = sel.getAttribute("data-order-status");
        const ord = state.orders.find((o) => o.id === ordId);
        if (ord) {
          ord.status = e.target.value;
          savePersistedState();
          showToast(`Status #${ordId} → ${ord.status}`);
        }
      });
    });

    bodyEl.querySelectorAll("[data-toggle-prod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pid = btn.getAttribute("data-toggle-prod");
        const prod = DATA.products.find((p) => p.id === pid);
        if (prod) {
          prod.available = !prod.available;
          savePersistedState();
          renderAdminModal();
          renderHomeFeaturedDishes();
          renderMenuCatalog();
          showToast(`${prod.name[state.lang]}: ${prod.available ? "ON" : "OFF"}`);
        }
      });
    });

    const addBranchBtn = document.getElementById("adminAddBranchBtn");
    if (addBranchBtn) {
      addBranchBtn.addEventListener("click", () => {
        const nameVal = (document.getElementById("adminNewBranchName")?.value || "").trim();
        const addrVal = (document.getElementById("adminNewBranchAddr")?.value || "").trim();
        if (!nameVal || !addrVal) return;

        const nextNum = DATA.branches.length + 1;
        const newBranch = {
          id: `branch-${nextNum}`,
          code: `WAW-0${nextNum}`,
          slug: `warszawa-punkt-${nextNum}`,
          status: "ACTIVE",
          name: { pl: nameVal, uk: nameVal },
          address: addrVal,
          postalCode: "01-001",
          city: "Warszawa",
          district: "Nowy punkt",
          phone: "+48 576 113 316",
          phoneHref: "tel:+48576113316",
          hours: {
            pl: "Pon–Ndz: 11:00–20:00",
            uk: "Пн–Нд: 11:00–20:00"
          },
          pickupEnabled: true,
          deliveryEnabled: true,
          deliveryZones: ["Warszawa"],
          deliveryNote: {
            pl: "Lokal dodany dynamicznie z panelu administratora (TC-22).",
            uk: "Локал додано динамічно з панелі адміністратора (TC-22)."
          },
          mapUrl: "https://share.google/1MwYUzSfKmWTu60fy"
        };

        DATA.branches.push(newBranch);
        state.customBranches.push(newBranch);
        savePersistedState();
        renderBranchContext();
        renderLocationsSection();
        renderAdminModal();
        showToast(
          state.lang === "pl"
            ? `Dodano nowy lokal: ${nameVal}`
            : `Додано новий локал: ${nameVal}`
        );
      });
    }
  }

  // ==========================================================================
  // 13. EVENT LISTENERS & INITIALIZATION
  // ==========================================================================

  function initEvents() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.getAttribute("data-lang");
        savePersistedState();
        applyTranslations();
      });
    });

    document.querySelectorAll(".fulfillment-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.fulfillmentType = btn.getAttribute("data-fulfillment");
        savePersistedState();
        renderBranchContext();
      });
    });

    document.querySelectorAll("[data-quick-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addProductToCart(btn.getAttribute("data-quick-add"), 1);
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          addProductToCart(btn.getAttribute("data-quick-add"), 1);
        }
      });
    });

    const stampBtn = document.getElementById("heroLunchStampBtn");
    if (stampBtn) {
      stampBtn.addEventListener("click", () => {
        const lunchSec = document.getElementById("lunch-section");
        if (lunchSec) {
          lunchSec.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "menu.html#lunch-section";
        }
      });
    }

    const topBranchBtn = document.getElementById("topBranchBtn");
    if (topBranchBtn) {
      topBranchBtn.addEventListener("click", () => {
        const locSec = document.getElementById("locations-section");
        if (locSec) {
          locSec.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "locations.html";
        }
      });
    }

    const addLunchBtn = document.getElementById("addLunchComboBtn");
    if (addLunchBtn) {
      addLunchBtn.addEventListener("click", () => {
        addLunchComboToCart(1);
      });
    }

    const addB2bBtn = document.getElementById("addB2bPackageBtn");
    if (addB2bBtn) {
      addB2bBtn.addEventListener("click", () => {
        addLunchComboToCart(state.b2bQty);
      });
    }

    const searchInput = document.getElementById("menuSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderMenuPopularRow();
        renderMenuCatalog();
      });
    }

    document.querySelectorAll(".view-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.viewMode = btn.getAttribute("data-filter");
        document.querySelectorAll(".view-mode-btn").forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter") === state.viewMode);
        });
        renderMenuPopularRow();
        renderMenuCatalog();
      });
    });

    const zoneBtn = document.getElementById("zoneCheckBtn");
    if (zoneBtn) {
      zoneBtn.addEventListener("click", () => {
        const val = (document.getElementById("zoneCheckInput")?.value || "").trim().toLowerCase();
        const resEl = document.getElementById("zoneCheckResult");
        if (!resEl) return;
        resEl.style.display = "block";
        if (!val) {
          resEl.style.color = "#B01C12";
          resEl.textContent =
            state.lang === "pl"
              ? "Wpisz kod pocztowy (np. 02-495) lub nazwę dzielnicy."
              : "Введіть поштовий індекс (напр. 02-495) або район.";
          return;
        }
        const matched = ["02-495", "02-496", "02-480", "ursus", "włochy", "wlochy", "bemowo", "ochota", "wojciechowskiego"].some(
          (z) => val.includes(z)
        );
        if (matched) {
          resEl.style.color = "var(--accent-dill)";
          resEl.textContent =
            state.lang === "pl"
              ? "Adres w strefie obsługi kuriera Smakota Ursus! (Symulacja DEMO: ostateczna taryfa dostawy do zatwierdzenia przez właściciela)."
              : "Адреса входить у зону доставки кур'єра Smakota Ursus! (Імітація DEMO: тариф доставки затверджується власником).";
        } else {
          resEl.style.color = "var(--ink-burgundy)";
          resEl.textContent =
            state.lang === "pl"
              ? "Strefa spoza bezpośredniego sąsiedztwa Ursusa: zadzwoń do lokalu (+48 576 113 316) lub wybierz odbiór osobisty (TC-12)."
              : "Адреса за межами базової зони Урсуса: зателефонуйте в локал (+48 576 113 316) або оберіть самовивіз (TC-12).";
        }
      });
    }

    // Contact Page Form Handler
    const contactForm = document.getElementById("contactPageForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = (document.getElementById("cntName")?.value || "").trim();
        const phoneVal = (document.getElementById("cntPhone")?.value || "").trim();
        const errEl = document.getElementById("cntFormFeedback");
        if (!nameVal || phoneVal.replace(/\D/g, "").length < 9) {
          if (errEl) {
            errEl.style.display = "block";
            errEl.style.color = "#B01C12";
            errEl.textContent =
              state.lang === "pl"
                ? "Podaj imię oraz poprawny numer telefonu (min. 9 cyfr)."
                : "Вкажіть ім'я та коректний номер телефону (мін. 9 цифр).";
          }
          return;
        }
        if (errEl) {
          errEl.style.display = "block";
          errEl.style.color = "var(--accent-dill)";
          errEl.textContent =
            state.lang === "pl"
              ? "Dziękujemy! Twoje zgłoszenie (tryb DEMO) zostało zapisane. W wersji produkcyjnej trafi bezpośrednio do lokalu."
              : "Дякуємо! Ваше звернення (режим DEMO) збережено. У production-версії воно надходить напряму в локал.";
        }
        contactForm.reset();
        showToast(
          state.lang === "pl"
            ? "Wiadomość wysłana (DEMO)!"
            : "Повідомлення надіслано (DEMO)!"
        );
      });
    }

    // Homepage Quick Callback Form Handler
    const homeQuickForm = document.getElementById("homeQuickContactForm");
    if (homeQuickForm) {
      homeQuickForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = (document.getElementById("homeCntName")?.value || "").trim();
        const phoneVal = (document.getElementById("homeCntPhone")?.value || "").trim();
        const errEl = document.getElementById("homeCntFeedback");
        if (!nameVal || phoneVal.replace(/\D/g, "").length < 9) {
          if (errEl) {
            errEl.style.display = "block";
            errEl.style.color = "#B01C12";
            errEl.textContent =
              state.lang === "pl"
                ? "Podaj imię oraz poprawny numer telefonu (min. 9 cyfr)."
                : "Вкажіть ім'я та коректний номер телефону (мін. 9 цифр).";
          }
          return;
        }
        if (errEl) {
          errEl.style.display = "block";
          errEl.style.color = "var(--accent-dill)";
          errEl.textContent =
            state.lang === "pl"
              ? "Dziękujemy! Twoje zgłoszenie (tryb DEMO) zostało zapisane. W wersji produkcyjnej trafi bezpośrednio do lokalu."
              : "Дякуємо! Ваше звернення (режим DEMO) збережено. У production-версії воно надходить напряму в локал.";
        }
        homeQuickForm.reset();
        showToast(
          state.lang === "pl"
            ? "Zgłoszenie wysłane (DEMO)!"
            : "Заявку надіслано (DEMO)!"
        );
      });
    }

    // Mobile Navigation Drawer Open / Close
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mobileBackdrop = document.getElementById("mobileNavDrawerBackdrop");
    const closeMobileNav = () => {
      mobileBackdrop?.classList.remove("open");
      if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    const openMobileNav = () => {
      mobileBackdrop?.classList.add("open");
      if (mobileToggle) mobileToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    mobileToggle?.addEventListener("click", () => {
      if (mobileBackdrop?.classList.contains("open")) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
    document.getElementById("closeMobileNavBtn")?.addEventListener("click", closeMobileNav);
    mobileBackdrop?.querySelectorAll(".mobile-nav-link").forEach((lnk) => {
      lnk.addEventListener("click", closeMobileNav);
    });
    document.getElementById("mobileNavPrintedMenuBtn")?.addEventListener("click", () => {
      closeMobileNav();
      document.getElementById("printedMenuModalBackdrop")?.classList.add("open");
    });

    // Cart Drawer Open / Close
    const openCart = () => {
      closeMobileNav();
      renderCartDrawer();
      document.getElementById("cartDrawerBackdrop")?.classList.add("open");
    };
    document.getElementById("openCartBtn")?.addEventListener("click", openCart);
    document.getElementById("mobileCartBtn")?.addEventListener("click", openCart);
    document.getElementById("closeCartBtn")?.addEventListener("click", () => {
      document.getElementById("cartDrawerBackdrop")?.classList.remove("open");
    });

    // Printed Menu Modal
    const openPrinted = () => {
      document.getElementById("printedMenuModalBackdrop")?.classList.add("open");
    };
    document.getElementById("openPrintedMenuBtn")?.addEventListener("click", openPrinted);
    document.getElementById("viewPhysicalScansBtn")?.addEventListener("click", openPrinted);
    document.getElementById("homePrintedMenuBtn")?.addEventListener("click", openPrinted);
    document.getElementById("footerOriginalMenuBtn")?.addEventListener("click", openPrinted);
    document.getElementById("closePrintedMenuModalBtn")?.addEventListener("click", () => {
      document.getElementById("printedMenuModalBackdrop")?.classList.remove("open");
    });

    // Audit Modal
    const openAudit = () => {
      renderAuditModal();
      document.getElementById("auditModalBackdrop")?.classList.add("open");
    };
    document.getElementById("openAuditModalBtn")?.addEventListener("click", openAudit);
    document.getElementById("footerAuditBtn")?.addEventListener("click", openAudit);
    document.getElementById("closeAuditModalBtn")?.addEventListener("click", () => {
      document.getElementById("auditModalBackdrop")?.classList.remove("open");
    });

    // Admin Modal
    const openAdmin = () => {
      renderAdminModal();
      document.getElementById("adminModalBackdrop")?.classList.add("open");
    };
    document.getElementById("openAdminModalBtn")?.addEventListener("click", openAdmin);
    document.getElementById("footerAdminBtn")?.addEventListener("click", openAdmin);
    document.getElementById("closeAdminModalBtn")?.addEventListener("click", () => {
      document.getElementById("adminModalBackdrop")?.classList.remove("open");
    });

    // Dish Detail Modal Close
    document.getElementById("closeDishModalBtn")?.addEventListener("click", () => {
      document.getElementById("dishModalBackdrop")?.classList.remove("open");
    });

    document.querySelectorAll(".modal-backdrop, .cart-drawer-backdrop, .mobile-nav-backdrop").forEach((bd) => {
      bd.addEventListener("click", (e) => {
        if (e.target === bd) {
          bd.classList.remove("open");
          if (bd.id === "mobileNavDrawerBackdrop") closeMobileNav();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop.open, .cart-drawer-backdrop.open").forEach((bd) => {
          bd.classList.remove("open");
        });
        closeMobileNav();
      }
    });
  }

  function initContactMap() {
    const mapEl = document.getElementById("smakotaContactMap");
    if (!mapEl || typeof window.L === "undefined") return;

    const lat = 52.194743;
    const lng = 20.8741982;

    const map = window.L.map(mapEl, {
      center: [52.19518, lng],
      zoom: 16,
      scrollWheelZoom: false
    });

    window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(map);

    const pinIcon = window.L.divIcon({
      className: "c1-leaflet-pin-icon",
      iconSize: [164, 86],
      iconAnchor: [82, 86],
      html: `
        <div class="c1-pin-wrap">
          <div class="c1-pin-bubble">
            <strong>SMAKOTA</strong>
            <span>ul. Wojciechowskiego 33</span>
          </div>
          <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
            <path d="M14 0C6.268 0 0 6.268 0 14c0 9.6 14 22 14 22s14-12.4 14-22C28 6.268 21.732 0 14 0z" fill="#7A1815"/>
            <circle cx="14" cy="14" r="5.5" fill="#FCF8F3"/>
          </svg>
        </div>
      `
    });

    const marker = window.L.marker([lat, lng], { icon: pinIcon }).addTo(map);
    marker.on("click", () => {
      window.open(DATA.brand.googleMaps, "_blank", "noopener,noreferrer");
    });
  }

  function makeBowlPinIcon(colorHex) {
    return window.L.divIcon({
      className: "l1-leaflet-pin-icon",
      iconSize: [38, 48],
      iconAnchor: [19, 48],
      popupAnchor: [0, -44],
      html: `
        <svg width="38" height="48" viewBox="0 0 38 48" fill="none" aria-hidden="true" style="filter:drop-shadow(0 5px 8px rgba(48,14,10,0.34));">
          <path d="M19 1C9.059 1 1 9.059 1 19c0 12.6 18 28 18 28s18-15.4 18-28C37 9.059 28.941 1 19 1z" fill="${colorHex}" stroke="#FCF7F0" stroke-width="1.6"/>
          <path d="M11 20h16c0 4.2-3.6 7.5-8 7.5s-8-3.3-8-7.5z" fill="#FCF7F0"/>
          <path d="M14.5 14c0 1.4-1.2 2.1-1.2 3.4M19 13c0 1.6-1.2 2.2-1.2 3.8M23.5 14c0 1.4-1.2 2.1-1.2 3.4" stroke="#FCF7F0" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      `
    });
  }

  function initLocationsMap() {
    const mapEl = document.getElementById("smakotaLocationsMap");
    if (!mapEl || typeof window.L === "undefined") return;

    locationsMap = window.L.map(mapEl, {
      center: [52.186, 20.955],
      zoom: 12,
      scrollWheelZoom: false
    });

    window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(locationsMap);

    locationsMap.fitBounds(
      [
        [52.156, 20.86],
        [52.21, 21.038]
      ],
      { padding: [34, 34], maxZoom: 12 }
    );

    const ursusCoords = BRANCH_COORDS["branch-ursus"].coords;
    locationsMarkers["branch-ursus"] = window.L.marker(ursusCoords, {
      icon: makeBowlPinIcon("#7A1815")
    })
      .addTo(locationsMap)
      .bindPopup(
        `<strong>SMAKOTA Ursus</strong><br>ul. S. Wojciechowskiego 33 / lok. 40<br><a href="tel:+48576113316">+48 576 113 316</a>`
      );

    const branch2Coords = BRANCH_COORDS["branch-2"].coords;
    locationsMarkers["branch-2"] = window.L.marker(branch2Coords, {
      icon: makeBowlPinIcon("#9E6B55")
    })
      .addTo(locationsMap)
      .bindPopup(
        `<strong>SMAKOTA Lokal #2</strong><br>${state.lang === "pl" ? "Otwarcie wkrótce (Mokotów)" : "Скоро відкриття (Мокотув)"}`
      );

    window.requestAnimationFrame(() => {
      locationsMap?.invalidateSize();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadPersistedState();

    // Support deep-linking to a menu category via menu.html?cat=<categoryId>
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    if (catParam && DATA.categories.some((c) => c.id === catParam)) {
      const parentGroup = MENU_GROUPS.find((g) => g.categoryIds.includes(catParam));
      if (parentGroup) {
        state.selectedMenuGroup = parentGroup.id;
      }
      state.selectedCategoryId = catParam;
    }

    ensureSharedModals();
    initEvents();
    applyTranslations();
    initContactMap();
    initLocationsMap();

    if (catParam && state.selectedCategoryId === catParam) {
      const menuSection = document.getElementById("menu-section");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "auto" });
      }
    }
  });
})();
