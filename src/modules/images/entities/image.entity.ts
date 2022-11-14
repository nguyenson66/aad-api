import { Book } from 'src/modules/book/entities/book.entity';
import { Column, ManyToOne } from 'typeorm';

export class Image {
  @Column()
  content: string;

  @ManyToOne(() => Book, (book) => book.images)
  book: Book;
}
