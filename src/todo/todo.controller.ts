import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodoDto,
  GetTodoListDto,
  UpdateTodoDto,
} from '../dto/todo/todos.dto';
import { TodosService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodosService) {}

  @Get('list')
  async getList(@Query() query: GetTodoListDto) {
    return await this.todoService.getAll(query);
  }

  @Get(':id')
  async getOne(@Param() params: GetTodoDto) {
    return this.todoService.get(params);
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
