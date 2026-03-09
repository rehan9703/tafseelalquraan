import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Bookmark, Share2, Info, ChevronDown } from 'lucide-react'

const AyahCard = ({ ayah, onPlay, isPlaying, isBookmarked, onBookmark }) => {
    const [showTafseer, setShowTafseer] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="manuscript-card group relative p-8 mb-6"
        >
            {/* Islamic Star Watermark */}
            <div className="absolute top-2 right-2 opacity-[0.03] pointer-events-none transition-opacity group-hover:opacity-[0.08]">
                <svg width="120" height="120" viewBox="0 0 80 80">
                    <path d="M40 0 L51.7 28.3 L80 40 L51.7 51.7 L40 80 L28.3 51.7 L0 40 L28.3 28.3 Z" fill="var(--gold-500)" />
                </svg>
            </div>

            <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gold-500/30 font-mono text-xs font-bold text-gold-300">
                        {ayah.ayahNumber}
                    </div>
                    <span className="text-[0.6rem] font-bold tracking-widest text-text-muted uppercase">
                        {ayah.surahNumber}:{ayah.ayahNumber}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    {ayah.juzNumber && (
                        <span className="rounded-lg bg-navy-700 px-3 py-1 text-[0.6rem] font-bold text-text-secondary uppercase">
                            Juz {ayah.juzNumber}
                        </span>
                    )}
                </div>
            </div>

            <div className="text-right mb-10">
                <motion.p
                    className="font-arabic text-3xl md:text-5xl text-text-arabic leading-[2.2] animate-breathe"
                >
                    {ayah.arabicText}
                </motion.p>
            </div>

            <div className="space-y-4 mb-8">
                <p className="text-sm italic text-text-secondary opacity-70">
                    {ayah.transliteration}
                </p>
                <div className="space-y-4">
                    <p className="text-lg text-text-primary leading-relaxed border-l-2 border-gold-500/20 pl-6">
                        {ayah.translationEN}
                    </p>
                    {ayah.translationUR && (
                        <p className="font-arabic text-2xl text-right text-text-primary leading-relaxed border-r-2 border-gold-500/20 pr-6 mt-4 opacity-90">
                            {ayah.translationUR}
                        </p>
                    )}
                </div>
            </div>

            {/* Tafseer Expansion */}
            <AnimatePresence>
                {showTafseer && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-8"
                    >
                        <div className="rounded-xl bg-navy-900/50 p-6 border-l-2 border-gold-500">
                            <h4 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-500 uppercase mb-3">Tafseer</h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {ayah.tafseerEN || 'Tafseer content loading... This feature will provide deep classical context from Ibn Kathir and Jalalayn.'}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6">
                <div className="flex items-center gap-2">
                    <button
                        onClick={onPlay}
                        className={`flex items-center justify-center h-10 w-10 rounded-full border transition-all ${isPlaying ? 'bg-gold-500 text-navy-900 border-gold-500' : 'border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-navy-900'}`}
                    >
                        {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                    </button>
                    <button
                        onClick={() => setShowTafseer(!showTafseer)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${showTafseer ? 'bg-gold-900/40 text-gold-300' : 'text-text-muted hover:text-gold-300 hover:bg-navy-700'}`}
                    >
                        <Info className="h-4 w-4" />
                        <span>{showTafseer ? 'Hide Tafseer' : 'Show Tafseer'}</span>
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onBookmark}
                        className={`p-2 rounded-xl transition-all ${isBookmarked ? 'text-gold-500 bg-gold-900/20' : 'text-text-muted hover:text-gold-300 hover:bg-navy-700'}`}
                    >
                        <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 text-text-muted hover:text-gold-300 hover:bg-navy-700 rounded-xl transition-all">
                        <Share2 className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default AyahCard
