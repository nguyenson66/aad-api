import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { BookControllerImpl } from './book.controller.interface';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
@ApiTags('Books')
export class BookController implements BookControllerImpl {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  @ApiConsumes('application/x-www-form-urlencoded', 'application/json')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.bookService.remove(id);
  }
}
