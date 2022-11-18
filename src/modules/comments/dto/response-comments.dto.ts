import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { IComment } from '../interface/comments.interface';

export class ResponseCommentDto implements IComment {
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
