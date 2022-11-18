
    import { Module } from '@nestjs/common';
    import { AddressService } from './addresses.service';
    import { AddressController } from './addresses.controller';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { AddressRepository } from './addresses.repository';
    import { AddressEntity } from "./entities/addresses.entity";
    
    @Module({
      imports: [TypeOrmModule.forFeature([AddressEntity])],
      controllers: [AddressController],
      providers: [AddressService, AddressRepository],
    })
    export class AddressModule {}
    