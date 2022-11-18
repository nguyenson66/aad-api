import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { IItem } from '../interface/items.interface';

export class ResponseItemDto implements IItem {
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
