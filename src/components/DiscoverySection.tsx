import React, { useState, useMemo } from 'react';
import { Search, Compass, BookOpen, Clock, Globe2, ArrowUpRight, Grid, List } from 'lucide-react';
import { articles } from '../data/mockContent';
import { Article, Category } from '../types';

interface DiscoverySectionProps {
  onSelectArticle: (article: Article) => void;
  selectedCategoryFilter?: Category | 'all';
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  onSelectArticle,
  selectedCategoryFilter = 'all',
}) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>(selectedCategoryFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');

  const categories = [
    { id: 'all', label: 'All articles' },
    { id: 'stories', label: 'Short Stories' },
    { id: 'poetry', label: 'Poetry' },
    { id: 'travel', label: 'Travel' },
    { id: 'culture', label: 'Cultural Essays' },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.author.name.toLowerCase().includes(q) ||
        art.author.origin.toLowerCase().includes(q) ||
        art.author.course.toLowerCase().includes(q) ||
        art.categoryLabel.toLowerCase().includes(q) ||
        art.caption?.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="discover" className="py-16 lg:py-24 border-b border-[#3B241C]/15 bg-paper-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header & Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#3B241C]/15">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#7A3E2D] font-medium flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#6D2638]" />
              <span>The Atlas</span>
              <span aria-hidden="true">·</span>
              <span>Writing & Perspectives</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#3B241C] tracking-tight">
              Latest Articles
            </h2>
            <p className="text-sm sm:text-base text-[#3B241C]/80 font-serif italic max-w-2xl">
              New writing and perspectives from across The Atlas.
            </p>
          </div>

          {/* Search Bar with clean understated styling */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7A3E2D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search stories by title, author, region, or topic"
              placeholder="Search title, author, place, or topic..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F5E9DE] border border-[#3B241C]/20 rounded-sm text-[#3B241C] placeholder:text-[#7A3E2D]/60 focus:outline-none focus:border-[#6D2638]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#7A3E2D] hover:text-[#3B241C]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar: Segmented controls (interactive buttons with clean visual states) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#D7C6AE]/40 rounded-sm border border-[#3B241C]/15">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category | 'all')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#3B241C] text-[#F5E9DE] shadow-xs'
                      : 'text-[#3B241C]/80 hover:text-[#3B241C] hover:bg-[#F5E9DE]/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* View toggle (Grid vs Index) */}
          <div className="flex items-center gap-1 text-xs text-[#7A3E2D]">
            <span className="hidden sm:inline font-mono tabular-nums mr-2">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </span>
            <div className="flex items-center border border-[#3B241C]/20 rounded-xs bg-[#F5E9DE] p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-xs transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#3B241C] text-[#F5E9DE]'
                    : 'text-[#7A3E2D] hover:text-[#3B241C]'
                }`}
                aria-label="Grid layout"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('index')}
                className={`p-1.5 rounded-xs transition-colors ${
                  viewMode === 'index'
                    ? 'bg-[#3B241C] text-[#F5E9DE]'
                    : 'text-[#7A3E2D] hover:text-[#3B241C]'
                }`}
                aria-label="Magazine index layout"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Render: Grid Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-[#F5E9DE] border border-[#3B241C]/15 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#6D2638]/50 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Article Card Imagery with hairline border and measured scrim */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#D7C6AE]/40 border-b border-[#3B241C]/10">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#F5E9DE]/95 backdrop-blur-xs px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#6D2638] border border-[#3B241C]/15 shadow-xs">
                      {article.categoryLabel}
                    </div>
                  </div>

                  {/* Card Editorial Text */}
                  <div className="p-6 space-y-3">
                    {/* Zero-Pill Metadata: Clean unboxed text with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-[#7A3E2D]">
                      <span className="font-medium text-[#7A3E2D]">{article.issue}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl font-medium text-[#3B241C] group-hover:text-[#6D2638] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-serif italic text-sm text-[#7A3E2D] leading-tight">
                      {article.subtitle}
                    </p>

                    <p className="text-xs text-[#3B241C]/80 line-clamp-3 leading-relaxed pt-1">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Byline & Action */}
                <div className="px-6 py-4 border-t border-[#3B241C]/10 bg-[#D7C6AE]/15 flex items-center justify-between text-xs text-[#7A3E2D]">
                  <div className="flex items-center gap-2 truncate">
                    <Globe2 className="w-3.5 h-3.5 text-[#6D2638] shrink-0" />
                    <span className="font-medium text-[#3B241C] truncate">{article.author.name}</span>
                    <span className="text-[#7A3E2D]/80 truncate">({article.author.origin})</span>
                  </div>

                  <span className="text-[#6D2638] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Content Render: Index View (Print Magazine Index Table) */}
        {viewMode === 'index' && (
          <div className="border border-[#3B241C]/20 rounded-sm bg-[#F5E9DE] divide-y divide-[#3B241C]/10">
            {filteredArticles.map((article, index) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="p-4 sm:p-6 hover:bg-[#D7C6AE]/20 cursor-pointer transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#7A3E2D] tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#7A3E2D] mb-1">
                      <span className="font-semibold text-[#6D2638] uppercase tracking-wider">
                        {article.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{article.author.origin}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-medium text-[#3B241C] group-hover:text-[#6D2638] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#7A3E2D] font-serif italic mt-0.5">
                      {article.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-[#7A3E2D] shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-[#3B241C]/10">
                  <div className="text-right">
                    <span className="font-medium text-[#3B241C] block">{article.author.name}</span>
                    <span className="text-[11px] text-[#7A3E2D] block">{article.author.course}</span>
                  </div>
                  <span className="text-[#6D2638] p-1.5 rounded-full bg-[#6D2638]/5 group-hover:bg-[#6D2638]/15 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredArticles.length === 0 && (
          <div className="p-12 text-center space-y-3 bg-[#F5E9DE] border border-[#3B241C]/15 rounded-sm">
            <BookOpen className="w-8 h-8 text-[#7A3E2D] mx-auto opacity-60" />
            <h4 className="font-editorial text-2xl text-[#3B241C]">No articles match your query</h4>
            <p className="text-sm text-[#7A3E2D] max-w-sm mx-auto font-serif italic">
              Try searching by country, theme, or resetting the genre filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#3B241C] text-[#F5E9DE] rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
