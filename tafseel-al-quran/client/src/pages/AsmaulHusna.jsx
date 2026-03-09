import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, Filter, EyeOff, Eye } from 'lucide-react'
import NameCard from '../components/NameCard'
import { useNames } from '../hooks/useNames'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'

const CATEGORIES = ['All', 'Mercy', 'Power', 'Knowledge', 'Beauty', 'Majesty']

const AsmaulHusna = () => {
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [memoMode, setMemoMode] = useState(false)
    const { names, loading, error, memorizedIds, toggleMemorized } = useNames()

    if (loading) return <IslamicGeometricLoader fullScreen />
    if (error) return <div className="text-center py-20 text-crimson">Error loading 99 Names.</div>

    const filteredNames = names.filter(n => {
        const matchesSearch = n.transliteration.toLowerCase().includes(search.toLowerCase()) || n.nameArabic.includes(search)
        const matchesCategory = activeCategory === 'All' || n.category === activeCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="pb-12">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">
                        Asmaul <span className="gradient-text-gold">Husna</span>
                    </h1>
                    <p className="mt-1 text-text-muted text-sm">The 99 Beautiful Names & Attributes of Allah</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search Name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                        />
                    </div>
                    <button
                        onClick={() => setMemoMode(!memoMode)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${memoMode ? 'bg-gold-500 text-navy-900 border-gold-500' : 'border-border-subtle text-text-muted hover:border-gold-500/30'}`}
                    >
                        {memoMode ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        <span>{memoMode ? 'Show Meanings' : 'Memorization Mode'}</span>
                    </button>
                </div>
            </div>

            {/* Stats & Progress */}
            <div className="manuscript-card mb-8 p-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-[0.6rem] font-bold tracking-[0.2em] text-text-muted uppercase">Memorization Progress</p>
                        <p className="font-mono text-xl font-bold text-gold-300">{memorizedIds.length} / 99</p>
                    </div>
                    <div className="h-10 w-[1px] bg-border-subtle" />
                    <div className="hidden sm:block">
                        <p className="text-[0.6rem] font-bold tracking-[0.2em] text-text-muted uppercase">Current Category</p>
                        <p className="font-headings text-sm text-text-secondary">{activeCategory}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1.5 rounded-lg text-[0.65rem] font-bold transition-all ${activeCategory === cat ? 'bg-gold-900/40 text-gold-300' : 'text-text-muted hover:text-text-secondary hover:bg-navy-700'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredNames.map((n, idx) => (
                        <motion.div
                            key={n.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.01 }}
                            className={memoMode ? 'blur-sm grayscale opacity-40 hover:blur-0 hover:grayscale-0 hover:opacity-100 transition-all duration-300' : ''}
                        >
                            <NameCard
                                name={n}
                                memorized={memorizedIds.includes(n.id)}
                                onToggleMemorized={() => toggleMemorized(n.id)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredNames.length === 0 && (
                <div className="text-center py-20">
                    <Sparkles className="h-16 w-16 text-navy-700 mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-text-muted">No attributes found</h3>
                    <p className="text-sm text-text-muted opacity-60">Try selection a different category or clearing search</p>
                </div>
            )}
        </div>
    )
}

export default AsmaulHusna
