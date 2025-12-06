import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TODOEntity } from '../../entity/todo/todos.entity';
import { UserEntity } from '../../entity/user/users.entity';
import { CompanyEntity } from '../../entity/company/companies.entity';

export default class TodoSeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userFactory = factoryManager.get(UserEntity);
    const todoFactory = factoryManager.get(TODOEntity);
    const companyFactory = factoryManager.get(CompanyEntity);

    const users = await userFactory.saveMany(5);

    users.forEach(async (user) => {
      await todoFactory.saveMany(5, { user });
      await companyFactory.saveMany(1, { users: [user] });
    });
  }
}
