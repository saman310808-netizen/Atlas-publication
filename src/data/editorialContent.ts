import cmsBoard from '../content/editorial-board.json';
import type { AtlasPage } from '../components/pages/shared';

export const regionalSections = [
  {
    id: 'americas',
    page: 'notes-from-americas',
    title: 'The Americas',
    description: 'North America, Central America, South America and the Caribbean.',
    note: 'North, Central and South America, and the Caribbean',
    keywords: ['americas', 'north america', 'central america', 'south america', 'caribbean', 'usa', 'canada', 'mexico', 'brazil', 'argentina'],
  },
  {
    id: 'europe',
    page: 'notes-from-europe',
    title: 'Europe',
    description: 'Writing shaped by the histories, languages and everyday life of Europe.',
    note: 'Memory, place and everyday life across Europe',
    keywords: ['europe', 'paris', 'france', 'stockholm', 'sweden', 'vienna', 'austria', 'london', 'united kingdom'],
  },
  {
    id: 'asia',
    page: 'notes-from-asia',
    title: 'Asia',
    description: 'Perspectives across the many places, traditions and conversations of Asia.',
    note: 'Many places, traditions and conversations',
    keywords: ['asia', 'kyoto', 'japan', 'india', 'kochi', 'seoul', 'south korea', 'china', 'tokyo'],
  },
  {
    id: 'mena',
    page: 'notes-from-mena',
    title: 'MENA',
    description: 'The Middle East and North Africa, in all their varied voices and contexts.',
    note: 'The Middle East and North Africa',
    keywords: ['mena', 'middle east', 'north africa', 'istanbul', 'turkey', 'bosphorus', 'morocco', 'egypt', 'lebanon', 'palestine', 'iran'],
  },
  {
    id: 'sub-saharan-africa',
    page: 'notes-from-sub-saharan-africa',
    title: 'Sub-Saharan Africa',
    description: 'A space for writing across the cultures and experiences of Sub-Saharan Africa.',
    note: 'Stories across the region’s many voices',
    keywords: ['sub-saharan africa', 'nigeria', 'lagos', 'ghana', 'kenya', 'senegal', 'south africa', 'africa'],
  },
  {
    id: 'australia-oceania',
    page: 'notes-from-australia-oceania',
    title: 'Australia & Oceania',
    description: 'Stories and perspectives from Australia, the Pacific and Oceania.',
    note: 'Australia, the Pacific and Oceania',
    keywords: ['australia', 'oceania', 'pacific', 'new zealand', 'fiji', 'samoa'],
  },
] as const satisfies readonly {
  id: string;
  page: AtlasPage;
  title: string;
  description: string;
  note: string;
  keywords: readonly string[];
}[];

export type RegionalSectionId = (typeof regionalSections)[number]['id'];

export const contributorOpportunities = [
  {
    number: '01',
    title: 'Staff Writer',
    description:
      'Become a regular member of the Atlas writing team, contributing articles and working closely with editors on publication ideas and assigned pieces.',
  },
  {
    number: '02',
    title: 'Column Writer',
    description:
      'Develop your own recurring column, exploring a particular subject, theme or perspective through a series of articles. Ideal for writers with a strong interest in a particular area.',
  },
  {
    number: '03',
    title: 'Contributing Writer',
    description:
      'Write for Atlas on a more flexible basis. Submit individual pitches, creative pieces or articles without committing to a regular publication schedule.',
  },
] as const;

export interface EditorialCommission {
  id: string;
  title: string;
  brief: string;
  section: string;
  deadline: string;
  status: string;
}

export const editorialCommissions: EditorialCommission[] = [];

export interface EditorialTeamProfile {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

// Fill these profile fields when the editorial team supplies confirmed details.
export const editorialTeamProfiles: EditorialTeamProfile[] =
  cmsBoard.profiles.length > 0
    ? cmsBoard.profiles.map((profile, index) => ({
        id: 'profile-' + (index + 1),
        name: profile.name,
        role: profile.role,
        photo: profile.photo || '',
        bio: profile.bio || '',
      }))
    : [
        { id: 'profile-1', name: '', role: '', photo: '', bio: '' },
        { id: 'profile-2', name: '', role: '', photo: '', bio: '' },
        { id: 'profile-3', name: '', role: '', photo: '', bio: '' },
      ];

export const atlasValues = [
  {
    title: 'Curiosity across borders',
    text: 'We make room for stories that move between places, languages and ways of seeing.',
  },
  {
    title: 'Listening before assumption',
    text: 'Personal narratives and close attention can challenge what we think we already know.',
  },
  {
    title: 'Conversation, not conclusion',
    text: 'We bring different experiences together to open meaningful conversations.',
  },
] as const;
