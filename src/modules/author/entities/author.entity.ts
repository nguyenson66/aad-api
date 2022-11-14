import { Book } from 'src/modules/book/entities/book.entity';
import { Column, OneToMany } from 'typeorm';

export class Author {
  @Column()
  name: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  pseudonym: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
