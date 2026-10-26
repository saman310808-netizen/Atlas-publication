import type { FC } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Article } from '../../types';
import type { AtlasPageProps } from './shared';
import { ArticleCard, pageFrame, pageInner } from './shared';

interface ArticlePageProps extends Pick<AtlasPageProps, 'onNavigate' | 'onSelectArticle'> {
  article: Article;
  articles: Article[];
}

export const ArticlePage: FC<ArticlePageProps> = ({
  article,
  articles,
  onNavigate,
  onSelectArticle,
}) => {
  const related = articles
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => ({
      article: candidate,
      score: candidate.tags.filter((tag) => article.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ article: candidate }) => candidate);

  return (
    <main className={pageFrame}>
      <article className={pageInner}>
        <button
          type="button"
          onClick={() => onNavigate(article.category === 'travel' ? 'travel' : article.category === 'poetry' || article.category === 'stories' ? 'margins' : 'notes-from')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6D2638] hover:text-[#3B241C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {article.category === 'travel' ? 'Travel' : article.category === 'poetry' || article.category === 'stories' ? 'Margins' : 'Notes From'}
        </button>

        <header className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">
            {article.categoryLabel} <span aria-hidden="true">·</span> {article.issue}
          </p>
          <h1 className="mt-4 font-editorial text-4xl font-medium leading-[1.04] tracking-tight text-[#3B241C] sm:text-6xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl font-serif text-lg italic leading-relaxed text-[#7A3E2D] sm:text-xl">
            {article.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-[#7A3E2D]">
            <span className="font-semibold text-[#3B241C]">{article.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {article.image && (
          <figure className="mx-auto w-full max-w-5xl">
            <img
              src={article.image}
              alt={article.caption || article.title}
              className="max-h-[38rem] w-full border border-[#3B241C]/15 object-cover"
            />
            {article.caption && (
              <figcaption className="mt-2 text-xs text-[#7A3E2D]">{article.caption}</figcaption>
            )}
          </figure>
        )}

        <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div className="min-w-0">
            {article.pullQuote && (
              <blockquote className="mb-8 border-y border-[#3B241C]/20 py-5 font-editorial text-2xl italic leading-relaxed text-[#6D2638] sm:text-3xl">
                “{article.pullQuote}”
              </blockquote>
            )}
            <div className="space-y-6">
              {article.content.map((paragraph, index) => (
                <p
                  key={`${article.id}-${index}`}
                  className="whitespace-pre-line font-serif text-lg leading-[1.85] text-[#3B241C]/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2 border-t border-[#3B241C]/15 pt-5" aria-label="Article tags">
              {article.tags.map((tag) => (
                <span key={tag} className="border border-[#3B241C]/20 px-3 py-1.5 text-xs text-[#7A3E2D]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="h-fit border-y border-[#3B241C]/15 py-5 lg:border-l lg:border-y-0 lg:pl-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">About the writer</p>
            <h2 className="mt-2 font-editorial text-2xl text-[#3B241C]">{article.author.name}</h2>
            <p className="mt-1 text-xs text-[#7A3E2D]">{article.author.course}</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-[#99664F]">{article.author.origin}</p>
            {article.author.bio && (
              <p className="mt-4 font-serif text-sm italic leading-relaxed text-[#3B241C]/80">
                {article.author.bio}
              </p>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <section className="border-t border-[#3B241C]/15 pt-8" aria-labelledby="related-articles">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">Continue reading</p>
                <h2 id="related-articles" className="mt-2 font-editorial text-3xl text-[#3B241C]">
                  Related pieces
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('notes-from')}
                className="hidden items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#6D2638] hover:text-[#3B241C] sm:inline-flex"
              >
                Browse the archive <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((relatedArticle, index) => (
                <ArticleCard
                  key={relatedArticle.id}
                  article={relatedArticle}
                  onSelectArticle={onSelectArticle}
                  number={String(index + 1).padStart(2, '0')}
                  compact
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
};
