import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardRepository } from './cards.repository';
import { CreateCardDto } from './dto/create-cards.dto';
import { UpdateCardDto } from './dto/update-cards.dto';

@Injectable()
export class CardService {
  constructor(private readonly cardRepository: CardRepository) {}

  async create(createCardDto: CreateCardDto) {
    return this.cardRepository.createCard(createCardDto);
  }

  findAll() {
    return this.cardRepository.find();
  }

  async findOne(id: string) {
    const checkCard = await this.cardRepository.findOneBy({ id });
    if (!checkCard) {
      throw new NotFoundException();
    } else {
      return checkCard;
    }
  }

  async update(id: string, updateCardDto: UpdateCardDto) {
    const checkCard = await this.cardRepository.findOneBy({ id });
    if (!checkCard) {
      throw new NotFoundException();
    } else {
      return this.cardRepository.updateCard(id, updateCardDto);
    }
  }

  async remove(id: string) {
    const checkCard = await this.cardRepository.findOneBy({ id });
    if (!checkCard) {
      throw new NotFoundException();
    } else {
      return this.cardRepository.removeOneCard(id);
    }
  }
}
