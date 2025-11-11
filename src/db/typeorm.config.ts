import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config({ path: '.env' });

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: ['../**/*.entity{.ts,.js}'],
  migrations: ['./migration/**/*.ts'],
  synchronize: true, // 本番ではfalseにする 挙動確認しておきたい
  logging: false,
};
