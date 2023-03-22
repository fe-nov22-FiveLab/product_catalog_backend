import { Sequelize } from 'sequelize-typescript';
import { Category } from '../models/Category';
import { Phone } from '../models/Phone';
import { PhoneDetail } from '../models/PhonesDetails';
import { Tablet } from '../models/Tablets';

require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URL, {
    models: [Phone, PhoneDetail, Category, Tablet],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true
      }
    }
  });
};
