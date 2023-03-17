import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../models/Phone';

require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URL, {
    models: [Phone],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true
      }
    }
  });
};
