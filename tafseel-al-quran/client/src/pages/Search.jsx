import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, Quote, Heart, User, Filter, ArrowRight } from 'lucide-react'
import { useQuranSearch } from '../hooks/useQuran'
import { useNavigate } from 'react-router-dom'

const FILTERS = [
    { id: 'all', label: 'All Results', icon: Filter },
    { id: 'quran', label: 'Qur\'an', icon: BookOpen },
    { id: 'hadith', label: 'Hadith', icon: Quote },
    { id: 'duas', label: 'Duas', icon: Heart },
    { id: 'prophets', label: 'Prophets', icon: User },
]

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState('all')
    const navigate = useNavigate()

    const { results: quranResults, loading: quranLoading } = useQuranSearch(query)

    const MOCK_RESULTS = [
        { type: 'hadith', title: 'Actions are by Intentions', desc: 'Narrated by Umar bin Al-Khattab...', id: 2 },
        { type: 'duas', title: 'Dua for Knowledge', desc: 'Rabbi Zidni Ilma - My Lord, increase me in knowledge...', id: 3 },
        { type: 'prophets', title: 'Prophet Ibrahim (AS)', desc: 'The Father of Prophets and builder of the Ka\'bah...', id: 4 },
    ]

    // If query is empty, show default mock results (or clear them), here we'll keep the mock ones if empty matching filter
    // If we have query, we show the real quran results mapped to the common format + mock results that match
    const formattedQuranResults = quranResults.map(r => ({
        type: 'quran',
        title: `${r.surahName} ${r.surahId}:${r.ayahNumber}`,
        desc: r.translation,
        id: `quran-${r.id}`,
        link: `/quran/${r.surahId}`, // Using surahId since we don't have exact ayah highlight link yet
        ayahNumber: r.ayahNumber
    }))

    const combinedResults = [
        ...formattedQuranResults,
        ...MOCK_RESULTS.filter(m => !query || m.title.toLowerCase().includes(query.toLowerCase()) || m.desc.toLowerCase().includes(query.toLowerCase()))
    ]

    const filteredResults = combinedResults.filter(r => activeFilter === 'all' || r.type === activeFilter)

    return (
        <div className="pb-12">
            <div className="mb-12 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">Global <span className="gradient-text-gold">Search</span></h1>
                <p className="mt-2 text-text-muted text-sm">Discover knowledge across the entire vault</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-gold-500" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for Ayahs, Hadith, Duas, or Prophets..."
                        className="w-full h-16 rounded-2xl bg-navy-900 border border-gold-500/20 pl-16 pr-6 text-lg text-text-primary outline-none focus:border-gold-500/50 shadow-gold-glow transition-all"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3">
                    {FILTERS.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${activeFilter === f.id ? 'bg-gold-500 text-navy-900 border-gold-500 shadow-gold-strong' : 'bg-navy-900 border-border-subtle text-text-muted hover:border-gold-500/30'}`}
                        >
                            <f.icon className="h-4 w-4" />
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Results */}
                <div className="space-y-4">
                    {quranLoading && query && <div className="text-center text-gold-500 text-sm py-8">Searching Qur'an...</div>}
                    <AnimatePresence mode="popLayout">
                        {!quranLoading && filteredResults.map((res) => (
                            <motion.div
                                key={`${res.type}-${res.id}`}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="manuscript-card p-6 flex items-center justify-between group cursor-pointer"
                                onClick={() => {
                                    if (res.link) {
                                        navigate(res.link, { state: { highlightAyah: res.ayahNumber } })
                                    }
                                }}
                            >
                                <div className="flex items-center gap-6">
                                    <div className="h-12 w-12 rounded-full bg-navy-900 border border-gold-500/20 flex items-center justify-center text-gold-500">
                                        {FILTERS.find(f => f.id === res.type)?.icon({ className: 'h-6 w-6' })}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[0.6rem] font-bold text-gold-500 uppercase tracking-widest">{res.type}</span>
                                            <div className="h-1 w-1 rounded-full bg-text-muted" />
                                        </div>
                                        <h3 className="text-lg font-bold text-text-primary group-hover:text-gold-300 transition-colors">{res.title}</h3>
                                        <p className="text-sm text-text-muted line-clamp-2">{res.desc}</p>
                                    </div>
                                </div>
                                <button className="h-10 w-10 rounded-xl bg-navy-900 flex items-center justify-center text-text-muted hover:text-gold-300 transition-colors">
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {!quranLoading && filteredResults.length === 0 && (
                        <div className="py-20 text-center opacity-40">
                            <Search className="h-16 w-16 mx-auto mb-4" />
                            <p className="font-headings text-xl">No results found</p>
                            <p className="text-sm">Try searching for something else</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchPage

