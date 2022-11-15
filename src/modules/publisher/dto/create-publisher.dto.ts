import { OmitType, PickType } from '@nestjs/swagger';
import { Publisher } from '../entities/publisher.entity';

export class CreatePublisherDto extends OmitType(Publisher, ['id', 'books']) {}
