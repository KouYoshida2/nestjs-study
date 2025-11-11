import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { TODOEntity } from '../../entity/todo/todos.entity';
import { TodoStatus } from '../../entity/todo/status.enum';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  dueOn: string;

  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status: keyof typeof TodoStatus;
}

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsString()
  dueOn: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status: keyof typeof TodoStatus;
}
