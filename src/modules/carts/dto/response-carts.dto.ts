import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { ICart } from '../interface/carts.interface';

export class ResponseCartDto implements ICart {
  @ApiProperty()
  @IsOptional()
  @IsString()
  customerId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  itemId: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  amount: number;
}
