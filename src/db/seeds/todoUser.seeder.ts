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
    const companies = await companyFactory.saveMany(5, { users });

    companies.forEach(async (company, i) => {
      await todoFactory.saveMany(5, { user: users[i] });
    });
  }
}
