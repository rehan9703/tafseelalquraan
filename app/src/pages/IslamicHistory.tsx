import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, Star, BookOpen, Sword, Handshake, Shield, Moon } from 'lucide-react';
import { islamicEvents, getAllEras } from '@/data/events';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, React.ElementType> = {
  star: Star,
  book: BookOpen,
  sword: Sword,
  kaaba: Star,
  moon: Moon,
  journey: Calendar,
  handshake: Handshake,
  dome: Shield,
  shield: Shield,
  pilgrim: Calendar,
  document: BookOpen,
  megaphone: BookOpen,
};
// @ts-ignore - Icon is used dynamically

const categoryColors: Record<string, string> = {
  Prophethood: 'from-amber-500/20 to-amber-600/10',
  Revelation: 'from-blue-500/20 to-blue-600/10',
  Migration: 'from-emerald-500/20 to-emerald-600/10',
  Battle: 'from-red-500/20 to-red-600/10',
  Conquest: 'from-purple-500/20 to-purple-600/10',
  Pilgrimage: 'from-cyan-500/20 to-cyan-600/10',
  Demise: 'from-gray-500/20 to-gray-600/10',
  Preservation: 'from-orange-500/20 to-orange-600/10',
  Civilization: 'from-pink-500/20 to-pink-600/10',
  Dawah: 'from-teal-500/20 to-teal-600/10',
  Miracle: 'from-violet-500/20 to-violet-600/10',
  Governance: 'from-indigo-500/20 to-indigo-600/10',
  Treaty: 'from-lime-500/20 to-lime-600/10',
  // New categories from expanded events.ts
  'Social Justice': 'from-rose-500/20 to-rose-600/10',
  Scholarship: 'from-sky-500/20 to-sky-600/10',
  'Prophetic Life': 'from-amber-500/20 to-yellow-600/10',
  Caliphate: 'from-indigo-500/20 to-violet-600/10',
  Political: 'from-slate-500/20 to-slate-600/10',
};

export function IslamicHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [eraFilter, setEraFilter] = useState<string>('ALL');


  const eras = getAllEras();


  const filteredEvents = useMemo(() => {
    return islamicEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.keyFigures.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesEra = eraFilter === 'ALL' || event.era === eraFilter;
      return matchesSearch && matchesEra;
    });
  }, [searchQuery, eraFilter]);

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
          Islamic History
        </h1>
        <p className="text-islamic-text-muted mt-1">
          Journey through the timeline of Islamic civilization
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
          <input
            type="text"
            placeholder="Search events, figures, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
          />
        </div>

        <select
          value={eraFilter}
          onChange={(e) => setEraFilter(e.target.value)}
          className="px-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary focus:outline-none focus:border-islamic-gold"
        >
          <option value="ALL">All Eras</option>
          {eras.map(era => (
            <option key={era} value={era}>{era}</option>
          ))}
        </select>


      </motion.div>

      {/* Timeline */}
      <motion.div variants={itemVariants} className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-islamic-border md:-translate-x-1/2" />

        <div className="space-y-8">
          {filteredEvents.map((event, index) => {
            // @ts-ignore - Icon used dynamically in JSX
            const Icon = iconMap[event.iconType] || Star;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className={cn(
                  "relative flex items-start gap-8",
                  "md:grid md:grid-cols-2"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-islamic-gold border-4 border-islamic-bg-primary md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={cn(
                  "ml-12 md:ml-0",
                  isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                )}>
                  <div className="islamic-card p-6 hover:-translate-y-1">
                    {/* Year Badge */}
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4",
                      "bg-gradient-to-r",
                      categoryColors[event.category] || 'from-islamic-gold/20 to-islamic-gold/10'
                    )}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{event.year}</span>
                      <span className="text-islamic-text-muted">•</span>
                      <span className="text-islamic-text-muted">{event.era}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-islamic-text-primary mb-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-islamic-text-secondary mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Key Figures */}
                    <div className="flex items-center gap-2 text-sm text-islamic-text-muted mb-3">
                      <Users className="w-4 h-4" />
                      <span>{event.keyFigures}</span>
                    </div>

                    {/* Significance */}
                    <div className="p-3 bg-islamic-bg-secondary rounded-lg">
                      <p className="text-sm text-islamic-gold">
                        <span className="font-medium">Significance: </span>
                        <span className="text-islamic-text-secondary">{event.significance}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {filteredEvents.length === 0 && (
        <motion.div variants={itemVariants} className="text-center py-12">
          <Calendar className="w-16 h-16 text-islamic-text-muted mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-islamic-text-primary mb-2">
            No Events Found
          </h3>
          <p className="text-islamic-text-muted">
            Try adjusting your search or filters
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
