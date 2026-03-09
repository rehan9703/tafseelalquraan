// Main data exports for Tafseel-al-Qur'an

// Quran Data - Complete 114 Surahs with Ayahs
export { 
  surahs, 
  allAyahs,
  surah1Ayahs,
  surah112Ayahs,
  surah113Ayahs,
  surah114Ayahs,
  getSurahById, 
  getSurahByNumber, 
  getAyahsBySurah, 
  getJuzInfo 
} from './quranComplete';

export type { Surah, Ayah } from './quranComplete';

// Prophets Data - Complete 25 Prophets with detailed stories
export { 
  prophets, 
  getProphetById 
} from './prophetsComplete';

export type { Prophet } from './prophetsComplete';

// Hadith Data - Complete 42 Nawawi Hadith
export { 
  hadiths, 
  getHadithById 
} from './hadithComplete';

export type { Hadith } from './hadithComplete';

// Names of Allah Data - 99 Names
export { 
  namesOfAllah, 
  getNameById 
} from './namesComplete';

export type { NameOfAllah } from './namesComplete';
