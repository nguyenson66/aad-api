import { PickType } from '@nestjs/swagger';

export class CreateBookDto {
  title: string;
  publishYear: Date;
  numberOfPages: number;
  language: string;
}
