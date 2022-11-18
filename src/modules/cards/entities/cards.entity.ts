import { OrderEntity } from 'src/modules/orders/entities/orders.entity';
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

@Entity({ name: 'Card' })
export class CardEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => OrderEntity, (order) => order.id)
  @JoinColumn()
  @Column({ nullable: false })
  orderId: string;

  @Column({ nullable: false })
  desCardNumber: string;

  @Column({ nullable: false })
  desAccountName: string;

  @Column({ nullable: false })
  desBank: string;

  @Column({ nullable: false })
  srcBank: string;

  @Column({ nullable: false })
  srcBankNumber: string;

  @Column({ nullable: false })
  srcAccountName: string;

  @Column({ nullable: false })
  total: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
