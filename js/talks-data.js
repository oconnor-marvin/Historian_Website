/* =====================================================================
   TALKS-DATA.JS — the list of every talk and bundle on the website
   ---------------------------------------------------------------------
   THIS IS THE FILE YOU'LL EDIT MOST. The Talks page, every talk page,
   the bundle page and the three talks on the home page are all built
   automatically from the list below. You never need to make a new HTML
   page for a new talk.

   HOW IT'S ORGANISED
   The list is split into TOPICS (South America, the Vikings...). Each
   topic has its own list of TALKS, in the order they should appear.

   RULES THAT KEEP IT WORKING (the computer is fussy about these):
   1. Every piece of text goes inside quote marks:  'like this'
   2. If your text contains an apostrophe, use double quotes instead:
          "Cape Horn: The Sailors' Graveyard"
   3. Every line inside { } ends with a comma, and so does every } that
      has another { after it.
   4. Each talk needs its own "id": short, lower case, words joined by
      dashes, no spaces, never used twice. It becomes the web address:
          talk.html?id=the-endurance
   5. If you break something, the Talks page will look empty. Undo your
      last change and look for a missing quote mark or comma.

   WHAT EACH TALK CAN HAVE
     id          short unique name (see rule 4)                REQUIRED
     title       the talk's title                              REQUIRED
     comingSoon  true  = shows "Coming Soon" and hides the Buy button.
                 When a talk is ready to sell, change it to  false
                 (and fill in gumroad, length and so on).
     part        optional, e.g. 'Part 1' for a series
     line        optional one short sentence shown under the thumbnail
     length      e.g. '50 min'
     price       e.g. '$15'
     gumroad     the link to the Gumroad product page, e.g.
                 'https://jacobmarvin.gumroad.com/l/the-endurance'
     trailer     the YouTube or Vimeo link to the trailer. A normal
                 link works, e.g. 'https://youtu.be/abc123'. Leave it ''
                 (empty) if there's no trailer yet.
     thumbnail   a picture in the images/thumbnails folder, e.g.
                 'images/thumbnails/the-endurance.jpg'. Leave it '' and
                 a coloured panel with the title is used instead.
                 Best size: 1280 × 720 pixels (16:9), JPG.
     about       the paragraphs on the talk's own page ("What it
                 covers"). Each paragraph is its own piece of text inside
                 the [ ] brackets, separated by commas.
   ===================================================================== */

const TOPICS = [

  /* -------------------------------------------------------------------
     SOUTH AMERICA AND THE FAR SOUTH
     ------------------------------------------------------------------- */
  {
    id: 'south-america',                   // used for the topic button: talks.html#south-america
    name: 'South America and the Far South',
    colour: '#24392D',                     // colour of thumbnails that have no picture yet
    intro: "Antarctica, Patagonia and the bottom of the world, plus the people who made a home there, or tried to.",
    talks: [
      {
        id: 'encounters-tierra-del-fuego',
        title: 'Encounters in Tierra del Fuego',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Tierra del Fuego, the “Land of Fire”, where European explorers and missionaries met the native peoples of the far south, leading to some remarkable encounters at the very end of the world."]
      },
      {
        id: 'cape-horn',
        title: "Cape Horn: The Sailors' Graveyard",
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Into the storm-lashed waters of Cape Horn, long known as the “sailors’ graveyard”. Why did this passage become both legend and nightmare for generations of seafarers?"]
      },
      {
        id: 'the-endurance',
        title: 'The Endurance',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The saga of Sir Ernest Shackleton and Endurance: shipwreck, ice, and one of the greatest feats of leadership and survival in Antarctic history."]
      },
      {
        id: 'falklands-shipwreck',
        title: 'Shipwreck and Survival in the Falklands',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["A tale of shipwreck, mutiny and survival in the Falklands. Lesser known, but an extraordinary story of endurance at sea."]
      },
      {
        id: 'welsh-in-patagonia',
        title: 'The Welsh in Patagonia',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The unlikely story of how a group of Welsh settlers built a new homeland on the windswept plains of Patagonia: a tale of language, survival and identity at the edge of the world."]
      },
      {
        id: 'gauchos',
        title: 'Gauchos: The Cowboys of the River Plate',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The story of the gauchos, Argentina’s cowboys: their lives on the Pampas, their part in independence, and their lasting place in South American identity."]
      },
      {
        id: 'san-martin',
        title: 'San Martín: Liberator of the Andes',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The life of General José de San Martín, Argentina’s national hero, whose daring campaigns across the Andes changed the course of South America."]
      },
      {
        id: 'tordesillas-brazil',
        title: 'Tordesillas: The History of Brazil',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["In 1494 the Treaty of Tordesillas divided the “New World” between Spain and Portugal. How that line on a map shaped two colonial empires, and the history of Brazil."]
      }
    ]
  },

  /* -------------------------------------------------------------------
     THE SPANISH EMPIRE IN THE AMERICAS
     ------------------------------------------------------------------- */
  {
    id: 'spanish-empire',
    name: 'The Spanish Empire in the Americas',
    colour: '#8E3E22',
    intro: 'Conquistadors, castaways, treasure fleets and one very persistent mapping mistake.',
    photo: '',                               // add the Potosí balcony photo here, e.g. 'images/potosi.jpg'
    photoAlt: 'Jacob on a balcony above the colonial town of Potosí',
    photoPlaceholder: false,                 // true = shows a "photo to add" box until "photo" is filled in
    talks: [
      {
        id: 'conquest-of-mexico',
        title: 'The Conquest of Mexico',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The fall of the Aztec Empire. How Hernán Cortés and a small band of conquistadors, driven by gold and held up by Indigenous alliances, brought about a collision of cultures that reshaped the Americas. A story of ambition, betrayal and legacy."]
      },
      {
        id: 'conquest-of-the-incas',
        title: 'The Conquest of the Incas',
        comingSoon: false,
        length: '53 min', price: '$15', gumroad: 'https://jacobmarvin.gumroad.com/l/conquestoftheincas', trailer: 'https://www.youtube.com/watch?v=Jy2TV6vKuyI', thumbnail: 'images/thumbnails/conquest-of-the-incas.jpg',
        about: [
          "The downfall of the Inca Empire, from Pizarro’s arrival to the final resistance. How a small band of conquistadors toppled a civilisation through ambition and betrayal, and how the Inca fought back.",
          "It also comes with a five-and-a-half-minute post-analysis, where I sit back and talk it through more informally."
        ]
      },
      {
        id: 'rebel-conquistador',
        title: 'The Rebel Conquistador',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Vasco Núñez de Balboa, the first European to see the Pacific from the Americas. His trek across the isthmus, the founding of Tierra Firme, and how his carefully crafted legend shaped the history of Panama and the Age of Discovery."]
      },
      {
        id: 'wanderer-of-the-new-world',
        title: 'Wanderer of the New World',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The odyssey of Cabeza de Vaca, a conquistador turned castaway who walked across an unmapped continent. From shipwreck to revered healer, his survival among Indigenous peoples is one of history’s most astonishing tales."]
      },
      {
        id: 'california-island',
        title: 'When California Was an Island',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["For centuries, maps showed California as an island. The myths and folklore behind one of history’s most enduring geographical errors, and how it shaped the exploration of Baja California and the Pacific coast."]
      },
      {
        id: 'spanish-treasure-fleets',
        title: 'Spanish Treasure Fleets',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Spain’s treasure fleets: armadas laden with the gold and silver that paid for an empire. Storms, pirates, shipwrecks and daring heists on the most valuable sea route in the world."]
      }
    ]
  },

  /* -------------------------------------------------------------------
     THE PANAMA CANAL  (this topic also has a BUNDLE, see further down)
     ------------------------------------------------------------------- */
  {
    id: 'panama',
    name: 'The Panama Canal',
    colour: '#3F4A3C',
    intro: 'How one of the greatest feats of engineering in human history came to be, told in three parts: a French failure, an American gamble, and the people who dug it.',
    talks: [
      {
        id: 'panama-french-attempt',
        part: 'Part 1',
        title: 'The French Attempt to Build a Canal in Panama',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["France’s tragic attempt to carve a canal through Panama. A grand vision that captivated the world, then collapsed under engineering problems, financial scandal and a devastating loss of life. Ambition meets an unforgiving jungle."]
      },
      {
        id: 'panama-usa-control',
        part: 'Part 2',
        title: 'How the USA Gained Control of the Canal',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["How Theodore Roosevelt’s ambition secured the canal and Panamanian independence. The political manoeuvres behind a moment that shifted global trade and American power in the Western Hemisphere."]
      },
      {
        id: 'panama-forging-the-canal',
        part: 'Part 3',
        title: 'Forging the Canal',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The American effort to finish the job. From groundbreaking engineering to the fight against tropical disease, the story of how the Atlantic and Pacific were finally joined."]
      }
    ],

    /* THE BUNDLE. A topic can have one bundle (or none: just leave this
       part out). "includes" lists the ids of the talks in the bundle.
       Every talk listed there automatically gets the line
       "Also available as part of The Panama Canal Series". */
    bundle: {
      id: 'panama-series',
      title: 'The Panama Canal Series',
      comingSoon: true,
      line: 'All three Panama Canal talks together.',
      price: '$35',
      fullPrice: '$45',
      saving: '$10',
      length: '3 talks',
      gumroad: '', trailer: '', thumbnail: '',
      includes: ['panama-french-attempt', 'panama-usa-control', 'panama-forging-the-canal'],
      about: [
        "The Panama Canal took two attempts, two countries, one revolution and tens of thousands of lives. It’s one of the great engineering stories of the modern world, and far too big for one evening, so I split it into three.",
        "Part 1 is the French attempt: de Lesseps, the sea-level dream and the collapse. Part 2 is how the United States took over, and Panama’s remarkably convenient independence in 1903. Part 3 is the build itself, and the people who actually did the digging.",
        "If you’re about to sail through it, watch them before you go. You’ll spend the whole transit pointing at things."
      ]
    }
  },

  /* -------------------------------------------------------------------
     THE VIKINGS AND THE NORTH SEA
     ------------------------------------------------------------------- */
  {
    id: 'vikings',
    name: 'The Vikings and the North Sea',
    colour: '#4A4E5A',
    intro: 'Fewer horned helmets, more trade routes, kings and kingdoms. Still a fair amount of raiding, to be honest.',
    talks: [
      { id: 'viking-myths',          title: 'Myths about the Vikings',          comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] },
      { id: 'viking-atlantic-world', title: 'The Atlantic World of the Vikings', comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] },
      { id: 'north-sea-empire',      title: 'The North Sea Empire',             comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] }
    ]
  },

  /* -------------------------------------------------------------------
     THE BRITISH ISLES
     ------------------------------------------------------------------- */
  {
    id: 'british-isles',
    name: 'The British Isles',
    colour: '#5B4632',
    intro: 'Home turf. Castles, kings, and how the UK ended up as four countries in one.',
    talks: [
      { id: 'the-white-ship',           title: 'The White Ship',              comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] },
      { id: 'age-of-castles-and-kings', title: 'The Age of Castles and Kings', comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] }
    ]
  },

  /* -------------------------------------------------------------------
     PIRATES, TRADE AND THE OPEN SEA
     ------------------------------------------------------------------- */
  {
    id: 'pirates-and-trade',
    name: 'Pirates, Trade and the Open Sea',
    colour: '#2F4A56',
    intro: 'Pirates, merchants, whalers and the occasional disappearance. Most of the modern world was built at sea.',
    talks: [
      { id: 'golden-age-of-piracy', title: 'The Golden Age of Piracy', comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] },
      {
        id: 'the-pirate-round',
        title: 'The Pirate Round',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The Golden Age of Piracy, when corruption turned New York and Bermuda into pirate safe havens. Following the “Pirate Round” across the globe with the rogues who chased wealth and glory."]
      },
      {
        id: 'kosher-corsairs',
        title: 'Kosher Corsairs: The Inquisition at Sea',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The hidden world of Jewish pirates. Seeking survival, and sometimes revenge, during the diaspora, these mariners fought the Inquisition at sea and left a remarkable legacy."]
      },
      {
        id: 'trading-companies',
        title: 'How Trading Companies Shaped the World',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["From the sixteenth to the nineteenth century, trading companies built monopolies across the globe through commerce and conquest. How they changed the world, and gave rise to an economic system that still echoes today."]
      },
      { id: 'danish-empire', title: 'The Danish Empire', comingSoon: true, length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '', about: [] },
      {
        id: 'age-of-whaling',
        title: 'The Age of Whaling',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The rise of American whaling, when “iron men in wooden boats” risked everything for oil. From New England’s golden age to disasters at sea, and how the trade fuelled the Industrial Revolution."]
      }
    ]
  },

  /* -------------------------------------------------------------------
     SPAIN AND THE MEDITERRANEAN
     ------------------------------------------------------------------- */
  {
    id: 'mediterranean',
    name: 'Spain and the Mediterranean',
    colour: '#6B5424',
    intro: 'Romans, Moors, knights and the ancient Greek world.',
    talks: [
      {
        id: 'hispania',
        title: "Hispania: Rome's Iberian Frontier",
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Roman Spain: a land of conquest and cultural fusion. From the ruins of Tarraco to the clashes with Iberian tribes, how Spain became Rome’s richest province, and the roads and engineering that still shape it today."]
      },
      {
        id: 'al-andalus',
        title: 'Al-Andalus: Moorish Spain and the Reconquista',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The struggle for Spain, from the golden age of Al-Andalus to the fall of Granada. Moorish art and science, the long Christian Reconquista, and the battles and betrayals that shaped the peninsula."]
      },
      {
        id: 'knights-of-malta',
        title: 'The Knights of Malta',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The 268 years of the Order of St John on Malta, from 1530 to 1798, and how the Knights reshaped the island’s landscape, culture and place in the Mediterranean."]
      },
      {
        id: 'ancient-aegean',
        title: 'A Journey Through the Ancient Aegean',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["The ancient Greek world through its most famous archaeological sites, from the volcanic ruins of Santorini to the sanctuary of Olympia: their architecture, and their myths."]
      }
    ]
  },

  /* -------------------------------------------------------------------
     STANDALONE TALKS
     ------------------------------------------------------------------- */
  {
    id: 'standalone',
    name: 'Standalone Talks',
    colour: '#7A4A2E',
    intro: "Talks that don't fit neatly anywhere else, which is usually a good sign.",
    talks: [
      {
        id: 'bronze-age-collapse',
        title: 'The Bronze Age Collapse',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["Around 1200 BC, the great civilisations of the Mediterranean fell within a single generation. From the end of the Mycenaeans to the mystery of the Sea Peoples, what caused this ancient apocalypse, and the end of the first global era?"]
      },
      {
        id: 'history-of-sugar',
        title: 'The History of Sugar',
        comingSoon: true,
        length: '', price: '$15', gumroad: '', trailer: '', thumbnail: '',
        about: ["How the sweet stuff transformed the world over 2,000 years. Now found almost everywhere, sugar was once coveted by kings and emperors, and it changed societies on every continent."]
      }
    ]
  }

  /* TO ADD A NEW TOPIC: copy a whole block from { to } (for example the
     British Isles one), paste it just above this comment, put a comma
     after the } of the topic before it, and change the details. */
];


/* =====================================================================
   THE THREE TALKS SHOWN ON THE HOME PAGE
   Just list the ids of the three talks you want, in order.
   ===================================================================== */
const FEATURED_TALKS = ['the-endurance', 'conquest-of-the-incas', 'panama-french-attempt'];
