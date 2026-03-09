import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '../database');

// ─── In-memory cache to avoid re-reading large JSON files on every request ───
const cache = new Map();

const readJSON = async (filename) => {
    if (cache.has(filename)) return cache.get(filename);
    try {
        const data = await fs.readFile(path.join(DB_PATH, filename), 'utf-8');
        const parsed = JSON.parse(data);
        cache.set(filename, parsed);
        return parsed;
    } catch (err) {
        console.error(`Failed to read ${filename}:`, err.message);
        return null;
    }
};

// Supported language editions
const LANG_MAP = {
    'en': 'quran_en.json',
    'ur': 'quran_ur.json',
    'bn': 'quran_bn.json',
    'es': 'quran_es.json',
    'fr': 'quran_fr.json',
    'sv': 'quran_sv.json',
    'tr': 'quran_tr.json',
    'zh': 'quran_zh.json',
    'transliteration': 'quran_transliteration.json',
};

const getEditionFilename = (language) => LANG_MAP[language] || 'quran_en.json';

// ─── Build a Surah → juzStart / juzEnd map from info.json ────────────────────
let juzInfoMap = null;

const getJuzInfoMap = async () => {
    if (juzInfoMap) return juzInfoMap;

    const info = await readJSON('info.json');
    juzInfoMap = {};

    if (!info || !info.chapters) return juzInfoMap;

    for (const chapter of info.chapters) {
        const juzNums = chapter.verses.map(v => v.juz).filter(Boolean);
        if (juzNums.length === 0) continue;
        juzInfoMap[chapter.chapter] = {
            juzStart: Math.min(...juzNums),
            juzEnd: Math.max(...juzNums),
        };
    }

    return juzInfoMap;
};

// Build a per-verse juz lookup: { "1:1": 1, "2:1": 1, ... }
let verseJuzMap = null;

const getVerseJuzMap = async () => {
    if (verseJuzMap) return verseJuzMap;

    const info = await readJSON('info.json');
    verseJuzMap = {};

    if (!info || !info.chapters) return verseJuzMap;

    for (const chapter of info.chapters) {
        for (const verse of chapter.verses) {
            verseJuzMap[`${chapter.chapter}:${verse.verse}`] = verse.juz;
        }
    }

    return verseJuzMap;
};

// ─── Surah data mapper ────────────────────────────────────────────────────────
const mapSurahData = (s, juzInfo) => {
    const sIdStr = String(s.id).padStart(3, '0');
    const juz = juzInfo?.[s.id] || { juzStart: 1, juzEnd: 1 };

    return {
        id: s.id,
        number: s.id,
        nameArabic: s.name,
        nameEnglish: s.translation,
        nameTransliteration: s.transliteration,
        revelationType: s.type ? s.type.toUpperCase() : 'MAKKI',
        ayahCount: s.total_verses,
        juzStart: juz.juzStart,
        juzEnd: juz.juzEnd,
        audio: {
            '1': {
                reciter: 'Mishary Alafasy',
                url: `https://server8.mp3quran.net/afs/${sIdStr}.mp3`,
            },
            '2': {
                reciter: 'Abdul Rahman Al-Sudais',
                url: `https://server11.mp3quran.net/sds/${sIdStr}.mp3`,
            },
            '3': {
                reciter: 'Saad Al-Ghamdi',
                url: `https://server7.mp3quran.net/s_gmd/${sIdStr}.mp3`,
            },
        },
    };
};

// ─── Public API functions ─────────────────────────────────────────────────────

export async function getAllSurahs(language = 'en') {
    const filename = getEditionFilename(language);
    const [data, juzInfo] = await Promise.all([readJSON(filename), getJuzInfoMap()]);
    if (!data || !Array.isArray(data)) return [];

    return data.map(s => mapSurahData(s, juzInfo));
}

export async function getSurahById(surahId, language = 'en') {
    const filename = getEditionFilename(language);
    const [data, juzInfo] = await Promise.all([readJSON(filename), getJuzInfoMap()]);
    if (!data) throw new Error(`Surah database ${filename} not found`);

    const chapter = data.find(c => c.id === parseInt(surahId));
    if (!chapter) throw new Error('Surah not found');

    return mapSurahData(chapter, juzInfo);
}

export async function getSurahAyahs(surahId, language = 'en') {
    const [dataEn, dataUr, vJuzMap] = await Promise.all([
        readJSON('quran_en.json'),
        readJSON('quran_ur.json'),
        getVerseJuzMap(),
    ]);

    if (!dataEn) return [];

    const chapterEn = dataEn.find(c => c.id === parseInt(surahId));
    if (!chapterEn || !chapterEn.verses) return [];

    const chapterUr = dataUr?.find(c => c.id === parseInt(surahId));
    const sId = String(surahId).padStart(3, '0');

    return chapterEn.verses.map(verse => {
        const aId = String(verse.id).padStart(3, '0');
        const verseUr = chapterUr?.verses?.find(v => v.id === verse.id);
        const juzNum = vJuzMap[`${surahId}:${verse.id}`] || 0;

        return {
            id: `${surahId}:${verse.id}`,
            surahId: parseInt(surahId),
            ayahNumber: verse.id,
            arabicText: verse.text || '',
            translation: verse.translation || '',
            translationEN: verse.translation || '',
            translationUR: verseUr?.translation || '',
            transliteration: verse.transliteration || '',
            juzNumber: juzNum,
            hizbNumber: 0,
            audioUrl: `https://everyayah.com/data/Alafasy_128kbps/${sId}${aId}.mp3`,
        };
    });
}

export async function getAyahByKey(verseKey, language = 'en') {
    const [surahId, ayahNum] = verseKey.split(':');
    const [dataEn, dataUr, vJuzMap] = await Promise.all([
        readJSON('quran_en.json'),
        readJSON('quran_ur.json'),
        getVerseJuzMap(),
    ]);

    const chapterEn = dataEn?.find(c => c.id === parseInt(surahId));
    const verseEn = chapterEn?.verses?.find(v => v.id === parseInt(ayahNum));

    const chapterUr = dataUr?.find(c => c.id === parseInt(surahId));
    const verseUr = chapterUr?.verses?.find(v => v.id === parseInt(ayahNum));

    if (!verseEn) return null;

    const sId = String(surahId).padStart(3, '0');
    const aId = String(ayahNum).padStart(3, '0');

    return {
        id: verseKey,
        surahId: parseInt(surahId),
        ayahNumber: parseInt(ayahNum),
        arabicText: verseEn.text || '',
        translation: verseEn.translation || '',
        translationEN: verseEn.translation || '',
        translationUR: verseUr?.translation || '',
        transliteration: verseEn.transliteration || '',
        juzNumber: vJuzMap[verseKey] || 0,
        hizbNumber: 0,
        audioUrl: `https://everyayah.com/data/Alafasy_128kbps/${sId}${aId}.mp3`,
    };
}

export async function getJuzSurahs(juzNumber) {
    const [filename, juzInfo] = ['quran_en.json', await getJuzInfoMap()];
    const data = await readJSON(filename);
    if (!data || !Array.isArray(data)) return [];

    const juzNum = parseInt(juzNumber);
    return data
        .filter(s => {
            const j = juzInfo?.[s.id];
            return j && j.juzStart <= juzNum && j.juzEnd >= juzNum;
        })
        .map(s => mapSurahData(s, juzInfo));
}

export async function searchQuran(query, language = 'en') {
    const filename = getEditionFilename(language);
    const data = await readJSON(filename);
    if (!data || !Array.isArray(data)) return [];

    const q = query.toLowerCase();
    const results = [];

    for (const surah of data) {
        if (!surah.verses) continue;
        const matches = surah.verses.filter(v =>
            (v.translation && v.translation.toLowerCase().includes(q)) ||
            (v.transliteration && v.transliteration.toLowerCase().includes(q)) ||
            (v.text && v.text.includes(query))
        );

        for (const v of matches) {
            results.push({
                id: `${surah.id}:${v.id}`,
                surahId: surah.id,
                surahName: surah.translation,
                ayahNumber: v.id,
                arabicText: v.text || '',
                translationEN: language === 'ur' ? '' : (v.translation || ''),
                translationUR: language === 'ur' ? (v.translation || '') : '',
                transliteration: v.transliteration || '',
                juzNumber: 0,
            });
            if (results.length >= 50) break;
        }
        if (results.length >= 50) break;
    }

    return results;
}

export async function getAllJuz() {
    const juzInfo = await getJuzInfoMap();

    return Array.from({ length: 30 }, (_, i) => {
        const n = i + 1;
        return { number: n, name: `Juz' ${n}` };
    });
}

export async function getLanguages() {
    return [
        { code: 'en', name: 'English', direction: 'ltr' },
        { code: 'ur', name: 'Urdu', direction: 'rtl' },
        { code: 'bn', name: 'Bengali', direction: 'ltr' },
        { code: 'es', name: 'Spanish', direction: 'ltr' },
        { code: 'fr', name: 'French', direction: 'ltr' },
        { code: 'sv', name: 'Swedish', direction: 'ltr' },
        { code: 'tr', name: 'Turkish', direction: 'ltr' },
        { code: 'zh', name: 'Chinese', direction: 'ltr' },
        { code: 'ar', name: 'Arabic', direction: 'rtl' },
    ];
}

export default {
    getAllSurahs,
    getSurahById,
    getSurahAyahs,
    getAyahByKey,
    searchQuran,
    getAllJuz,
    getJuzSurahs,
    getLanguages,
};
