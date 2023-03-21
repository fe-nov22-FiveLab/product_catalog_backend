import { PhoneDetail } from './../models/PhonesDetails';
import { Phone } from '../models/Phone';

export const getAll = async (sort?: string) => {
  const sortBy = sort || 'id';
  let sortType = 'ASC';

  if (sort === 'year') {
    sortType = 'DESC';
  }

  const phones = await Phone.findAll({
    order: [[sortBy, sortType]],
    include: [
      {
        model: PhoneDetail,
        as: 'phoneDetails'
      }
    ]
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
    },
    include: [
      {
        model: PhoneDetail,
        as: 'phoneDetails'
      }
    ]
  });

export const getByParts = async (
  page: number,
  perPage: number,
  sort?: string
) => {
  const offset = (page - 1) * perPage;
  const sortBy = sort || 'id';
  let sortType = 'ASC';

  if (sort === 'year') {
    sortType = 'DESC';
  }

  const phones = await Phone.findAll({
    offset,
    limit: perPage,
    order: [[sortBy, sortType]],
    include: [
      {
        model: PhoneDetail,
        as: 'phoneDetails'
      }
    ]
  });

  const total = await Phone.count();

  return {
    phones,
    total,
    page,
    perPage
  };
};
