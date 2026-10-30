import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Linkedin, Check, ArrowUpRight, BookOpen } from 'lucide-react';
import { AtlasLogo } from './AtlasLogo';
import { logoImage } from '../data/mockContent';

interface FooterProps {
  onOpenContribute: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContribute, onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#3B241C] text-[#F5E9DE] border-t border-[#3B241C] relative overflow-hidden">
      {/* Top Footer Ribbon with Dispatch Signup */}
      <div className="border-b border-[#F5E9DE]/10 bg-[#3B241C]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-2">
            
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#F5E9DE]">
              Explore articles and perspectives from The Atlas.
            </h3>
            <p className="text-xs text-[#D7C6AE] max-w-lg">
              Explore the publication and stay connected with The Atlas.
            </p>
          </div>

          <div className="md:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#6D2638]/40 border border-[#F1D98A]/30 rounded-sm text-xs text-[#F1D98A]">
                <Check className="w-4 h-4 shrink-0" />
                <span>You have been added to the The Atlas mailing list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address (@lse.ac.uk or external)"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F5E9DE]/10 border border-[#F5E9DE]/20 text-[#F5E9DE] placeholder:text-[#D7C6AE]/60 rounded-sm focus:outline-none focus:border-[#F1D98A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3B241C] bg-[#F1D98A] hover:bg-[#F5E9DE] rounded-sm transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & LSE Institution (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs overflow-hidden border border-[#F5E9DE]/20 bg-[#F5E9DE]/10 shrink-0">
                <img
                  src={logoImage}
                  alt="ATLAS Insignia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl font-medium tracking-wide text-[#F5E9DE] leading-none">
                  ATLAS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D7C6AE] mt-0.5 font-mono">
                  International Publication
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D7C6AE]/85 leading-relaxed font-sans max-w-sm">
              An international student-led publication covering culture, society, travel and creative writing.
            </p>

            <div className="text-xs text-[#D7C6AE]/70 font-serif italic space-y-0.5">
              
              <p className="font-mono text-[11px] not-italic text-[#F1D98A]/80">atlas@lsesu.org</p>
            </div>
          </div>

          {/* Column 2: Journal Sections (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1D98A] block">
              Journal Departments
            </span>
            <ul className="space-y-2 text-xs text-[#D7C6AE]">
              <li>
                <button
                  onClick={() => onNavigate('margins')}
                  className="hover:text-[#F1D98A] transition-colors"
                >
                  Margins · Short Stories & Fiction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('margins')}
                  className="hover:text-[#F1D98A] transition-colors"
                >
                  Margins · Poetry & Literary Prose
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('travel')}
                  className="hover:text-[#F1D98A] transition-colors"
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('notes-from')}
                  className="hover:text-[#F1D98A] transition-colors"
                >
                  Notes From · Regional Writing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F1D98A] transition-colors"
                >
                  About The Atlas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Opportunities & Archive (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1D98A] block">
              Participation
            </span>
            <ul className="space-y-2 text-xs text-[#D7C6AE]">
              <li>
                <button
                  onClick={() => onNavigate('join-us')}
                  className="hover:text-[#F1D98A] transition-colors text-left"
                >
                  Join The Atlas
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => onNavigate('join-us')}
                  className="hover:text-[#F1D98A] transition-colors text-left"
                >
                  Join Our Contributors
                </button>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Society Colophon & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F1D98A] block">
              Society & Colophon
            </span>
            <p className="text-xs text-[#D7C6AE]/80 leading-relaxed">
              A student-led space for literature, culture and society.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-xs bg-[#F5E9DE]/10 hover:bg-[#6D2638] flex items-center justify-center text-[#F5E9DE] transition-colors"
                aria-label="ATLAS on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-xs bg-[#F5E9DE]/10 hover:bg-[#6D2638] flex items-center justify-center text-[#F5E9DE] transition-colors"
                aria-label="ATLAS on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-xs bg-[#F5E9DE]/10 hover:bg-[#6D2638] flex items-center justify-center text-[#F5E9DE] transition-colors"
                aria-label="ATLAS on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:atlas@lsesu.org"
                className="w-8 h-8 rounded-xs bg-[#F5E9DE]/10 hover:bg-[#6D2638] flex items-center justify-center text-[#F5E9DE] transition-colors"
                aria-label="Email ATLAS"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon line */}
        <div className="mt-12 pt-6 border-t border-[#F5E9DE]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7C6AE]/60 gap-4">
          <p>© {new Date().getFullYear()} The Atlas. All rights reserved by contributing authors.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>LSESU REGISTERED SOCIETY</span>
            <span aria-hidden="true">·</span>
            <span>The Atlas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
