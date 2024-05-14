import { Op } from 'sequelize';
import type { UserDto } from '../dto';
import { User } from '../models';
import { logger } from '../utils';

class UsersRepository {
  constructor() {
    logger.log('Created new instance of UsersDao');
  }

  private async create(user: UserDto) {
    const newUser = await User.create(user);
    await newUser.save();
    return newUser;
  }

  loadUsers(users: UserDto[]) {
    const newUsers = Promise.all(
      users.map(async user => await this.create(user))
    );
    return newUsers;
  }

  get() {
    const users = User.findAll();
    return users;
  }

  filterBySection(section: string) {
    const users = User.findAll({
      where: {
        Секция_конференции_: {
          [Op.substring]: section,
        },
      },
    });

    return users;
  }
}

export const usersRepository = new UsersRepository();
