export type Category = 'stories' | 'poetry' | 'travel' | 'culture';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  author: {
    name: string;
    course: string; // e.g. "MSc International Relations, LSE"
    origin: string; // e.g. "Kyoto, Japan"
    bio: string;
  };
  date: string;
  readTime: string;
  image: string;
  caption?: string;
  excerpt: string;
  content: string[];
  pullQuote?: string;
  tags: string[];
  featured?: boolean;
  issue: string; // e.g. "Issue 04"
}

export interface IssueInfo {
  number: string;
  title: string;
  season: string;
  theme: string;
  coverImage: string;
  pageCount: number;
  format: string;
  editors: string[];
  description: string;
  highlights: string[];
}

export interface SubmissionFormState {
  authorName: string;
  email: string;
  course: string;
  year: string;
  hometown: string;
  category: Category;
  title: string;
  abstract: string;
  content: string;
  agreeToBlindReview: boolean;
}
