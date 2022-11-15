import { Book } from 'src/modules/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  pseudonym: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
