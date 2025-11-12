import { TypeOrmModule } from '@nestjs/typeorm';
import { TODOEntity } from '../entity/todo/todos.entity';
import { Module } from '@nestjs/common';
import { TodosService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TODOEntity])],
  exports: [TypeOrmModule],
  providers: [TodosService],
  controllers: [TodoController],
})
export class TodosModule {}
