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
import { OrderService } from './orders.service';
import { CreateOrderDto } from './dto/create-orders.dto';
import { UpdateOrderDto } from './dto/update-orders.dto';
import { ResponseOrderDto } from './dto/response-orders.dto';
import { OrderControllerImpl } from './interface/orders.controller.interface';

@ApiTags('Order')
@Controller('order')
export class OrderController implements OrderControllerImpl {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOkResponse({ type: ResponseOrderDto })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseOrderDto] })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseOrderDto })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseOrderDto })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
