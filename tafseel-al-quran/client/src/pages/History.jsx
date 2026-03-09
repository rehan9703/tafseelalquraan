import React from 'react'
import { motion } from 'framer-motion'
import { Scroll, Flag, Star, Zap, Landmark } from 'lucide-react'

const EVENTS = [
    { year: '570 CE', title: 'Year of the Elephant', desc: 'Birth of Prophet Muhammad ﷺ in Makkah.', icon: Star },
    { year: '610 CE', title: 'The First Revelation', desc: 'Archangel Jibril (AS) visits Cave Hira.', icon: Scroll },
    { year: '622 CE', title: 'The Hijrah', desc: 'Migration to Madinah and start of the Islamic calendar.', icon: Flag },
    { year: '630 CE', title: 'Conquest of Makkah', desc: 'A peaceful return to the Holy City and cleansing of the Ka\'bah.', icon: Landmark },
]

const IslamicHistory = () => {
    return (
        <div className="pb-12">
            <div className="mb-12 text-center">
                <h1 className="font-headings text-3xl font-bold text-text-primary">Islamic <span className="gradient-text-gold">History</span></h1>
                <p className="mt-1 text-text-muted text-sm">A vertical journey through the sacred timeline</p>
            </div>

            <div className="max-w-4xl mx-auto relative px-6">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold-500/20 -translate-x-1/2 hidden md:block" />

                <div className="space-y-12">
                    {EVENTS.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 w-full">
                                <div className="manuscript-card p-8 group hover:border-gold-500/50 transition-all">
                                    <span className="text-2xl font-headings font-bold text-gold-500 mb-2 block">{event.year}</span>
                                    <h3 className="text-xl font-bold text-text-primary mb-3">{event.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed italic">
                                        {event.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Icon Marker */}
                            <div className="relative z-10 h-14 w-14 rounded-full bg-navy-900 border-4 border-obsidian flex items-center justify-center text-gold-500 shadow-gold-strong">
                                <event.icon className="h-6 w-6" />
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IslamicHistory
