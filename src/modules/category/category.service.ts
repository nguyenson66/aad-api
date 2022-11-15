import { Injectable } from '@nestjs/common';
import { FResponse } from 'src/common/utils/format-response';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const createCategory = await this.categoryRepository.save(
      createCategoryDto,
    );
    return FResponse(true, createCategory);
  }

  async findAll() {
    const categoriesList = await this.categoryRepository.find({});
    return FResponse(true, categoriesList);
  }

  async findOne(id: string) {
    const categoryFound = await this.categoryRepository.findOneOrThrowEx({
      id,
    });
    return FResponse(true, categoryFound);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const { type } = updateCategoryDto;
    const updatedCategory = await this.categoryRepository.findOneAndUpdate(
      { id },
      { type },
    );
    return FResponse(true, updatedCategory, 'Update successfuly');
  }

  async remove(id: string) {
    const deletedCategory = await this.categoryRepository.findOneAndDelete({
      id,
    });
    if (!deletedCategory) return FResponse(false, null, 'Delete failed');
    return FResponse(true, deletedCategory, 'Delete successfuly');
  }
}
