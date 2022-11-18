import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { ICash } from '../interface/cash.interface';

export class ResponseCashDto implements ICash {
  @ApiProperty()
  @IsOptional()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  total: number;
}
