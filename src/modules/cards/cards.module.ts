import { Module } from '@nestjs/common';
import { CardService } from './cards.service';
import { CardController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardRepository } from './cards.repository';
import { CardEntity } from './entities/cards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  controllers: [CardController],
  providers: [CardService, CardRepository],
})
export class CardModule {}
