import websiteSettings from '../content/website-settings.json';
import React from 'react';
import { Feather, FileCheck, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { submissionGuidelines } from '../data/mockContent';
import { Category } from '../types';

interface ContributeSectionProps {
  onOpenSubmissionModal: (category?: Category) => void;
}

export const ContributeSection: React.FC<ContributeSectionProps> = ({
  onOpenSubmissionModal,
}) => {
  return (
    <section id="contribute" className="py-16 lg:py-24 border-b border-[#3B241C]/15 bg-paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Masthead */}
        <div className="bg-[#3B241C] text-[#F5E9DE] rounded-sm p-8 sm:p-12 lg:p-14 border border-[#3B241C] relative overflow-hidden">
          {/* Subtle decorative background watermarks */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 rounded-full bg-[#6D2638]/20 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F1D98A] font-medium">
              <Feather className="w-4 h-4 text-[#F1D98A]" />
              <span>Call for Contributions</span>
              <span aria-hidden="true">·</span>
              <span></span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F5E9DE] leading-tight">
              {websiteSettings.submissions.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#D7C6AE] font-sans leading-relaxed max-w-2xl">
              {websiteSettings.submissions.introduction}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenSubmissionModal('stories')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#3B241C] bg-[#F1D98A] hover:bg-[#F5E9DE] transition-colors rounded-sm shadow-xs flex items-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Open Submission Portal</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#D7C6AE] font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#F1D98A]" />
                <span>{websiteSettings.submissions.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Standards & Submission Categories */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#3B241C]/15">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7A3E2D] font-mono">
                Editorial Criteria
              </span>
              <h3 className="font-editorial text-2xl font-medium text-[#3B241C]">
                Submission Categories & Length Guidelines
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#7A3E2D]">
              <ShieldCheck className="w-4 h-4 text-[#6D2638]" />
              <span>Editorial review</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {submissionGuidelines.map((guide, idx) => (
              <div
                key={idx}
                className="bg-[#F5E9DE] border border-[#3B241C]/15 rounded-sm p-6 space-y-3 flex flex-col justify-between hover:border-[#6D2638]/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-editorial text-xl font-medium text-[#3B241C]">
                      {guide.category}
                    </h4>
                    <span className="text-xs font-mono text-[#7A3E2D] tabular-nums">
                      {guide.limit}
                    </span>
                  </div>
                  <p className="text-xs text-[#3B241C]/80 leading-relaxed font-sans">
                    {guide.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3B241C]/10 flex items-center justify-between text-xs">
                  <span className="text-[#7A3E2D]">Open to all LSE courses</span>
                  <button
                    onClick={() => {
                      const catMap: Record<number, Category> = {
                        0: 'stories',
                        1: 'poetry',
                        2: 'travel',
                        3: 'culture',
                      };
                      onOpenSubmissionModal(catMap[idx] || 'stories');
                    }}
                    className="font-medium text-[#6D2638] hover:text-[#3B241C] flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
                  >
                    <span>Submit to this genre</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
