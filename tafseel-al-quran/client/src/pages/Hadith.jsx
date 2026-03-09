import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Scroll, Book, ChevronLeft, ChevronRight } from 'lucide-react'
import HadithCard from '../components/HadithCard'
import { useHadith } from '../hooks/useKnowledge'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'

const COLLECTIONS = [
    { id: 'bukhari', name: 'Sahih al-Bukhari' },
    { id: 'muslim', name: 'Sahih Muslim' },
    { id: 'abudawud', name: 'Sunan Abu Dawud' },
    { id: 'tirmidhi', name: 'Jami at-Tirmidhi' },
    { id: 'nasai', name: 'Sunan an-Nasai' },
    { id: 'ibnmajah', name: 'Sunan Ibn Majah' }
]

const Hadith = () => {
    const [activeCollection, setActiveCollection] = useState('bukhari')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    // Pass search conditionally so normal browsing hits getHadiths, and searching hits searchHadiths
    const filters = {
        collection: activeCollection,
        page,
        limit: 20,
        ...(search.length > 2 && { search })
    }

    const { hadiths, total, pages, loading, error } = useHadith(filters)

    // Reset pagination when searching or changing collection
    const handleCollectionChange = (id) => {
        setActiveCollection(id)
        setSearch('')
        setPage(1)
    }

    if (error) return <div className="text-center py-20 text-crimson">Error loading Hadiths.</div>

    return (
        <div className="pb-12">
            <div className="mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">
                        Classical <span className="gradient-text-gold">Ahadith</span>
                    </h1>
                    <p className="mt-1 text-text-muted text-sm border-l-2 border-gold-500/30 pl-3">Explore the major massive offline collections</p>
                </div>

                <div className="relative w-full lg:w-96">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search translations natively..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setPage(1)
                        }}
                        className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                    />
                </div>
            </div>

            {/* Collection Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
                {COLLECTIONS.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => handleCollectionChange(c.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${activeCollection === c.id ? 'bg-gold-500 text-navy-900 border-gold-500 shadow-gold-strong' : 'border-border-subtle text-text-muted hover:border-gold-500/30 hover:text-text-secondary'}`}
                    >
                        <Book className="h-3 w-3" />
                        {c.name}
                    </button>
                ))}
            </div>

            {loading && <IslamicGeometricLoader />}

            {!loading && (
                <>
                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="popLayout">
                            {hadiths.map((h, idx) => (
                                <motion.div
                                    key={h.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <HadithCard hadith={h} isBookmarked={false} onBookmark={() => { }} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {hadiths.length === 0 && (
                        <div className="text-center py-20">
                            <Scroll className="h-16 w-16 text-navy-700 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-text-muted">No Hadith found</h3>
                            <p className="text-sm text-text-muted opacity-60">Try selection a different collection or search term</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {pages > 1 && (
                        <div className="flex items-center justify-center gap-4 mt-12 mb-8">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="p-3 rounded-xl bg-navy-900/50 border border-border-subtle text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-navy-800 transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <span className="text-sm font-bold text-gold-500 tracking-widest uppercase mb-1">
                                Page {page} of {pages}
                            </span>
                            <button
                                onClick={() => setPage(p => Math.min(pages, p + 1))}
                                disabled={page === pages}
                                className="p-3 rounded-xl bg-navy-900/50 border border-border-subtle text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-navy-800 transition-colors"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Hadith
