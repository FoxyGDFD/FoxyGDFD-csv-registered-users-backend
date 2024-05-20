import type { Request, Response } from 'express';
import { UserService } from '../services';

export class UsersController {
  constructor(private readonly service: UserService) {}

  create(req: Request, res: Response) {
    (async () =>
      await this.service
        .loadUsers(req.file as Express.Multer.File)
        .then(users => res.status(201).send(users)))().catch(err =>
      res.status(500).send(err)
    );
  }

  get(req: Request, res: Response) {
    (async () => {
      const { section } = req.query;

      if (section)
        await this.service
          .filter(section as string)
          .then(users => res.status(200).send(users));
      else await this.service.get().then(users => res.status(200).send(users));
    })().catch(err => res.status(500).send(err));
  }
}
