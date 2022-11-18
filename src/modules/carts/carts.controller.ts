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
import { CartService } from './carts.service';
import { CreateCartDto } from './dto/create-carts.dto';
import { UpdateCartDto } from './dto/update-carts.dto';
import { ResponseCartDto } from './dto/response-carts.dto';
import { CartControllerImpl } from './interface/carts.controller.interface';

@ApiTags('Cart')
@Controller('cart')
export class CartController implements CartControllerImpl {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOkResponse({ type: ResponseCartDto })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseCartDto] })
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseCartDto })
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseCartDto })
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
