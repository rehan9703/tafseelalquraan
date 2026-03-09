import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    LayoutDashboard, TrendingUp, Bookmark, Search,
    BookOpen, Layers, Eye, Clock, Star, Scroll,
    Sparkles, Moon, Heart, AlignCenter, Calendar,
    Compass, Calculator, FlaskConical, Target,
    LogOut, User
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useBookmarkStore } from '../store/bookmarkStore'

const NAV_GROUPS = [
    {
        label: "OVERVIEW",
        items: [
            { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
            { icon: TrendingUp, label: "My Progress", path: "/progress" },
            { icon: Bookmark, label: "Bookmarks", path: "/bookmarks" },
            { icon: Search, label: "Search", path: "/search" }
        ]
    },
    {
        label: "QUR'AN",
        items: [
            { icon: BookOpen, label: "Qur'an Explorer", path: "/quran" },
            { icon: Layers, label: "30 Juz Dashboard", path: "/juz" },
            { icon: Eye, label: "Tafseer Reader", path: "/tafseer" }
        ]
    },
    {
        label: "KNOWLEDGE",
        items: [
            { icon: Clock, label: "Islamic History", path: "/history" },
            { icon: Star, label: "Prophets", path: "/prophets" },
            { icon: Scroll, label: "Classical Hadith", path: "/hadith" },
            { icon: Sparkles, label: "99 Names of Allah", path: "/asmaul-husna" },
            { icon: Moon, label: "Prophet Muhammad ﷺ", path: "/prophet-muhammad" }
        ]
    },
    {
        label: "WORSHIP",
        items: [
            { icon: Heart, label: "Du'as", path: "/duas" },
            { icon: AlignCenter, label: "Salah Guide", path: "/salah" },
            { icon: Calendar, label: "Islamic Calendar", path: "/calendar" }
        ]
    },
    {
        label: "TOOLS",
        items: [
            { icon: Compass, label: "Qibla Finder", path: "/qibla" },
            { icon: Calculator, label: "Zakat Calculator", path: "/zakat" }
        ]
    },
    {
        label: "RESEARCH & QUIZ",
        items: [
            { icon: FlaskConical, label: "Islamic Research", path: "/research" },
            { icon: Target, label: "Quiz System", path: "/quiz" }
        ]
    }
]

const Sidebar = () => {
    const { user, logout } = useAuthStore()
    const { bookmarks } = useBookmarkStore()
    const navigate = useNavigate()

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col border-r border-border-subtle bg-gradient-to-b from-obsidian to-navy-900 lg:flex z-50">
            {/* Branding */}
            <div className="p-8">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Moon className="h-8 w-8 text-gold-500 fill-gold-500/20" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-gold-500/20 rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="gradient-text-gold font-headings text-lg font-bold">Tafseel</h1>
                        <p className="text-[0.6rem] italic tracking-widest text-text-muted uppercase">Digital Islamic Knowledge</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
                {NAV_GROUPS.map((group, idx) => (
                    <div key={idx} className="mb-6">
                        <h3 className="mb-3 px-4 text-[0.65rem] font-semibold tracking-[0.2em] text-text-muted uppercase">
                            {group.label}
                        </h3>
                        <div className="space-y-1">
                            {group.items.map((item, idy) => (
                                <NavLink
                                    key={idy}
                                    to={item.path}
                                    className={({ isActive }) => `
                    group flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-300
                    ${isActive
                                            ? 'bg-navy-700 text-gold-300 border-l-2 border-gold-500 shadow-[var(--glow-gold)]'
                                            : 'text-text-muted hover:bg-navy-700/50 hover:text-text-secondary'}
                  `}
                                >
                                    <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                    {item.label === 'Bookmarks' && bookmarks.length > 0 && (
                                        <span className="ml-auto rounded-full bg-gold-900/50 px-2 py-0.5 text-[0.6rem] text-gold-300">
                                            {bookmarks.length}
                                        </span>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* User Area */}
            <div className="border-t border-border-subtle p-6 bg-obsidian/50">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-700 to-gold-900 p-[1px]">
                        <div className="h-full w-full rounded-full bg-navy-900 flex items-center justify-center overflow-hidden">
                            {user?.avatarUrl ? (
                                <img src={user.avatarUrl} alt={user.name} className="h-full w-full object-cover" />
                            ) : (
                                <User className="h-5 w-5 text-gold-300" />
                            )}
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm font-bold text-text-primary">{user?.name || 'Habibi'}</p>
                        <p className="truncate text-[0.65rem] text-text-muted">{user?.email}</p>
                    </div>
                    <button
                        onClick={() => { logout(); navigate('/login'); }}
                        className="rounded-lg p-2 text-text-muted hover:bg-crimson/10 hover:text-crimson transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                    </button>
                </div>
                <p className="text-center text-[0.6rem] text-text-muted italic opacity-60">Sadaqah-e-Jariyah for the Ummah</p>
            </div>
        </aside>
    )
}

export default Sidebar
