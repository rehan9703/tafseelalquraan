import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Book, BookOpen, Layers, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'
import { useQuran } from '../hooks/useQuran'

const QuranExplorer = () => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all') // all, makki, madani

    const { surahs, loading, error } = useQuran()

    const filteredSurahs = surahs.filter(s => {
        const matchesSearch = s.nameEnglish.toLowerCase().includes(search.toLowerCase()) ||
            s.nameTransliteration.toLowerCase().includes(search.toLowerCase())
        const matchesFilter = filter === 'all' || s.revelationType?.toLowerCase() === filter
        return matchesSearch && matchesFilter
    })

    if (loading) return <IslamicGeometricLoader fullScreen />
    if (error) return <div className="text-center py-20 text-crimson font-bold text-xl">Failed to load Quran Data.</div>

    return (
        <div className="pb-12">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">Qur'an <span className="gradient-text-gold">Explorer</span></h1>
                    <p className="mt-1 text-text-muted text-sm">Discover the 114 Surahs of the Holy Qur'an</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search Surah..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                        />
                    </div>
                    <div className="flex items-center gap-1 rounded-xl bg-navy-900/50 border border-border-subtle p-1">
                        {['all', 'makki', 'madani'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-1.5 text-[0.65rem] font-bold rounded-lg transition-all capitalize ${filter === f ? 'bg-gold-500 text-navy-900' : 'text-text-muted hover:text-text-secondary'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                    {filteredSurahs.map((surah, idx) => (
                        <motion.div
                            key={surah.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.02 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <Link to={`/quran/${surah.id}`} className="manuscript-card block p-6 h-full border border-border-subtle hover:border-gold-500/40 relative">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-navy-700 font-mono text-xs font-bold text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                                        {surah.number}
                                    </div>
                                    <span className={`px-3 py-1 rounded-lg text-[0.6rem] font-bold tracking-widest uppercase ${surah.revelationType === 'MAKKI' ? 'bg-gold-900/20 text-gold-300' : 'bg-sapphire/20 text-sapphire'}`}>
                                        {surah.revelationType}
                                    </span>
                                </div>

                                <div className="text-right mb-4">
                                    <p className="font-arabic text-2xl text-text-arabic">{surah.nameArabic}</p>
                                </div>

                                <h3 className="text-lg font-bold text-text-primary mb-1">{surah.nameTransliteration}</h3>
                                <p className="text-xs text-text-muted mb-6">{surah.nameEnglish}</p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-subtle/50 group-hover:border-gold-500/20">
                                    <span className="text-[0.65rem] font-bold text-text-muted flex items-center gap-1">
                                        <Book className="h-3 w-3" /> {surah.ayahCount} Ayahs
                                    </span>
                                    <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-widest">
                                        Read <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredSurahs.length === 0 && (
                <div className="text-center py-20 flex flex-col items-center">
                    <BookOpen className="h-16 w-16 text-navy-700 mb-6" />
                    <h3 className="text-xl font-bold text-text-muted mb-2">No Surahs found</h3>
                    <p className="text-sm text-text-muted opacity-60">Try searching for a different name or number</p>
                </div>
            )}
        </div>
    )
}

export default QuranExplorer
