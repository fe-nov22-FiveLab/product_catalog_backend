import { type Request, type Response } from 'express';
import * as categoriesService from '../services/categories';

export const getAll = async (req: Request, res: Response) => {
  try {
    const foundCategories = await categoriesService.getAll();

    res.send(foundCategories);
  } catch (error) {
    res.sendStatus(400);
  }
};
