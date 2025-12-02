import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false, // trueにするとアプリケーション起動時に自動的にマイグレーションがかかるようになる
  logging: true,
  autoLoadEntities: true,
};
