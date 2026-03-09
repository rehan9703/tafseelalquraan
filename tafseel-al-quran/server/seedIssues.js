import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialIssues = [
    {
        title: "Shirk (Polytheism)",
        category: "Major Sins",
        description: "Ascribing partners to Allah in His Rububiyyah, Uluhiyyah, or Asma wa Sifat.",
        consequences: "Dying upon Major Shirk guarantees eternal damnation. All previous good deeds are completely erased and nullified.",
        reasonsToAvoid: "Allah created us solely for His worship. Giving His rights to creation is the ultimate injustice.",
        howToFix: "Making sincere Tawbah, renewing the Shahadah, and abandoning polytheistic practices before death.",
        evidenceQuran: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills. (4:48)",
        evidenceHadith: "The Prophet ﷺ said: 'Shall I not inform you of the greatest of major sins? Associating partners with Allah...' (Bukhari)",
        iconType: "AlertTriangle",
        colorScheme: "from-red-500/20 to-red-600/10"
    },
    {
        title: "Zina (Fornication & Adultery)",
        category: "Major Sins",
        description: "Engaging in unlawful sexual intercourse.",
        consequences: "Destroys lineage, spreads disease, and invites the wrath of Allah both individually and societally.",
        reasonsToAvoid: "It degrades human dignity, breaks families, and opens the door to numerous other sins.",
        howToFix: "Deep remorse, immediately ceasing the sin, crying over one's misdeeds, and intending never to return to it.",
        evidenceQuran: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way. (17:32)",
        evidenceHadith: "The Prophet ﷺ said: 'When a person commits Zina, Iman leaves him and hovers over him like a canopy...' (Abu Dawud)",
        iconType: "AlertTriangle",
        colorScheme: "from-red-500/20 to-red-600/10"
    }
];

async function main() {
    console.log('Seeding Islamic Issues...');

    for (const issue of initialIssues) {
        const existing = await prisma.islamicIssue.findUnique({
            where: { title: issue.title }
        });

        if (!existing) {
            await prisma.islamicIssue.create({ data: issue });
            console.log(`Added: ${issue.title}`);
        } else {
            console.log(`Skipped existing: ${issue.title}`);
        }
    }

    console.log('Seeding Complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
