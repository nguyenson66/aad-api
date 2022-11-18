import { Module } from '@nestjs/common';
import { ShipmentService } from './shipments.service';
import { ShipmentController } from './shipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentRepository } from './shipments.repository';
import { ShipmentEntity } from './entities/shipments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShipmentEntity])],
  controllers: [ShipmentController],
  providers: [ShipmentService, ShipmentRepository],
})
export class ShipmentModule {}
