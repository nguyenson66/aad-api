import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comments.dto';
import { UpdateCommentDto } from './dto/update-comments.dto';
import { CommentEntity } from './entities/comments.entity';

@Injectable()
export class CommentRepository extends Repository<CommentEntity> {
  constructor(private dataSource: DataSource) {
    super(CommentEntity, dataSource.createEntityManager());
  }
  createComment = (commentDto: CreateCommentDto) => {
    return this.save(commentDto);
  };
  updateComment = (id: string, commentDto: UpdateCommentDto) => {
    return this.save({ ...commentDto, id });
  };
  findOneComment = (id: string) => {
    return this.findOneOrFail({ where: { id: id } });
  };
  removeOneComment = (id: string) => {
    return this.delete({ id });
  };
}
