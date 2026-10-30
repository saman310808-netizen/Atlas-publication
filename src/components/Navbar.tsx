import React, { useState } from 'react';
import { ChevronDown, Feather, Menu, Search, X } from 'lucide-react';
import { AtlasLogo } from './AtlasLogo';
import type { AtlasPage } from './pages';

interface NavbarProps {
  currentPage: AtlasPage;
  onOpenContribute: () => void;
  onNavigate: (page: AtlasPage) => void;
}

const pagePaths: Record<AtlasPage, string> = {
  home: '/',
  'notes-from': '/notes-from',
  margins: '/margins',
  travel: '/travel',
  'join-us': '/join-us',
  about: '/about',
  'notes-from-americas': '/notes-from/americas',
  'notes-from-europe': '/notes-from/europe',
  'notes-from-asia': '/notes-from/asia',
  'notes-from-mena': '/notes-from/mena',
  'notes-from-sub-saharan-africa': '/notes-from/sub-saharan-africa',
  'notes-from-australia-oceania': '/notes-from/australia-oceania',
};

const mainLinks: { id: AtlasPage; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'margins', label: 'Margins' },
  { id: 'travel', label: 'Travel' },
  { id: 'join-us', label: 'Join Us' },
  { id: 'about', label: 'About' },
];

const regions: { id: AtlasPage; label: string }[] = [
  { id: 'notes-from-americas', label: 'North and South America' },
  { id: 'notes-from-europe', label: 'Europe' },
  { id: 'notes-from-asia', label: 'Asia' },
  { id: 'notes-from-mena', label: 'MENA' },
  { id: 'notes-from-sub-saharan-africa', label: 'Africa and the Caribbean' },
  { id: 'notes-from-australia-oceania', label: 'Australia & Oceania' },
];

const activeClasses = 'text-[#6D2638] font-semibold';
const inactiveClasses = 'text-[#3B241C]/80 hover:text-[#3B241C]';

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onOpenContribute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  const handleNavigate = (page: AtlasPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setRegionsOpen(false);
  };

  const navigateLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: AtlasPage,
  ) => {
    event.preventDefault();
    handleNavigate(page);
  };

  const navLinkClass = (page: AtlasPage) =>
    `relative py-1 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] ${
      currentPage === page ? activeClasses : inactiveClasses
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#3B241C]/15 bg-[#F5E9DE]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href={pagePaths.home}
          onClick={(event) => navigateLink(event, 'home')}
          aria-label="The Atlas home"
          className="flex shrink-0 items-center gap-3 rounded py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
        >
          <AtlasLogo variant="wordmark" />
          
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-4 text-[13px] font-medium lg:flex xl:gap-6">
          <a
            href={pagePaths.home}
            onClick={(event) => navigateLink(event, 'home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
            className={navLinkClass('home')}
          >
            Home
          </a>

          <div
            className="relative flex items-center gap-1"
            onMouseEnter={() => setRegionsOpen(true)}
            onMouseLeave={() => setRegionsOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setRegionsOpen(false);
            }}
          >
            <a
              href={pagePaths['notes-from']}
              onClick={(event) => navigateLink(event, 'notes-from')}
              aria-current={currentPage === 'notes-from' ? 'page' : undefined}
              className={navLinkClass('notes-from')}
            >
              Notes From
            </a>
            <button
              type="button"
              aria-label="Show Notes From regions"
              aria-haspopup="true"
              aria-expanded={regionsOpen}
              aria-controls="notes-from-menu"
              onClick={() => setRegionsOpen((open) => !open)}
              className="rounded p-1 text-[#7A3E2D] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
            >
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {regionsOpen && (
              <div
                id="notes-from-menu"
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-64 border border-[#3B241C]/20 bg-[#F5E9DE] p-2 shadow-lg"
              >
                <a
                  href={pagePaths['notes-from']}
                  role="menuitem"
                  onClick={(event) => navigateLink(event, 'notes-from')}
                  className="block px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#6D2638] hover:bg-[#D7C6AE]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
                >
                  All Notes From
                </a>
                {regions.map((region) => (
                  <a
                    key={region.id}
                    href={pagePaths[region.id]}
                    role="menuitem"
                    onClick={(event) => navigateLink(event, region.id)}
                    className="block px-3 py-2 text-sm text-[#3B241C] hover:bg-[#D7C6AE]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
                  >
                    {region.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {mainLinks.filter(({ id }) => id !== 'home').map((link) => (
            <a
              key={link.id}
              href={pagePaths[link.id]}
              onClick={(event) => navigateLink(event, link.id)}
              aria-current={currentPage === link.id ? 'page' : undefined}
              className={navLinkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => handleNavigate('notes-from')}
            aria-label="Search the Atlas archive"
            className="hidden rounded p-2 text-[#3B241C] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] sm:inline-flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="atlas-mobile-navigation"
            className="rounded p-2 text-[#3B241C] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638] lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#3B241C]/40 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setMobileMenuOpen(false);
          }}
        >
          <nav
            id="atlas-mobile-navigation"
            aria-label="Mobile navigation"
            aria-modal="true"
            role="dialog"
            className="ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-[#3B241C]/20 bg-[#F5E9DE] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#3B241C]/15 pb-5">
              <AtlasLogo variant="wordmark" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="rounded p-2 text-[#3B241C] hover:text-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-1 py-5">
              <a href="/" onClick={(event) => navigateLink(event, 'home')} className="rounded px-3 py-2.5 text-base font-editorial hover:bg-[#D7C6AE]/20">
                Home
              </a>
              <a href="/notes-from" onClick={(event) => navigateLink(event, 'notes-from')} className="rounded px-3 py-2.5 text-base font-editorial hover:bg-[#D7C6AE]/20">
                Notes From
              </a>
              <div className="ml-3 border-l border-[#3B241C]/15 pl-3">
                {regions.map((region) => (
                  <a
                    key={region.id}
                    href={pagePaths[region.id]}
                    onClick={(event) => navigateLink(event, region.id)}
                    className="block rounded px-3 py-2 text-sm text-[#7A3E2D] hover:bg-[#D7C6AE]/20 hover:text-[#3B241C]"
                  >
                    {region.label}
                  </a>
                ))}
              </div>
              {mainLinks.filter(({ id }) => id !== 'home').map((link) => (
                <a
                  key={link.id}
                  href={pagePaths[link.id]}
                  onClick={(event) => navigateLink(event, link.id)}
                  className="rounded px-3 py-2.5 text-base font-editorial hover:bg-[#D7C6AE]/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavigate('notes-from')}
              className="mt-auto mb-3 inline-flex min-h-11 items-center justify-center gap-2 border border-[#3B241C]/25 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#3B241C] hover:border-[#6D2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D2638]"
            >
              <Search className="h-4 w-4" aria-hidden="true" /> Search the archive
            </button>
            
          </nav>
        </div>
      )}
    </header>
  );
};
