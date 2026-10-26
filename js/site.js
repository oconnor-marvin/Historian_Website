/* =====================================================================
   SITE.JS — the "engine" that builds parts of the pages
   ---------------------------------------------------------------------
   YOU SHOULDN'T NEED TO EDIT THIS FILE.
   To change talks, edit  js/talks-data.js
   To change the calendar, edit  js/calendar-data.js

   What this file does:
   1. Makes the ☰ menu button open and close on phones.
   2. Fills in the calendar on the home page.
   3. Fills in the three featured talks on the home page.
   4. Builds the whole list of talks on the Talks page.
   5. Builds each talk / bundle page from the address, e.g.
      talk.html?id=french-go-first
   Each page has empty boxes with an id (like id="calendar-list"); this
   file finds those boxes and puts the right content inside them.
   ===================================================================== */


/* ---------------------------------------------------------------------
   SMALL HELPERS
   --------------------------------------------------------------------- */

// Makes text safe to put into the page (so a stray < or & can't break it).
function safe(text) {
  return String(text == null ? '' : text)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Finds a talk (or a bundle) by its id. Returns it with its topic attached.
function findById(id) {
  for (const topic of TOPICS) {
    if (topic.bundle && topic.bundle.id === id) return { item: topic.bundle, topic: topic, isBundle: true };
    for (const talk of topic.talks) {
      if (talk.id === id) return { item: talk, topic: topic, isBundle: false };
    }
  }
  return null;
}

// Turns a normal YouTube or Vimeo link into the special "embed" link
// that can be shown inside the page.
function videoEmbedLink(url) {
  if (!url) return '';
  let m;
  if ((m = url.match(/youtu\.be\/([\w-]+)/)))                 return 'https://www.youtube.com/embed/' + m[1];
  if ((m = url.match(/youtube\.com\/watch\?v=([\w-]+)/)))     return 'https://www.youtube.com/embed/' + m[1];
  if ((m = url.match(/youtube\.com\/embed\/([\w-]+)/)))       return 'https://www.youtube.com/embed/' + m[1];
  if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/))) {
    // Unlisted Vimeo links have an extra code after the number; keep it.
    return 'https://player.vimeo.com/video/' + m[1] + (m[2] ? '?h=' + m[2] : '');
  }
  return url; // anything else: use it as it is
}

// The thumbnail picture. If there is no image yet, shows a coloured
// panel with the title written on it.
function thumbnailHtml(item, topic, kicker, extraClass) {
  const picture = item.thumbnail
    ? '<img src="' + safe(item.thumbnail) + '" alt="" loading="lazy">'
    : '<span class="thumb-kicker">' + safe(kicker) + '</span>' +
      '<span class="thumb-title">' + safe(item.title) + '</span>';
  return '<div class="thumb ' + (extraClass || '') + '" style="background-color:' + safe(topic.colour) + '">' + picture + '</div>';
}

// One clickable talk "tile" (thumbnail + title + one line + price).
function talkTileHtml(talk, topic) {
  return '' +
    '<a class="tile" href="talk.html?id=' + encodeURIComponent(talk.id) + '">' +
      thumbnailHtml(talk, topic, talk.part || topic.name) +
      '<div class="tile-text">' +
        '<span class="tile-title">' + safe(talk.title) + '</span>' +
        '<span class="tile-line">' + safe(talk.line) + '</span>' +
        '<span class="tile-meta">' + safe(talk.length) + ' · ' + safe(talk.price) + '</span>' +
      '</div>' +
    '</a>';
}

// The tile for a bundle (looks like a little stack of cards).
function bundleTileHtml(bundle, topic) {
  return '' +
    '<a class="tile" href="talk.html?id=' + encodeURIComponent(bundle.id) + '">' +
      thumbnailHtml(bundle, topic, 'The series · ' + bundle.includes.length + ' talks', 'thumb-stack') +
      '<div class="tile-text">' +
        '<span class="tile-title">' + safe(bundle.title) + '</span>' +
        '<span class="tile-line">' + safe(bundle.line) + '</span>' +
        '<span class="tile-meta tile-saving">' + safe(bundle.price) + ' · save ' + safe(bundle.saving) + '</span>' +
      '</div>' +
    '</a>';
}

const CHEVRON = '<svg class="chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7l5 5 5-5"/></svg>';


/* ---------------------------------------------------------------------
   1. PHONE MENU
   --------------------------------------------------------------------- */
function setupMenu() {
  const button = document.querySelector('.menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;
  button.addEventListener('click', function () {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close the menu after tapping one of its links
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ---------------------------------------------------------------------
   2. HOME PAGE: CALENDAR
   On a laptop every voyage starts open. On a phone only the first one
   does, so the list isn't miles long; the rest open with a tap.
   --------------------------------------------------------------------- */
function buildCalendar() {
  const box = document.getElementById('calendar-list');
  if (!box || typeof SAILINGS === 'undefined') return;
  const isPhone = window.innerWidth < 760;
  let html = '';
  SAILINGS.forEach(function (sailing, sIndex) {
    let voyagesHtml = '';
    sailing.voyages.forEach(function (voyage, vIndex) {
      const startOpen = !isPhone || (sIndex === 0 && vIndex === 0);
      const ports = voyage.ports.map(function (p) { return '<li><span>' + safe(p) + '</span></li>'; }).join('');
      voyagesHtml += '' +
        '<details class="leg"' + (startOpen ? ' open' : '') + '>' +
          '<summary>' +
            '<span class="leg-text"><span class="leg-dates">' + safe(voyage.dates) + '</span>' +
            '<span class="leg-title">' + safe(voyage.title) + '</span></span>' +
            CHEVRON +
          '</summary>' +
          '<ol class="ports" aria-label="Ports, in order">' + ports + '</ol>' +
        '</details>';
    });
    html += '' +
      '<article class="sailing">' +
        '<div class="sailing-info">' +
          '<h3>' + safe(sailing.region) + '</h3>' +
          '<span class="sailing-dates">' + safe(sailing.dates) + '</span>' +
          '<span class="sailing-ship">' + safe(sailing.ship) + '</span>' +
          '<span class="sailing-summary">' + safe(sailing.summary) + '</span>' +
        '</div>' +
        '<div class="sailing-legs">' + voyagesHtml + '</div>' +
      '</article>';
  });
  box.innerHTML = html;
}


/* ---------------------------------------------------------------------
   3. HOME PAGE: THREE FEATURED TALKS
   --------------------------------------------------------------------- */
function buildFeatured() {
  const box = document.getElementById('featured-talks');
  if (!box || typeof FEATURED_TALKS === 'undefined') return;
  box.innerHTML = FEATURED_TALKS.map(function (id) {
    const found = findById(id);
    if (!found) return '';
    return found.isBundle ? bundleTileHtml(found.item, found.topic) : talkTileHtml(found.item, found.topic);
  }).join('');
}


/* ---------------------------------------------------------------------
   4. TALKS PAGE: topic buttons + one section per topic
   --------------------------------------------------------------------- */
function buildTalksPage() {
  const buttonBox = document.getElementById('topic-buttons');
  const sectionBox = document.getElementById('topic-sections');
  if (!buttonBox || !sectionBox) return;

  buttonBox.innerHTML = TOPICS.map(function (topic) {
    return '<a class="topic-button" href="#' + safe(topic.id) + '">' + safe(topic.name) + ' <span>' + topic.talks.length + '</span></a>';
  }).join('');

  sectionBox.innerHTML = TOPICS.map(function (topic) {
    const count = topic.talks.length + (topic.talks.length === 1 ? ' talk' : ' talks');
    const prices = topic.bundle ? ' · $15 each, or ' + topic.bundle.price + ' for the series' : ' · $15 each';

    // The big Spain section has a photo next to its intro.
    let introHtml;
    if (topic.photo || topic.id === 'spain') {
      const photo = topic.photo
        ? '<figure class="topic-photo"><img src="' + safe(topic.photo) + '" alt="' + safe(topic.photoAlt) + '" loading="lazy"></figure>'
        : '<div class="photo-placeholder">Photo to add: Jacob on a balcony above Potosí<br>(see "photo" in js/talks-data.js)</div>';
      introHtml = '<div class="topic-feature">' + photo + '<p class="topic-intro">' + safe(topic.intro) + '</p></div>';
    } else {
      introHtml = '<p class="topic-intro">' + safe(topic.intro) + '</p>';
    }

    const tiles = (topic.bundle ? bundleTileHtml(topic.bundle, topic) : '') +
      topic.talks.map(function (talk) { return talkTileHtml(talk, topic); }).join('');

    return '' +
      '<section class="topic-section" id="' + safe(topic.id) + '">' +
        '<div class="topic-head"><h2>' + safe(topic.name) + '</h2><span>' + count + prices + '</span></div>' +
        introHtml +
        '<div class="talk-grid">' + tiles + '</div>' +
      '</section>';
  }).join('');

  // If someone arrived with #vikings etc. in the address, jump there now
  // that the sections exist.
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
}


/* ---------------------------------------------------------------------
   5. SINGLE TALK PAGE / BUNDLE PAGE  (talk.html?id=...)
   --------------------------------------------------------------------- */
function buildTalkPage() {
  const box = document.getElementById('talk-content');
  if (!box) return;

  const id = new URLSearchParams(location.search).get('id');
  const found = id ? findById(id) : null;
  if (!found) {
    box.innerHTML = '<div class="talk-heading"><h1>Talk not found</h1><p>That talk seems to have wandered off. <a href="talks.html">See all the talks</a>.</p></div>';
    return;
  }

  const item = found.item, topic = found.topic, isBundle = found.isBundle;
  document.title = item.title + ' — Jacob O\'Connor Marvin';

  // Small label above the title
  let label;
  if (isBundle) label = topic.name + ' · Series of ' + item.includes.length + ' talks';
  else if (item.part && topic.bundle) label = topic.name + ' · ' + item.part + ' of ' + topic.bundle.includes.length;
  else label = topic.name;

  // Trailer video, or the thumbnail if there's no trailer yet
  let media;
  if (item.trailer) {
    media = '<div class="video"><iframe src="' + safe(videoEmbedLink(item.trailer)) + '" title="Trailer: ' + safe(item.title) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>' +
            '<span class="media-caption">Trailer</span>';
  } else {
    media = thumbnailHtml(item, topic, isBundle ? 'The series · ' + item.includes.length + ' talks' : (item.part ? topic.name + ' · ' + item.part : topic.name), isBundle ? 'thumb-stack' : '');
  }

  // The Buy box
  const buyLink = item.gumroad || '#';
  let priceBlock = '<div class="price-row"><span class="price">' + safe(item.price) + '</span><span class="length">' + safe(item.length) + '</span></div>';
  if (isBundle) priceBlock += '<span class="tile-saving">' + safe(item.fullPrice) + ' if bought separately. You save ' + safe(item.saving) + '.</span>';

  let bundleNote = '';
  if (!isBundle && topic.bundle && topic.bundle.includes.indexOf(item.id) !== -1) {
    bundleNote = '<p class="bundle-note">Also available as part of <a href="talk.html?id=' + encodeURIComponent(topic.bundle.id) + '">' + safe(topic.bundle.title) + '</a>, ' + safe(topic.bundle.price) + ' for all ' + topic.bundle.includes.length + '.</p>';
  }

  const buyBox = '' +
    '<aside class="buy-box" aria-label="Buy">' +
      '<div class="price-block">' + priceBlock + '</div>' +
      // Gumroad's script (loaded at the bottom of talk.html) turns this
      // link into a pop-up checkout instead of leaving the site.
      '<a class="button button-wide" href="' + safe(buyLink) + '">' + (isBundle ? 'Buy the series' : 'Buy the talk') + '</a>' +
      '<p class="buy-note">After you buy, ' + (isBundle ? 'all the talks live' : 'the talk lives') + ' in your Gumroad library. Watch ' + (isBundle ? 'them' : 'it') + ' there on any device, as often as you like.</p>' +
      bundleNote +
    '</aside>';

  // "What it covers" paragraphs (falls back to the one-line description)
  const paragraphs = (item.about && item.about.length) ? item.about : [item.line];
  const about = '<section class="talk-about"><h2>What it covers</h2>' +
    paragraphs.map(function (p) { return '<p>' + safe(p) + '</p>'; }).join('') + '</section>';

  // For bundles: list the talks inside it
  let included = '';
  if (isBundle) {
    included = '<section class="included"><h2>The talks in this series</h2>' +
      item.includes.map(function (talkId) {
        const t = findById(talkId);
        if (!t) return '';
        return '' +
          '<a class="included-row" href="talk.html?id=' + encodeURIComponent(t.item.id) + '">' +
            thumbnailHtml(t.item, topic, t.item.part || topic.name) +
            '<div class="tile-text">' +
              '<span class="eyebrow">' + safe(t.item.part || '') + '</span>' +
              '<span class="tile-title">' + safe(t.item.title) + '</span>' +
              '<span class="tile-line">' + safe(t.item.line) + '</span>' +
              '<span class="tile-meta">' + safe(t.item.length) + ' · ' + safe(t.item.price) + ' on its own</span>' +
            '</div>' +
          '</a>';
      }).join('') + '</section>';
  }

  box.innerHTML = '' +
    '<div class="talk-heading"><span class="eyebrow">' + safe(label) + '</span><h1>' + safe(item.title) + '</h1></div>' +
    '<div class="talk-main"><div class="talk-media">' + media + '</div>' + buyBox + '</div>' +
    about + included;
}


/* ---------------------------------------------------------------------
   6. HOME PAGE: TESTIMONIALS SLIDESHOW
   The quotes themselves are written in index.html (section 5b).
   To change how long each quote stays up, change SECONDS_PER_QUOTE.
   --------------------------------------------------------------------- */
const SECONDS_PER_QUOTE = 10;

function setupCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const slideBox = carousel.querySelector('.slides');
  const dotBox = carousel.querySelector('.carousel-dots');
  const pauseButton = carousel.querySelector('.carousel-pause');
  if (slides.length < 2) { carousel.querySelector('.carousel-controls').hidden = true; return; }

  let current = Math.max(0, slides.findIndex(function (s) { return s.classList.contains('is-active'); }));
  let timer = null;
  let pausedByUser = false;
  // If someone's device is set to "reduce motion", don't move by itself.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) pausedByUser = true;

  // Make one dot per quote
  const dots = slides.map(function (slide, i) {
    slide.setAttribute('aria-label', (i + 1) + ' of ' + slides.length);
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', 'Show quote ' + (i + 1));
    dot.innerHTML = '<span></span>';
    dot.addEventListener('click', function () { show(i); restart(); });
    dotBox.appendChild(dot);
    return dot;
  });

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) {
      s.classList.toggle('is-active', n === current);
      s.setAttribute('aria-hidden', n === current ? 'false' : 'true');
    });
    dots.forEach(function (d, n) { d.setAttribute('aria-current', n === current ? 'true' : 'false'); });
  }
  function start() {
    stop();
    if (pausedByUser) return;
    timer = setInterval(function () { show(current + 1); }, SECONDS_PER_QUOTE * 1000);
    slideBox.setAttribute('aria-live', 'off');
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
    slideBox.setAttribute('aria-live', 'polite');
  }
  function restart() { if (!pausedByUser) start(); }
  function updatePauseButton() {
    carousel.classList.toggle('is-paused', pausedByUser);
    pauseButton.setAttribute('aria-label', pausedByUser ? 'Play the quotes' : 'Pause the quotes');
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', function () { show(current - 1); restart(); });
  carousel.querySelector('.carousel-next').addEventListener('click', function () { show(current + 1); restart(); });
  pauseButton.addEventListener('click', function () {
    pausedByUser = !pausedByUser;
    updatePauseButton();
    if (pausedByUser) stop(); else start();
  });

  // Hold still while someone is pointing at it or using the keyboard inside it
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', restart);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', function (e) { if (!carousel.contains(e.relatedTarget)) restart(); });

  // Swipe left/right on phones
  let touchX = null;
  slideBox.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; stop(); }, { passive: true });
  slideBox.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) show(dx < 0 ? current + 1 : current - 1);
    touchX = null;
    restart();
  });

  show(current);
  updatePauseButton();
  start();
}


/* ---------------------------------------------------------------------
   RUN EVERYTHING once the page has loaded.
   Each function quietly does nothing on pages it doesn't belong to.
   --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  setupMenu();
  buildCalendar();
  buildFeatured();
  buildTalksPage();
  buildTalkPage();
  setupCarousel();
  // Keeps the © year in the footer up to date automatically
  document.querySelectorAll('.this-year').forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
