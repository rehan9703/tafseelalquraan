import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlaskConical, Search, BookOpen, Scroll, HelpCircle, ArrowRight } from 'lucide-react'

const TOPICS = [
    { id: 'aqidah', label: 'Aqidah', icon: BookOpen, desc: 'Core beliefs & theology' },
    { id: 'fiqh', label: 'Fiqh', icon: Scroll, desc: 'Jurisprudence & practice' },
    { id: 'sirah', label: 'Sirah', icon: HelpCircle, desc: 'Life of the Prophet ﷺ' },
    { id: 'tafseer', label: 'Tafseer', icon: FlaskConical, desc: 'Exegesis & understanding' },
]

const ResearchPortal = () => {
    const [activeTab, setActiveTab] = useState('aqidah')

    return (
        <div className="pb-12">
            <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">
                        Research <span className="gradient-text-gold">Portal</span>
                    </h1>
                    <p className="mt-1 text-text-muted text-sm">Deep-dive into classical Islamic sciences</p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search research topics..."
                        className="w-full rounded-xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary outline-none focus:border-gold-500/50"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Tabs */}
                <div className="lg:col-span-1 space-y-4">
                    {TOPICS.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => setActiveTab(topic.id)}
                            className={`w-full group p-5 rounded-2xl border transition-all text-left ${activeTab === topic.id ? 'manuscript-card border-gold-500/50 bg-navy-700/50' : 'bg-navy-900 border-transparent hover:bg-navy-900/50'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl transition-colors ${activeTab === topic.id ? 'bg-gold-500 text-navy-900' : 'bg-navy-700 text-gold-300'}`}>
                                    <topic.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold ${activeTab === topic.id ? 'text-text-primary' : 'text-text-muted'}`}>{topic.label}</h4>
                                    <p className="text-[0.6rem] text-text-muted opacity-60 uppercase tracking-widest">{topic.desc}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-6"
                        >
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="manuscript-card group p-8 hover:border-gold-500/30 transition-all cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-500 uppercase">Scientific Paper • {activeTab}</span>
                                        <span className="text-[0.65rem] text-text-muted">Feb 2026</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-gold-300 transition-colors">
                                        Exploring the Foundations of {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} in the Digital Age
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">
                                        This research paper discusses the evolving landscape of {activeTab} and how technology serves as a bridge for the new generation
                                        to access classical knowledge. We delve into primary source verification and the role of digital archives...
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-border-subtle/50">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-navy-700 border border-gold-500/20" />
                                            <span className="text-xs font-bold text-text-secondary">Dr. Ibrahim Khan</span>
                                        </div>
                                        <button className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                            Read Paper <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default ResearchPortal
