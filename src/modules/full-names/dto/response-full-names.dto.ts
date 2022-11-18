
    import { ApiProperty } from '@nestjs/swagger';
    import {
      IsBoolean,
      IsNumber,
      IsString,
      IsOptional,
    } from 'class-validator';
    import { IFullName } from '../interface/full-names.interface';
    
    export class ResponseFullNameDto implements IFullName {
    
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