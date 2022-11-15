import { Injectable } from '@nestjs/common';
import { FResponse } from 'src/common/utils/format-response';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PublisherRepository } from './publisher.repository';

@Injectable()
export class PublisherService {
  constructor(private pubRepo: PublisherRepository) {}
  async create(createPublisherDto: CreatePublisherDto) {
    const createdPub = await this.pubRepo.save(createPublisherDto);
    return FResponse(true, createdPub);
  }

  async findAll() {
    const listPubs = await this.pubRepo.find({});
    return FResponse(true, listPubs);
  }

  async findOne(id: string) {
    const foundPub = await this.pubRepo.findOneOrThrowEx({ id });

    return FResponse(true, foundPub);
  }

  async update(id: string, updatePublisherDto: UpdatePublisherDto) {
    const { name } = updatePublisherDto;
    const updatedPub = await this.pubRepo.findOneAndUpdate({ id }, { name });
    if (!updatedPub) return FResponse(false, null, 'Update failed');
    return FResponse(true, updatedPub, 'Update successful');
  }

  async remove(id: string) {
    const deletedPub = await this.pubRepo.findOneAndDelete({ id });
    if (!deletedPub) return FResponse(false, null, 'Delete failed');
    return FResponse(true, deletedPub, 'Delete Successfull');
  }
}
