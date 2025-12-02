import { TypeOrmModule } from '@nestjs/typeorm';
import { TODOEntity } from '../entity/todo/todos.entity';
import { Module } from '@nestjs/common';
import { TodosService } from './todo.service';
import { TodoController } from './todo.controller';
import { UserEntity } from '../entity/user/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TODOEntity, UserEntity])],
  exports: [TypeOrmModule],
  providers: [TodosService],
  controllers: [TodoController],
})
export class TodosModule {}
