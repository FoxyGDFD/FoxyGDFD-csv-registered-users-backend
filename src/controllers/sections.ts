import type { Request, Response } from 'express';
import { SectionService } from '../services';

export class SectionController {
  constructor(private readonly service: SectionService) {}

  get(_: Request, res: Response) {
    (async () => {
      await this.service.get().then(users => res.status(200).send(users));
    })().catch(err => res.status(500).send(err));
  }
}
