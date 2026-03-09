import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
    console.log("Reading exported json...");
    const rawData = fs.readFileSync(path.join(__dirname, 'exportedIssues.json'), 'utf8');
    const issues = JSON.parse(rawData);

    console.log(`Found ${issues.length} issues to import.`);

    // Clear out existing issues to avoid duplicates, or just do an upsert/createMany
    console.log("Clearing existing issues...");
    await prisma.islamicIssue.deleteMany({});

    console.log("Inserting new issues...");
    const result = await prisma.islamicIssue.createMany({
        data: issues
    });

    console.log(`Successfully inserted ${result.count} issues into the database!`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
