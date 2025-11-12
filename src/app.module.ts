import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './db/typeorm.config';
import { TodosService } from './todo/todo.service';
import { TodosModule } from './todo/todos.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
