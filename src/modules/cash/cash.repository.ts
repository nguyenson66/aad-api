import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCashDto } from './dto/create-cash.dto';
import { UpdateCashDto } from './dto/update-cash.dto';
import { CashEntity } from './entities/cash.entity';

@Injectable()
export class CashRepository extends Repository<CashEntity> {
  constructor(private dataSource: DataSource) {
    super(CashEntity, dataSource.createEntityManager());
  }
  createCash = (cashDto: CreateCashDto) => {
    return this.save(cashDto);
  };
  updateCash = (id: string, cashDto: UpdateCashDto) => {
    return this.save({ ...cashDto, id });
  };
  findOneCash = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneCash = (id: string) => {
    return this.delete({ id });
  };
}
