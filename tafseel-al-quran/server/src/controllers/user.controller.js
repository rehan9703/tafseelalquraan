import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

// Hardcoded surah ayah counts (1-114) as a reliable offline lookup
const SURAH_AYAH_COUNTS = [
  0, // index 0 unused
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109,
  123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60,
  34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45,
  60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44,
  28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3,
  5, 4, 5, 6,
];

export const getBookmarks = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { contentType } = req.query;

    const where = { userId };
    if (contentType) {
      where.contentType = contentType.toUpperCase();
    }

    const bookmarks = await prisma.bookmark.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    successResponse(res, bookmarks);
  } catch (error) {
    next(error);
  }
};

export const addBookmark = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { contentType, contentId, note } = req.body;

    const bookmark = await prisma.bookmark.create({
      data: {
        userId,
        contentType: contentType.toUpperCase(),
        contentId,
        note,
      },
    });

    successResponse(res, bookmark, 'Bookmark added successfully', 201);
  } catch (error) {
    if (error.code === 'P2002') {
      return errorResponse(res, 'Bookmark already exists', 409);
    }
    next(error);
  }
};

export const removeBookmark = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    await prisma.bookmark.deleteMany({
      where: { id, userId },
    });

    successResponse(res, null, 'Bookmark removed successfully');
  } catch (error) {
    next(error);
  }
};

export const getProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const progress = await prisma.readingProgress.findMany({
      where: { userId },
    });

    const completedSurahs = progress.filter(p => p.isCompleted).length;
    const totalAyahsRead = progress.reduce((sum, p) => sum + p.lastAyahRead, 0);

    successResponse(res, {
      progress,
      stats: {
        completedSurahs,
        totalSurahs: 114,
        completionPercentage: ((completedSurahs / 114) * 100).toFixed(2),
        totalAyahsRead,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { surahId, lastAyahRead, isCompleted } = req.body;

    const surahNum = parseInt(surahId);
    if (isNaN(surahNum) || surahNum < 1 || surahNum > 114) {
      return errorResponse(res, 'Invalid surah number (must be 1–114)', 400);
    }

    const ayahCount = SURAH_AYAH_COUNTS[surahNum];
    const completed = isCompleted !== undefined ? isCompleted : lastAyahRead >= ayahCount;

    const progress = await prisma.readingProgress.upsert({
      where: {
        userId_surahId: {
          userId,
          surahId: surahNum,
        },
      },
      update: {
        lastAyahRead: lastAyahRead || 0,
        isCompleted: completed,
        updatedAt: new Date(),
      },
      create: {
        userId,
        surahId: surahNum,
        lastAyahRead: lastAyahRead || 0,
        isCompleted: completed,
      },
    });

    // Also update streak check-in logic here implicitly if desired, 
    // but we'll stick to explicit check-ins for clarity in the frontend.

    successResponse(res, progress, 'Progress updated successfully');
  } catch (error) {
    next(error);
  }
};

export const getStreak = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const streak = await prisma.userStreak.findUnique({
      where: { userId },
    });

    successResponse(res, streak || { currentStreak: 0, longestStreak: 0 });
  } catch (error) {
    next(error);
  }
};

export const checkInStreak = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const streak = await prisma.userStreak.findUnique({ where: { userId } });

    if (!streak) {
      const newStreak = await prisma.userStreak.create({
        data: {
          userId,
          currentStreak: 1,
          longestStreak: 1,
          lastActiveDate: today,
        },
      });
      return successResponse(res, newStreak, 'Streak started');
    }

    const lastActive = streak.lastActiveDate ? new Date(streak.lastActiveDate) : null;
    if (lastActive) lastActive.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastActive && lastActive.getTime() === today.getTime()) {
      return successResponse(res, streak, 'Already checked in today');
    }

    let newStreakCount = (!lastActive || lastActive.getTime() === yesterday.getTime())
      ? streak.currentStreak + 1
      : 1;
    const newLongestStreak = Math.max(streak.longestStreak, newStreakCount);

    const updatedStreak = await prisma.userStreak.update({
      where: { userId },
      data: {
        currentStreak: newStreakCount,
        longestStreak: newLongestStreak,
        lastActiveDate: today,
      },
    });

    successResponse(res, updatedStreak, 'Check-in successful');
  } catch (error) {
    next(error);
  }
};

export const updateSettings = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { language } = req.body;

    const updateData = {};
    if (language) updateData.language = language.toUpperCase();

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        language: true,
        role: true,
      },
    });

    successResponse(res, user, 'Settings updated successfully');
  } catch (error) {
    next(error);
  }
};

// --- ADMIN ENDPOINTS ---

export const adminGetAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        userStreak: true,
        _count: {
          select: {
            bookmarks: true,
            quizResults: true,
            readingProgress: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    successResponse(res, users);
  } catch (error) {
    next(error);
  }
};

export const adminUpdateUserStreak = async (req, res, next) => {
  try {
    const { userId, currentStreak, longestStreak } = req.body;

    if (!userId) {
      return errorResponse(res, 'User ID is required', 400);
    }

    const streak = await prisma.userStreak.upsert({
      where: { userId },
      update: {
        currentStreak: currentStreak !== undefined ? currentStreak : undefined,
        longestStreak: longestStreak !== undefined ? longestStreak : undefined,
      },
      create: {
        userId,
        currentStreak: currentStreak || 0,
        longestStreak: longestStreak || 0,
      },
    });

    successResponse(res, streak, 'User streak updated by admin');
  } catch (error) {
    next(error);
  }
};
