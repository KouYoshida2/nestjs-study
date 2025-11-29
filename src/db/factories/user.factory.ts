import { setSeederFactory } from 'typeorm-extension';

import { randomUUID } from 'crypto';
import { TodoStatus } from '../../entity/todo/status.enum';
import { UserEntity } from '../../entity/user/users.entity';

export default setSeederFactory(UserEntity, (faker) => {
  const user = new UserEntity();
  user.id = randomUUID();
  user.name = faker.person.fullName();

  return user;
});
