
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
} from 'typeorm';
    
@Entity({ name: 'FullName' })
export class FullNameEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ nullable: false })
    customerId: string;
        
    @Column({ nullable: false })
    firstName: string;
        
    @Column({ nullable: false })
    lastName: string;
        
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
    