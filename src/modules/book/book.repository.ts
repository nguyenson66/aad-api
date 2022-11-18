import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/shared/base-repository';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

export class BookRepository extends BaseRepository<Book> {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {
    super(Book, bookRepo.manager);
  }
}
