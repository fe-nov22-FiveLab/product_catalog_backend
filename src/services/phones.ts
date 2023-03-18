import { Phone } from '../models/Phone';
import { PhoneDetail } from '../models/PhonesDetails';

export const getAll = async () => {
  const phones = await Phone.findAll();

  const total = await Phone.count();

  return {
    phones,
    total
  };
};

export const getOne = (phoneId: string) => PhoneDetail.findByPk(phoneId);

export const getByParts = async (page: number, size: number) => {
  const offset = (page - 1) * size;

  const phones = await Phone.findAll({
    offset,
    limit: size
  });

  const total = await Phone.count();

  return {
    phones,
    total,
    page,
    perPage: size
  };
};
