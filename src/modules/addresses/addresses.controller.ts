
    import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
    import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
    import { AddressService } from './addresses.service';
    import { CreateAddressDto } from './dto/create-addresses.dto';
    import { UpdateAddressDto } from './dto/update-addresses.dto';
    import { ResponseAddressDto } from './dto/response-addresses.dto';
    
    @ApiTags('Address')
    @Controller('address')
    export class AddressController {
      constructor(private readonly addressService: AddressService) {}
    
      @Post()
      @ApiOkResponse({ type: ResponseAddressDto })
      create(@Body() createAddressDto: CreateAddressDto) {
        return this.addressService.create(createAddressDto);
      }
    
      @Get()
      @ApiOkResponse({ type: [ResponseAddressDto] })
      findAll() {
        return this.addressService.findAll();
      }
    
      @Get(':id')
      @ApiOkResponse({ type: ResponseAddressDto })
      findOne(@Param('id') id: string) {
        return this.addressService.findOne(id);
      }
    
      @Patch(':id')
      @ApiOkResponse({ type: ResponseAddressDto })
      update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
        return this.addressService.update(id, updateAddressDto);
      }
    
      @Delete(':id')
      @ApiOkResponse()
      remove(@Param('id') id: string) {
        return this.addressService.remove(id);
      }
    }
      