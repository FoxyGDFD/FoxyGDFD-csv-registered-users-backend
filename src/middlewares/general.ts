import type { NextFunction, Request, Response } from 'express';
import path from 'path';
import { ALLOWED_FILE_EXTENSION } from '../constants';
import { logger } from '../utils';

export class GeneralMiddlewares {
  static fileValidator = (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;

    if (!file) return res.status(400).send('No file loaded');
    if (Array.isArray(file))
      return res.status(400).send('To many files loaded');

    const extensionName = path.extname(file.originalname); // fetch the file extension
    if (!ALLOWED_FILE_EXTENSION.includes(extensionName))
      return res.status(400).send('Invalid file extension');

    next();
  };

  static loggerMiddleware = (req: Request, _: Response, next: NextFunction) => {
    logger.log(`${req.method} ${req.path}`);
    next();
  };

  static cors = (req: Request, res: Response, next: NextFunction) => {
    const origins = ['http://localhost:5173'];

    origins.forEach(origin => {
      if (req.headers.origin?.includes(origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
      }
    });

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
  };
}
