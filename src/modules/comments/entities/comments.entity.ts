import { CustomerEntity } from 'src/modules/customers/entities/customers.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'comment' })
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  bookId: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.id)
  @JoinColumn()
  @Column({ nullable: false })
  customerId: string;

  @Column({ nullable: false })
  comment: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
