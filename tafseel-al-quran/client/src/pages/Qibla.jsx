import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Compass, MapPin, Navigation, Info, Locate } from 'lucide-react'

const QiblaFinder = () => {
    const [degree, setDegree] = useState(0)
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState(null)
    const QIBLA_DEGREE = 118 // Mock constant for demonstration

    const handleLocate = () => {
        setLoading(true)
        setTimeout(() => {
            setLocation("London, United Kingdom")
            setDegree(QIBLA_DEGREE)
            setLoading(false)
        }, 1500)
    }

    return (
        <div className="pb-12 text-center">
            <div className="mb-10">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Qibla <span className="gradient-text-gold">Finder</span>
                </h1>
                <p className="mt-2 text-text-muted text-sm">Find the direction of the Holy Ka'bah</p>
            </div>

            <div className="max-w-xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="manuscript-card p-12 flex flex-col items-center">

                    {/* Compass UI */}
                    <div className="relative mb-12">
                        <div className="absolute inset-0 bg-gold-500/5 rounded-full blur-3xl" />

                        {/* Compass Base */}
                        <div className="relative h-64 w-64 rounded-full border-4 border-navy-700 bg-navy-900 flex items-center justify-center shadow-[var(--glow-gold)]">
                            {/* Markings */}
                            <div className="absolute inset-2 border border-border-subtle rounded-full border-dashed opacity-30" />
                            <div className="absolute inset-0 p-4 flex items-start justify-center text-[0.6rem] font-bold text-text-muted tracking-widest">N</div>
                            <div className="absolute inset-0 p-4 flex items-end justify-center text-[0.6rem] font-bold text-text-muted tracking-widest">S</div>
                            <div className="absolute inset-0 p-4 flex items-center justify-start text-[0.6rem] font-bold text-text-muted tracking-widest">W</div>
                            <div className="absolute inset-0 p-4 flex items-center justify-end text-[0.6rem] font-bold text-text-muted tracking-widest">E</div>

                            {/* Needle */}
                            <motion.div
                                animate={{ rotate: degree }}
                                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                                className="relative h-48 w-4"
                            >
                                {/* North Pointer (Ka'bah) */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-4 bg-gradient-to-t from-gold-500 to-gold-300 rounded-full flex flex-col items-center pt-2">
                                    <Navigation className="h-4 w-4 text-navy-900 fill-current rotate-180" />
                                </div>
                                {/* South Pointer */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-4 bg-navy-700 rounded-full" />

                                {/* Center Pin */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-gold-500 border-4 border-navy-900 z-10" />
                            </motion.div>
                        </div>

                        {/* Qibla Indicator Tag */}
                        <motion.div
                            animate={{ rotate: QIBLA_DEGREE - 90 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[18rem] w-[18rem] pointer-events-none"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                                <div className="h-8 w-[2px] bg-gold-500 shadow-gold-strong" />
                                <span className="text-[0.6rem] font-bold text-gold-500 uppercase tracking-widest whitespace-nowrap bg-navy-900 px-3 py-1 rounded-full border border-gold-500/20 shadow-lg">KA'BAH 118°</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full space-y-6">
                        <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-navy-900 border border-border-subtle">
                            <MapPin className="h-5 w-5 text-gold-500" />
                            <div className="text-left">
                                <p className="text-[0.6rem] font-bold tracking-[0.2em] text-text-muted uppercase">Current Location</p>
                                <p className="text-sm font-bold text-text-primary">{location || 'Detecting...'}</p>
                            </div>
                        </div>

                        <button
                            onClick={handleLocate}
                            disabled={loading}
                            className="w-full btn-gold flex items-center justify-center gap-3 h-14"
                        >
                            {loading ? (
                                <div className="h-5 w-5 border-2 border-navy-900 border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Locate className="h-5 w-5" />
                            )}
                            <span>{loading ? 'Finding Direction...' : 'Recalibrate Position'}</span>
                        </button>
                    </div>
                </motion.div>

                <div className="mt-8 manuscript-card p-6 bg-gold-900/10 border-gold-500/20 flex gap-4 text-left">
                    <Info className="h-6 w-6 text-gold-500 flex-shrink-0" />
                    <p className="text-xs text-text-secondary leading-relaxed italic">
                        Ensure your device GPS is enabled and you are away from metallic objects for the most accurate Qibla direction.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QiblaFinder
