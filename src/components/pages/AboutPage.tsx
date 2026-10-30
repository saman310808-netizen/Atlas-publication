import websiteSettings from '../../content/website-settings.json';
import type { FC } from 'react';
import type { Article } from '../../types';
import { editorialTeamProfiles } from '../../data/editorialContent';
import { ArticleCard, PageHeading, PageNav, SectionHeading, pageFrame, pageInner } from './shared';
import type { AtlasPageProps } from './shared';

export const AboutPage: FC<AtlasPageProps> = ({ articles, onNavigate, onSelectArticle }) => {
  const archiveSelections = articles.slice(0, 2);

  return (
    <main className={pageFrame}>
      <div className={pageInner}>
        <PageHeading
          eyebrow="The Atlas / About"
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

        <section aria-labelledby="committee">
          <SectionHeading eyebrow="02 / People" title="Committee" description="Committee details will be added as appointments are confirmed." id="committee" />
          <div className="grid gap-6 md:grid-cols-3">
            {['Core Committee', 'Editors-in-Chief', 'Section Editors'].map((group) => (
              <div key={group} className="border-t-2 border-[#263B35] bg-white/50 p-6">
                <h3 className="font-editorial text-2xl">{group}</h3>
                <p className="mt-5 text-sm text-[#7A3E2D]">Name: To be confirmed</p>
                <p className="mt-2 text-sm text-[#7A3E2D]">Role: To be confirmed</p>
                <p className="mt-2 text-sm text-[#7A3E2D]">Email: To be confirmed</p>
              </div>
            ))}
          </div>
        </section>

        

        <section aria-labelledby="contact-atlas" className="grid grid-cols-1 gap-6 border-y border-[#3B241C]/15 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">04 / Get in touch</p>
            <h2 id="contact-atlas" className="font-editorial text-3xl font-medium text-[#3B241C]">Contact The Atlas</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#7A3E2D]">
              For editorial, contributor and publication enquiries, write to The Atlas team.
            </p>
          </div>
          <a
            href="mailto:atlas@lsesu.org"
            className="min-h-11 border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F5E9DE] transition-colors hover:bg-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] focus-visible:ring-offset-2"
          >
            Contact The Atlas
          </a>
        </section>

        {archiveSelections.length > 0 && (
          <section aria-labelledby="atlas-in-print">
            <SectionHeading
              eyebrow="From the archive"
              title="From the archive"
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
