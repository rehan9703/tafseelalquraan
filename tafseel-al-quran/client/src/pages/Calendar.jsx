import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Moon, Star } from 'lucide-react'

const HijriCalendar = () => {
    const [currentMonth, setCurrentMonth] = useState('Sha\'ban')
    const [currentYear, setCurrentYear] = useState('1446 AH')

    const days = Array.from({ length: 30 }, (_, i) => i + 1)
    const EVENTS = [
        { day: 15, event: 'Nisfu Sha\'ban', type: 'SUNNAH' },
        { day: 1, event: 'Ramadan Pre-Checks', type: 'INFO' },
    ]

    return (
        <div className="pb-12">
            <div className="mb-10 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">
                    Islamic <span className="gradient-text-gold">Calendar</span>
                </h1>
                <p className="mt-2 text-text-muted text-sm">Track sacred dates and Hijri time</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Calendar Card */}
                <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="manuscript-card p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-headings text-xl font-bold text-gold-300 uppercase tracking-widest">
                                {currentMonth} <span className="text-text-muted ml-2">{currentYear}</span>
                            </h3>
                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-lg bg-navy-700 text-text-muted hover:text-gold-300">
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button className="p-2 rounded-lg bg-navy-700 text-text-muted hover:text-gold-300">
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-4">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                                <div key={d} className="text-center text-[0.6rem] font-bold text-text-muted uppercase py-2 tracking-widest">
                                    {d}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {days.map((day) => {
                                const isToday = day === 14
                                const hasEvent = EVENTS.find(e => e.day === day)
                                return (
                                    <motion.div
                                        key={day}
                                        whileHover={{ scale: 1.05 }}
                                        className={`relative aspect-square flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${isToday ? 'bg-gold-500 text-navy-900 shadow-gold-strong' : 'bg-navy-900 border border-border-subtle hover:border-gold-500/30'}`}
                                    >
                                        <span className="text-sm font-bold font-mono">{day}</span>
                                        <span className="text-[0.5rem] opacity-60 mt-1">2{day} Feb</span>
                                        {hasEvent && (
                                            <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-gold-300" />
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Info & Events */}
                <div className="space-y-6">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="manuscript-card p-6">
                        <h4 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-4">Upcoming Events</h4>
                        <div className="space-y-4">
                            {EVENTS.map((e, idx) => (
                                <div key={idx} className="flex gap-4 p-3 rounded-xl bg-navy-700/50 border border-border-subtle">
                                    <div className="h-10 w-10 flex flex-col items-center justify-center rounded-lg bg-gold-500 text-navy-900">
                                        <span className="text-xs font-bold leading-none">{e.day}</span>
                                        <span className="text-[0.5rem] font-bold uppercase">Sha</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-text-primary">{e.event}</p>
                                        <p className="text-[0.6rem] text-gold-500/60 uppercase font-bold tracking-widest">{e.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="manuscript-card p-6">
                        <h4 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-4">Moon Phase</h4>
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-full bg-navy-700">
                                <Moon className="h-8 w-8 text-gold-300" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-primary">Waxing Gibbous</p>
                                <p className="text-[0.65rem] text-text-muted">Illumination: 94%</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="manuscript-card p-6 bg-gold-900/10 border-gold-500/20">
                        <div className="flex items-center gap-2 text-gold-300 mb-2">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest">Significance</span>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                            Sha'ban is the month of preparation for Ramadan. The 15th night (Nisfu Sha'ban) is considered especially virtuous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HijriCalendar
