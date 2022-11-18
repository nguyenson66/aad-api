import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-items.dto';
import { UpdateItemDto } from './dto/update-items.dto';
import { ItemEntity } from './entities/items.entity';

@Injectable()
export class ItemRepository extends Repository<ItemEntity> {
  constructor(private dataSource: DataSource) {
    super(ItemEntity, dataSource.createEntityManager());
  }
  createItem = (itemDto: CreateItemDto) => {
    return this.save(itemDto);
  };
  updateItem = (id: string, itemDto: UpdateItemDto) => {
    return this.save({ ...itemDto, id });
  };
  findOneItem = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneItem = (id: string) => {
    return this.delete({ id });
  };
}
