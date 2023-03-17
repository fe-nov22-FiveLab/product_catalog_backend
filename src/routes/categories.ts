import express from 'express';
import * as categoriesController from '../controllers/categories';

export const router = express.Router();

router.get('/', categoriesController.getAll);
