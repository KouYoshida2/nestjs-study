import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TodoStatus } from './status.enum';

@Entity('todos')
export class TODOEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'char', nullable: false })
  title: string;

  @Column({ type: 'enum', enum: TodoStatus })
  status: keyof typeof TodoStatus;

  @Column({ type: 'date' })
  dueOn: Date;

  @CreateDateColumn({
    update: false,
  })
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
