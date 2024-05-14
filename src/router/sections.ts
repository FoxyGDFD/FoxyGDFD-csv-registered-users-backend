import { Router } from 'express';
import { SectionController } from '../controllers';
import { CommonRoutesConfig } from './router.common';

export class SectionRoutes extends CommonRoutesConfig {
  constructor(router: Router) {
    super(router, 'section');
  }

  configureRoutes() {
    this.router.route('/sections').get(SectionController.get);
    return this.router;
  }
}
