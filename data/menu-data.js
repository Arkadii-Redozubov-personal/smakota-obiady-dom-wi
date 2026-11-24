// Smakota — Obiady Domowe (Warszawa)
// Multi-branch data model & bilingual catalog (PL / UK)
// Strictly derived from physical menu photos, 21 dish photo cards, call transcript, and ТЗ.

window.SMAKOTA_DATA = {
  brand: {
    namePl: "Smakota — Obiady Domowe",
    nameUk: "Смакота — Домашні обіди",
    tzDraftName: "Smakota obiady domówi",
    currency: "PLN",
    currencySymbol: "zł",
    instagram: "https://www.instagram.com/smakotawarszawa/",
    instagramHandle: "@smakotawarszawa",
    facebook: "https://www.facebook.com/profile.php?id=61577930057347",
    googleMaps: "https://share.google/1MwYUzSfKmWTu60fy",
    phonePrimary: "+48 576 113 316",
    phoneHref: "tel:+48576113316"
  },

  branches: [
    {
      id: "branch-ursus",
      code: "WAW-01",
      slug: "warszawa-ursus",
      status: "ACTIVE",
      name: {
        pl: "Smakota Ursus (Lokal główny)",
        uk: "Смакота Урсус (Головний локал)"
      },
      address: "ul. Stanisława Wojciechowskiego 33 / lok. 40 (w Google Maps: lok. 44)",
      postalCode: "02-495",
      city: "Warszawa",
      district: "Ursus",
      phone: "+48 576 113 316",
      phoneHref: "tel:+48576113316",
      hours: {
        pl: "Pon–Czw: 11:00–20:00 · Pt–Ndz: 10:00–20:30",
        uk: "Пн–Чт: 11:00–20:00 · Пт–Нд: 10:00–20:30"
      },
      pickupEnabled: true,
      deliveryEnabled: true,
      deliveryZones: ["02-495", "02-496", "02-480", "02-490", "Ursus", "Włochy", "Bemowo", "Ochota"],
      deliveryNote: {
        pl: "Odbiór osobisty w lokalu lub dostawa własnym kurierem Smakota (strefy i taryfa w DEMO do potwierdzenia).",
        uk: "Самовивіз у локалі або доставка власним кур'єром Смакота (зони та тариф у DEMO до затвердження)."
      },
      mapUrl: "https://share.google/1MwYUzSfKmWTu60fy"
    },
    {
      id: "branch-2",
      code: "WAW-02",
      slug: "warszawa-punkt-2",
      status: "OPENING_SOON",
      name: {
        pl: "Smakota Lokal #2 (Otwarcie wkrótce / Mokotów)",
        uk: "Смакота Локал №2 (Скоро відкриття / Мокотув)"
      },
      address: "Warszawa — dokładny adres drugiego lokalu do potwierdzenia (w bazach: ul. Puławska 246 lok. 67)",
      postalCode: "02-670",
      city: "Warszawa",
      district: "Mokotów / Nowy punkt",
      phone: "",
      phoneHref: "",
      hours: {
        pl: "Godziny otwarcia w trakcie potwierdzania przez właściciela",
        uk: "Графік роботи на стадії підтвердження власником"
      },
      pickupEnabled: false,
      deliveryEnabled: false,
      deliveryZones: [],
      deliveryNote: {
        pl: "Drugi lokal zapowiedziany w rozmowie z właścicielem. Zamówienia na ten punkt są zablokowane do momentu potwierdzenia adresu i telefonu.",
        uk: "Другий локал анонсовано у розмові з власником. Замовлення на цю точку заблоковані до підтвердження адреси та телефону."
      },
      mapUrl: "https://share.google/1MwYUzSfKmWTu60fy"
    },
    {
      id: "branch-3",
      code: "WAW-03",
      slug: "warszawa-punkt-3",
      status: "PLANNED",
      name: {
        pl: "Smakota Lokal #3 (Rezerwa rozbudowy sieci 3–5)",
        uk: "Смакота Локал №3 (Резерв масштабування мережі 3–5)"
      },
      address: "Architektura gotowa na uruchomienie 3., 4. i 5. lokalu z panelu administratora",
      postalCode: "00-000",
      city: "Warszawa",
      district: "Rozwój sieci",
      phone: "",
      phoneHref: "",
      hours: {
        pl: "Lokal planowany — aktywacja jednym kliknięciem w panelu Admin",
        uk: "Планований локал — активація в один клік у панелі Admin"
      },
      pickupEnabled: false,
      deliveryEnabled: false,
      deliveryZones: [],
      deliveryNote: {
        pl: "Zgodnie z pkt 7 ТЗ system obsługuje wielu filii bez zmian w kodzie.",
        uk: "Згідно з п. 7 ТЗ система підтримує багатофіліальність без змін у коді."
      },
      mapUrl: ""
    }
  ],

  lunchCombo: {
    id: "lunch-dnia-33",
    priceGrosze: 3300,
    pricePln: 33,
    title: {
      pl: "Lunch Dnia: Zupa + Danie mięsne + Dodatek + Surówka",
      uk: "Комплексний Ланч: Перша страва + М'ясна страва + Гарнір + Салат"
    },
    subtitle: {
      pl: "Pełny 4-daniowy domowy obiad przygotowywany na świeżo po zamówieniu — prosto z naszej karty menu.",
      uk: "Повноцінний домашній обід із 4 страв, що готується свіжим після замовлення — прямо з нашого меню."
    },
    soups: [
      { id: "barszcz-ukrainski", pl: "Barszcz ukraiński", uk: "Борщ український" },
      { id: "rosol-z-makaronem", pl: "Rosół z makaronem", uk: "Курячий бульйон з локшиною" },
      { id: "rosol-z-pielmieni", pl: "Rosół z pielmieni", uk: "Бульйон з пельменями" },
      { id: "krem-zupa-pieczarkowa", pl: "Krem zupa pieczarkowa", uk: "Крем-суп грибний з печериць" },
      { id: "zupa-pomidorowa", pl: "Zupa pomidorowa", uk: "Томатний суп з макаронами" }
    ],
    meats: [
      { id: "kotlety-mielone-wieprzowe", pl: "Kotlety mielone wieprzowe", uk: "Котлети домашні свинячі" },
      { id: "kotlety-mielone-z-kurczaka", pl: "Kotlety mielone z kurczaka", uk: "Котлети рублені курячі" },
      { id: "kotlet-de-volaille", pl: "Kotlet De Volaille", uk: "Котлета Де-Воляй з маслом" },
      { id: "kotlet-schabowy", pl: "Kotlet schabowy", uk: "Відбивна свиняча (схабовий)" },
      { id: "golabki-wieprzowe", pl: "Gołąbki wieprzowe", uk: "Голубці домашні зі свининою" },
      { id: "kotlet-z-piersi-kurczaka", pl: "Kotlet z piersi kurczaka", uk: "Відбивна з курячого філе" },
      { id: "zeberka-wieprzowe", pl: "Żeberka wieprzowe pieczone", uk: "Реберця свинячі запечені" }
    ],
    sides: [
      { id: "ziemniaki-puree", pl: "Gotowane ziemniaki z koperkiem / puree", uk: "Відварна картопля з кропом / пюре" },
      { id: "frytki", pl: "Frytki złociste", uk: "Картопля фрі" },
      { id: "makaron", pl: "Makaron domowy", uk: "Макарони відварні" },
      { id: "ryz", pl: "Ryż na sypko", uk: "Рис відварний" },
      { id: "wiejskie-ziemniaki", pl: "Wiejskie ziemniaki pieczone", uk: "Картопля по-селянськи" }
    ],
    salads: [
      { id: "biala-kapusta", pl: "Surówka z białej kapusty", uk: "Салат зі свіжої білої капусти" },
      { id: "kapusta-kiszona", pl: "Kapusta kiszona domowa", uk: "Капуста квашена домашня" },
      { id: "buraczki", pl: "Buraczki zasmażane", uk: "Бурячок тушкований" },
      { id: "marchewka-po-koreansku", pl: "Marchewka po-koreańsku", uk: "Морква по-корейськи" }
    ]
  },

  categories: [
    {
      id: "zupa",
      stampLabel: "ZUPA",
      sortOrder: 1,
      name: { pl: "Zupy domowe", uk: "Перші страви (Супи та борщ)" },
      desc: {
        pl: "Gęste, aromatyczne zupy gotowane na naturalnym wywarze, podawane ze świeżym koperkiem.",
        uk: "Наваристі домашні перші страви на натуральному бульйоні зі свіжою зеленню."
      }
    },
    {
      id: "pierogi",
      stampLabel: "PIEROGI",
      sortOrder: 2,
      name: { pl: "Pierogi ręcznie lepione", uk: "Вареники ручної ліпки" },
      desc: {
        pl: "Cienkie, elastyczne ciasto i obfite nadzienie, lepione i gotowane na świeżo po złożeniu zamówienia.",
        uk: "Тонке ніжне тісто та щедра начинка, ліпимо та варимо свіжими одразу після замовлення."
      }
    },
    {
      id: "pielmieni",
      stampLabel: "PIELMIENI",
      sortOrder: 3,
      name: { pl: "Pielmieni domowe", uk: "Пельмені домашні" },
      desc: {
        pl: "Soczyste mięsne nadzienie w delikatnym cieście, serwowane z masłem, pieprzem i koperkiem.",
        uk: "Соковита м'ясна начинка у тонкому тісті з вершковим маслом, перцем та свіжим кропом."
      }
    },
    {
      id: "czebureki",
      stampLabel: "CZEBUREKI",
      sortOrder: 4,
      name: { pl: "Czebureki złociste (M / XL)", uk: "Чебуреки хрусткі (M / XL)" },
      desc: {
        pl: "Smażone dopiero w momencie zamówienia: chrupiące ciasto z bąbelkami i gorący, soczysty środek.",
        uk: "Смажимо тільки після замовлення: хрустке золотисте тісто та гаряча соковита начинка."
      }
    },
    {
      id: "chinkali",
      stampLabel: "CHINKALI",
      sortOrder: 5,
      name: { pl: "Chinkali z bulionem", uk: "Хінкалі соковиті" },
      desc: {
        pl: "Ręcznie zawijane sakiewki pełne aromatycznego bulionu, świeżych ziół i mięsa lub szpinaku z serem.",
        uk: "Мішечки ручної ліпки, сповнені ароматного бульйону, свіжої зелені та м'яса або шпинату з сиром."
      }
    },
    {
      id: "dania-miesne",
      stampLabel: "DANIA MIĘSNE",
      sortOrder: 6,
      name: { pl: "Dania mięsne i główne", uk: "М'ясні та основні страви" },
      desc: {
        pl: "Tradycyjne kotlety, gołąbki, żeberka, kruchenyki i placki ziemniaczane, przygotowywane bez wcześniejszego odgrzewania.",
        uk: "Домашні котлети, відбивні, голубці, реберця, крученики та деруни, готуємо свіжими без розігрівання."
      }
    },
    {
      id: "nalesniki",
      stampLabel: "NALEŚNIKI",
      sortOrder: 7,
      name: { pl: "Naleśniki, krokiety i desery", uk: "Млинці, крокети та десерти" },
      desc: {
        pl: "Wytrawne naleśniki obiadowe, chrupiące krokiety, naleśniki na słodko, serniki oraz domowe rurki.",
        uk: "Ситні млинці з м'ясом і грибами, хрусткі крокети, солодкі млинці, сирники та домашні трубочки."
      }
    },
    {
      id: "salatki",
      stampLabel: "SAŁATKI",
      sortOrder: 8,
      name: { pl: "Sałatki tradycyjne", uk: "Салати традиційні" },
      desc: {
        pl: "Klasyczne sałatki przygotowywane ze świeżych składników: Cezar, Kozaczok i Śledź pod pierzynką.",
        uk: "Улюблені салати зі свіжих інгредієнтів: Цезар, Козачок та традиційний Оселедець під шубою."
      }
    },
    {
      id: "dodatki-obiadowe",
      stampLabel: "DODATKI OBIADOWE",
      sortOrder: 9,
      name: { pl: "Dodatki obiadowe", uk: "Гарніри до обіду" },
      desc: {
        pl: "Ziemniaki z koperkiem, chrupiące frytki, ziemniaki po wiejsku, makaron i ryż z warzywami.",
        uk: "Молода картопля з кропом, пюре, картопля по-селянськи, фрі, макарони та рис з овочами."
      }
    },
    {
      id: "surowki",
      stampLabel: "SURÓWKI",
      sortOrder: 10,
      name: { pl: "Surówki domowe", uk: "Домашні салати-сурувки" },
      desc: {
        pl: "Chrupiące witaminowe dodatki do każdego drugiego dania.",
        uk: "Хрусткі вітамінні салати до кожної основної страви."
      }
    },
    {
      id: "sosy-napoje",
      stampLabel: "SOSY & NAPOJE",
      sortOrder: 11,
      name: { pl: "Sosy i napoje", uk: "Соуси та напої" },
      desc: {
        pl: "Gęsta śmietana, domowy sos czosnkowy, ketchup oraz zimne napoje.",
        uk: "Густа сметана, домашній часниковий соус, кетчуп та прохолодні напої."
      }
    }
  ],

  products: [
    // ==================== ZUPA ====================
    {
      id: "zupa-barszcz-ukrainski",
      slug: "barszcz-ukrainski",
      categoryId: "zupa",
      priceGrosze: 2000,
      pricePln: 20,
      image: "img/clean/barszcz.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Barszcz ukraiński", uk: "Борщ український зі сметаною" },
      description: {
        pl: "Tradycyjny gęsty barszcz ukraiński z burakami, fasolą, ziemniakami, świeżym koperkiem i kleksem gęstej śmietany.",
        uk: "Традиційний густий український борщ із буряком, квасолею, картоплею, свіжим кропом та ложкою домашньої сметани."
      }
    },
    {
      id: "zupa-rosol-z-makaronem",
      slug: "rosol-z-makaronem",
      categoryId: "zupa",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Rosół z makaronem", uk: "Курячий бульйон з домашньою локшиною" },
      description: {
        pl: "Klarowny, długo gotowany domowy rosół drobiowy podawany z makaronem i świeżą natką.",
        uk: "Запашний прозорий домашній курячий бульйон із локшиною та свіжою зеленню."
      }
    },
    {
      id: "zupa-rosol-z-pielmieni",
      slug: "rosol-z-pielmieni",
      categoryId: "zupa",
      priceGrosze: 1800,
      pricePln: 18,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Rosół z pielmieni", uk: "Домашній бульйон з пельменями" },
      description: {
        pl: "Gorący, aromatyczny rosół serwowany z ręcznie lepionymi mięsnymi pielmieni i koperkiem.",
        uk: "Гарячий наваристий бульйон із домашніми пельменями ручної ліпки та зеленню."
      }
    },
    {
      id: "zupa-solanka",
      slug: "solanka",
      categoryId: "zupa",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Solanka tradycyjna", uk: "Солянка м'ясна збірна" },
      description: {
        pl: "Sycąca, wyrazista zupa z kilkoma rodzajami mięs, ogórkiem kiszonym, oliwkami i śmietaną.",
        uk: "Насичена м'ясна солянка з кількома видами м'яса, солоним огірком, оливками та сметаною."
      }
    },
    {
      id: "zupa-krem-pieczarkowa",
      slug: "krem-zupa-pieczarkowa",
      categoryId: "zupa",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Krem zupa pieczarkowa", uk: "Крем-суп із печериць" },
      description: {
        pl: "Aksamitna zupa krem ze świeżych pieczarek ze śmietanką i aromatycznymi ziołami.",
        uk: "Ніжний вершковий крем-суп зі свіжих печериць із духмяними травами."
      }
    },
    {
      id: "zupa-chlodnik-ukrainski",
      slug: "chlodnik-ukrainski",
      categoryId: "zupa",
      priceGrosze: 2000,
      pricePln: 20,
      image: "img/clean/chlodnik.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Chłodnik ukraiński", uk: "Холодник по-українськи" },
      description: {
        pl: "Orzeźwiający chłodnik ze świeżym ogórkiem, koperkiem, szczypiorkiem, jajkiem i delikatnym filetem (pozycja z kart foto Smakota).",
        uk: "Освіжаючий холодник зі свіжим огірком, кропом, зеленою цибулею, яйцем та філе (позиція з фото-меню Смакота)."
      }
    },
    {
      id: "zupa-grochowka",
      slug: "grochowka",
      categoryId: "zupa",
      priceGrosze: 2500,
      pricePln: 25,
      image: "img/clean/grochowka.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Grochówka domowa", uk: "Гороховий суп на копченостях" },
      description: {
        pl: "Gęsta zupa grochowa z ziemniakami, marchewką, mięsem i świeżą natką pietruszki (pozycja z kart foto Smakota).",
        uk: "Густий домашній гороховий суп із картоплею, морквою, м'ясом та свіжою зеленню (позиція з фото-меню Смакота)."
      }
    },
    {
      id: "zupa-pomidorowa",
      slug: "zupa-pomidorowa",
      categoryId: "zupa",
      priceGrosze: 2000,
      pricePln: 20,
      image: "img/clean/pomidorowa.webp",
      sourceStatus: "online_menu",
      featured: false,
      available: true,
      name: { pl: "Zupa pomidorowa z makaronem", uk: "Томатний суп на бульйоні з макаронами" },
      description: {
        pl: "Domowa zupa pomidorowa gotowana na rosole z makaronem penne, marchewką i świeżą zieleniną.",
        uk: "Домашній томатний суп на курячому бульйоні з макаронами, морквою та свіжою зеленню."
      }
    },
    {
      id: "zupa-chanakhi",
      slug: "chanakhi",
      categoryId: "zupa",
      priceGrosze: 4500,
      pricePln: 45,
      image: "img/clean/chanakhi.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Chanakhi (Chanachi po lwowsku)", uk: "Чанахи по-львівськи з м'ясом та квасолею" },
      description: {
        pl: "Tradycyjne, bogate danie jednogarnkowe z soczystą wieprzowiną, ziemniakami, czerwoną fasolą, pieczarkami i koperkiem.",
        uk: "Традиційна ситна печеня-суп зі свининою, картоплею, червоною квасолею, печерицями та свіжим кропом."
      }
    },

    // ==================== PIEROGI ====================
    {
      id: "pierogi-z-ziemniakami",
      slug: "pierogi-z-ziemniakami",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: "img/clean/pierogi-ziemniaki.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Ukraińskie Pierogi z ziemniakami", uk: "Українські вареники" },
      description: {
        pl: "Klasyczne ręcznie lepione pierogi z kremowym farszem ziemniaczanym, podawane ze złocistą cebulką i koperkiem.",
        uk: "Класичні вареники ручної ліпки з ніжною картопляною начинкою, смаженою золотистою цибулькою та кропом."
      }
    },
    {
      id: "pierogi-z-kapusta-i-grzybami",
      slug: "pierogi-z-kapusta-i-grzybami",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pierogi z kapustą i grzybami", uk: "Вареники з тушкованою капустою та грибами" },
      description: {
        pl: "Domowe pierogi wypełnione długo duszoną kapustą i aromatycznymi grzybami.",
        uk: "Домашні вареники з ароматною тушкованою капустою та грибами."
      }
    },
    {
      id: "pierogi-z-miesem-wieprzowym",
      slug: "pierogi-z-miesem-wieprzowym",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: "img/clean/pierogi-mieso.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Pierogi z mięsem wieprzowym", uk: "Вареники з соковитим свинячим м'ясом" },
      description: {
        pl: "Sycące pierogi ze świeżo mielonym, przyprawionym mięsem wieprzowym, okraszone cebulką i ziołami.",
        uk: "Ситні вареники зі соковитою начинкою зі свинини зі смаженою цибулькою та зеленню."
      }
    },
    {
      id: "pierogi-z-ziemniakami-i-serem",
      slug: "pierogi-z-ziemniakami-i-serem",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pierogi z ziemniakami i serem (Ruskie)", uk: "Вареники з картоплею та домашнім сиром" },
      description: {
        pl: "Ulubione pierogi z ziemniakami, twarogiem i podsmażaną cebulką — zawsze lepione na świeżo.",
        uk: "Улюблені вареники з картоплею, домашнім кисломолочним сиром та золотистою цибулькою."
      }
    },
    {
      id: "pierogi-ze-slodkim-serem",
      slug: "pierogi-ze-slodkim-serem",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: "img/clean/pierogi-ser.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Pierogi ze słodkim serem", uk: "Вареники з солодким домашнім сиром" },
      description: {
        pl: "Delikatne pierogi z naturalnym słodkim twarogiem, znakomite ze śmietaną lub konfiturą owocową.",
        uk: "Ніжні вареники з натуральним солодким сиром, чудово смакують зі сметаною або ягідним джемом."
      }
    },
    {
      id: "pierogi-z-wisnia",
      slug: "pierogi-z-wisnia",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pierogi z wiśnią", uk: "Вареники з соковитою вишнею" },
      description: {
        pl: "Tradycyjne ukraińskie pierogi wypełnione soczystymi wiśniami.",
        uk: "Традиційні українські вареники зі стиглою соковитою вишнею."
      }
    },
    {
      id: "pierogi-z-jagodami",
      slug: "pierogi-z-jagodami",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pierogi z jagodami", uk: "Вареники з лісовими чорницями" },
      description: {
        pl: "Domowe pierogi na słodko ze świeżymi lub leśnymi jagodami.",
        uk: "Домашні солодкі вареники з ароматною чорницею."
      }
    },
    {
      id: "pierogi-z-truskawkami",
      slug: "pierogi-z-truskawkami",
      categoryId: "pierogi",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pierogi z truskawkami", uk: "Вареники з полуницею" },
      description: {
        pl: "Aromatyczne, letnie pierogi wypełnione słodkimi truskawkami.",
        uk: "Ароматні солодкі вареники з ніжною полуницею."
      }
    },

    // ==================== PIELMIENI ====================
    {
      id: "pielmieni-z-wieprzowina",
      slug: "pielmieni-z-wieprzowina",
      categoryId: "pielmieni",
      priceGrosze: 3000,
      pricePln: 30,
      image: "img/clean/pielmieni.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Pielmieni domowe", uk: "Пельмені домашні" },
      description: {
        pl: "Ręcznie lepione pielmieni z soczystym mięsem wieprzowym, gotowane po zamówieniu, podawane z masłem i koperkiem.",
        uk: "Пельмені ручної ліпки із соковитою свининою, варяться після замовлення, подаються з маслом та кропом."
      }
    },
    {
      id: "pielmieni-wieprzowina-wolowina",
      slug: "pielmieni-z-wieprzowina-i-wolowina",
      categoryId: "pielmieni",
      priceGrosze: 3000,
      pricePln: 30,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pielmieni z wieprzowiną i wołowiną", uk: "Пельмені зі свининою та яловичиною" },
      description: {
        pl: "Klasyczne połączenie soczystej wieprzowiny i wyrazistej wołowiny w cienkim domowym cieście.",
        uk: "Класичне поєднання соковитої свинини та яловичини в тонкому домашньому тісті."
      }
    },
    {
      id: "pielmieni-z-kurczakiem",
      slug: "pielmieni-z-kurczakiem",
      categoryId: "pielmieni",
      priceGrosze: 3000,
      pricePln: 30,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pielmieni z kurczakiem", uk: "Пельмені з ніжним курячим філе" },
      description: {
        pl: "Delikatne pielmieni z nadzieniem z soczystego mięsa drobiowego.",
        uk: "Ніжні домашні пельмені з курячим м'ясом та зеленню."
      }
    },
    {
      id: "pielmieni-z-indykiem",
      slug: "pielmieni-z-indykiem",
      categoryId: "pielmieni",
      priceGrosze: 3000,
      pricePln: 30,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Pielmieni z indykiem", uk: "Пельмені з індичкою" },
      description: {
        pl: "Dietetyczne i lekkie pielmieni wypełnione mięsem z indyka.",
        uk: "Легкі та соковиті домашні пельмені з філе індички."
      }
    },
    {
      id: "pielmieni-talerz-dla-towarzystwa",
      slug: "talerz-dla-towarzystwa-pielmieni",
      categoryId: "pielmieni",
      priceGrosze: 8200,
      pricePln: 82,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Talerz dla towarzystwa (500 g / 1000 g)", uk: "Тарілка пельменів для компанії (500 г / 1000 г)" },
      description: {
        pl: "Duża porcja domowych pielmieni dla grupy lub rodziny — do wyboru zestaw 500 g (82 zł) lub 1000 g (153 zł).",
        uk: "Велика порція домашніх пельменів для компанії або родини — на вибір 500 г (82 zł) або 1000 г (153 zł)."
      },
      variants: [
        { id: "500g", label: { pl: "500 g — 82 zł", uk: "500 г — 82 zł" }, priceGrosze: 8200 },
        { id: "1000g", label: { pl: "1000 g — 153 zł", uk: "1000 г — 153 zł" }, priceGrosze: 15300 }
      ]
    },

    // ==================== CZEBUREKI ====================
    {
      id: "czeburek-z-miesem-m",
      slug: "czeburek-z-miesem-m",
      categoryId: "czebureki",
      priceGrosze: 1500,
      pricePln: 15,
      image: "img/clean/czebureki.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Czebureki (M / XL)", uk: "Чебуреки (M / XL)" },
      description: {
        pl: "Smażony na świeżo po zamówieniu złocisty czeburek z soczystym mięsem i gorącym bulionem w środku (M: 15 zł, XL: 21 zł).",
        uk: "Смажений одразу після замовлення золотистий чебурек із соковитим м'ясом та бульйоном всередині (M: 15 zł, XL: 21 zł)."
      },
      variants: [
        { id: "size-m", label: { pl: "Rozmiar M — 15 zł", uk: "Розмір M — 15 zł" }, priceGrosze: 1500 },
        { id: "size-xl", label: { pl: "Rozmiar XL — 21 zł", uk: "Розмір XL — 21 zł" }, priceGrosze: 2100 }
      ]
    },
    {
      id: "czeburek-z-serem-i-ziolami",
      slug: "czeburek-z-serem-i-ziolami",
      categoryId: "czebureki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z serem i ziołami (M / XL)", uk: "Чебурек із сиром та свіжою зеленню (M / XL)" },
      description: {
        pl: "Chrupiący czeburek wypełniony ciągnącym się serem i świeżymi ziołami (M: 15 zł, XL: 21 zł).",
        uk: "Хрусткий чебурек із тягучим сиром та запашною зеленню (M: 15 zł, XL: 21 zł)."
      },
      variants: [
        { id: "size-m", label: { pl: "Rozmiar M — 15 zł", uk: "Розмір M — 15 zł" }, priceGrosze: 1500 },
        { id: "size-xl", label: { pl: "Rozmiar XL — 21 zł", uk: "Розмір XL — 21 zł" }, priceGrosze: 2100 }
      ]
    },
    {
      id: "czeburek-z-kurczakiem-m",
      slug: "czeburek-z-kurczakiem-m",
      categoryId: "czebureki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z kurczakiem M", uk: "Чебурек з куркою M" },
      description: {
        pl: "Złocisty czeburek z delikatnym, soczystym nadzieniem drobiowym.",
        uk: "Золотистий хрусткий чебурек із соковитою курячою начинкою."
      }
    },
    {
      id: "czeburek-pieczarki-ser-xl",
      slug: "czeburek-z-pieczarkami-i-serem-xl",
      categoryId: "czebureki",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z pieczarkami i serem XL", uk: "Чебурек з печерицями та сиром XL" },
      description: {
        pl: "Duży czeburek XL z podsmażanymi pieczarkami i roztopionym serem.",
        uk: "Великий чебурек XL з обсмаженими печерицями та розплавленим сиром."
      }
    },
    {
      id: "czeburek-smakota-xl",
      slug: "czeburek-smakota-xl",
      categoryId: "czebureki",
      priceGrosze: 2400,
      pricePln: 24,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z mięsem, pomidorem i serem „Smakota” XL", uk: "Фірмовий чебурек «Смакота» XL (м'ясо, томат, сир)" },
      description: {
        pl: "Firmowy czeburek XL z soczystym mięsem, świeżym pomidorem i ciągnącym się serem.",
        uk: "Фірмовий великий чебурек XL зі соковитим м'ясом, стиглим томатом та сиром."
      }
    },
    {
      id: "czeburek-z-jablkiem-m",
      slug: "czeburek-z-jablkiem-m",
      categoryId: "czebureki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z jabłkiem M", uk: "Чебурек солодкий з яблуком M" },
      description: {
        pl: "Słodki, chrupiący czeburek z aromatycznym nadzieniem jabłkowym.",
        uk: "Солодкий хрусткий чебурек з ароматною яблучною начинкою."
      }
    },
    {
      id: "czeburek-truskawki-banan-nutella-m",
      slug: "czeburek-z-truskawkami-bananem-i-nutella-m",
      categoryId: "czebureki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Czeburek z truskawkami, bananem i nutellą M", uk: "Чебурек з полуницею, бананом та нутеллою M" },
      description: {
        pl: "Deserowy czeburek z owocami i gorącą kremową Nutellą.",
        uk: "Десертний чебурек зі свіжими фруктами та гарячою нутеллою."
      }
    },
    {
      id: "zestaw-czeburekow-pychota",
      slug: "zestaw-degustacyjny-czeburekow-pychota",
      categoryId: "czebureki",
      priceGrosze: 9900,
      pricePln: 99,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Zestaw degustacyjny czebureków „Pychota”", uk: "Дегустаційний сет чебуреків «Пихота»" },
      description: {
        pl: "Duży zestaw świeżo smażonych czebureków z różnymi nadzieniami — idealny na spotkanie lub do pracy.",
        uk: "Великий дегустаційний набір свіжосмажених чебуреків із різними начинками для компанії."
      }
    },

    // ==================== CHINKALI ====================
    {
      id: "chinkali-z-wieprzowina",
      slug: "chinkali-z-wieprzowina",
      categoryId: "chinkali",
      priceGrosze: 2500,
      pricePln: 25,
      image: "img/clean/chinkali-mieso.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Chinkali z wieprzowiną (z mięsem)", uk: "Хінкалі зі свининою та бульйоном" },
      description: {
        pl: "Ręcznie formowane sakiewki z soczystym mięsem wieprzowym, gorącym rosołem i świeżą kolendrą.",
        uk: "Хінкалі ручної ліпки із соковитою свининою, гарячим бульйоном всередині та зеленню."
      }
    },
    {
      id: "chinkali-szpinakowe-z-serem",
      slug: "chinkali-szpinakowe-z-serem",
      categoryId: "chinkali",
      priceGrosze: 2500,
      pricePln: 25,
      image: "img/clean/chinkali-ser.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Chinkali szpinakowe z serem", uk: "Хінкалі шпинатні з ніжним сиром" },
      description: {
        pl: "Zielone ciasto ze świeżym szpinakiem wypełnione kremowym serem i ziołami.",
        uk: "Зелене шпинатне тісто з ніжною сирно-шпинатною начинкою та травами."
      }
    },

    // ==================== DANIA MIĘSNE ====================
    {
      id: "danie-kotlety-mielone-wieprzowe",
      slug: "kotlety-mielone-wieprzowe",
      categoryId: "dania-miesne",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlety mielone wieprzowe", uk: "Котлети домашні свинячі" },
      description: {
        pl: "Soczyste, domowe kotlety mielone ze świeżej wieprzowiny, smażone na złoty kolor.",
        uk: "Соковиті домашні котлети зі свіжої свинини, обсмажені до золотистої скоринки."
      }
    },
    {
      id: "danie-kotlety-mielone-z-kurczaka",
      slug: "kotlety-mielone-z-kurczaka",
      categoryId: "dania-miesne",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlety mielone z kurczaka", uk: "Котлети ніжні курячі" },
      description: {
        pl: "Delikatne kotlety drobiowe przygotowywane ze świeżo mielonego fileta z kurczaka.",
        uk: "Ніжні домашні котлети зі свіжого курячого філе."
      }
    },
    {
      id: "danie-kotlety-mielone-rybne",
      slug: "kotlety-mielone-rybne",
      categoryId: "dania-miesne",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlety mielone rybne", uk: "Котлети рибні домашні" },
      description: {
        pl: "Tradycyjne, puszyste kotlety rybne z delikatnymi ziołami.",
        uk: "Традиційні пухкі рибні котлети із запашною зеленню."
      }
    },
    {
      id: "danie-kotlet-de-volaille",
      slug: "kotlet-de-volaille",
      categoryId: "dania-miesne",
      priceGrosze: 2100,
      pricePln: 21,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlet De Volaille", uk: "Котлета Де-Воляй (по-київськи) з маслом" },
      description: {
        pl: "Chrupiący filet z kurczaka z pachnącym masłem ziołowym wypływającym po przekrojeniu.",
        uk: "Хрустке куряче філе з ароматним вершковим маслом та зеленню всередині."
      }
    },
    {
      id: "danie-kotlet-schabowy",
      slug: "kotlet-schabowy",
      categoryId: "dania-miesne",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlet schabowy tradycyjny", uk: "Відбивна свиняча (котлета схабова)" },
      description: {
        pl: "Duży, świeżo rozbijany i smażony po zamówieniu kotlet schabowy w złocistej panierce.",
        uk: "Велика свіжовідбита свиняча відбивна у золотистій хрусткій паніровці."
      }
    },
    {
      id: "danie-golabki-wieprzowe",
      slug: "golabki-wieprzowe",
      categoryId: "dania-miesne",
      priceGrosze: 2400,
      pricePln: 24,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Gołąbki wieprzowe w sosie", uk: "Голубці домашні зі свининою в соусі" },
      description: {
        pl: "Domowe gołąbki z mięsem wieprzowym i ryżem, duszone w aromatycznym sosie pomidorowym.",
        uk: "Домашні голубці зі свининою та рисом, тушковані в ніжному томатному соусі."
      }
    },
    {
      id: "danie-kotlet-z-piersi-kurczaka",
      slug: "kotlet-z-piersi-kurczaka",
      categoryId: "dania-miesne",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kotlet z piersi kurczaka", uk: "Відбивна з курячої грудки" },
      description: {
        pl: "Soczysty filet z piersi kurczaka smażony w chrupiącej panierce.",
        uk: "Соковита відбивна з курячого філе у золотистій паніровці."
      }
    },
    {
      id: "danie-zeberka-wieprzowe",
      slug: "zeberka-wieprzowe-w-kapuscie",
      categoryId: "dania-miesne",
      priceGrosze: 2500,
      pricePln: 25,
      image: "img/clean/zeberka.webp",
      sourceStatus: "confirmed_menu",
      featured: true,
      available: true,
      name: { pl: "Żeberka wieprzowe pieczone / w kapuście", uk: "Реберця свинячі запечені / тушковані в капусті" },
      description: {
        pl: "Miękkie, soczyste żeberka wieprzowe z kminkiem i świeżą natką (w karcie menu lokalu: 25 zł; w dostawie z kapustą: 35 zł).",
        uk: "М'які соковиті свинячі реберця з кмином та зеленню (у друкованому меню локалу: 25 zł)."
      }
    },
    {
      id: "danie-kruchenyk",
      slug: "kruchenyk",
      categoryId: "dania-miesne",
      priceGrosze: 2600,
      pricePln: 26,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kruchenyk po ukraińsku", uk: "Крученики м'ясні по-українськи" },
      description: {
        pl: "Tradycyjne ukraińskie zrazy mięsne z aromatycznym farszem i sosem.",
        uk: "Традиційні українські м'ясні крученики із соковитою начинкою та підливою."
      }
    },
    {
      id: "danie-sznycel-wiedenski",
      slug: "sznycel-wiedenski-z-serem",
      categoryId: "dania-miesne",
      priceGrosze: 3500,
      pricePln: 35,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Sznycel wiedeński z serem", uk: "Шніцель віденський із сиром" },
      description: {
        pl: "Okazały sznycel zapiekany z ciągnącym się złotym serem.",
        uk: "Великий соковитий шніцель, запечений під золотистою сирною скоринкою."
      }
    },
    {
      id: "danie-skrzydelka-w-sosie-miodowym",
      slug: "skrzydelka-w-sosie-miodowym",
      categoryId: "dania-miesne",
      priceGrosze: 3000,
      pricePln: 30,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Skrzydełka w sosie miodowym", uk: "Крильця курячі в медовому соусі" },
      description: {
        pl: "Karmelizowane, chrupiące skrzydełka kurczaka w glazurze miodowej.",
        uk: "Карамелізовані хрусткі курячі крильця у запашній медовій глазурі."
      }
    },
    {
      id: "danie-kumpir-po-ukrainsku",
      slug: "kumpir-po-ukrainsku",
      categoryId: "dania-miesne",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kumpir po ukraińsku", uk: "Кумпір по-українськи (печена картопля з начинкою)" },
      description: {
        pl: "Wielki pieczony ziemniak z masłem, serem i obfitym domowym nadzieniem po ukraińsku.",
        uk: "Велика запечена картопля з маслом, сиром та щедрою домашньою начинкою по-українськи."
      }
    },
    {
      id: "danie-placki-ziemniaczane",
      slug: "placki-ziemniaczane-zwykle-i-z-grzybami",
      categoryId: "dania-miesne",
      priceGrosze: 1500,
      pricePln: 15,
      image: "img/clean/placki.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Placki ziemniaczane (zwykłe / z grzybami)", uk: "Деруни домашні (класичні / з грибами)" },
      description: {
        pl: "Złociste, chrupiące placki ze świeżo tartych ziemniaków podawane ze śmietaną i sosem czosnkowym (zwykłe 15 zł / z grzybami 25 zł).",
        uk: "Золотисті хрусткі деруни зі свіжотертої картоплі зі сметаною та часниковим соусом (класичні 15 zł / з грибами 25 zł)."
      },
      variants: [
        { id: "zwykle", label: { pl: "Klasyczne z sosem (5 szt.) — 15 zł", uk: "Класичні з соусом (5 шт.) — 15 zł" }, priceGrosze: 1500 },
        { id: "z-grzybami", label: { pl: "Nadziewane grzybami z sosem (3 szt.) — 25 zł", uk: "Фаршировані грибами з соусом (3 шт.) — 25 zł" }, priceGrosze: 2500 }
      ]
    },
    {
      id: "danie-kopytka-z-boczkiem",
      slug: "kopytka-z-boczkiem-i-cebulka",
      categoryId: "dania-miesne",
      priceGrosze: 2200,
      pricePln: 22,
      image: "img/clean/kopytka.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Kopytka z boczkiem i cebulką", uk: "Копитка (галушки картопляні) з беконом та цибулькою" },
      description: {
        pl: "Miękkie domowe kopytka ziemniaczane okraszone chrupiącym wędzonym boczkiem, złocistą cebulką i koperkiem.",
        uk: "Ніжні домашні картопляні копитка зі смаженим копченим беконом, золотистою цибулькою та кропом."
      }
    },
    {
      id: "danie-ryba-smazona",
      slug: "ryba-smazona-z-maka-kukurydziana",
      categoryId: "dania-miesne",
      priceGrosze: 0,
      pricePln: null,
      image: "img/clean/ryba.webp",
      sourceStatus: "price_pending",
      featured: false,
      available: true,
      name: { pl: "Ryba smażona z mąką kukurydzianą", uk: "Риба смажена у кукурудзяному борошні" },
      description: {
        pl: "Złocisty filet rybny w chrupiącej panierce z mąki kukurydzianej ze świeżymi warzywami (zdjęcie z materiałów klienta — cena do potwierdzenia).",
        uk: "Золотисте рибне філе у хрусткій паніровці з кукурудзяного борошна зі свіжими овочами (фото з матеріалів клієнта — ціна уточнюється)."
      }
    },
    {
      id: "danie-pieczony-kalafior",
      slug: "pieczony-kalafior",
      categoryId: "dania-miesne",
      priceGrosze: 0,
      pricePln: null,
      image: "img/clean/kalafior.webp",
      sourceStatus: "price_pending",
      featured: false,
      available: true,
      name: { pl: "Pieczony kalafior złocisty", uk: "Запечена цвітна капуста зі спеціями" },
      description: {
        pl: "Różyczki kalafiora zapiekane na złoty kolor ze szczypiorkiem (zdjęcie z materiałów klienta — cena do potwierdzenia).",
        uk: "Суцвіття цвітної капусти, запечені до золотистої скоринки із зеленою цибулею (фото з матеріалів клієнта — ціна уточнюється)."
      }
    },

    // ==================== NALEŚNIKI & DESERY ====================
    {
      id: "nalesnik-smakota",
      slug: "nalesnik-smakota",
      categoryId: "nalesniki",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśnik firmowy „Smakota”", uk: "Млинець фірмовий «Смакота»" },
      description: {
        pl: "Sycący naleśnik obiadowy według autorskiej receptury szefa kuchni Smakota.",
        uk: "Ситний фірмовий млинець за авторським рецептом кухні Смакота."
      }
    },
    {
      id: "nalesnik-pizza",
      slug: "nalesnik-pizza",
      categoryId: "nalesniki",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśnik „Pizza”", uk: "Млинець «Піца» з сиром та шинкою" },
      description: {
        pl: "Duży wytrawny naleśnik z roztopionym serem, mięsem, pieczarkami i sosem pomidorowym.",
        uk: "Великий ситний млинець із розплавленим сиром, м'ясною начинкою, печерицями та соусом."
      }
    },
    {
      id: "nalesnik-wiejski-smakolyk",
      slug: "nalesnik-wiejski-smakolyk",
      categoryId: "nalesniki",
      priceGrosze: 2500,
      pricePln: 25,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśnik „Wiejski Smakołyk”", uk: "Млинець «Сільський смаколик»" },
      description: {
        pl: "Bogato nadziewany naleśnik w tradycyjnym wiejskim stylu.",
        uk: "Щедро фарширований домашній млинець у традиційному сільському стилі."
      }
    },
    {
      id: "nalesniki-z-watrobka",
      slug: "nalesniki-z-watrobka",
      categoryId: "nalesniki",
      priceGrosze: 2500,
      pricePln: 25,
      image: "img/clean/nalesniki-watrobka.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Naleśniki z wątróbką (wątrobowe)", uk: "Млинці печінкові з начинкою та зеленню" },
      description: {
        pl: "Domowe naleśniki wątrobowe z nadzieniem warzywno-grzybowym, serem i świeżym koperkiem (pozycja z kart foto Smakota).",
        uk: "Домашні печінкові млинці з овочево-грибною начинкою, сиром та свіжим кропом (позиція з фото-меню Смакота)."
      }
    },
    {
      id: "nalesniki-kurczak-pieczarki",
      slug: "nalesniki-z-kurczakiem-i-pieczarkami",
      categoryId: "nalesniki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśniki z kurczakiem i pieczarkami", uk: "Млинці з куркою та печерицями" },
      description: {
        pl: "Delikatne naleśniki nadziewane soczystym kurczakiem i podsmażanymi pieczarkami.",
        uk: "Ніжні домашні млинці з курячим філе та обсмаженими печерицями."
      }
    },
    {
      id: "krokiety-z-miesem",
      slug: "krokiety-z-miesem",
      categoryId: "nalesniki",
      priceGrosze: 1600,
      pricePln: 16,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Krokiety z mięsem", uk: "Крокети хрусткі з м'ясом" },
      description: {
        pl: "Chrupiące, panierowane krokiety naleśnikowe z wyrazistym farszem mięsnym — idealne do barszczu.",
        uk: "Хрусткі паніровані млинці-крокети зі соковитою м'ясною начинкою — ідеально до борщу."
      }
    },
    {
      id: "krokiety-kapusta-grzyby",
      slug: "krokiety-z-kapusta-i-grzybami",
      categoryId: "nalesniki",
      priceGrosze: 1600,
      pricePln: 16,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Krokiety z kapustą i grzybami", uk: "Крокети з капустою та грибами" },
      description: {
        pl: "Tradycyjne złociste krokiety z kapustą kiszoną i grzybami.",
        uk: "Традиційні золотисті крокети з тушкованою капустою та грибами."
      }
    },
    {
      id: "nalesniki-raffaello",
      slug: "nalesniki-raffaello",
      categoryId: "nalesniki",
      priceGrosze: 2600,
      pricePln: 26,
      image: "img/clean/nalesniki-raffaello.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Naleśniki „Raffaello” (3 szt.)", uk: "Млинці десертні «Raffaello» з кокосом (3 шт.)" },
      description: {
        pl: "Delikatne naleśniki z aksamitnym kremem śmietankowo-kokosowym i wiórkami kokosowymi (pozycja z kart foto Smakota).",
        uk: "Ніжні десертні млинці з вершково-кокосовим кремом та кокосовою стружкою (позиція з фото-меню Смакота)."
      }
    },
    {
      id: "nalesniki-mak-wisnia",
      slug: "nalesniki-z-makiem-i-wisnia",
      categoryId: "nalesniki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśniki z makiem i wiśnią", uk: "Млинці з маком та вишнею" },
      description: {
        pl: "Domowe naleśniki na słodko z masą makową i soczystymi wiśniami.",
        uk: "Домашні солодкі млинці з маковою начинкою та соковитою вишнею."
      }
    },
    {
      id: "nalesniki-banan-mleko",
      slug: "nalesniki-z-bananem-i-mlekiem-zageszczonym",
      categoryId: "nalesniki",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Naleśniki z bananem i mlekiem zagęszczonym", uk: "Млинці з бананом та згущеним молоком" },
      description: {
        pl: "Słodkie naleśniki ze świeżym bananem i kremowym mlekiem skondensowanym.",
        uk: "Солодкі млинці зі стиглим бананом та згущеним молоком."
      }
    },
    {
      id: "nalesniki-slodki-ser",
      slug: "domowe-nalesniki-ze-slodkim-serem",
      categoryId: "nalesniki",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Domowe naleśniki ze słodkim serem", uk: "Домашні млинці з солодким сиром" },
      description: {
        pl: "Tradycyjne naleśniki z delikatnym, waniliowym twarogiem.",
        uk: "Традиційні домашні налисники з ніжним солодким сиром."
      }
    },
    {
      id: "nalesniki-szarlotkowe",
      slug: "domowe-nalesniki-szarlotkowe",
      categoryId: "nalesniki",
      priceGrosze: 1800,
      pricePln: 18,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Domowe naleśniki szarlotkowe", uk: "Домашні млинці «Шарлотка» з яблуками" },
      description: {
        pl: "Naleśniki z prażonymi jabłkami i nutą cynamonu.",
        uk: "Запашні домашні млинці з карамелізованими яблуками та корицею."
      }
    },
    {
      id: "nalesniki-z-nutella",
      slug: "domowe-nalesniki-z-nutella",
      categoryId: "nalesniki",
      priceGrosze: 2200,
      pricePln: 22,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Domowe naleśniki z nutellą", uk: "Домашні млинці з Nutella" },
      description: {
        pl: "Ciepłe naleśniki obficie posmarowane kremem czekoladowo-orzechowym Nutella.",
        uk: "Теплі домашні млинці зі щедрою порцією горіхово-шоколадної пасти Nutella."
      }
    },
    {
      id: "nalesniki-karmel-czekolada",
      slug: "domowe-nalesniki-z-sosem-karmelowym-czekoladowym",
      categoryId: "nalesniki",
      priceGrosze: 1800,
      pricePln: 18,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Domowe naleśniki z sosem karmelowym/czekoladowym (3 szt.)", uk: "Домашні млинці з карамельним або шоколадним топiнгом (3 шт.)" },
      description: {
        pl: "Porcja 3 puszystych naleśników z polewą karmelową lub czekoladową do wyboru.",
        uk: "Порція з 3 ніжних млинців із карамельним або шоколадним соусом на вибір."
      }
    },
    {
      id: "deser-serniki",
      slug: "serniki-domowe",
      categoryId: "nalesniki",
      priceGrosze: 2000,
      pricePln: 20,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Serniki ukraińskie (Syrnyky)", uk: "Сирники домашні золотисті" },
      description: {
        pl: "Puszyste placuszki z naturalnego twarogu smażone na złoty kolor, podawane ze śmietaną.",
        uk: "Пухкі домашні сирники з натурального кисломолочного сиру зі сметаною."
      }
    },
    {
      id: "deser-rurki-z-mlekiem",
      slug: "rurki-z-mlekiem-skondensowanym",
      categoryId: "nalesniki",
      priceGrosze: 700,
      pricePln: 7,
      image: "img/clean/rurki.webp",
      sourceStatus: "online_menu",
      featured: true,
      available: true,
      name: { pl: "Rurki z mlekiem skondensowanym", uk: "Вафельні трубочки зі згущеним молоком" },
      description: {
        pl: "Chrupiące domowe rurki waflowe wypełnione po brzegi gotowanym mlekiem skondensowanym, oprószone cukrem pudrem.",
        uk: "Хрусткі домашні вафельні трубочки, щедро наповнені вареним згущеним молоком під цукровою пудрою."
      }
    },
    {
      id: "deser-racuchy-z-jablkami",
      slug: "racuchy-z-jablkami",
      categoryId: "nalesniki",
      priceGrosze: 0,
      pricePln: null,
      image: "img/clean/racuchy.webp",
      sourceStatus: "price_pending",
      featured: false,
      available: true,
      name: { pl: "Racuchy z jabłkami", uk: "Оладки пухкі з яблуками" },
      description: {
        pl: "Puszyste domowe racuchy z kawałkami świeżych jabłek i cukrem pudrem (zdjęcie z materiałów klienta — cena do potwierdzenia).",
        uk: "Пухкі домашні оладки зі шматочками яблук та цукровою пудрою (фото з матеріалів клієнта — ціна уточнюється)."
      }
    },

    // ==================== SAŁATKI ====================
    {
      id: "salatka-cezar",
      slug: "salatka-cezar",
      categoryId: "salatki",
      priceGrosze: 2300,
      pricePln: 23,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Sałatka Cezar", uk: "Салат «Цезар» з куркою" },
      description: {
        pl: "Chrupiąca sałata z grillowanym kurczakiem, pomidorkami, grzankami, serem i sosem Cezar.",
        uk: "Хрустке листя салату з курячим філе, томатами, сухариками, сиром та фірмовим соусом."
      }
    },
    {
      id: "salatka-kozaczok",
      slug: "salatka-kozaczok",
      categoryId: "salatki",
      priceGrosze: 2100,
      pricePln: 21,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Sałatka „Kozaczok”", uk: "Салат фірмовий «Козачок»" },
      description: {
        pl: "Sycąca sałatka firmowa w tradycyjnym ukraińskim stylu.",
        uk: "Ситний фірмовий салат за традиційним українським рецептом."
      }
    },
    {
      id: "salatka-sledz-pod-pierzynka",
      slug: "sledz-pod-pierzynka",
      categoryId: "salatki",
      priceGrosze: 1800,
      pricePln: 18,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Śledź pod pierzynką", uk: "Оселедець під шубою" },
      description: {
        pl: "Klasyczna warstwowa sałatka ze śledziem, buraczkami, ziemniakami, marchewką i jajkiem.",
        uk: "Класичний домашній шаровий салат з оселедцем, буряком, картоплею, морквою та яйцем."
      }
    },

    // ==================== DODATKI OBIADOWE ====================
    {
      id: "dodatek-gotowane-ziemniaki",
      slug: "gotowane-ziemniaki-z-koperkiem-puree",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 700,
      pricePln: 7,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Gotowane ziemniaki z koperkiem / puree", uk: "Відварна картопля з кропом / пюре" },
      description: {
        pl: "Ziemniaki z masłem i świeżym koperkiem lub kremowe puree ziemniaczane.",
        uk: "Відварна картопля з маслом і свіжим кропом або ніжне картопляне пюре."
      }
    },
    {
      id: "dodatek-frytki",
      slug: "frytki",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Frytki (M / Duże)", uk: "Картопля фрі (M / Велика)" },
      description: {
        pl: "Chrupiące złociste frytki smażone na świeżo (8 zł / duża porcja 10 zł).",
        uk: "Хрустка золотиста картопля фрі (8 zł / велика порція 10 zł)."
      },
      variants: [
        { id: "std", label: { pl: "Porcja standard — 8 zł", uk: "Стандартна порція — 8 zł" }, priceGrosze: 800 },
        { id: "lg", label: { pl: "Porcja duża — 10 zł", uk: "Велика порція — 10 zł" }, priceGrosze: 1000 }
      ]
    },
    {
      id: "dodatek-makaron",
      slug: "makaron",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Makaron", uk: "Макарони домашні" },
      description: {
        pl: "Porcja makaronu obiadowego do drugiego dania.",
        uk: "Порція відварних макаронів як гарнір до основної страви."
      }
    },
    {
      id: "dodatek-ryz",
      slug: "ryz",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Ryż", uk: "Рис відварний" },
      description: {
        pl: "Gotowany na sypko ryż z odrobiną masła.",
        uk: "Розсипчастий відварний рис із вершковим маслом."
      }
    },
    {
      id: "dodatek-wiejskie-ziemniaki",
      slug: "wiejskie-ziemniaki",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Wiejskie ziemniaki (M / Duże)", uk: "Картопля по-селянськи (M / Велика)" },
      description: {
        pl: "Złociste cząstki ziemniaków pieczone z ziołami (8 zł / duża porcja 10 zł).",
        uk: "Золотисті скибочки картоплі по-селянськи із запашними травами (8 zł / 10 zł)."
      },
      variants: [
        { id: "std", label: { pl: "Porcja standard — 8 zł", uk: "Стандартна порція — 8 zł" }, priceGrosze: 800 },
        { id: "lg", label: { pl: "Porcja duża — 10 zł", uk: "Велика порція — 10 zł" }, priceGrosze: 1000 }
      ]
    },
    {
      id: "dodatek-makaron-po-wlosku",
      slug: "makaron-po-wlosku",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Makaron po włosku", uk: "Макарони по-італійськи з соусом" },
      description: {
        pl: "Makaron z sosem pomidorowo-ziołowym i serem.",
        uk: "Макарони з ароматним томатно-трав'яним соусом та сиром."
      }
    },
    {
      id: "dodatek-ryz-z-warzywami",
      slug: "ryz-z-warzywami",
      categoryId: "dodatki-obiadowe",
      priceGrosze: 1500,
      pricePln: 15,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Ryż z warzywami", uk: "Рис з овочами" },
      description: {
        pl: "Kolorowy ryż duszony z warzywami i przyprawami.",
        uk: "Розсипчастий рис, тушкований зі свіжими овочами."
      }
    },

    // ==================== SURÓWKI ====================
    {
      id: "surowka-biala-kapusta",
      slug: "biala-kapusta",
      categoryId: "surowki",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Surówka z białej kapusty", uk: "Салат зі свіжої білої капусти" },
      description: {
        pl: "Świeża, chrupiąca biała kapusta z marchewką, koperkiem i lekkim dressingiem.",
        uk: "Свіжа хрустка біла капуста з морквою та зеленим кропом."
      }
    },
    {
      id: "surowka-kapusta-kiszona",
      slug: "kapusta-kiszona",
      categoryId: "surowki",
      priceGrosze: 600,
      pricePln: 6,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Kapusta kiszona", uk: "Капуста квашена домашня" },
      description: {
        pl: "Tradycyjna domowa kapusta kiszona z marchewką i odrobiną oleju.",
        uk: "Традиційна хрустка квашена капуста з морквою та запашною олією."
      }
    },
    {
      id: "surowka-buraczki",
      slug: "buraczki",
      categoryId: "surowki",
      priceGrosze: 600,
      pricePln: 6,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Buraczki domowe", uk: "Бурячок домашній" },
      description: {
        pl: "Delikatnie doprawione tarte buraczki obiadowe.",
        uk: "Ніжний тертий столовий бурячок до основних страв."
      }
    },
    {
      id: "surowka-marchewka-po-koreansku",
      slug: "marchewka-po-koreansku",
      categoryId: "surowki",
      priceGrosze: 600,
      pricePln: 6,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Marchewka po-koreańsku", uk: "Морква по-корейськи" },
      description: {
        pl: "Soczysta marchewka marynowana z czosnkiem i kolendrą.",
        uk: "Соковита пряна морква по-корейськи з часником та коріандром."
      }
    },

    // ==================== SOSY & NAPOJE ====================
    {
      id: "sos-smietana",
      slug: "smietana",
      categoryId: "sosy-napoje",
      priceGrosze: 200,
      pricePln: 2,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Śmietana gęsta", uk: "Сметана домашня густа" },
      description: {
        pl: "Porcja gęstej śmietany do pierogów, pielmieni, placków lub barszczu.",
        uk: "Порція густої сметани до вареників, пельменів, дерунів або борщу."
      }
    },
    {
      id: "sos-czosnkowy",
      slug: "sos-czosnkowy",
      categoryId: "sosy-napoje",
      priceGrosze: 200,
      pricePln: 2,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Sos czosnkowy domowy", uk: "Соус часниковий домашній" },
      description: {
        pl: "Aromatyczny sos czosnkowy ze świeżym koperkiem.",
        uk: "Ароматний вершково-часниковий соус зі свіжим кропом."
      }
    },
    {
      id: "sos-ketchup",
      slug: "ketchup",
      categoryId: "sosy-napoje",
      priceGrosze: 200,
      pricePln: 2,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Ketchup", uk: "Кетчуп томатний" },
      description: {
        pl: "Porcja ketchupu do frytek, czebureków i dań mięsnych.",
        uk: "Порція томатного кетчупу до картоплі фрі, чебуреків та м'ясних страв."
      }
    },
    {
      id: "napoj-033",
      slug: "napoj-033-coca-cola-fanta-sprite",
      categoryId: "sosy-napoje",
      priceGrosze: 600,
      pricePln: 6,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "0,33 l (Coca-Cola, Fanta, Sprite)", uk: "0,33 л (Coca-Cola, Fanta, Sprite)" },
      description: {
        pl: "Schłodzony napój gazowany 0,33 l — do wyboru Coca-Cola, Fanta lub Sprite.",
        uk: "Охолоджений напій 0,33 л — на вибір Coca-Cola, Fanta або Sprite."
      }
    },
    {
      id: "napoj-050",
      slug: "napoj-050-coca-cola-fanta-sprite",
      categoryId: "sosy-napoje",
      priceGrosze: 800,
      pricePln: 8,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "0,5 l (Coca-Cola, Fanta, Sprite)", uk: "0,5 л (Coca-Cola, Fanta, Sprite)" },
      description: {
        pl: "Butelka 0,5 l — do wyboru Coca-Cola, Fanta lub Sprite.",
        uk: "Пляшка 0,5 л — на вибір Coca-Cola, Fanta або Sprite."
      }
    },
    {
      id: "napoj-woda",
      slug: "woda-niegazowana-gazowana",
      categoryId: "sosy-napoje",
      priceGrosze: 300,
      pricePln: 3,
      image: null,
      sourceStatus: "confirmed_menu",
      featured: false,
      available: true,
      name: { pl: "Woda niegazowana / gazowana", uk: "Вода негазована / газована" },
      description: {
        pl: "Woda źródlana 0,5 l — niegazowana lub gazowana.",
        uk: "Вода мінеральна — негазована або газована."
      }
    }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Marek K. (Warszawa Ursus)",
      source: "Pyszne.pl / Dostawa",
      rating: 5,
      text: {
        pl: "Prawdziwy domowy smak jak u mamy! Czebureki przyjechały gorące i chrupiące, a barszcz ukraiński gęsty i naturalny, bez chemii i sztucznych przypraw.",
        uk: "Справжній домашній смак як у мами! Чебуреки приїхали гарячі та хрусткі, а український борщ густий і натуральний, без хімії та штучних приправ."
      }
    },
    {
      id: "rev-2",
      author: "Tomasz W. (Kierownik budowy)",
      source: "Zamówienie telefoniczne (15 obiadów)",
      rating: 5,
      text: {
        pl: "Regularnie zamawiamy na budowę po 12–15 zestawów Lunch dnia za 33 zł. Zupa, schabowy lub mielony, ziemniaki i surówka — chłopaki zawsze najedzeni, a ich własny kurier dowozi punktualnie.",
        uk: "Регулярно замовляємо на будівництво по 12–15 комплексних ланчів за 33 zł. Перше, відбивна або котлета, гарнір і салат — хлопці завжди ситі, а власний кур'єр привозить вчасно."
      }
    },
    {
      id: "rev-3",
      author: "Олена М. (Варшава)",
      source: "Google Maps / Odbiór w lokalu",
      rating: 5,
      text: {
        pl: "Najlepsze pielmieni, chinkali i pierogi z wiśnią na Ursusie! Widać, że nie odgrzewają gotowców, tylko robią świeże po zamówieniu. Bardzo miła obsługa.",
        uk: "Найкращі пельмені, хінкалі та вареники з вишнею на Урсусі! Видно, що нічого не розігрівають заздалегідь, а готують свіже після замовлення. Дуже приємне обслуговування."
      }
    }
  ],

  contradictionsAudit: [
    {
      id: "OQ-01",
      topic: {
        pl: "1. Numer lokalu przy ul. S. Wojciechowskiego 33 (lok. 40 vs lok. 44)",
        uk: "1. Номер локалу на ul. S. Wojciechowskiego 33 (lok. 40 чи lok. 44)"
      },
      detail: {
        pl: "Na fizycznej wydrukowanej karcie menu (zdjęcie WhatsApp) widnieje adres „ul. S. Wojciechowskiego 33/lok. 40”. W ТЗ oraz wizytówkach Google Maps / Uber Eats / Wolt widnieje „lok. 44”. Z kolei w transkrypcji rozmowy właściciel mówi: „od nas tam u nas 44-j lokal, a tam sieciowy lokal, to konkurenci”. Wymaga potwierdzenia przed drukiem i SEO.",
        uk: "На друкованому паперовому меню (фото з WhatsApp) вказано «ul. S. Wojciechowskiego 33/lok. 40». У ТЗ та Google Maps / Uber Eats / Wolt вказано «lok. 44». Водночас у транскрипції дзвінка власник каже: «від нас там у нас 44-й локал, а там мережевий локал — це конкуренти». Потребує точного підтвердження власника."
      }
    },
    {
      id: "OQ-02",
      topic: {
        pl: "2. Liczba i status drugiego lokalu (2 działające vs otwarcie za tydzień)",
        uk: "2. Кількість та статус другої точки (2 працюючі чи відкриття наступного тижня)"
      },
      detail: {
        pl: "W pierwszej minucie rozmowy klient mówi: „mam dwa punkty z jedzeniem ukraińskim”, a pod koniec: „teraz otwieramy drugi lokal, gdzieś w przyszłym tygodniu, a potem będzie trzeci, czwarty i piąty”. W publicznych bazach widnieje punkt „Smakota Mokotów — ul. Puławska 246 lok. 67”. W systemie Lokal #2 jest przygotowany w architekturze, ale oznaczony jako „Wkrótce / Do potwierdzenia”.",
        uk: "На початку розмови клієнт каже: «маю два пункти з українською їжею», а наприкінці: «ми зараз відкриваємо другий локал десь наступного тижня, а потім буде і третій, і четвертий, і п'ятий». У відкритих джерелах також фігурує «Smakota Mokotów — ul. Puławska 246 lok. 67». У системі Локал №2 закладено архітектурно зі статусом «Скоро відкриття / До підтвердження»."
      }
    },
    {
      id: "OQ-03",
      topic: {
        pl: "3. Rozbieżność między kartą drukowaną a 21 banerami fotograficznymi dań",
        uk: "3. Розбіжності між друкованим меню та 21 фото-банером страв"
      },
      detail: {
        pl: "W folderze img/ znajduje się 21 oficjalnych kart foto. 9 z nich (Chłodnik ukraiński, Grochówka, Chanakhi, Zupa pomidorowa, Kopytka z boczkiem, Placki ziemniaczane, Naleśniki z wątróbką, Naleśniki Raffaello, Rurki z mlekiem) nie widnieje na papierowej karcie z WhatsApp, lecz ma potwierdzone ceny w profilach online Smakoty. Natomiast 3 zdjęcia (Ryba smażona z mąką kukurydzianą, Pieczony kalafior, Racuchy z jabłkami) nie mają ceny w karcie — oznaczono je zgodnie z ТЗ jako „Cena do potwierdzenia”.",
        uk: "У папці img/ надано 21 фото-картку страв. 9 із них (Холодник, Гороховий суп, Чанахи, Томатний суп, Копитка з беконом, Деруни, Печінкові млинці, Млинці Raffaello, Трубочки зі згущеним молоком) відсутні на паперовому аркуші меню, але мають ціни в онлайн-меню Smakota. Ще 3 фото (Риба смажена в кукурудзяному борошні, Запечена цвітна капуста, Оладки з яблуками) не мають затвердженої ціни — позначені як «Ціна уточнюється»."
      }
    },
    {
      id: "OQ-04",
      topic: {
        pl: "4. Pisownia marki: „Smakota obiady domówi” vs „Smakota — Obiady Domowe”",
        uk: "4. Офіційне написання бренду: «Smakota obiady domówi» чи «Smakota — Obiady Domowe»"
      },
      detail: {
        pl: "W notatkach do ТЗ przekazano zapis „Smakota obiady domówi” (fonetyczny ukrainizm). Na oficjalnym logo i karcie menu widnieje „SMAKOTA MENU”, a w polskich profilach „Bistro Smakota — Obiady Domowe”.",
        uk: "У вихідних нотатках до ТЗ передано «Smakota obiady domówi». На офіційному логотипі та меню вказано «SMAKOTA MENU», а у польських профілях — «Bistro Smakota — Obiady Domowe»."
      }
    },
    {
      id: "OQ-05",
      topic: {
        pl: "5. Platforma ocen („na Pysznym około 5 gwiazdek”) vs Google Maps",
        uk: "5. Платформа відгуків («на Пишному близько 5 зірок») та Google Maps"
      },
      detail: {
        pl: "W transkrypcji automat rozpoznał nazwę jako „Пышная, Глова” — chodzi o polskie platformy Pyszne.pl oraz Glovo (a także Uber Eats i Wolt, gdzie ocena wynosi ok. 4.4–4.8/5). W Google Maps ocena wynosi ok. 3.9/5 (ponad 120 opinii), o czym właściciel wspomniał w kontekście nieuczciwej konkurencji z sąsiedniego lokalu.",
        uk: "У транскрипції розпізнано як «Пышная, Глова» — йдеться про польські сервіси Pyszne.pl та Glovo (також заклад працює з Uber Eats і Wolt, де рейтинг 4.4–4.8/5). У Google Maps оцінка ~3.9/5 (понад 120 відгуків), про що власник згадував у контексті конкурентів по сусідству."
      }
    },
    {
      id: "OQ-06",
      topic: {
        pl: "6. Strefy dostawy własnym kurierem i płatności online",
        uk: "6. Тарифи доставки власним кур'єром та онлайн-оплата"
      },
      detail: {
        pl: "Właściciel potwierdził własnego kuriera, odbiór osobisty, zamówienia na budowy (10–15 obiadów) oraz chęć płatności online, ale nie podał jeszcze stawek dostawy ani operatora płatności (BLIK/Przelewy24/Stripe). W wersji DEMO checkout wyraźnie informuje o charakterze demonstracyjnym.",
        uk: "Власник підтвердив наявність власного кур'єра, самовивіз, замовлення на будівництва (10–15 обідів) та інтерес до онлайн-оплати, але ще не надав тарифи доставки та платіжного провайдера. У DEMO-версії checkout явно маркує ці кроки як демонстраційні."
      }
    }
  ]
};
