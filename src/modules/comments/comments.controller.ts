import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comments.service';
import { CreateCommentDto } from './dto/create-comments.dto';
import { UpdateCommentDto } from './dto/update-comments.dto';
import { ResponseCommentDto } from './dto/response-comments.dto';
import { CommentsControllerImpl } from './interface/comments.controller.interface';

@ApiTags('Comment')
@Controller('comment')
export class CommentController implements CommentsControllerImpl {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiOkResponse({ type: ResponseCommentDto })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  @ApiOkResponse({ type: [ResponseCommentDto] })
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseCommentDto })
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResponseCommentDto })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
