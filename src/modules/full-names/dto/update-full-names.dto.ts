
    import { PartialType } from '@nestjs/mapped-types';
    import { CreateFullNameDto } from './create-full-names.dto';
    
    export class UpdateFullNameDto extends PartialType(CreateFullNameDto) {}
      