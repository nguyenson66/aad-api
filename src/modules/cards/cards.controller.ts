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
import { CardService } from './cards.service';
import { CreateCardDto } from './dto/create-cards.dto';
import { UpdateCardDto } from './dto/update-cards.dto';
import { ResponseCardDto } from './dto/response-cards.dto';
import { CardControllerImpl } from './interface/card.controller.interface';

@ApiTags('Card')
@Controller('card')
export class CardController implements CardControllerImpl {
  constructor(private readonly cardService: CardService) {}

  @Post()
  @ApiOkResponse({ type: ResponseCardDto })
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseCardDto] })
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseCardDto })
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseCardDto })
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardService.update(id, updateCardDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.cardService.remove(id);
  }
}
