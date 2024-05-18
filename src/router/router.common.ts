import type { Router } from 'express';

export abstract class CommonRoutesConfig {
  router: Router;

  constructor(router: Router) {
    this.router = router;
    this.configureRoutes();
  }

  abstract configureRoutes(): Router;
}
