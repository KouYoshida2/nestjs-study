import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TodoStatus } from './status.enum';
import { UserEntity } from '../user/users.entity';

@Entity('todos')
export class TODOEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'enum', enum: TodoStatus })
  status: (typeof TodoStatus)[keyof typeof TodoStatus];

  @Column({ type: 'date', nullable: true })
  dueOn: Date;

  @CreateDateColumn({
    update: false,
  })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.todos)
  user: UserEntity;
}
