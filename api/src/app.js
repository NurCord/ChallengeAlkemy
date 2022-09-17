import express from 'express';
import { router } from '../routes/index.js'
import cors from 'cors'
import morgan from 'morgan'
const app = express();
 
app.use(express.json());
app.use(morgan('dev'))
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization'],
  }),
);

app.use('/', router);

export default app;