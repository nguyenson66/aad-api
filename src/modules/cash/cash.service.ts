import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashRepository } from './cash.repository';
import { CreateCashDto } from './dto/create-cash.dto';
import { UpdateCashDto } from './dto/update-cash.dto';

@Injectable()
export class CashService {
  constructor(private readonly cashRepository: CashRepository) {}

  async create(createCashDto: CreateCashDto) {
    return this.cashRepository.createCash(createCashDto);
  }

  findAll() {
    return this.cashRepository.find();
  }

  async findOne(id: string) {
    const checkCash = await this.cashRepository.findOneBy({ id });
    if (!checkCash) {
      throw new NotFoundException();
    } else {
      return checkCash;
    }
  }

  async update(id: string, updateCashDto: UpdateCashDto) {
    const checkCash = await this.cashRepository.findOneBy({ id });
    if (!checkCash) {
      throw new NotFoundException();
    } else {
      return this.cashRepository.updateCash(id, updateCashDto);
    }
  }

  async remove(id: string) {
    const checkCash = await this.cashRepository.findOneBy({ id });
    if (!checkCash) {
      throw new NotFoundException();
    } else {
      return this.cashRepository.removeOneCash(id);
    }
  }
}
