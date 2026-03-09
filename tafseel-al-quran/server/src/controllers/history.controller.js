import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

export const getEvents = async (req, res, next) => {
  try {
    const { era, search, category } = req.query;

    const where = {};
    if (era) {
      where.era = { contains: era, mode: 'insensitive' };
    }
    if (category) {
      where.category = { contains: category, mode: 'insensitive' };
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const events = await prisma.islamicEvent.findMany({
      where,
      orderBy: { year: 'asc' },
    });

    successResponse(res, events);
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await prisma.islamicEvent.findUnique({
      where: { id },
    });

    if (!event) {
      return errorResponse(res, 'Event not found', 404);
    }

    successResponse(res, event);
  } catch (error) {
    next(error);
  }
};
