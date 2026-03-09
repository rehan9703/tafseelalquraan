import express from 'express';
import { getNames, getName } from '../controllers/name.controller.js';

const router = express.Router();

router.get('/', getNames);
router.get('/:id', getName);

export default router;
