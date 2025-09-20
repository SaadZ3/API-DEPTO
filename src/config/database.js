require('dotenv').config();

module.exports = {

  /* MySQL / MariaDB */
  dialect: 'mariadb',
  // storage: './db.sqlite',

  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true, // define as colunas com snake_case
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
