import type { Router } from 'express';

export abstract class CommonRoutesConfig {
  router: Router;
  name: string;

  constructor(router: Router, name: string) {
    this.router = router;
    this.name = name;
    this.configureRoutes();
  }

  getName() {
    return this.name;
  }

  abstract configureRoutes(): Router;
}
