import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Star, Filter } from 'lucide-react';
import { quranService, type Surah } from '@/services/quranService';
import { surahs as localSurahData } from '@/data/quranComplete';
import { useProgressStore } from '@/store/progressStore';
import { cn } from '@/lib/utils';

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

export function QuranExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [revelationFilter, setRevelationFilter] = useState<'ALL' | 'MAKKI' | 'MADANI'>('ALL');
  const [juzFilter, setJuzFilter] = useState<number | null>(null);
  const [surahs, setSurahs] = useState<Surah[]>(localSurahData as unknown as Surah[]);
  const { getSurahProgress, getCompletedSurahs } = useProgressStore();

  const completedSurahs = getCompletedSurahs();

  // Try to refresh from API in background (local data always shown first)
  useEffect(() => {
    quranService.getAllSurahs().then(response => {
      if (response.success && response.data?.surahs?.length) {
        setSurahs(response.data.surahs);
      }
    }).catch(() => { /* keep local data */ });
  }, []);

  const filteredSurahs = useMemo(() => {
    return surahs.filter((surah) => {
      const matchesSearch =
        surah.nameEnglish?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        surah.nameArabic?.includes(searchQuery) ||
        surah.nameTransliteration?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        surah.number?.toString().includes(searchQuery);

      const matchesRevelation = revelationFilter === 'ALL' || surah.revelationType === revelationFilter;

      const matchesJuz = juzFilter === null || (surah.juzStart <= juzFilter && surah.juzEnd >= juzFilter);

      return matchesSearch && matchesRevelation && matchesJuz;
    });
  }, [searchQuery, revelationFilter, juzFilter, surahs]);

  const juzList = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
            Quran Explorer
          </h1>
          <p className="text-islamic-text-muted mt-1">
            Read, listen, and explore all 114 Surahs of the Holy Quran
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-islamic-gold">{completedSurahs.length}</p>
            <p className="text-sm text-islamic-text-muted">Surahs Completed</p>
          </div>
          <div className="w-16 h-16 relative">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#1E2D4D"
                strokeWidth="4"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(completedSurahs.length / 114) * 176} 176`}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div variants={itemVariants} className="bg-islamic-bg-card rounded-2xl p-4 border border-islamic-border">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
            <input
              type="text"
              placeholder="Search by name, Arabic, or number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-islamic-bg-primary border border-islamic-border rounded-xl py-3 pl-10 pr-4 text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold transition-colors"
            />
          </div>

          {/* Revelation Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-islamic-text-muted" />
            <select
              value={revelationFilter}
              onChange={(e) => setRevelationFilter(e.target.value as any)}
              className="bg-islamic-bg-primary border border-islamic-border rounded-xl py-3 px-4 text-islamic-text-primary focus:outline-none focus:border-islamic-gold transition-colors"
            >
              <option value="ALL">All</option>
              <option value="MAKKI">Makki</option>
              <option value="MADANI">Madani</option>
            </select>
          </div>

          {/* Juz Filter */}
          <select
            value={juzFilter || ''}
            onChange={(e) => setJuzFilter(e.target.value ? parseInt(e.target.value) : null)}
            className="bg-islamic-bg-primary border border-islamic-border rounded-xl py-3 px-4 text-islamic-text-primary focus:outline-none focus:border-islamic-gold transition-colors"
          >
            <option value="">All Juz</option>
            {juzList.map((juz) => (
              <option key={juz} value={juz}>Juz {juz}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Surahs Grid */}
      {(
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSurahs.map((surah) => {
            const surahProgress = getSurahProgress(surah.number);
            const progress = surahProgress ? Math.round((surahProgress.lastAyahRead / surah.ayahCount) * 100) : 0;
            const isCompleted = completedSurahs.includes(surah.number);

            return (
              <motion.div key={surah.number} variants={itemVariants}>
                <Link
                  to={`/quran/${surah.number}`}
                  className={cn(
                    "block bg-islamic-bg-card rounded-2xl p-5 border border-islamic-border",
                    "hover:border-islamic-gold hover:-translate-y-1 transition-all duration-300",
                    "group"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold",
                        isCompleted
                          ? "bg-islamic-emerald/20 text-islamic-emerald"
                          : "bg-islamic-gold/10 text-islamic-gold"
                      )}>
                        {surah.number}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-heading font-semibold text-islamic-text-primary group-hover:text-islamic-gold transition-colors">
                          {surah.nameEnglish}
                        </h3>
                        <p className="text-sm text-islamic-text-muted">
                          {surah.nameTransliteration}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-amiri text-islamic-gold whitespace-nowrap" dir="rtl">
                        {surah.nameArabic}
                      </p>
                      <p className="text-xs text-islamic-text-muted mt-1">
                        {surah.ayahCount} verses
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between pt-4 border-t border-islamic-border">
                      <div className="flex items-center gap-2">
                        {surah.revelationType === 'MAKKI' ? (
                          <span className="flex items-center gap-1 text-xs text-islamic-text-muted">
                            <Star className="w-3 h-3" /> Makki
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-islamic-text-muted">
                            <BookOpen className="w-3 h-3" /> Madani
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-islamic-text-muted">
                          Juz {surah.juzStart}{surah.juzEnd !== surah.juzStart ? `-${surah.juzEnd}` : ''}
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    {progress > 0 && !isCompleted && (
                      <div className="h-1.5 bg-islamic-bg-primary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-islamic-gold rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Empty State */}
      {filteredSurahs.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-islamic-text-muted mx-auto mb-4" />
          <p className="text-islamic-text-muted">No Surahs found matching your search</p>
        </div>
      )}

    </motion.div>
  );
}
