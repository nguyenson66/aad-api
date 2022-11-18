import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-carts.dto';
import { UpdateCartDto } from './dto/update-carts.dto';
import { CartEntity } from './entities/carts.entity';

@Injectable()
export class CartRepository extends Repository<CartEntity> {
  constructor(private dataSource: DataSource) {
    super(CartEntity, dataSource.createEntityManager());
  }
  createCart = (cartDto: CreateCartDto) => {
    return this.save(cartDto);
  };
  updateCart = (id: string, cartDto: UpdateCartDto) => {
    return this.save({ ...cartDto, id });
  };
  findOneCart = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneCart = (id: string) => {
    return this.delete({ id });
  };
}
