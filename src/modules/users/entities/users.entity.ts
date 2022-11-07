import { EGender, EStatus } from 'src/common/constants/common.constants';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, name: 'first_name' })
  firstName: string;

  @Column({ nullable: false, name: 'last_name' })
  lastName: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false, unique: true })
  phone: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false, unique: true })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false, enum: EStatus, default: EStatus.Active })
  status: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ nullable: false, enum: EGender })
  gender: string;

  @Exclude()
  @Column({ nullable: false })
  password: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false })
  salt: string;

  @Exclude({ toPlainOnly: true })
  @Column({ nullable: false, default: false, name: 'is_verified' })
  isVerified: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
