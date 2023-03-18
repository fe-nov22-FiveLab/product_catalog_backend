import { type Request, type Response } from 'express';
import * as phoneServices from '../services/phoneInfo';

export const getPhoneDetails = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await phoneServices.getOne(phoneId);

    if (!foundPhone) {
      res.sendStatus(404);

      return;
    }

    res.send(foundPhone);
  } catch (error) {
    res.sendStatus(400);
  }
};
