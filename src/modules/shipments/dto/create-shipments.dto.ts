import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateShipmentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  shipPrice: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  type: string;
}
