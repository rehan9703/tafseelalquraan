import express from 'express';
import {
    getBookmarks, addBookmark, removeBookmark,
    getProgress, updateProgress,
    getStreak, checkInStreak,
    updateSettings,
    adminGetAllUsers, adminUpdateUserStreak
} from '../controllers/user.controller.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/bookmarks', authenticate, getBookmarks);
router.post('/bookmarks', authenticate, addBookmark);
router.delete('/bookmarks/:id', authenticate, removeBookmark);

router.get('/progress', authenticate, getProgress);
router.post('/progress', authenticate, updateProgress);

router.get('/streak', authenticate, getStreak);
router.post('/streak/checkin', authenticate, checkInStreak);

router.patch('/settings', authenticate, updateSettings);

// Admin routes
router.get('/admin/users', authenticate, requireAdmin, adminGetAllUsers);
router.post('/admin/streak', authenticate, requireAdmin, adminUpdateUserStreak);

export default router;
