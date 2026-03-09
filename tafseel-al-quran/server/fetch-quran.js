/**
 * fetch-quran.js
 * Downloads COMPLETE Quran (all 114 surahs, all 6236 ayahs)
 * from public api.quran.com and saves to quran-full.json
 *
 * Run: node fetch-quran.js
 */
import axios from 'axios';
import fs from 'fs';

const BASE = 'https://api.quran.com/api/v4';
const delay = ms => new Promise(r => setTimeout(r, ms));

async function fetchSurah(num) {
    const [versesRes, infoRes] = await Promise.all([
        axios.get(`${BASE}/verses/by_chapter/${num}`, {
            params: {
                language: 'en',
                translations: '20',          // Sahih International
                audio: 7,
                fields: 'text_uthmani,juz_number,hizb_number,page_number',
                per_page: 300
            }
        }),
        axios.get(`${BASE}/chapters/${num}?language=en`)
    ]);
    return { info: infoRes.data.chapter, verses: versesRes.data.verses };
}

async function main() {
    console.log('📖  Fetching complete Quran from api.quran.com …');
    const result = { surahs: [], ayahs: [] };

    for (let s = 1; s <= 114; s++) {
        process.stdout.write(`  Surah ${s}/114 … `);
        let attempts = 0;
        while (attempts < 3) {
            try {
                const { info, verses } = await fetchSurah(s);
                result.surahs.push({
                    number: info.id,
                    nameArabic: info.name_arabic,
                    nameEnglish: info.name_simple,
                    nameTransliteration: info.translated_name?.name || info.name_simple,
                    revelationType: info.revelation_place?.toUpperCase() === 'MAKKAH' ? 'MAKKI' : 'MADANI',
                    ayahCount: info.verses_count,
                    juzStart: verses[0]?.juz_number || 1,
                    juzEnd: verses[verses.length - 1]?.juz_number || 1,
                    orderOfRevelation: info.revelation_order || s,
                    summary: `${info.translated_name?.name || info.name_simple} — ${info.verses_count} verses.`
                });

                for (const v of verses) {
                    const trans = v.translations?.[0]?.text || '';
                    result.ayahs.push({
                        surahNumber: s,
                        ayahNumber: v.verse_number,
                        arabicText: v.text_uthmani || '',
                        translationEN: trans.replace(/<[^>]*>/g, ''),
                        juzNumber: v.juz_number || 1,
                        hizbNumber: v.hizb_number || 1
                    });
                }
                process.stdout.write(`✅ (${verses.length} ayahs)\n`);
                break;
            } catch (e) {
                attempts++;
                process.stdout.write(`⚠️  retry ${attempts} … `);
                await delay(2000 * attempts);
            }
        }
        await delay(400); // be respectful to the API
    }

    fs.writeFileSync('./prisma/quran-full.json', JSON.stringify(result, null, 2));
    console.log(`\n✅  Done! ${result.surahs.length} surahs, ${result.ayahs.length} ayahs saved to prisma/quran-full.json`);
}

main().catch(console.error);
