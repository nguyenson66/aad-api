import { NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class BaseRepository<T> extends Repository<T> {
  async exist(filter: FindOptionsWhere<T>) {
    const entityFound = await this.findOneBy(filter);
    if (!entityFound) return false;
    return true;
  }

  async findOneAndUpdate(
    filter: FindOptionsWhere<T>,
    data: QueryDeepPartialEntity<T>,
  ) {
    const updateEntity = await this.findOneOrThrowEx(filter);
    const updateResult = await this.update(filter, data);
    if (updateResult.affected === 0) return null;
    const updatedEntity = await this.findOneBy(filter);
    return updatedEntity;
  }

  async findOneAndDelete(filter: FindOptionsWhere<T>) {
    const deleteEntity = await this.findOneOrThrowEx(filter);
    const deleteResult = await this.delete(filter);
    if (deleteResult.affected === 0) return null;
    return deleteEntity;
  }

  async findOneOrThrowEx(filter: FindOptionsWhere<T>) {
    const entityFound = await this.findOneBy(filter);
    if (!entityFound) throw new NotFoundException();
    return entityFound;
  }
}
