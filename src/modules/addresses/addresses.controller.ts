import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressService } from './addresses.service';
import { CreateAddressDto } from './dto/create-addresses.dto';
import { UpdateAddressDto } from './dto/update-addresses.dto';
import { ResponseAddressDto } from './dto/response-addresses.dto';
import { AddressControllerImpl } from './interface/address.controller.interface';
import { IResponse } from 'src/common/utils/format-response';
import { IAddress } from './interface/addresses.interface';

@ApiTags('Address')
@Controller('address')
export class AddressController implements AddressControllerImpl {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOkResponse({ type: ResponseAddressDto })
  create(@Body() createAddressDto: CreateAddressDto): Promise<IAddress> {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseAddressDto] })
  findAll(): Promise<IAddress[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseAddressDto })
  findOne(@Param('id') id: string): Promise<IAddress> {
    return this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseAddressDto })
  update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<IAddress> {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.addressService.remove(id);
  }
}
