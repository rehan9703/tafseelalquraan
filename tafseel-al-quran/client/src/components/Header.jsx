import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, Bookmark, Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { useLanguageStore } from '../store/languageStore'
import { useThemeStore } from '../store/themeStore'
import { useBookmarkStore } from '../store/bookmarkStore'

const Header = ({ title, onMenuClick }) => {
    const { language, setLanguage } = useLanguageStore()
    const { theme, toggleTheme } = useThemeStore()
    const { bookmarks } = useBookmarkStore()
    const [searchFocused, setSearchFocused] = useState(false)
    const navigate = useNavigate()

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border-subtle bg-obsidian/80 px-6 backdrop-blur-xl">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 text-text-primary hover:bg-navy-700 rounded-lg"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <motion.h2
                    key={title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-headings text-lg font-bold text-gold-300 hidden sm:block"
                >
                    {title}
                </motion.h2>
            </div>

            {/* Search Bar */}
            <div className="relative flex flex-1 items-center justify-center px-4 max-w-xl">
                <motion.div
                    initial={false}
                    animate={{ width: searchFocused ? '100%' : '80%' }}
                    className="relative group"
                >
                    <Search className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${searchFocused ? 'text-gold-500' : 'text-text-muted'}`} />
                    <input
                        type="text"
                        placeholder="Search Ayahs, Hadith, Du'as..."
                        onFocus={() => { setSearchFocused(true); navigate('/search'); }}
                        onBlur={() => setSearchFocused(false)}
                        className="w-full rounded-2xl bg-navy-900/50 border border-border-subtle py-2.5 pl-11 pr-4 text-sm text-text-primary transition-all focus:bg-navy-900 focus:border-gold-500/50 outline-none"
                    />
                </motion.div>
            </div>

            <div className="flex items-center gap-2">
                {/* Language Switcher */}
                <div className="hidden md:flex items-center mr-2 rounded-xl bg-navy-900/50 border border-border-subtle p-1">
                    {['EN', 'UR', 'AR', 'HI'].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={`px-3 py-1 text-[0.65rem] font-bold rounded-lg transition-all ${language === lang ? 'bg-gold-500 text-navy-900' : 'text-text-muted hover:text-text-secondary'}`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>

                <button
                    onClick={toggleTheme}
                    className="p-2 text-text-muted hover:text-gold-300 hover:bg-navy-700 rounded-xl transition-all"
                >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                <Link to="/progress" className="relative p-2 text-text-muted hover:text-gold-300 hover:bg-navy-700 rounded-xl transition-all">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-crimson border-2 border-obsidian" />
                </Link>

                <Link to="/bookmarks" className="relative p-2 text-text-muted hover:text-gold-300 hover:bg-navy-700 rounded-xl transition-all">
                    <Bookmark className="h-5 w-5" />
                    {bookmarks.length > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-navy-900">
                            {bookmarks.length}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    )
}

export default Header
