import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/common/shared/base-repository';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

export class CategoryRepository extends BaseRepository<Category> {
  constructor(
    @InjectRepository(Category)
    private cateRepo: Repository<Category>,
  ) {
    super(Category, cateRepo.manager);
  }
}
