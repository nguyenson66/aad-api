import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-orders.dto';
import { UpdateOrderDto } from './dto/update-orders.dto';
import { OrderEntity } from './entities/orders.entity';

@Injectable()
export class OrderRepository extends Repository<OrderEntity> {
  constructor(private dataSource: DataSource) {
    super(OrderEntity, dataSource.createEntityManager());
  }
  createOrder = (orderDto: CreateOrderDto) => {
    return this.save(orderDto);
  };
  updateOrder = (id: string, orderDto: UpdateOrderDto) => {
    return this.save({ ...orderDto, id });
  };
  findOneOrder = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneOrder = (id: string) => {
    return this.delete({ id });
  };
}
