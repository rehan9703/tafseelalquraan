/**
 * import-quran-full.js
 * ─────────────────────────────────────────────────────────────────
 * Imports ALL 114 Surahs + ALL 6,236 Ayahs from prisma/quran-full.json
 * into the SQLite database via Prisma.
 *
 * Usage:  node scripts/import-quran-full.js
 * ─────────────────────────────────────────────────────────────────
 */

import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient({ log: ['error'] });
const BATCH_SIZE = 100;

async function main() {
    console.log('📖  Loading quran-full.json …');
    const jsonPath = path.join(__dirname, '../prisma/quran-full.json');
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(raw);
    const surahs = data.surahs;
    const ayahs = data.ayahs;

    console.log(`   Surahs in file : ${surahs.length}`);
    console.log(`   Ayahs  in file : ${ayahs.length}`);

    // ─── 1. Upsert ALL Surahs ─────────────────────────────────────
    console.log('\n📚  Upserting surahs …');
    let okSurahs = 0, failSurahs = 0;
    for (const s of surahs) {
        try {
            await prisma.surah.upsert({
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
            okSurahs++;
        } catch (e) {
            failSurahs++;
            console.error(`\n  ❌ Surah ${s.number} failed: ${e.message}`);
        }
        if (okSurahs % 20 === 0) process.stdout.write('.');
    }
    console.log(`\n✅  Surahs: ${okSurahs} ok, ${failSurahs} failed`);

    // ─── 2. Build surah-number → DB id map ────────────────────────
    const surahRows = await prisma.surah.findMany({ select: { id: true, number: true } });
    const surahMap = {};
    for (const r of surahRows) surahMap[r.number] = r.id;

    // ─── 3. Delete existing ayahs surah-by-surah (avoids FK issues)
    console.log('\n🗑️   Clearing existing ayahs …');
    let deletedTotal = 0;
    for (const surahId of Object.values(surahMap)) {
        const del = await prisma.ayah.deleteMany({ where: { surahId } });
        deletedTotal += del.count;
    }
    console.log(`   Deleted ${deletedTotal} existing ayahs`);

    // ─── 4. Insert ayahs in batches ───────────────────────────────
    console.log(`\n📝  Inserting ${ayahs.length} ayahs in batches of ${BATCH_SIZE} …`);
    let totalInserted = 0, skipped = 0;

    for (let i = 0; i < ayahs.length; i += BATCH_SIZE) {
        const batch = ayahs.slice(i, i + BATCH_SIZE);
        const records = [];

        for (const a of batch) {
            const surahId = surahMap[a.surahNumber];
            if (!surahId) { skipped++; continue; }
            records.push({
                surahId,
                ayahNumber: a.ayahNumber,
                arabicText: a.arabicText || '',
                translationEN: a.translationEN || '',
                translationUR: a.translationUR || null,
                juzNumber: a.juzNumber || 1,
                hizbNumber: a.hizbNumber || 1,
                page: a.page || 1,
                ruku: a.ruku || 1,
                manzil: a.manzil || 1,
                maqra: a.maqra || 1,
                sajda: a.sajda || false,
            });
        }

        if (records.length > 0) {
            try {
                // Delete existing ayahs for this batch to ensure clean insert if not deleted per surah
                await prisma.ayah.createMany({ data: records });
                totalInserted += records.length;
            } catch (e) {
                // Fallback: insert one by one
                for (const r of records) {
                    try {
                        await prisma.ayah.create({ data: r });
                        totalInserted++;
                    } catch (_) { skipped++; }
                }
            }
        }

        const pct = Math.min(100, Math.round(((i + BATCH_SIZE) / ayahs.length) * 100));
        process.stdout.write(`\r   Progress: ${pct}%  (${totalInserted} inserted, ${skipped} skipped)  `);
    }
    console.log('\n');

    // ─── 5. Final count ───────────────────────────────────────────
    const finalSurahs = await prisma.surah.count();
    const finalAyahs = await prisma.ayah.count();
    console.log('📊  DATABASE TOTALS:');
    console.log(`   Surahs : ${finalSurahs}`);
    console.log(`   Ayahs  : ${finalAyahs}`);
    console.log('\n🎉  Quran import complete!');
}

main()
    .catch((e) => {
        console.error('\n❌  Import FAILED:', e.message || e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
