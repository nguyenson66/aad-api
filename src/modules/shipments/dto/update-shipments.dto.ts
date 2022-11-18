import { PartialType } from '@nestjs/mapped-types';
import { CreateShipmentDto } from './create-shipments.dto';

export class UpdateShipmentDto extends PartialType(CreateShipmentDto) {}
