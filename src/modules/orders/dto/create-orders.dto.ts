import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  cashId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cartId: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  totalPrice: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  status: string;
}
