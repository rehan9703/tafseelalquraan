import express from 'express';
import { getSurahs, getSurah, getAyahs, getAyah, getJuzList, getJuzSurahs, searchAyahs, getLanguages, getDailyAyah } from '../controllers/quran.controller.js';

const router = express.Router();

router.get('/surahs', getSurahs);
router.get('/surahs/:id', getSurah);
router.get('/surahs/:id/ayahs', getAyahs);
router.get('/ayahs/:id', getAyah);
router.get('/juz', getJuzList);
router.get('/juz/:number/surahs', getJuzSurahs);
router.get('/search', searchAyahs);
router.get('/languages', getLanguages);
router.get('/daily', getDailyAyah);

export default router;
