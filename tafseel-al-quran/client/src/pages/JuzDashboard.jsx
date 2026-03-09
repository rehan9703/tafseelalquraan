import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProgressRing from '../components/ProgressRing'

const JUZ_LIST = Array.from({ length: 30 }, (_, i) => ({
    number: i + 1,
    title: `Juz ${i + 1}`,
    startSurah: "Al-Fatihah",
    progress: Math.floor(Math.random() * 100), // Mock progress
    isCompleted: Math.random() > 0.8
}))

const JuzDashboard = () => {
    const navigate = useNavigate()

    return (
        <div className="pb-12">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-text-primary">30 Juz <span className="gradient-text-gold">Explorer</span></h1>
                    <p className="mt-1 text-text-muted text-sm italic">Systematic journey through the Noble Qur'an</p>
                </div>
                <div className="flex items-center gap-4 bg-navy-900 border border-border-subtle rounded-2xl p-4">
                    <ProgressRing percentage={34} size={60} strokeWidth={4} />
                    <div>
                        <p className="text-[0.6rem] font-bold text-gold-500 uppercase tracking-widest">Total Progress</p>
                        <p className="text-sm font-bold text-text-primary">10/30 juz Completed</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {JUZ_LIST.map((juz, idx) => (
                    <motion.div
                        key={juz.number}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 10) * 0.05 }}
                        onClick={() => navigate(`/quran?juz=${juz.number}`)}
                        className="manuscript-card p-6 cursor-pointer group hover:border-gold-500/40"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-10 w-10 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-center text-gold-500 font-bold font-mono">
                                {juz.number}
                            </div>
                            {juz.isCompleted && (
                                <CheckCircle2 className="h-5 w-5 text-emerald fill-emerald/10" />
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-text-primary group-hover:text-gold-300 transition-colors mb-1">{juz.title}</h3>
                        <p className="text-[0.6rem] text-text-muted uppercase tracking-[0.2em] mb-6">Starts with: {juz.startSurah}</p>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-[0.6rem] font-bold">
                                <span className="text-text-muted uppercase">Progress</span>
                                <span className="text-gold-300">{juz.progress}%</span>
                            </div>
                            <div className="h-1 w-full bg-navy-900 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${juz.progress}%` }}
                                    className="h-full bg-gradient-to-r from-gold-700 to-gold-300"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between text-gold-500 opacity-0 group-hover:opacity-100 transition-all">
                            <span className="text-[0.6rem] font-bold tracking-widest uppercase">Start Reading</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default JuzDashboard
