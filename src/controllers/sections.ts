import type { Request, Response } from 'express';
import { SectionService } from '../services';

export class SectionController {
  static get = (_: Request, res: Response) => {
    void (async () =>
      await SectionService.get().then(users => res.status(200).send(users)))();
  };
}
