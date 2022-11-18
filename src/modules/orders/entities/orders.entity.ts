import { CartEntity } from 'src/modules/carts/entities/carts.entity';
import { CashEntity } from 'src/modules/cash/entities/cash.entity';
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

@Entity({ name: 'Order' })
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => CashEntity, (cash) => cash.id)
  @JoinColumn()
  @Column({ nullable: false })
  cashId: string;

  @OneToOne(() => CartEntity, (cart) => cart.id)
  @JoinColumn()
  @Column({ nullable: false })
  cartId: string;

  @Column({ type: 'decimal', nullable: false })
  totalPrice: number;

  @Column({ nullable: false })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
