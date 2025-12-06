import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TODOEntity } from '../todo/todos.entity';
import { CompanyEntity } from '../company/companies.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => TODOEntity, (todo) => todo.user)
  todos: TODOEntity[];

  @ManyToOne(() => CompanyEntity, (company) => company.users, {
    nullable: true,
  })
  company: CompanyEntity;
}
