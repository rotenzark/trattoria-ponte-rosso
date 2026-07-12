/* Trattoria Ponte Rosso — i18n IT/EN, intro "il ponte", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_story: 'La memoria',
      nav_menu2: 'Il menù',
      nav_wines: 'La cantina',
      nav_hours: 'Orari e dove',
      book_short: 'Prenota',
      book_cta: 'Prenota un tavolo',
      menu_cta: 'Guarda il menù',
      call_cta: 'Chiama',
      hero_eyebrow: 'Trattoria · Naviglio Grande · Ripa di Porta Ticinese 23, Milano',
      hero_claim: 'La cucina della memoria, in riva al Naviglio.',
      hero_lead: "Trecento ricette tra la cucina di casa e i piatti dimenticati, la spesa fatta ogni mattina e la stessa mano in cucina da più di vent'anni. Il ponte è quello lì fuori.",
      hero_badge: '8,7 su 10 su TheFork · sul Naviglio Grande',
      mem_title: 'La cucina della memoria',
      mem_sub: 'È così che la chiamiamo noi, da sempre.',
      mem_p1: "Il Naviglio è sempre stato un luogo di lavoro e di incontro, e la trattoria è nata così: da un gruppo di amici, con la stessa direzione in cucina da più di vent'anni e una giovane coppia in sala. Le ricette vengono dalla storia della cucina italiana — quella che si faceva in casa e per strada, semplice e popolare — e dalla riedizione, più colta, di piatti dimenticati.",
      mem_p2: 'Privilegiamo i piatti di Milano, Roma e Napoli: un asse che unisce un paese intero. E come in una famiglia, la spesa e la preparazione sono quotidiane: si seguono le stagioni, si comprano cose buone, per lo più locali, e si cucinano il giorno stesso.',
      n1: 'ricette in repertorio',
      n2: 'anni della stessa cucina',
      n3: 'città in un menù: Milano, Roma, Napoli',
      menu_title: 'Il menù',
      menu_sub: 'Cambia con le stagioni e con la spesa del mattino: questi sono i classici della casa.',
      c1: 'Primi',
      pr1: 'Risotto alla milanese',
      pr2: 'Risotto zucchine e fiori',
      pr3: 'Spaghetti alla bottarga',
      pr4: 'Spaghetti allo scoglio',
      pr5: 'Paccheri alle alici',
      pr6: 'Gnocchi al pesto',
      c2: 'Secondi',
      sc1: 'Ossobuco con risotto',
      sc2: 'Cotoletta alla milanese',
      sc3: 'Saltimbocca alla romana',
      sc4: 'Spezzatino di manzo',
      sc5: 'Tagliata di manzo',
      sc6: "Costolette d'agnello",
      c3: 'Insalate e contorni',
      ct1: 'Insalata di polpo',
      ct2: 'Zucchine e parmigiano',
      ct3: 'Insalata di stagione',
      c4: 'Dolci',
      dl1: 'Tiramisù',
      dl2: 'Torta al pistacchio',
      dl3: 'Cassatina',
      menu_note: 'Prezzi indicativi — il menù del giorno, con la spesa del mattino, lo trovate al tavolo',
      cant_title: 'La cantina',
      cant_sub: 'Piccoli produttori, prezzi da trattoria.',
      c5: 'Rossi',
      c6: 'Bianchi',
      cant_note: 'La carta completa è al tavolo — questi sono gli affezionati',
      hours_title: 'Orari e dove',
      hours_sub: 'In riva al Naviglio Grande, davanti al ponte.',
      hours_caption: 'Orari di apertura',
      weekdays: 'Lunedì – Sabato',
      sun: 'Domenica',
      sun_lunch: 'solo pranzo',
      metro: 'M2 Porta Genova, dieci minuti a piedi lungo il Naviglio',
      maps: 'Apri in Google Maps',
      book_note: 'La domenica si lavora solo a pranzo: meglio prenotare.',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'La trattoria',
      f_line: 'La cucina della memoria sul Naviglio Grande: Milano, Roma e Napoli nello stesso menù.',
      aria_top: 'Ponte Rosso — torna su',
      aria_nav: 'Navigazione principale',
      aria_numbers: 'La trattoria in numeri'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_story: 'The memory',
      nav_menu2: 'The menu',
      nav_wines: 'The cellar',
      nav_hours: 'Hours & location',
      book_short: 'Book',
      book_cta: 'Book a table',
      menu_cta: 'See the menu',
      call_cta: 'Call',
      hero_eyebrow: 'Trattoria · Naviglio Grande · Ripa di Porta Ticinese 23, Milan',
      hero_claim: 'The cuisine of memory, on the Naviglio bank.',
      hero_lead: "Three hundred recipes spanning home cooking and forgotten dishes, groceries bought every morning and the same hand in the kitchen for over twenty years. The bridge is the one right outside.",
      hero_badge: '8.7 out of 10 on TheFork · on the Naviglio Grande',
      mem_title: 'The cuisine of memory',
      mem_sub: "That's what we've always called it.",
      mem_p1: "The Naviglio has always been a place of work and encounter, and the trattoria was born that way: from a group of friends, with the same kitchen direction for over twenty years and a young couple running the room. The recipes come from the history of Italian cooking — the simple, popular kind made at home and in the street — and from the more learned revival of forgotten dishes.",
      mem_p2: "We favour the dishes of Milan, Rome and Naples: an axis that joins a whole country. And as in a family, shopping and cooking happen daily: we follow the seasons, buy good, mostly local things, and cook them the same day.",
      n1: 'recipes in the repertoire',
      n2: 'years of the same kitchen',
      n3: 'cities on one menu: Milan, Rome, Naples',
      menu_title: 'The menu',
      menu_sub: "It changes with the seasons and the morning's shopping: these are the house classics.",
      c1: 'First courses',
      pr1: 'Milanese saffron risotto',
      pr2: 'Risotto with courgettes and their flowers',
      pr3: 'Spaghetti with bottarga',
      pr4: 'Seafood spaghetti',
      pr5: 'Paccheri with anchovies',
      pr6: 'Gnocchi with pesto',
      c2: 'Main courses',
      sc1: 'Ossobuco with risotto',
      sc2: 'Milanese veal cutlet',
      sc3: 'Saltimbocca alla romana',
      sc4: 'Beef stew',
      sc5: 'Sliced beef steak',
      sc6: 'Lamb chops',
      c3: 'Salads & sides',
      ct1: 'Octopus salad',
      ct2: 'Courgettes and Parmesan',
      ct3: 'Seasonal salad',
      c4: 'Desserts',
      dl1: 'Tiramisù',
      dl2: 'Pistachio cake',
      dl3: 'Cassatina',
      menu_note: "Indicative prices — the day's menu, with the morning's shopping, is at the table",
      cant_title: 'The cellar',
      cant_sub: 'Small producers, trattoria prices.',
      c5: 'Reds',
      c6: 'Whites',
      cant_note: 'The full list is at the table — these are the regulars',
      hours_title: 'Hours & location',
      hours_sub: 'On the Naviglio Grande bank, facing the bridge.',
      hours_caption: 'Opening hours',
      weekdays: 'Monday – Saturday',
      sun: 'Sunday',
      sun_lunch: 'lunch only',
      metro: 'M2 Porta Genova, a ten-minute walk along the Naviglio',
      maps: 'Open in Google Maps',
      book_note: 'On Sundays we serve lunch only: booking is best.',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The trattoria',
      f_line: 'The cuisine of memory on the Naviglio Grande: Milan, Rome and Naples on the same menu.',
      aria_top: 'Ponte Rosso — back to top',
      aria_nav: 'Main navigation',
      aria_numbers: 'The trattoria in numbers'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('ponterosso-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('ponterosso-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "il ponte" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var attraversa = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(attraversa, 2350);
      var endTimer = setTimeout(finishIntro, 3200);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-contenuto, .sezione-titolo, .sezione-sub, .memoria-testo, .memoria-numeri, ' +
      '.menu-cat, .menu-nota, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
