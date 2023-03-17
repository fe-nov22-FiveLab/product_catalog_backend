import { type Request, type Response } from 'express';
import * as phonesServices from '../services/phones';

export const getAll = (req: Request, res: Response) => {
  const phones = phonesServices.getAll();

  res.send(phones);
};
