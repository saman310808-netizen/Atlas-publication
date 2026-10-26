import React, { useState } from 'react';
import { BookOpen, Layers, Check, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { currentIssue, articles } from '../data/mockContent';
import { Article } from '../types';

interface IssueFeatureProps {
  onSelectArticle: (article: Article) => void;
}

export const IssueFeature: React.FC<IssueFeatureProps> = ({ onSelectArticle }) => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<'campus' | 'digital' | 'postal'>('campus');

  return (
    <section id="issue" className="py-16 lg:py-24 border-b border-[#3B241C]/15 bg-[#D7C6AE]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#3B241C]/15">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#7A3E2D] font-medium mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#6D2638]" />
              <span>Current Print Edition</span>
              <span aria-hidden="true">·</span>
              <span>Volume IV</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#3B241C] tracking-tight">
              {currentIssue.title}
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#7A3E2D] mt-2">
              {currentIssue.season} — {currentIssue.theme}
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs text-[#7A3E2D] uppercase tracking-wider block">Format Specs</span>
            <span className="font-editorial text-sm font-medium text-[#3B241C]">{currentIssue.format}</span>
          </div>
        </div>

        {/* Feature Grid: Cover Showcase + Curatorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-center">
          {/* Physical Cover Representation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full group">
              {/* Paper shadow & tactile layer */}
              <div className="absolute -inset-2 bg-[#3B241C]/10 rounded-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative rounded-sm overflow-hidden border border-[#3B241C]/25 shadow-xl bg-[#F5E9DE]">
                <img
                  src={currentIssue.coverImage}
                  alt="ATLAS Issue 04 Cover: Cartographies of Belonging"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Physical metadata label */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#7A3E2D]">
                <span>148 Pages · Smyth-sewn Binding</span>
                <span className="font-medium text-[#6D2638]">LSESU Literary Society Edition</span>
              </div>
            </div>
          </div>

          {/* Curatorial Notes & Table of Contents (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#3B241C] leading-snug">
                An archival artifact crafted by international hands on Houghton Street.
              </h3>
              <p className="text-base text-[#3B241C]/85 leading-relaxed">
                {currentIssue.description}
              </p>
            </div>

            {/* Publication Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentIssue.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#3B241C] bg-[#F5E9DE] p-3 rounded-sm border border-[#3B241C]/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#6D2638] shrink-0 mt-0.5" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Featured stories inside this issue */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#7A3E2D] font-medium block">
                Selected Writings in this Issue:
              </span>
              <div className="divide-y divide-[#3B241C]/10 border-y border-[#3B241C]/10">
                {articles.slice(0, 3).map((art, index) => (
                  <button
                    key={art.id}
                    onClick={() => onSelectArticle(art)}
                    className="w-full py-3 flex items-center justify-between text-left group focus-visible:outline-none transition-colors hover:text-[#6D2638]"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#7A3E2D]">
                        0{index + 1}.
                      </span>
                      <div>
                        <h4 className="font-editorial text-lg text-[#3B241C] group-hover:text-[#6D2638] font-medium leading-none">
                          {art.title}
                        </h4>
                        <span className="text-xs text-[#7A3E2D] mt-0.5 inline-block">
                          {art.author.name} · {art.author.origin}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#6D2638] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setShowOrderModal(true)}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5E9DE] bg-[#6D2638] hover:bg-[#7A3E2D] transition-colors rounded-sm shadow-xs flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Acquire Print Copy</span>
              </button>
              <button
                onClick={() => onSelectArticle(articles[0])}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3B241C] bg-[#F5E9DE] border border-[#3B241C]/30 hover:border-[#6D2638] hover:text-[#6D2638] transition-colors rounded-sm"
              >
                <span>Browse Digital Excerpts</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Print Edition Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 bg-[#3B241C]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#F5E9DE] border border-[#3B241C]/25 max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl relative space-y-6">
            <div className="flex items-start justify-between border-b border-[#3B241C]/15 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A3E2D]">Print Publication</span>
                <h3 className="font-editorial text-2xl font-medium text-[#3B241C]">
                  Order ATLAS Issue 04
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowOrderModal(false);
                  setOrderSubmitted(false);
                }}
                className="text-[#7A3E2D] hover:text-[#3B241C] text-sm font-mono px-2 py-1"
              >
                ✕
              </button>
            </div>

            {orderSubmitted ? (
              <div className="space-y-4 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#6D2638]/10 text-[#6D2638] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-2xl text-[#3B241C]">Reservation Confirmed</h4>
                <p className="text-sm text-[#3B241C]/80 max-w-sm mx-auto">
                  Your copy of Issue 04 is reserved. An email with your dispatch token has been generated. Collect your copy at the LSESU Saw Swee Hock Student Centre or via international mail.
                </p>
                <button
                  onClick={() => {
                    setShowOrderModal(false);
                    setOrderSubmitted(false);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#3B241C] text-[#F5E9DE] rounded-sm"
                >
                  Return to Journal
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSubmitted(true);
                }}
                className="space-y-4 text-sm"
              >
                <div className="space-y-2">
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#7A3E2D]">
                    Select Distribution Option
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('campus')}
                      className={`p-3 text-left rounded-sm border text-xs ${
                        selectedFormat === 'campus'
                          ? 'border-[#6D2638] bg-[#6D2638]/10 text-[#6D2638] font-semibold'
                          : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C]'
                      }`}
                    >
                      <div className="font-medium">LSE Campus</div>
                      <div className="text-[11px] text-[#7A3E2D]">Free pickup (SU)</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('postal')}
                      className={`p-3 text-left rounded-sm border text-xs ${
                        selectedFormat === 'postal'
                          ? 'border-[#6D2638] bg-[#6D2638]/10 text-[#6D2638] font-semibold'
                          : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C]'
                      }`}
                    >
                      <div className="font-medium">Postal Mail</div>
                      <div className="text-[11px] text-[#7A3E2D]">£3 UK / £6 Intl</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedFormat('digital')}
                      className={`p-3 text-left rounded-sm border text-xs ${
                        selectedFormat === 'digital'
                          ? 'border-[#6D2638] bg-[#6D2638]/10 text-[#6D2638] font-semibold'
                          : 'border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C]'
                      }`}
                    >
                      <div className="font-medium">PDF Edition</div>
                      <div className="text-[11px] text-[#7A3E2D]">Open Access</div>
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Maya Sterling"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Email Address (@lse.ac.uk or personal)
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="m.sterling@lse.ac.uk"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#F5E9DE] bg-[#6D2638] hover:bg-[#7A3E2D] rounded-sm transition-colors"
                  >
                    Confirm Copy Reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
