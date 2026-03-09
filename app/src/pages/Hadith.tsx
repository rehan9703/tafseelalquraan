import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Bookmark, BookOpen, Scroll, ChevronLeft, ChevronRight, Book } from 'lucide-react';
import { useBookmarkStore } from '@/store/bookmarkStore';
import { cn } from '@/lib/utils';
import { hadithService } from '@/services/hadithService';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const COLLECTIONS = [
  { id: 'bukhari', name: 'Sahih al-Bukhari' },
  { id: 'muslim', name: 'Sahih Muslim' },
  { id: 'abudawud', name: 'Sunan Abu Dawud' },
  { id: 'tirmidhi', name: 'Jami at-Tirmidhi' },
  { id: 'nasai', name: 'Sunan an-Nasai' },
  { id: 'ibnmajah', name: 'Sunan Ibn Majah' }
];

interface HadithMetadata {
  id: string;
  collection: string;
  bookNumber: number;
  number: number;
  arabicText: string;
  translationEN: string;
  translationUR?: string;
  topic: string;
  grades: { name: string; grade: string }[];
}

export function Hadith() {
  const [activeCollection, setActiveCollection] = useState('bukhari');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hadiths, setHadiths] = useState<HadithMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [expandedHadith, setExpandedHadith] = useState<string | null>(null);
  const { addBookmark, removeBookmarkByContent, isBookmarked } = useBookmarkStore();

  useEffect(() => {
    const fetchHadiths = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await hadithService.getAllHadith(activeCollection, searchQuery, page, 30);
        if (res.success && res.data) {
          setHadiths(res.data.hadiths || []);
          setTotal(res.data.pagination?.total || 0);
          setTotalPages(res.data.pagination?.pages || 1);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    };

    // Debounce the call if searching, else call immediately
    const timeoutId = setTimeout(() => {
      fetchHadiths();
    }, searchQuery.length > 2 ? 500 : 0);

    return () => clearTimeout(timeoutId);
  }, [activeCollection, page, searchQuery]);

  const handleBookmark = (hadith: HadithMetadata) => {
    if (isBookmarked('HADITH', hadith.id)) {
      removeBookmarkByContent('HADITH', hadith.id);
    } else {
      addBookmark({
        contentType: 'HADITH',
        contentId: hadith.id,
        title: `Hadith #${hadith.number} - ${hadith.collection}`,
      });
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary flex items-center gap-3">
          Classical <span className="text-islamic-gold">Ahadith</span>
        </h1>
        <p className="text-islamic-text-muted mt-1 border-l-2 border-islamic-gold/30 pl-3">
          Explore the major offline collections — Arabic, English, & Urdu seamlessly merged.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
          <input
            type="text"
            placeholder="Search translations natively..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
          />
        </div>

        <select
          value={activeCollection}
          onChange={(e) => {
            setActiveCollection(e.target.value);
            setPage(1);
            setSearchQuery('');
          }}
          className="px-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary focus:outline-none focus:border-islamic-gold outline-none"
        >
          {COLLECTIONS.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </motion.div>

      {/* Hadith Count */}
      <motion.div variants={itemVariants} className="text-sm text-islamic-text-muted">
        {loading ? 'Consulting records...' : `Found ${total.toLocaleString()} total hadiths`}
      </motion.div>

      {/* Loading Skeleton */}
      {loading && hadiths.length === 0 && (
        <div className="text-center py-20 text-islamic-text-muted">
          Loading...
        </div>
      )}

      {/* Hadith List */}
      {!loading && hadiths.length > 0 && (
        <div className="space-y-4">
          {hadiths.map((hadith, index) => (
            <motion.div
              key={hadith.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="islamic-card overflow-hidden"
            >
              {/* Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedHadith(expandedHadith === hadith.id ? null : hadith.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-islamic-gold/20 to-islamic-bg-card border border-islamic-gold/20 flex flex-col items-center justify-center flex-shrink-0 font-mono">
                      <span className="text-[0.55rem] text-islamic-gold/80 font-bold uppercase tracking-widest mb-0.5">No.</span>
                      <span className="text-sm font-bold text-islamic-gold">{hadith.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded bg-islamic-bg-secondary text-xs text-islamic-text-muted uppercase tracking-wider font-bold shadow-sm border border-islamic-border">
                          Book {hadith.bookNumber}
                        </span>
                        <span className="text-xs text-islamic-text-muted flex items-center gap-1.5"><Book className="w-3 h-3 text-islamic-gold/70" /> {hadith.topic || 'General Topic'}</span>
                        <span className="text-xs text-islamic-gold/60 uppercase tracking-widest font-bold">• {hadith.collection}</span>
                      </div>
                      <p className="text-islamic-text-primary leading-relaxed">
                        "{hadith.translationEN}"
                      </p>
                      {/* Urdu */}
                      {hadith.translationUR && (
                        <p className="text-lg text-islamic-text-secondary mt-3 text-right font-urdu leading-relaxed" dir="rtl">
                          {hadith.translationUR}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(hadith);
                      }}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        isBookmarked('HADITH', hadith.id)
                          ? "text-islamic-gold bg-islamic-gold/10"
                          : "text-islamic-text-muted hover:text-islamic-gold hover:bg-islamic-bg-hover"
                      )}
                    >
                      <Bookmark className={cn("w-5 h-5", isBookmarked('HADITH', hadith.id) && "fill-current")} />
                    </button>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-islamic-text-muted transition-transform",
                        expandedHadith === hadith.id && "rotate-180"
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedHadith === hadith.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-islamic-border"
                  >
                    <div className="p-6 space-y-4">
                      {/* Arabic */}
                      {hadith.arabicText && (
                        <div className="p-4 bg-islamic-bg-secondary rounded-xl">
                          <p className="font-arabic text-islamic-gold text-right text-xl leading-loose">
                            {hadith.arabicText}
                          </p>
                        </div>
                      )}

                      {/* Grades */}
                      <div className="p-4 bg-islamic-gold/5 rounded-xl border border-islamic-gold/20">
                        <h4 className="text-sm font-medium text-islamic-gold mb-3 flex items-center gap-2 uppercase tracking-widest text-[0.65rem] font-bold">
                          Authenticity Grades
                        </h4>
                        {hadith.grades && hadith.grades.length > 0 ? (
                          <ul className="space-y-2">
                            {hadith.grades.map((g, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-islamic-text-secondary">
                                <div className="h-1.5 w-1.5 rounded-full bg-islamic-gold mt-1.5 flex-shrink-0" />
                                <span><strong className="text-islamic-gold/80 uppercase tracking-wider">{g.name}:</strong> <span className="text-islamic-text-primary ml-1">{g.grade}</span></span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-islamic-text-muted">No grading information available.</p>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-islamic-bg-hover transition-colors shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-bold text-islamic-gold tracking-widest uppercase">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-islamic-bg-hover transition-colors shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && hadiths.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <Scroll className="w-16 h-16 text-islamic-text-muted mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Records Found
          </h3>
          <p className="text-islamic-text-muted">
            Try adjusting your search query
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
