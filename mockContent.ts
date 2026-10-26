import heroImage from '@/src/assets/images/atlas_hero_journal_1791734315969.jpg';
import issueCoverImage from '@/src/assets/images/atlas_issue_cover_1791734333548.jpg';
import bosphorusImage from '@/src/assets/images/atlas_story_bosphorus_1791734343829.jpg';
import rainPoetryImage from '@/src/assets/images/atlas_poetry_rain_1791734359304.jpg';
import kyotoImage from '@/src/assets/images/atlas_travel_kyoto_1791734370709.jpg';
import booksCultureImage from '@/src/assets/images/atlas_culture_books_1791734523058.jpg';
import logoImage from '@/src/assets/images/atlas_original_logo_1791741424805.jpg';

import { Article, IssueInfo } from '../types';

export { heroImage, issueCoverImage, logoImage };

export const currentIssue: IssueInfo = {
  number: 'Issue 04',
  title: 'Cartographies of Belonging',
  season: 'Autumn / Winter 2026',
  theme: 'Navigating memory, displacement, and the spaces between cities',
  coverImage: issueCoverImage,
  pageCount: 148,
  format: 'Munken Lynx 120gsm · Thread-sewn print · Risograph inserts',
  editors: [
    'Amira Al-Mansoor (MSc Media & Communications)',
    'Julian Vance (BSc Philosophy & Economics)',
    'Linnea Bergström (MSc Global Politics)',
  ],
  description:
    'Issue 04 brings together twenty-four voices across thirty-seven countries. Conceived in the quiet corners of the LSE Library and written along the corridors of Holborn, this volume asks what maps fail to measure: the grief of departure, the smell of rain in two different hemispheres, and the fragile geometry of feeling at home nowhere and everywhere at once.',
  highlights: [
    '24 Original Student Contributions',
    '8 Translations from Turkish, Japanese, Yoruba & Swedish',
    'Fold-out Cartographic Essay: London through Migrant Memory',
    'Printed locally in East London on sustainably sourced FSC stock',
  ],
};

export const articles: Article[] = [
  {
    id: 'passage-through-the-golden-horn',
    title: 'Passage Through the Golden Horn',
    subtitle: 'On ferry commutes, salt air, and learning to leave home in thirds',
    category: 'stories',
    categoryLabel: 'Short Story',
    author: {
      name: 'Defne Karaca',
      course: 'MSc International Relations, LSE',
      origin: 'Istanbul, Turkey',
      bio: 'Defne writes on border narratives and maritime politics. Her work previously appeared in the Bosphorus Review of Books.',
    },
    date: 'October 2026',
    readTime: '8 min read',
    image: bosphorusImage,
    caption: 'The Kadıköy ferry crossing toward Karaköy at sunset. 35mm photograph by the author.',
    excerpt:
      'The tea on the Şehir Hatları ferry is never served in ceramic; it arrives in a slim waist-glass, balanced against the vibration of diesel engines churned into green foam...',
    pullQuote:
      'To leave a city you love is never a singular departure; it is an arithmetic of ghosts you leave standing on every jetty.',
    tags: ['Istanbul', 'Memory', 'Migration', 'The Bosphorus'],
    featured: true,
    issue: 'Issue 04',
    content: [
      'The tea on the Şehir Hatları ferry is never served in ceramic; it arrives in a slim waist-glass, balanced against the vibration of diesel engines churned into green foam. For four years before I came to London, this was the twenty-minute demarcation between my waking life and the city’s demands.',
      'From the upper deck, Istanbul never looks static. It undulates beneath minarets and rust-colored tile roofs, an ancient city held together by currents and gulls screaming into the wind. When I packed two suitcases for Heathrow, my grandmother slipped a dried bay leaf into the lining of my coat. "So you don’t forget the humidity," she had whispered.',
      'Now, walking across Waterloo Bridge between evening lectures at the Old Building and the Southbank, I look down at the Thames. The water here is gray-brown, industrious and heavy with London silt. It lacks the saline snap of the Marmara, yet there are moments when the diesel exhaust from a river bus pulls me back to the Kadıköy dock with the force of a tidal wave.',
      'We talk often at LSE about globalization in the language of trade flows and institutional convergence. But what our textbooks omit is the sensory ledger of migration: how one learns to measure loneliness by the absence of street vendors calling out sesame simit at six in the morning, and how nostalgia transforms ordinary ferry tickets into relics.',
    ],
  },
  {
    id: 'cartographies-of-absence',
    title: 'Cartographies of Absence',
    subtitle: 'Three fragments composed between Kings Cross and Edinburgh Waverley',
    category: 'poetry',
    categoryLabel: 'Poetry',
    author: {
      name: 'Matthias Lindqvist',
      course: 'BSc Economic History, LSE',
      origin: 'Stockholm, Sweden',
      bio: 'Matthias is an undergraduate poet interested in northern geographies, railways, and industrial memory.',
    },
    date: 'September 2026',
    readTime: '4 min read',
    image: rainPoetryImage,
    caption: 'Window mist and northern fields north of Berwick-upon-Tweed.',
    excerpt:
      'The train does not stop for the fog, / but enters it as though returning / to an unwritten sentence in an old ledger...',
    pullQuote:
      'Distance is not counted in miles, but in how many words you lose each time you cross the border.',
    tags: ['Northern Geographies', 'Railway Poetry', 'Solitude'],
    featured: true,
    issue: 'Issue 04',
    content: [
      'I.\nThe train does not stop for the fog,\nbut enters it as though returning\nto an unwritten sentence in an old ledger.\nOutside: sheep like salt scattered\nover bruised Northumbrian moss,\nand inside: the quiet clicking of keys,\nstudents revising balance sheets\nbeneath the trembling strip-lights.',
      'II.\nMy mother writes from the archipelago:\n"The frost arrived two weeks early this year.\nWe have brought the geraniums inside."\nI hold the message against the windowpane,\nwatching my reflection blur\nwith electrical pylons racing south toward London.',
      'III.\nWe carry our home countries\nlike loose coins in our winter pockets—\nheavy, useless in the new currency,\nyet impossible to throw away\ninto the gray sea.',
    ],
  },
  {
    id: 'the-art-of-slow-wandering-in-kyoto',
    title: 'The Art of Slow Wandering in Kyoto’s Backstreets',
    subtitle: 'Escaping the temple circuits to find woodsmoke, moss, and cedar silence',
    category: 'travel',
    categoryLabel: 'Travelogue',
    author: {
      name: 'Kenjiro Sato',
      course: 'MSc Development Management, LSE',
      origin: 'Kyoto, Japan',
      bio: 'Kenjiro studied urban geography in Tokyo before coming to London. He collects regional folklore and local tea recipes.',
    },
    date: 'October 2026',
    readTime: '7 min read',
    image: kyotoImage,
    caption: 'Evening lanterns illuminating the damp stone alleys of Gion-Shirakawa.',
    excerpt:
      'Most visitors arrive in Kyoto armed with strict itineraries: Kinkaku-ji at nine, Fushimi Inari by noon. But the city only yields its true soul when you miss your turn...',
    pullQuote:
      'A true atlas should not tell you where to go; it should teach you how to be patient when you are lost.',
    tags: ['Kyoto', 'Urban Geography', 'Slow Travel', 'Japan'],
    featured: true,
    issue: 'Issue 04',
    content: [
      'Most visitors arrive in Kyoto armed with strict itineraries: Kinkaku-ji at nine, Fushimi Inari by noon, bamboo groves before the crowds thicken. But the city only yields its true soul when you miss your turn and stumble into the alleyways behind the Kamogawa river.',
      'Here, between two-story machiya townhouses of dark cedar, life proceeds at an acoustic frequency that modern capitals have long forgotten. The sound of a broom sweeping fallen gingko leaves over wet river stones; the click of a sliding wooden latch; the faint smell of roasted hojicha drifting from a roaster tucked behind an indigo curtain.',
      'Coming from London, where movement is dictated by the relentless pulse of the Tube and the urgency of deadlines, Kyoto felt like an antidote. It reminded me that walking is not merely transit; it is an act of reading the world through your soles.',
      'In a tiny tea shop that has occupied the same corner since the Taisho era, an elderly proprietor poured me a cup of bancha. "Travelers are always in such a rush to arrive," he remarked gently. "They forget that the road itself is already the destination."',
    ],
  },
  {
    id: 'bouquinistes-and-the-river-of-paper',
    title: 'Bouquinistes and the River of Paper',
    subtitle: 'The fragile survival of Paris’s green bookstalls along the Quai de Conti',
    category: 'culture',
    categoryLabel: 'Cultural Essay',
    author: {
      name: 'Camille Laurent',
      course: 'MSc Politics and Communication, LSE',
      origin: 'Paris, France',
      bio: 'Camille is a freelance writer and researcher investigating print culture, public spaces, and urban memory across Western Europe.',
    },
    date: 'October 2026',
    readTime: '6 min read',
    image: booksCultureImage,
    caption: 'University students and antiquarians along the parapets of the Seine.',
    excerpt:
      'Clamped to the stone parapets of the Seine, nine hundred green wooden boxes hold four centuries of printed human wonder against the rising tide of digital obsolescence...',
    pullQuote:
      'A book stall is not a retail shop; it is an open-air archive where a stranger’s marginalia becomes your inheritance.',
    tags: ['Paris', 'Print Culture', 'Bouquinistes', 'Books'],
    featured: false,
    issue: 'Issue 04',
    content: [
      'Clamped to the stone parapets of the Seine, nine hundred green wooden boxes hold four centuries of printed human wonder against the rising tide of digital obsolescence. The bouquinistes are the literal spine of Paris’s literary geography, stretching from the Pont Royal to the Pont Sully.',
      'On a brisk Tuesday afternoon in late September, I stood by the stall of Monsieur Henri, who has tended Box 42 for thirty-three years. He was dusting a 1928 French translation of Joseph Conrad with a boar-bristle brush. "People think we sell books," he said, tapping the leather spine. "We sell encounters with ghosts."',
      'In an era when algorithmically generated feeds curate our intellectual lives with suffocating predictability, the physical open-air bookstall remains a radical space of serendipity. You do not search for what you want; you find what you did not know you needed: a fold-out railway map of Austro-Hungarian Galicia, an anonymous diary from the 1936 Popular Front, an illustrated herbarium from Provence.',
      'As LSE students navigating an increasingly paperless academy, we would do well to remember that physical books possess weight, smell, and tactile memory. They remind us that ideas are not ethereal data points; they are crafted by hands and meant to be passed from one reader to another.',
    ],
  },
  {
    id: 'monsoons-and-mortarboards',
    title: 'Monsoons and Mortarboards',
    subtitle: 'Translating childhood rains from Kerala into the London drizzle',
    category: 'stories',
    categoryLabel: 'Personal Essay',
    author: {
      name: 'Aarav Menon',
      course: 'BSc Environment and Development, LSE',
      origin: 'Kochi, India',
      bio: 'Aarav writes about climate vulnerabilities and personal migrations. He co-founded the LSE Malayalam Literary Circle.',
    },
    date: 'August 2026',
    readTime: '5 min read',
    image: rainPoetryImage,
    caption: 'Reflections along Lincoln’s Inn Fields after an October downpour.',
    excerpt:
      'In Kerala, rain is an operatic event that shakes the clay tiles of the veranda. In London, rain is a polite, persistent apology that lingers for seven months...',
    pullQuote:
      'You never truly know what you have left behind until the weather reminds you that home is a physical sensation.',
    tags: ['Kerala', 'London', 'Rain', 'Personal Essay'],
    featured: false,
    issue: 'Issue 04',
    content: [
      'In Kerala, rain is an operatic event that shakes the clay tiles of the veranda. It arrives with a drumroll of thunder across the Arabian Sea, smelling of wet red laterite and bruised cardamom leaves. It commands the entire household to halt and listen.',
      'In London, rain is a polite, persistent apology that lingers for seven months without ever making a formal announcement. It arrives as mist, as drizzle, as gray damp that seeps into your woolen scarf on the walk through Lincoln’s Inn Fields.',
      'When I first arrived for Michaelmas term, I tried to resist the weather with an expensive umbrella from Oxford Street. Within three days, an Atlantic gust on the Strand inverted its metal ribs into a twisted sculpture. An older postgraduate student laughed and offered me shelter under his trench coat: "Rule number one at LSE: don’t fight the rain, just buy better boots."',
      'It was a small lesson, but an enduring one. Adaptation is not the erasure of your origins; it is learning to fold your memories like an oiled canvas, keeping the warmth inside while the world outside changes its climate.',
    ],
  },
  {
    id: 'lagos-to-liverpool-street',
    title: 'From Lagos to Liverpool Street',
    subtitle: 'Soundscapes of hyper-speed cities and the silence of the library',
    category: 'culture',
    categoryLabel: 'Cultural Essay',
    author: {
      name: 'Tiwa Adeleke',
      course: 'MSc Finance & Economics, LSE',
      origin: 'Lagos, Nigeria',
      bio: 'Tiwa investigates urban informal economies and writes narrative nonfiction on African cosmopolitanism.',
    },
    date: 'July 2026',
    readTime: '6 min read',
    image: bosphorusImage,
    caption: 'City lights reflected in water, echoes of night commutes across continents.',
    excerpt:
      'To grow up in Lagos is to be calibrated to a baseline hum of eighteen million people in perpetual motion: yellow danfo buses roaring, hawkers chanting in Yoruba...',
    pullQuote:
      'Silence in London felt at first like an emptiness; only later did I learn it was a space waiting for my own voice.',
    tags: ['Lagos', 'London', 'Acoustic Geography', 'City Life'],
    featured: false,
    issue: 'Issue 03',
    content: [
      'To grow up in Lagos is to be calibrated to a baseline hum of eighteen million people in perpetual motion: yellow danfo buses roaring, hawkers chanting in Yoruba, generators purring in rhythm with the dusk prayer call. Energy is not saved; it is spent loudly, joyfully, stubbornly.',
      'When I stepped into the British Library of Political and Economic Science (the LSE Library) on my first October morning, the silence was almost physical. It rang in my ears like a tuning fork. Thousands of students seated at oak carrels, turning pages with surgical delicacy.',
      'At first, that silence felt sterile, even intimidating. But over the months, I discovered the secret international solidarity that lives in quiet rooms. A student from Bogota studying macroeconomic debt models beside a student from Seoul annotating international law treaties.',
      'ATLAS gave me the permission to bridge both worlds: to write about the sensory overload of Balogun Market in the scholarly discipline of London. Because international education is not about replacing who you were; it is about expanding your compass.',
    ],
  },
];

export const globalOriginPoints = [
  { city: 'Istanbul', country: 'Turkey', count: 7, coords: '41.0082° N, 28.9784° E' },
  { city: 'Kyoto', country: 'Japan', count: 5, coords: '35.0116° N, 135.7681° E' },
  { city: 'Lagos', country: 'Nigeria', count: 6, coords: '6.5244° N, 3.3792° E' },
  { city: 'Stockholm', country: 'Sweden', count: 4, coords: '59.3293° N, 18.0686° E' },
  { city: 'Paris', country: 'France', count: 8, coords: '48.8566° N, 2.3522° E' },
  { city: 'Kochi', country: 'India', count: 5, coords: '9.9312° N, 76.2673° E' },
  { city: 'Buenos Aires', country: 'Argentina', count: 3, coords: '34.6037° S, 58.3816° W' },
  { city: 'Seoul', country: 'South Korea', count: 6, coords: '37.5665° N, 126.9780° E' },
  { city: 'Vienna', country: 'Austria', count: 4, coords: '48.2082° N, 16.3738° E' },
  { city: 'London', country: 'United Kingdom', count: 14, coords: '51.5074° N, 0.1278° W' },
];

export const submissionGuidelines = [
  {
    category: 'Short Stories & Creative Prose',
    limit: 'Up to 3,500 words',
    notes: 'Fiction, magical realism, flash fiction, and translated prose. We celebrate character-driven stories with deep sense of place.',
  },
  {
    category: 'Poetry',
    limit: 'Up to 3 poems (maximum 80 lines each)',
    notes: 'Open form, formal meter, bilingual verses with original English translations. We welcome experimental typographies.',
  },
  {
    category: 'Travel Dispatches & Field Notes',
    limit: '1,500 – 2,800 words',
    notes: 'Not hotel reviews or tourist summaries, but evocative dispatches rooted in local history, topography, sensory experience, and slow encounter.',
  },
  {
    category: 'Cultural Essays & Criticism',
    limit: '1,200 – 2,500 words',
    notes: 'Reflections on international literature, cinema, cuisine, diaspora, language preservation, and campus cosmopolitanism.',
  },
];
