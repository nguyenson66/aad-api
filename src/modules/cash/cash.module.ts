import { Module } from '@nestjs/common';
import { CashService } from './cash.service';
import { CashController } from './cash.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashRepository } from './cash.repository';
import { CashEntity } from './entities/cash.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CashEntity])],
  controllers: [CashController],
  providers: [CashService, CashRepository],
})
export class CashModule {}
