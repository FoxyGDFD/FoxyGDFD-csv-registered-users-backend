import { Request, Response, Router } from 'express';
import { SectionController } from '../controllers';
import { CommonRoutesConfig } from './router.common';

export class SectionRoutes extends CommonRoutesConfig {
  constructor(
    router: Router,
    private controller: SectionController
  ) {
    super(router);
  }

  configureRoutes() {
    this.router
      .route('/sections')
      .get((req: Request, res: Response) =>
        this.controller.get.call(this.controller, req, res)
      );
    return this.router;
  }
}
