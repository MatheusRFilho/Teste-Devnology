import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import './database';
import 'express-async-errors';
import { router } from './routes';
import { AppError } from './errors/AppError';

import cors from 'cors';

// createConnection();
const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      stattus: 'Error',
      message: `Internal server error ${err.message}`,
    });
  },
);

export { app };
