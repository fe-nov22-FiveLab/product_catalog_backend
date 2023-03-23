import { Op } from 'sequelize';
import { TabletDetail } from '../models/TabletDetails';
import { Tablet } from '../models/Tablets';

export const getAll = async (sort?: string, query?: string) => {
  const sortBy = sort || 'id';
  let sortType = 'ASC';

  if (sort === 'year') {
    sortType = 'DESC';
  }

  const tablets = await Tablet.findAll({
    order: [[sortBy, sortType]],
    where: {
      name: {
        [Op.iLike]: query ? `%${query}%` : '%'
      }
    },
    include: [
      {
        model: TabletDetail,
        as: 'tabletDetails'
      }
    ]
  });

  const total = await Tablet.count({
    where: {
      name: {
        [Op.iLike]: query ? `%${query}%` : '%'
      }
    }
  });

  return {
    tablets,
    total
  };
};

export const getByParts = async (
  page: number,
  perPage: number,
  sort?: string,
  query?: string
) => {
  const offset = (page - 1) * perPage;
  const sortBy = sort || 'id';
  let sortType = 'ASC';

  if (sort === 'year') {
    sortType = 'DESC';
  }

  const tablets = await Tablet.findAll({
    offset,
    limit: perPage,
    order: [[sortBy, sortType]],
    where: {
      name: {
        [Op.iLike]: query ? `%${query}%` : '%'
      }
    },
    include: [
      {
        model: TabletDetail,
        as: 'tabletDetails'
      }
    ]
  });

  const total = await Tablet.count({
    where: {
      name: {
        [Op.iLike]: query ? `%${query}%` : '%'
      }
    }
  });

  return {
    tablets,
    total,
    page,
    perPage
  };
};
