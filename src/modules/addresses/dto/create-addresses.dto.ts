
  import { ApiProperty } from '@nestjs/swagger';
  import {
    IsBoolean,
    IsNumber,
    IsString,
    IsOptional,
  } from 'class-validator';
  
  export class CreateAddressDto {
  
                @ApiProperty()
                @IsOptional()
                @IsString()
                customerId: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                numberHouse: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                street: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                district: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                city: string;
                        }