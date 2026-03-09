import { useState, useEffect } from 'react'
import { quranApi } from '../services/api'

export const useQuran = (filters = {}) => {
    const [surahs, setSurahs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSurahs = async () => {
            try {
                setLoading(true)
                const res = await quranApi.getSurahs({ lang: filters.lang || 'en', limit: 114 })
                if (res.data) {
                    let surahList = res.data.surahs || res.data;
                    if (Array.isArray(surahList)) {
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
                    }
                } else {
                    throw new Error('Failed to fetch surahs')
                }
            } catch (err) {
                console.error("useQuran error:", err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchSurahs()
    }, [JSON.stringify(filters)])

    return { surahs, loading, error }
}

export const useSurah = (id, language = 'EN') => {
    const [surah, setSurah] = useState(null)
    const [ayahs, setAyahs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return

        const fetchSurah = async () => {
            try {
                setLoading(true)

                // Fetch Surah details directly from external API
                const surahRes = await quranApi.getSurah(id, language.toLowerCase())
                const ayahsRes = await quranApi.getAyahs(id, language.toLowerCase())
                let surahData = surahRes.data?.data || surahRes.data || {}
                const mappedSurah = {
                    id: surahData.id,
                    number: surahData.id,
                    nameArabic: surahData.name,
                    nameEnglish: surahData.nameEnglish || surahData.translation || '',
                    nameTransliteration: surahData.nameTransliteration || surahData.transliteration || '',
                    revelationType: surahData.revelationType ? surahData.revelationType.toUpperCase() : (surahData.type ? surahData.type.toUpperCase() : 'MAKKI'),
                    ayahCount: surahData.ayahCount || surahData.total_verses,
                    audio: surahData.audio || {}
                }
                setSurah(mappedSurah)

                // Verses are fetched separately
                let ayahsData = ayahsRes.data?.data || ayahsRes.data || surahData.verses || [];

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
                console.error("useSurah error:", err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchSurah()
    }, [id, language])

    return { surah, ayahs, loading, error }
}

export const useQuranSearch = (query, language = 'en') => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!query) {
            setResults([])
            return
        }

        const fetchSearch = async () => {
            try {
                setLoading(true)
                const res = await quranApi.search(query, language.toLowerCase())
                let rawResults = res.data?.results || [];

                const mappedResults = [];
                rawResults.forEach(r => {
                    const surah = r.surah;
                    if (r.verses && Array.isArray(r.verses)) {
                        r.verses.forEach(v => {
                            mappedResults.push({
                                id: `${surah.id}:${v.id}`,
                                surahId: surah.id,
                                ayahNumber: v.id,
                                arabicText: v.text,
                                translation: v.translation || '',
                                surahName: surah.name || `Surah ${surah.id}`
                            });
                        });
                    }
                });

                setResults(mappedResults)
            } catch (err) {
                console.error("useQuranSearch error:", err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            fetchSearch()
        }, 300)

        return () => clearTimeout(timer)
    }, [query, language])

    return { results, loading, error }
}

export const useQuranLanguages = () => {
    const [languages, setLanguages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                setLoading(true)
                const res = await quranApi.getLanguages()
                let langData = res.data?.languages || res.data || []

                if (Array.isArray(langData) && langData.length > 0) {
                    // Map API available_languages to our UI format
                    const mappedLanguages = langData.map(l => ({
                        name: l.name || l.nativeName,
                        code: l.code,
                        direction: l.direction || 'ltr'
                    }))
                    setLanguages(mappedLanguages)
                } else {
                    // Fallback
                    setLanguages([
                        { name: 'English', code: 'en', direction: 'ltr' },
                        { name: 'Urdu', code: 'ur', direction: 'rtl' }
                    ])
                }
            } catch (err) {
                console.error("useQuranLanguages error:", err)
                setError(err)
                setLanguages([
                    { name: 'English', code: 'en', direction: 'ltr' },
                    { name: 'Urdu', code: 'ur', direction: 'rtl' }
                ])
            } finally {
                setLoading(false)
            }
        }
        fetchLanguages()
    }, [])

    return { languages, loading, error }
}

