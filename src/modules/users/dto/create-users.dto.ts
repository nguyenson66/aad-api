import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  IsEmail,
  Matches,
} from 'class-validator';
import { EGender } from 'src/common/constants/common.constants';

export class CreateUsersDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsDateString()
  dob: Date;

  @ApiProperty({ enum: EGender })
  @IsOptional()
  @IsEnum(EGender)
  gender: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
}
