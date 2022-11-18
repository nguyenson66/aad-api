import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { ICustomer } from '../interface/customers.interface';

export class ResponseCustomerDto implements ICustomer {
  @ApiProperty()
  @IsOptional()
  @IsString()
  dateOfBirth: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  member: string;
}
