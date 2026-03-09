import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    BookOpen, Star, Scroll, Sparkles, Target,
    TrendingUp, Clock, Heart, Calendar, Compass, ArrowRight
} from 'lucide-react'
import StatBadge from '../components/StatBadge'
import DailyAyahWidget from '../components/DailyAyahWidget'
import ProgressRing from '../components/ProgressRing'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'
import { useAuthStore } from '../store/authStore'

const Dashboard = () => {
    const { user } = useAuthStore()
    const [loading, setLoading] = useState(true)

    const stats = [
        { icon: BookOpen, value: 114, label: "Surahs", path: "/quran" },
        { icon: TrendingUp, value: 30, label: "Juz", path: "/progress" },
        { icon: Scroll, value: 6236, label: "Ayahs", path: "/quran" },
        { icon: Sparkles, value: 99, label: "Names", path: "/asmaul-husna" },
        { icon: Scroll, value: 42, label: "Hadith", path: "/hadith" },
        { icon: Target, value: 850, label: "Quiz Score", path: "/quiz" },
    ]

    const modules = [
        { icon: BookOpen, title: "Qur'an Explorer", desc: "Read, listen and understand", path: "/quran" },
        { icon: Star, title: "Prophet Stories", desc: "Lives of the Messengers", path: "/prophets" },
        { icon: Scroll, title: "42 Hadith", desc: "Imam Nawawi's Collection", path: "/hadith" },
        { icon: Sparkles, title: "99 Names", desc: "Asmaul Husna Explorer", path: "/asmaul-husna" },
        { icon: Target, title: "Quiz System", desc: "Test your knowledge", path: "/quiz" },
        { icon: Compass, title: "Qibla Finder", desc: "Find your direction", path: "/qibla" },
    ]

    const dailyAyah = {
        arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translationEN: "Indeed, with hardship [will be] ease.",
        transliteration: "Inna ma'al 'usri yusra",
        surahName: "Ash-Sharh",
        ayahNumber: 6
    }

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <IslamicGeometricLoader fullScreen />

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="pb-12"
        >
            {/* Hero Greeting Section */}
            <motion.div variants={itemVariants} className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <h1 className="font-headings text-3xl font-bold md:text-4xl text-text-primary text-balance">
                        Assalamu Alaikum, <span className="gradient-text-gold">{user?.name?.split(' ')[0] || 'Habibi'}</span>
                    </h1>
                    <p className="mt-2 text-text-muted flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gold-500" />
                        <span>14 Sha'ban 1446 AH</span>
                        <span className="h-1 w-1 rounded-full bg-border-subtle" />
                        <span>Monday, 23 Feb 2026</span>
                    </p>
                </div>
                <Link to="/progress" className="flex items-center gap-4">
                    <div className="manuscript-card flex items-center gap-3 px-5 py-3 border-emerald/20 hover:border-emerald/40">
                        <div className="h-3 w-3 rounded-full bg-emerald animate-pulse" />
                        <div>
                            <p className="text-[0.6rem] font-bold tracking-widest text-text-muted uppercase">Current Streak</p>
                            <p className="font-mono text-xl font-bold text-gold-300">12 Days</p>
                        </div>
                    </div>
                </Link>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
                {stats.map((stat, idx) => (
                    <Link key={idx} to={stat.path}>
                        <StatBadge {...stat} delay={idx * 0.05} />
                    </Link>
                ))}
            </div>

            {/* Daily Ayah Widget */}
            <motion.div variants={itemVariants}>
                <DailyAyahWidget ayah={dailyAyah} />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* Daily Hadith & Dua */}
                <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/hadith" className="manuscript-card p-6 group">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase">Daily Hadith</span>
                            <Scroll className="h-4 w-4 text-gold-500 transition-transform group-hover:rotate-12" />
                        </div>
                        <p className="font-arabic text-xl mb-4 leading-[2]">انما الاعمال بالنيات</p>
                        <p className="text-sm text-text-secondary italic mb-2">Actions are but by intentions...</p>
                        <p className="text-xs text-text-muted">— Sahih Bukhari 1</p>
                    </Link>
                    <Link to="/duas" className="manuscript-card p-6 group">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase">Daily Dua</span>
                            <Heart className="h-4 w-4 text-gold-500 transition-transform group-hover:scale-125" />
                        </div>
                        <p className="font-arabic text-xl mb-4 leading-[2]">رب زدني علما</p>
                        <p className="text-sm text-text-secondary italic mb-2">My Lord, increase me in knowledge.</p>
                        <p className="text-xs text-text-muted">— Surah Taha 114</p>
                    </Link>
                </motion.div>

                {/* Reading Progress */}
                <Link to="/progress" className="manuscript-card p-6 text-center group">
                    <h3 className="text-[0.6rem] font-bold tracking-[0.2em] text-gold-300 uppercase mb-6">Qur'an Progress</h3>
                    <div className="flex justify-center mb-6 transition-transform group-hover:scale-105">
                        <ProgressRing percentage={34} size={160} strokeWidth={10} />
                    </div>
                    <p className="text-xs text-text-muted">You have completed <span className="text-gold-300 font-bold">10/30</span> Juz</p>
                    <button className="mt-6 w-full btn-gold text-xs">Continue Reading</button>
                </Link>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((mod, idx) => (
                    <Link
                        key={idx}
                        to={mod.path}
                        className="manuscript-card group cursor-pointer p-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-xl bg-navy-700 p-3 text-gold-500 transition-all group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:rotate-6">
                                <mod.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-headings text-sm font-bold text-text-primary group-hover:text-gold-300 transition-colors">
                                        {mod.title}
                                    </h4>
                                    <ArrowRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold-500" />
                                </div>
                                <p className="text-[0.7rem] text-text-muted">{mod.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Motivational Quote */}
            <motion.div variants={itemVariants} className="mt-16 text-center max-w-2xl mx-auto border-l-2 border-gold-500/30 pl-8">
                <p className="text-lg italic text-text-secondary leading-relaxed">
                    "The best among you are those who learn the Qur'an and teach it."
                </p>
                <p className="mt-2 text-gold-500 text-xs font-bold tracking-widest uppercase">— Prophet Muhammad ﷺ</p>
            </motion.div>
        </motion.div>
    )
}

export default Dashboard
