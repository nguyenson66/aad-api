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
import { ItemService } from './items.service';
import { CreateItemDto } from './dto/create-items.dto';
import { UpdateItemDto } from './dto/update-items.dto';
import { ResponseItemDto } from './dto/response-items.dto';
import { ItemControllerImpl } from './interface/items.controller.interface';

@ApiTags('Item')
@Controller('item')
export class ItemController implements ItemControllerImpl {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @ApiOkResponse({ type: ResponseItemDto })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseItemDto] })
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseItemDto })
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseItemDto })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.itemService.remove(id);
  }
}
