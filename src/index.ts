import dotenv from 'dotenv';
import express from 'express';
import { init } from './db';
import { GeneralMiddlewares } from './middlewares';
import { router } from './router';
import { logger } from './utils';

dotenv.config();

class App {
  app = express();
  port = process.env.PORT || 3000;

  applyMiddlewares() {
    this.app.use(express.json());

    this.app.use(router);

    this.app.use(GeneralMiddlewares.cors);

    this.app.use(GeneralMiddlewares.loggerMiddleware);
  }

  async start() {
    this.applyMiddlewares();

    await init().then(() =>
      this.app.listen(this.port, () => {
        logger.log(`Listening to port:${this.port}`);
      })
    );
  }
}

export const app = new App().start();