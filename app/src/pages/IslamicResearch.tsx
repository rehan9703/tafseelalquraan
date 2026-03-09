import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, AlertTriangle, Scale } from 'lucide-react';
// @ts-ignore
import { cn } from '@/lib/utils';
import { researchTopics, type ResearchTopic } from '../data/islamicResearchData';

export function IslamicResearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(null);

  const filteredTopics = researchTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-islamic-text-primary">
          Islamic Research
        </h1>
        <p className="text-islamic-text-muted mt-1">
          In-depth articles on Islamic topics with Quranic and Hadith evidence
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-islamic-text-muted" />
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-islamic-bg-card border border-islamic-border text-islamic-text-primary placeholder:text-islamic-text-muted focus:outline-none focus:border-islamic-gold/50 transition-all"
        />
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((topic) => (
          <motion.button
            key={topic.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedTopic(topic)}
            className="islamic-card p-6 text-left hover:-translate-y-1"
          >
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br",
              topic.color
            )}>
              <topic.icon className="w-7 h-7 text-islamic-text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-islamic-text-primary mb-2">
              {topic.title}
            </h3>
            <p className="text-sm text-islamic-text-secondary">
              {topic.description}
            </p>
            <div className="flex items-center gap-1 mt-4 text-islamic-gold text-sm">
              <span>Read More</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Topic Modal */}
      <AnimatePresence>
        {selectedTopic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTopic(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="islamic-card max-w-2xl w-full max-h-[85vh] flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={cn(
                "p-6 bg-gradient-to-br shrink-0",
                selectedTopic.color
              )}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-islamic-bg-primary/20 flex items-center justify-center">
                      <selectedTopic.icon className="w-6 h-6 text-islamic-text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold text-islamic-text-primary">
                        {selectedTopic.title}
                      </h2>
                      <p className="text-sm text-islamic-text-secondary">
                        {selectedTopic.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="p-2 rounded-lg hover:bg-islamic-bg-primary/20 text-islamic-text-primary"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
                {/* Overview */}
                <div>
                  <h3 className="font-semibold text-islamic-text-primary mb-2">Overview</h3>
                  <p className="text-islamic-text-secondary">{selectedTopic.content.overview}</p>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="font-semibold text-islamic-text-primary mb-2">Key Points</h3>
                  <ul className="space-y-2">
                    {selectedTopic.content.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-islamic-gold mt-2 flex-shrink-0" />
                        <span className="text-islamic-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consequences */}
                {selectedTopic.content.consequences && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <h3 className="font-semibold text-red-500 flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      Severe Consequences
                    </h3>
                    <p className="text-islamic-text-secondary text-sm leading-relaxed">
                      {selectedTopic.content.consequences}
                    </p>
                  </div>
                )}

                {/* Reasons to Avoid */}
                {selectedTopic.content.reasonsToAvoid && (
                  <div>
                    <h3 className="font-semibold text-islamic-text-primary mb-2">Context & Why It is Forbidden</h3>
                    <p className="text-islamic-text-secondary text-sm leading-relaxed">
                      {selectedTopic.content.reasonsToAvoid}
                    </p>
                  </div>
                )}

                {/* How to Fix / Repent */}
                {selectedTopic.content.howToFix && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <h3 className="font-semibold text-emerald-500 flex items-center gap-2 mb-2">
                      <Scale className="w-4 h-4" />
                      Path to Repentance (Tawbah)
                    </h3>
                    <p className="text-islamic-text-secondary text-sm leading-relaxed">
                      {selectedTopic.content.howToFix}
                    </p>
                  </div>
                )}

                {/* Evidence */}
                <div>
                  <h3 className="font-semibold text-islamic-text-primary mb-2">Evidence</h3>
                  <div className="space-y-4">
                    {selectedTopic.content.evidence.map((evidence, index) => (
                      <div key={index} className="p-4 bg-islamic-bg-secondary rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-xs font-medium",
                            evidence.type === 'quran'
                              ? "bg-islamic-gold/20 text-islamic-gold"
                              : "bg-islamic-emerald/20 text-islamic-emerald"
                          )}>
                            {evidence.type === 'quran' ? 'Quran' : 'Hadith'}
                          </span>
                        </div>
                        <p className="text-islamic-text-secondary italic mb-2">"{evidence.text}"</p>
                        <p className="text-sm text-islamic-text-muted">{evidence.reference}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
