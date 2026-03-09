import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getQuestions = async (req, res, next) => {
  try {
    const { category, difficulty, limit = 10 } = req.query;

    const where = { isActive: true };
    if (category) {
      where.category = category;
    }
    if (difficulty) {
      where.difficulty = difficulty.toUpperCase();
    }

    const questions = await prisma.quizQuestion.findMany({
      where,
      take: parseInt(limit),
    });

    const shuffled = questions.sort(() => 0.5 - Math.random());

    const sanitizedQuestions = shuffled.map(q => ({
      id: q.id,
      question: q.question,
      optionA: q.optionA,
      optionB: q.optionB,
      optionC: q.optionC,
      optionD: q.optionD,
      category: q.category,
      difficulty: q.difficulty,
    }));

    successResponse(res, sanitizedQuestions);
  } catch (error) {
    next(error);
  }
};

export const submitQuiz = async (req, res, next) => {
  try {
    const { answers, category, difficulty, timeTakenSeconds } = req.body;
    const userId = req.user.id;

    let correctAnswers = 0;
    const results = [];

    for (const answer of answers) {
      const question = await prisma.quizQuestion.findUnique({
        where: { id: answer.questionId },
      });

      if (question) {
        const isCorrect = question.correctOption === answer.selectedOption;
        if (isCorrect) correctAnswers++;
        results.push({
          questionId: answer.questionId,
          isCorrect,
          correctOption: question.correctOption,
          explanation: question.explanation,
        });
      }
    }

    const totalQuestions = answers.length;
    const scorePercent = (correctAnswers / totalQuestions) * 100;

    const quizResult = await prisma.quizResult.create({
      data: {
        userId,
        category: category || 'General',
        difficulty: difficulty || 'BEGINNER',
        totalQuestions,
        correctAnswers,
        scorePercent,
        timeTakenSeconds: timeTakenSeconds || 0,
      },
    });

    successResponse(res, {
      result: quizResult,
      details: results,
    }, 'Quiz submitted successfully');
  } catch (error) {
    next(error);
  }
};

export const getResults = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [results, total] = await Promise.all([
      prisma.quizResult.findMany({
        where: { userId },
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.quizResult.count({ where: { userId } }),
    ]);

    successResponse(res, {
      results,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await prisma.quizResult.groupBy({
      by: ['userId'],
      _avg: {
        scorePercent: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        _avg: {
          scorePercent: 'desc',
        },
      },
      take: 20,
    });

    const enrichedLeaderboard = await Promise.all(
      leaderboard.map(async (entry, index) => {
        const user = await prisma.user.findUnique({
          where: { id: entry.userId },
          select: { name: true, avatarUrl: true },
        });
        return {
          rank: index + 1,
          user,
          averageScore: entry._avg.scorePercent,
          quizzesTaken: entry._count.id,
        };
      })
    );

    successResponse(res, enrichedLeaderboard);
  } catch (error) {
    next(error);
  }
};
