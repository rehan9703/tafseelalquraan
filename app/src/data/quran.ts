export interface Surah {
  id: number;
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameTransliteration: string;
  revelationType: 'MAKKI' | 'MADANI';
  ayahCount: number;
  juzStart: number;
  juzEnd: number;
  orderOfRevelation: number;
  virtues?: string;
  summary?: string;
}

export interface Ayah {
  id: string;
  surahId: number;
  ayahNumber: number;
  arabicText: string;
  translationEN?: string;
  translationUR?: string;
  translationAR?: string;
  translationHinglish?: string;
  tafseerEN?: string;
  tafseerUR?: string;
  tafseerAR?: string;
  juzNumber: number;
  hizbNumber: number;
  audioUrl?: string;
}

export const surahs: Surah[] = [
  { id: 1, number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah", nameTransliteration: "The Opening", revelationType: "MAKKI", ayahCount: 7, juzStart: 1, juzEnd: 1, orderOfRevelation: 5, summary: "The opening chapter of the Quran, consisting of seven verses. It is a prayer for guidance and the most recited surah in Islamic worship.", virtues: "Known as Umm Al-Kitab (Mother of the Book). Recited in every unit of prayer. Equivalent to two-thirds of the Quran in reward." },
  { id: 2, number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah", nameTransliteration: "The Cow", revelationType: "MADANI", ayahCount: 286, juzStart: 1, juzEnd: 3, orderOfRevelation: 87, summary: "The longest chapter of the Quran, covering various aspects of Islamic law, faith, and guidance for the Muslim community.", virtues: "Contains Ayat Al-Kursi, the greatest verse in the Quran. Shaytan flees from a home where it is recited for three days." },
  { id: 3, number: 3, nameArabic: "آل عمران", nameEnglish: "Aal-E-Imran", nameTransliteration: "The Family of Imran", revelationType: "MADANI", ayahCount: 200, juzStart: 3, juzEnd: 4, orderOfRevelation: 89, summary: "Focuses on the unity of God, the importance of faith, and stories of previous prophets including the family of Imran.", virtues: "Contains the verse of the Throne. Recited for protection and blessings." },
  { id: 4, number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa", nameTransliteration: "The Women", revelationType: "MADANI", ayahCount: 176, juzStart: 4, juzEnd: 6, orderOfRevelation: 92, summary: "Addresses social issues, family law, women's rights, and inheritance laws in Islam.", virtues: "Comprehensive guidance on family matters and social justice." },
  { id: 5, number: 5, nameArabic: "المائدة", nameEnglish: "Al-Ma'idah", nameTransliteration: "The Table Spread", revelationType: "MADANI", ayahCount: 120, juzStart: 6, juzEnd: 7, orderOfRevelation: 112, summary: "Covers dietary laws, legal punishments, and the story of the disciples requesting a table spread from heaven.", virtues: "Contains the verse: 'Today I have perfected for you your religion.'" },
  { id: 6, number: 6, nameArabic: "الأنعام", nameEnglish: "Al-An'am", nameTransliteration: "The Cattle", revelationType: "MAKKI", ayahCount: 165, juzStart: 7, juzEnd: 8, orderOfRevelation: 55, summary: "Emphasizes the oneness of Allah and refutes polytheism, discussing various aspects of God's creation.", virtues: "Comprehensive arguments for Tawhid (Oneness of Allah)." },
  { id: 7, number: 7, nameArabic: "الأعراف", nameEnglish: "Al-A'raf", nameTransliteration: "The Heights", revelationType: "MAKKI", ayahCount: 206, juzStart: 8, juzEnd: 9, orderOfRevelation: 39, summary: "Narrates stories of previous prophets and the Day of Judgment, describing the people of the Heights.", virtues: "Contains the story of Adam and the beginning of humanity." },
  { id: 8, number: 8, nameArabic: "الأنفال", nameEnglish: "Al-Anfal", nameTransliteration: "The Spoils of War", revelationType: "MADANI", ayahCount: 75, juzStart: 9, juzEnd: 10, orderOfRevelation: 88, summary: "Discusses the Battle of Badr and rules regarding war booty and military conduct.", virtues: "Guidance on Islamic warfare ethics and conduct." },
  { id: 9, number: 9, nameArabic: "التوبة", nameEnglish: "At-Tawbah", nameTransliteration: "The Repentance", revelationType: "MADANI", ayahCount: 129, juzStart: 10, juzEnd: 11, orderOfRevelation: 113, summary: "The only surah without Bismillah, dealing with treaties with pagans and the expedition to Tabuk.", virtues: "Contains the declaration of disassociation from the polytheists." },
  { id: 10, number: 10, nameArabic: "يونس", nameEnglish: "Yunus", nameTransliteration: "Jonah", revelationType: "MAKKI", ayahCount: 109, juzStart: 11, juzEnd: 11, orderOfRevelation: 51, summary: "Named after Prophet Jonah, it discusses God's signs and the consequences of rejecting prophets.", virtues: "Comfort for the Prophet Muhammad ﷺ in times of difficulty." },
  { id: 11, number: 11, nameArabic: "هود", nameEnglish: "Hud", nameTransliteration: "Hud", revelationType: "MAKKI", ayahCount: 123, juzStart: 11, juzEnd: 12, orderOfRevelation: 52, summary: "Stories of various prophets including Hud, Salih, Ibrahim, Lut, Shu'aib, and Musa.", virtues: "Emphasis on patience and steadfastness." },
  { id: 12, number: 12, nameArabic: "يوسف", nameEnglish: "Yusuf", nameTransliteration: "Joseph", revelationType: "MAKKI", ayahCount: 111, juzStart: 12, juzEnd: 13, orderOfRevelation: 53, summary: "The complete story of Prophet Joseph, from his childhood dreams to becoming a minister in Egypt.", virtues: "The most beautiful story in the Quran. Teaches patience, forgiveness, and trust in Allah." },
  { id: 13, number: 13, nameArabic: "الرعد", nameEnglish: "Ar-Ra'd", nameTransliteration: "The Thunder", revelationType: "MADANI", ayahCount: 43, juzStart: 13, juzEnd: 13, orderOfRevelation: 96, summary: "Discusses the signs of Allah in nature and the Quran's miraculous nature.", virtues: "Affirmation that Allah guides whom He wills to the straight path." },
  { id: 14, number: 14, nameArabic: "إبراهيم", nameEnglish: "Ibrahim", nameTransliteration: "Abraham", revelationType: "MAKKI", ayahCount: 52, juzStart: 13, juzEnd: 13, orderOfRevelation: 72, summary: "Focuses on Prophet Ibrahim's mission and his prayer for his descendants.", virtues: "Contains the beautiful dua of Prophet Ibrahim for Makkah and its people." },
  { id: 15, number: 15, nameArabic: "الحجر", nameEnglish: "Al-Hijr", nameTransliteration: "The Rocky Tract", revelationType: "MAKKI", ayahCount: 99, juzStart: 14, juzEnd: 14, orderOfRevelation: 54, summary: "Stories of previous nations who rejected their prophets and the protection of the Quran.", virtues: "Allah's promise to preserve the Quran." },
  { id: 16, number: 16, nameArabic: "النحل", nameEnglish: "An-Nahl", nameTransliteration: "The Bee", revelationType: "MAKKI", ayahCount: 128, juzStart: 14, juzEnd: 15, orderOfRevelation: 70, summary: "Highlights Allah's blessings and the natural world as signs of His existence.", virtues: "Comprehensive description of Allah's blessings upon humanity." },
  { id: 17, number: 17, nameArabic: "الإسراء", nameEnglish: "Al-Isra", nameTransliteration: "The Night Journey", revelationType: "MAKKI", ayahCount: 111, juzStart: 15, juzEnd: 15, orderOfRevelation: 50, summary: "Covers the miraculous night journey of Prophet Muhammad ﷺ and moral teachings.", virtues: "Contains the beautiful moral teachings: 'And do not walk upon the earth exultantly.'" },
  { id: 18, number: 18, nameArabic: "الكهف", nameEnglish: "Al-Kahf", nameTransliteration: "The Cave", revelationType: "MAKKI", ayahCount: 110, juzStart: 15, juzEnd: 16, orderOfRevelation: 69, summary: "Contains four stories: the People of the Cave, the owner of two gardens, Musa and Khidr, and Dhul-Qarnayn.", virtues: "Protection from the Dajjal. Recommended to recite every Friday." },
  { id: 19, number: 19, nameArabic: "مريم", nameEnglish: "Maryam", nameTransliteration: "Mary", revelationType: "MAKKI", ayahCount: 98, juzStart: 16, juzEnd: 16, orderOfRevelation: 44, summary: "Focuses on the story of Maryam (Mary) and the birth of Prophet Isa (Jesus).", virtues: "Highlights the honor of Maryam and the miraculous birth of Isa (AS)." },
  { id: 20, number: 20, nameArabic: "طه", nameEnglish: "Ta-Ha", nameTransliteration: "Ta-Ha", revelationType: "MAKKI", ayahCount: 135, juzStart: 16, juzEnd: 17, orderOfRevelation: 45, summary: "The story of Prophet Musa (Moses) in detail, from his birth to the Exodus.", virtues: "The surah that caused Umar ibn Al-Khattab to accept Islam." },
  { id: 36, number: 36, nameArabic: "يس", nameEnglish: "Ya-Sin", nameTransliteration: "Ya Sin", revelationType: "MAKKI", ayahCount: 83, juzStart: 22, juzEnd: 23, orderOfRevelation: 41, summary: "Known as the heart of the Quran, it emphasizes resurrection, God's power, and the truth of revelation.", virtues: "Known as the heart of the Quran. Recited for the deceased and for blessings." },
  { id: 55, number: 55, nameArabic: "الرحمن", nameEnglish: "Ar-Rahman", nameTransliteration: "The Beneficent", revelationType: "MADANI", ayahCount: 78, juzStart: 27, juzEnd: 27, orderOfRevelation: 97, summary: "Highlights God's blessings and repeatedly asks 'Which of the favors of your Lord will you deny?'", virtues: "The surah of divine blessings. Teaches gratitude and recognition of Allah's favors." },
  { id: 67, number: 67, nameArabic: "الملك", nameEnglish: "Al-Mulk", nameTransliteration: "The Sovereignty", revelationType: "MAKKI", ayahCount: 30, juzStart: 29, juzEnd: 29, orderOfRevelation: 77, summary: "Emphasizes God's sovereignty over all things and serves as protection from the punishment of the grave.", virtues: "Protection from the punishment of the grave. Intercedes for the one who recites it." },
  { id: 112, number: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas", nameTransliteration: "The Sincerity", revelationType: "MAKKI", ayahCount: 4, juzStart: 30, juzEnd: 30, orderOfRevelation: 22, summary: "A profound declaration of God's oneness, equivalent to one-third of the Quran in reward.", virtues: "Equivalent to one-third of the Quran. Purifies the heart from shirk." },
  { id: 113, number: 113, nameArabic: "الفلق", nameEnglish: "Al-Falaq", nameTransliteration: "The Daybreak", revelationType: "MAKKI", ayahCount: 5, juzStart: 30, juzEnd: 30, orderOfRevelation: 20, summary: "A prayer for protection from evil and harm, recited for seeking refuge in God.", virtues: "Protection from evil eye, magic, and envy. One of the two surahs of seeking refuge." },
  { id: 114, number: 114, nameArabic: "الناس", nameEnglish: "An-Nas", nameTransliteration: "Mankind", revelationType: "MAKKI", ayahCount: 6, juzStart: 30, juzEnd: 30, orderOfRevelation: 21, summary: "A prayer for protection from the whispers of Satan and evil, seeking refuge in the Lord of mankind.", virtues: "Protection from the whispers of Shaytan and evil thoughts. Completes the Quran beautifully." },
];

// Sample ayahs for demonstration
export const sampleAyahs: Record<number, Ayah[]> = {
  1: [
    { id: "1:1", surahId: 1, ayahNumber: 1, arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translationEN: "In the name of Allah, the Most Gracious, the Most Merciful.", translationUR: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔", tafseerEN: "Every surah in the Quran begins with Bismillah except Surah At-Tawbah. This phrase is recited before beginning any action to seek Allah's blessings.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:2", surahId: 1, ayahNumber: 2, arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translationEN: "All praise is due to Allah, Lord of all worlds.", translationUR: "تمام تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔", tafseerEN: "Alhamdulillah encompasses all types of praise for Allah, who is the Sustainer and Provider of everything in existence.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:3", surahId: 1, ayahNumber: 3, arabicText: "الرَّحْمَٰنِ الرَّحِيمِ", translationEN: "The Most Gracious, the Most Merciful.", translationUR: "بڑا مہربان نہایت رحم والا۔", tafseerEN: "These names emphasize Allah's infinite mercy which encompasses all His creation in this world and the next.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:4", surahId: 1, ayahNumber: 4, arabicText: "مَالِكِ يَوْمِ الدِّينِ", translationEN: "Master of the Day of Judgment.", translationUR: "بدلے کے دن کا مالک۔", tafseerEN: "Allah alone has sovereignty over the Day of Reckoning when all will be judged for their deeds.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:5", surahId: 1, ayahNumber: 5, arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translationEN: "You alone we worship, and You alone we ask for help.", translationUR: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔", tafseerEN: "This verse declares pure monotheism - worship is only for Allah, and help is sought only from Him.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:6", surahId: 1, ayahNumber: 6, arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translationEN: "Guide us to the straight path.", translationUR: "ہمیں سیدھے راستے کی ہدایت دے۔", tafseerEN: "The straight path is Islam - the path of those who have earned Allah's favor, not of those who have earned His anger or gone astray.", juzNumber: 1, hizbNumber: 1 },
    { id: "1:7", surahId: 1, ayahNumber: 7, arabicText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translationEN: "The path of those who have received Your grace; not the path of those who have brought down wrath upon themselves, nor of those who have gone astray.", translationUR: "ان لوگوں کے راستے جن پر تو نے انعام کیا، نہ ان کے جو تیرے غضب کا نشانہ بنے اور نہ گمراہوں کے۔", tafseerEN: "The straight path is that of the prophets, the truthful, the martyrs, and the righteous - not of the Jews who knew the truth but rejected it, nor of the Christians who were ignorant but claimed knowledge.", juzNumber: 1, hizbNumber: 1 },
  ],
  112: [
    { id: "112:1", surahId: 112, ayahNumber: 1, arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ", translationEN: "Say, 'He is Allah, the One.'", translationUR: "کہو کہ اللہ ایک ہے۔", tafseerEN: "Allah is unique in His essence, attributes, and actions. There is none like Him.", juzNumber: 30, hizbNumber: 60 },
    { id: "112:2", surahId: 112, ayahNumber: 2, arabicText: "اللَّهُ الصَّمَدُ", translationEN: "Allah, the Eternal Refuge.", translationUR: "اللہ بے نیاز ہے۔", tafseerEN: "As-Samad means the One who is self-sufficient, whom all creation depends upon, and who does not depend on anyone.", juzNumber: 30, hizbNumber: 60 },
    { id: "112:3", surahId: 112, ayahNumber: 3, arabicText: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translationEN: "He neither begets nor is born.", translationUR: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔", tafseerEN: "Allah has no children, parents, or partners. He is eternal and uncreated.", juzNumber: 30, hizbNumber: 60 },
    { id: "112:4", surahId: 112, ayahNumber: 4, arabicText: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", translationEN: "Nor is there to Him any equivalent.", translationUR: "اور نہ اس کا کوئی ہمسر ہے۔", tafseerEN: "There is absolutely nothing comparable to Allah in any way. He is unique in every aspect.", juzNumber: 30, hizbNumber: 60 },
  ],
};

export const getSurahById = (id: number): Surah | undefined => {
  return surahs.find(s => s.number === id);
};

export const getSurahByNumber = (number: number): Surah | undefined => {
  return surahs.find(s => s.number === number);
};

export const getAyahsBySurah = (surahId: number): Ayah[] => {
  return sampleAyahs[surahId] || [];
};

export const getJuzInfo = (juzNumber: number) => {
  const juzSurahs = surahs.filter(s => 
    (s.juzStart <= juzNumber && s.juzEnd >= juzNumber)
  );
  return {
    number: juzNumber,
    name: `Juz ${juzNumber}`,
    surahs: juzSurahs,
  };
};
