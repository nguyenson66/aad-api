import { Book } from 'src/modules/book/entities/book.entity';
import { Column, OneToMany } from 'typeorm';

export class Publisher {
  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Book[];
}
