import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateCartDto {
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
