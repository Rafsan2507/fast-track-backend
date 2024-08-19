import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 5000,
  DB_URI: process.env.DB_URI ?? 'postgres://postgres:root@localhost:5432/peanut'
}

export default config;