import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Star, Users } from 'lucide-react';
import { prophets } from '@/data';
// @ts-ignore

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

export function Prophets() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProphets = useMemo(() => {
    return prophets.filter((prophet) =>
      prophet.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prophet.nameArabic.includes(searchQuery) ||
      prophet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
          Stories of the Prophets
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Learn about the 25 prophets mentioned in the Quran
        </p>
      </motion.div>

      {/* Search */}
      <motion.div variants={itemVariants} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
        <input
          type="text"
          placeholder="Search prophets by name or title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
        />
      </motion.div>

      {/* Prophets Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProphets.map((prophet) => (
          <Link
            key={prophet.id}
            to={`/prophets/${prophet.id}`}
            className="group islamic-card p-6 hover:-translate-y-1"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-islamic-gold/20 to-islamic-gold/5 flex items-center justify-center">
                <span className="text-2xl font-arabic text-islamic-gold">
                  {prophet.nameArabic.charAt(0)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-islamic-gold">
                <span className="text-sm font-medium">#{prophet.id}</span>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-heading font-semibold text-islamic-text-primary group-hover:text-islamic-gold transition-colors mb-1">
              {prophet.nameEnglish}
            </h3>
            <p className="text-2xl font-arabic text-islamic-gold mb-2">
              {prophet.nameArabic}
            </p>

            {/* Title */}
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-islamic-gold" />
              <span className="text-sm text-islamic-text-secondary">{prophet.title}</span>
            </div>

            {/* Nation & Era */}
            <div className="flex items-center justify-between text-sm text-islamic-text-muted">
              <span>{prophet.nation}</span>
              <span>{prophet.timePeriod}</span>
            </div>

            {/* Read More */}
            <div className="mt-4 pt-4 border-t border-islamic-border flex items-center justify-between">
              <span className="text-sm text-islamic-gold">Read Story</span>
              <ChevronRight className="w-5 h-5 text-islamic-gold transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </motion.div>

      {filteredProphets.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <Users className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Prophets Found
          </h3>
          <p className="text-islamic-text-muted">
            Try adjusting your search
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
