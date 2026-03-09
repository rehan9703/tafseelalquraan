import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bookmark, Heart, ChevronDown } from 'lucide-react';
import { duas, getAllSituations } from '@/data/duas';
import { useBookmarkStore } from '@/store/bookmarkStore';
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

const situationIcons: Record<string, string> = {
  'Morning': '🌅',
  'Evening': '🌙',
  'Sleep': '😴',
  'Travel': '✈️',
  'Entering Home': '🏠',
  'Eating': '🍽️',
  'After Eating': '🙏',
  'Studying': '📚',
  'Difficulty': '💪',
  'Repentance': '🤲',
  'Distress': '😰',
  'For Parents': '👨‍👩‍👧‍👦',
};

export function Duas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [situationFilter, setSituationFilter] = useState<string>('ALL');
  const [expandedDua, setExpandedDua] = useState<string | null>(null);

  const { addBookmark, removeBookmarkByContent, isBookmarked } = useBookmarkStore();

  const situations = getAllSituations();

  const filteredDuas = useMemo(() => {
    return duas.filter((dua) => {
      const matchesSearch =
        dua.titleEN.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.arabicText.includes(searchQuery) ||
        dua.translationEN.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSituation = situationFilter === 'ALL' || dua.situation === situationFilter;

      return matchesSearch && matchesSituation;
    });
  }, [searchQuery, situationFilter]);

  const handleBookmark = (dua: typeof duas[0]) => {
    if (isBookmarked('DUA', dua.id)) {
      removeBookmarkByContent('DUA', dua.id);
    } else {
      addBookmark({
        contentType: 'DUA',
        contentId: dua.id,
        title: dua.titleEN,
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
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          Du'as (Supplications)
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Authentic supplications from the Quran and Sunnah for every situation
        </p>
      </motion.div>

      {/* Situation Categories */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        <button
          onClick={() => setSituationFilter('ALL')}
          className={cn(
            'px-4 py-2 rounded-xl text-sm font-medium transition-all',
            situationFilter === 'ALL'
              ? 'bg-islamic-gold text-islamic-bg-primary'
              : 'bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary hover:text-islamic-text-primary'
          )}
        >
          All
        </button>
        {situations.map((situation) => (
          <button
            key={situation}
            onClick={() => setSituationFilter(situation)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all',
              situationFilter === situation
                ? 'bg-islamic-gold text-islamic-bg-primary'
                : 'bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary hover:text-islamic-text-primary'
            )}
          >
            {situationIcons[situation] || '✨'} {situation}
          </button>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div variants={itemVariants} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
        <input
          type="text"
          placeholder="Search du'as..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
        />
      </motion.div>

      {/* Duas List */}
      <motion.div variants={itemVariants} className="space-y-4">
        {filteredDuas.map((dua) => (
          <motion.div
            key={dua.id}
            variants={itemVariants}
            className="islamic-card overflow-hidden"
          >
            {/* Header */}
            <div
              className="p-6 cursor-pointer"
              onClick={() => setExpandedDua(expandedDua === dua.id ? null : dua.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-islamic-gold/10 flex items-center justify-center text-2xl">
                    {situationIcons[dua.situation] || '✨'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-islamic-text-primary">{dua.titleEN}</h3>
                    <p className="text-sm text-islamic-text-muted">{dua.situation} • {dua.source}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmark(dua);
                    }}
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      isBookmarked('DUA', dua.id)
                        ? "text-islamic-gold bg-islamic-gold/10"
                        : "text-islamic-text-muted hover:text-islamic-gold hover:bg-islamic-bg-hover"
                    )}
                  >
                    <Bookmark className={cn("w-5 h-5", isBookmarked('DUA', dua.id) && "fill-current")} />
                  </button>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-islamic-text-muted transition-transform",
                      expandedDua === dua.id && "rotate-180"
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedDua === dua.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-islamic-border"
                >
                  <div className="p-6 space-y-6">
                    {/* Arabic */}
                    <div className="text-center">
                      <p className="arabic-large text-2xl text-islamic-gold leading-loose">
                        {dua.arabicText}
                      </p>
                    </div>

                    {/* Transliteration */}
                    <div className="p-4 bg-islamic-bg-secondary rounded-xl">
                      <p className="text-sm text-islamic-text-muted mb-1">Transliteration</p>
                      <p className="text-islamic-text-secondary italic">{dua.transliteration}</p>
                    </div>

                    {/* Translation */}
                    <div>
                      <p className="text-sm text-islamic-text-muted mb-1">Translation</p>
                      <p className="text-islamic-text-primary">{dua.translationEN}</p>
                      {dua.translationUR && (
                        <p className="text-islamic-text-secondary mt-2 text-right" dir="rtl">{dua.translationUR}</p>
                      )}
                    </div>

                    {/* Virtues */}
                    {dua.virtues && (
                      <div className="p-4 bg-islamic-gold/5 rounded-xl border border-islamic-gold/20">
                        <p className="text-sm text-islamic-gold">
                          <span className="font-medium">Virtues: </span>
                          <span className="text-islamic-text-secondary">{dua.virtues}</span>
                        </p>
                      </div>
                    )}


                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {filteredDuas.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <Heart className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Du'as Found
          </h3>
          <p className="text-islamic-text-muted">
            Try adjusting your search or filters
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
