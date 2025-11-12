import { Inject, Injectable } from '@nestjs/common';
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodoDto,
  UpdateTodoDto,
} from '../dto/todo/todos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TODOEntity } from '../entity/todo/todos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TODOEntity)
    private todosRepository: Repository<TODOEntity>,
  ) {}

  async get(params: GetTodoDto) {
    const result = await this.todosRepository.findOne({
      where: {
        id: params.id,
        deleted_at: undefined,
      },
    });
    if (!result) throw new Error('存在しません');
    return result;
  }

  async create(todo: CreateTodoDto) {
    const result = await this.todosRepository.insert({
      title: todo.title,
      status: todo.status,
      dueOn: todo.dueOn,
    });

    return result;
  }

  async getAll() {
    const result = this.todosRepository.find({
      where: { deleted_at: undefined },
    });
    return result;
  }

  async update(todo: UpdateTodoDto) {
    const result = await this.todosRepository.findOneByOrFail({
      id: todo.id,
    });

    if (todo.status) {
      result.status = todo.status;
    }

    if (todo.dueOn) {
      result.dueOn = new Date(todo.dueOn);
    }

    if (todo.title) {
      result.title = todo.title;
    }

    return await this.todosRepository.save(result);
  }

  async delete(params: DeleteTodoDto) {
    await this.todosRepository.softDelete({ id: params.id });
  }
}
