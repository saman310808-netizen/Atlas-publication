import type { FC } from 'react';
import { ArrowUpRight, Feather, Globe2 } from 'lucide-react';
import type { Article } from '../types';
import type { AtlasPage } from './pages';
import { regionalSections } from '../data/editorialContent';
import { ArticleCard } from './pages/shared';

interface HomeDepartmentsProps {
  articles: Article[];
  onNavigate: (page: AtlasPage) => void;
  onSelectArticle: (article: Article) => void;
}

export const HomeDepartments: FC<HomeDepartmentsProps> = ({
  articles,
  onNavigate,
  onSelectArticle,
}) => {
  const creativePieces = articles
    .filter((article) => article.category === 'poetry' || article.category === 'stories')
    .slice(0, 2);

  return (
    <>
      <section className="border-b border-[#3B241C]/15 bg-[#D7C6AE]/20 py-14 lg:py-20" aria-labelledby="notes-from-home">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">
                <Globe2 className="h-3.5 w-3.5" aria-hidden="true" /> A world of perspectives
              </p>
              <h2 id="notes-from-home" className="font-editorial text-4xl font-medium text-[#3B241C] sm:text-5xl">
                Notes From
              </h2>
              <p className="mt-2 max-w-xl font-serif text-base italic text-[#7A3E2D]">
                Perspectives from around the world.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('notes-from')}
              className="inline-flex min-h-11 items-center gap-2 border-b border-[#6D2638]/40 pb-1 text-xs font-semibold uppercase tracking-wider text-[#6D2638] hover:text-[#3B241C]"
            >
              Browse all regions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[#3B241C]/15 bg-[#3B241C]/15 sm:grid-cols-2 lg:grid-cols-3">
            {regionalSections.map((region, index) => (
              <button
                key={region.page}
                type="button"
                onClick={() => onNavigate(region.page)}
                className="group min-h-36 bg-[#F5E9DE] p-5 text-left transition-colors hover:bg-[#F5E9DE]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6D2638]"
              >
                <span className="font-mono text-[10px] tracking-widest text-[#99664F]">
                  {String(index + 1).padStart(2, '0')} / REGION
                </span>
                <span className="mt-3 block font-editorial text-2xl text-[#3B241C] group-hover:text-[#6D2638]">
                  {region.title}
                </span>
                
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#3B241C]/15 bg-paper-grain py-14 lg:py-20" aria-labelledby="margins-home">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">
                <Feather className="h-3.5 w-3.5" aria-hidden="true" /> Creative writing
              </p>
              <h2 id="margins-home" className="font-editorial text-4xl font-medium text-[#3B241C] sm:text-5xl">
                Margins
              </h2>
              <p className="mt-4 max-w-xl font-serif text-lg italic leading-relaxed text-[#7A3E2D]">
                Poetry, short fiction, essays and creative work exploring identity, culture and the human experience.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('margins')}
                className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5E9DE] transition-colors hover:bg-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
              >
                Explore Margins <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {creativePieces.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelectArticle={onSelectArticle}
                  number={String(index + 1).padStart(2, '0')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};
