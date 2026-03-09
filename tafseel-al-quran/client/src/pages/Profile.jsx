import React from 'react'
import { motion } from 'framer-motion'
import { User, Settings, Shield, Bell, Globe, Moon } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useLanguageStore } from '../store/languageStore'
import { useThemeStore } from '../store/themeStore'

const Profile = () => {
    const { user } = useAuthStore()
    const { language, setLanguage } = useLanguageStore()
    const { theme, toggleTheme } = useThemeStore()

    return (
        <div className="pb-12 max-w-4xl mx-auto">
            <div className="mb-10">
                <h1 className="font-headings text-3xl font-bold text-text-primary">User <span className="gradient-text-gold">Profile</span></h1>
                <p className="mt-1 text-text-muted text-sm">Manage your account settings and preferences</p>
            </div>

            <div className="space-y-8">
                {/* Profile Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="manuscript-card p-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="relative">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gold-700 to-gold-900 p-1">
                            <div className="h-full w-full rounded-full bg-navy-900 flex items-center justify-center overflow-hidden">
                                <User className="h-16 w-16 text-gold-500" />
                            </div>
                        </div>
                        <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full bg-emerald border-4 border-navy-900" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-text-primary mb-1">{user?.name || 'Habibi'}</h2>
                        <p className="text-text-muted mb-4">{user?.email}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="px-3 py-1 rounded-lg bg-navy-700 text-[0.6rem] font-bold text-gold-300 uppercase tracking-widest border border-gold-500/20">
                                Level 12 Scholar
                            </span>
                            <span className="px-3 py-1 rounded-lg bg-emerald/10 text-[0.6rem] font-bold text-emerald uppercase tracking-widest border border-emerald/20">
                                Verified Account
                            </span>
                        </div>
                    </div>

                    <button className="btn-gold h-12 px-8 text-xs">Edit Profile</button>
                </motion.div>

                {/* Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="manuscript-card p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Globe className="h-5 w-5 text-gold-500" />
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Language Settings</h3>
                        </div>
                        <div className="space-y-4">
                            {['EN', 'UR', 'AR', 'HI'].map(l => (
                                <button
                                    key={l}
                                    onClick={() => setLanguage(l)}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${language === l ? 'bg-gold-500/10 border-gold-500 text-gold-300' : 'bg-navy-900 border-border-subtle text-text-muted hover:border-gold-500/30'}`}
                                >
                                    <span className="font-bold">{l === 'EN' ? 'English' : l === 'UR' ? 'Urdu' : l === 'AR' ? 'Arabic' : 'Hindi'}</span>
                                    {language === l && <div className="h-2 w-2 rounded-full bg-gold-500" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="manuscript-card p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Moon className="h-5 w-5 text-gold-500" />
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Display Theme</h3>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className="w-full h-14 rounded-2xl bg-navy-900 border border-gold-500/20 flex items-center justify-between px-6 mb-8 hover:bg-navy-800 transition-all"
                        >
                            <span className="text-sm font-bold text-text-secondary">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-gold-500' : 'bg-navy-700'}`}>
                                <div className={`h-4 w-4 rounded-full bg-navy-900 transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`} />
                            </div>
                        </button>

                        <div className="flex items-center gap-4 mb-6">
                            <Shield className="h-5 w-5 text-gold-500" />
                            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest">Security</h3>
                        </div>
                        <button className="w-full text-left p-4 rounded-xl bg-navy-900 border border-border-subtle text-text-muted text-xs font-bold hover:text-gold-300">
                            Change Password
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Profile
