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
import { CashService } from './cash.service';
import { CreateCashDto } from './dto/create-cash.dto';
import { UpdateCashDto } from './dto/update-cash.dto';
import { ResponseCashDto } from './dto/response-cash.dto';

@ApiTags('Cash')
@Controller('cash')
export class CashController {
  constructor(private readonly cashService: CashService) {}

  @Post()
  @ApiOkResponse({ type: ResponseCashDto })
  create(@Body() createCashDto: CreateCashDto) {
    return this.cashService.create(createCashDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseCashDto] })
  findAll() {
    return this.cashService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseCashDto })
  findOne(@Param('id') id: string) {
    return this.cashService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseCashDto })
  update(@Param('id') id: string, @Body() updateCashDto: UpdateCashDto) {
    return this.cashService.update(id, updateCashDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.cashService.remove(id);
  }
}
