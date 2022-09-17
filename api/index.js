import app from './src/app.js';
import { sequelize } from './src/db.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
  });
});