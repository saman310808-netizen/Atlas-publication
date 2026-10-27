import websiteSettings from '../../content/website-settings.json';
import type { FC } from 'react';
import type { Article } from '../../types';
import { atlasValues, editorialTeamProfiles } from '../../data/editorialContent';
import { ArticleCard, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export const AboutPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const archiveSelections = articles.slice(0, 2);

  return (
    <main className={pageFrame}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="Atlas / Our publication"
          title={websiteSettings.about.headline}
          intro={websiteSettings.about.introduction}
        />

        <section aria-labelledby="our-mission" className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">01 / Purpose</p>
            <h2 id="our-mission" className="font-editorial text-3xl font-medium leading-tight text-[#3B241C] sm:text-4xl">
              Our Mission
            </h2>
          </div>
          <div className="border-l border-[#6D2638]/35 pl-5 sm:pl-7">
            <p className="font-editorial text-2xl leading-relaxed text-[#3B241C] sm:text-3xl">
              {websiteSettings.about.missionHeadline}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#7A3E2D] sm:text-base">
              {websiteSettings.about.missionDescription}
            </p>
          </div>
        </section>

        <section aria-labelledby="our-values">
          <SectionHeading
            eyebrow="02 / Principles"
            title="Our Values"
            description="The spirit behind the stories we gather and the conversations we make space for."
            id="our-values"
          />
          <div className="grid grid-cols-1 gap-0 border-y border-[#3B241C]/15 sm:grid-cols-3 sm:divide-x sm:divide-[#3B241C]/15">
            {atlasValues.map((value, index) => (
              <article key={value.title} className="border-b border-[#3B241C]/15 px-5 py-6 last:border-0 sm:border-b-0 sm:px-6">
                <p className="font-mono text-[10px] tracking-[0.18em] text-[#99664F]">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 font-editorial text-2xl font-medium text-[#3B241C]">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#7A3E2D]">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="editorial-team">
          <SectionHeading
            eyebrow="03 / People"
            title="Meet the Editorial Team"
            description="A space for the editors and contributors who shape each issue."
            id="editorial-team"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {editorialTeamProfiles.map((profile, index) => (
              <article key={profile.id} className="min-h-52 border border-dashed border-[#3B241C]/25 bg-[#D7C6AE]/15 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#99664F]">
                      {profile.role || `Profile ${String(index + 1).padStart(2, '0')}`}
                    </p>
                    <h3 className="mt-4 font-editorial text-2xl text-[#3B241C]">
                      {profile.name || 'Editorial profile'}
                    </h3>
                  </div>
                  {profile.photo ? (
                    <img src={profile.photo} alt={profile.name} className="h-12 w-12 shrink-0 border border-[#3B241C]/20 object-cover" />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#3B241C]/20 bg-[#F5E9DE] font-editorial text-lg text-[#7A3E2D]"
                    >
                      AT
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#7A3E2D]">
                  {profile.bio || 'Name, role, photograph and biography will be added when confirmed by the team.'}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact-atlas" className="grid grid-cols-1 gap-6 border-y border-[#3B241C]/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">04 / Get in touch</p>
            <h2 id="contact-atlas" className="font-editorial text-3xl font-medium text-[#3B241C]">Contact Atlas</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#7A3E2D]">
              For editorial, contributor and publication enquiries, write to the Atlas team.
            </p>
          </div>
          <a
            href="mailto:atlas@lsesu.org"
            className="min-h-11 border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5E9DE] transition-colors hover:bg-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
          >
            Contact Atlas
          </a>
        </section>

        {archiveSelections.length > 0 && (
          <section aria-labelledby="atlas-in-print">
            <SectionHeading
              eyebrow="From the archive"
              title="Stories that make an atlas"
              id="atlas-in-print"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {archiveSelections.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelectArticle={onSelectArticle}
                  number={String(index + 1).padStart(2, '0')}
                  compact
                />
              ))}
            </div>
          </section>
        )}
        <PageNav onNavigate={onNavigate} currentPage="about" />
      </div>
    </main>
  );
};
