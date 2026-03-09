import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sun, Moon, Utensils, Bed, Plane, Droplets, Landmark, Heart } from 'lucide-react'
import DuaCard from '../components/DuaCard'
import { useDuas } from '../hooks/useDuas'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'

const CATEGORIES = [
    { label: 'All', icon: Heart },
    { label: 'Morning', icon: Sun },
    { label: 'Evening', icon: Moon },
    { label: 'Eating', icon: Utensils },
    { label: 'Sleeping', icon: Bed },
    { label: 'Travel', icon: Plane },
    { label: 'Wudu', icon: Droplets },
    { label: 'Masjid', icon: Landmark },
]

const Duas = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [search, setSearch] = useState('')
    const { duas, loading, error } = useDuas(activeTab)

    if (loading) return <IslamicGeometricLoader fullScreen />

    const filteredDuas = duas.filter(d =>
        d.translationEN.toLowerCase().includes(search.toLowerCase()) ||
        d.situation.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="pb-12">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">
                        Supplications <span className="gradient-text-gold">(Du'as)</span>
                    </h1>
                    <p className="mt-1 text-text-muted text-sm">Authentic prayers for every moment of life</p>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search Du'as..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                    />
                </div>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => setActiveTab(cat.label)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all ${activeTab === cat.label ? 'bg-gold-500 text-navy-900 border-gold-500 shadow-gold-strong' : 'bg-navy-900 border-border-subtle text-text-muted hover:border-gold-500/30 hover:text-gold-300'}`}
                    >
                        <cat.icon className="h-6 w-6 mb-2" />
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest">{cat.label}</span>
                    </button>
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {filteredDuas.map((d, idx) => (
                        <motion.div
                            key={d.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <DuaCard
                                dua={d}
                                isBookmarked={false}
                                onBookmark={() => { }}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredDuas.length === 0 && (
                <div className="text-center py-20 text-text-muted opacity-60">
                    <p className="font-headings text-lg mb-2">No Du'as found</p>
                    <p className="text-sm">Try clearing your search or selection another category</p>
                </div>
            )}
        </div>
    )
}

export default Duas
