import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodoDto,
  UpdateTodoDto,
} from '../dto/todo/todos.dto';
import { TodosService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodosService) {}

  @Get(':id')
  async getOne(@Param() params: GetTodoDto) {
    return this.todoService.get(params);
  }

  @Get('list')
  async getList() {
    return await this.todoService.getAll();
  }

  @Post('create')
  async createPost(@Body() createTodoDto: CreateTodoDto) {
    await this.todoService.create(createTodoDto);
  }

  @Put('update')
  async updatePost(@Body() updateTodoDto: UpdateTodoDto, @Param() id: string) {
    await this.todoService.update(updateTodoDto);
  }

  @Delete('delete/:id')
  async deletePost(@Param() params: DeleteTodoDto) {
    await this.todoService.delete(params);
  }
}
