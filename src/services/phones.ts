import { Phone } from '../models/Phone';

export const getAll = async (sort?: string) => {
  const sortBy = sort || 'id';

  const phones = await Phone.findAll({
    order: [[sortBy, 'ASC']]
  });

  const total = await Phone.count();

  return {
    phones,
    total
  };
};

export const getOne = (phoneId: string) =>
  Phone.findOne({
    where: {
      phoneId
    }
  });

export const getByParts = async (
  page: number,
  perPage: number,
  sort?: string
) => {
  const offset = (page - 1) * perPage;
  const sortBy = sort || 'id';

  const phones = await Phone.findAll({
    offset,
    limit: perPage,
    order: [[sortBy, 'ASC']]
  });

  const total = await Phone.count();

  return {
    phones,
    total,
    page,
    perPage
  };
};
