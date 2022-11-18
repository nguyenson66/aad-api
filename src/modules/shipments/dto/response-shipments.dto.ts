import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { IShipment } from '../interface/shipments.interface';

export class ResponseShipmentDto implements IShipment {
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
