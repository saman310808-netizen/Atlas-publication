import type { FC, ReactNode } from 'react';
import type { Article } from '../../types';

export type AtlasPage =
  | 'home'
  | 'notes-from'
  | 'margins'
  | 'travel'
  | 'join-us'
  | 'about'
  | 'notes-from-americas'
  | 'notes-from-europe'
  | 'notes-from-asia'
  | 'notes-from-mena'
  | 'notes-from-sub-saharan-africa'
  | 'notes-from-australia-oceania';

export interface AtlasPageProps {
  articles: Article[];
  onNavigate: (page: AtlasPage) => void;
  onSelectArticle: (article: Article) => void;
}

interface PageHeadingProps {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}

export const PageHeading: FC<PageHeadingProps> = ({ eyebrow, title, intro, children }) => (
  <header className="border-b border-[#3B241C]/15 pb-8 sm:pb-10">
    <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7A3E2D]">
      <span className="h-px w-7 bg-[#6D2638]" aria-hidden="true" />
      {eyebrow}
    </p>
    <h1 className="max-w-4xl font-editorial text-4xl font-medium leading-[1.05] tracking-tight text-[#3B241C] sm:text-5xl lg:text-6xl">
      {title}
    </h1>
    <p className="mt-5 max-w-3xl font-serif text-base italic leading-relaxed text-[#7A3E2D] sm:text-lg">
      {intro}
    </p>
    {children}
  </header>
);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({ eyebrow, title, description, id }) => (
  <div className="mb-6 border-b border-[#3B241C]/15 pb-4">
    {eyebrow && (
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A3E2D]">
        {eyebrow}
      </p>
    )}
    <h2 id={id} className="font-editorial text-3xl font-medium leading-tight text-[#3B241C] sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7A3E2D] sm:text-base">
        {description}
      </p>
    )}
  </div>
);

interface ArticleCardProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  excerpt?: string;
  number?: string;
  compact?: boolean;
}

export const ArticleCard: FC<ArticleCardProps> = ({
  article,
  onSelectArticle,
  excerpt,
  number,
  compact = false,
}) => (
  <button
    type="button"
    onClick={() => onSelectArticle(article)}
    aria-label={`Read ${article.title} by ${article.author.name}`}
    className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5E9DE]"
  >
    <article className="h-full overflow-hidden border border-[#3B241C]/15 bg-[#F5E9DE] transition-colors duration-200 group-hover:border-[#6D2638]/55">
      {!compact && (
        <div className="relative aspect-[4/3] overflow-hidden border-b border-[#3B241C]/10 bg-[#D7C6AE]/40">
          <img
            src={article.image}
            alt={article.caption || article.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
          <span className="absolute left-3 top-3 border border-[#3B241C]/15 bg-[#F5E9DE]/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6D2638]">
            {article.categoryLabel}
          </span>
        </div>
      )}
      <div className={`flex h-full flex-col ${compact ? 'py-4' : 'p-5 sm:p-6'}`}>
        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#7A3E2D]">
          {number && <span className="font-mono tabular-nums">{number}</span>}
          <span>{article.issue}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="font-editorial text-2xl font-medium leading-snug text-[#3B241C] transition-colors group-hover:text-[#6D2638] sm:text-[1.7rem]">
          {article.title}
        </h3>
        <p className="mt-1 font-serif text-sm italic leading-relaxed text-[#7A3E2D]">
          {article.subtitle}
        </p>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#3B241C]/80">
          {excerpt ?? article.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-2 border-t border-[#3B241C]/10 pt-4 text-xs text-[#7A3E2D]">
          <span className="font-medium text-[#3B241C]">{article.author.name}</span>
          <span aria-hidden="true">·</span>
          <span>{article.author.origin}</span>
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6D2638]">
            Read piece
          </span>
        </div>
      </div>
    </article>
  </button>
);

interface ArticleGridProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  emptyTitle?: string;
  emptyText?: string;
}

export const ArticleGrid: FC<ArticleGridProps> = ({
  articles,
  onSelectArticle,
  emptyTitle = 'No pieces in this part of the archive',
  emptyText = 'As the archive grows, new writing will be gathered here.',
}) => {
  if (articles.length === 0) {
    return (
      <div className="border border-dashed border-[#3B241C]/25 bg-[#D7C6AE]/15 px-6 py-12 text-center">
        <p className="font-editorial text-2xl text-[#3B241C]">{emptyTitle}</p>
        <p className="mx-auto mt-2 max-w-md font-serif text-sm italic leading-relaxed text-[#7A3E2D]">
          {emptyText}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article, index) => (
        <ArticleCard
          key={article.id}
          article={article}
          onSelectArticle={onSelectArticle}
          number={String(index + 1).padStart(2, '0')}
        />
      ))}
    </div>
  );
};

interface PageNavProps {
  onNavigate: (page: AtlasPage) => void;
  currentPage: AtlasPage;
}

const pageLinks: { label: string; page: AtlasPage }[] = [
  { label: 'Notes From', page: 'notes-from' },
  { label: 'Margins', page: 'margins' },
  { label: 'Travel', page: 'travel' },
  { label: 'Join Us', page: 'join-us' },
  { label: 'About', page: 'about' },
];

export const PageNav: FC<PageNavProps> = ({ onNavigate, currentPage }) => (
  <nav aria-label="Explore Atlas" className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[#3B241C]/15 pt-5">
    {pageLinks
      .filter(({ page }) => page !== currentPage)
      .map(({ label, page }) => (
        <button
          key={page}
          type="button"
          onClick={() => onNavigate(page)}
          className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D2638] underline decoration-[#6D2638]/35 underline-offset-4 transition-colors hover:text-[#3B241C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
        >
          {label}
        </button>
      ))}
  </nav>
);

export const pageFrame =
  'bg-paper-grain min-h-[60vh] border-b border-[#3B241C]/15';
export const pageInner =
  'mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:space-y-14 lg:px-8 lg:py-16';
