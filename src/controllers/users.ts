import type { Request, Response } from 'express';
import { UserService } from '../services';

export class UsersController {
  static create = (req: Request, res: Response) => {
    void (async () =>
      await UserService.loadUsers(req).then(data =>
        res.status(200).send(data)
      ))();
  };

  static get = (req: Request, res: Response) => {
    void (async () =>
      await UserService.get(req).then(users => res.status(200).send(users)))();
  };
}
