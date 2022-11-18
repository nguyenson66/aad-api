import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateShipmentDto } from './dto/create-shipments.dto';
import { UpdateShipmentDto } from './dto/update-shipments.dto';
import { ShipmentEntity } from './entities/shipments.entity';

@Injectable()
export class ShipmentRepository extends Repository<ShipmentEntity> {
  constructor(private dataSource: DataSource) {
    super(ShipmentEntity, dataSource.createEntityManager());
  }
  createShipment = (shipmentDto: CreateShipmentDto) => {
    return this.save(shipmentDto);
  };
  updateShipment = (id: string, shipmentDto: UpdateShipmentDto) => {
    return this.save({ ...shipmentDto, id });
  };
  findOneShipment = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneShipment = (id: string) => {
    return this.delete({ id });
  };
}
