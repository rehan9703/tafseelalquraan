import React from 'react'
import { motion } from 'framer-motion'
import { Play, Share2, Bookmark, ExternalLink } from 'lucide-react'

const DailyAyahWidget = ({ ayah }) => {
    if (!ayah) return null

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="manuscript-card group relative w-full overflow-hidden p-8 lg:p-12 mb-8"
        >
            {/* Background Bismillah Calligraphy (SVG) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full max-w-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bismillah_Calligraphy.svg/1024px-Bismillah_Calligraphy.svg.png" alt="Bismillah" className="invert brightness-200" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500" />
                    <span className="font-headings text-[0.7rem] tracking-[0.3em] text-gold-300 uppercase">Ayah of the Day</span>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500" />
                </div>

                <motion.p
                    className="font-arabic mb-8 text-3xl lg:text-5xl text-text-arabic leading-[1.8] animate-breathe"
                >
                    {ayah.arabicText}
                </motion.p>

                <p className="mb-2 text-sm italic text-text-secondary opacity-80 italic">
                    {ayah.transliteration}
                </p>

                <p className="max-w-3xl text-lg lg:text-xl font-medium text-text-primary leading-relaxed mb-6">
                    "{ayah.translationEN}"
                </p>

                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gold-500 uppercase">
                    <span>{ayah.surahName}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-700" />
                    <span>Ayah {ayah.ayahNumber}</span>
                </div>

                {/* Actions */}
                <div className="mt-10 flex items-center justify-center gap-4">
                    <button className="flex items-center justify-center h-12 w-12 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all shadow-gold-strong">
                        <Play className="h-5 w-5 fill-current" />
                    </button>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-gold-300 hover:border-gold-500/30 transition-all">
                        <Bookmark className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-gold-300 hover:border-gold-500/30 transition-all">
                        <Share2 className="h-4 w-4" />
                    </button>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full border border-border-subtle text-text-muted hover:text-gold-300 hover:border-gold-500/30 transition-all">
                        <ExternalLink className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default DailyAyahWidget
