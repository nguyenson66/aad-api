
    import { Injectable, NotFoundException } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { AddressRepository } from './addresses.repository';
    import { CreateAddressDto } from './dto/create-addresses.dto';
    import { UpdateAddressDto } from './dto/update-addresses.dto';
    
    @Injectable()
    export class AddressService {
      constructor(
        private readonly addressRepository: AddressRepository,
      ) {}

      async create(createAddressDto: CreateAddressDto) {
        return this.addressRepository.createAddress(createAddressDto);
      }
    
      findAll() {
        return this.addressRepository.find();
      }
    
      async findOne(id: string) {
        const checkAddress = await this.addressRepository.findOneBy({id});
        if (!checkAddress) { 
          throw new NotFoundException(); 
        } else {
          return checkAddress;
        }
      }
    
      async update(id: string, updateAddressDto: UpdateAddressDto) {
        const checkAddress = await this.addressRepository.findOneBy({id});
        if(!checkAddress) {
          throw new NotFoundException();
        } else {
          return this.addressRepository.updateAddress(id, updateAddressDto);
        }
      }
    
      async remove(id: string) {
        const checkAddress = await this.addressRepository.findOneBy({id});
        if(!checkAddress) {
          throw new NotFoundException();
        } else {
          return this.addressRepository.removeOneAddress(id);
        }
      }
    }
          