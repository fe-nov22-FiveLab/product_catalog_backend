import { Phone } from '../models/Phone';

export const getAll = () => Phone.findAll();

export const getOne = (phoneId: string) =>
  Phone.findOne({
    where: {
      phoneId
    }
  });

export const getByParts = async (page: number, size: number) => {
  const offset = (page - 1) * size;

  const phones = await Phone.findAll({
    offset,
    limit: size
  });

  const total = await Phone.count();

  return {
    phones,
    info: {
      total,
      page,
      size
    }
  };
};
