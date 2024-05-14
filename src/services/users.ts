import type { Request } from 'express';
import { usersRepository } from '../repositories';
import { csvToJson } from '../utils';

export class UserService {
  static async loadUsers(req: Request) {
    const registeredList = csvToJson(
      (req.file as Express.Multer.File)?.buffer.toString()
    );

    const loadedUser = await usersRepository.loadUsers(registeredList);
    return loadedUser;
  }

  static async get(req: Request) {
    const { section } = req.query;

    if (!section) return await usersRepository.get();
    return await usersRepository.filterBySection(section as string);
  }
}
