import { Author } from 'src/modules/author/entities/author.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { Publisher } from 'src/modules/publisher/entities/publisher.entity';
import { Image } from 'src/modules/images/entities/image.entity';
import { Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class Book {
  @Column()
  title: string;

  @Column()
  language: string;

  @Column()
  numberOfPages: number;

  @Column({ type: 'date' })
  publishDate: Date;

  @OneToOne(() => Category)
  category: Category;

  @ManyToOne(() => Publisher, (publisher) => publisher.books)
  publisher: Publisher;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @OneToMany(() => Image, (image) => image.book)
  images: Image[];
}
