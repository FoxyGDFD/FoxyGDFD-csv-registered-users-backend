import { Router } from 'express';
import { SectionRoutes } from './sections';
import { UserRoutes } from './users';

export const router = Router();

router.use('/api', new SectionRoutes(router).configureRoutes());
router.use('/api', new UserRoutes(router).configureRoutes());
