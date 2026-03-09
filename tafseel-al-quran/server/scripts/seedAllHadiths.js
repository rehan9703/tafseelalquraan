import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), './src/database/hadiths');
const prisma = new PrismaClient();

const readJSON = async (filename) => {
    try {
        const data = await fs.readFile(path.join(DB_PATH, filename), 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Failed to read ${filename}:`, err.message);
        return null;
    }
};

async function seedCollection(collectionName) {
    console.log(`\n--- Processing ${collectionName.toUpperCase()} ---`);

    // Load the 3 language JSON files for the collection
    const dataEn = await readJSON(`eng-${collectionName}.min.json`);
    const dataAr = await readJSON(`ara-${collectionName}.min.json`);
    const dataUr = await readJSON(`urd-${collectionName}.min.json`);

    if (!dataEn || !dataEn.hadiths) {
        console.error(`Missing English data for ${collectionName}. Skipping.`);
        return;
    }

    console.log(`Found ${dataEn.hadiths.length} hadiths in English database.`);

    // Map Arabic and Urdu by their hadithnumber for quick O(1) matching
    const arHadithMap = new Map();
    if (dataAr && dataAr.hadiths) {
        for (const h of dataAr.hadiths) arHadithMap.set(h.hadithnumber, h);
    }

    const urHadithMap = new Map();
    if (dataUr && dataUr.hadiths) {
        for (const h of dataUr.hadiths) urHadithMap.set(h.hadithnumber, h);
    }

    // Format the data into Prisma's expected Hadith model
    const formattedHadiths = dataEn.hadiths.map((enHadith) => {
        const hNumber = enHadith.hadithnumber;
        const arHadith = arHadithMap.get(hNumber) || { text: '' };
        const urHadith = urHadithMap.get(hNumber) || { text: '' };

        return {
            collection: collectionName,
            bookNumber: enHadith.reference?.book || arHadith.reference?.book || 1,
            number: hNumber,
            arabicText: arHadith.text || '',
            translationEN: enHadith.text || '',
            translationUR: urHadith.text || '',
            topic: dataEn.metadata?.sections?.[enHadith.reference?.book] || 'General',
            grades: enHadith.grades ? JSON.stringify(enHadith.grades) : null
        };
    });

    console.log(`Upserting ${formattedHadiths.length} hadiths into SQLite Database...`);

    // Delete existing records for this collection to avoid duplication
    await prisma.hadith.deleteMany({
        where: { collection: collectionName }
    });

    // Chunk size 1000 for SQLite limits
    const CHUNK_SIZE = 1000;

    for (let i = 0; i < formattedHadiths.length; i += CHUNK_SIZE) {
        const chunk = formattedHadiths.slice(i, i + CHUNK_SIZE);
        try {
            await prisma.hadith.createMany({
                data: chunk
            });
        } catch (error) {
            console.error(`Failed on chunk ${i / CHUNK_SIZE + 1} for ${collectionName}. Using slow fallback...`);
            // SQLite strict fallback if createMany hits variables cap issues occasionally
            for (const item of chunk) {
                try {
                    await prisma.hadith.create({ data: item });
                } catch (e) {
                    console.error(`Skipped Hadith #${item.number}: ${e.message.substring(0, 50)}`);
                }
            }
        }
    }

    console.log(`Finished seeding ${collectionName}!`);
}

async function seedAll() {
    const collections = ['bukhari', 'abudawud', 'tirmidhi', 'nasai', 'ibnmajah'];

    for (const c of collections) {
        await seedCollection(c);
    }

    console.log("\n✅ Finished full database Hadith migration!");
}

seedAll()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
