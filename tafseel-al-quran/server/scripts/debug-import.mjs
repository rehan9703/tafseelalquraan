import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient({ log: ['error'] });

const raw = fs.readFileSync('./prisma/quran-full.json', 'utf8');
const { surahs, ayahs } = JSON.parse(raw);
console.log('Surahs:', surahs.length, '  Ayahs:', ayahs.length);

const s = surahs[0];
console.log('First surah keys:', JSON.stringify(s, null, 2));

try {
    // Test upsert with explicit fields (not spread)
    const r = await prisma.surah.upsert({
        where: { number: s.number },
        update: {
            nameArabic: s.nameArabic,
            nameEnglish: s.nameEnglish,
            nameTransliteration: s.nameTransliteration,
            revelationType: s.revelationType,
            ayahCount: s.ayahCount,
            juzStart: s.juzStart,
            juzEnd: s.juzEnd,
            orderOfRevelation: s.orderOfRevelation,
            summary: s.summary || null,
        },
        create: {
            number: s.number,
            nameArabic: s.nameArabic,
            nameEnglish: s.nameEnglish,
            nameTransliteration: s.nameTransliteration,
            revelationType: s.revelationType,
            ayahCount: s.ayahCount,
            juzStart: s.juzStart,
            juzEnd: s.juzEnd,
            orderOfRevelation: s.orderOfRevelation,
            summary: s.summary || null,
        },
    });
    console.log('✅ Surah upsert OK, id=', r.id);
} catch (e) {
    console.error('❌ Surah upsert FAILED:', e.message);
}

// Test ayah insert
const a = ayahs[0];
console.log('\nFirst ayah:', JSON.stringify(a, null, 2));

try {
    const surah = await prisma.surah.findFirst({ where: { number: a.surahNumber } });
    if (!surah) throw new Error('Surah not found for surahNumber=' + a.surahNumber);

    const exist = await prisma.ayah.findFirst({ where: { surahId: surah.id, ayahNumber: a.ayahNumber } });
    if (!exist) {
        await prisma.ayah.create({
            data: {
                surahId: surah.id,
                ayahNumber: a.ayahNumber,
                arabicText: a.arabicText || '',
                translationEN: a.translationEN || '',
                juzNumber: a.juzNumber || 1,
                hizbNumber: a.hizbNumber || 1,
            }
        });
        console.log('✅ Ayah create OK');
    } else {
        console.log('✅ Ayah already exists');
    }
} catch (e) {
    console.error('❌ Ayah create FAILED:', e.message);
}

await prisma.$disconnect();
