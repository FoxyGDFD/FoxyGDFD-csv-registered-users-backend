import { Request, Response, Router } from 'express';
import multer from 'multer';
import { UsersController } from '../controllers';
import { GeneralMiddlewares } from '../middlewares';
import { CommonRoutesConfig } from './router.common';

export class UserRoutes extends CommonRoutesConfig {
  constructor(
    router: Router,
    private controller: UsersController
  ) {
    super(router);
  }

  configureRoutes() {
    this.router
      .route('/users')
      .post(
        multer().single('csv'),
        GeneralMiddlewares.fileValidator,
        (req: Request, res: Response) =>
          this.controller.create.call(this.controller, req, res)
      )
      .get((req: Request, res: Response) =>
        this.controller.get.call(this.controller, req, res)
      );

    return this.router;
  }
}
