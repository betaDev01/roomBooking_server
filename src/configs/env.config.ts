import * as dotenv from 'dotenv';
dotenv.config();

export const {
  SERVER_PORT,
  SECRET_KEY,
  DATABASE_URL,
  DATABASE_USER,
  DATABASE_DB_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT
} = process.env;
