import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/response.js';

const prisma = new PrismaClient();

// Get all issues
export const getIssues = async (req, res, next) => {
    try {
        const { category } = req.query;

        const where = {};
        if (category) {
            where.category = { equals: category, mode: 'insensitive' };
        }

        const issues = await prisma.islamicIssue.findMany({
            where,
            orderBy: { title: 'asc' },
        });

        successResponse(res, issues);
    } catch (error) {
        next(error);
    }
};

// Get a single issue by ID
export const getIssueById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const issue = await prisma.islamicIssue.findUnique({
            where: { id },
        });

        if (!issue) {
            return errorResponse(res, 'Issue not found', 404);
        }

        successResponse(res, issue);
    } catch (error) {
        next(error);
    }
};

// Create a new issue (Admin only normally, but simple for now)
export const createIssue = async (req, res, next) => {
    try {
        const { title, description, consequences, reasonsToAvoid, howToFix, evidenceQuran, evidenceHadith, category, iconType, colorScheme } = req.body;

        // Check if title already exists
        const existing = await prisma.islamicIssue.findUnique({ where: { title } });
        if (existing) {
            return errorResponse(res, 'An issue with this title already exists', 400);
        }

        const issue = await prisma.islamicIssue.create({
            data: {
                title,
                description,
                consequences,
                reasonsToAvoid,
                howToFix,
                evidenceQuran,
                evidenceHadith,
                category,
                iconType: iconType || 'AlertTriangle',
                colorScheme: colorScheme || 'from-red-500/20 to-red-600/10'
            }
        });

        successResponse(res, issue, 'Issue created successfully', 201);
    } catch (error) {
        next(error);
    }
};

// Update an issue
export const updateIssue = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const issue = await prisma.islamicIssue.update({
            where: { id },
            data: updateData
        });

        successResponse(res, issue, 'Issue updated successfully');
    } catch (error) {
        // Check for "Record to update not found."
        if (error.code === 'P2025') {
            return errorResponse(res, 'Issue not found', 404);
        }
        next(error);
    }
};

// Delete an issue
export const deleteIssue = async (req, res, next) => {
    try {
        const { id } = req.params;

        await prisma.islamicIssue.delete({
            where: { id },
        });

        successResponse(res, null, 'Issue deleted successfully');
    } catch (error) {
        if (error.code === 'P2025') {
            return errorResponse(res, 'Issue not found', 404);
        }
        next(error);
    }
};
