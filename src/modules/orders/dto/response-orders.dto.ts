import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { IOrder } from '../interface/orders.interface';

export class ResponseOrderDto implements IOrder {
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
