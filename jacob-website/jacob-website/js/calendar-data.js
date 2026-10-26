/* =====================================================================
   CALENDAR-DATA.JS — the "Where I'll be" list on the home page
   ---------------------------------------------------------------------
   Each SAILING is one block on the calendar (e.g. "Antarctica, January").
   A sailing can have one or more VOYAGES (back-to-back trips), and each
   voyage has a list of PORTS in order.

   TO ADD A SAILING: copy one whole block from { to }, paste it where it
   should appear (the list shows in the order written here), and make
   sure there's a comma between blocks.

   TO REMOVE A PAST SAILING: delete its whole block from { to }, plus the
   comma after it.

   Same fussy rules as the talks file:
   - All text inside quote marks 'like this'
   - Text with an apostrophe goes in double quotes "like this"
   - Commas between items

   Please don't put any pay or fee details in here: this file is public.
   ===================================================================== */

const SAILINGS = [

  {
    region: 'Antarctica',                       // the big heading
    dates: '2 – 30 January 2027',               // shown under the heading
    ship: 'Celebrity Equinox',
    summary: 'Two back-to-back voyages, round trip from Buenos Aires.',
    voyages: [
      {
        dates: '2 – 16 Jan',
        title: 'Antarctica, round trip from Buenos Aires',
        ports: ['Buenos Aires', 'Ushuaia', 'Cape Horn', 'Antarctic Peninsula: Paradise Bay, Gerlache Strait, Schollaert Channel', 'Elephant Island', 'Port Stanley, Falkland Islands', 'Puerto Madryn', 'Montevideo', 'Buenos Aires']
      },
      {
        dates: '16 – 30 Jan',
        title: 'Antarctica, round trip from Buenos Aires',
        ports: ['Buenos Aires', 'Ushuaia', 'Cape Horn', 'Antarctic Peninsula: Paradise Bay, Gerlache Strait, Schollaert Channel', 'Elephant Island', 'Port Stanley, Falkland Islands', 'Puerto Madryn', 'Montevideo', 'Buenos Aires']
      }
    ]
  },

  {
    region: 'Across the Atlantic to Iberia',
    dates: '13 March – 20 April 2027',
    ship: 'Celebrity Equinox',
    summary: 'Three back-to-back voyages.',
    voyages: [
      {
        dates: '13 – 30 Mar',
        title: 'Buenos Aires to Barcelona, transatlantic',
        ports: ['Buenos Aires', 'Rio de Janeiro', 'Salvador', 'Tenerife', 'Cádiz', 'Málaga', 'Barcelona']
      },
      {
        dates: '30 Mar – 10 Apr',
        title: 'Round trip from Barcelona',
        ports: ['Barcelona', 'Tangier', 'Funchal (Madeira)', 'Porto', 'Lisbon', 'Cádiz', 'Málaga', 'Barcelona']
      },
      {
        dates: '10 – 20 Apr',
        title: 'Round trip from Barcelona',
        ports: ['Barcelona', 'Tangier', 'Porto', 'Lisbon', 'Cádiz', 'Málaga', 'Palma de Mallorca', 'Barcelona']
      }
    ]
  },

  {
    region: 'The British Isles and Scandinavia',
    dates: '8 August – 1 September 2027',
    ship: 'Celebrity Eclipse',
    summary: 'Two back-to-back voyages, round trip from Amsterdam.',
    voyages: [
      {
        dates: '8 – 20 Aug',
        title: 'British Isles',
        ports: ['Amsterdam', 'Cobh (Cork)', 'Dublin', 'Liverpool', 'Belfast', 'Greenock (for Glasgow)', 'Lerwick (Shetland)', 'Invergordon (for Inverness)', 'Amsterdam']
      },
      {
        dates: '20 Aug – 1 Sep',
        title: 'Scandinavia and the Baltic',
        ports: ['Amsterdam', 'Oslo', 'Skagen', 'Stockholm', 'Tallinn', 'Helsinki', 'Copenhagen', 'Amsterdam']
      }
    ]
  },

  {
    region: 'Through the Panama Canal',
    dates: '18 September – 6 October 2027',
    ship: 'Celebrity Summit',
    summary: 'Los Angeles to Boston.',
    voyages: [
      {
        dates: '18 Sep – 6 Oct',
        title: 'Los Angeles to Boston',
        ports: ['Los Angeles', 'Puerto Vallarta', 'Puerto Quetzal (Guatemala)', 'Puntarenas (Costa Rica)', 'Panama Canal transit', 'Cartagena (Colombia)', 'Grand Turk', 'Boston']
      }
    ]
  },

  {
    region: 'Across the Atlantic to Patagonia',
    dates: '19 November 2027 – 2 January 2028',
    ship: 'Celebrity Equinox',
    summary: 'Three back-to-back voyages.',
    voyages: [
      {
        dates: '19 Nov – 5 Dec',
        title: 'Barcelona to Buenos Aires, transatlantic',
        ports: ['Barcelona', 'Tenerife', 'Salvador', 'Rio de Janeiro', 'Montevideo', 'Buenos Aires']
      },
      {
        dates: '5 – 19 Dec',
        title: 'Patagonia, round trip from Buenos Aires',
        ports: ['Buenos Aires', 'Montevideo', 'Port Stanley', 'Cape Horn', 'Ushuaia', 'Punta Arenas (Strait of Magellan)', 'Puerto Madryn', 'Punta del Este', 'Buenos Aires']
      },
      {
        dates: '19 Dec – 2 Jan',
        title: 'Patagonia, round trip from Buenos Aires',
        ports: ['Buenos Aires', 'Montevideo', 'Port Stanley', 'Cape Horn', 'Ushuaia', 'Punta Arenas (Strait of Magellan)', 'Puerto Madryn', 'Punta del Este', 'Buenos Aires']
      }
    ]
  }

];
