import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartRepository } from './carts.repository';
import { CreateCartDto } from './dto/create-carts.dto';
import { UpdateCartDto } from './dto/update-carts.dto';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  async create(createCartDto: CreateCartDto) {
    return this.cartRepository.createCart(createCartDto);
  }

  findAll() {
    return this.cartRepository.find();
  }

  async findOne(id: string) {
    const checkCart = await this.cartRepository.findOneBy({ id });
    if (!checkCart) {
      throw new NotFoundException();
    } else {
      return checkCart;
    }
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    const checkCart = await this.cartRepository.findOneBy({ id });
    if (!checkCart) {
      throw new NotFoundException();
    } else {
      return this.cartRepository.updateCart(id, updateCartDto);
    }
  }

  async remove(id: string) {
    const checkCart = await this.cartRepository.findOneBy({ id });
    if (!checkCart) {
      throw new NotFoundException();
    } else {
      return this.cartRepository.removeOneCart(id);
    }
  }
}
