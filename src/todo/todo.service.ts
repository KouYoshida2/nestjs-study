import { Inject, Injectable } from '@nestjs/common';
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodoDto,
  GetTodoListDto,
  UpdateTodoDto,
} from '../dto/todo/todos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TODOEntity } from '../entity/todo/todos.entity';
import { Repository } from 'typeorm';
import { TodoStatus } from '../entity/todo/status.enum';

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
      status: TodoStatus[todo.status],
      dueOn: todo.dueOn,
    });

    return result;
  }

  async getAll(query: GetTodoListDto) {
    const { size: sizeParam, page: pageParam } = query;

    const size = sizeParam ?? 10;
    const page = pageParam ?? 1;

    const result = this.todosRepository.find({
      where: { deleted_at: undefined },
      skip: (page - 1) * size,
      take: size,
    });
    return result;
  }

  async update(todo: UpdateTodoDto) {
    const result = await this.todosRepository.findOneByOrFail({
      id: todo.id,
    });

    if (todo.status) {
      result.status = TodoStatus[todo.status];
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
