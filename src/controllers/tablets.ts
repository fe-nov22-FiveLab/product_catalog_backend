import { type Request, type Response } from 'express';
import * as tabletsService from '../services/tablets';

export const getPhones = async (req: Request, res: Response) => {
  const { page, perPage, sort, query } = req.query;

  const queryValue = query as string;
  const sortBy = sort as string;
  let pageValue = 1;
  let sizeValue = 16;

  if (!perPage && !page) {
    try {
      const tablets = await tabletsService.getAll(sortBy, queryValue);

      res.send(tablets);
    } catch (error) {
      res.sendStatus(400);
    }

    return;
  }

  if (perPage) {
    sizeValue = +perPage;
  }

  if (page) {
    pageValue = +page;
  }

  try {
    const tablets = await tabletsService.getByParts(
      pageValue,
      sizeValue,
      sortBy,
      queryValue
    );

    res.send(tablets);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getTabletById = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const phone = await tabletsService.getOne(phoneId);

    if (!phone) {
      res.sendStatus(404);

      return;
    }

    res.send(phone);
  } catch (error) {
    res.sendStatus(400);
  }
};
