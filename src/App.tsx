import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IssueFeature } from './components/IssueFeature';
import { DiscoverySection } from './components/DiscoverySection';
import { CommunitySection } from './components/CommunitySection';
import { ContributeSection } from './components/ContributeSection';
import { Footer } from './components/Footer';
import { SubmissionModal } from './components/SubmissionModal';
import { HomeDepartments } from './components/HomeDepartments';
import { ArticlePage } from './components/pages/ArticlePage';
import {
  AboutPage,
  JoinUsPage,
  MarginsPage,
  NotesFromPage,
  TravelPage,
} from './components/pages';
import { articles } from './data/mockContent';
import type { Article, Category } from './types';
import type { AtlasPage } from './components/pages';
import type { NotesRegion } from './components/pages';

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

const regionPages: Record<string, { page: AtlasPage; region: NotesRegion }> = {
  americas: { page: 'notes-from-americas', region: 'americas' },
  europe: { page: 'notes-from-europe', region: 'europe' },
  asia: { page: 'notes-from-asia', region: 'asia' },
  mena: { page: 'notes-from-mena', region: 'mena' },
  'sub-saharan-africa': { page: 'notes-from-sub-saharan-africa', region: 'sub-saharan-africa' },
  'australia-oceania': { page: 'notes-from-australia-oceania', region: 'australia-oceania' },
};

function resolveRoute(pathname: string): {
  page: AtlasPage;
  region?: NotesRegion;
  articleId?: string;
  notFound?: boolean;
} {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  if (normalizedPath.startsWith('/article/')) {
    return { page: 'home', articleId: decodeURIComponent(normalizedPath.slice('/article/'.length)) };
  }
  if (normalizedPath.startsWith('/notes-from/')) {
    const region = regionPages[normalizedPath.slice('/notes-from/'.length)];
    if (region) return region;
  }

  const page = (Object.entries(pagePaths).find(([, path]) => path === normalizedPath)?.[0] ??
    null) as AtlasPage | null;

  if (page) return { page };
  return { page: 'home', notFound: true };
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [submissionInitialCategory, setSubmissionInitialCategory] = useState<Category>('stories');
  const route = useMemo(() => resolveRoute(pathname), [pathname]);

  useEffect(() => {
    const syncPath = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);

  const navigateToPath = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setPathname(window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigatePage = (page: AtlasPage) => navigateToPath(pagePaths[page]);

  const openArticle = (article: Article) => navigateToPath(`/article/${encodeURIComponent(article.id)}`);

  const openContribute = (category: Category = 'stories') => {
    setSubmissionInitialCategory(category);
    setIsSubmissionModalOpen(true);
  };

  const scrollHomeSection = (sectionId: string) => {
    if (pathname !== '/') {
      navigatePage('home');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateFooter = (target: string) => {
    const footerPages: Record<string, AtlasPage> = {
      stories: 'margins',
      poetry: 'margins',
      travel: 'travel',
      culture: 'notes-from',
      community: 'about',
      'notes-from': 'notes-from',
      margins: 'margins',
      'join-us': 'join-us',
      about: 'about',
    };
    const page = footerPages[target];
    if (page) {
      navigatePage(page);
      return;
    }
    if (target === 'issue' || target === 'discover' || target === 'contribute') {
      scrollHomeSection(target);
    }
  };

  const currentArticle = route.articleId
    ? articles.find((article) => article.id === route.articleId)
    : undefined;
  const isNotFound = Boolean(route.notFound || (route.articleId && !currentArticle));
  const activePage = route.page === 'notes-from' || route.page.startsWith('notes-from-')
    ? 'notes-from'
    : route.page;

  return (
    <div className="min-h-screen bg-[#F5E9DE] text-[#3B241C] flex flex-col selection:bg-[#6D2638] selection:text-[#F5E9DE]">
      <Navbar
        currentPage={activePage}
        onNavigate={navigatePage}
        onOpenContribute={() => openContribute('stories')}
      />

      {currentArticle ? (
        <ArticlePage
          article={currentArticle}
          articles={articles}
          onNavigate={navigatePage}
          onSelectArticle={openArticle}
        />
      ) : isNotFound ? (
        <main className="flex-1 bg-paper-grain px-4 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A3E2D]">Atlas archive</p>
          <h1 className="mt-3 font-editorial text-5xl text-[#3B241C]">This page is not in the atlas.</h1>
          <button
            type="button"
            onClick={() => navigatePage('home')}
            className="mt-8 border border-[#3B241C] bg-[#3B241C] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#F5E9DE] hover:bg-[#6D2638]"
          >
            Return home
          </button>
        </main>
      ) : route.page === 'notes-from' || route.page.startsWith('notes-from-') ? (
        <NotesFromPage
          key={route.region ?? 'all'}
          articles={articles}
          region={route.region}
          onNavigate={navigatePage}
          onSelectArticle={openArticle}
        />
      ) : route.page === 'margins' ? (
        <MarginsPage articles={articles} onNavigate={navigatePage} onSelectArticle={openArticle} />
      ) : route.page === 'travel' ? (
        <TravelPage articles={articles} onNavigate={navigatePage} onSelectArticle={openArticle} />
      ) : route.page === 'join-us' ? (
        <JoinUsPage articles={articles} onNavigate={navigatePage} onSelectArticle={openArticle} />
      ) : route.page === 'about' ? (
        <AboutPage articles={articles} onNavigate={navigatePage} onSelectArticle={openArticle} />
      ) : (
        <main className="flex-1">
          <HeroSection
            onSelectArticle={openArticle}
            onExploreIssue={() => scrollHomeSection('issue')}
            onExploreAtlas={() => navigatePage('notes-from')}
            onOpenContribute={() => openContribute('stories')}
          />
          <IssueFeature onSelectArticle={openArticle} />
          <DiscoverySection
            selectedCategoryFilter="all"
            onSelectArticle={openArticle}
          />
          <HomeDepartments
            articles={articles}
            onNavigate={navigatePage}
            onSelectArticle={openArticle}
          />
          <CommunitySection />
          <ContributeSection onOpenSubmissionModal={(category) => openContribute(category || 'stories')} />
        </main>
      )}

      <Footer onOpenContribute={() => openContribute('stories')} onNavigate={navigateFooter} />

      <SubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        initialCategory={submissionInitialCategory}
      />
    </div>
  );
}
