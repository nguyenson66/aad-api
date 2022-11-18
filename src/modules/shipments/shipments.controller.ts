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
import { ShipmentService } from './shipments.service';
import { CreateShipmentDto } from './dto/create-shipments.dto';
import { UpdateShipmentDto } from './dto/update-shipments.dto';
import { ResponseShipmentDto } from './dto/response-shipments.dto';
import { ShipmentControllerImpl } from './interface/shipments.controller.interface';

@ApiTags('Shipment')
@Controller('shipment')
export class ShipmentController implements ShipmentControllerImpl {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  @ApiOkResponse({ type: ResponseShipmentDto })
  create(@Body() createShipmentDto: CreateShipmentDto) {
    return this.shipmentService.create(createShipmentDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseShipmentDto] })
  findAll() {
    return this.shipmentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseShipmentDto })
  findOne(@Param('id') id: string) {
    return this.shipmentService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseShipmentDto })
  update(
    @Param('id') id: string,
    @Body() updateShipmentDto: UpdateShipmentDto,
  ) {
    return this.shipmentService.update(id, updateShipmentDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.shipmentService.remove(id);
  }
}
