import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Book, CheckCircle, Clock, TrendingUp, Award } from 'lucide-react'
import ProgressRing from '../components/ProgressRing'

const ProgressPage = () => {
    return (
        <div className="pb-12">
            <div className="mb-12">
                <h1 className="font-headings text-3xl font-bold text-text-primary">My <span className="gradient-text-gold">Progress</span></h1>
                <p className="mt-1 text-text-muted text-sm">Track your spiritual journey and learning milestones</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Main Stats */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 manuscript-card p-10 flex items-center gap-12">
                    <div className="h-48 w-48 shrink-0">
                        <ProgressRing percentage={42} />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-text-primary font-headings mb-2">Qur'an Completion</h2>
                            <p className="text-sm text-text-muted leading-relaxed">
                                You have completed 48 out of 114 Surahs. Keep going! You're on track to finish by Ramadan.
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-[0.6rem] font-bold text-gold-500 uppercase tracking-widest mb-1">Last Read</p>
                                <p className="text-sm font-bold">Surah Al-Kahf</p>
                            </div>
                            <div>
                                <p className="text-[0.6rem] font-bold text-gold-500 uppercase tracking-widest mb-1">Time Studied</p>
                                <p className="text-sm font-bold">128 Hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Streak Card */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="manuscript-card p-10 bg-gold-900/10 border-gold-500/20 text-center flex flex-col items-center justify-center">
                    <Activity className="h-12 w-12 text-gold-500 mb-4 animate-pulse" />
                    <h4 className="text-[0.65rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-2">Daily Streak</h4>
                    <span className="text-6xl font-headings font-bold text-gold-300">14</span>
                    <p className="mt-4 text-xs text-text-muted">Days of consecutive learning</p>
                </motion.div>
            </div>

            {/* Milestones */}
            <div className="space-y-6">
                <h3 className="text-[0.65rem] font-bold tracking-[0.3em] text-text-muted uppercase">Recent Milestones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Juz 1 Master', desc: 'Completed focused reading of Juz Amma', icon: Award, color: 'text-gold-500' },
                        { title: 'Hadith Scholar', desc: 'Read all 42 Hadith of Imam Nawawi', icon: Book, color: 'text-emerald' },
                        { title: 'Prayer Guard', desc: '7 days of tracked Salah times', icon: CheckCircle, color: 'text-sapphire' },
                        { title: 'Name Memorizer', desc: 'Learned 50 Names of Allah', icon: TrendingUp, color: 'text-crimson' },
                    ].map((m, idx) => (
                        <motion.div
                            key={m.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="manuscript-card p-6 border-transparent bg-navy-900/50"
                        >
                            <m.icon className={`h-8 w-8 ${m.color} mb-4`} />
                            <h4 className="font-bold text-sm mb-1">{m.title}</h4>
                            <p className="text-[0.65rem] text-text-muted leading-relaxed">{m.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProgressPage
