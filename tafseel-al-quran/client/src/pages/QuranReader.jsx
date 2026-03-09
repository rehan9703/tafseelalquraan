import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search, BookOpen, Play, Pause, Bookmark,
    Share2, ChevronLeft, Type, Filter,
    Volume2, Download, Info, Zap, List
} from 'lucide-react'
import { quranApi } from '../services/api'
import { Howl } from 'howler'
import IslamicGeometricLoader from '../components/IslamicGeometricLoader'
import AyahCard from '../components/AyahCard'

export default function QuranReader() {
    const { surahId } = useParams()
    const navigate = useNavigate()

    const [surahs, setSurahs] = useState([])
    const [selectedSurah, setSelectedSurah] = useState(null)
    const [ayahs, setAyahs] = useState([])
    const [loading, setLoading] = useState(true)
    const [ayahLoading, setAyahLoading] = useState(false)
    const [playingId, setPlayingId] = useState(null)
    const [fontSize, setFontSize] = useState(24)
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

    useEffect(() => {
        quranApi.getSurahs()
            .then(r => {
                let surahList = r.data.surahs || r.data || [];
                const mappedSurahs = surahList.map(s => ({
                    id: s.id,
                    number: s.id,
                    nameArabic: s.name,
                    nameEnglish: s.translation,
                    nameTransliteration: s.transliteration,
                    revelationType: s.type ? s.type.toUpperCase() : 'MAKKI',
                    ayahCount: s.total_verses,
                }))
                setSurahs(mappedSurahs)
            })
            .catch(err => console.error('Load Surahs error:', err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        if (surahId) {
            loadSurah(surahId)
        } else {
            setSelectedSurah(null)
            setAyahs([])
        }
    }, [surahId])

    const loadSurah = async (id) => {
        setAyahLoading(true)
        try {
            const sRes = await quranApi.getSurah(id, 'en')
            const aRes = await quranApi.getAyahs(id, 'en')
            let surahData = sRes.data?.data || sRes.data || {}

            const mappedSurah = {
                id: surahData.id,
                number: surahData.id,
                nameArabic: surahData.name,
                nameEnglish: surahData.nameEnglish || surahData.translation || '',
                nameTransliteration: surahData.nameTransliteration || surahData.transliteration || '',
                revelationType: surahData.revelationType ? surahData.revelationType.toUpperCase() : (surahData.type ? surahData.type.toUpperCase() : 'MAKKI'),
                ayahCount: surahData.ayahCount || surahData.total_verses,
            }
            setSelectedSurah(mappedSurah)

            let ayahsData = aRes.data?.data || aRes.data || surahData.verses || [];
            if (Array.isArray(ayahsData)) {
                const mappedAyahs = ayahsData.map(v => {
                    const ayahNum = v.ayahNumber || v.verse || (typeof v.id === 'string' ? v.id.split(':').pop() : v.id);
                    const sId = String(mappedSurah.id).padStart(3, '0');
                    const aId = String(ayahNum).padStart(3, '0');
                    const computedAudioUrl = `https://everyayah.com/data/Alafasy_128kbps/${sId}${aId}.mp3`;

                    return {
                        id: v.id || `${mappedSurah.id}:${ayahNum}`,
                        surahId: v.surahId || mappedSurah.id,
                        ayahNumber: ayahNum,
                        arabicText: v.arabicText || v.text || '',
                        translationEN: v.translationEN || v.translation || '',
                        translationUR: v.translationUR || '',
                        transliteration: v.transliteration || '',
                        juzNumber: v.juzNumber || v.juz || null,
                        audioUrl: v.audioUrl || computedAudioUrl
                    }
                })
                setAyahs(mappedAyahs)
            }
        } catch (err) {
            console.error('Load Surah error:', err)
        } finally {
            setAyahLoading(false)
        }
    }

    if (loading) return <IslamicGeometricLoader fullScreen />

    return (
        <div className="pb-24">
            {!surahId ? (
                <div className="space-y-8">
                    <div className="mb-12 text-center">
                        <h1 className="font-headings text-3xl font-bold text-text-primary">Tafseer <span className="gradient-text-gold">Reader</span></h1>
                        <p className="mt-2 text-text-muted text-sm italic">Deep understanding of the Sacred Word</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {surahs.map((s, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={s.id}
                                onClick={() => navigate(`/tafseer/${s.id}`)}
                                className="manuscript-card p-6 flex items-center justify-between cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-center text-gold-500 font-bold font-mono text-xs">
                                        {s.number}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-text-primary group-hover:text-gold-300 transition-colors">
                                            {s.nameTransliteration}
                                        </h3>
                                        <p className="text-[10px] text-text-muted uppercase tracking-widest mt-0.5">
                                            {s.revelationType} • {s.ayahCount} Ayahs
                                        </p>
                                    </div>
                                </div>
                                <p className="font-arabic text-xl text-text-arabic group-hover:scale-110 transition-transform">
                                    {s.nameArabic}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto">
                    {/* Return Link */}
                    <button
                        onClick={() => navigate('/tafseer')}
                        className="mb-8 flex items-center gap-2 text-[0.65rem] font-bold text-text-muted hover:text-gold-300 uppercase tracking-widest transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" /> Back to Tafseer List
                    </button>

                    {selectedSurah && (
                        <div className="space-y-12">
                            {/* Surah Detail Header */}
                            <div className="manuscript-card p-12 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-hero pointer-events-none opacity-50" />
                                <div className="relative z-10">
                                    <div className="mb-4 text-gold-500 font-mono text-sm font-bold tracking-[0.4em]">SURAH NO. {selectedSurah.number}</div>
                                    <h1 className="font-arabic text-6xl text-text-arabic mb-6 leading-relaxed">{selectedSurah.nameArabic}</h1>
                                    <h2 className="font-headings text-3xl font-bold text-gold-300 mb-2">{selectedSurah.nameTransliteration}</h2>
                                    <p className="text-text-muted tracking-[0.2em] uppercase text-xs mb-8 italic">
                                        {selectedSurah.nameEnglish} • {selectedSurah.revelationType} • {selectedSurah.ayahCount} Verses
                                    </p>
                                </div>
                            </div>

                            {/* Bismillah */}
                            {selectedSurah.number !== 1 && selectedSurah.number !== 9 && (
                                <div className="text-center py-8">
                                    <p className="font-arabic text-4xl text-text-arabic opacity-80">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                                </div>
                            )}

                            {/* Ayah Content */}
                            <div className="space-y-6">
                                {ayahLoading ? (
                                    <div className="py-20 flex flex-col items-center opacity-50">
                                        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mb-4" />
                                        <p className="text-[0.6rem] font-bold uppercase tracking-widest">Opening Verses...</p>
                                    </div>
                                ) : (
                                    ayahs.map((ayah, index) => (
                                        <div id={`ayah-${ayah.id}`} key={ayah.id}>
                                            <AyahCard
                                                ayah={{ ...ayah, surahNumber: selectedSurah.number }}
                                                isPlaying={playingId === ayah.id}
                                                onPlay={() => playAudio(ayah.id, index)}
                                                isBookmarked={false}
                                                onBookmark={() => { }}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>
            )}

            {/* Sticky Reader Controls */}
            {surahId && (
                <div className="fixed bottom-0 left-0 lg:left-[280px] right-0 z-40 bg-obsidian/90 backdrop-blur-xl border-t border-border-subtle p-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <button onClick={() => setFontSize(f => Math.max(16, f - 2))} className="p-2 text-text-muted hover:text-gold-300">
                                    <Type className="h-4 w-4 scale-75" />
                                </button>
                                <span className="text-[0.6rem] font-bold text-text-muted uppercase tracking-widest">{fontSize}px</span>
                                <button onClick={() => setFontSize(f => Math.min(48, f + 2))} className="p-2 text-text-muted hover:text-gold-300">
                                    <Type className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="h-4 w-[1px] bg-border-subtle" />
                            <button
                                onClick={() => {
                                    if (ayahs.length > 0) {
                                        playAudio(ayahs[0].id, 0)
                                    }
                                }}
                                className="flex items-center gap-2 text-[0.65rem] font-bold text-gold-500 hover:text-gold-300 uppercase tracking-widest">
                                <PlayerIcon className="h-4 w-4" /> {playingId ? "Reading..." : "Full Recitation"}
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-text-muted hover:text-gold-300 transition-colors">
                                <Download className="h-5 w-5" />
                            </button>
                            <button className="text-text-muted hover:text-gold-300 transition-colors">
                                <SettingsIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function PlayerIcon({ className }) {
    return <Volume2 className={className} />
}

function SettingsIcon({ className }) {
    return <Filter className={className} />
}
