import { Injectable } from '@nestjs/common';
import { IResponse } from 'src/common/utils/format-response';
import { DataSource, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-addresses.dto';
import { UpdateAddressDto } from './dto/update-addresses.dto';
import { AddressEntity } from './entities/addresses.entity';
import { IAddress } from './interface/addresses.interface';

@Injectable()
export class AddressRepository extends Repository<AddressEntity> {
  constructor(private dataSource: DataSource) {
    super(AddressEntity, dataSource.createEntityManager());
  }
  createAddress = (addressDto: CreateAddressDto): Promise<IAddress> => {
    return this.save(addressDto);
  };
  updateAddress = (id: string, addressDto: UpdateAddressDto) => {
    return this.save({ ...addressDto, id });
  };
  findOneAddress = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneAddress = (id: string) => {
    return this.delete({ id });
  };
}
