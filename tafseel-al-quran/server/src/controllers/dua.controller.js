import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getDuas = async (req, res, next) => {
  try {
    const { situation } = req.query;

    const where = {};
    if (situation) {
      where.situation = { contains: situation, mode: 'insensitive' };
    }

    const duas = await prisma.dua.findMany({
      where,
      orderBy: { titleEN: 'asc' },
    });

    successResponse(res, duas);
  } catch (error) {
    next(error);
  }
};

export const getDua = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dua = await prisma.dua.findUnique({
      where: { id },
    });

    if (!dua) {
      return errorResponse(res, 'Dua not found', 404);
    }

    successResponse(res, dua);
  } catch (error) {
    next(error);
  }
};
