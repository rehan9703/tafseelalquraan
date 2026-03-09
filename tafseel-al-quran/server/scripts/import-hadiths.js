/**
 * import-hadiths.js
 * ─────────────────────────────────────────────────────────────────
 * Fetches ALL major hadith collections from fawazahmed0/hadith-api
 * (Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasai, Ibn Majah, Malik,
 *  Nawawi 40, Hadith Qudsi) and imports them into the SQLite DB.
 *
 * The API pairs Arabic editions with English editions so we get
 * both arabicText + translationEN for every hadith.
 *
 * Usage:  node scripts/import-hadiths.js
 * ─────────────────────────────────────────────────────────────────
 */

import { PrismaClient } from '@prisma/client';
import https from 'https';

const prisma = new PrismaClient({ log: ['error'] });

const CDN = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';

// Collections to import: [collection display name, arabic edition, english edition]
const COLLECTIONS = [
    { id: 'bukhari', name: 'Sahih Bukhari', arabicEdition: 'ara-bukhari', engEdition: 'eng-bukhari', topic: 'General' },
    { id: 'muslim', name: 'Sahih Muslim', arabicEdition: 'ara-muslim', engEdition: 'eng-muslim', topic: 'General' },
    { id: 'abudawud', name: 'Sunan Abu Dawud', arabicEdition: 'ara-abudawud', engEdition: 'eng-abudawud', topic: 'General' },
    { id: 'tirmidhi', name: 'Jami Tirmidhi', arabicEdition: 'ara-tirmidhi', engEdition: 'eng-tirmidhi', topic: 'General' },
    { id: 'nasai', name: 'Sunan Nasai', arabicEdition: 'ara-nasai', engEdition: 'eng-nasai', topic: 'General' },
    { id: 'ibnmajah', name: 'Sunan Ibn Majah', arabicEdition: 'ara-ibnmajah', engEdition: 'eng-ibnmajah', topic: 'General' },
    { id: 'malik', name: 'Muwatta Malik', arabicEdition: 'ara-malik', engEdition: 'eng-malik', topic: 'General' },
    { id: 'nawawi', name: 'Forty Hadith Nawawi', arabicEdition: 'ara-nawawi', engEdition: 'eng-nawawi', topic: 'Forty Hadith' },
    { id: 'qudsi', name: 'Forty Hadith Qudsi', arabicEdition: 'ara-qudsi', engEdition: 'eng-qudsi', topic: 'Hadith Qudsi' },
];

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Fetch JSON from CDN ──────────────────────────────────────────────────────
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { timeout: 30000 }, (res) => {
            if (res.statusCode === 404) {
                resolve(null);
                return;
            }
            const chunks = [];
            res.on('data', (c) => chunks.push(c));
            res.on('end', () => {
                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
                } catch (e) {
                    reject(new Error(`JSON parse error for ${url}: ${e.message}`));
                }
            });
        })
            .on('error', reject)
            .on('timeout', () => reject(new Error(`Timeout: ${url}`)));
    });
}

// ─── Fetch with retry ─────────────────────────────────────────────────────────
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const data = await fetchJSON(url);
            return data;
        } catch (e) {
            if (i < retries - 1) {
                process.stdout.write(` [retry ${i + 1}]`);
                await delay(2000 * (i + 1));
            } else {
                throw e;
            }
        }
    }
}

// ─── Extract hadiths from edition JSON ───────────────────────────────────────
function extractHadiths(editionData) {
    if (!editionData) return [];

    // The API structure: { hadiths: { [number]: { hadithnumber, text, ... }, ... } }
    // or { hadiths: [ { hadithnumber, text, ... }, ... ] }

    const source = editionData.hadiths;
    if (!source) return [];

    if (Array.isArray(source)) {
        return source;
    }

    // Sometimes it's an object keyed by hadith number
    return Object.values(source);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
    console.log('🕌  Hadith Import Script — fawazahmed0/hadith-api');
    console.log('═'.repeat(60));

    // Clear existing hadiths - MOVED TO PER-COLLECTION
    // console.log('\n🗑️   Clearing existing hadiths from database …');
    // await prisma.hadith.deleteMany({});
    // console.log('   Done.');

    let grandTotal = 0;

    for (const col of COLLECTIONS) {
        console.log(`\n📖  Processing: ${col.name}`);

        // Check if this collection is already imported
        try {
            const count = await prisma.hadith.count({ where: { collection: col.name } });
            // Allow re-running Bukhari if it's not fully done (approx 7500-7600 records)
            if (count > 0 && !(col.name === 'Sahih Bukhari' && count < 7500)) {
                console.log(`   ⏭️  Skipping ${col.name}: already has ${count} records`);
                continue;
            }
        } catch (e) {
            console.error(`   ⚠️  Error checking ${col.name}: ${e.message}`);
        }

        // Clear this specific collection before importing
        try {
            const deleted = await prisma.hadith.deleteMany({ where: { collection: col.name } });
            console.log(`   Cleared ${deleted.count} existing records for ${col.name}`);
        } catch (e) {
            console.error(`   ⚠️  Error clearing ${col.name}: ${e.message}`);
        }

        console.log(`   Arabic  : ${col.arabicEdition}`);
        console.log(`   English : ${col.engEdition}`);

        // Fetch both Arabic and English editions
        const arabicUrl = `${CDN}/editions/${col.arabicEdition}.min.json`;
        const engUrl = `${CDN}/editions/${col.engEdition}.min.json`;

        let arabicData = null;
        let engData = null;

        try {
            process.stdout.write('   Fetching Arabic edition …');
            arabicData = await fetchWithRetry(arabicUrl);
            console.log(' ✅');
        } catch (e) {
            console.log(` ⚠️  Arabic fetch failed: ${e.message}`);
        }

        await delay(500);

        try {
            process.stdout.write('   Fetching English edition …');
            engData = await fetchWithRetry(engUrl);
            console.log(' ✅');
        } catch (e) {
            console.log(` ⚠️  English fetch failed: ${e.message}`);
        }

        if (!arabicData && !engData) {
            console.log('   ❌  Both editions failed — skipping this collection');
            continue;
        }

        const arabicHadiths = extractHadiths(arabicData);
        const engHadiths = extractHadiths(engData);

        // Build lookup maps by hadithnumber
        const arabicMap = {};
        for (const h of arabicHadiths) {
            if (h && h.hadithnumber != null) {
                arabicMap[String(h.hadithnumber)] = h;
            }
        }

        const engMap = {};
        for (const h of engHadiths) {
            if (h && h.hadithnumber != null) {
                engMap[String(h.hadithnumber)] = h;
            }
        }

        // Collect all unique hadith numbers
        const allNumbers = new Set([...Object.keys(arabicMap), ...Object.keys(engMap)]);
        console.log(`   Total unique hadiths: ${allNumbers.size}`);

        if (allNumbers.size === 0) {
            console.log('   ⚠️  No hadiths found — skipping');
            continue;
        }

        // ─── Batch-insert hadiths ───────────────────────────────────────
        const BATCH = 100;
        const numberArr = Array.from(allNumbers);
        let inserted = 0;
        let skipped = 0;

        for (let i = 0; i < numberArr.length; i += BATCH) {
            const slice = numberArr.slice(i, i + BATCH);
            const records = [];

            for (const numStr of slice) {
                const arabic = arabicMap[numStr];
                const eng = engMap[numStr];

                const hadithNumber = parseInt(numStr);
                if (isNaN(hadithNumber) || hadithNumber <= 0) {
                    skipped++;
                    continue;
                }

                // Determine the Arabic text
                const arabicText = arabic?.text?.trim() || '';
                // Determine the English translation
                const translationEN = eng?.text?.trim() || '';

                // Skip if both are empty
                if (!arabicText && !translationEN) {
                    skipped++;
                    continue;
                }

                records.push({
                    collection: col.id,
                    bookNumber: 1,
                    number: hadithNumber,
                    arabicText: arabicText || translationEN, // fallback
                    translationEN: translationEN || arabicText, // fallback
                    translationUR: null,
                    narrator: null,
                    source: col.name,
                    category: col.topic,
                    topic: col.topic,
                    grades: null,
                });
            }

            if (records.length > 0) {
                try {
                    // Use createMany with skipDuplicates in case of re-run
                    const result = await prisma.hadith.createMany({
                        data: records,
                    });
                    inserted += result.count;
                } catch (e) {
                    // If batch fails, try individual inserts
                    for (const r of records) {
                        try {
                            await prisma.hadith.upsert({
                                where: { collection_number: { collection: r.collection, number: r.number } },
                                update: r,
                                create: r,
                            });
                            inserted++;
                        } catch (err) {
                            skipped++;
                        }
                    }
                }
            }

            const pct = Math.round(((i + BATCH) / numberArr.length) * 100);
            process.stdout.write(`\r   Inserting: ${Math.min(pct, 100)}%  (${inserted} inserted, ${skipped} skipped)  `);
        }

        console.log(`\n   ✅  ${col.name}: ${inserted} hadiths imported`);
        grandTotal += inserted;

        // Be respectful to CDN
        await delay(1000);
    }

    // ─── Final count ──────────────────────────────────────────────────
    const finalCount = await prisma.hadith.count();
    console.log('\n' + '═'.repeat(60));
    console.log(`📊  FINAL DATABASE COUNT: ${finalCount} hadiths`);
    console.log(`🎉  Import complete! Grand total inserted: ${grandTotal}`);
}

main()
    .catch((e) => {
        console.error('\n❌  Import failed:', e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
