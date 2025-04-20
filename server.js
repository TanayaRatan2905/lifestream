// // File: server.js
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import sequelize from './config/db.js';
// import donorRoutes from './routes/donorRoutes.js';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use('/donors', donorRoutes);

// sequelize.sync().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`🚀 Server running on port ${process.env.PORT}`);
//   });
// });
// File: server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import donorRoutes from './routes/donorRoutes.js';
import bloodRequestRoutes from './routes/bloodRequestRoutes.js';

dotenv.config();
console.log('Environment variables loaded:', process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST, process.env.PORT);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/donors', donorRoutes);
app.use('/blood-requests', bloodRequestRoutes);
console.log('Routes mounted:');
console.log('- Donor routes on /donors');
console.log('- Blood request routes on /blood-requests');

sequelize.sync().then(() => {
  console.log('Sequelize synchronized successfully.');
  app.listen(process.env.PORT, () => {
    console.log(` Server running on port ${process.env.PORT}`);
  });
}).catch((error) => {
  console.error('Sequelize synchronization failed:', error);
});