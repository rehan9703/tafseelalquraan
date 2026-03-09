import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getProphets = async (req, res, next) => {
  try {
    const prophets = await prisma.prophet.findMany({
      orderBy: { orderNumber: 'asc' },
      select: {
        id: true,
        nameArabic: true,
        nameEnglish: true,
        title: true,
        nation: true,
        orderNumber: true,
        periodEra: true,
      },
    });

    successResponse(res, prophets);
  } catch (error) {
    next(error);
  }
};

export const getProphet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prophet = await prisma.prophet.findUnique({
      where: { id },
    });

    if (!prophet) {
      return errorResponse(res, 'Prophet not found', 404);
    }

    successResponse(res, prophet);
  } catch (error) {
    next(error);
  }
};
