import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Heart, Shield, BookOpen, Star, Info } from 'lucide-react'

const ProphetMuhammad = () => {
    return (
        <div className="pb-12">
            <div className="mb-12 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Prophet Muhammad <span className="gradient-text-gold">ﷺ</span>
                </h1>
                <p className="mt-1 text-text-muted text-sm">The Final Messenger and Mercy to the Worlds</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Biography Cover */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-1 manuscript-card p-10 flex flex-col items-center">
                    <div className="h-40 w-40 rounded-full bg-navy-900 border-8 border-gold-900/20 flex items-center justify-center mb-8 relative">
                        <Moon className="h-16 w-16 text-gold-500 fill-current" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-15px] border-2 border-dashed border-gold-500/10 rounded-full"
                        />
                    </div>

                    <h2 className="text-xl font-bold text-gold-300 font-headings mb-1">Khatam an-Nabiyyin</h2>
                    <p className="text-[0.6rem] text-text-muted uppercase tracking-[0.2em] mb-8 font-bold text-center">Seal of the Prophets</p>

                    <div className="w-full space-y-4 pt-8 border-t border-border-subtle">
                        <div className="flex justify-between items-center px-2">
                            <span className="text-[0.65rem] font-bold text-text-muted uppercase">Lineage</span>
                            <span className="text-sm font-bold text-text-primary italic">Banu Hashim</span>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <span className="text-[0.65rem] font-bold text-text-muted uppercase">Titles</span>
                            <span className="text-sm font-bold text-text-primary italic">Al-Amin, As-Sadiq</span>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <span className="text-[0.65rem] font-bold text-text-muted uppercase">Birthplace</span>
                            <span className="text-sm font-bold text-text-primary italic">Makkah al-Mukarramah</span>
                        </div>
                    </div>
                </motion.div>

                {/* Deep Dive Sections */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="manuscript-card p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <Shield className="h-6 w-6 text-gold-500" />
                            <h3 className="text-lg font-bold text-text-primary tracking-widest uppercase">The Noble Character (Akhlaq)</h3>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed mb-8 italic">
                            "And indeed, you are of a great moral character." (Qur'an 68:4)
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Unmatched Honesty', 'Interminable Patience', 'Unfiltered Mercy', 'Absolute Humility'].map(attr => (
                                <div key={attr} className="p-4 rounded-xl bg-navy-900 border border-border-subtle flex items-center gap-3">
                                    <Star className="h-4 w-4 text-gold-500" />
                                    <span className="text-xs font-bold text-text-secondary">{attr}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="manuscript-card p-6 border-transparent bg-gold-900/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="h-5 w-5 text-crimson" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Ahl al-Bayt</h4>
                            </div>
                            <p className="text-[0.65rem] text-text-muted leading-relaxed">
                                The pure household of the Prophet ﷺ, including the mothers of believers (RA) and his beloved children.
                            </p>
                            <button className="mt-4 text-[0.6rem] font-bold text-gold-500 flex items-center gap-2 hover:gap-3 transition-all">
                                EXPLORE FAMILY TREE <Info className="h-3 w-3" />
                            </button>
                        </div>

                        <div className="manuscript-card p-6 border-transparent bg-navy-900/50">
                            <div className="flex items-center gap-3 mb-4">
                                <BookOpen className="h-5 w-5 text-gold-500" />
                                <h4 className="text-sm font-bold uppercase tracking-widest">Sahabah</h4>
                            </div>
                            <p className="text-[0.65rem] text-text-muted leading-relaxed">
                                The companions who stood firm in the face of adversity and carried the light of Islam to the ends of the earth.
                            </p>
                            <button className="mt-4 text-[0.6rem] font-bold text-gold-500 flex items-center gap-2 hover:gap-3 transition-all">
                                VIEW COMPANIONS ARCHIVE <Info className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProphetMuhammad
