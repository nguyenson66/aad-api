import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FResponse } from 'src/common/utils/format-response';
import { Repository } from 'typeorm';
import { BookRepository } from './book.repository';
import { BookServiceImpl } from './book.service.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService implements BookServiceImpl {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(createBookDto: CreateBookDto) {
    const createdBook = await this.bookRepository.save(createBookDto);

    return FResponse(true, createdBook);
  }

  async findAll() {
    const listBooks = await this.bookRepository.find({});
    return FResponse(true, listBooks);
  }

  async findOne(id: string) {
    const foundBook = await this.bookRepository.findOneOrThrowEx({ id });
    return FResponse(true, foundBook);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const updatedBook = await this.bookRepository.findOneAndUpdate(
      { id },
      updateBookDto,
    );
    return FResponse(true, updatedBook);
  }

  async remove(id: string) {
    const removedBook = await this.bookRepository.findOneAndDelete({ id });
    return FResponse(true, removedBook);
  }
}
