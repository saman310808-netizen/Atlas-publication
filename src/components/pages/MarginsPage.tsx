import { useMemo, useState } from 'react';
import type { FC } from 'react';
import type { Article } from '../../types';
import { ArticleCard, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

type MarginsFilter = 'all' | 'poetry' | 'stories' | 'prose';

const categories: { id: MarginsFilter; title: string; description: string }[] = [
  {
    id: 'poetry',
    title: 'Poetry',
    description: 'Original poetry in any style, exploring personal experiences, cultures, emotions, identity and imagination.',
  },
  {
    id: 'stories',
    title: 'Short Stories',
    description: 'Original works of fiction, whether inspired by lived experiences, cultural traditions or entirely imagined worlds.',
  },
  {
    id: 'prose',
    title: 'Literary Prose',
    description: 'Creative reflections, flash fiction and experimental writing that blur the boundaries between genres.',
  },
];

export const MarginsPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const [activeFilter, setActiveFilter] = useState<MarginsFilter>('all');
  const marginsArticles = useMemo(
    () => articles.filter((article) => article.category === 'poetry' || article.category === 'stories'),
    [articles],
  );
  const filteredArticles = useMemo(() => {
    if (activeFilter === 'all') return marginsArticles;
    if (activeFilter === 'poetry') return marginsArticles.filter((article) => article.category === 'poetry');
    if (activeFilter === 'stories') {
      return marginsArticles.filter((article) => /short story/i.test(article.categoryLabel));
    }
    return marginsArticles.filter((article) =>
      /personal essay|literary prose/i.test(article.categoryLabel) ||
      article.tags.some((tag) => /literary prose|flash fiction|experimental writing/i.test(tag)),
    );
  }, [activeFilter, marginsArticles]);

  return (
    <main className={pageFrame}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="Atlas / Creative writing"
          title="Margins"
          intro="Not every story fits neatly within the lines. Margins is Atlas's home for creative expression — a space for poetry, fiction and the words that resist categorisation. Here, we invite writers to explore memory, identity, belonging, imagination and everything in between."
        >
          <button
            type="button"
            onClick={() => onNavigate('join-us')}
            className="mt-6 inline-flex min-h-11 items-center border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5E9DE] transition-colors hover:bg-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
          >
            Submit to Margins
          </button>
        </PageHeading>

        <section aria-labelledby="margins-categories">
          <SectionHeading
            eyebrow="A place for"
            title="What belongs in Margins?"
            id="margins-categories"
          />
          <div className="grid grid-cols-1 gap-0 border-y border-[#3B241C]/15 md:grid-cols-3 md:divide-x md:divide-[#3B241C]/15">
            {categories.map((category, index) => (
              <button
                type="button"
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                aria-pressed={activeFilter === category.id}
                className={`group min-h-48 border-b border-[#3B241C]/15 px-5 py-6 text-left transition-colors last:border-b-0 hover:bg-[#D7C6AE]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6D2638] md:border-b-0 md:px-6 ${
                  activeFilter === category.id ? 'bg-[#D7C6AE]/20' : ''
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest text-[#99664F]">
                  {String(index + 1).padStart(2, '0')} / FORM
                </span>
                <span className="mt-3 block font-editorial text-2xl text-[#3B241C] group-hover:text-[#6D2638]">
                  {category.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-[#7A3E2D]">{category.description}</span>
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="margins-archive">
          <SectionHeading
            eyebrow="The literary archive"
            title="Words beyond the lines"
            description="Browse the creative work currently held in the Atlas archive."
            id="margins-archive"
          />
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter Margins writing">
            {[
              { id: 'all' as const, label: 'All writing' },
              { id: 'poetry' as const, label: 'Poetry' },
              { id: 'stories' as const, label: 'Short stories' },
              { id: 'prose' as const, label: 'Literary prose' },
            ].map((filter) => (
              <button
                type="button"
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`border px-3.5 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] ${
                  activeFilter === filter.id
                    ? 'border-[#3B241C] bg-[#3B241C] text-[#F5E9DE]'
                    : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C] hover:border-[#6D2638]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelectArticle={onSelectArticle}
                  number={String(index + 1).padStart(2, '0')}
                  excerpt={article.category === 'poetry' ? article.content[0] : article.excerpt}
                />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#3B241C]/25 bg-[#D7C6AE]/15 px-6 py-12 text-center">
              <p className="font-editorial text-2xl text-[#3B241C]">No pieces are separately indexed here yet</p>
              <p className="mx-auto mt-2 max-w-md font-serif text-sm italic leading-relaxed text-[#7A3E2D]">
                This filter follows the categories and tags already present in the archive.
              </p>
            </div>
          )}
        </section>
        <PageNav onNavigate={onNavigate} currentPage="margins" />
      </div>
    </main>
  );
};
