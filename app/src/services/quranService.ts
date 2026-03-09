import localSurahs from '@/data/quranComplete';
import { sampleAyahs as localAyahs } from '@/data/quran';
import { api } from './api';

// Type definitions
export interface Surah {
    id: number;
    number: number;
    nameArabic: string;
    nameEnglish: string;
    nameTransliteration: string;
    revelationType: 'MAKKI' | 'MADANI';
    ayahCount: number;
    juzStart: number;
    juzEnd: number;
    orderOfRevelation: number;
    summary?: string;
    virtues?: string;
    summaryHinglish?: string;
    audio?: any; // To hold the full audio block from the new API
    verses?: Ayah[]; // To potentially hold the exact verse list
}

export interface Ayah {
    id: string;
    surahId: number;
    ayahNumber: number;
    arabicText: string;
    translationEN?: string;
    translationUR?: string;
    translationAR?: string;
    translationHinglish?: string;
    tafseerEN?: string;
    tafseerUR?: string;
    tafseerAR?: string;
    transliteration?: string;
    juzNumber: number;
    hizbNumber: number;
    audioUrl?: string;
}

export interface SurahResponse {
    success: boolean;
    data?: {
        surahs: Surah[];
        pagination?: {
            page: number;
            limit: number;
            total: number;
            pages: number;
        };
    };
    error?: string;
}

export interface AyahResponse {
    success: boolean;
    data?: Ayah[];
    error?: string;
}

// Map Multilingual Al-Quran API surah data to our Surah interface
// Mapping is now handled by the backend quranApi.js

// Quran Service routed through the local backend
export const quranService = {
    async getAllSurahs(params?: { juz?: number; revelationType?: string; lang?: string }): Promise<SurahResponse> {
        try {
            const queryParams = new URLSearchParams();
            if (params?.juz) queryParams.append('juz', params.juz.toString());
            if (params?.revelationType) queryParams.append('revelationType', params.revelationType);
            if (params?.lang) queryParams.append('lang', params.lang);

            const response = await api.get(`/quran/surahs?${queryParams.toString()}`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            return {
                success: true,
                data: response.data.data
            };
        } catch (error: any) {
            console.warn('Multilingual API failed, using local data', error);
            let filteredSurahs = [...localSurahs];
            if (params?.juz) {
                filteredSurahs = filteredSurahs.filter(s => s.juzStart <= params.juz! && s.juzEnd >= params.juz!);
            }
            if (params?.revelationType) {
                filteredSurahs = filteredSurahs.filter(s => s.revelationType === params.revelationType?.toUpperCase());
            }
            return {
                success: true,
                data: {
                    surahs: filteredSurahs as unknown as Surah[],
                    pagination: { page: 1, limit: filteredSurahs.length, total: filteredSurahs.length, pages: 1 }
                }
            };
        }
    },

    async getSurah(surahId: number, lang: string = 'en'): Promise<{ success: boolean; data?: Surah; error?: string }> {
        try {
            const response = await api.get(`/quran/surahs/${surahId}?lang=${lang}`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            return { success: true, data: response.data.data as Surah };
        } catch (error: any) {
            console.warn(`Local API failed for surah ${surahId}, using local fallback data`);
            const surah = localSurahs.find(s => s.number === surahId);
            if (!surah) return { success: false, error: 'Surah not found' };
            return { success: true, data: surah as unknown as Surah };
        }
    },

    async getAyahs(surahId: number, lang: string = 'en'): Promise<AyahResponse> {
        try {
            const response = await api.get(`/quran/surahs/${surahId}/ayahs?lang=${lang}`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            return { success: true, data: response.data.data as Ayah[] };
        } catch (error: any) {
            console.warn(`API failed for surah ${surahId}, using local data`);
            const ayahs = localAyahs[surahId];
            if (!ayahs) return { success: true, data: [] };
            return { success: true, data: ayahs as unknown as Ayah[] };
        }
    },

    async getAyah(verseKey: string, lang: string = 'en'): Promise<{ success: boolean; data?: Ayah; error?: string }> {
        try {
            const response = await api.get(`/quran/ayahs/${verseKey}?lang=${lang}`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            return { success: true, data: response.data.data as Ayah };
        } catch (error: any) {
            const [surahId, ayahNum] = verseKey.split(':').map(Number);
            const ayahs = localAyahs[surahId];
            if (!ayahs) return { success: false, error: 'Ayah not found' };
            const ayah = ayahs.find((a: any) => a.ayahNumber === ayahNum);
            if (!ayah) return { success: false, error: 'Ayah not found' };
            return { success: true, data: ayah as unknown as Ayah };
        }
    },

    async getJuz(juzNumber: number): Promise<SurahResponse> {
        try {
            const response = await api.get(`/quran/juz/${juzNumber}/surahs`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            // Backend returns list of surahs directly in data for this endpoint usually, 
            // but let's check the response format. 
            // Based on my refactor: successResponse(res, surahs.map(mapSurah));
            // So response.data.data is the array of surahs.
            const surahs = response.data.data;
            return {
                success: true,
                data: {
                    surahs: surahs as Surah[],
                    pagination: { page: 1, limit: surahs.length, total: surahs.length, pages: 1 },
                },
            };
        } catch (error: any) {
            console.warn(`API failed for juz ${juzNumber}, using local mapping`);
            const surahsInJuz = localSurahs.filter(s => s.juzStart <= juzNumber && s.juzEnd >= juzNumber);
            return {
                success: true,
                data: {
                    surahs: surahsInJuz as unknown as Surah[],
                    pagination: { page: 1, limit: surahsInJuz.length, total: surahsInJuz.length, pages: 1 },
                },
            };
        }
    },

    async searchQuran(query: string, lang: string = 'en'): Promise<{ success: boolean; data?: Ayah[]; error?: string }> {
        try {
            const response = await api.get(`/quran/search?q=${encodeURIComponent(query)}&lang=${lang}`);
            if (!response.data || !response.data.success) throw new Error('API fetch failed');

            // Backend returns { results, total, query }
            return { success: true, data: response.data.data.results as Ayah[] };
        } catch (error: any) {
            // Local fallback
            const results: Ayah[] = [];
            const queryLower = query.toLowerCase();

            for (const surahId of Object.keys(localAyahs)) {
                // @ts-ignore
                const ayahs = localAyahs[parseInt(surahId)];
                if (!ayahs) continue;
                for (const ayah of ayahs) {
                    if (
                        ayah.arabicText?.toLowerCase().includes(queryLower) ||
                        ayah.translationEN?.toLowerCase().includes(queryLower)
                    ) {
                        results.push(ayah as unknown as Ayah);
                    }
                }
            }

            return { success: true, data: results };
        }
    },

    async getLanguages(): Promise<{ success: boolean; data?: any[]; error?: string }> {
        try {
            const response = await api.get('/quran/languages');
            if (response.data && response.data.success) {
                return { success: true, data: response.data.data };
            }
            throw new Error('API failed');
        } catch (e) {
            return { success: true, data: [{ name: 'English', code: 'en' }, { name: 'Urdu', code: 'ur' }] };
        }
    },

    async getDailyAyah(): Promise<{ success: boolean; data?: Surah; error?: string }> {
        try {
            const response = await api.get('/quran/daily');
            if (!response.data || !response.data.success) throw new Error('API fetch failed');
            return { success: true, data: response.data.data as Surah };
        } catch (error: any) {
            const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
            return { success: true, data: localSurahs[dayOfYear % localSurahs.length] as unknown as Surah };
        }
    }
};

export default quranService;
