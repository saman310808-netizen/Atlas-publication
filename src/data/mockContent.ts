const heroImage = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=85';
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

export const articles: Article[] = [];

export const globalOriginPoints = [];

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
