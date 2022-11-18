import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-orders.dto';
import { UpdateOrderDto } from './dto/update-orders.dto';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.createOrder(createOrderDto);
  }

  findAll() {
    return this.orderRepository.find();
  }

  async findOne(id: string) {
    const checkOrder = await this.orderRepository.findOneBy({ id });
    if (!checkOrder) {
      throw new NotFoundException();
    } else {
      return checkOrder;
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const checkOrder = await this.orderRepository.findOneBy({ id });
    if (!checkOrder) {
      throw new NotFoundException();
    } else {
      return this.orderRepository.updateOrder(id, updateOrderDto);
    }
  }

  async remove(id: string) {
    const checkOrder = await this.orderRepository.findOneBy({ id });
    if (!checkOrder) {
      throw new NotFoundException();
    } else {
      return this.orderRepository.removeOneOrder(id);
    }
  }
}
