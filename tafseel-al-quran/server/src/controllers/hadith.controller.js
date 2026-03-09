import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getHadiths = async (req, res, next) => {
  try {
    const { collection = 'bukhari', search, page = 1, limit = 42 } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Build the query
    const whereClause = { collection };
    if (search) {
      whereClause.translationEN = { contains: search };
    }

    const [hadiths, total] = await Promise.all([
      prisma.hadith.findMany({
        where: whereClause,
        skip,
        take: limitNum,
        orderBy: { number: 'asc' }
      }),
      prisma.hadith.count({ where: whereClause })
    ]);

    // Format grades back to JSON since SQLite stores them as strings
    const formattedHadiths = hadiths.map(h => ({
      ...h,
      grades: h.grades ? JSON.parse(h.grades) : []
    }));

    successResponse(res, {
      hadiths: formattedHadiths,
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

export const getHadith = async (req, res, next) => {
  try {
    // For specific hadith id lookups, we could implement a fetch here,
    // but the UI typically uses getHadiths paginated. 
    // We'll return 404 for now to encourage collection queries.
    return errorResponse(res, 'Direct ID lookup not implemented for massive JSON array collections. Use getHadiths.', 404);
  } catch (error) {
    next(error);
  }
};

// ─── GET /hadith/daily ───────────────────────────────────────────────────────
export const getDailyHadith = async (req, res, next) => {
  try {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    // Select from Nawawi collection primarily for the dashboard
    const hadiths = await prisma.hadith.findMany({
      where: { collection: 'Nawawi' },
      orderBy: { number: 'asc' }
    });

    if (hadiths.length === 0) {
      // Fallback to Bukhari if Nawawi isn't seeded yet
      const fallback = await prisma.hadith.findFirst({
        where: { collection: 'bukhari' },
        skip: dayOfYear % 100 // Just a random skip
      });
      return successResponse(res, fallback);
    }

    const daily = hadiths[dayOfYear % hadiths.length];
    successResponse(res, daily);
  } catch (error) {
    next(error);
  }
};
