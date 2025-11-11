import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './db/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig)],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
