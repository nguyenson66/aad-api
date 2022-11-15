import { Author } from 'src/modules/author/entities/author.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { Publisher } from 'src/modules/publisher/entities/publisher.entity';
import { Image } from 'src/modules/images/entities/image.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
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
