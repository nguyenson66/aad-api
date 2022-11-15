import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/shared/base-repository';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

export class AuthorRepository extends BaseRepository<Author> {
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>,
  ) {
    super(Author, authorRepo.manager);
  }
}
