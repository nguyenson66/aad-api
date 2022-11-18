import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from './customers.repository';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.createCustomer(createCustomerDto);
  }

  findAll() {
    return this.customerRepository.find();
  }

  async findOne(id: string) {
    const checkCustomer = await this.customerRepository.findOneBy({ id });
    if (!checkCustomer) {
      throw new NotFoundException();
    } else {
      return checkCustomer;
    }
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const checkCustomer = await this.customerRepository.findOneBy({ id });
    if (!checkCustomer) {
      throw new NotFoundException();
    } else {
      return this.customerRepository.updateCustomer(id, updateCustomerDto);
    }
  }

  async remove(id: string) {
    const checkCustomer = await this.customerRepository.findOneBy({ id });
    if (!checkCustomer) {
      throw new NotFoundException();
    } else {
      return this.customerRepository.removeOneCustomer(id);
    }
  }
}
