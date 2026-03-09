import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

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

async function seedMuslim() {
    console.log("Loading Sahih Muslim JSON files (English, Arabic, Urdu)...");

    // 1. Load the 3 language JSON files for Muslim
    const dataEn = await readJSON(`eng-muslim.min.json`);
    const dataAr = await readJSON(`ara-muslim.min.json`);
    const dataUr = await readJSON(`urd-muslim.min.json`);

    if (!dataEn || !dataEn.hadiths) {
        console.error("Missing English Sahih Muslim data. Cannot proceed.");
        return;
    }

    console.log(`Found ${dataEn.hadiths.length} hadiths in English database.`);

    // 2. Map Arabic and Urdu by their hadithnumber for quick O(1) matching
    const arHadithMap = new Map();
    if (dataAr && dataAr.hadiths) {
        for (const h of dataAr.hadiths) arHadithMap.set(h.hadithnumber, h);
    }

    const urHadithMap = new Map();
    if (dataUr && dataUr.hadiths) {
        for (const h of dataUr.hadiths) urHadithMap.set(h.hadithnumber, h);
    }

    // 3. Format the data into Prisma's expected Hadith model
    const formattedHadiths = dataEn.hadiths.map((enHadith) => {
        const hNumber = enHadith.hadithnumber;
        const arHadith = arHadithMap.get(hNumber) || { text: '' };
        const urHadith = urHadithMap.get(hNumber) || { text: '' };

        return {
            collection: 'muslim',
            bookNumber: enHadith.reference?.book || arHadith.reference?.book || 1,
            number: hNumber,
            arabicText: arHadith.text || '',
            translationEN: enHadith.text || '',
            translationUR: urHadith.text || '',
            topic: dataEn.metadata?.sections?.[enHadith.reference?.book] || 'General',
            grades: enHadith.grades ? JSON.stringify(enHadith.grades) : null
        };
    });

    // 4. Upsert or CreateMany
    console.log("Upserting/Inserting into SQLite Database...");

    // Delete existing muslim hadiths to avoid duplication conflicts if run multiple times
    await prisma.hadith.deleteMany({
        where: { collection: 'muslim' }
    });

    // SQLite has input variable limits (usually 999 or 32766).
    // We chunk the 7500+ items into blocks of 1000 to be safe.
    const CHUNK_SIZE = 1000;

    for (let i = 0; i < formattedHadiths.length; i += CHUNK_SIZE) {
        const chunk = formattedHadiths.slice(i, i + CHUNK_SIZE);
        try {
            await prisma.hadith.createMany({
                data: chunk
            });
            console.log(`Successfully inserted chunk ${i / CHUNK_SIZE + 1} (${chunk.length} hadiths)...`);
        } catch (chunkError) {
            console.error(`\nFAILED TO INSERT CHUNK ${i / CHUNK_SIZE + 1}!`);
            console.error(chunkError.message);
            console.log("First item in failing chunk:", chunk[0]);
            throw chunkError;
        }
    }

    console.log(`Finished seeding ${formattedHadiths.length} Sahih Muslim hadiths!`);
}

seedMuslim()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
