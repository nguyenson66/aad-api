import { IsString, IsUUID } from 'class-validator';
import { Book } from 'src/modules/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Publisher {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
