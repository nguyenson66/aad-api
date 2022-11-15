import { IsString, IsUUID } from 'class-validator';
import { Book } from 'src/modules/book/entities/book.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  url: string;

  @ManyToOne(() => Book, (book) => book.images)
  book: Book;
}
