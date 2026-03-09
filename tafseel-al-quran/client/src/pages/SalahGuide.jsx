import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Info, ChevronRight, Book, Play } from 'lucide-react'

const PRAYERS = [
    { id: 'fajr', name: 'Fajr', rakat: 2, type: 'Sunnah + Fard' },
    { id: 'zuhr', name: 'Zuhr', rakat: 4, type: 'Sunnah + Fard + Sunnah' },
    { id: 'asr', name: 'Asr', rakat: 4, type: 'Fard' },
    { id: 'maghrib', name: 'Maghrib', rakat: 3, type: 'Fard + Sunnah' },
    { id: 'isha', name: 'Isha', rakat: 4, type: 'Fard + Sunnah + Witr' },
    { id: 'tahajjud', name: 'Tahajjud', rakat: '2 - 12', type: 'Nafl' },
]

const STEPS = [
    {
        title: "Niyyah (Intention)",
        action: "Standing (Qiyam)",
        desc: "Make the intention in your heart for the specific prayer you are performing.",
        arabic: "نويت أن أصلي...",
        translation: "I intend to pray...",
    },
    {
        title: "Takbiratul Ihram",
        action: "Raising hands",
        desc: "Raise your hands up to your earlobes (men) or shoulders (women) and say the Takbir.",
        arabic: "الله أكبر",
        translation: "Allah is the Greatest",
    },
    {
        title: "Qiyam & Recitation",
        action: "Standing with hands folded",
        desc: "Recite Sana, Surah Al-Fatihah, and another portion of the Quran.",
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ...",
        translation: "Glory be to You, O Allah, and all praise...",
    },
    {
        title: "Ruku (Bowing)",
        action: "Bowing down",
        desc: "Bow down keeping your back straight and hands on your knees.",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        translation: "Glory be to my Lord, the Almighty",
    },
]

const SalahGuide = () => {
    const [activePrayer, setActivePrayer] = useState('fajr')
    const [activeStep, setActiveStep] = useState(0)

    return (
        <div className="pb-12">
            <div className="mb-10 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Salah <span className="gradient-text-gold">Guide</span>
                </h1>
                <p className="mt-2 text-text-muted text-sm">A step-by-step guide to the perfect prayer</p>
            </div>

            {/* Prayer Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {PRAYERS.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => setActivePrayer(p.id)}
                        className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all border ${activePrayer === p.id ? 'bg-gold-500 text-navy-900 border-gold-500 shadow-gold-strong' : 'bg-navy-900 border-border-subtle text-text-muted hover:border-gold-500/30'}`}
                    >
                        {p.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Step Progress Sidebar */}
                <div className="lg:col-span-1 space-y-3">
                    <h3 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase px-4 mb-4">Steps Overview</h3>
                    {STEPS.map((step, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${activeStep === idx ? 'manuscript-card border-gold-500/50 bg-navy-700/50' : 'bg-navy-900 border-transparent hover:bg-navy-900/50'}`}
                        >
                            <div className={`h-8 w-8 flex items-center justify-center rounded-full font-mono text-xs font-bold ${activeStep === idx ? 'bg-gold-500 text-navy-900' : 'bg-navy-700 text-text-muted'}`}>
                                {idx + 1}
                            </div>
                            <div className="text-left">
                                <p className={`text-sm font-bold ${activeStep === idx ? 'text-text-primary' : 'text-text-muted'}`}>{step.title}</p>
                                <p className="text-[0.65rem] text-text-muted opacity-60 uppercase tracking-widest">{step.action}</p>
                            </div>
                            {idx < activeStep && <CheckCircle2 className="ml-auto h-4 w-4 text-emerald" />}
                        </button>
                    ))}
                </div>

                {/* Active Step Content */}
                <div className="lg:col-span-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="manuscript-card p-10 h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gold-300 font-headings mb-1">{STEPS[activeStep].title}</h2>
                                    <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">{STEPS[activeStep].action}</p>
                                </div>
                                <div className="h-12 w-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500">
                                    <span className="font-mono text-lg font-bold">{activeStep + 1}</span>
                                </div>
                            </div>

                            <div className="mb-10 text-right bg-obsidian/40 p-8 rounded-3xl border border-border-subtle">
                                <p className="font-arabic text-3xl lg:text-4xl text-text-arabic leading-[2.5]">
                                    {STEPS[activeStep].arabic}
                                </p>
                                <div className="mt-6 flex justify-end gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-900/20 text-gold-300 text-[0.65rem] font-bold uppercase tracking-widest hover:bg-gold-900/40 transition-colors">
                                        <Play className="h-3 w-3 fill-current" /> Play Recitation
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[0.65rem] font-bold tracking-widest text-gold-500 uppercase mb-2">Translation</h4>
                                    <p className="text-text-primary italic border-l-2 border-gold-500/20 pl-6">
                                        "{STEPS[activeStep].translation}"
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[0.65rem] font-bold tracking-widest text-gold-500 uppercase mb-2">Instructions</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {STEPS[activeStep].desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex justify-between">
                                <button
                                    disabled={activeStep === 0}
                                    onClick={() => setActiveStep(activeStep - 1)}
                                    className="px-6 py-2.5 rounded-xl border border-border-subtle text-text-muted text-xs font-bold hover:border-gold-500/30 hover:text-gold-300 disabled:opacity-20"
                                >
                                    Previous Step
                                </button>
                                <button
                                    disabled={activeStep === STEPS.length - 1}
                                    onClick={() => setActiveStep(activeStep + 1)}
                                    className="btn-gold text-xs"
                                >
                                    Next: {STEPS[activeStep + 1]?.title || 'Finish'}
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default SalahGuide
