
    import { Injectable, NotFoundException } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { FullNameRepository } from './full-names.repository';
    import { CreateFullNameDto } from './dto/create-full-names.dto';
    import { UpdateFullNameDto } from './dto/update-full-names.dto';
    
    @Injectable()
    export class FullNameService {
      constructor(
        private readonly fullNameRepository: FullNameRepository,
      ) {}

      async create(createFullNameDto: CreateFullNameDto) {
        return this.fullNameRepository.createFullName(createFullNameDto);
      }
    
      findAll() {
        return this.fullNameRepository.find();
      }
    
      async findOne(id: string) {
        const checkFullName = await this.fullNameRepository.findOneBy({id});
        if (!checkFullName) { 
          throw new NotFoundException(); 
        } else {
          return checkFullName;
        }
      }
    
      async update(id: string, updateFullNameDto: UpdateFullNameDto) {
        const checkFullName = await this.fullNameRepository.findOneBy({id});
        if(!checkFullName) {
          throw new NotFoundException();
        } else {
          return this.fullNameRepository.updateFullName(id, updateFullNameDto);
        }
      }
    
      async remove(id: string) {
        const checkFullName = await this.fullNameRepository.findOneBy({id});
        if(!checkFullName) {
          throw new NotFoundException();
        } else {
          return this.fullNameRepository.removeOneFullName(id);
        }
      }
    }
          