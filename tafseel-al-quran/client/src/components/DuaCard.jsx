import React from 'react'
import { motion } from 'framer-motion'
import { Bookmark, Share2, Info } from 'lucide-react'

const DuaCard = ({ dua, isBookmarked, onBookmark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="manuscript-card p-6 mb-4"
        >
            <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-lg text-[0.6rem] font-bold tracking-widest uppercase bg-navy-700 text-gold-300 border border-gold-500/20`}>
                    {dua.situation}
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onBookmark}
                        className={`p-2 rounded-xl transition-all ${isBookmarked ? 'text-gold-500 bg-gold-900/20' : 'text-text-muted hover:text-gold-300 hover:bg-navy-700'}`}
                    >
                        <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                </div>
            </div>

            <div className="text-right mb-6">
                <p className="font-arabic text-xl lg:text-3xl text-text-arabic leading-[2]">
                    {dua.arabicText}
                </p>
            </div>

            <div className="space-y-3 mb-6">
                <p className="text-xs italic text-text-secondary opacity-60">
                    {dua.transliteration}
                </p>
                <p className="text-sm text-text-primary leading-relaxed border-l border-gold-500/10 pl-4">
                    {dua.translationEN}
                </p>
            </div>

            <div className="flex items-center justify-between border-t border-border-subtle pt-4">
                <div className="flex items-center gap-2">
                    <span className="text-[0.6rem] text-text-muted font-bold tracking-tighter">— {dua.source}</span>
                </div>
                <button className="p-2 text-text-muted hover:text-gold-300 transition-colors">
                    <Share2 className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    )
}

export default DuaCard
