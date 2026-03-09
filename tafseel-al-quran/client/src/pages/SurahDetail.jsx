import React, { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Howl } from 'howler'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Download, Music, Settings, List } from 'lucide-react'
import { useSurah, useQuranLanguages } from '../hooks/useQuran'
import AyahCard from '../components/AyahCard'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'

const SurahDetail = () => {
    const { surahId } = useParams()
    const navigate = useNavigate()
    const [lang, setLang] = useState('en')
    const { surah, ayahs, loading, error } = useSurah(surahId, lang)
    const { languages, loading: langsLoading } = useQuranLanguages()
    const [playingId, setPlayingId] = useState(null)
    const howlerRef = useRef(null)

    const stopAudio = () => {
        if (howlerRef.current) {
            howlerRef.current.pause()
            howlerRef.current.src = ''
            howlerRef.current = null
        }
    }

    const playAudio = (ayahId, index) => {
        const ayah = ayahs[index]
        if (!ayah) {
            setPlayingId(null)
            return
        }

        if (playingId === ayahId) {
            stopAudio()
            setPlayingId(null)
            return
        }

        stopAudio()
        setPlayingId(ayahId)

        const sound = new window.Audio(ayah.audioUrl)
        sound.onended = () => {
            if (index + 1 < ayahs.length) {
                playAudio(ayahs[index + 1].id, index + 1)
            } else {
                setPlayingId(null)
            }
        }

        // Add basic error handling for tracking in console
        sound.onerror = (e) => {
            console.error("Audio playback error:", e)
            setPlayingId(null)
        }

        howlerRef.current = sound
        sound.play().catch(e => {
            console.error("Audio play blocked or failed:", e)
            setPlayingId(null)
        })

        // Scroll the playing ayah into view
        setTimeout(() => {
            const ayahElement = document.getElementById(`ayah-${ayahId}`)
            if (ayahElement) {
                ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        }, 100)
    }

    useEffect(() => {
        return () => {
            stopAudio()
        }
    }, [])

    if (loading) return <IslamicGeometricLoader fullScreen />
    if (error) return <div className="text-center py-20 text-crimson">Error loading Surah. Please try again.</div>
    if (!surah) return null

    // For languages, fallback to basic ones if API not loaded or fails
    const displayLanguages = languages.length > 0
        ? languages
        : [
            { name: 'Arabic', code: 'ar' },
            { name: 'English', code: 'en' },
            { name: 'Urdu', code: 'ur' },
            { name: 'Transliteration', code: 'transliteration' }
        ]

    return (
        <div className="pb-24">
            {/* Surah Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="manuscript-card p-10 mb-10 text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

                <div className="relative z-10">
                    <button
                        onClick={() => navigate('/quran')}
                        className="absolute top-0 left-0 flex items-center gap-2 text-xs font-bold text-text-muted hover:text-gold-300 transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" /> Back to Explorer
                    </button>

                    <div className="mb-4 text-gold-500 font-mono text-sm font-bold tracking-[0.3em]">
                        SURAH • {surah.number}
                    </div>
                    <h1 className="font-arabic text-4xl lg:text-6xl text-text-arabic mb-4">{surah.nameArabic}</h1>
                    <h2 className="font-headings text-2xl font-bold text-gold-300 mb-2">{surah.nameTransliteration}</h2>
                    <p className="text-text-muted tracking-widest uppercase text-[0.7rem] mb-6">
                        {surah.nameEnglish} • {surah.revelationType} • {surah.ayahCount} Ayahs
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {displayLanguages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => setLang(l.code)}
                                className={`px-4 py-1.5 rounded-xl text-[0.6rem] font-bold tracking-widest border transition-all uppercase ${lang === l.code ? 'bg-gold-500 text-navy-900 border-gold-500 shadow-gold-strong' : 'border-border-subtle text-text-muted hover:border-gold-500/30 hover:text-text-secondary'}`}
                            >
                                {l.name}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Bismillah */}
            {surah.number !== 1 && surah.number !== 9 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center py-12"
                >
                    <p className="font-arabic text-4xl text-text-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                    <div className="h-[1px] w-24 bg-gold-500/20 mx-auto mt-6" />
                </motion.div>
            )}

            {/* Ayah List */}
            <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="popLayout">
                    {ayahs.map((ayah, index) => (
                        <div id={`ayah-${ayah.id}`} key={ayah.id}>
                            <AyahCard
                                ayah={{ ...ayah, surahNumber: surah.number }}
                                isPlaying={playingId === ayah.id}
                                onPlay={() => playAudio(ayah.id, index)}
                                isBookmarked={false} // Placeholder
                                onBookmark={() => { }} // Placeholder
                            />
                        </div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Sticky Action Bar */}
            <div className="fixed bottom-0 left-0 lg:left-[280px] right-0 z-40 bg-obsidian/90 backdrop-blur-xl border-t border-border-subtle p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-700 text-text-secondary text-xs font-bold hover:bg-navy-600 transition-colors">
                            <Download className="h-4 w-4" /> <span>Download PDF</span>
                        </button>
                        <div className="h-6 w-[1px] bg-border-subtle hidden sm:block" />
                        <div
                            onClick={() => {
                                if (ayahs.length > 0) {
                                    playAudio(ayahs[0].id, 0)
                                }
                            }}
                            className="flex items-center gap-2 text-gold-300 text-xs font-bold hidden sm:flex cursor-pointer hover:text-gold-500 transition-colors">
                            <Music className="h-4 w-4" /> <span>{playingId ? "Reading..." : "Full Audio Player"}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex flex-col items-end mr-4 hidden sm:flex">
                            <div className="h-1 w-48 bg-navy-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500" style={{ width: '15%' }} />
                            </div>
                            <span className="text-[0.6rem] text-text-muted mt-1 uppercase font-bold tracking-widest">Surah Progress: 15%</span>
                        </div>
                        <button className="p-2 text-text-muted hover:text-gold-300 transition-colors">
                            <List className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-text-muted hover:text-gold-300 transition-colors">
                            <Settings className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurahDetail
