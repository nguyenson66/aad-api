import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemRepository } from './items.repository';
import { CreateItemDto } from './dto/create-items.dto';
import { UpdateItemDto } from './dto/update-items.dto';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}

  async create(createItemDto: CreateItemDto) {
    return this.itemRepository.createItem(createItemDto);
  }

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: string) {
    const checkItem = await this.itemRepository.findOneBy({ id });
    if (!checkItem) {
      throw new NotFoundException();
    } else {
      return checkItem;
    }
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const checkItem = await this.itemRepository.findOneBy({ id });
    if (!checkItem) {
      throw new NotFoundException();
    } else {
      return this.itemRepository.updateItem(id, updateItemDto);
    }
  }

  async remove(id: string) {
    const checkItem = await this.itemRepository.findOneBy({ id });
    if (!checkItem) {
      throw new NotFoundException();
    } else {
      return this.itemRepository.removeOneItem(id);
    }
  }
}
