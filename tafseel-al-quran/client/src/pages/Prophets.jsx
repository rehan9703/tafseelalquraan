import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Info, Sparkles } from 'lucide-react'
import ProphetCard from '../components/ProphetCard'
import { useProphets } from '../hooks/useKnowledge'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'

const Prophets = () => {
    const { prophets, loading, error } = useProphets()
    const [search, setSearch] = useState('')

    if (loading) return <IslamicGeometricLoader fullScreen />
    if (error) return <div className="text-center py-20 text-crimson">Error loading Prophet stories.</div>

    const filteredProphets = prophets.filter(p =>
        p.nameEnglish.toLowerCase().includes(search.toLowerCase()) ||
        p.nameArabic.includes(search)
    )

    return (
        <div className="pb-12">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">
                        Stories of the <span className="gradient-text-gold">Prophets</span>
                    </h1>
                    <p className="mt-1 text-text-muted text-sm">Lessons from the lives of those chosen by Allah</p>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search Prophet name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                    />
                </div>
            </div>

            <AnimatePresence mode="popLayout">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProphets.map((prophet, idx) => (
                        <ProphetCard key={prophet.id} prophet={prophet} />
                    ))}
                </motion.div>
            </AnimatePresence>

            {filteredProphets.length === 0 && (
                <div className="text-center py-20">
                    <Sparkles className="h-16 w-16 text-navy-700 mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-text-muted">Prophet not found</h3>
                    <p className="text-sm text-text-muted opacity-60">Try searching with a different name</p>
                </div>
            )}
        </div>
    )
}

export default Prophets
