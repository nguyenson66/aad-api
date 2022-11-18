
    import { Injectable } from "@nestjs/common";
    import { DataSource, Repository } from 'typeorm';
    import { CreateFullNameDto } from './dto/create-full-names.dto';
    import { UpdateFullNameDto } from './dto/update-full-names.dto';
    import { FullNameEntity } from './entities/full-names.entity';
    
    @Injectable()
    export class FullNameRepository extends Repository<FullNameEntity> {
      constructor(private dataSource: DataSource)
      {
        super(FullNameEntity , dataSource.createEntityManager());
      }
      createFullName = (fullNameDto: CreateFullNameDto) => {
        return this.save(fullNameDto);
      };
      updateFullName = (id: string, fullNameDto: UpdateFullNameDto) => {
        return this.save({ ...fullNameDto, id });
      };
      findOneFullName = (id: string) => {
        return this.findOneOrFail({where: {id: id}});
      };
      removeOneFullName = (id: string) => {
        return this.delete({ id });
      };
    }
          