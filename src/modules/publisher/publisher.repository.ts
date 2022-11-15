import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/shared/base-repository';
import { Repository } from 'typeorm';
import { Publisher } from './entities/publisher.entity';

export class PublisherRepository extends BaseRepository<Publisher> {
  constructor(
    @InjectRepository(Publisher)
    private publisherRepo: Repository<Publisher>,
  ) {
    super(Publisher, publisherRepo.manager);
  }
}
