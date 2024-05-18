import dotenv from 'dotenv';
import express from 'express';
import { init } from './db';
import { GeneralMiddlewares } from './middlewares';
import { router } from './router';
import { logger } from './utils';

dotenv.config();

class App {
  app = express();
  port = Number(process.env.PORT) || 3000;
  hostname = process.env.HOSTNAME || '127.0.0.1';

  applyMiddlewares() {
    this.app.use(express.json());

    this.app.use(GeneralMiddlewares.cors);

    this.app.use(GeneralMiddlewares.loggerMiddleware);

    this.app.use('/', router);
  }

  async start() {
    await init().then(() => {
      this.app.listen(this.port, this.hostname, () => {
        logger.log(`Server listening on ${this.hostname}:${this.port}`);
      });
      this.applyMiddlewares();
    });
  }
}

export const app = new App().start();
