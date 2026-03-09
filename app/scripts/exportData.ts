import { researchTopics } from '../src/data/islamicResearchData.js';
import * as fs from 'fs';
import * as path from 'path';

const cleanData = researchTopics.map(t => ({
    title: t.title,
    category: t.category,
    description: t.description,
    consequences: t.content.consequences || '',
    reasonsToAvoid: t.content.reasonsToAvoid || '',
    howToFix: t.content.howToFix || '',
    evidenceQuran: t.content.evidence.find(e => e.type === 'quran')?.text || '',
    evidenceHadith: t.content.evidence.find(e => e.type === 'hadith')?.text || '',
    iconType: "AlertTriangle", // Defaulting as icon is a React element
    colorScheme: t.color || "from-gray-500/20 to-gray-600/10"
}));

const targetPath = path.resolve(process.cwd(), '../tafseel-al-quran/server/prisma/exportedIssues.json');
fs.writeFileSync(targetPath, JSON.stringify(cleanData, null, 2));

console.log(`Exported ${cleanData.length} topics to ${targetPath}`);
