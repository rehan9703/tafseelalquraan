import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();
const NAWAWI_PATH = path.resolve(process.cwd(), '../../app/src/data/hadithComplete.ts');

async function seedNawawi() {
    console.log("Seeding 40 Hadith (Nawawi)...");

    let fileContent;
    try {
        fileContent = await fs.readFile(NAWAWI_PATH, 'utf-8');
    } catch (e) {
        console.error("Failed to read hadithComplete.ts:", e);
        return;
    }

    // Extract the array from the TS file
    // The file starts with imports and interfaces, then 'export const hadiths: Hadith[] = ['
    const jsonMatch = fileContent.match(/export const hadiths: Hadith\[\] = (\[[\s\S]*\]);/);
    if (!jsonMatch) {
        console.error("Could not find hadiths array in TS file.");
        return;
    }

    let hadiths;
    try {
        // We need to clean up the string to make it valid JSON
        // (Removing the trailing comma if any, and potentially other TS-isms)
        // A safer way is to use a simple eval or just clean up the property names
        let jsonStr = jsonMatch[1]
            .replace(/(\w+):/g, '"$1":') // Quote keys
            .replace(/'/g, '"') // Replace single quotes with double quotes
            .replace(/,\s*\]/, ']'); // Remove trailing comma

        hadiths = JSON.parse(jsonStr);
    } catch (e) {
        console.error("Failed to parse hadiths array. Attempting fallback cleanup...");
        try {
            // Fallback: very aggressive cleaning
            let cleanStr = jsonMatch[1]
                .replace(/\/\/.*$/gm, '') // Remove comments
                .replace(/(\w+):/g, '"$1":')
                .replace(/'/g, '"')
                .replace(/,\s*([}\]])/g, '$1');
            hadiths = JSON.parse(cleanStr);
        } catch (e2) {
            console.error("Final parse failure:", e2);
            return;
        }
    }

    console.log(`Found ${hadiths.length} Hadiths in Nawawi collection.`);

    for (const h of hadiths) {
        try {
            await prisma.hadith.upsert({
                where: {
                    collection_number: {
                        collection: "Nawawi",
                        number: h.number
                    }
                },
                update: {
                    arabicText: h.arabicText,
                    translationEN: h.translationEN,
                    translationUR: h.translationUR,
                    narrator: h.narrator,
                    source: h.source,
                    explanationEN: h.explanationEN,
                    explanationUR: h.explanationUR,
                    category: h.category,
                    topic: h.relatedTopics ? h.relatedTopics[0] : "General"
                },
                create: {
                    collection: "Nawawi",
                    number: h.number,
                    arabicText: h.arabicText,
                    translationEN: h.translationEN,
                    translationUR: h.translationUR,
                    narrator: h.narrator,
                    source: h.source,
                    explanationEN: h.explanationEN,
                    explanationUR: h.explanationUR,
                    category: h.category,
                    topic: h.relatedTopics ? h.relatedTopics[0] : "General"
                }
            });
        } catch (e) {
            console.error(`Failed to seed Hadith ${h.number}:`, e.message);
        }
    }

    console.log("Successfully seeded Nawawi collection!");
}

seedNawawi()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
