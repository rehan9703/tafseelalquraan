import express from 'express';
import { getHadiths, getHadith, getDailyHadith } from '../controllers/hadith.controller.js';

const router = express.Router();

router.get('/', getHadiths);
router.get('/daily', getDailyHadith);
router.get('/:id', getHadith);

export default router;
