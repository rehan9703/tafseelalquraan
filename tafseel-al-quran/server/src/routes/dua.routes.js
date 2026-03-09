import express from 'express';
import { getDuas, getDua } from '../controllers/dua.controller.js';

const router = express.Router();

router.get('/', getDuas);
router.get('/:id', getDua);

export default router;
