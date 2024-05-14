import { Sequelize } from 'sequelize';
import { User } from '../models';
import { logger } from '../utils';

export class SectionRepository {
  constructor() {
    logger.log('Created new instance of SectionDao');
  }

  static async get() {
    return await User.findAll({
      attributes: [
        [
          Sequelize.literal('DISTINCT `Секция_конференции_`'),
          'Секция_конференции_',
        ],
      ],
    });
  }
}
