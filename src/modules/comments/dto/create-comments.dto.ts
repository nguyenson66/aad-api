import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  bookId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  customerId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;
}
