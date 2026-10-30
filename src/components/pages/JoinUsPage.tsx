import type { FC } from 'react';
import type { Article } from '../../types';
import { contributorOpportunities, } from '../../data/editorialContent';
import { ArticleCard, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export const JoinUsPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const sampleArticle = articles[0];

  return (
    <main className={pageFrame}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="The Atlas / Join Us"
          title="Join Us"
          intro="Explore opportunities to join The Atlas as a staff writer, columnist or contributing writer."
        >
          </PageHeading>

        <section aria-labelledby="contributor-opportunities">
          <SectionHeading
            eyebrow="Ways to write"
            title="Find your place in the pages"
            description="There is more than one way to contribute. Bring an idea, a perspective or a question you want to follow."
            id="contributor-opportunities"
          />
          <div className="grid grid-cols-1 border-y border-[#3B241C]/15 md:grid-cols-3 md:divide-x md:divide-[#3B241C]/15">
            {contributorOpportunities.map((role) => (
              <article key={role.title} className="border-b border-[#3B241C]/15 px-5 py-6 last:border-0 md:border-b-0 md:px-6 md:py-8">
                <p className="font-mono text-[10px] tracking-[0.18em] text-[#99664F]">{role.number} / CONTRIBUTOR</p>
                <h3 className="mt-5 font-editorial text-2xl font-medium text-[#3B241C]">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7A3E2D]">{role.description}</p>
                
              </article>
            ))}
          </div>
        </section>

        

        

        {sampleArticle && (
          <section aria-labelledby="contributor-reading">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A3E2D]">Read the journal</p>
                <h2 id="contributor-reading" className="font-editorial text-3xl font-medium text-[#3B241C]">
                  Start with a published piece
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('notes-from')}
                className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-[#6D2638] underline decoration-[#6D2638]/35 underline-offset-4 hover:text-[#3B241C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] sm:block"
              >
                Browse Notes From
              </button>
            </div>
            <div className="max-w-md">
              <ArticleCard article={sampleArticle} onSelectArticle={onSelectArticle} compact />
            </div>
          </section>
        )}
        <PageNav onNavigate={onNavigate} currentPage="join-us" />
      </div>
    </main>
  );
};
