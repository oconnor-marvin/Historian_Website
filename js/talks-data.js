/* =====================================================================
   TALKS-DATA.JS — the list of every talk and bundle on the website
   ---------------------------------------------------------------------
   THIS IS THE FILE YOU'LL EDIT MOST. The Talks page, every talk page,
   the bundle page and the three talks on the home page are all built
   automatically from the list below. You never need to make a new HTML
   page for a new talk.

   HOW IT'S ORGANISED
   The list is split into TOPICS (Spain, Panama, Vikings...). Each topic
   has its own list of TALKS, in the order they should appear.

   RULES THAT KEEP IT WORKING (the computer is fussy about these):
   1. Every piece of text goes inside quote marks:  'like this'
   2. If your text contains an apostrophe, use double quotes instead:
          "Hadrian's Wall"      (not 'Hadrian's Wall', which breaks)
   3. Every line inside { } ends with a comma, and so does every } that
      has another { after it.
   4. Each talk needs its own "id": short, lower case, words joined by
      dashes, no spaces, never used twice. It becomes the web address:
          talk.html?id=french-go-first
   5. If you break something, the Talks page will look empty. Undo your
      last change and look for a missing quote mark or comma.

   WHAT EACH TALK CAN HAVE
     id         short unique name (see rule 4)                 REQUIRED
     title      the talk's title                               REQUIRED
     line       one short sentence shown under the thumbnail   REQUIRED
     part       optional, e.g. 'Part 1' for a series
     length     e.g. '52 min'
     price      e.g. '$15'
     gumroad    the link to the Gumroad product page, e.g.
                'https://jacobmarvin.gumroad.com/l/french-go-first'
     trailer    the YouTube or Vimeo link to the trailer. A normal
                link works, e.g. 'https://youtu.be/abc123' or
                'https://vimeo.com/123456'. Leave it '' (empty) if there's
                no trailer yet; the page will show the thumbnail instead.
     thumbnail  a picture in the images/thumbnails folder, e.g.
                'images/thumbnails/french-go-first.jpg'.
                Leave it '' and a coloured panel with the title is used.
                Best size: 1280 × 720 pixels (16:9), JPG.
     about      the 2–3 paragraphs on the talk's own page. Each paragraph
                is its own piece of text inside the [ ] brackets,
                separated by commas.

   Talk titles below are WORKING TITLES. Replace them with the real ones.
   ===================================================================== */

const TOPICS = [

  /* -------------------------------------------------------------------
     SPAIN AND THE SPANISH EMPIRE
     ------------------------------------------------------------------- */
  {
    id: 'spain',                                   // used for the topic button: talks.html#spain
    name: 'Spain and the Spanish Empire',
    colour: '#8E3E22',                             // colour of thumbnails that have no picture yet
    intro: 'The biggest shelf in the library, because it was the biggest empire in the world for a while. Silver, saints, conquistadors and an astonishing amount of paperwork.',
    photo: '',                                     // add the Potosí balcony photo here, e.g. 'images/potosi.jpg'
    photoAlt: 'Jacob on a balcony above the colonial town of Potosí',
    talks: [
      {
        id: 'isabella-ferdinand-1492',
        title: 'Isabella, Ferdinand and 1492',
        line: 'Granada falls, Columbus sails, and nothing is ever quite the same.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'cortes-tenochtitlan',
        title: 'Cortés and Tenochtitlan',
        line: 'A few hundred Spaniards, and the allies who rarely get the credit.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'pizarro-inca',
        title: 'Pizarro and the Inca',
        line: 'An empire fresh from civil war meets the worst possible visitors.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'potosi',
        title: 'Potosí: The Mountain That Eats Men',
        line: 'The silver that paid for an empire, and who dug it out.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'manila-galleons',
        title: 'The Manila Galleons',
        line: 'Silver goes west, silk comes east, and Acapulco does very nicely.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'armada-spanish-side',
        title: 'The Armada, From the Spanish Side',
        line: 'We English tell this one a certain way. Here is the other way.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      }
    ]
  },

  /* -------------------------------------------------------------------
     THE PANAMA CANAL  (this topic also has a BUNDLE, see further down)
     ------------------------------------------------------------------- */
  {
    id: 'panama',
    name: 'The Panama Canal',
    colour: '#24392D',
    intro: 'A series of three. Watch them in order, or buy the set and save yourself ten dollars and a decision.',
    photo: '',
    photoAlt: '',
    talks: [
      {
        id: 'french-go-first',
        part: 'Part 1',
        title: 'The French Go First',
        line: 'A national hero, a sea-level canal, and a great deal of mud.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: [
          'In 1881 the man who had just built the Suez Canal arrived in Panama to do it again. Ferdinand de Lesseps was a national hero, a superb salesman and, crucially, not an engineer. He wanted a canal at sea level, like Suez. Panama had other ideas.',
          'This talk is about what happened next: the jungle, the rain, the Chagres River in flood, and diseases nobody yet understood. Something like twenty thousand people died. Most were labourers from the Caribbean, and most of their names were never written down.',
          "Then there's the money. Hundreds of thousands of ordinary French savers bought in, the company collapsed in 1889, and the scandal that followed dragged in politicians, newspapers and, briefly, Gustave Eiffel. It's a story about ambition, and about what happens when nobody is allowed to say the plan won't work."
        ]
      },
      {
        id: 'mosquitoes-money-revolution',
        part: 'Part 2',
        title: 'Mosquitoes, Money and a Revolution',
        line: 'Yellow fever, a very convenient independence, and Roosevelt.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'big-ditch',
        part: 'Part 3',
        title: 'The Big Ditch',
        line: 'Fifty miles, a man-made lake, three sets of locks, and the people who built them.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      }
    ],

    /* THE BUNDLE. A topic can have one bundle (or none: just leave this
       part out). "includes" lists the ids of the talks in the bundle.
       Every talk listed there automatically gets the line
       "Also available as part of the Panama Canal Series, $35". */
    bundle: {
      id: 'panama-series',
      title: 'The Panama Canal Series',
      line: "All three talks for $35. Bought one by one, they'd be $45.",
      price: '$35',
      fullPrice: '$45',
      saving: '$10',
      length: '3 talks · [X] hours',
      gumroad: '', trailer: '', thumbnail: '',
      includes: ['french-go-first', 'mosquitoes-money-revolution', 'big-ditch'],
      about: [
        "The Panama Canal took two attempts, two countries, one revolution and tens of thousands of lives. It's one of the great engineering stories of the modern world, and far too big for one evening, so I split it into three.",
        "Part 1 is the French attempt: de Lesseps, the sea-level dream and the collapse. Part 2 is the messy bit in between: mosquitoes, money, and Panama's remarkably convenient independence in 1903. Part 3 is the build itself: the locks, Gatún Lake, and the people who actually did the digging.",
        "If you're about to sail through it, watch them before you go. You'll spend the whole transit pointing at things."
      ]
    }
  },

  /* -------------------------------------------------------------------
     THE VIKINGS
     ------------------------------------------------------------------- */
  {
    id: 'vikings',
    name: 'The Vikings',
    colour: '#3F4A3C',
    intro: 'Less horned helmets, more trade routes. Still a fair amount of raiding, to be honest.',
    photo: '',
    photoAlt: '',
    talks: [
      {
        id: 'lindisfarne-793',
        title: 'Lindisfarne, 793',
        line: 'The raid that gave the Vikings their reputation.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'vikings-went-east',
        title: 'The Vikings Who Went East',
        line: 'Down the rivers to Constantinople, and a job guarding the emperor.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'greenland-vinland',
        title: 'Greenland and Vinland',
        line: 'Farms at the edge of the world, and a short visit to America.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      }
    ]
  },

  /* -------------------------------------------------------------------
     THE BRITISH ISLES
     ------------------------------------------------------------------- */
  {
    id: 'british-isles',
    name: 'The British Isles',
    colour: '#5B4632',
    intro: 'Home turf. Stones, walls, invasions, and the occasional king who should have stayed in bed.',
    photo: '',
    photoAlt: '',
    talks: [
      {
        id: 'who-built-stonehenge',
        title: 'Who Built Stonehenge?',
        line: 'And how, and why, and what they had for dinner afterwards.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'hadrians-wall',
        title: "Hadrian's Wall",
        line: 'Seventy-odd miles of frontier, and the letters the soldiers left behind.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: '1066-and-after',
        title: '1066 and Everything After',
        line: 'Three claimants, two battles, one very long tapestry.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      }
    ]
  },

  /* -------------------------------------------------------------------
     THE BRONZE AGE COLLAPSE
     ------------------------------------------------------------------- */
  {
    id: 'bronze-age',
    name: 'The Bronze Age Collapse',
    colour: '#6B5424',
    intro: 'Around 1200 BC, the connected world of the eastern Mediterranean came apart. We are still arguing about why.',
    photo: '',
    photoAlt: '',
    talks: [
      {
        id: 'everything-fell-apart',
        title: 'When Everything Fell Apart',
        line: 'Palaces burn, trade stops, and nobody writes it down.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      },
      {
        id: 'sea-peoples',
        title: 'Who Were the Sea Peoples?',
        line: 'The usual suspects. Probably guilty of something, but not of everything.',
        length: '[XX] min', price: '$15',
        gumroad: '', trailer: '', thumbnail: '',
        about: []
      }
    ]
  }

  /* TO ADD A NEW TOPIC: copy a whole block from { to } (for example the
     Vikings one), paste it just above this comment, put a comma after the
     } of the topic before it, and change the details. */
];


/* =====================================================================
   THE THREE TALKS SHOWN ON THE HOME PAGE
   Just list the ids of the three talks you want, in order.
   ===================================================================== */
const FEATURED_TALKS = ['french-go-first', 'potosi', 'everything-fell-apart'];
