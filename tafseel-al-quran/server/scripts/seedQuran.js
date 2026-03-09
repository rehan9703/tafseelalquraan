import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();
const QURAN_TEXT_PATH = path.resolve(process.cwd(), './prisma/quran-full.json');
const QURAN_INFO_PATH = path.resolve(process.cwd(), './src/database/info.json');

async function seedQuran() {
    console.log("Loading Quran text and metadata...");

    let textData, infoData;
    try {
        const textContent = await fs.readFile(QURAN_TEXT_PATH, 'utf-8');
        textData = JSON.parse(textContent);

        const infoContent = await fs.readFile(QURAN_INFO_PATH, 'utf-8');
        infoData = JSON.parse(infoContent);
    } catch (e) {
        console.error("Failed to load JSON files:", e);
        return;
    }

    const { surahs, ayahs } = textData;
    const infoChapters = infoData.chapters;

    console.log(`Found ${surahs.length} Surahs and ${ayahs.length} Ayahs in text data.`);
    console.log(`Found ${infoChapters.length} chapters in info data.`);

    console.log("Emptying existing Surah and Ayah records...");
    await prisma.ayah.deleteMany({});
    await prisma.surah.deleteMany({});

    console.log("Seeding Surahs...");
    const formattedSurahs = surahs.map((s) => ({
        id: s.number,
        number: s.number,
        nameArabic: s.nameArabic || 'Unknown',
        nameEnglish: s.nameEnglish || 'Unknown',
        nameTransliteration: s.nameTransliteration || 'Unknown',
        revelationType: s.revelationType || 'MAKKI',
        ayahCount: s.ayahCount || 0,
        juzStart: s.juzStart || 1,
        juzEnd: s.juzEnd || 1,
        orderOfRevelation: s.orderOfRevelation || s.number,
        summary: s.summary || null
    }));

    await prisma.surah.createMany({ data: formattedSurahs });
    console.log("Successfully seeded 114 Surahs.");

    // Create a map for info metadata by "surah:ayah"
    const infoMap = new Map();
    infoChapters.forEach(chapter => {
        chapter.verses.forEach(v => {
            infoMap.set(`${chapter.chapter}:${v.verse}`, v);
        });
    });

    console.log("Seeding Ayahs with metadata...");
    const formattedAyahs = ayahs.map((a) => {
        const metadata = infoMap.get(`${a.surahNumber}:${a.ayahNumber}`) || {};
        return {
            surahId: a.surahNumber,
            ayahNumber: a.ayahNumber,
            arabicText: a.arabicText || '',
            translationEN: a.translationEN || '',
            translationUR: a.translationUR || '',
            juzNumber: a.juzNumber || metadata.juz || 1,
            hizbNumber: a.hizbNumber || 1,
            page: metadata.page || 1,
            ruku: metadata.ruku || 1,
            manzil: metadata.manzil || 1,
            maqra: metadata.maqra || 1,
            sajda: metadata.sajda || false,
            audioUrl: a.audioUrl || null
        };
    });

    const CHUNK_SIZE = 500;
    for (let i = 0; i < formattedAyahs.length; i += CHUNK_SIZE) {
        const chunk = formattedAyahs.slice(i, i + CHUNK_SIZE);
        await prisma.ayah.createMany({ data: chunk });
        console.log(`Inserted Ayahs chunk ${i / CHUNK_SIZE + 1} / ${Math.ceil(formattedAyahs.length / CHUNK_SIZE)}`);
    }

    console.log("Successfully seeded all 6236 Ayahs with full metadata!");
}

seedQuran()
    .catch(e => {
        console.error("SEEDING ERROR:", e);
        if (e.code) console.error("Error Code:", e.code);
        if (e.meta) console.error("Error Meta:", e.meta);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
