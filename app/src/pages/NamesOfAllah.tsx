import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Heart } from 'lucide-react';
import { namesOfAllah } from '@/data/namesComplete';
import { cn } from '@/lib/utils';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function NamesOfAllah() {
  const [searchQuery, setSearchQuery] = useState('');

  const [memorizationMode, setMemorizationMode] = useState(false);
  const [learnedNames, setLearnedNames] = useState<Set<number>>(new Set());



  const filteredNames = useMemo(() => {
    return namesOfAllah.filter((name) => {
      const matchesSearch =
        name.nameArabic.includes(searchQuery) ||
        name.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.meaningEN.toLowerCase().includes(searchQuery.toLowerCase()) ||
        name.meaningHinglish.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [searchQuery]);

  const toggleLearned = (nameNumber: number) => {
    setLearnedNames(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nameNumber)) {
        newSet.delete(nameNumber);
      } else {
        newSet.add(nameNumber);
      }
      return newSet;
    });
  };

  const progressPercent = (learnedNames.size / namesOfAllah.length) * 100;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary mb-2">
          The 99 Names of Allah
        </h1>
        <p className="text-islamic-text-muted max-w-2xl mx-auto">
          "Allah has ninety-nine names, and whoever memorizes them will enter Paradise."
          <span className="block text-islamic-gold mt-1">— Sahih Bukhari</span>
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div variants={itemVariants} className="islamic-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-islamic-gold/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-islamic-gold" />
            </div>
            <div>
              <p className="text-sm text-islamic-text-muted">Memorization Progress</p>
              <p className="text-2xl font-bold text-islamic-text-primary">
                {learnedNames.size} <span className="text-islamic-text-muted text-lg">/ {namesOfAllah.length}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setMemorizationMode(!memorizationMode)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all",
              memorizationMode
                ? "bg-islamic-gold text-islamic-bg-primary"
                : "bg-islamic-bg-card border border-islamic-border text-islamic-text-secondary"
            )}
          >
            {memorizationMode ? 'Exit Memorization' : 'Memorization Mode'}
          </button>
        </div>

        <div className="h-2 bg-islamic-border rounded-full overflow-hidden">
          <div
            className="h-full bg-islamic-gold rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
          <input
            type="text"
            placeholder="Search by name, meaning, or transliteration..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
          />
        </div>

      </motion.div>

      {/* Names Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredNames.map((name) => {
          const isLearned = learnedNames.has(name.number);

          return (
            <motion.div
              key={name.number}
              variants={itemVariants}
              className={cn(
                "group islamic-card p-5 relative overflow-hidden",
                memorizationMode && "cursor-pointer",
                isLearned && "border-islamic-emerald"
              )}
              onClick={() => memorizationMode && toggleLearned(name.number)}
            >
              {/* Number */}
              <div className="absolute top-3 right-3 text-xs text-islamic-text-muted">
                #{name.number}
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Arabic Name */}
                <p className="text-3xl font-arabic text-islamic-gold mb-2 group-hover:scale-105 transition-transform">
                  {name.nameArabic}
                </p>

                {/* Transliteration */}
                <p className="text-sm text-islamic-text-secondary mb-1">
                  {name.transliteration}
                </p>

                {/* Meaning */}
                <p className="text-lg font-medium text-islamic-text-primary mb-1">
                  {name.meaningEN}
                </p>

                {/* Hinglish meaning */}
                <p className="text-xs text-islamic-text-muted mb-3">
                  {name.meaningHinglish}
                </p>


              </div>

              {/* Hover Reveal */}
              {!memorizationMode && (
                <div className="absolute inset-0 bg-islamic-bg-card/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                  <p className="text-sm text-islamic-text-secondary text-center mb-3">
                    {name.explanationEN}
                  </p>
                  {name.quranicReference && (
                    <p className="text-xs text-islamic-gold">
                      {name.quranicReference}
                    </p>
                  )}
                </div>
              )}

              {/* Learned Indicator */}
              {memorizationMode && isLearned && (
                <div className="absolute inset-0 bg-islamic-emerald/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-islamic-emerald flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {filteredNames.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <Sparkles className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Names Found
          </h3>
          <p className="text-islamic-text-muted">
            Try adjusting your search or filters
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
