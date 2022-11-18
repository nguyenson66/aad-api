
  import { ApiProperty } from '@nestjs/swagger';
  import {
    IsBoolean,
    IsNumber,
    IsString,
    IsOptional,
  } from 'class-validator';
  
  export class CreateFullNameDto {
  
                @ApiProperty()
                @IsOptional()
                @IsString()
                customerId: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                firstName: string;
                        
                @ApiProperty()
                @IsOptional()
                @IsString()
                lastName: string;
                        }