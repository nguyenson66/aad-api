
    import { Module } from '@nestjs/common';
    import { FullNameService } from './full-names.service';
    import { FullNameController } from './full-names.controller';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { FullNameRepository } from './full-names.repository';
    import { FullNameEntity } from "./entities/full-names.entity";
    
    @Module({
      imports: [TypeOrmModule.forFeature([FullNameEntity])],
      controllers: [FullNameController],
      providers: [FullNameService, FullNameRepository],
    })
    export class FullNameModule {}
    