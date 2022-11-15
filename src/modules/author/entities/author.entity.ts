import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, IsUUID } from 'class-validator';
import { Book } from 'src/modules/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column({ type: 'date' })
  @IsDateString()
  @ApiProperty({ type: 'string', format: 'YYYY-MM-DD' })
  dateOfBirth: Date;

  @Column()
  @IsString()
  pseudonym: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
