import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getNames = async (req, res, next) => {
  try {
    const { category, search } = req.query;

    const where = {};
    if (category) {
      where.category = { contains: category, mode: 'insensitive' };
    }
    if (search) {
      where.OR = [
        { nameArabic: { contains: search, mode: 'insensitive' } },
        { transliteration: { contains: search, mode: 'insensitive' } },
        { meaningEN: { contains: search, mode: 'insensitive' } },
      ];
    }

    const names = await prisma.nameOfAllah.findMany({
      where,
      orderBy: { number: 'asc' },
    });

    successResponse(res, names);
  } catch (error) {
    next(error);
  }
};

export const getName = async (req, res, next) => {
  try {
    const { id } = req.params;
    const name = await prisma.nameOfAllah.findUnique({
      where: { id },
    });

    if (!name) {
      return errorResponse(res, 'Name not found', 404);
    }

    successResponse(res, name);
  } catch (error) {
    next(error);
  }
};
