import express from 'express';
import { getQuestions, submitQuiz, getResults, getLeaderboard } from '../controllers/quiz.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/questions', getQuestions);
router.post('/submit', authenticate, submitQuiz);
router.get('/results', authenticate, getResults);
router.get('/leaderboard', getLeaderboard);

export default router;
