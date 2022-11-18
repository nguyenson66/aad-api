
import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    BaseEntity,
} from 'typeorm';
    
@Entity({ name: 'Address' })
export class AddressEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
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
    