import { Router } from 'express';
import multer from 'multer';
import { UsersController } from '../controllers';
import { GeneralMiddlewares } from '../middlewares';
import { CommonRoutesConfig } from './router.common';

export class UserRoutes extends CommonRoutesConfig {
  constructor(router: Router) {
    super(router, 'registeredUsers');
  }

  configureRoutes() {
    this.router
      .route('/users')
      .post(
        multer().single('csv'),
        GeneralMiddlewares.fileValidator,
        UsersController.create
      )
      .get(UsersController.get);

    return this.router;
  }
}
