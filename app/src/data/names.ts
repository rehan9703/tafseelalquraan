export interface NameOfAllah {
  id: string;
  number: number;
  nameArabic: string;
  transliteration: string;
  meaningEN: string;
  meaningUR: string;
  virtues?: string;
  quranicReference?: string;
  category: string;
}

export const namesOfAllah: NameOfAllah[] = [
  { id: "name-1", number: 1, nameArabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", meaningEN: "The Most Gracious", meaningUR: "سب سے زیادہ مہربان", virtues: "The one who gives countless blessings to all creation without discrimination. His mercy encompasses everything in existence.", quranicReference: "Surah Ar-Rahman 55:1", category: "Mercy" },
  { id: "name-2", number: 2, nameArabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", meaningEN: "The Most Merciful", meaningUR: "سب سے زیادہ رحم کرنے والا", virtues: "The one whose mercy is specifically for believers in the Hereafter. His mercy is constant and eternal for those who believe and do good.", quranicReference: "Surah Al-Fatiha 1:3", category: "Mercy" },
  { id: "name-3", number: 3, nameArabic: "الْمَلِكُ", transliteration: "Al-Malik", meaningEN: "The King", meaningUR: "بادشاہ", virtues: "The absolute sovereign of all existence, to whom belongs all dominion. Everything submits to His authority.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-4", number: 4, nameArabic: "الْقُدُّوسُ", transliteration: "Al-Quddus", meaningEN: "The Holy", meaningUR: "پاک ذات", virtues: "The one who is pure from all imperfections and incomparable to any creation. He is perfect in every way.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-5", number: 5, nameArabic: "السَّلاَمُ", transliteration: "As-Salam", meaningEN: "The Source of Peace", meaningUR: "سلامتی دینے والا", virtues: "The one who is free from all imperfections and grants peace to His creation. True peace comes only from Him.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-6", number: 6, nameArabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaningEN: "The Guardian of Faith", meaningUR: "امن دینے والا", virtues: "The one who grants security and freedom from fear. He gives faith and protects His believers.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-7", number: 7, nameArabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaningEN: "The Protector", meaningUR: "نگہبان", virtues: "The one who witnesses all things and protects His creation. He oversees everything and nothing escapes His watch.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-8", number: 8, nameArabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaningEN: "The Almighty", meaningUR: "غالب، زبردست", virtues: "The one who overcomes all and cannot be overcome. He is mighty and none can defeat Him.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-9", number: 9, nameArabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaningEN: "The Compeller", meaningUR: "زبردست", virtues: "The one whose will is irresistible and who repairs the broken. He compels His creation to what He wills.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-10", number: 10, nameArabic: "الْمُتَكَبِّرُ", transliteration: "Al-Mutakabbir", meaningEN: "The Majestic", meaningUR: "بڑائی والا", virtues: "The one who is supremely great and above all creation. He is the possessor of all greatness.", quranicReference: "Surah Al-Hashr 59:23", category: "Majesty" },
  { id: "name-11", number: 11, nameArabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaningEN: "The Creator", meaningUR: "پیدا کرنے والا", virtues: "The one who creates from nothing, with perfect measure and design. He creates what He wills.", quranicReference: "Surah Al-Hashr 59:24", category: "Creation" },
  { id: "name-12", number: 12, nameArabic: "الْبَارِئُ", transliteration: "Al-Bari", meaningEN: "The Evolver", meaningUR: "بے عیب پیدا کرنے والا", virtues: "The one who creates with perfect proportion and free from defects. He creates with perfect wisdom.", quranicReference: "Surah Al-Hashr 59:24", category: "Creation" },
  { id: "name-13", number: 13, nameArabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaningEN: "The Fashioner", meaningUR: "صورت بنانے والا", virtues: "The one who gives unique form and shape to all creation. He shapes everything with perfect beauty.", quranicReference: "Surah Al-Hashr 59:24", category: "Creation" },
  { id: "name-14", number: 14, nameArabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaningEN: "The Great Forgiver", meaningUR: "بخشنے والا", virtues: "The one who repeatedly forgives sins and accepts repentance. His forgiveness is vast and endless.", quranicReference: "Surah Ta-Ha 20:82", category: "Forgiveness" },
  { id: "name-15", number: 15, nameArabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaningEN: "The Subduer", meaningUR: "سب پر غالب", virtues: "The one who dominates all things and subjects them to His will. All creation submits to His power.", quranicReference: "Surah Ar-Ra'd 13:16", category: "Power" },
  { id: "name-16", number: 16, nameArabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaningEN: "The Bestower", meaningUR: "عطا کرنے والا", virtues: "The one who gives freely without expectation of return. His gifts are abundant and continuous.", quranicReference: "Surah Sad 38:9", category: "Provision" },
  { id: "name-17", number: 17, nameArabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaningEN: "The Provider", meaningUR: "رزق دینے والا", virtues: "The one who provides sustenance to all creation. He gives to whom He wills without measure.", quranicReference: "Surah Adh-Dhariyat 51:58", category: "Provision" },
  { id: "name-18", number: 18, nameArabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaningEN: "The Opener", meaningUR: "کھولنے والا", virtues: "The one who opens the doors of mercy and provision. He resolves difficulties and opens hearts.", quranicReference: "Surah Saba 34:26", category: "Power" },
  { id: "name-19", number: 19, nameArabic: "الْعَلِيمُ", transliteration: "Al-Aleem", meaningEN: "The All-Knowing", meaningUR: "سب جاننے والا", virtues: "The one whose knowledge encompasses all things, past, present, and future. Nothing is hidden from Him.", quranicReference: "Surah Al-Baqarah 2:158", category: "Knowledge" },
  { id: "name-20", number: 20, nameArabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaningEN: "The Constrictor", meaningUR: "تنگی دینے والا", virtues: "The one who restricts provision for whom He wills. He constricts and expands as He wills.", quranicReference: "Surah Al-Baqarah 2:245", category: "Power" },
  { id: "name-21", number: 21, nameArabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaningEN: "The Expander", meaningUR: "کشادگی دینے والا", virtues: "The one who expands provision and mercy for whom He wills. He gives abundantly to whom He chooses.", quranicReference: "Surah Al-Baqarah 2:245", category: "Power" },
  { id: "name-22", number: 22, nameArabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaningEN: "The Reducer", meaningUR: "پست کرنے والا", virtues: "The one who lowers whom He wills. He humiliates the arrogant and reduces their status.", quranicReference: "Surah Al-Waqi'ah 56:3", category: "Power" },
  { id: "name-23", number: 23, nameArabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaningEN: "The Exalter", meaningUR: "بلند کرنے والا", virtues: "The one who raises whom He wills in rank and status. He elevates the humble believers.", quranicReference: "Surah Al-Waqi'ah 56:3", category: "Power" },
  { id: "name-24", number: 24, nameArabic: "الْمُعِزُّ", transliteration: "Al-Mu'izz", meaningEN: "The Honorer", meaningUR: "عزت دینے والا", virtues: "The one who gives honor and dignity to whom He wills. True honor comes only from Him.", quranicReference: "Surah Aal-E-Imran 3:26", category: "Power" },
  { id: "name-25", number: 25, nameArabic: "الْمُذِلُّ", transliteration: "Al-Muzill", meaningEN: "The Dishonorer", meaningUR: "ذلت دینے والا", virtues: "The one who humiliates whom He wills. He degrades the arrogant who reject His signs.", quranicReference: "Surah Aal-E-Imran 3:26", category: "Power" },
  { id: "name-26", number: 26, nameArabic: "السَّمِيعُ", transliteration: "As-Sami", meaningEN: "The All-Hearing", meaningUR: "سب سننے والا", virtues: "The one who hears all sounds and voices, nothing is hidden from His hearing.", quranicReference: "Surah Al-Baqarah 2:127", category: "Knowledge" },
  { id: "name-27", number: 27, nameArabic: "الْبَصِيرُ", transliteration: "Al-Basir", meaningEN: "The All-Seeing", meaningUR: "سب دیکھنے والا", virtues: "The one who sees all things, nothing escapes His sight. He sees the smallest atom in darkness.", quranicReference: "Surah An-Nisa 4:58", category: "Knowledge" },
  { id: "name-28", number: 28, nameArabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaningEN: "The Judge", meaningUR: "حاکم", virtues: "The one who judges between His servants with truth and justice. His judgment is perfect.", quranicReference: "Surah Al-Hajj 22:69", category: "Justice" },
  { id: "name-29", number: 29, nameArabic: "الْعَدْلُ", transliteration: "Al-Adl", meaningEN: "The Just", meaningUR: "انصاف کرنے والا", virtues: "The one who is perfectly just in all His decrees. He never wrongs anyone.", quranicReference: "Surah An-Nisa 4:40", category: "Justice" },
  { id: "name-30", number: 30, nameArabic: "اللَّطِيفُ", transliteration: "Al-Latif", meaningEN: "The Subtle", meaningUR: "نرم و نازک", virtues: "The one who is subtle and kind to His servants. His mercy reaches them in ways they don't perceive.", quranicReference: "Surah Al-An'am 6:103", category: "Mercy" },
];

export const getNameById = (id: string): NameOfAllah | undefined => {
  return namesOfAllah.find(n => n.id === id);
};

export const getNamesByCategory = (category: string): NameOfAllah[] => {
  return namesOfAllah.filter(n => n.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(namesOfAllah.map(n => n.category))];
};
