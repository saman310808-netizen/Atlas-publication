import { useMemo, useState } from 'react';
import type { FC } from 'react';
import { Search } from 'lucide-react';
import type { Article } from '../../types';
import { regionalSections } from '../../data/editorialContent';
import { ArticleGrid, PageHeading, PageNav, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export type NotesRegion = 'all' | (typeof regionalSections)[number]['id'];
type RegionalSection = Exclude<NotesRegion, 'all'>;

interface NotesFromPageProps extends AtlasPageProps {
  region?: NotesRegion;
}

const regions = regionalSections;
const regionRoutes = Object.fromEntries(regions.map((region) => [region.id, region.page])) as Record<
  RegionalSection,
  Parameters<AtlasPageProps['onNavigate']>[0]
>;

const articleMatchesRegion = (article: Article, region: NotesRegion) => {
  if (region === 'all') return true;
  const selectedRegion = regions.find((item) => item.id === region);
  if (!selectedRegion) return true;
  const searchable = [
    article.title,
    article.subtitle,
    article.author.origin,
    article.excerpt,
    ...article.tags,
  ]
    .join(' ')
    .toLocaleLowerCase();
  return selectedRegion.keywords.some((keyword) => searchable.includes(keyword));
};

export const NotesFromPage: FC<NotesFromPageProps> = ({
  articles,
  onNavigate,
  onSelectArticle,
  region: initialRegion = 'all',
}) => {
  const [activeRegion, setActiveRegion] = useState<NotesRegion>(initialRegion);
  const [searchQuery, setSearchQuery] = useState('');
  const activeInfo = regions.find((item) => item.id === activeRegion);
  const filteredArticles = useMemo(
    () => articles.filter((article) => {
      if (!articleMatchesRegion(article, activeRegion)) return false;
      const query = searchQuery.trim().toLocaleLowerCase();
      if (!query) return true;
      const searchable = [
        article.title,
        article.subtitle,
        article.author.name,
        article.author.origin,
        article.author.course,
        article.categoryLabel,
        article.excerpt,
        ...article.tags,
      ].join(' ').toLocaleLowerCase();
      return searchable.includes(query);
    }),
    [articles, activeRegion, searchQuery],
  );

  return (
    <main className={`${pageFrame} atlas-notes-page`}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="The Atlas / Regions"
          title={activeInfo ? activeInfo.title : 'Notes From'}
          intro={activeInfo ? activeInfo.title : 'Perspectives from around the world.'}
        />

        <section aria-labelledby="regional-sections">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A3E2D]">Browse by region</p>
              <h2 id="regional-sections" className="font-editorial text-2xl font-medium text-[#3B241C]">
                Regions
              </h2>
            </div>
            <p className="text-xs text-[#7A3E2D]">{filteredArticles.length} archive {filteredArticles.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter Notes From by region">
            <button
              type="button"
              onClick={() => setActiveRegion('all')}
              aria-pressed={activeRegion === 'all'}
              className={`border px-3.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] ${
                activeRegion === 'all'
                  ? 'border-[#3B241C] bg-[#3B241C] text-[#F5E9DE]'
                  : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C] hover:border-[#6D2638]'
              }`}
            >
              All regions
            </button>
            {regions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveRegion(item.id)}
                aria-pressed={activeRegion === item.id}
                className={`border px-3.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] ${
                  activeRegion === item.id
                    ? 'border-[#3B241C] bg-[#3B241C] text-[#F5E9DE]'
                    : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C] hover:border-[#6D2638]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-px border border-[#3B241C]/15 bg-[#3B241C]/15 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  setActiveRegion(item.id);
                  onNavigate(regionRoutes[item.id]);
                }}
                aria-label={`Open Notes From ${item.title}`}
                className={`group min-h-32 bg-[#F5E9DE] p-5 text-left transition-colors hover:bg-[#D7C6AE]/25 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6D2638] ${
                  activeRegion === item.id ? 'bg-[#D7C6AE]/25' : ''
                }`}
              >
                <span className="mb-3 block font-mono text-[10px] tracking-widest text-[#99664F]">
                  {String(regions.indexOf(item) + 1).padStart(2, '0')} / REGION
                </span>
                <span className="block font-editorial text-2xl text-[#3B241C] group-hover:text-[#6D2638]">
                  {item.title}
                </span>
                
              </button>
            ))}
          </div>
          <div className="mt-6 max-w-xl">
            <label htmlFor="notes-search" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">
              Search by title, writer, region or subject
            </label>
            <div className="flex items-center gap-3 border border-[#3B241C]/20 bg-[#F5E9DE] px-3.5 py-3 focus-within:border-[#6D2638]">
              <Search className="h-4 w-4 shrink-0 text-[#7A3E2D]" aria-hidden="true" />
              <input
                id="notes-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search the Atlas archive"
                className="w-full bg-transparent text-sm text-[#3B241C] outline-none placeholder:text-[#7A3E2D]/60"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="notes-archive">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-[#3B241C]/15 pb-4">
            <div>
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A3E2D]">
                {activeInfo ? `Selected region / ${activeInfo.title}` : 'From the archive'}
              </p>
              <h2 id="notes-archive" className="font-editorial text-3xl font-medium text-[#3B241C] sm:text-4xl">
                Articles
              </h2>
            </div>
          </div>
          <ArticleGrid
            articles={filteredArticles}
            onSelectArticle={onSelectArticle}
            emptyTitle="No indexed pieces for this region yet"
            emptyText=""
          />
        </section>
        <PageNav onNavigate={onNavigate} currentPage="notes-from" />
      </div>
    </main>
  );
};
