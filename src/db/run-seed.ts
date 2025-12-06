import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import 'dotenv/config';
import { TODOEntity } from '../entity/todo/todos.entity';
import { UserEntity } from '../entity/user/users.entity';
import { CompanyEntity } from '../entity/company/companies.entity';

(async () => {
  const options: DataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [TODOEntity, UserEntity, CompanyEntity],
  };

  const dataSource = new DataSource(options);
  await dataSource.initialize();

  runSeeders(dataSource, {
    seeds: ['src/db/seeds/**/*{.ts,.js}'],
    factories: ['src/db/factories/**/*{.ts,.js}'],
  });
})();
