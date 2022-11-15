import { Type } from 'class-transformer';
import { IsDateString, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsDateString()
  publishYear: Date;

  @IsNumber()
  @Type(() => Number)
  numberOfPages: number;

  @IsString()
  language: string;

  @IsUUID()
  categoryId: string;
}
