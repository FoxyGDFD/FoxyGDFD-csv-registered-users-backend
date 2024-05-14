import { Sequelize } from 'sequelize';
import { logger } from './utils';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

export const init = async () => {
  await sequelize.sync({ force: true });
  logger.log('Db connected');
};
