import React from 'react'
import { motion } from 'framer-motion'
import { Info, Sparkles } from 'lucide-react'

const NameCard = ({ name, index, memorized, onToggleMemorized }) => {
    return (
        <div className="group h-[280px] w-full [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-2xl border border-border-subtle bg-gradient-to-br from-navy-800 to-navy-900 p-6 [backface-visibility:hidden]">
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-xs font-bold text-text-muted">
                            {name.number.toString().padStart(2, '0')}
                        </span>
                        {memorized && (
                            <Sparkles className="h-4 w-4 text-gold-500 fill-current" />
                        )}
                    </div>

                    <div className="flex flex-col items-center justify-center h-full pb-8">
                        <h3 className="font-arabic text-5xl lg:text-6xl gradient-text-gold mb-6 drop-shadow-gold-strong">
                            {name.nameArabic}
                        </h3>
                        <p className="font-headings text-sm font-bold text-text-secondary tracking-widest uppercase">
                            {name.transliteration}
                        </p>
                        <p className="text-xs text-text-muted mt-2 italic">
                            {name.meaningEN}
                        </p>
                    </div>

                    <div className="absolute bottom-4 right-4 text-text-muted opacity-40 group-hover:opacity-100 transition-opacity">
                        <Info className="h-4 w-4" />
                    </div>
                </div>

                {/* Back Face (Rotated 180deg) */}
                <div className="absolute inset-0 h-full w-full rounded-2xl border border-gold-500/30 bg-navy-800 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[var(--glow-gold)]">
                    <div className="h-full flex flex-col">
                        <div className="mb-4">
                            <h4 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-500 uppercase mb-2">Detailed Meaning</h4>
                            <p className="text-sm text-text-primary font-medium leading-relaxed">
                                {name.meaningEN} — This name signifies {name.virtues || 'absolute perfection and divine attribute.'}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-500 uppercase mb-2">Virtues & Reference</h4>
                            <p className="text-xs text-text-secondary italic">
                                {name.quranicReference || 'Mentioned throughout the Holy Qur\'an as a manifestation of Allah\'s greatness.'}
                            </p>
                        </div>

                        <div className="mt-auto pt-4 border-t border-border-subtle">
                            <button
                                onClick={(e) => { e.preventDefault(); onToggleMemorized(); }}
                                className={`w-full py-2 rounded-xl text-[0.65rem] font-bold tracking-widest uppercase transition-all ${memorized ? 'bg-gold-500 text-navy-900' : 'bg-navy-900 border border-gold-500/40 text-gold-300 hover:bg-gold-900/40'}`}
                            >
                                {memorized ? 'Memorized ✓' : 'Mark as Memorized'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NameCard
