import { CustomerEntity } from 'src/modules/customers/entities/customers.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'Cart' })
export class CartEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.id)
  @JoinColumn()
  @Column({ nullable: false })
  customerId: string;

  @Column({ nullable: false })
  itemId: string;

  @Column({ type: 'decimal', nullable: false })
  amount: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
