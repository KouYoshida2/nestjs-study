import { setSeederFactory } from 'typeorm-extension';
import { TODOEntity } from '../../entity/todo/todos.entity';
import { randomUUID } from 'crypto';
import { TodoStatus } from '../../entity/todo/status.enum';
import { UserEntity } from '../../entity/user/users.entity';

export default setSeederFactory(TODOEntity, (faker) => {
  const todo = new TODOEntity();
  todo.id = randomUUID();
  todo.title = faker.word.verb();
  todo.status = TodoStatus.TODO;
  todo.dueOn = faker.date.future();
  const user = new UserEntity();
  user.id = '004816e7-e278-4c76-a6ea-1f94996613d4';

  todo.user = user;

  return todo;
});
