import express from 'express';
import {
    getIssues,
    getIssueById,
    createIssue,
    updateIssue,
    deleteIssue
} from '../controllers/issue.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getIssues);
router.get('/:id', getIssueById);

// Protected/Admin routes
// Assuming only admins can create, update, delete issues
router.post('/', authenticate, requireAdmin, createIssue);
router.put('/:id', authenticate, requireAdmin, updateIssue);
router.delete('/:id', authenticate, requireAdmin, deleteIssue);

export default router;
