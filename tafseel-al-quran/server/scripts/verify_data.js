import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function verify() {
    try {
        console.log('--- Database Verification ---');
        const surahCount = await prisma.surah.count();
        const ayahCount = await prisma.ayah.count();
        const hadithCount = await prisma.hadith.count();

        console.log(`Surahs: ${surahCount} / 114`);
        console.log(`Ayahs: ${ayahCount} / 6236`);
        console.log(`Hadiths: ${hadithCount} / ~42000`);

        const collections = await prisma.hadith.groupBy({
            by: ['collection'],
            _count: { _all: true }
        });

        console.log('\nHadith Collections Breakdown:');
        collections.forEach(c => {
            console.log(`- ${c.collection}: ${c._count._all}`);
        });

        if (surahCount === 114 && ayahCount === 6236 && hadithCount > 40000) {
            console.log('\n✅ Verification Successful: All data present.');
        } else {
            console.log('\n⚠️ Verification Partial: Some data might be missing.');
        }
    } catch (e) {
        console.error('Verification failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

verify();
