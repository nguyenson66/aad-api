import { OmitType } from '@nestjs/swagger';
import { Author } from '../entities/author.entity';

export class CreateAuthorDto extends OmitType(Author, ['id', 'books']) {}
