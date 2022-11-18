import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { ICard } from '../interface/cards.interface';

export class ResponseCardDto implements ICard {
  @ApiProperty()
  @IsOptional()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  desCardNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  desAccountName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  desBank: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  srcBank: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  srcBankNumber: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  srcAccountName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  total: string;
}
