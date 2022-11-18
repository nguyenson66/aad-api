import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comments.repository';
import { CreateCommentDto } from './dto/create-comments.dto';
import { UpdateCommentDto } from './dto/update-comments.dto';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.createComment(createCommentDto);
  }

  findAll() {
    return this.commentRepository.find();
  }

  async findOne(id: string) {
    const checkComment = await this.commentRepository.findOneBy({ id });
    if (!checkComment) {
      throw new NotFoundException();
    } else {
      return checkComment;
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const checkComment = await this.commentRepository.findOneBy({ id });
    if (!checkComment) {
      throw new NotFoundException();
    } else {
      return this.commentRepository.updateComment(id, updateCommentDto);
    }
  }

  async remove(id: string) {
    const checkComment = await this.commentRepository.findOneBy({ id });
    if (!checkComment) {
      throw new NotFoundException();
    } else {
      return this.commentRepository.removeOneComment(id);
    }
  }
}
