
    import { PartialType } from '@nestjs/mapped-types';
    import { CreateAddressDto } from './create-addresses.dto';
    
    export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
      