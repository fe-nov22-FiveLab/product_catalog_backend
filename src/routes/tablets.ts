import express from 'express';
import * as tabletsController from '../controllers/tablets';

export const router = express.Router();

router.get('/', tabletsController.getPhones);
router.get('/:phoneId', tabletsController.getTabletById);
