import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateItemDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  bookId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  barcode: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price: number;
}
