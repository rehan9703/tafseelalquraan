import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scroll, Bookmark, Share2, Info, ChevronDown, Book } from 'lucide-react'

const HadithCard = ({ hadith, isBookmarked, onBookmark }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="manuscript-card p-6 mb-6"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-gold-900/60 to-navy-900/60 border border-gold-500/20 shadow-inner font-mono">
                        <span className="text-[0.55rem] text-gold-500/80 font-bold uppercase tracking-widest mb-0.5">No.</span>
                        <span className="text-sm font-bold text-gold-300">{hadith.number.toString()}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[0.65rem] font-bold tracking-[0.2em] text-gold-500 uppercase">
                            {hadith.collection || 'Classical Hadith'}
                        </span>
                        <span className="text-[0.7rem] text-text-muted flex items-center gap-1.5">
                            <Book className="w-3 h-3 text-gold-500/50" />
                            <span className="truncate max-w-[150px] sm:max-w-xs" title={hadith.topic || 'General'}>
                                {hadith.topic || 'General'}
                            </span>
                        </span>
                    </div>
                </div>
                <button
                    onClick={onBookmark}
                    className={`p-2 rounded-xl transition-all ${isBookmarked ? 'text-gold-500 bg-gold-900/20' : 'text-text-muted hover:text-gold-300 hover:bg-navy-700'}`}
                >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
            </div>

            {hadith.arabicText && (
                <div className="text-right mb-6">
                    <p className="font-arabic text-xl lg:text-3xl text-text-arabic leading-relaxed pb-4">
                        {hadith.arabicText}
                    </p>
                </div>
            )}

            {hadith.translationEN && (
                <p className="text-sm lg:text-md text-text-primary leading-relaxed border-l-2 border-gold-500/30 pl-4 mb-6">
                    {hadith.translationEN}
                </p>
            )}

            {hadith.translationUR && (
                <div className="text-right mt-4 pt-4 border-t border-border-subtle/50">
                    <p className="font-urdu text-lg lg:text-2xl text-text-secondary leading-relaxed">
                        {hadith.translationUR}
                    </p>
                </div>
            )}

            <div className="flex items-center gap-4 text-[0.65rem] text-text-muted italic mb-6 mt-4">
                <span>— Book {hadith.bookNumber}</span>
                <span className="h-1 w-1 rounded-full bg-border-subtle" />
                <span>Hadith {hadith.number}</span>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-6"
                    >
                        <div className="space-y-4 rounded-xl bg-navy-900/40 p-5 border-border-subtle border">
                            {hadith.grades && hadith.grades.length > 0 ? (
                                <div>
                                    <h5 className="text-[0.6rem] font-bold tracking-widest text-gold-300 uppercase mb-2">Authenticity Grades</h5>
                                    <ul className="space-y-2">
                                        {hadith.grades.map((g, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                                                <div className="h-1.5 w-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                                                <span><strong className="text-gold-300 uppercase text-[0.65rem] tracking-wider">{g.name}:</strong> <span className="text-text-primary ml-1">{g.grade}</span></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div>
                                    <h5 className="text-[0.6rem] font-bold tracking-widest text-gold-300 uppercase mb-2">Authenticity</h5>
                                    <p className="text-xs text-text-muted leading-relaxed">No grading information available for this specific report.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center justify-between">
                <div className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-navy-900/50 text-[0.65rem] font-bold text-text-secondary uppercase tracking-widest border border-border-subtle shadow-sm">
                    Book {hadith.bookNumber}
                </div>
                <div className="flex items-center gap-3">
                    <button className="p-2 text-text-muted hover:text-gold-300 transition-colors">
                        <Share2 className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${expanded ? 'bg-gold-500 text-navy-900 border-gold-500' : 'border-border-subtle text-text-muted hover:border-gold-500/30 hover:text-text-secondary'}`}
                    >
                        <span>{expanded ? 'Hide Details' : 'View Details'}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default HadithCard
