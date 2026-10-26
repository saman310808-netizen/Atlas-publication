import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Globe2,
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Check,
} from 'lucide-react';
import { Article } from '../types';
import { articles } from '../data/mockContent';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (article) {
      // Check if bookmarked
      try {
        const bookmarks = JSON.parse(localStorage.getItem('atlas_bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(article.id));
      } catch {
        // fallback
      }
      // Scroll to top
      const scrollContainer = document.getElementById('article-reader-container');
      if (scrollContainer) scrollContainer.scrollTop = 0;
    }
  }, [article]);

  if (!article) return null;

  const toggleBookmark = () => {
    try {
      const bookmarks = JSON.parse(localStorage.getItem('atlas_bookmarks') || '[]');
      let updated: string[];
      if (bookmarks.includes(article.id)) {
        updated = bookmarks.filter((id: string) => id !== article.id);
        setIsBookmarked(false);
      } else {
        updated = [...bookmarks, article.id];
        setIsBookmarked(true);
      }
      localStorage.setItem('atlas_bookmarks', JSON.stringify(updated));
    } catch {
      setIsBookmarked(!isBookmarked);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentIndex = articles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 bg-[#3B241C]/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div
        id="article-reader-container"
        className="bg-[#F5E9DE] border border-[#3B241C]/30 max-w-4xl w-full h-[94vh] rounded-sm shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Sticky Utility Bar */}
        <div className="h-14 px-6 border-b border-[#3B241C]/15 bg-[#D7C6AE]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 text-xs text-[#7A3E2D]">
            <span className="font-semibold text-[#6D2638] uppercase tracking-wider">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[#3B241C]">{article.issue}</span>
          </div>

          {/* Reading tools: font toggle, bookmark, share, close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="px-2.5 py-1 text-xs border border-[#3B241C]/20 bg-[#F5E9DE] rounded-xs text-[#3B241C] hover:bg-[#D7C6AE]/30 font-serif"
              title="Toggle reading font size"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            <button
              onClick={toggleBookmark}
              className={`p-1.5 rounded-xs border transition-colors ${
                isBookmarked
                  ? 'bg-[#6D2638] text-[#F5E9DE] border-[#6D2638]'
                  : 'bg-[#F5E9DE] text-[#3B241C] border-[#3B241C]/20 hover:text-[#6D2638]'
              }`}
              title="Save to reading list"
            >
              <Bookmark className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 rounded-xs border border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C] hover:text-[#6D2638] transition-colors"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#3B241C] hover:text-[#6D2638] rounded-xs ml-2"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Editorial Essay Canvas */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 lg:p-14 space-y-10">
          {/* Article Masthead */}
          <div className="max-w-2xl mx-auto space-y-4 text-center border-b border-[#3B241C]/15 pb-8">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#7A3E2D]">
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#3B241C] leading-[1.12]">
              {article.title}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#7A3E2D]">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="pt-3 flex flex-col items-center gap-1 text-xs text-[#3B241C]">
              <span className="font-semibold text-sm">{article.author.name}</span>
              <span className="text-[#7A3E2D] font-serif">{article.author.course}</span>
              <span className="text-[11px] uppercase tracking-wider text-[#7A3E2D]">
                Origin: {article.author.origin}
              </span>
            </div>
          </div>

          {/* Featured Visual */}
          <div className="max-w-3xl mx-auto space-y-2">
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-sm border border-[#3B241C]/20 shadow-sm bg-[#D7C6AE]/30">
              <img
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {article.caption && (
              <p className="text-xs text-[#7A3E2D] font-serif italic text-center">
                {article.caption}
              </p>
            )}
          </div>

          {/* Pull quote if available */}
          {article.pullQuote && (
            <div className="max-w-2xl mx-auto py-6 border-y border-[#3B241C]/15 text-center my-6">
              <p className="font-editorial text-2xl sm:text-3xl italic text-[#6D2638] leading-snug">
                "{article.pullQuote}"
              </p>
            </div>
          )}

          {/* Body Prose constrained to optimal reading measure (65-75ch, max-w-2xl) */}
          <div
            className={`max-w-2xl mx-auto font-serif text-[#3B241C] space-y-6 leading-relaxed ${
              fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}
          >
            {article.content.map((paragraph, index) => {
              if (index === 0) {
                // Drop cap on first paragraph
                return (
                  <p
                    key={index}
                    className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#6D2638] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                );
              }
              return (
                <p key={index} className="leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio Box */}
          <div className="max-w-2xl mx-auto p-6 bg-[#D7C6AE]/30 border border-[#3B241C]/15 rounded-sm space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#7A3E2D] font-mono uppercase tracking-wider text-[11px]">
              <Globe2 className="w-3.5 h-3.5 text-[#6D2638]" />
              <span>About the Contributor</span>
            </div>
            <h4 className="font-editorial text-lg text-[#3B241C] font-semibold">
              {article.author.name}
            </h4>
            <p className="text-[#3B241C]/85 leading-relaxed font-sans">
              {article.author.bio}
            </p>
          </div>

          {/* Article Navigation Footer */}
          <div className="max-w-2xl mx-auto pt-6 border-t border-[#3B241C]/15 flex items-center justify-between text-xs">
            {prevArticle ? (
              <button
                onClick={() => onSelectArticle(prevArticle)}
                className="flex items-center gap-1.5 text-[#7A3E2D] hover:text-[#6D2638] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono">Previous Piece</span>
                  <span className="font-editorial text-sm text-[#3B241C]">{prevArticle.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextArticle ? (
              <button
                onClick={() => onSelectArticle(nextArticle)}
                className="flex items-center gap-1.5 text-[#7A3E2D] hover:text-[#6D2638] transition-colors text-right"
              >
                <div>
                  <span className="block text-[10px] uppercase font-mono">Next Piece</span>
                  <span className="font-editorial text-sm text-[#3B241C]">{nextArticle.title}</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};
