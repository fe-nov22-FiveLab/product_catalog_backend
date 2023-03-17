import { Category } from '../models/Category';

export const getAll = () => Category.findAll();
