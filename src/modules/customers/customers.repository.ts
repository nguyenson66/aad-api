import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
import { CustomerEntity } from './entities/customers.entity';

@Injectable()
export class CustomerRepository extends Repository<CustomerEntity> {
  constructor(private dataSource: DataSource) {
    super(CustomerEntity, dataSource.createEntityManager());
  }
  createCustomer = (customerDto: CreateCustomerDto) => {
    return this.save(CustomerDto);
  };
  updateCustomer = (id: string, customerDto: UpdateCustomerDto) => {
    return this.save({ ...customerDto, id });
  };
  findOneCustomer = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneCustomer = (id: string) => {
    return this.delete({ id });
  };
}
