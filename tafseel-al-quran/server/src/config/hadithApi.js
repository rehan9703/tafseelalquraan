import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '../database/hadiths');

const readJSON = async (filename) => {
    try {
        const data = await fs.readFile(path.join(DB_PATH, filename), 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Failed to read ${filename}:`, err.message);
        return null;
    }
};

const COLLECTIONS = [
    { id: 'bukhari', name: 'Sahih al-Bukhari' },
    { id: 'muslim', name: 'Sahih Muslim' },
    { id: 'abudawud', name: 'Sunan Abu Dawud' },
    { id: 'tirmidhi', name: 'Jami at-Tirmidhi' },
    { id: 'nasai', name: 'Sunan an-Nasai' },
    { id: 'ibnmajah', name: 'Sunan Ibn Majah' }
];

export async function getCollections() {
    return COLLECTIONS;
}

export async function getHadiths(collectionId, page = 1, limit = 42) {
    const validCollection = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];
    const cid = validCollection.id;

    // Load EN, AR, UR simultaneously
    const dataEn = await readJSON(`eng-${cid}.min.json`);
    const dataAr = await readJSON(`ara-${cid}.min.json`);
    const dataUr = await readJSON(`urd-${cid}.min.json`);

    if (!dataEn || !dataEn.hadiths) return { hadiths: [], total: 0 };

    // Some datasets like Muslim have blank English entries for the first few.
    // Rather than just paginating English, let's grab the max length of any available dataset
    const maxLen = Math.max(
        dataEn?.hadiths?.length || 0,
        dataAr?.hadiths?.length || 0,
        dataUr?.hadiths?.length || 0
    );

    const total = maxLen;
    const skip = (page - 1) * limit;

    // We create a base array of indices to map over
    const paginatedIndices = Array.from({ length: Math.min(limit, total - skip) }, (_, i) => skip + i);

    const arHadithMap = new Map();
    if (dataAr && dataAr.hadiths) {
        for (const h of dataAr.hadiths) arHadithMap.set(h.hadithnumber, h);
    }
    const urHadithMap = new Map();
    if (dataUr && dataUr.hadiths) {
        for (const h of dataUr.hadiths) urHadithMap.set(h.hadithnumber, h);
    }

    const hadiths = paginatedIndices.map(index => {
        const enHadith = dataEn?.hadiths?.[index] || { hadithnumber: index + 1, grades: [] };
        const arHadith = dataAr?.hadiths?.[index] || { text: '' };
        const urHadith = dataUr?.hadiths?.[index] || { text: '' };

        // Fallback to whichever number exists
        const hNumber = enHadith.hadithnumber || arHadith.hadithnumber || urHadith.hadithnumber || (index + 1);

        return {
            id: `${cid}_${hNumber}`,
            collection: validCollection.name,
            bookNumber: enHadith.reference?.book || arHadith.reference?.book || 1,
            number: hNumber,
            arabicText: arHadith.text || '',
            translationEN: enHadith.text || '',
            translationUR: urHadith.text || '',
            topic: dataEn?.metadata?.sections?.[enHadith.reference?.book] || 'General',
            grades: enHadith.grades || []
        };
    });

    return { hadiths, total };
}

export async function searchHadiths(collectionId, query, page = 1, limit = 42) {
    const validCollection = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];
    const cid = validCollection.id;

    const dataEn = await readJSON(`eng-${cid}.min.json`);
    const dataAr = await readJSON(`ara-${cid}.min.json`);
    const dataUr = await readJSON(`urd-${cid}.min.json`);

    if (!dataEn || !dataEn.hadiths) return { hadiths: [], total: 0 };

    const q = query.toLowerCase();

    // Search mostly on english translation
    const matchesEn = dataEn.hadiths.filter(h => h.text && h.text.toLowerCase().includes(q));

    const total = matchesEn.length;
    const skip = (page - 1) * limit;

    // We create a base array of indices to map over
    const paginatedIndices = Array.from({ length: Math.min(limit, total - skip) }, (_, i) => skip + i);

    const arHadithMap = new Map();
    if (dataAr && dataAr.hadiths) {
        for (const h of dataAr.hadiths) arHadithMap.set(h.hadithnumber, h);
    }
    const urHadithMap = new Map();
    if (dataUr && dataUr.hadiths) {
        for (const h of dataUr.hadiths) urHadithMap.set(h.hadithnumber, h);
    }

    const hadiths = paginatedIndices.map(index => {
        const enHadith = matchesEn[index] || { hadithnumber: index + 1, grades: [] };
        const arHadith = dataAr?.hadiths?.find(h => h.hadithnumber === enHadith.hadithnumber) || { text: '' };
        const urHadith = dataUr?.hadiths?.find(h => h.hadithnumber === enHadith.hadithnumber) || { text: '' };

        const hNumber = enHadith.hadithnumber;

        return {
            id: `${cid}_${hNumber}`,
            collection: validCollection.name,
            bookNumber: enHadith.reference?.book || arHadith.reference?.book || 1,
            number: hNumber,
            arabicText: arHadith.text || '',
            translationEN: enHadith.text || '',
            translationUR: urHadith.text || '',
            topic: dataEn?.metadata?.sections?.[enHadith.reference?.book] || 'General',
            grades: enHadith.grades || []
        };
    });

    return { hadiths, total };
}

export default {
    getCollections, getHadiths, searchHadiths
};
