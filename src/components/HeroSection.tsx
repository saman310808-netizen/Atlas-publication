import websiteSettings from '../content/website-settings.json';
import React from 'react';
import { Compass, BookOpen, ArrowUpRight, Globe, Scroll } from 'lucide-react';
import { heroImage, logoImage, articles } from '../data/mockContent';
import { Article } from '../types';

interface HeroSectionProps {
  onSelectArticle: (article: Article) => void;
  onExploreIssue: () => void;
  onExploreAtlas: () => void;
  onOpenContribute: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectArticle,
  onExploreIssue,
  onExploreAtlas,
  onOpenContribute,
}) => {
  const leadArticle = articles[0];

  return (
    <section className="relative overflow-hidden border-b border-[#3B241C]/15 bg-paper-grain">
      {/* Editorial Dateline & Masthead Bar */}
      <div className="border-b border-[#3B241C]/10 bg-[#D7C6AE]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between text-xs text-[#7A3E2D] font-medium tracking-wide">
          <div className="flex items-center gap-3">
            <span className="font-serif italic">Houghton Street, London WC2A 2AE</span>
            <span aria-hidden="true">·</span>
            <span>Est. at the London School of Economics</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span>Atlas Publication in Circulation</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#6D2638] font-semibold">Submissions Open for Spring</span>
          </div>
        </div>
      </div>

      {/* PROMINENT OFFICIAL LOGO & EDITORIAL MASTHEAD ON FIRST PAGE */}
      <div className="border-b border-[#3B241C]/15 bg-[#F5E9DE] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left Masthead Pillar (Institutional Credentials) */}
            <div className="hidden md:flex flex-col text-left space-y-1.5 w-64 shrink-0 border-r border-[#3B241C]/15 pr-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A3E2D] font-mono font-medium">
                Student Publication
              </span>
              <p className="font-editorial text-lg text-[#3B241C] font-semibold leading-tight">
                London School of Economics & Political Science
              </p>
              <p className="text-xs text-[#7A3E2D] font-serif italic">
                A student-led international review of world literature, ideas & travels.
              </p>
            </div>

            {/* Central Focal Emblem & Publication Title (The Official Logo) */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left">
              {/* Official Logo Artwork Box */}
              <div className="relative group shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-sm overflow-hidden shadow-md border-2 border-[#3B241C]/25 bg-[#F5E9DE] transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={logoImage}
                    alt="THE ATLAS Official Publication Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 right-1/2 sm:right-0 translate-x-1/2 sm:translate-x-0 bg-[#3B241C] text-[#F1D98A] text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-xs shadow-xs border border-[#F1D98A]/30 whitespace-nowrap">
                  Official Insignia
                </div>
              </div>

              {/* Publication Masthead Typography */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-widest text-[#7A3E2D] font-mono">
                  <span>ATLAS</span>
                  <span aria-hidden="true">·</span>
                  <span>Literature · Culture · Society</span>
                </div>
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] text-[#7A3E2D] uppercase">
                    THE
                  </span>
                  <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.06em] text-[#3B241C] leading-none">
                    ATLAS
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-[#7A3E2D] font-serif italic tracking-wide max-w-sm">
                  The Literary & Cultural Journal of the LSE Student Community
                </p>
              </div>
            </div>

            {/* Right Masthead Pillar (Publication Stats & Format) */}
            <div className="hidden md:flex flex-col text-right space-y-1.5 w-64 shrink-0 border-l border-[#3B241C]/15 pl-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A3E2D] font-mono font-medium">
                Distribution
              </span>
              <p className="font-editorial text-lg text-[#3B241C] font-semibold leading-tight">
                Student Writing & Cultural Perspectives
              </p>
              <p className="text-xs text-[#7A3E2D] font-serif italic">
                Writing, culture and perspectives from the student community
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HERO EDITORIAL CONTENT & LEAD STORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Statement & Typographic Anchor (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#7A3E2D] font-medium">
                <Compass className="w-3.5 h-3.5 text-[#6D2638]" />
                <span>Editorial Mission</span>
                <span aria-hidden="true">·</span>
                <span>Connecting Over 140 Nationalities</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-medium tracking-tight text-[#3B241C] leading-[1.1] text-balance">
                {websiteSettings.homepage.headline}
              </h2>

              {/* Dek / Curatorial premise */}
              <p className="text-base sm:text-lg text-[#3B241C]/85 leading-relaxed font-sans max-w-2xl">
                {websiteSettings.homepage.introduction}
              </p>
            </div>

            {/* Featured Dispatches Callout Box (single-elevation card with subtle hairline border) */}
            <div className="bg-[#D7C6AE]/25 border border-[#3B241C]/15 rounded-sm p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#7A3E2D]">
                <span className="font-medium uppercase tracking-wider">From the Editorial Desk</span>
                <span className="font-mono tabular-nums">ATLAS / WRITING</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => leadArticle ? onSelectArticle(leadArticle) : onExploreAtlas()}
                  className="group text-left focus-visible:outline-none"
                >
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#3B241C] group-hover:text-[#6D2638] transition-colors leading-snug">
                    {leadArticle?.title ?? 'Stories coming soon'}
                  </h3>
                  <p className="text-sm text-[#7A3E2D] font-serif italic mt-1">
                    {leadArticle?.subtitle ?? 'New voices and perspectives will appear here.'}
                  </p>
                </button>
                <p className="text-sm text-[#3B241C]/80 line-clamp-2">
                  {leadArticle?.excerpt ?? 'We are preparing a space for original student writing across literature, culture and society.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#3B241C]/10 text-xs text-[#7A3E2D]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#3B241C]">{leadArticle?.author.name ?? 'Atlas Editorial Team'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle?.author.origin ?? 'LSE student community'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle?.readTime ?? ''}</span>
                </div>

                <button
                  onClick={() => leadArticle ? onSelectArticle(leadArticle) : onExploreAtlas()}
                  className="font-medium text-[#6D2638] hover:text-[#3B241C] flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
                >
                  <span>Explore Writing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreAtlas}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5E9DE] bg-[#6D2638] hover:bg-[#7A3E2D] transition-colors rounded-sm shadow-xs flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Atlas</span>
              </button>
              <button
                onClick={onExploreAtlas}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#3B241C] bg-[#F5E9DE] border border-[#3B241C]/30 hover:border-[#6D2638] hover:text-[#6D2638] transition-colors rounded-sm flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Editorial Sections</span>
              </button>
              <button
                onClick={onOpenContribute}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#3B241C] bg-[#F5E9DE] border border-[#3B241C]/30 hover:border-[#6D2638] hover:text-[#6D2638] transition-colors rounded-sm"
              >
                <span>Submit Your Writing</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tactile Still-life & Publication Insignia (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full min-h-[380px] lg:min-h-[460px] rounded-sm overflow-hidden border border-[#3B241C]/20 shadow-md group">
              <img
                src={heroImage}
                alt="Library bookshelves"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Corner Watermark Seal */}
              <div className="absolute top-4 right-4 bg-[#F5E9DE]/95 backdrop-blur-xs p-2 rounded-sm border border-[#3B241C]/20 shadow-sm flex items-center gap-2">
                <img
                  src={logoImage}
                  alt="Insignia"
                  className="w-6 h-6 object-cover rounded-xs"
                />
                <span className="font-editorial text-xs font-semibold text-[#3B241C] tracking-wide">
                  ATLAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

