import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { TODOEntity } from '../../entity/todo/todos.entity';

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
    // const repository = dataSource.getRepository(TODOEntity);
    // await repository.insert([
    //   {
    //     status: 'completed' as any,
    //   },
    // ]);

    // ---------------------------------------------------

    const todoFactory = factoryManager.get(TODOEntity);
    // save 5 factory generated entities, to the database
    await todoFactory.saveMany(10);
  }
}
