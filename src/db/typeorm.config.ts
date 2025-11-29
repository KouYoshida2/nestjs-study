import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import 'dotenv/config';

export const typeormConfig: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ''),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false, // trueにするとアプリケーション起動時に自動的にマイグレーションがかかるようになる
  logging: true,
  driver: process.env.DB_CONNECTION,
  seeds: ['src/db/seeds/**/*{.ts,.js}'],
  seedTracking: false,
  factories: ['src/db/factories/**/*{.ts,.js}'],
  entities: ['src/**/*.entity.{ts,js}'],
  migrations: ['src/db/migrations/*.{ts,js}'],
};
