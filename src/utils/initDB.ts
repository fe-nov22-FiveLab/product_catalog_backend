import { Sequelize } from 'sequelize-typescript';
import { Category } from '../models/Category';
import { Phone } from '../models/Phone';
import { PhoneInfo } from '../models/PhoneInfo';

require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URL, {
    models: [Phone, PhoneInfo, Category],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true
      }
    }
  });
};
