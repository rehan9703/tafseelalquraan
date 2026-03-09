import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

// ─── Helper: parse surah ID (1–114) ───────────────────────────────────────
const parseSurahId = (id) => {
  const n = parseInt(id);
  if (isNaN(n) || n < 1 || n > 114) return null;
  return n;
};

// ─── Helper: parse Juz number (1–30) ─────────────────────────────────────
const parseJuzNum = (n) => {
  const num = parseInt(n);
  if (isNaN(num) || num < 1 || num > 30) return null;
  return num;
};

// ─── Helper: Map Surah Data for Frontend ─────────────────────────────────────
const mapSurah = (s) => {
  const sIdStr = String(s.number).padStart(3, '0');
  return {
    ...s,
    audio: {
      '1': {
        reciter: 'Mishary Alafasy',
        url: `https://server8.mp3quran.net/afs/${sIdStr}.mp3`,
      },
      '2': {
        reciter: 'Abdul Rahman Al-Sudais',
        url: `https://server11.mp3quran.net/sds/${sIdStr}.mp3`,
      },
      '3': {
        reciter: 'Saad Al-Ghamdi',
        url: `https://server7.mp3quran.net/s_gmd/${sIdStr}.mp3`,
      },
    },
  };
};

// ─── GET /quran/surahs ────────────────────────────────────────────────────────
export const getSurahs = async (req, res, next) => {
  try {
    const { juz, revelationType, page = 1, limit = 114 } = req.query;

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(114, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const where = {};
    if (juz) {
      const juzNum = parseJuzNum(juz);
      if (juzNum) {
        where.juzStart = { lte: juzNum };
        where.juzEnd = { gte: juzNum };
      }
    }
    if (revelationType) {
      where.revelationType = revelationType.toUpperCase();
    }

    const [surahs, total] = await Promise.all([
      prisma.surah.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { number: 'asc' },
      }),
      prisma.surah.count({ where }),
    ]);

    successResponse(res, {
      surahs: surahs.map(mapSurah),
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/surahs/:id ────────────────────────────────────────────────────
export const getSurah = async (req, res, next) => {
  try {
    const surahId = parseSurahId(req.params.id);
    if (!surahId) return errorResponse(res, 'Invalid surah ID', 400);

    const surah = await prisma.surah.findUnique({
      where: { number: surahId },
    });

    if (!surah) return errorResponse(res, 'Surah not found', 404);

    successResponse(res, mapSurah(surah));
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/surahs/:id/ayahs ─────────────────────────────────────────────
export const getAyahs = async (req, res, next) => {
  try {
    const surahId = parseSurahId(req.params.id);
    if (!surahId) return errorResponse(res, 'Invalid surah ID', 400);

    const ayahs = await prisma.ayah.findMany({
      where: { surahId },
      orderBy: { ayahNumber: 'asc' },
    });

    const sIdStr = String(surahId).padStart(3, '0');
    const formattedAyahs = ayahs.map((a) => ({
      ...a,
      id: `${surahId}:${a.ayahNumber}`,
      translation: a.translationEN, // Compatibility
      audioUrl: a.audioUrl || `https://everyayah.com/data/Alafasy_128kbps/${sIdStr}${String(a.ayahNumber).padStart(3, '0')}.mp3`,
    }));

    successResponse(res, formattedAyahs);
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/ayahs/:id ─────────────────────────────────────────────────────
export const getAyah = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [sId, aNum] = id.includes(':') ? id.split(':').map(Number) : [1, Number(id)];

    if (!sId || !aNum || sId < 1 || sId > 114) {
      return errorResponse(res, 'Invalid ayah key', 400);
    }

    const ayah = await prisma.ayah.findFirst({
      where: { surahId: sId, ayahNumber: aNum },
    });

    if (!ayah) return errorResponse(res, 'Ayah not found', 404);

    const sIdStr = String(sId).padStart(3, '0');
    successResponse(res, {
      ...ayah,
      id: `${sId}:${aNum}`,
      translation: ayah.translationEN,
      audioUrl: ayah.audioUrl || `https://everyayah.com/data/Alafasy_128kbps/${sIdStr}${String(aNum).padStart(3, '0')}.mp3`,
    });
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/juz ───────────────────────────────────────────────────────────
export const getJuzList = async (req, res, next) => {
  try {
    const juzList = Array.from({ length: 30 }, (_, i) => ({
      number: i + 1,
      name: `Juz' ${i + 1}`,
    }));
    successResponse(res, juzList);
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/juz/:number/surahs ───────────────────────────────────────────
export const getJuzSurahs = async (req, res, next) => {
  try {
    const juzNum = parseJuzNum(req.params.number);
    if (!juzNum) return errorResponse(res, 'Invalid Juz number', 400);

    const surahs = await prisma.surah.findMany({
      where: {
        juzStart: { lte: juzNum },
        juzEnd: { gte: juzNum },
      },
      orderBy: { number: 'asc' },
    });

    successResponse(res, surahs.map(mapSurah));
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/search?q=... ─────────────────────────────────────────────────
export const searchAyahs = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 2) return errorResponse(res, 'Search query too short', 400);

    const ayahs = await prisma.ayah.findMany({
      where: {
        OR: [
          { arabicText: { contains: q, mode: 'insensitive' } },
          { translationEN: { contains: q, mode: 'insensitive' } },
          { translationUR: { contains: q, mode: 'insensitive' } },
        ],
      },
      take: 50,
      include: { surah: true },
    });

    const results = ayahs.map((a) => ({
      id: `${a.surahId}:${a.ayahNumber}`,
      surahId: a.surahId,
      surahName: a.surah.nameEnglish,
      ayahNumber: a.ayahNumber,
      arabicText: a.arabicText,
      translationEN: a.translationEN,
      translationUR: a.translationUR,
      juzNumber: a.juzNumber,
    }));

    successResponse(res, { results, total: results.length, query: q });
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/languages ────────────────────────────────────────────────────
export const getLanguages = async (req, res, next) => {
  try {
    const languages = [
      { code: 'en', name: 'English', direction: 'ltr' },
      { code: 'ur', name: 'Urdu', direction: 'rtl' },
      { code: 'ar', name: 'Arabic', direction: 'rtl' },
    ];
    successResponse(res, languages);
  } catch (error) {
    next(error);
  }
};

// ─── GET /quran/daily ────────────────────────────────────────────────────────
export const getDailyAyah = async (req, res, next) => {
  try {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    // Choose a random Surah based on the day (1-114)
    const surahNumber = (dayOfYear % 114) + 1;

    const surah = await prisma.surah.findUnique({
      where: { number: surahNumber },
    });

    if (!surah) return errorResponse(res, 'Surah not found', 404);

    successResponse(res, mapSurah(surah));
  } catch (error) {
    next(error);
  }
};
