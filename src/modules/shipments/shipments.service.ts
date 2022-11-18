import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShipmentRepository } from './shipments.repository';
import { CreateShipmentDto } from './dto/create-shipments.dto';
import { UpdateShipmentDto } from './dto/update-shipments.dto';

@Injectable()
export class ShipmentService {
  constructor(private readonly shipmentRepository: ShipmentRepository) {}

  async create(createShipmentDto: CreateShipmentDto) {
    return this.shipmentRepository.createShipment(createShipmentDto);
  }

  findAll() {
    return this.shipmentRepository.find();
  }

  async findOne(id: string) {
    const checkShipment = await this.shipmentRepository.findOneBy({ id });
    if (!checkShipment) {
      throw new NotFoundException();
    } else {
      return checkShipment;
    }
  }

  async update(id: string, updateShipmentDto: UpdateShipmentDto) {
    const checkShipment = await this.shipmentRepository.findOneBy({ id });
    if (!checkShipment) {
      throw new NotFoundException();
    } else {
      return this.shipmentRepository.updateShipment(id, updateShipmentDto);
    }
  }

  async remove(id: string) {
    const checkShipment = await this.shipmentRepository.findOneBy({ id });
    if (!checkShipment) {
      throw new NotFoundException();
    } else {
      return this.shipmentRepository.removeOneShipment(id);
    }
  }
}
