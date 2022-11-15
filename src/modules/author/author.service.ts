import { Injectable } from '@nestjs/common';
import { FResponse } from 'src/common/utils/format-response';
import { AuthorRepository } from './author.repository';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorService {
  constructor(private authorRepo: AuthorRepository) {}
  async create(createAuthorDto: CreateAuthorDto) {
    const createdAuthor = await this.authorRepo.save(createAuthorDto);

    return FResponse(true, createdAuthor);
  }

  async findAll() {
    const listAuthors = await this.authorRepo.find({});
    return FResponse(true, listAuthors);
  }

  async findOne(id: string) {
    const foundAuthors = await this.authorRepo.findOneOrThrowEx({ id });
    return FResponse(true, foundAuthors);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const { name, dateOfBirth, pseudonym } = updateAuthorDto;
    const updatedAuthor = await this.authorRepo.findOneAndUpdate(
      { id },
      { name, dateOfBirth, pseudonym },
    );

    if (!updatedAuthor) return FResponse(false, null, 'Update failed');
    return FResponse(true, updatedAuthor, 'Update successful');
  }

  async remove(id: string) {
    const deletedAuthor = await this.authorRepo.findOneAndDelete({ id });
    if (!deletedAuthor) return FResponse(false, null, 'Delete failed');
    return FResponse(true, deletedAuthor, 'Delete successful');
  }
}
