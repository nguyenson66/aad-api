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

@Entity({ name: 'address' })
export class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.id)
  @JoinColumn()
  @Column({ nullable: false })
  customerId: string;

  @Column({ nullable: false })
  numberHouse: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  city: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
