import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkData() {
    try {
        const surahCount = await prisma.surah.count();
        const ayahCount = await prisma.ayah.count();
        const hadithCount = await prisma.hadith.count();

        console.log('--- DATABASE STATUS ---');
        console.log(`Surahs: ${surahCount}`);
        console.log(`Ayahs: ${ayahCount}`);
        console.log(`Hadiths: ${hadithCount}`);

        if (surahCount === 0 || hadithCount === 0) {
            console.log('WARNING: Database appears to be empty or partially seeded.');
        } else {
            console.log('SUCCESS: Database contains records.');
        }

        if (surahCount > 0) {
            const firstSurah = await prisma.surah.findFirst({ orderBy: { number: 'asc' } });
            console.log(`First Surah in DB: ${firstSurah.nameEnglish} (Number: ${firstSurah.number})`);
        }

    } catch (error) {
        console.error('ERROR during data check:', error);
    } finally {
        await prisma.$disconnect();
    }
}

checkData();
