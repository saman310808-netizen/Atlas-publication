import type { FC } from 'react';
import type { Article } from '../../types';
import { contributorOpportunities, editorialCommissions } from '../../data/editorialContent';
import { ArticleCard, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export const JoinUsPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const sampleArticle = articles[0];

  return (
    <main className={pageFrame}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="Atlas / Contribute"
          title="Your Voice Belongs Here"
          intro="Atlas is built on the belief that everyone has a story worth sharing. Whether you're an experienced writer or publishing your work for the first time, we welcome curious minds, fresh perspectives and a passion for storytelling."
        >
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#application-placeholder"
              className="inline-flex min-h-11 items-center border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5E9DE] transition-colors hover:bg-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
            >
              Apply to Join Atlas
            </a>
            <a
              href="#application-placeholder"
              className="inline-flex min-h-11 items-center border border-[#3B241C]/30 bg-[#F5E9DE] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#3B241C] transition-colors hover:border-[#6D2638] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
            >
              Pitch an Article
            </a>
            <a
              href="#editorial-commissions"
              className="inline-flex min-h-11 items-center border border-[#3B241C]/30 bg-[#F5E9DE] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#3B241C] transition-colors hover:border-[#6D2638] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
            >
              View Open Commissions
            </a>
          </div>
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
                <a
                  href="#application-placeholder"
                  className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#6D2638] underline decoration-[#6D2638]/35 underline-offset-4 hover:text-[#3B241C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
                >
                  Application details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="editorial-commissions" aria-labelledby="commissions-title" className="scroll-mt-8">
          <SectionHeading
            eyebrow="Future opportunities"
            title="Editorial Commissions"
            description="Our editorial team periodically releases commissions — article ideas, themes and writing opportunities developed by Atlas editors. Writers can express interest in these commissions and contribute their perspectives to upcoming editions."
            id="commissions-title"
          />
          {editorialCommissions.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {editorialCommissions.map((commission) => (
                <article key={commission.id} className="border border-[#3B241C]/15 bg-[#F5E9DE] p-5 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">
                    {commission.section} <span aria-hidden="true">·</span> {commission.status}
                  </p>
                  <h3 className="mt-3 font-editorial text-2xl text-[#3B241C]">{commission.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#7A3E3D]">{commission.brief}</p>
                  <p className="mt-5 border-t border-[#3B241C]/10 pt-3 text-xs text-[#7A3E2D]">
                    Deadline: {commission.deadline}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_18rem]">
              <div className="border border-dashed border-[#3B241C]/25 bg-[#D7C6AE]/15 p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#99664F]">Commission board</p>
                <h3 className="mt-3 font-editorial text-2xl font-medium text-[#3B241C]">A space for upcoming briefs</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#7A3E2D]">
                  Commission details will appear here when supplied by the editorial team. No active commission information has been provided.
                </p>
              </div>
              <aside className="border border-[#3B241C]/15 bg-[#F5E9DE] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A3E2D]">Commission details</p>
                <dl className="mt-4 space-y-3 text-sm">
                  {['Title', 'Brief', 'Section', 'Deadline', 'Status'].map((label) => (
                    <div key={label} className="flex justify-between gap-3 border-b border-[#3B241C]/10 pb-2">
                      <dt className="text-[#7A3E2D]">{label}</dt>
                      <dd className="text-right text-[#3B241C]">To be supplied</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          )}
        </section>

        <section id="application-placeholder" aria-labelledby="application-title" className="scroll-mt-8">
          <div className="grid grid-cols-1 gap-6 border-y border-[#3B241C]/15 py-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">A note for contributors</p>
              <h2 id="application-title" className="font-editorial text-3xl font-medium text-[#3B241C]">
                Application & pitch links
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#7A3E2D]">
                This is a placeholder for the Atlas application and submission forms. No form link or contact details have been supplied.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('margins')}
              className="min-h-11 border border-[#3B241C]/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#3B241C] transition-colors hover:border-[#6D2638] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
            >
              Explore Margins
            </button>
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
