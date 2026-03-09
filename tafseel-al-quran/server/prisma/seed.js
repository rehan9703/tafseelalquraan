import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding production data...');

  // 1. Create Default Admin
  const adminPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@tafseel.com' },
    update: {},
    create: {
      name: 'Tabish Khan',
      email: 'admin@tafseel.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      language: 'EN',
      isEmailVerified: true,
    },
  });
  console.log('✅ Admin user created');

  // 2. Sample Surahs (Focus on common ones)
  const surahs = [
    { number: 1, nameArabic: 'الفاتحة', nameEnglish: 'The Opening', nameTransliteration: 'Al-Fatihah', revelationType: 'MAKKI', ayahCount: 7, juzStart: 1, juzEnd: 1, orderOfRevelation: 5 },
    { number: 2, nameArabic: 'البقرة', nameEnglish: 'The Cow', nameTransliteration: 'Al-Baqarah', revelationType: 'MADANI', ayahCount: 286, juzStart: 1, juzEnd: 3, orderOfRevelation: 87 },
    { number: 36, nameArabic: 'يس', nameEnglish: 'Ya Sin', nameTransliteration: 'Ya-Sin', revelationType: 'MAKKI', ayahCount: 83, juzStart: 22, juzEnd: 23, orderOfRevelation: 41 },
    { number: 67, nameArabic: 'الملك', nameEnglish: 'The Sovereignty', nameTransliteration: 'Al-Mulk', revelationType: 'MAKKI', ayahCount: 30, juzStart: 29, juzEnd: 29, orderOfRevelation: 77 },
    { number: 112, nameArabic: 'الإخلاص', nameEnglish: 'Purity of Faith', nameTransliteration: 'Al-Ikhlas', revelationType: 'MAKKI', ayahCount: 4, juzStart: 30, juzEnd: 30, orderOfRevelation: 22 },
  ];

  for (const s of surahs) {
    await prisma.surah.upsert({
      where: { number: s.number },
      update: s,
      create: s,
    });
  }
  console.log('✅ Sample Surahs seeded');

  // 3. Prophets
  const prophets = [
    {
      nameEnglish: 'Adam', nameArabic: 'آدم', orderNumber: 1, title: 'Khalifatullah', nation: 'Mankind',
      story: 'Adam was the first human and the first Prophet. Allah created him from clay and breathed life into him...',
      lessonsLearned: 'Repentance and responsibility.', keyMiracles: 'Created without parents.', quranicReferences: '2:30-39, 7:11-25', periodEra: 'Ancient'
    },
    {
      nameEnglish: 'Ibrahim', nameArabic: 'إبراهيم', orderNumber: 6, title: 'Khalilullah', nation: 'Babylonians / People of Harran',
      story: 'Known as the father of Prophets, Ibrahim (AS) stood against idolatry and demonstrated unparalleled devotion...',
      lessonsLearned: 'Unyielding faith and sacrifice.', keyMiracles: 'Fire turned cold and peaceful.', quranicReferences: '2:124-131, 21:51-73', periodEra: '2000 BC'
    },
    {
      nameEnglish: 'Muhammad', nameArabic: 'محمد', orderNumber: 25, title: 'Rasulullah / Khatam an-Nabiyyin', nation: 'Universal',
      story: 'The final messenger of Allah, sent as a mercy to the worlds. He received the final revelation (Quran)...',
      lessonsLearned: 'Mercy, justice, and complete submission to Allah.', keyMiracles: 'The Holy Quran, Splitting of the Moon.', quranicReferences: '33:40, 48:29', periodEra: '570 - 632 AD'
    },
  ];

  for (const p of prophets) {
    await prisma.prophet.upsert({
      where: { orderNumber: p.orderNumber },
      update: p,
      create: p,
    });
  }
  console.log('✅ Prophet Stories seeded');

  // 4. 99 Names
  const names = [
    { number: 1, nameArabic: 'الرحيم', transliteration: 'Ar-Raheem', meaningEN: 'The Especially Merciful', category: 'Attribute of Mercy' },
    { number: 2, nameArabic: 'الملك', transliteration: 'Al-Malik', meaningEN: 'The Absolute Ruler', category: 'Attribute of Majesty' },
    { number: 3, nameArabic: 'القدوس', transliteration: 'Al-Quddus', meaningEN: 'The Pure One', category: 'Attribute of Majesty' },
  ];

  for (const n of names) {
    await prisma.nameOfAllah.upsert({
      where: { number: n.number },
      update: n,
      create: n,
    });
  }
  console.log('✅ 99 Names seeded');

  // 5. Hadiths
  const hadiths = [
    { collection: 'Nawawi 42', number: 1, arabicText: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', translationEN: 'Actions are but by intentions.', narrator: 'Umar bin Al-Khattab', source: 'Sahih Bukhari & Muslim', topic: 'Iman' },
    { collection: 'Nawawi 42', number: 2, arabicText: 'قَالَ يَا مُحَمَّدُ أَخْبِرْنِي عَنِ الإِسْلاَمِ', translationEN: 'Tell me about Islam...', narrator: 'Umar bin Al-Khattab', source: 'Sahih Muslim', topic: 'Iman' },
    { collection: 'Nawawi 42', number: 3, arabicText: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ', translationEN: 'Islam is built upon five [pillars]', narrator: 'Ibn Umar', source: 'Sahih Bukhari & Muslim', topic: 'Salah' },
  ];

  for (const h of hadiths) {
    await prisma.hadith.upsert({
      where: { collection_number: { collection: h.collection, number: h.number } },
      update: h,
      create: h,
    });
  }
  console.log('✅ Hadiths seeded');

  // 6. Duas
  const duas = [
    { titleEN: 'Dua for Knowledge', arabicText: 'رَبِّ زِدْنِي عِلْمًا', transliteration: 'Rabbi zidni ilma', translationEN: 'My Lord, increase me in knowledge.', situation: 'Seeking Knowledge', source: 'Quran 20:114' },
    { titleEN: 'Dua for Forgiveness', arabicText: 'رَبَّنَا اغْفِرْ لَنَا', transliteration: 'Rabbana ighfir lana', translationEN: 'Our Lord, forgive us.', situation: 'Repentance', source: 'Quran 3:16' },
    { titleEN: 'Dua for Protection', arabicText: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ', transliteration: 'Bismillahil-ladhi la yadurru ma\'asmihi shai\'un', translationEN: 'In the name of Allah, with whose name nothing can cause harm.', situation: 'Protection', source: 'Sunan Ibn Majah' },
  ];

  for (const d of duas) {
    // Just blindly create or replace based on titles since IDs aren't predetermined
    const exists = await prisma.dua.findFirst({ where: { titleEN: d.titleEN } });
    if (!exists) {
      await prisma.dua.create({
        data: d,
      });
    }
  }
  console.log('✅ Duas seeded');

  console.log('🚀 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
