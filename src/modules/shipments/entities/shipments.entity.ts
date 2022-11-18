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

@Entity({ name: 'Shipment' })
export class ShipmentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => OrderEntity, (order) => order.id)
  @JoinColumn()
  @Column({ nullable: false })
  orderId: string;

  @Column({ nullable: false })
  shipPrice: string;

  @Column({ nullable: false })
  type: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
