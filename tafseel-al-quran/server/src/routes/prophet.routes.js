import express from 'express';
import { getProphets, getProphet } from '../controllers/prophet.controller.js';

const router = express.Router();

router.get('/', getProphets);
router.get('/:id', getProphet);

export default router;
