import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search as SearchIcon, BookOpen, Scroll, Heart, Users, History, Sparkles } from 'lucide-react';
// @ts-ignore
import { surahs } from '@/data/quran';
import { nawawiHadiths } from '@/data/hadith';
import { duas } from '@/data/duas';
import { prophets } from '@/data/prophets';
import { islamicEvents } from '@/data/events';
import { namesOfAllah } from '@/data/names';
import { quranService } from '@/services/quranService';
import { cn } from '@/lib/utils';

interface SearchResult {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  content: string;
  link: string;
}

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    const searchResults: SearchResult[] = [];
    const q = searchQuery.toLowerCase();

    // Search Surahs
    surahs.forEach(surah => {
      if (surah.nameEnglish.toLowerCase().includes(q) ||
        surah.nameArabic.includes(q) ||
        surah.summary?.toLowerCase().includes(q)) {
        searchResults.push({
          id: `surah-${surah.number}`,
          type: 'Quran',
          title: surah.nameEnglish,
          subtitle: surah.nameArabic,
          content: surah.summary || '',
          link: `/quran/${surah.number}`,
        });
      }
    });

    // Search Hadith
    nawawiHadiths.forEach(hadith => {
      if (hadith.translationEN.toLowerCase().includes(q) ||
        hadith.topic.toLowerCase().includes(q)) {
        searchResults.push({
          id: hadith.id,
          type: 'Hadith',
          title: `Hadith #${hadith.number}`,
          subtitle: hadith.topic,
          content: hadith.translationEN.substring(0, 100) + '...',
          link: '/hadith',
        });
      }
    });

    // Search Duas
    duas.forEach(dua => {
      if (dua.titleEN.toLowerCase().includes(q) ||
        dua.translationEN.toLowerCase().includes(q) ||
        dua.situation.toLowerCase().includes(q)) {
        searchResults.push({
          id: dua.id,
          type: 'Dua',
          title: dua.titleEN,
          subtitle: dua.situation,
          content: dua.translationEN.substring(0, 100) + '...',
          link: '/duas',
        });
      }
    });

    // Search Prophets
    prophets.forEach(prophet => {
      if (prophet.nameEnglish.toLowerCase().includes(q) ||
        prophet.nameArabic.includes(q) ||
        prophet.story.toLowerCase().includes(q)) {
        searchResults.push({
          id: prophet.id,
          type: 'Prophet',
          title: prophet.nameEnglish,
          subtitle: prophet.nameArabic,
          content: prophet.story.substring(0, 100) + '...',
          link: `/prophets/${prophet.id}`,
        });
      }
    });

    // Search Events
    islamicEvents.forEach(event => {
      if (event.title.toLowerCase().includes(q) ||
        event.description.toLowerCase().includes(q)) {
        searchResults.push({
          id: event.id,
          type: 'History',
          title: event.title,
          subtitle: event.year,
          content: event.description.substring(0, 100) + '...',
          link: '/history',
        });
      }
    });

    // Search Names of Allah
    namesOfAllah.forEach(name => {
      if (name.nameArabic.includes(q) ||
        name.transliteration.toLowerCase().includes(q) ||
        name.meaningEN.toLowerCase().includes(q)) {
        searchResults.push({
          id: name.id,
          type: 'Names of Allah',
          title: name.nameArabic,
          subtitle: name.transliteration,
          content: name.meaningEN,
          link: '/asmaul-husna',
        });
      }
    });

    // Save to recent searches
    if (searchQuery && !recentSearches.includes(searchQuery)) {
      const newRecent = [searchQuery, ...recentSearches.slice(0, 9)];
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    }

    // Call API for remote Quran Search
    try {
      const remoteSearch = await quranService.searchQuran(q);
      if (remoteSearch.success && remoteSearch.data) {
        remoteSearch.data.forEach(ayah => {
          // Avoid duplicating local Surah searches if matched by text
          const exists = searchResults.some(r => r.id === `ayah-${ayah.id}`);
          if (!exists) {
            searchResults.push({
              id: `ayah-${ayah.id}`,
              type: 'Quran Verse',
              title: `Surah ${ayah.surahId}, Verse ${ayah.ayahNumber}`,
              subtitle: ayah.arabicText || undefined,
              content: ayah.translationEN || '',
              link: `/quran/${ayah.surahId}`,
            });
          }
        });
        setResults([...searchResults]);
      }
    } catch (e) {
      console.error("Remote search failed", e);
    }

  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
      await performSearch(query);
    }
  };

  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const filteredResults = activeFilter === 'ALL'
    ? results
    : results.filter(r => r.type === activeFilter);

  const resultTypes = ['ALL', ...new Set(results.map(r => r.type))];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Quran': return BookOpen;
      case 'Hadith': return Scroll;
      case 'Dua': return Heart;
      case 'Prophet': return Users;
      case 'History': return History;
      case 'Names of Allah': return Sparkles;
      default: return SearchIcon;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          Search
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Search across the entire platform
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
        <input
          type="text"
          placeholder="Search Quran, Hadith, Du'as, Prophets..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
        />
      </form>

      {/* Recent Searches */}
      {!query && recentSearches.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-islamic-text-muted">Recent Searches</h3>
            <button
              onClick={clearRecent}
              className="text-sm text-islamic-crimson hover:underline"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(search);
                  performSearch(search);
                }}
                className="px-3 py-1.5 rounded-lg bg-islamic-bg-card border border-islamic-border text-sm text-islamic-text-secondary hover:text-islamic-text-primary transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {query && (
        <>
          {/* Filter Tabs */}
          {resultTypes.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {resultTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-sm transition-all',
                    activeFilter === type
                      ? 'bg-islamic-gold text-islamic-bg-primary'
                      : 'bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary'
                  )}
                >
                  {type === 'ALL' ? 'All Results' : type}
                  {type !== 'ALL' && (
                    <span className="ml-1 text-xs opacity-70">
                      ({results.filter(r => r.type === type).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Results List */}
          <div className="space-y-3">
            {filteredResults.map((result) => {
              const Icon = getIcon(result.type);

              return (
                <a
                  key={result.id}
                  href={result.link}
                  className="islamic-card p-4 flex items-start gap-4 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-islamic-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-islamic-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-islamic-gold">{result.type}</span>
                    </div>
                    <h3 className="font-semibold text-islamic-text-primary">{result.title}</h3>
                    {result.subtitle && (
                      <p className="text-sm text-islamic-text-muted">{result.subtitle}</p>
                    )}
                    <p className="text-sm text-islamic-text-secondary mt-1 line-clamp-2">
                      {result.content}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
                No Results Found
              </h3>
              <p className="text-islamic-text-muted">
                Try a different search term
              </p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}
