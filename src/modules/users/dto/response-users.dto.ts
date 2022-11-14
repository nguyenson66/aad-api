import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { EGender, EStatus } from '../../../common/constants/common.constants';
import { IUsers } from '../interface/users.interface';

export class ResponseUsersDto implements IUsers {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty({ enum: EStatus })
  @IsEnum(EStatus)
  status: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  dob: Date;

  @ApiProperty({ enum: EGender })
  @IsEnum(EGender)
  gender: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isVerified: boolean;

  @ApiProperty()
  @IsString()
  email: string;
}
