import { useMemo } from 'react';
import type { FC } from 'react';
import type { Article } from '../../types';
import { ArticleGrid, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export const TravelPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const travelArticles = useMemo(
    () => articles.filter((article) => article.category === 'travel'),
    [articles],
  );
  const leadArticle = travelArticles[0];
  const otherArticles = leadArticle ? travelArticles.slice(1) : travelArticles;

  return (
    <main className={`${pageFrame} atlas-travel-page`}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="The Atlas / Travel"
          title="Travel"
          intro="Travel diaries, local perspectives, year abroad."
        />

        <section aria-labelledby="travel-writing">
          <div className="mb-6 grid grid-cols-1 gap-4 border-y border-[#3B241C]/15 py-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Travel diaries & personal experience',
              'City guides & recommendations',
              'Cultural discoveries & local traditions',
              'Belonging in unfamiliar places',
            ].map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="font-mono text-[10px] text-[#99664F]">{String(index + 1).padStart(2, '0')}</span>
                <p className="max-w-[15rem] text-sm leading-relaxed text-[#7A3E2D]">{item}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            eyebrow=""
            title="The road is part of the story"
            description="Field notes from the archive, tagged with the places and subjects named by their writers."
            id="travel-writing"
          />

          {leadArticle && (
            <button
              type="button"
              onClick={() => onSelectArticle(leadArticle)}
              aria-label={`Read ${leadArticle.title} by ${leadArticle.author.name}`}
              className="group mb-8 grid w-full grid-cols-1 overflow-hidden border border-[#3B241C]/20 bg-[#D7C6AE]/20 text-left transition-colors hover:border-[#6D2638]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5E9DE] lg:grid-cols-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#D7C6AE]/40 sm:aspect-[16/8] lg:col-span-7 lg:aspect-auto lg:min-h-[26rem]">
                <img
                  src={leadArticle.image}
                  alt={leadArticle.caption || leadArticle.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute left-4 top-4 border border-[#3B241C]/15 bg-[#F5E9DE]/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6D2638]">
                  {leadArticle.categoryLabel}
                </span>
              </div>
              <div className="flex flex-col justify-between p-5 sm:p-8 lg:col-span-5 lg:p-10">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A3E2D]">
                    {leadArticle.issue} <span aria-hidden="true">·</span> {leadArticle.date}
                  </p>
                  <h3 className="mt-4 font-editorial text-3xl font-medium leading-tight text-[#3B241C] transition-colors group-hover:text-[#6D2638] sm:text-4xl">
                    {leadArticle.title}
                  </h3>
                  <p className="mt-3 font-serif text-base italic leading-relaxed text-[#7A3E2D]">
                    {leadArticle.subtitle}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[#3B241C]/80">{leadArticle.excerpt}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-[#3B241C]/15 pt-4 text-xs text-[#7A3E2D]">
                  <span className="font-medium text-[#3B241C]">{leadArticle.author.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.author.origin}</span>
                  <span className="ml-auto font-semibold uppercase tracking-[0.15em] text-[#6D2638]">Read article</span>
                </div>
              </div>
            </button>
          )}

          <ArticleGrid
            articles={otherArticles}
            onSelectArticle={onSelectArticle}
            emptyTitle={leadArticle ? 'You have reached the end of this travel archive' : 'No travel articles yet'}
            emptyText={
              leadArticle
                ? 'There are no further travel-category pieces in the supplied archive.'
                : 'Travel writing will appear here as it is added to the publication archive.'
            }
          />
        </section>

        {leadArticle && (
          <section aria-label="Travel article tags" className="border-y border-[#3B241C]/15 py-5">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">
              Filed under
            </p>
            <div className="flex flex-wrap gap-2">
              {leadArticle.tags.map((tag) => (
                <span key={tag} className="border border-[#3B241C]/20 px-3 py-1.5 text-xs text-[#3B241C]">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}
        <PageNav onNavigate={onNavigate} currentPage="travel" />
      </div>
    </main>
  );
};
