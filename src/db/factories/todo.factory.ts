import { setSeederFactory } from 'typeorm-extension';
import { TODOEntity } from '../../entity/todo/todos.entity';
import { randomUUID } from 'crypto';
import { TodoStatus } from '../../entity/todo/status.enum';

export default setSeederFactory(TODOEntity, (faker) => {
  const todo = new TODOEntity();
  todo.id = randomUUID();
  todo.title = faker.word.verb();
  todo.status = TodoStatus.TODO;
  todo.dueOn = faker.date.future();

  return todo;
});
