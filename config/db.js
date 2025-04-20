// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     logging: false,
//   }
// );

// export default sequelize;
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
console.log('dotenv configuration loaded in db.js');
console.log('Database credentials from .env:', process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: (msg) => console.log('Sequelize Query:', msg), // Enable logging of SQL queries
  }
);

console.log('Sequelize instance created:', sequelize);

export default sequelize;