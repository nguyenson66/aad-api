import { Injectable } from '@nestjs/common';
import { FResponse } from 'src/common/utils/format-response';
import { CategoryRepository } from './category.repository';
import { CategoryServiceImpl } from './category.service.interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService implements CategoryServiceImpl {
  constructor(private cateRepo: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const createCate = await this.cateRepo.save(createCategoryDto);
    return FResponse(true, createCate);
  }

  async findAll() {
    const listCates = await this.cateRepo.find({});
    return FResponse(true, listCates);
  }

  async findOne(id: string) {
    const foundCate = await this.cateRepo.findOneOrThrowEx({
      id,
    });
    return FResponse(true, foundCate);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const { type } = updateCategoryDto;
    const updatedCate = await this.cateRepo.findOneAndUpdate({ id }, { type });
    if (!updatedCate) return FResponse(false, null, 'Delete failed');
    return FResponse(true, updatedCate, 'Update successfuly');
  }

  async remove(id: string) {
    const deletedCate = await this.cateRepo.findOneAndDelete({
      id,
    });
    if (!deletedCate) return FResponse(false, null, 'Delete failed');
    return FResponse(true, deletedCate, 'Delete successfuly');
  }
}
