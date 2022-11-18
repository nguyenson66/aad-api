import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-cards.dto';
import { UpdateCardDto } from './dto/update-cards.dto';
import { CardEntity } from './entities/cards.entity';

@Injectable()
export class CardRepository extends Repository<CardEntity> {
  constructor(private dataSource: DataSource) {
    super(CardEntity, dataSource.createEntityManager());
  }
  createCard = (cardDto: CreateCardDto) => {
    return this.save(cardDto);
  };
  updateCard = (id: string, cardDto: UpdateCardDto) => {
    return this.save({ ...cardDto, id });
  };
  findOneCard = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneCard = (id: string) => {
    return this.delete({ id });
  };
}
