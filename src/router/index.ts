import { Router } from 'express';
import { SectionController, UsersController } from '../controllers';
import { SectionService, UserService } from '../services';
import { SectionRoutes } from './sections';
import { UserRoutes } from './users';

export const router = Router();

router.use(
  '/api',
  new SectionRoutes(
    router,
    new SectionController(new SectionService())
  ).configureRoutes()
);

router.use(
  '/api',
  new UserRoutes(
    router,
    new UsersController(new UserService())
  ).configureRoutes()
);
