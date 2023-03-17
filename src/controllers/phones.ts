import { type Request, type Response } from 'express';
import * as phonesServices from '../services/phones';

export const getPhones = async (req: Request, res: Response) => {
  const { page, perPage } = req.query;

  let pageValue = 1;
  let sizeValue = 16;

  if (!perPage && !page) {
    try {
      const phones = await phonesServices.getAll();

      res.send(phones);
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
    const phones = await phonesServices.getByParts(pageValue, sizeValue);

    res.send(phones);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getPhoneById = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const phone = await phonesServices.getOne(phoneId);

    if (!phone) {
      res.sendStatus(404);

      return;
    }

    res.send(phone);
  } catch (error) {
    res.sendStatus(400);
  }
};
