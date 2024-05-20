import { usersRepository } from '../repositories';
import { csvToJson } from '../utils';

export class UserService {
  async loadUsers(file: Express.Multer.File) {
    const registeredList = csvToJson(file?.buffer.toString());

    const loadedUser = await usersRepository.loadUsers(registeredList);
    return loadedUser;
  }

  async get() {
    return await usersRepository.get();
  }
  async filter(section: string = '') {
    return await usersRepository.filterBySection(section);
  }
}
