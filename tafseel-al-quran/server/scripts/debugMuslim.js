import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), './src/database/hadiths');
const prisma = new PrismaClient();

async function debugMuslim() {
    const dataEn = JSON.parse(await fs.readFile(path.join(DB_PATH, 'eng-muslim.min.json'), 'utf-8'));
    const dataAr = JSON.parse(await fs.readFile(path.join(DB_PATH, 'ara-muslim.min.json'), 'utf-8'));
    const dataUr = JSON.parse(await fs.readFile(path.join(DB_PATH, 'urd-muslim.min.json'), 'utf-8'));

    const arMap = new Map();
    for (const h of dataAr.hadiths) arMap.set(h.hadithnumber, h);

    const urMap = new Map();
    for (const h of dataUr.hadiths) urMap.set(h.hadithnumber, h);

    const formatted = dataEn.hadiths.map((en) => {
        const ar = arMap.get(en.hadithnumber) || { text: '' };
        const ur = urMap.get(en.hadithnumber) || { text: '' };
        return {
            collection: 'muslim',
            bookNumber: en.reference?.book || ar.reference?.book || 1,
            number: en.hadithnumber,
            arabicText: ar.text || '',
            translationEN: en.text || '',
            translationUR: ur.text || '',
            topic: dataEn.metadata?.sections?.[en.reference?.book] || 'General',
            grades: en.grades ? JSON.stringify(en.grades) : null
        };
    });

    console.log(`Validating ${formatted.length} hadiths one by one to find the poison pill...`);

    let errorCount = 0;
    for (const h of formatted) {
        try {
            await prisma.hadith.create({ data: h });
        } catch (e) {
            console.error(`\nHadith #${h.number} failed! Full Error:\n`);
            console.error(e);
            console.log("\nData Object:");
            console.log(h);
            errorCount++;
            if (errorCount > 1) break; // Stop after first to keep console clean
        }
    }
    console.log("Debug finished.");
}

debugMuslim().finally(() => prisma.$disconnect());
